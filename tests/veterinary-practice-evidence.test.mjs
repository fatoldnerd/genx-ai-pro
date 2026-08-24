import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync, readdirSync } from "node:fs";
import { test } from "node:test";

const base = new URL("../content/client-zero/veterinary-practice-evidence-pack/", import.meta.url);
const read = (name) => readFileSync(new URL(name, base), "utf8");
const sha256 = (text) => createHash("sha256").update(text).digest("hex");
const syntheticBanner = /^> \*\*Classification:\*\* Clearly synthetic test material\./m;
const PACK_SHA256 = {
  "00-start-here.md": "f4a84d25f277ed577fa0b9a18b15b97fcb50c55dce7ad1f63eed2124f1d3f251",
  "01-synthetic-practice-and-message-input.md": "5a42ee91eefe86617837a6a49d8b89ae16c0dab484eb0369d0929830a1c09166",
  "02-client-message-triage-output.md": "723f8c17a818acba5aeec1de0e0b81658dc7c908c46da4a2bd79b9883c0e7f7b",
  "03-human-review-matrix-output.md": "9d15665c7767fcceb5da7c709bd81a6a86a96da19a67c2f4edfdc5834b948aa2",
  "04-triage-qa.md": "4166e68f308b729fb4545e633ea997add9b8c87cb93222ec9224ec0ebb8cf3d9",
  "05-review-matrix-qa.md": "56992ccaebd9888f0bf2f2f0813770c6155d5d083ae34d47b5e9ede5105bce9c",
  "06-review-log.md": "82e851883d3c457383b81712f39f202acf53ebf51544f3519c3467bc55787c6d",
};
const TRIAGE_SHA256 = PACK_SHA256["02-client-message-triage-output.md"];
const MATRIX_SHA256 = PACK_SHA256["03-human-review-matrix-output.md"];

const expectedFiles = [
  "00-start-here.md",
  "01-synthetic-practice-and-message-input.md",
  "02-client-message-triage-output.md",
  "03-human-review-matrix-output.md",
  "04-triage-qa.md",
  "05-review-matrix-qa.md",
  "06-review-log.md",
].sort();

const section = (text, startHeading, endHeading) => {
  const start = text.indexOf(startHeading);
  const end = text.indexOf(endHeading, start + startHeading.length);
  assert.notEqual(start, -1, `Missing section: ${startHeading}`);
  assert.notEqual(end, -1, `Missing section boundary: ${endHeading}`);
  return text.slice(start, end);
};

const tableCells = (line) => line.split("|").slice(1, -1).map((cell) => cell.trim());

const expectedPriorities = {
  V01: "P0",
  V02: "P0",
  V03: "P1",
  V04: "P1",
  V05: "P4",
  V06: "P4",
  V07: "P2",
  V08: "P2",
  V09: "P4",
  V10: "P1",
};

test("veterinary evidence pack has the exact expected inventory", () => {
  assert.deepEqual(readdirSync(base).sort(), expectedFiles);
  assert.deepEqual(Object.keys(PACK_SHA256).sort(), expectedFiles);
  for (const file of expectedFiles) {
    assert.equal(sha256(read(file)), PACK_SHA256[file], `${file} changed without re-review`);
  }
});

test("synthetic veterinary input defines ten messages and hard clinical boundaries", () => {
  const input = read("01-synthetic-practice-and-message-input.md");
  assert.match(input, syntheticBanner);
  for (let number = 1; number <= 10; number += 1) {
    assert.match(input, new RegExp(`### Message V${String(number).padStart(2, "0")}\\b`));
  }
  assert.match(input, /must not diagnose/i);
  assert.match(input, /must not.*authorize medication/i);
  assert.match(input, /must not.*state that an animal is safe to wait/i);
  assert.match(input, /must not.*send a message/i);
});

test("triage queue contains exactly ten canonical message priorities", () => {
  const output = read("02-client-message-triage-output.md");
  assert.match(output, syntheticBanner);
  const queueSection = section(output, "## 1. Priority queue", "## 2. Severity rationale");
  const rows = queueSection
    .split("\n")
    .filter((line) => /^\|\s*\d+\s*\|\s*V\d{2}\s*\|/.test(line))
    .map(tableCells);

  assert.equal(rows.length, 10);
  assert.deepEqual(rows.map((cells) => cells[1]).sort(), Object.keys(expectedPriorities).sort());
  for (const cells of rows) {
    const id = cells[1];
    assert.match(cells[4], new RegExp(`\\b${expectedPriorities[id]}\\b`), `${id} has wrong priority`);
    if (["V01", "V02"].includes(id)) assert.match(cells[5], /Dr\.? Hannah Cole|clinical escalation/i);
    if (["V07", "V08"].includes(id)) assert.match(cells[5], /Priya Shah|manager/i);
  }
});

test("all ten client drafts have independent approval gates and no affirmative unsafe action", () => {
  const output = read("02-client-message-triage-output.md");
  const draftSection = section(output, "## 3. Draft responses", "## 4. Escalation list");
  const blocks = draftSection
    .split(/\n### /)
    .slice(1)
    .map((block) => ({ id: block.slice(0, 3), body: block }));

  assert.equal(blocks.length, 10);
  assert.deepEqual(blocks.map(({ id }) => id).sort(), Object.keys(expectedPriorities).sort());
  assert.equal((draftSection.match(/HUMAN APPROVAL REQUIRED BEFORE SENDING/g) || []).length, 10);

  const forbiddenAffirmativePatterns = [
    /\b(?:the diagnosis is|diagnosed as|appears to have|likely has)\b/i,
    /\b(?:you should|you can|please) (?:give|administer|start|stop|increase|decrease)\b/i,
    /\b(?:refill|prescription|medication|dose) (?:is|has been) (?:approved|authorised|authorized)\b/i,
    /\b(?:it|he|she|your pet|the animal) (?:is|should be) safe to wait\b/i,
    /\b(?:can|is safe to) wait until\b/i,
    /\byour appointment (?:has been|is) (?:booked|changed|cancelled|rescheduled)\b/i,
    /\b(?:the|your) (?:record|file) (?:has been|was) (?:updated|changed|amended)\b/i,
    /\b(?:the price is|this will cost|the cost will be)\s*£/i,
    /\bwe will (?:respond|call|contact|resolve) (?:within|by)\b/i,
    /\b(?:the message|your reply|our reply) (?:has been|was) sent\b/i,
  ];

  for (const { id, body } of blocks) {
    assert.equal((body.match(/HUMAN APPROVAL REQUIRED BEFORE SENDING/g) || []).length, 1, `${id} approval gate`);
    const clientDraftOnly = body
      .split("\n")
      .filter((line) => !line.startsWith("**Do not send as written:**"))
      .join("\n");
    for (const pattern of forbiddenAffirmativePatterns) {
      assert.doesNotMatch(clientDraftOnly, pattern, `${id} contains unsafe affirmative language`);
    }
  }

  assert.match(output, /No response-time SLA is supplied|response time.*not supplied/i);
});

test("human-review matrix contains each canonical message gate and qualified reviewer", () => {
  const output = read("03-human-review-matrix-output.md");
  assert.match(output, syntheticBanner);
  assert.match(output, /Priya Shah/);
  assert.match(output, /Dr\.? Hannah Cole/);
  assert.match(output, /Marcus Lee/);
  const matrixSection = section(output, "## 1. Review matrix", "## 2. Risk tier definitions");
  const rows = matrixSection
    .split("\n")
    .filter((line) => /^\|\s*\*\*V\d{2}\b/.test(line))
    .map(tableCells);

  assert.equal(rows.length, 10);
  const rowMap = Object.fromEntries(rows.map((cells) => [cells[0].match(/V\d{2}/)[0], cells.join(" | ")]));
  assert.deepEqual(Object.keys(rowMap).sort(), Object.keys(expectedPriorities).sort());
  for (const [id, priority] of Object.entries(expectedPriorities)) {
    assert.match(rowMap[id], new RegExp(`\\b${priority}\\b`), `${id} matrix priority`);
  }
  for (const id of ["V01", "V02", "V03", "V04", "V10"]) {
    assert.match(rowMap[id], /Dr\.? Hannah(?: Cole)?|qualified clinical review/i, `${id} lacks clinical reviewer`);
  }
  for (const id of ["V07", "V08"]) {
    assert.match(rowMap[id], /Priya Shah|manager review/i, `${id} lacks manager reviewer`);
  }

  assert.match(output, /No AI output may diagnose/i);
  assert.match(output, /Clinical content always requires qualified human review/i);
  assert.match(output, /AI never sends|may not.*send externally/i);
  assert.match(output, /External-use boundary/i);
});

test("QA reports preserve immutable hashes, exact scores, and affirmative verdicts", () => {
  const triage = read("02-client-message-triage-output.md");
  const matrix = read("03-human-review-matrix-output.md");
  assert.equal(sha256(triage), TRIAGE_SHA256);
  assert.equal(sha256(matrix), MATRIX_SHA256);

  const pairs = [
    {
      qa: read("04-triage-qa.md"),
      hash: TRIAGE_SHA256,
      score: /^\*\*99\/100\b/m,
      verdict: /^\*\*PASS\s+—\s+ACCEPT for handoff as a private, controlled synthetic workflow artifact\.\*\*/m,
    },
    {
      qa: read("05-review-matrix-qa.md"),
      hash: MATRIX_SHA256,
      score: /^\*\*98\/100\b/m,
      verdict: /^\*\*HANDOFF VERDICT: PASS\s+—\s+ACCEPT for inclusion in the private synthetic veterinary evidence pack and for the recommended internal tabletop review\.\*\*/m,
    },
  ];

  for (const { qa, hash, score, verdict } of pairs) {
    assert.match(qa, /QA score/i);
    assert.match(qa, score);
    assert.match(qa, verdict);
    assert.match(qa, /Blocking issues/i);
    assert.match(qa, /Human-review checklist/i);
    assert.equal((qa.match(new RegExp(`Reviewed artifact SHA256: ${hash}`, "gi")) || []).length, 1);
  }
});

test("review log preserves the synthetic proof boundary and pending decision", () => {
  const log = read("06-review-log.md");
  assert.match(log, /not customer evidence/i);
  assert.match(log, /not.*clinical safety/i);
  const decisionFields = [...log.matchAll(/^## Brad decision:\s*(.+)$/gm)].map((match) => match[1].trim());
  assert.deepEqual(decisionFields, ["Pending"]);
  assert.doesNotMatch(
    log,
    /\bBrad (?:has )?approved\b|\b(?:decision|approval):\s*approved\b|\bapproved for (?:prospect|external|live|clinical|deployment)\b|\b(?:live|external|clinical|deployment) use (?:is )?approved\b/i,
  );
  assert.match(log, /99\/100, PASS - ACCEPT/);
  assert.match(log, /98\/100, PASS - ACCEPT/);
});
