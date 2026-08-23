import type { Metadata } from "next";
import { Arrow, SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Practical AI Tools — GenX AI Pro",
  description: "Free tools to assess AI readiness, estimate potential value and build practical AI capability.",
};

export default function ToolsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero resource-hero">
        <div className="inner-hero-copy"><div className="eyebrow"><span className="status-dot" />Practical tools / Free to use</div><h1>Start with<span>better evidence.</span></h1><p>Useful tools for turning a vague AI conversation into a clearer decision about readiness, value and the next move.</p></div>
        <div className="resource-map" aria-hidden="true"><div className="resource-ring ring-one" /><div className="resource-ring ring-two" /><span className="resource-node resource-node-a">Assess</span><span className="resource-node resource-node-b">Value</span><span className="resource-node resource-node-c">Learn</span><strong>START<br />HERE</strong></div>
      </section>
      <section className="resource-list section-shell">
        <a className="resource-card" href="https://assessment.genxaipro.com" target="_blank" rel="noreferrer"><span className="resource-number">01</span><div><div className="section-kicker">AI readiness assessment</div><h2>How AI-ready are you?</h2><p>Assess the current position across the dimensions that shape useful, responsible adoption—and identify the clearest gaps to address.</p><strong>Take the free assessment <Arrow /></strong></div><i>Assessment</i></a>
        <a className="resource-card" href="https://ai-roi-calculator-chi.vercel.app/" target="_blank" rel="noreferrer"><span className="resource-number">02</span><div><div className="section-kicker">AI ROI calculator</div><h2>What could AI be worth?</h2><p>Model the potential value behind a workflow or use case and turn broad enthusiasm into a more commercial conversation.</p><strong>Calculate the opportunity <Arrow /></strong></div><i>Calculator</i></a>
        <a className="resource-card" href="https://genxaipro.com/course" target="_blank" rel="noreferrer"><span className="resource-number">03</span><div><div className="section-kicker">AI learning</div><h2>Build practical fluency.</h2><p>A structured learning route for professionals who want to understand the tools, think more clearly and apply AI with confidence.</p><strong>Explore the course <Arrow /></strong></div><i>Course</i></a>
      </section>
      <section className="closing section-shell"><div className="closing-orbit" aria-hidden="true"><span /><i /></div><div className="section-kicker">Turn the result into action</div><h2>Know where<br />to begin next.</h2><p>Bring your assessment or opportunity to a free 15-minute AI audit.</p><a className="button button-primary button-large" href="https://calendly.com/bradptowers/free-15-minute-ai-audit" target="_blank" rel="noreferrer">Discuss your results <Arrow /></a></section>
      <SiteFooter />
    </main>
  );
}
