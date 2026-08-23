# GenX AI Pro - AI Opportunity Portfolio

**Case label:** Internal Client Zero operating case
**Decision required:** Select the first two or three workflows to demonstrate the premium GenX AI Pro AI Agent Buildout Sprint, define the evidence each must produce, identify gaps, and defer work that is not yet justified.
**Evidence boundary:** This portfolio uses only the supplied Client Zero input. It does not claim paid-client results, time savings, revenue impact, conversion improvement, testimonials, or customer outcomes.

## Situation, governance, and input quality

GenX AI Pro is packaging a premium AI Agent Buildout Sprint around practical AI adoption, workflow redesign, enablement, and operating models. Client Zero has already established enabling infrastructure: a business mailbox and connected Google Workspace, a Drive hierarchy, a verified three-tab CRM, restored private repositories for the Sprint Kit and website, and verified website builds. Buyer-facing proof remains scattered, however, and the supplied material contains candidate workflow definitions rather than completed workflow runs or buyer validation. [Source: `genx-client-zero-input.md`, lines 3–20 and 22–35]

- **Operating owner:** Brad Towers, as the named principal of GenX AI Pro. This is inferred from the business description; the input does not explicitly assign a separate adoption owner.
- **Reviewer and commercial approver:** Brad Towers. Every external send and commercial commitment must remain under human review. [Source: `genx-client-zero-input.md`, lines 88–95]
- **Primary audience:** Internal use by Brad to choose and operate the first demonstration; prospective buyers are the eventual audience for approved demonstration artifacts. The buyer segment and named prospects are not supplied.
- **Decision moment:** Before selecting the first paid-sprint target and before building integrations.
- **Input quality:** **Moderate for portfolio prioritization; weak for outcome claims.** The business goal, three candidate workflows, desired outputs, constraints, and current operating infrastructure are explicit. Workflow frequency, sample cases, data quality, risk sensitivity by workflow, buyer demand, success thresholds, and a formally assigned adoption owner are missing.

### Facts, assumptions, and unknowns

**Facts supplied**

- The immediate commercial goal is to package and sell a premium AI Agent Buildout Sprint. [Source: `genx-client-zero-input.md`, lines 3–6]
- Three immediate candidates are defined: prospect intelligence, discovery to proposal, and pipeline execution. [Source: `genx-client-zero-input.md`, lines 37–86]
- Gmail, Calendar, Drive, Docs, Sheets, Contacts, a Revenue Operations Drive hierarchy, and a three-tab CRM are established and verified. [Source: `genx-client-zero-input.md`, lines 22–30]
- External sending and commercial commitments require human review, and integrations should not be built before workflow value is demonstrated. [Source: `genx-client-zero-input.md`, lines 88–95]
- The 51-agent kit is an enabling asset, not the product proposition. [Source: `genx-client-zero-input.md`, lines 14–15 and 95]

**Assumptions used for sequencing**

- Brad can serve as the initial owner and reviewer during Client Zero.
- A small set of redacted or synthetic-but-clearly-labelled test cases can be assembled without representing them as customer evidence.
- The demonstration should prove a repeatable human-reviewed workflow and useful operating artifact, not autonomous execution.
- Discovery-to-proposal is closest to the commercial decision point because it turns buyer context and candidate workflows into scope, risks, a proposal draft, and next-step communication.

**Unknowns that materially limit certainty**

- Actual workflow frequency and volume for all three candidates.
- Availability and quality of real prospect records, discovery notes/transcripts, correspondence, and CRM history.
- Buyer segment, sales motion, offer boundaries, pricing language, legal terms, and proposal approval rules.
- Data handling, retention, privacy, and access-control requirements.
- What constitutes acceptable accuracy, completeness, tone, and review effort.
- Whether a qualified reviewer is required for any regulated or sensitive prospect context.

## 1. Portfolio map

| Portfolio horizon | Workflow | Role in the demonstration | Why it belongs here | Evidence gate before advancing |
|---|---|---|---|---|
| **Now - primary demonstration** | **Discovery to proposal** | Core premium-sprint demonstration and first-sprint target | Directly connects discovery evidence to a scoped commercial artifact while preserving human approval. Inputs and desired outputs are already defined, and a proposal package is easy to inspect. | At least one complete, permissioned test case; source-to-output traceability; reviewer-marked defects and edits; explicit exclusions; approval before any external use. |
| **Now - companion demonstration** | **Prospect intelligence** | Upstream demonstration showing how a qualified opportunity enters the sprint motion | Produces a reviewable brief from company, contact, role, public signals, and relationship context without requiring autonomous outreach. | Complete source register; clear separation of facts and hypotheses; no unsupported personal claims; approved outreach brief; reviewer log. |
| **Next - controlled extension** | **Pipeline execution** | Shows how approved opportunities remain operational after discovery | The CRM and Workspace foundations exist, but useful proof depends on populated rows, correspondence, follow-up dates, stage definitions, and recurring use. | Sufficient permissioned records to test stalled-opportunity and follow-up logic; stage definitions; ownership rules; weekly review run; no automatic sending or stage changes. |
| **Later** | CRM/email/calendar/Drive automation | Reduce manual transfer only after workflow proof | Integration dependency is higher and the input explicitly prohibits building integrations before demonstrating workflow value. | Repeated manual runs reveal a stable handoff, data fields, exception path, and approved access model. |
| **Do not build** | Autonomous outreach, autonomous proposal commitment, opaque lead scoring, or a “51 agents” product catalogue | Outside the safe and valuable Client Zero scope | These choices weaken human control, create unsupported commercial or personal judgments, or confuse implementation inventory with buyer value. | Reconsider only with explicit governance, buyer need, evidence, and human approval design. |

**Portfolio decision:** Use **discovery to proposal** and **prospect intelligence** as the first two buyer-facing demonstration workflows. Treat **pipeline execution** as the third portfolio workflow and a controlled 90-day extension, not as the first build target.

## 2. Ranked use-case table

Ratings are qualitative judgments from the supplied evidence, not measured performance scores.

| Rank | Use case | Business relevance | Demonstrability / evidence potential | Input readiness | Integration dependency | Risk and review burden | Adoption ownership | Decision |
|---:|---|---|---|---|---|---|---|---|
| **1** | **Discovery to proposal** | **Strong:** closest to converting discovery into a defined Sprint scope and commercial next step. | **Strong:** qualification, scope, risks, exclusions, proposal, email, and review checklist form one inspectable artifact chain. | **Moderate:** required input types are specified, but no actual discovery case, transcript, rubric, or approved proposal template is supplied. | **Low for manual proof; moderate later:** can begin from a file or transcript without CRM/email automation. | **Moderate:** qualification and proposal language can create commercial commitments; human approval is mandatory. | **Partial:** Brad is the logical Client Zero owner, but this assignment is inferred rather than explicit. | **Build first.** |
| **2** | **Prospect intelligence** | **Strong:** supports targeting and prepares relevant outreach for the Sprint offer. | **Strong:** facts, hypotheses, missing data, and an outreach brief can be inspected against sources. | **Moderate:** fields are defined, but no representative prospect pack, source standard, or privacy rule is supplied. | **Low for manual proof:** public and relationship context can be provided as a bounded input pack. | **Moderate:** risk of unsupported inference, stale public data, or inappropriate personalization; review is required. | **Partial:** Brad is the likely reviewer, but no operating cadence or research owner is named. | **Build as companion demonstration.** |
| **3** | **Pipeline execution** | **Moderate to strong:** supports follow-up discipline and weekly operation of the offer. | **Moderate:** a weekly summary and flagged records are inspectable, but only if the CRM and correspondence contain enough current activity. | **Weak to moderate:** a CRM exists, but population, stage quality, correspondence coverage, follow-up completeness, and workflow frequency are not evidenced. | **Moderate to high:** value increases with CRM, email, and calendar access and reliable identity matching. | **Moderate:** incorrect prioritization or draft messages could affect relationships; automatic changes or sends are out of scope. | **Unknown:** no pipeline owner or weekly reviewer is explicitly assigned. | **Defer build; prototype only after data-readiness check.** |

### Required proof package by workflow

| Workflow | Evidence it must produce | Evidence not yet supplied |
|---|---|---|
| **Discovery to proposal** | Input packet; traceable extraction of buyer context and constraints; qualification rubric with stated basis; recommended workflow scope; explicit risks and exclusions; proposal draft; next-step email draft; human review checklist; reviewer edit/accept/reject log; final approved version. | Representative discovery notes/transcript; approved qualification criteria; offer scope boundaries; proposal template; pricing and legal approval rules; examples of acceptable and unacceptable outputs; actual reviewer findings. |
| **Prospect intelligence** | Source register with retrieval dates where applicable; fact/hypothesis separation; fit assessment with stated basis; pain hypotheses labelled as hypotheses; relevance angle; outreach brief; missing-information list; human review checklist; reviewer correction log. | Representative prospect pack; source-quality policy; target segment and disqualification rules; privacy and sensitive-data policy; approved tone and outreach constraints; evidence that a buyer values this artifact. |
| **Pipeline execution** | Snapshot of source CRM rows and correspondence; explicit stage and follow-up rules; deterministic flags for missing fields/dates where possible; prioritized review queue with reasons; draft messages clearly separated from actions; weekly summary; reviewer decisions and corrections; audit trail showing no automatic external action. | Populated CRM sample; volume and cadence; stage definitions; record ownership; enough historical correspondence; accepted prioritization logic; identity-resolution rules; reviewer and weekly operating cadence. |

## 3. Quick wins

1. **Create one end-to-end discovery-to-proposal evidence pack.** Use a permissioned internal case or a clearly labelled test case. Keep the original input, intermediate extraction, draft outputs, reviewer comments, and approved final artifact together in the existing Drive hierarchy.
2. **Create one prospect-intelligence brief with a source register.** Require every factual statement to point to supplied or public evidence, label pain statements as hypotheses, and prohibit sending the outreach draft without Brad's approval.
3. **Define shared review statuses.** Use simple states such as `Draft`, `Needs evidence`, `Approved for demonstration`, and `Rejected`, with reviewer notes. This is operating discipline, not an integration project.
4. **Use the existing CRM and Drive as evidence containers.** Do not replace them or automate cross-system transfers until repeated runs expose stable fields and handoffs.
5. **Assemble a buyer-facing demonstration narrative around the workflow.** Show input, reasoning boundaries, human review, and approved output. Do not lead with the number of packaged agents.

No speed, revenue, conversion, or quality improvement should be claimed from these quick wins until measured evidence exists.

## 4. Defer list

| Item | Why deferred | Re-entry condition |
|---|---|---|
| Full pipeline-execution agent | CRM existence is verified, but data sufficiency, stage rules, cadence, and ownership are not. | Complete a data-readiness review and one human-run weekly pipeline review using current records. |
| Automatic CRM updates | Workflow rules and exception handling have not been proven. | Repeated reviewed runs establish stable fields, decision rules, rollback, and approver. |
| Email/calendar-triggered workflows | They add integration and permission risk before core artifact value is proven. | Manual workflow is useful, repeatable, and approved; access and audit requirements are documented. |
| Automated public-web enrichment at scale | Source standards, freshness rules, privacy constraints, and target-segment rules are missing. | Approve a bounded source policy and validate a small prospect set under review. |
| Proposal pricing or legal-term generation | No approved pricing rules, legal clauses, or delegated authority are supplied. | Provide controlled templates and explicit approval authority; retain human sign-off. |
| Website or public proof publication | The input does not include approved Client Zero claims or buyer validation. | Brad approves a fact-checked case narrative that clearly distinguishes internal evidence from client outcomes. |

## 5. Do-not-build list

- **No autonomous external sending.** Prospect outreach, follow-up, next-step emails, and proposals remain drafts until a human approves them.
- **No autonomous commercial commitments.** The system must not set price, scope, delivery promises, contractual terms, or acceptance decisions.
- **No opaque “qualification score” presented as objective truth.** If a score is used, its criteria, evidence, uncertainty, and reviewer override must be visible; an unsupported numeric threshold should not be invented.
- **No unsupported prospect profiling.** Do not infer sensitive traits, private intent, budget, pain, or readiness from weak signals. Label hypotheses and missing information.
- **No integration-first build.** Do not connect and mutate CRM, email, calendar, or Drive records before the manual workflow and evidence package are proven.
- **No agent-count-led product.** Do not market the 51 packaged agents as the offer; the product is a valuable, governable workflow and its operating evidence.
- **No paid-client outcome claims from Client Zero.** Do not publish time saved, revenue, conversion, testimonial, or customer-result language without separate verified evidence.

## 6. First sprint recommendation

### Recommended target: Discovery-to-Proposal Evidence Sprint

Build and demonstrate a **human-reviewed discovery-to-proposal workflow** first, with prospect intelligence shown as a bounded upstream companion. The sprint should prove that supplied discovery material can be turned into a traceable, reviewable commercial package without inventing buyer facts or making external commitments.

### Proposed sprint boundary

**In scope**

1. Agree a structured input packet for discovery notes/transcript, buyer context, candidate workflows, and constraints.
2. Define a transparent qualification rubric. Criteria may be specified, but weights or pass thresholds must not be fabricated without Brad's decision.
3. Produce buyer-context extraction with citations back to the input.
4. Produce recommended scope, risks, exclusions, missing information, and explicit assumptions.
5. Produce a proposal draft and next-step email draft.
6. Produce a human-review checklist and capture reviewer edits, approvals, and rejection reasons.
7. Package one end-to-end demonstration case with a clear Client Zero label.
8. Optionally attach one prospect-intelligence brief to show the upstream handoff, provided its sources and hypotheses are reviewable.

**Out of scope**

- Sending email or proposals.
- CRM mutation or automatic stage progression.
- Pricing or contractual commitments without supplied approved rules.
- General-purpose prospect enrichment at scale.
- Claims of efficiency, conversion, revenue, or client outcomes.
- Building a catalogue experience around all 51 agents.

### Sprint acceptance evidence

The sprint is complete only when the evidence pack contains:

- The exact source input and permission/classification status.
- A trace map from material claims and recommendations to source passages or visible assumptions.
- A completed qualification assessment whose criteria are explicit.
- A proposal draft with risks, exclusions, and unresolved questions.
- A next-step email marked `Draft - human approval required`.
- A reviewer checklist completed by Brad or another explicitly assigned reviewer.
- A change log showing what the reviewer accepted, corrected, rejected, or could not verify.
- A final approved demonstration artifact labelled **Internal Client Zero - not paid-client results**.

This acceptance package proves workflow control and reviewability. It does **not** by itself prove buyer demand or business impact.

## 7. 90-day roadmap

The roadmap is phased by evidence gates, not promised business outcomes.

### Days 1–30: Prove one discovery-to-proposal workflow

- Assign Brad explicitly as Client Zero owner/reviewer or name an alternative.
- Select one permissioned internal or clearly labelled test case.
- Approve the input schema, qualification criteria, proposal template, review states, and exclusion rules.
- Run the workflow manually end to end.
- Record unsupported statements, missing fields, reviewer corrections, and approval decisions.
- Produce the Client Zero evidence pack and a buyer-safe demonstration version.
- **Exit gate:** Brad confirms that the artifact is factually supportable, commercially safe to demonstrate, and clear about assumptions and exclusions.

### Days 31–60: Add prospect intelligence and repeatability

- Select a bounded prospect case with a documented source set.
- Define approved sources, freshness expectations, hypothesis labels, privacy boundaries, and tone.
- Run the prospect-intelligence workflow and hand its approved brief into a second discovery-to-proposal test where appropriate.
- Compare the two runs for recurring fields, review failures, and stable handoffs; do not claim performance improvement without measurement.
- Create a reusable demonstration script focused on workflow, governance, and evidence.
- **Exit gate:** Each factual claim is traceable, each hypothesis is labelled, reviewer decisions are logged, and no external action occurs automatically.

### Days 61–90: Test pipeline execution and decide on integration

- Audit current CRM rows, stages, owners, follow-up dates, and correspondence availability.
- Define the weekly pipeline review rules and the meaning of `stalled`, `missing next action`, and `follow-up priority`.
- Run one human-reviewed weekly summary from a static export before connecting live triggers or write access.
- Document identity mismatches, missing data, false flags, and reviewer overrides.
- Decide whether any repeated manual handoff justifies a narrow, reversible integration.
- **Exit gate:** A reviewer can reproduce the flags from stated rules, records have owners, drafts remain unsent, and any proposed integration has a defined scope, audit trail, and rollback path.

## 8. Decision rationale

1. **Discovery to proposal is closest to the premium Sprint's commercial decision.** Its desired outputs already include qualification, scope, risks, exclusions, a proposal draft, a next-step email, and human review. That makes it the strongest single workflow for demonstrating how GenX AI Pro moves from messy business context to a controlled operating artifact. [Source: `genx-client-zero-input.md`, lines 56–70]
2. **Prospect intelligence is the best companion, not the first autonomous system.** It demonstrates research discipline and personalization while keeping facts, hypotheses, gaps, and review visible. It can be tested without mutating operating systems or sending messages. [Source: `genx-client-zero-input.md`, lines 37–55]
3. **Pipeline execution is strategically useful but less ready.** The CRM and Workspace exist, but the input does not establish sufficient pipeline history, stage definitions, workflow frequency, ownership, or correspondence quality. Its value and reliability depend more heavily on live data and integration. [Source: `genx-client-zero-input.md`, lines 22–30 and 72–86]
4. **The sequence follows the stated constraint to prove workflow value before integrations.** It begins with file-based, reviewable artifacts; adds repeatability; and considers integration only after stable handoffs and exceptions are observed. [Source: `genx-client-zero-input.md`, lines 88–95]
5. **The portfolio remains honest about evidence.** Client Zero can demonstrate operating quality, traceability, governance, and artifact usefulness. It cannot yet support paid-client outcome, revenue, conversion, time-saving, testimonial, or demand claims.

## Red flags

- **Adoption owner is not formally assigned.** Brad is the logical Client Zero owner, but the input does not state this operating assignment.
- **No representative workflow cases are supplied.** Candidate schemas are not execution evidence.
- **Qualification can become false precision.** A numeric score without agreed criteria, evidence, and override rules would create unsupported certainty.
- **Proposal generation can accidentally create commitments.** Pricing, scope, timing, legal language, and external sending require explicit approval.
- **Prospect intelligence can blur facts and hypotheses.** Public signals must not be converted into asserted private pain, budget, intent, or readiness.
- **Pipeline execution may be integration-led.** A connected CRM exists, but that is not proof of populated, current, or decision-ready data.
- **Scattered proof is still a commercial weakness.** Assets have been curated into Drive, but the input does not establish an approved proof narrative or buyer validation. [Source: `genx-client-zero-input.md`, lines 19–20 and 28–30]
- **Novelty and inventory may distract from value.** The 51-agent kit should remain implementation capacity, not the product message.

## Missing information

### Needed before the first sprint starts

- Explicit owner, reviewer, and backup approver.
- One permissioned discovery case or clearly labelled test case.
- Approved qualification criteria and disqualification rules.
- Current Sprint scope boundaries, proposal template, pricing authority, and legal/commercial exclusions.
- Data classification, retention, access, and redaction rules.
- Definition of a satisfactory output and allowed review effort.

### Needed before prospect intelligence is demonstrated

- Target buyer segment and ICP/disqualification criteria.
- Approved source types and freshness standard.
- Privacy and sensitive-data boundaries.
- Approved personalization tone and prohibited inference categories.
- One representative company/contact pack.

### Needed before pipeline execution advances

- CRM row volume and completeness.
- Stage definitions, owners, follow-up standards, and weekly cadence.
- Correspondence coverage and identity-matching rules.
- Definitions for stalled opportunities and follow-up priority.
- Read/write permissions, audit requirements, error handling, and rollback.

### Needed before making commercial claims

- Buyer feedback collected under an agreed method.
- Verified baseline and post-workflow measures, if GenX AI Pro chooses to measure them.
- Permission to use any customer name, quote, logo, result, or case material.
- Clear separation between internal Client Zero evidence and paid-client outcomes.

## Recommended next action

Schedule one **portfolio approval and evidence-design review** with Brad. In that review:

1. Confirm **discovery to proposal** as the first sprint target and **prospect intelligence** as its companion demonstration.
2. Assign the owner and reviewer explicitly.
3. Select one permissioned discovery case.
4. Approve the input schema, qualification criteria, proposal boundaries, review checklist, and evidence-pack structure.
5. Record go/no-go decisions for pipeline execution and all integrations.

The smallest concrete action after approval is to place the selected source case and an empty reviewer log in the existing Revenue Operations Drive hierarchy; no integration is required.

## Human-review checklist

Before approving this portfolio:

- [ ] Confirm the first target is discovery to proposal.
- [ ] Confirm prospect intelligence is a companion demonstration, not autonomous outreach.
- [ ] Confirm pipeline execution remains gated by data readiness and a manual weekly run.
- [ ] Name the operating owner, reviewer, and backup approver.
- [ ] Verify that every case used is permissioned, classified, and appropriately redacted.
- [ ] Approve qualification criteria and reject unsupported numeric thresholds.
- [ ] Approve proposal scope, exclusions, pricing authority, and legal boundaries.
- [ ] Verify all prospect facts are sourced and all pain statements are labelled as hypotheses.
- [ ] Verify all email, proposal, and follow-up outputs remain drafts until approval.
- [ ] Confirm no CRM, email, calendar, or Drive write integration is included in the first proof.
- [ ] Confirm the demonstration is labelled `Internal Client Zero - not paid-client results`.
- [ ] Remove any implied claim of time saving, revenue, conversion, testimonial, buyer demand, or customer outcome.
- [ ] Approve the evidence required to advance each workflow to the next phase.

## Assumptions made

1. Brad Towers can act as the initial Client Zero owner and reviewer; this must be explicitly confirmed.
2. A permissioned internal case or clearly labelled test case can be assembled for demonstration.
3. The existing Workspace, Drive hierarchy, and CRM can hold evidence without requiring new integration work.
4. The first demonstration is intended to prove workflow quality, traceability, governance, and adoption readiness, not measured business impact.
5. A proposal draft and outreach/follow-up drafts are useful internal artifacts even when external sending remains manual.
6. Pipeline execution should follow, rather than lead, because its readiness depends on operational data and rules not present in the supplied input.
7. Any use of synthetic material will be clearly labelled and will not be represented as a customer, testimonial, or outcome.
