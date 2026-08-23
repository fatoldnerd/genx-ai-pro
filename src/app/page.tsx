import Image from "next/image";
import Link from "next/link";
import { Arrow, SiteFooter, SiteHeader, Spark } from "@/components/site-chrome";

type ServiceOption = {
  title: string;
  description: string;
};

function ServiceOptions({ items }: { items: ServiceOption[] }) {
  return (
    <div className="service-options">
      {items.map((item) => (
        <details className="service-option" key={item.title}>
          <summary>
            <span className="service-toggle" aria-hidden="true" />
            <span>{item.title}</span>
          </summary>
          <div className="service-option-description">
            <p>{item.description}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

const leadershipServices: ServiceOption[] = [
  {
    title: "AI opportunity and readiness assessment",
    description:
      "A focused diagnostic of your capabilities, constraints and highest-value opportunities—ending with a clear, evidence-based place to begin.",
  },
  {
    title: "Executive alignment workshops",
    description:
      "A facilitated working session that creates shared priorities, practical decision principles and visible leadership commitment.",
  },
  {
    title: "Use-case portfolio and roadmap",
    description:
      "A ranked portfolio of opportunities, balancing value, feasibility and readiness, with ownership and an actionable delivery sequence.",
  },
];

const teamServices: ServiceOption[] = [
  {
    title: "Role-based enablement programmes",
    description:
      "Practical learning shaped around the decisions, workflows and risks of each role—not generic, one-size-fits-all AI training.",
  },
  {
    title: "Hands-on team labs and coaching",
    description:
      "Facilitated sessions where teams apply AI to live work, build useful workflows and leave with repeatable habits.",
  },
  {
    title: "Champions network and playbooks",
    description:
      "Equip internal champions with the structure, resources and peer support to spread effective practice across the business.",
  },
];

const businessServices: ServiceOption[] = [
  {
    title: "AI operating model and governance",
    description:
      "Define the decision rights, guardrails, ownership and governance needed to use AI responsibly and confidently at scale.",
  },
  {
    title: "Workflow redesign and tool selection",
    description:
      "Redesign high-friction workflows and select tools against real business needs, security requirements and operational fit.",
  },
  {
    title: "Adoption and value measurement",
    description:
      "Set meaningful measures for usage, behaviour change and realised value so progress stays visible and accountable.",
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-atmosphere" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow reveal delay-1">
            <span className="status-dot" />
            Applied AI consultancy
          </div>
          <h1 className="reveal delay-2">
            Make AI useful<span>across the business.</span>
          </h1>
          <p className="hero-intro reveal delay-3">
            Practical AI for experienced leaders and ambitious teams—aligning the strategy,
            tools and behaviours that make meaningful change stick.
          </p>
          <div className="hero-actions reveal delay-4">
            <a
              className="button button-primary"
              href="https://calendly.com/bradptowers/free-15-minute-ai-audit"
              target="_blank"
              rel="noreferrer"
            >
              Book a free AI audit <Arrow />
            </a>
            <a className="text-link" href="#services">
              Explore the work <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="hero-note reveal delay-4">
            <span>01</span> From the first valuable use case to lasting company-wide capability.
          </p>
        </div>

        <div className="system-stage reveal delay-3" aria-label="AI adoption system map">
          <div className="stage-label stage-label-top">AI operating map</div>
          <div className="stage-label stage-label-side">Capability, not theatre</div>
          <div className="stage-corner">GENX / 01</div>
          <div className="map-orbit map-orbit-outer" />
          <div className="map-orbit map-orbit-inner" />
          <div className="map-axis map-axis-x" />
          <div className="map-axis map-axis-y" />
          <div className="map-center">
            <span className="center-pulse" />
            <Spark />
            <strong>
              USEFUL
              <br />
              AI
            </strong>
          </div>
          <div className="map-node node-people">
            <span />People
          </div>
          <div className="map-node node-process">
            <span />Process
          </div>
          <div className="map-node node-platforms">
            <span />Platforms
          </div>
          <div className="map-node node-guardrails">
            <span />Guardrails
          </div>
          <div className="map-caption">
            <span>ALIGN</span>
            <span>ENABLE</span>
            <span>EMBED</span>
          </div>
        </div>
      </section>

      <section className="signal-bar" aria-label="Experience and outcomes">
        <p>30+ years in enterprise tech</p>
        <span>+</span>
        <p>Global SE leadership</p>
        <span>+</span>
        <p>AI systems builder</p>
        <span>+</span>
        <p>Practical over theoretical</p>
      </section>

      <section className="belief section-shell">
        <div className="section-kicker">The real opportunity</div>
        <div className="belief-grid">
          <h2>AI adoption is not a software rollout.</h2>
          <div className="belief-copy">
            <p>
              The tool is rarely the hardest part. The difficult work is deciding where AI
              creates genuine value, helping people use it well, and building the confidence to
              change how work gets done.
            </p>
            <p>
              That is where I work: between the board-level ambition and the Tuesday-morning
              reality of your teams.
            </p>
          </div>
        </div>
      </section>

      <section className="services section-shell" id="services">
        <div className="section-heading">
          <div>
            <div className="section-kicker">Where I can help</div>
            <h2>
              Three layers of change.
              <br />
              One connected system.
            </h2>
          </div>
          <p>
            Engagements flex around your starting point, from a focused leadership session to an
            embedded transformation programme.
          </p>
        </div>
        <div className="service-grid">
          <article className="service-card">
            <div className="card-topline">
              <span>Leadership</span>
              <span>Direction</span>
            </div>
            <div className="service-symbol compass-symbol">
              <div className="compass-ring" />
              <div className="compass-needle" />
            </div>
            <div className="service-copy">
              <h3>
                Find the value
                <br />
                worth pursuing.
              </h3>
              <p>
                Align the leadership team on the opportunities, priorities and choices that
                matter now.
              </p>
              <ServiceOptions items={leadershipServices} />
            </div>
          </article>
          <article className="service-card">
            <div className="card-topline">
              <span>Teams</span>
              <span>Capability</span>
            </div>
            <div className="service-symbol wave-symbol">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="service-copy">
              <h3>
                Turn curiosity into
                <br />
                confident practice.
              </h3>
              <p>
                Give teams the judgement, habits and practical skills to use AI effectively in
                real work.
              </p>
              <ServiceOptions items={teamServices} />
            </div>
          </article>
          <article className="service-card">
            <div className="card-topline">
              <span>Business</span>
              <span>Scale</span>
            </div>
            <div className="service-symbol grid-symbol">
              {Array.from({ length: 9 }).map((_, index) => (
                <i key={index} />
              ))}
            </div>
            <div className="service-copy">
              <h3>
                Build the conditions
                <br />
                for adoption to last.
              </h3>
              <p>
                Connect governance, tools, workflows and measurement into an operating model
                that can scale.
              </p>
              <ServiceOptions items={businessServices} />
            </div>
          </article>
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="section-shell">
          <div className="section-heading approach-heading">
            <div>
              <div className="section-kicker section-kicker-light">The PRISM method</div>
              <h2>
                From first signal
                <br />
                to repeatable system.
              </h2>
            </div>
            <p>
              PRISM is the practical method behind every engagement. It creates evidence early
              and turns what works into capability that can travel.
            </p>
          </div>
          <div className="approach-steps approach-steps-five">
            <article>
              <span className="step-number">P / 01</span>
              <div className="step-line">
                <i />
              </div>
              <h3>Position</h3>
              <p>Understand where you are, what matters and what is getting in the way.</p>
            </article>
            <article>
              <span className="step-number">R / 02</span>
              <div className="step-line">
                <i />
              </div>
              <h3>Review</h3>
              <p>Find the opportunities where value, feasibility and readiness meet.</p>
            </article>
            <article>
              <span className="step-number">I / 03</span>
              <div className="step-line">
                <i />
              </div>
              <h3>Implement</h3>
              <p>Build the first useful win with the people who will use it.</p>
            </article>
            <article>
              <span className="step-number">S / 04</span>
              <div className="step-line">
                <i />
              </div>
              <h3>Systematise</h3>
              <p>Turn a successful experiment into a repeatable way of working.</p>
            </article>
            <article>
              <span className="step-number">M / 05</span>
              <div className="step-line">
                <i />
              </div>
              <h3>Multiply</h3>
              <p>Scale the capability across roles, teams and the operating model.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="founder section-shell" id="about">
        <div className="founder-portrait">
          <Image
            src="/brad-towers-portrait.jpg"
            alt="Brad Towers"
            fill
            sizes="(max-width: 760px) 100vw, 45vw"
            priority={false}
          />
          <div className="portrait-tag">
            <span>Brad Towers</span>
            <span>Founder / Practitioner</span>
          </div>
        </div>
        <div className="founder-copy">
          <div className="section-kicker">Experience meets experiment</div>
          <h2>I work in the enterprise world—not outside it.</h2>
          <p className="founder-lead">
            I have spent more than three decades in enterprise technology, solutions architecture
            and Sales Engineering, leading teams through the reality of change.
          </p>
          <p>
            I also build and use AI systems myself. That combination matters: the judgement that
            comes from experience, paired with the curiosity to keep testing what is newly
            possible.
          </p>
          <div className="credential-grid">
            <span>
              30+ years
              <br />
              <small>Enterprise technology</small>
            </span>
            <span>
              Global
              <br />
              <small>Sales Engineering leader</small>
            </span>
            <span>
              Builder
              <br />
              <small>AI workflows and agents</small>
            </span>
            <span>
              Translator
              <br />
              <small>Strategy into practice</small>
            </span>
          </div>
          <Link className="inline-arrow-link" href="/about">
            More about Brad <Arrow />
          </Link>
        </div>
      </section>

      <section className="engagements section-shell">
        <div className="section-heading">
          <div>
            <div className="section-kicker">Two ways to work together</div>
            <h2>
              Change the business.
              <br />
              Or change your own work.
            </h2>
          </div>
          <p>
            The same practical philosophy, shaped for an organisation or focused entirely on one
            experienced professional.
          </p>
        </div>
        <div className="engagement-grid">
          <article className="engagement-card engagement-business">
            <div className="engagement-index">For organisations</div>
            <h3>
              Business advisory
              <br />
              and team enablement
            </h3>
            <p>
              For leaders who need clarity, teams who need capability, and businesses ready to
              make AI part of how work gets done.
            </p>
            <ul>
              <li>Leadership alignment</li>
              <li>Team programmes</li>
              <li>Workflow transformation</li>
              <li>AI operating model</li>
            </ul>
            <a
              className="button button-primary"
              href="https://calendly.com/bradptowers/free-15-minute-ai-audit"
              target="_blank"
              rel="noreferrer"
            >
              Discuss the business <Arrow />
            </a>
          </article>
          <article className="engagement-card engagement-coaching">
            <div className="engagement-index">For individuals</div>
            <h3>
              AI Office Hours
              <br />
              with Brad Towers
            </h3>
            <p>
              Focused 1:1 sessions for experienced professionals who want a practitioner in their
              corner and something useful working quickly.
            </p>
            <ul>
              <li>90-minute working sessions</li>
              <li>Role-specific AI strategy</li>
              <li>Tool and workflow design</li>
              <li>Written action plan</li>
            </ul>
            <Link className="button button-outline" href="/coaching">
              Explore AI Office Hours <Arrow />
            </Link>
          </article>
        </div>
      </section>

      <section className="tools-band section-shell">
        <div>
          <div className="section-kicker section-kicker-light">Start with evidence</div>
          <h2>
            Useful tools before
            <br />
            the first conversation.
          </h2>
        </div>
        <div className="tool-mini-grid">
          <a href="https://assessment.genxaipro.com" target="_blank" rel="noreferrer">
            <span>Free assessment</span>
            <strong>How AI-ready are you?</strong>
            <Arrow diagonal />
          </a>
          <a href="https://ai-roi-calculator-chi.vercel.app/" target="_blank" rel="noreferrer">
            <span>Free calculator</span>
            <strong>What could AI be worth?</strong>
            <Arrow diagonal />
          </a>
          <Link href="/tools">
            <span>Resource library</span>
            <strong>Explore all tools</strong>
            <Arrow diagonal />
          </Link>
        </div>
      </section>

      <section className="closing section-shell">
        <div className="closing-orbit" aria-hidden="true">
          <span />
          <i />
        </div>
        <div className="section-kicker">Your next useful move</div>
        <h2>
          Turn AI ambition
          <br />
          into operating advantage.
        </h2>
        <p>Bring the challenge. We’ll work out the most valuable place to begin.</p>
        <a
          className="button button-primary button-large"
          href="https://calendly.com/bradptowers/free-15-minute-ai-audit"
          target="_blank"
          rel="noreferrer"
        >
          Book a free AI audit <Arrow />
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
