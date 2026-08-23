import type { Metadata } from "next";
import Image from "next/image";
import { Arrow, SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "AI Office Hours — GenX AI Pro",
  description: "Focused 1:1 AI coaching with Brad Towers for experienced professionals who want practical progress, not more theory.",
};

const sessions = [
  ["AI Strategy", "I need a roadmap", "A prioritised opportunity map and a focused 90-day plan for your role."],
  ["Tool & Stack Review", "Am I using the right tools?", "Cut through the noise and shape a practical stack around the work you actually do."],
  ["Workflow Design", "Help me build this", "Bring a bottleneck. We design and build a useful workflow together during the session."],
  ["Career Positioning", "How do I stay relevant?", "Clarify your AI narrative and create a plan to lead the conversation with confidence."],
  ["Agent Setup", "Help me build my first agent", "Configure a focused AI agent around a real task, with sensible review points and guardrails."],
  ["Team Enablement", "My team is not adopting AI", "Leave with a rollout approach, enablement roadmap and practical adoption patterns."],
];

export default function CoachingPage() {
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero coaching-hero">
        <div className="inner-hero-copy">
          <div className="eyebrow"><span className="status-dot status-dot-gold" />AI Office Hours / 1:1 coaching</div>
          <h1>Stop guessing.<span>Get a practitioner in your corner.</span></h1>
          <p>Focused working sessions for experienced professionals who want AI applied to their situation—not another course about AI in general.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="https://calendly.com/bradptowers/free-15-minute-ai-audit" target="_blank" rel="noreferrer">Book a free AI audit <Arrow /></a>
            <a className="text-link" href="#pricing">See session options <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="coaching-portrait-wrap">
          <div className="coaching-portrait"><Image src="/brad-towers-headshot.png" alt="Brad Towers" fill sizes="(max-width: 760px) 82vw, 42vw" priority /></div>
          <div className="portrait-orbit portrait-orbit-one" /><div className="portrait-orbit portrait-orbit-two" />
          <div className="coach-fact fact-one"><span>90 min</span>Focused working session</div>
          <div className="coach-fact fact-two"><span>24 hr</span>Written action plan</div>
        </div>
      </section>

      <section className="coaching-truth section-shell">
        <div className="section-kicker">The problem with generic advice</div>
        <div className="belief-grid">
          <h2>You are experienced.<br />AI makes everyone a beginner again.</h2>
          <div className="belief-copy"><p>You have tried the tools, read the articles and watched the demos. But very little has changed in how you actually work.</p><p>The missing piece is rarely more information. It is focused application: your role, your tools, your constraints and one useful result.</p></div>
        </div>
      </section>

      <section className="session-section section-shell">
        <div className="section-heading"><div><div className="section-kicker">Pick your problem</div><h2>We will solve it<br />together.</h2></div><p>Every session is 90 minutes, 1:1 and shaped around the outcome you need—not a fixed curriculum.</p></div>
        <div className="session-grid">
          {sessions.map(([title, prompt, description], index) => (
            <article key={title}><span className="session-index">{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><strong>“{prompt}”</strong><p>{description}</p></article>
          ))}
        </div>
      </section>

      <section className="coaching-method">
        <div className="section-shell coaching-method-grid">
          <div><div className="section-kicker section-kicker-light">The PRISM method</div><h2>Not random advice.<br />Structured progress.</h2><p>We start with your position, find the highest-value opportunity, build the first useful win and turn it into a repeatable system.</p></div>
          <div className="prism-stack">
            <span><b>P</b><i>Position</i><small>Where are you now?</small></span>
            <span><b>R</b><i>Review</i><small>What is worth pursuing?</small></span>
            <span><b>I</b><i>Implement</i><small>Build the first win.</small></span>
            <span><b>S</b><i>Systematise</i><small>Make it repeatable.</small></span>
            <span><b>M</b><i>Multiply</i><small>Scale what works.</small></span>
          </div>
        </div>
      </section>

      <section className="how-it-works section-shell">
        <div className="section-kicker">From booking to breakthrough</div>
        <div className="how-grid">
          <article><span>01</span><h3>Free AI audit</h3><p>A 15-minute call to understand the situation and decide honestly what would help.</p></article>
          <article><span>02</span><h3>Readiness snapshot</h3><p>A short assessment gives us useful context before the working session begins.</p></article>
          <article><span>03</span><h3>The session</h3><p>We diagnose, decide and build. You leave with something concrete, not just notes.</p></article>
          <article><span>04</span><h3>Action plan</h3><p>Within 24 hours, receive the recording, written summary, actions and useful links.</p></article>
        </div>
      </section>

      <section className="pricing-section section-shell" id="pricing">
        <div className="section-heading"><div><div className="section-kicker">Session options</div><h2>Choose the level<br />of momentum.</h2></div><p>Start with one focused problem or build a structured rhythm over several weeks.</p></div>
        <div className="pricing-grid">
          <article><div className="price-label">Single session</div><h3>£500</h3><p>One-time · 90 minutes</p><ul><li>Focused 1:1 working session</li><li>Session recording</li><li>Written action plan within 24 hours</li><li>PRISM diagnostic</li></ul><a className="button button-outline" href="https://calendly.com/bradptowers/ai-strategy-session" target="_blank" rel="noreferrer">Book one session <Arrow /></a></article>
          <article className="pricing-featured"><div className="price-label">Strategy pack / Best value</div><h3>£1,200</h3><p>3 sessions over 6 weeks</p><ul><li>Three 90-minute sessions</li><li>Recordings and action plans</li><li>PRISM progress tracking</li><li>Priority scheduling</li></ul><a className="button button-primary" href="https://calendly.com/bradptowers/strategy-pack-3-sessions" target="_blank" rel="noreferrer">Get the strategy pack <Arrow /></a></article>
          <article><div className="price-label">Monthly advisory</div><h3>£2,000</h3><p>Per month · Ongoing access</p><ul><li>Four 90-minute sessions</li><li>Progress tracking and reviews</li><li>Async email support</li><li>Priority scheduling</li></ul><a className="button button-outline" href="https://calendly.com/bradptowers/free-15-minute-ai-audit" target="_blank" rel="noreferrer">Discuss a retainer <Arrow /></a></article>
        </div>
        <p className="fit-note"><strong>A useful fit check:</strong> the first 15 minutes of a paid session confirm we are heading somewhere valuable. If not, we stop there.</p>
      </section>

      <section className="closing section-shell">
        <div className="closing-orbit" aria-hidden="true"><span /><i /></div>
        <div className="section-kicker">Your problem. One useful move.</div>
        <h2>Make the next<br />90 minutes count.</h2>
        <p>Start with a free 15-minute AI audit. No commitment, no hard sell.</p>
        <a className="button button-primary button-large" href="https://calendly.com/bradptowers/free-15-minute-ai-audit" target="_blank" rel="noreferrer">Book your free AI audit <Arrow /></a>
      </section>
      <SiteFooter />
    </main>
  );
}
