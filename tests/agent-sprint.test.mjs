import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("premium sprint route contains the complete buyer contract", () => {
  const page = read("src/app/agent-sprint/page.tsx");

  for (const required of [
    "Private AI Agent Buildout Sprint",
    "Two weeks",
    "2 workflow",
    "£5,000",
    "£7,500",
    "Client Zero",
    "internal operating case",
    "does not show that any agent workflow delivered value",
    "Next / data gate",
    "human review",
    "Book a workflow fit call",
  ]) {
    assert.match(page, new RegExp(required.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"));
  }
});

test("premium sprint route avoids unsupported proof claims", () => {
  const page = read("src/app/agent-sprint/page.tsx");
  const forbidden = [
    /guaranteed ROI/i,
    /proven client results/i,
    /customer testimonial/i,
    /saved \d+ hours/i,
    /increased revenue by/i,
  ];

  for (const pattern of forbidden) {
    assert.doesNotMatch(page, pattern);
  }
});

test("site navigation and homepage expose the premium sprint", () => {
  const chrome = read("src/components/site-chrome.tsx");
  const home = read("src/app/page.tsx");
  assert.match(chrome, /href="\/agent-sprint"/);
  assert.match(chrome, />Agent Sprint</);
  assert.match(home, /href="\/agent-sprint"/);
});

test("sitemap exposes the premium sprint route", () => {
  const sitemap = read("src/app/sitemap.ts");
  assert.match(sitemap, /"\/agent-sprint"/);
});

test("client zero evidence remains committed beside the page", () => {
  const input = read("content/client-zero/genx-client-zero-input.md");
  assert.match(input, /Do not claim paid-client results/i);
  assert.match(input, /internal Client Zero operating case/i);
});
