import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const read = (name) =>
  readFileSync(
    new URL(`../content/client-zero/evidence-pack/${name}`, import.meta.url),
    "utf8",
  );

const syntheticBoundary = /^> \*\*Classification:\*\* Clearly synthetic test material\./m;

const sha256 = (content) => createHash("sha256").update(content).digest("hex");

test("both discovery inputs are explicitly synthetic", () => {
  assert.match(read("case-a-qualified-input.md"), syntheticBoundary);
  assert.match(read("case-b-no-go-input.md"), syntheticBoundary);
});

test("qualified case discovery output is complete and proposal-ready", () => {
  const output = read("case-a-discovery-gap-output.md");
  assert.match(output, syntheticBoundary);
  assert.match(output, /Qualification gaps/i);
  assert.match(output, /Priority discovery questions/i);
  assert.match(output, /Next meeting plan/i);
  assert.match(output, /^\*\*CONDITIONALLY READY FOR A REVIEWABLE PROPOSAL\b/m);
});

test("no-go case is rejected before proposal generation", () => {
  const output = read("case-b-discovery-gap-output.md");
  assert.match(output, syntheticBoundary);
  assert.match(output, /^\*\*No-go for the requested implementation\./m);
  assert.match(output, /^\*\*No-go for the requested implementation\. Do not run the Proposal and SOW Generator\.\*\*/m);
  assert.doesNotMatch(output, /Executive proposal summary/i);
});

test("qualified proposal contains scope, price, exclusions, and human review", () => {
  const output = read("case-a-proposal-output.md");
  assert.match(output, syntheticBoundary);
  assert.match(output, /Proposal readiness diagnosis/i);
  assert.match(output, /Northstar Cyber Advisory/i);
  assert.match(output, /£5,000/i);
  assert.match(output, /Scope of work/i);
  assert.match(output, /Exclusions/i);
  assert.match(output, /Human review checklist/i);
  assert.match(output, /desired changes, not guaranteed outcomes/i);
  assert.match(output, /Guaranteed time savings, revenue, conversion, adoption, or accuracy/i);
  assert.doesNotMatch(output, /\bwe (guarantee|promise)\b|\bwill guarantee\b|\bis guaranteed to\b/i);
});

test("QA reports provide explicit handoff verdicts and match reviewed artifacts", () => {
  const pairs = [
    ["case-a-discovery-gap-output.md", "case-a-discovery-qa.md"],
    ["case-b-discovery-gap-output.md", "case-b-discovery-qa.md"],
    ["case-a-proposal-output.md", "case-a-proposal-qa.md"],
  ];

  for (const [artifactFile, qaFile] of pairs) {
    const artifact = read(artifactFile);
    const qa = read(qaFile);
    assert.match(qa, /QA score/i);
    assert.match(qa, /Handoff verdict/i);
    assert.match(qa, /Human-review checklist/i);
    assert.match(qa, new RegExp(`Reviewed artifact SHA256: ${sha256(artifact)}`, "i"));
  }
});
