# Workflow Diagnostic: GenX AI Pro Client Zero

**Status:** Internal Client Zero operating case - not paid-client proof
**Diagnostic basis:** `genx-client-zero-input.md` and the canonical Workflow Diagnostic Agent prompt
**Decision scope:** Select the first two or three premium AI Agent Buildout Sprint demonstration workflows without inventing customer outcomes, ROI, or readiness.

## Plain-language context

GenX AI Pro is packaging a premium AI Agent Buildout Sprint. The Client Zero work has established important operating foundations: a domain mailbox and aliases, connected Google Workspace services, an organized Revenue Operations Drive, a verified three-tab CRM, private GitHub repositories for the Sprint Kit and website, and working access to the website deployment/source environment. The immediate decision is not whether GenX AI Pro has infrastructure; it is which workflows can now demonstrate a credible, reviewable operating improvement.

Three candidates were supplied:

1. **Prospect intelligence:** turn company, contact, role, public signals, and relationship context into a grounded outreach-preparation brief.
2. **Discovery to proposal:** turn discovery material and constraints into qualification, recommended scope, risks/exclusions, a proposal draft, and a next-step email.
3. **Pipeline execution:** turn CRM rows, correspondence, dates, and stage into priorities, drafts, risks, and a weekly operating summary.

The source supplies desired input and output fields, but it does not include real sample records, completed outputs, acceptance criteria, baseline process observations, or a formally named workflow owner/reviewer for any candidate. The decision below is therefore a **provisional workflow-selection decision**, not proof that any workflow has already delivered value.

## People and decision moment

| Role | Grounded finding |
|---|---|
| User/operator | Brad is identified as the owner of GenX AI Pro and the person whose commercial workflow the Client Zero work supports. Whether another operator will run each workflow is not stated. |
| Buyer | The immediate internal buyer is Brad/GenX AI Pro. The target paid-client buyer persona for the Sprint is not specified in the input. |
| Workflow owner | Not formally named per workflow. **Provisional assumption:** Brad owns the Client Zero runs. |
| Human reviewer | External sending and commercial commitments must remain under human review, but the reviewer is not explicitly named. **Provisional assumption:** Brad reviews Client Zero outputs; a future client workflow owner reviews client runs. |
| Decision moment | Now: before turning one or more candidates into the first premium Sprint demonstration and before building integrations. |

## Known facts, hypotheses, and missing evidence

### Known facts from the supplied input

- GenX AI Pro's immediate commercial goal is to package and sell a premium AI Agent Buildout Sprint.
- A 51-package Sprint Kit exists, is in a restored private GitHub repository, and passes deterministic validation.
- A three-tab Sprint CRM with Prospects, Activity, and Pipeline views has been created and verified.
- A Revenue Operations Drive hierarchy and curated commercial/demo assets exist.
- Gmail, Calendar, Drive, Docs, Sheets, and Contacts are connected through revocable OAuth.
- Buyer-facing proof is described as scattered across source files, old demos, and internal documentation.
- No paid-client results may be claimed; this must remain labeled as an internal Client Zero case.
- External sending and commercial commitments require human review.
- Integrations must not be built before workflow value is demonstrated.
- The number of agents is not the product.

### Hypotheses to test, not facts

- Prospect intelligence may improve the specificity and reviewability of outreach preparation.
- Discovery-to-proposal may be the clearest premium demonstration because it connects buyer evidence to a commercially consequential artifact.
- Pipeline execution may become valuable once the new CRM contains enough current, representative activity.
- The existing Workspace and CRM foundations may make manual, human-reviewed test runs easier, but their existence does not prove workflow value.

### Material missing across all candidates

- Real or sanitized sample inputs and corresponding human-approved outputs.
- Current-process notes showing how Brad performs each workflow today, including pain points and failure modes.
- Per-workflow acceptance criteria and an agreed scoring method.
- A named owner and final reviewer for each workflow.
- Data-handling rules for personal data, correspondence, transcripts, and confidential buyer material.
- Evidence of frequency/volume and the decision each output must support.
- Buyer persona and intended audience for the premium demonstration.
- Approved tone, offer language, pricing, scope, exclusions, and proof points where relevant.

## Scoring scale

Scores are diagnostic judgments, not measured outcomes:

- **1/5:** poor or unknown
- **2/5:** weak; substantial evidence missing
- **3/5:** plausible; testable with bounded preparation
- **4/5:** strong candidate; clear value/review pattern, but proof still required
- **5/5:** demonstrated with representative evidence and repeatable acceptance criteria

No candidate can receive 5/5 on data readiness because no representative sample inputs or accepted outputs were supplied.

---

# Candidate 1: Prospect intelligence

## 1. Workflow fit verdict

**Strong first demonstration candidate, conditional on real or sanitized prospect packets.** The workflow is bounded, has explicit inputs and outputs, naturally separates public facts from pain hypotheses, and can end at a human-reviewed brief rather than autonomous outreach. It is suitable as the first stage of a coherent commercial operating sequence.

The strongest kit starting point is the **Warm Prospect Research Agent**, whose stated mission is to create a concise prospect brief with likely workflow pains, a message angle, relevance hook, and call hypothesis. Its boundaries against unsupported business claims and over-research match this candidate.

## 2. Value score

**4/5 - strong value hypothesis, not yet evidenced.**

The output is directly connected to a commercial action: deciding whether and how to approach a prospect. It can demonstrate evidence-aware research, useful hypotheses, missing information, and a review gate. The score is not 5 because there are no examples showing that the brief changed a decision, improved quality, or reduced effort.

## 3. Data readiness score

**3/5 - input schema exists; representative records do not.**

The supplied company/contact/role/public-signal/relationship-context fields are a credible intake structure. Readiness is limited by the absence of actual prospect packets, permitted research sources, relationship-history examples, segment/initiative fields, and approved outreach style.

## 4. Human-review clarity score

**4/5 - the boundary is clear; the named reviewer is not.**

The source explicitly requires human review before external sending. The demonstration should stop at an outreach brief and draft; Brad must accept, edit, or reject it before use. The score remains below 5 until that reviewer and acceptance criteria are formally recorded.

## 5. Integration dependency warning

**Low for the demonstration; high if scope expands.** Run the first tests from a manually assembled source packet and save the reviewed artifact in the existing delivery workspace. Do not add automated scraping, CRM enrichment, contact lookup, CRM writeback, or email sending in the base demonstration. Public information must be source-linked, and relationship context must come from supplied records rather than inference.

## 6. Recommended base agent

**Primary:** `warm-prospect-research-agent`
**Optional supporting pattern:** `business-research-agent` only where a bounded, source-cited research brief is needed. Do not broaden the demonstration into open-ended research.

## 7. No-go or proceed decision

**PROCEED to a bounded, human-reviewed Client Zero test.** Do not present it as validated or connect it to autonomous outreach until the evidence pack below exists.

## 8. Missing material request

Request:

1. Two or more real or sanitized prospect packets representing different evidence quality.
2. The purpose of each approach and the relevant Sprint offer angle.
3. Allowed public sources and rules for using personal/relationship data.
4. Brad's approved outreach tone plus one accepted and one rejected example, if available.
5. A named reviewer and a simple accept/edit/reject rubric.

### Evidence this workflow must produce

- A source-linked prospect brief that visibly separates facts, hypotheses, and unknowns.
- A pain/relevance hypothesis that does not imply knowledge the sources do not support.
- A human review record showing accepted, edited, and rejected sections.
- A documented go/no-go or next-conversation decision supported by the brief.
- A repeatable intake template and review checklist that work across at least two contrasting samples.

This is evidence of workflow quality and repeatability, **not** evidence of higher response, conversion, or revenue.

---

# Candidate 2: Discovery to proposal

## 1. Workflow fit verdict

**Highest-value premium demonstration candidate, but not ready to run from the current input alone.** It connects messy buyer context to a consequential, reviewable artifact and makes workflow scope, exclusions, and uncertainty visible. It should be the second stage in the demonstration, after sufficient discovery material exists.

No single base agent covers the full requested output safely. The recommended pack is a controlled sequence: diagnose missing discovery first, then draft scope/proposal only after gaps are resolved or explicitly marked.

## 2. Value score

**5/5 as a value hypothesis; unproven in operation.**

A proposal and scope recommendation directly supports the premium Sprint sale and can show the difference between raw notes and a governed commercial draft. This rating assesses relevance to the commercial decision, not realized revenue, conversion, or time savings.

## 3. Data readiness score

**2/5 - desired fields are defined, but the core commercial evidence is absent.**

No discovery notes/transcript, buyer context, candidate-workflow record, constraints, qualification framework, approved offer scope, pricing, exclusions, proof points, or accepted proposal example was supplied. Generating a proposal now would invite unsupported scope and commercial claims.

## 4. Human-review clarity score

**4/5 - mandatory review is stated, but approval roles are incomplete.**

Brad should review qualification and workflow scope as commercial owner, and any future client sponsor/workflow owner should confirm factual accuracy. Pricing, scope, exclusions, commitments, and external wording require explicit approval before sending. Legal terms are outside the agent's approval authority.

## 5. Integration dependency warning

**Low for drafting; do not integrate in the base demonstration.** A transcript or notes file can be supplied manually, and the output can be reviewed in Docs. Do not auto-create proposals, update CRM stages, issue documents, schedule meetings, or send follow-up email. OAuth connectivity is an available foundation, not permission to automate these actions.

## 6. Recommended base agent

**Pack:**

1. `discovery-gap-agent` - identify missing pain, fit, value, stakeholder, risk, and next-step evidence.
2. `proposal-sow-generator-agent` - draft only after gaps are answered or marked as assumptions/exclusions.

A qualification method and GenX AI Pro-specific proposal template still need to be supplied; the base agents must not invent them.

## 7. No-go or proceed decision

**CONDITIONAL PROCEED.** Select this for the premium demonstration, but do not run or show a buyer-facing proposal until at least one representative discovery packet and approved commercial guardrails are available. If those materials cannot be supplied, park the workflow rather than fabricate a polished proposal.

## 8. Missing material request

Request:

1. One or more real or sanitized discovery-note/transcript samples.
2. The approved Sprint offer structure, deliverables, assumptions, exclusions, and pricing or explicit instruction to leave pricing blank.
3. The qualification framework and decision thresholds, if one is used.
4. Approved proof points, clearly distinguishing internal Client Zero evidence from paid-client results.
5. An accepted proposal/SOW example or a blank approved template.
6. Named factual, commercial, and final-send reviewers.
7. Data-retention and confidentiality rules for transcripts and buyer information.

### Evidence this workflow must produce

- A gap report that distinguishes evidenced needs from unanswered questions.
- A qualification result traceable to supplied criteria, or an explicit statement that no approved scoring model exists.
- A scope recommendation whose deliverables, assumptions, exclusions, and dependencies trace to source material.
- A proposal draft with no invented pricing, ROI, proof, dates, legal terms, or commitments.
- A next-step email held for human approval.
- A review log showing which statements were accepted, corrected, removed, or escalated.
- A reusable discovery-to-proposal intake, sequence, and approval matrix.

This can demonstrate safer translation from discovery to commercial draft; it cannot yet demonstrate better close rates, revenue, or delivery outcomes.

---

# Candidate 3: Pipeline execution

## 1. Workflow fit verdict

**Good later operating workflow, but defer it from the first premium demonstration.** The verified CRM gives it a credible foundation, and its weekly outputs are useful. However, the CRM is newly established and the input supplies no live rows, correspondence, follow-up history, stage rules, or accepted weekly summary. Without representative activity, the demonstration risks showing a dashboard-shaped artifact rather than a proven workflow.

## 2. Value score

**4/5 - commercially relevant and recurring, but dependent on operating history.**

Stalled-opportunity review, next-action quality, follow-up prioritization, and pipeline risk can support a consistent sales cadence. No evidence currently shows the volume, recurrence, or current pain necessary to prove this value.

## 3. Data readiness score

**2/5 - infrastructure is verified; usable workflow evidence is not.**

The CRM has Prospects, Activity, and Pipeline views, but schema details, field definitions, sample rows, message history, stage criteria, follow-up rules, and weekly metrics were not supplied.

## 4. Human-review clarity score

**4/5 - drafts and system changes are clearly review-gated.**

Brad should approve priorities, messages, stage interpretations, and any CRM update. The workflow must not invent next steps or alter the system of record automatically. A named backup/future workflow owner and explicit approval procedure remain missing.

## 5. Integration dependency warning

**Medium to high if implemented too early.** Reading from and writing to Gmail/Sheets/CRM may appear convenient because access exists, but the source explicitly prohibits integration before value is demonstrated. First export or manually provide a bounded snapshot. Do not auto-update records, change stages, schedule follow-ups, or send messages.

## 6. Recommended base agent

**Primary later-stage base:** `crm-pipeline-hygiene-agent` for missing-field, next-step, and risk review.
**Possible expansion after proof:** `gtm-pipeline-agent` for a weekly pipeline diagnosis, prioritized actions, and tailored follow-up drafts.

## 7. No-go or proceed decision

**DEFER from the first demonstration; allow a later manual pilot once representative pipeline activity exists.** This is not a rejection of the workflow. It is a sequencing decision that honors the integration and evidence constraints.

## 8. Missing material request

Request:

1. A sanitized CRM snapshot containing representative Prospect, Activity, and Pipeline records.
2. Field definitions, stage criteria, follow-up rules, and the current weekly review process.
3. Recent correspondence and notes linked to sample records, with permission to use them.
4. Brad's current prioritization logic and examples of strong/weak next actions.
5. A named reviewer and rules for approving drafts and system-of-record changes.
6. At least one human-approved weekly summary example or a blank target template.

### Evidence this workflow must produce before expansion

- A source-traceable stalled-opportunity and missing-field audit.
- Priorities whose rationale points to supplied dates, stages, notes, or correspondence.
- Draft messages that introduce no unsupported commitments and remain unsent pending review.
- A review log of accepted/rejected priorities and corrections to false positives.
- A repeatable weekly summary from bounded snapshots over more than one review cycle.

No time saving, forecast improvement, pipeline conversion, or revenue impact should be claimed without separately collected evidence.

---

# Portfolio recommendation

## Recommended first workflow selection

Select **two workflows** for the first premium Client Zero demonstration:

1. **Prospect intelligence** using `warm-prospect-research-agent`.
2. **Discovery to proposal** using a gated `discovery-gap-agent` → `proposal-sow-generator-agent` sequence.

These form a coherent buyer journey: prepare for a relevant conversation, capture what remains unknown, and translate sufficiently evidenced discovery into a controlled commercial draft. They also demonstrate two premium capabilities without making the agent count the product: evidence-aware judgment and governed artifact creation.

**Defer pipeline execution** to the next phase, after the new CRM contains representative activity and the first two workflows have defined how prospect and discovery evidence enters the operating process.

## Overall no-go or proceed decision

**PROCEED CONDITIONALLY with a two-workflow, manual, human-reviewed Client Zero demonstration.**

This is a no-go for:

- Claiming paid-client results or presenting Client Zero as customer proof.
- Inventing time savings, revenue, conversion, testimonials, or outcomes.
- Autonomous research conclusions, external sending, proposal approval, or commercial commitments.
- CRM/Gmail/Calendar/Drive writeback automation before workflow value is demonstrated.
- Positioning all 51 agents, or the count itself, as the product.
- Treating deterministic kit validation as evidence that these business workflows produce valuable outputs.

## Risks and gaps

1. **Proof gap:** Infrastructure and package validation are verified, but workflow outcomes are not.
2. **Sample gap:** None of the candidates includes a representative input/output pair in the diagnostic source.
3. **Ownership gap:** Brad is the evident Client Zero sponsor, but per-workflow ownership and final reviewers are not formally named.
4. **Acceptance gap:** No candidate has agreed criteria for accept, edit, reject, or escalate decisions.
5. **Commercial guardrail gap:** Discovery-to-proposal lacks approved pricing, offer scope, exclusions, proof, and legal boundaries.
6. **Data-governance gap:** Handling rules for prospect personal data, correspondence, transcripts, and confidential notes are not supplied.
7. **Integration trap:** Existing OAuth and CRM foundations could encourage premature automation contrary to the explicit constraint.
8. **Demonstration bias:** A polished one-off output may look compelling without proving repeatability across contrasting cases.
9. **Attribution risk:** Any future commercial result would require a separate evidence method before attributing it to an agent workflow.

## Recommended next actions

1. **Brad confirms selection and ownership:** approve prospect intelligence and discovery-to-proposal as the two Client Zero workflows; name the operator and final reviewer for each.
2. **Create bounded evidence packs:** assemble at least two sanitized prospect packets and at least one sanitized discovery packet, using only material approved for the test.
3. **Define acceptance criteria before running:** use fact/hypothesis separation, completeness, decision usefulness, tone, safety, and edit burden as review dimensions; do not insert unevidenced ROI targets.
4. **Set commercial guardrails:** provide approved Sprint offer language, scope, exclusions, pricing rules, proof points, and escalation items for the proposal stage.
5. **Run manually with no writeback:** generate artifacts from supplied packets and store reviewed versions in the existing delivery workspace. Keep drafts unsent.
6. **Capture evidence:** retain source packet, raw output, reviewer edits, accept/edit/reject decision, and reasons. Record failures as well as successful sections.
7. **Rerun on a contrasting case:** confirm whether the intake, prompts, and review gates are reusable rather than polishing one showcase example.
8. **Decide after review:** proceed, revise, or park each workflow. Only then decide whether a narrow integration is justified.
9. **Backlog pipeline execution:** begin its manual pilot only when a sanitized CRM snapshot and operating history are available.

## Human-review checklist

### Before each run

- [ ] The workflow owner, operator, and final reviewer are named.
- [ ] Source material is real or sanitized and approved for this use.
- [ ] Personal, confidential, or commercially sensitive data handling is confirmed.
- [ ] The intended decision and audience are explicit.
- [ ] Acceptance criteria and escalation rules are recorded.

### Review of each output

- [ ] Every factual claim is traceable to supplied material or an allowed public source.
- [ ] Hypotheses and unknowns are visibly labeled.
- [ ] No metric, price, date, ROI, testimonial, customer result, or commitment was invented.
- [ ] Recommended actions follow from the evidence rather than filling gaps with confidence.
- [ ] Scope, assumptions, exclusions, and dependencies are explicit where applicable.
- [ ] External language has been accepted, edited, or rejected by the named human reviewer.
- [ ] Nothing was sent and no system of record was changed automatically.

### Portfolio decision

- [ ] Prospect intelligence works across contrasting samples, not only one polished case.
- [ ] Discovery gaps are resolved or carried visibly into scope and exclusions.
- [ ] Client Zero evidence is labeled as internal operating evidence.
- [ ] Pipeline execution remains deferred until representative CRM activity exists.
- [ ] Any proposed integration has a demonstrated workflow benefit and a separate approval decision.

## Assumptions made

- **Assumption:** Brad is the provisional Client Zero workflow owner and human reviewer because the business is identified as his consultancy and no other owner is named.
- **Assumption:** The premium demonstration is intended to support GenX AI Pro's own go-to-market motion first; a specific external buyer persona is not supplied.
- **Assumption:** Manual transfer of approved inputs and outputs into the existing workspace is acceptable for a bounded test. No automated access or writeback is assumed.
- **Assumption:** Scores assess current suitability and readiness from the supplied evidence; they are not measured performance results.
- **Assumption:** The identified kit agents remain starting templates that require GenX AI Pro-specific inputs, review criteria, and guardrails.

## Final recommendation

Build the first premium Client Zero demonstration around **Prospect Intelligence** followed by **Discovery to Proposal**, with explicit human gates and retained review evidence. **Defer Pipeline Execution and all integrations** until the CRM contains representative activity and the two selected workflows have demonstrated repeatable, source-grounded value. This recommendation authorizes test preparation only; it does not authorize external sending, commercial commitments, or claims of customer outcomes.
