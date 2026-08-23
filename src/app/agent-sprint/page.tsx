import type { Metadata } from "next";
import { Arrow, SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Private AI Agent Buildout Sprint | GenX AI Pro",
  description:
    "A focused two-week sprint that turns two or three repeated business workflows into reviewed, reusable AI operating assets.",
  alternates: {
    canonical: "/agent-sprint",
  },
};

const workflowExamples = [
  {
    index: "01",
    status: "Now / companion",
    title: "Prospect intelligence",
    input: "Company, contact, role, public signals and relationship context.",
    output: "Fit assessment, pain hypotheses, relevance angle and reviewed outreach brief.",
  },
  {
    index: "02",
    status: "Now / primary",
    title: "Discovery to proposal",
    input: "Discovery notes, buyer context, candidate workflows and constraints.",
    output: "Qualification, recommended scope, proposal draft, risks and next-step email.",
  },
  {
    index: "03",
    status: "Next / data gate",
    title: "Pipeline execution",
    input: "CRM rows, correspondence, follow-up dates and current stage.",
    output: "Stalled opportunities, follow-up priorities, draft messages and weekly review.",
  },
];

const deliverySteps = [
  ["Position", "Map repeated work, business impact, source material and review boundaries."],
  ["Review", "Score the opportunities and select only the two or three workflows worth building."],
  ["Implement", "Build, test and improve each workflow against realistic business inputs."],
  ["Systematise", "Hand over operating guides, quality rubrics, human review and an adoption plan."],
];

const starterIncludes = [
  "Workflow diagnostic and opportunity map",
  "2 workflow agent packs built around real examples",
  "Input templates and example runs",
  "Quality rubrics and human review checklists",
  "One handoff and enablement session",
  "7 days of async support",
];

const premiumIncludes = [
  "Everything in the Starter Sprint",
  "3 workflow agent packs",
  "A second enablement and improvement session",
  "Executive readout and adoption plan",
  "Prioritised post-sprint roadmap",
  "14 days of async support",
];

export default function AgentSprintPage() {
  return (
    <main>
      <SiteHeader />

      <section className="inner-hero sprint-hero">
        <div className="inner-hero-copy">
          <div className="eyebrow">
            <span className="status-dot" /> Private buildout sprint / Two weeks
          </div>
          <h1>
            Turn repeated work into
            <span>reviewed AI workflows.</span>
          </h1>
          <p>
            The Private AI Agent Buildout Sprint turns two or three high-friction business
            workflows into reusable operating assets built around your real material, quality
            standards and human review.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href="https://calendly.com/bradptowers/free-15-minute-ai-audit"
              target="_blank"
              rel="noreferrer"
            >
              Book a workflow fit call <Arrow />
            </a>
            <a className="text-link" href="#client-zero">
              See the proof boundary <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="hero-note">
            <span>02</span> Two excellent workflows beat six shallow automations.
          </p>
        </div>

        <div className="sprint-system" aria-label="Agent workflow operating system">
          <div className="sprint-system-label">WORKFLOW / HUMAN REVIEW / ADOPTION</div>
          <div className="sprint-input-card">
            <span>Messy source material</span>
            <strong>Notes, examples, constraints, quality standards</strong>
          </div>
          <div className="sprint-flow-line" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div className="sprint-agent-card">
            <span>Custom workflow pack</span>
            <strong>Instructions + input contract + tested output</strong>
          </div>
          <div className="sprint-review-card">
            <span>Human review gate</span>
            <strong>Score, correct, approve, learn</strong>
          </div>
          <div className="sprint-system-status">
            <span>REAL INPUTS</span>
            <span>VISIBLE LIMITS</span>
            <span>REPEATABLE USE</span>
          </div>
        </div>
      </section>

      <section className="signal-bar" aria-label="Sprint operating principles">
        <p>Real business inputs</p>
        <span>+</span>
        <p>2 to 3 focused workflows</p>
        <span>+</span>
        <p>Human review built in</p>
        <span>+</span>
        <p>Handoff, not dependency</p>
      </section>

      <section className="sprint-outcomes section-shell">
        <div className="section-heading">
          <div>
            <div className="section-kicker">What you are buying</div>
            <h2>
              Operating capacity.
              <br />
              Not a prompt folder.
            </h2>
          </div>
          <p>
            The value is the diagnosis, workflow design, testing, quality control and adoption
            system around the model. The client leaves able to run and review the work without
            Brad in the room.
          </p>
        </div>
        <div className="sprint-outcome-grid">
          <article>
            <span>01 / Focus</span>
            <h3>A ranked workflow opportunity map</h3>
            <p>Choose the work where frequency, value, evidence and reviewability meet.</p>
          </article>
          <article>
            <span>02 / Build</span>
            <h3>Two or three complete workflow packs</h3>
            <p>Instructions, input contracts, examples, outputs, tests and known limitations.</p>
          </article>
          <article>
            <span>03 / Trust</span>
            <h3>Quality and human review controls</h3>
            <p>Every output has a rubric, review checklist and named approval boundary.</p>
          </article>
          <article>
            <span>04 / Adoption</span>
            <h3>A practical handoff and roadmap</h3>
            <p>Owners, operating guidance, training, first-use cadence and next priorities.</p>
          </article>
        </div>
      </section>

      <section className="client-zero-section" id="client-zero">
        <div className="section-shell">
          <div className="client-zero-heading">
            <div>
              <div className="section-kicker section-kicker-light">Client Zero / GenX AI Pro</div>
              <h2>The first baseline is internal, and labelled honestly.</h2>
            </div>
            <p>
              This is an internal operating case, not a paid-client success story. It records a
              verified operating reset: source recovery, version control, Workspace, CRM and review
              boundaries. It does not show that any agent workflow delivered value. Those workflow
              tests are the next evidence gate.
            </p>
          </div>

          <div className="client-zero-board">
            <article>
              <span>Starting condition</span>
              <ul>
                <li>Website source existed only on a MacBook</li>
                <li>No Git source control for the live site</li>
                <li>Agent kit stranded outside Brad&apos;s normal workflow</li>
                <li>No business mailbox, Sprint CRM or delivery workspace</li>
                <li>Proof scattered across internal files and old demos</li>
              </ul>
            </article>
            <div className="client-zero-arrow" aria-hidden="true">
              <Arrow />
            </div>
            <article>
              <span>Verified foundation</span>
              <ul>
                <li>Private GitHub sources for the website and Sprint kit</li>
                <li>Validated inventory of 51 reusable workflow packages</li>
                <li>Workspace email, OAuth and organized Drive assets</li>
                <li>Working CRM with Prospects, Activity and Pipeline views</li>
                <li>Netlify access, reproducible build and review boundaries</li>
              </ul>
            </article>
          </div>

          <div className="proof-boundary">
            <strong>What is verified</strong>
            <p>The source, repositories, Workspace, CRM, build and access controls exist and were checked.</p>
            <strong>What is not yet verified</strong>
            <p>Workflow value, repeatability, paid-client adoption, revenue impact or measured time savings.</p>
          </div>
        </div>
      </section>

      <section className="workflow-demo section-shell">
        <div className="section-heading">
          <div>
            <div className="section-kicker">The Client Zero workflow portfolio</div>
            <h2>
              Two workflows now.
              <br />
              One gated next.
            </h2>
          </div>
          <p>
            The diagnostic selected Discovery to Proposal as the primary test target and Prospect
            Intelligence as its upstream companion. Pipeline Execution remains deferred until the
            CRM contains representative activity and an approved weekly review process.
          </p>
        </div>
        <div className="workflow-demo-grid">
          {workflowExamples.map((workflow) => (
            <article key={workflow.title}>
              <span>{workflow.index} / {workflow.status}</span>
              <h3>{workflow.title}</h3>
              <div>
                <small>Input</small>
                <p>{workflow.input}</p>
              </div>
              <div>
                <small>Reviewed output</small>
                <p>{workflow.output}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="sprint-method">
        <div className="section-shell">
          <div className="section-heading approach-heading">
            <div>
              <div className="section-kicker section-kicker-light">How the Sprint runs</div>
              <h2>
                Two weeks.
                <br />
                Four controlled stages.
              </h2>
            </div>
            <p>
              No integration theatre. No open-ended transformation programme. The work stays
              focused on building a small number of useful, tested workflows.
            </p>
          </div>
          <div className="sprint-method-grid">
            {deliverySteps.map(([title, description], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-section section-shell" id="pricing">
        <div className="section-heading">
          <div>
            <div className="section-kicker">Packages</div>
            <h2>
              Tight scope.
              <br />
              Clear handoff.
            </h2>
          </div>
          <p>
            Both packages begin with evidence and end with usable operating assets. Integrations,
            custom software and autonomous external action are deliberately excluded.
          </p>
        </div>
        <div className="sprint-pricing-grid">
          <article>
            <div className="price-label">Starter Sprint / 2 workflows</div>
            <h3>£5,000</h3>
            <p>Best for proving two repeated workflows with one clear owner.</p>
            <ul>
              {starterIncludes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a
              className="button button-outline"
              href="https://calendly.com/bradptowers/free-15-minute-ai-audit"
              target="_blank"
              rel="noreferrer"
            >
              Discuss the Starter Sprint <Arrow />
            </a>
          </article>
          <article className="pricing-featured">
            <div className="price-label">Premium Sprint / 3 workflows</div>
            <h3>£7,500</h3>
            <p>Best when a team needs stronger enablement, adoption and executive visibility.</p>
            <ul>
              {premiumIncludes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a
              className="button button-primary"
              href="https://calendly.com/bradptowers/free-15-minute-ai-audit"
              target="_blank"
              rel="noreferrer"
            >
              Discuss the Premium Sprint <Arrow />
            </a>
          </article>
        </div>
        <p className="fit-note">
          Payment starts the Sprint. Deep integrations and custom software require separate scope
          after workflow value has been demonstrated.
        </p>
      </section>

      <section className="sprint-boundaries section-shell">
        <div>
          <div className="section-kicker">The boundary is part of the value</div>
          <h2>Useful AI without pretending the risk disappeared.</h2>
        </div>
        <div className="boundary-grid">
          <article>
            <span>Included</span>
            <p>Workflow design, prompts, examples, testing, rubrics, review gates and adoption.</p>
          </article>
          <article>
            <span>Human controlled</span>
            <p>External messages, commercial commitments, sensitive data and consequential decisions.</p>
          </article>
          <article>
            <span>Deferred</span>
            <p>CRM integrations, Slack automation, custom applications and autonomous execution.</p>
          </article>
        </div>
      </section>

      <section className="closing section-shell sprint-closing">
        <div className="closing-orbit" aria-hidden="true">
          <span />
          <i />
        </div>
        <div className="section-kicker">Start with the workflow, not the model</div>
        <h2>
          Bring one repeated process.
          <br />
          Leave with a decision.
        </h2>
        <p>
          The first call determines whether the workflow is valuable, buildable and reviewable
          enough for a Sprint. If it is not, Brad will say so.
        </p>
        <a
          className="button button-primary button-large"
          href="https://calendly.com/bradptowers/free-15-minute-ai-audit"
          target="_blank"
          rel="noreferrer"
        >
          Book a workflow fit call <Arrow />
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
