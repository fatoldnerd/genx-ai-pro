import type { Metadata } from "next";
import Image from "next/image";
import { Arrow, SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "About Brad Towers — GenX AI Pro",
  description: "Meet Brad Towers, an enterprise technology and Sales Engineering leader helping organisations make AI genuinely useful.",
};

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="about-hero section-shell">
        <div className="about-headline"><div className="eyebrow"><span className="status-dot status-dot-gold" />Brad Towers / Founder</div><h1>Experience is not the opposite of<span>experimentation.</span></h1></div>
        <div className="about-portrait"><Image src="/brad-towers-portrait.jpg" alt="Brad Towers" fill sizes="(max-width: 760px) 100vw, 45vw" priority /></div>
        <div className="about-intro"><p>I have spent more than three decades helping businesses understand, sell and adopt complex technology. Today, I apply that experience to the practical reality of AI.</p><p>I am not interested in AI theatre. I care about where it improves a decision, removes friction, strengthens a team or changes how useful work gets done.</p></div>
      </section>

      <section className="experience-band"><div className="section-shell experience-grid"><article><span>30+</span><h3>Years in enterprise technology</h3><p>Solutions architecture, Sales Engineering and the commercial reality of complex change.</p></article><article><span>Global</span><h3>SE leadership at scale</h3><p>Building and leading teams across markets, roles and different levels of technical confidence.</p></article><article><span>Now</span><h3>AI systems in practice</h3><p>Designing workflows, agents and operating patterns—not watching from the sidelines.</p></article></div></section>

      <section className="about-story section-shell">
        <div><div className="section-kicker">Why GenX AI Pro</div><h2>Built for people with judgement—and businesses that need it.</h2></div>
        <div><p>Experienced professionals already know how organisations really work: the politics, the handoffs, the customer expectations and the gap between a strategy deck and Tuesday morning.</p><p>AI does not make that experience obsolete. Used well, it makes judgement more scalable. GenX AI Pro exists to connect those two things: hard-earned operating experience and a willingness to redesign what is possible.</p><p>The work is deliberately practical. We choose a real problem, create evidence, build capability and leave behind something that can keep working.</p></div>
      </section>

      <section className="principles about-principles section-shell">
        <div className="principles-intro"><div className="section-kicker">A practical point of view</div><h2>The goal is not<br />more AI.</h2><p>It is better work, better decisions and a business that can adapt with confidence.</p></div>
        <div className="principle-list"><article><span>01 / Value</span><h3>Begin with the work,<br />not the technology.</h3><p>Start with a meaningful problem. Choose the tool only when it earns its place.</p></article><article><span>02 / People</span><h3>Build with teams,<br />not around them.</h3><p>Adoption grows when people shape the change, see the value and trust the guardrails.</p></article><article><span>03 / Progress</span><h3>Learn in the open.<br />Scale what works.</h3><p>Visible experiments create evidence, confidence and a far better roadmap.</p></article></div>
      </section>

      <section className="closing section-shell"><div className="closing-orbit" aria-hidden="true"><span /><i /></div><div className="section-kicker">Bring the real problem</div><h2>Let’s find the<br />useful place to begin.</h2><p>A free 15-minute conversation is enough to establish the next sensible move.</p><a className="button button-primary button-large" href="https://calendly.com/bradptowers/free-15-minute-ai-audit" target="_blank" rel="noreferrer">Book a conversation <Arrow /></a></section>
      <SiteFooter />
    </main>
  );
}
