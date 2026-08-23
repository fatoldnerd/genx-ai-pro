import { expect, test } from "@playwright/test";

for (const path of ["/", "/agent-sprint/", "/about/", "/coaching/", "/tools/"]) {
  test(`${path} renders without console errors or horizontal overflow`, async ({ page }, testInfo) => {
    const consoleErrors: string[] = [];
    const pageErrors: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error") consoleErrors.push(message.text());
    });
    page.on("pageerror", (error) => pageErrors.push(error.message));

    const response = await page.goto(path, { waitUntil: "networkidle" });
    expect(response?.status()).toBe(200);
    expect(await page.locator("body").evaluate((body) => body.scrollWidth <= window.innerWidth + 1)).toBe(true);
    expect(consoleErrors).toEqual([]);
    expect(pageErrors).toEqual([]);

    if (path === "/agent-sprint/") {
      await expect(page.getByRole("heading", { level: 1 })).toContainText("reviewed AI workflows");
      await expect(page.getByText("Client Zero / GenX AI Pro")).toBeVisible();
      await expect(page.getByText("£5,000")).toBeVisible();
      await expect(page.getByText("£7,500")).toBeVisible();
      await expect(page.getByRole("link", { name: /Book a workflow fit call/i }).first()).toHaveAttribute(
        "href",
        "https://calendly.com/bradptowers/free-15-minute-ai-audit",
      );
      if (testInfo.project.name === "mobile") {
        const closingHeadline = await page.locator(".sprint-closing h2").innerText();
        expect(closingHeadline).toMatch(/process\.\s+Leave/);
      }
      await page.screenshot({
        path: `test-results/agent-sprint-${testInfo.project.name}.png`,
        fullPage: true,
      });
    }
  });
}

test("homepage links to the Agent Sprint", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  const sprintLinks = page.locator('a[href="/agent-sprint"]');
  expect(await sprintLinks.count()).toBeGreaterThan(0);
});
