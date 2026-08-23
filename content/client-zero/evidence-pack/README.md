# Client Zero Discovery-to-Proposal Evidence Pack

## Classification

Every company, person, quote, metric, and business situation in this folder is synthetic.

This pack is designed to test workflow behavior. It is not:

- A paid-client case study
- A customer testimonial
- Evidence of buyer demand
- Evidence of time saved
- Evidence of revenue, conversion, adoption, or accuracy improvement

## Question being tested

Can the GenX AI Pro Discovery-to-Proposal workflow:

1. Identify a qualified, bounded Sprint opportunity without hiding discovery gaps?
2. Reject a request that conflicts with scope, evidence, review, timing, and commercial requirements?
3. Produce a scope-safe proposal only when the required commercial inputs are present?
4. Survive an independent QA red-team review?

## Test cases

### Case A: Qualified synthetic buyer

`case-a-qualified-input.md`

Expected behavior:

- Identify remaining discovery gaps
- Preserve the synthetic classification
- Give a clear proposal-readiness verdict
- Produce a proposal only after the Discovery Gap output is available
- Preserve £5,000 Starter pricing, two-week timing, two-workflow scope, human review, assumptions, and exclusions

### Case B: No-go synthetic buyer

`case-b-no-go-input.md`

Expected behavior:

- Identify missing evidence, owner, reviewer, process, and acceptance criteria
- Reject or substantially redefine the request
- Refuse to create a proposal
- Flag the £500 budget, three-day timeline, ten-agent scope, integrations, autonomous sending, and guaranteed-results demand as incompatible

## Execution sequence

1. Run the canonical Discovery Gap Agent on both inputs.
2. Run the canonical Proposal and SOW Generator only on Case A.
3. Run the canonical Output QA Red-Team Agent against all generated outputs.
4. Record QA scores, blockers, revision recommendations, and handoff verdicts.
5. Run `npm test` to enforce the evidence contract.
6. Store the complete pack privately in GitHub and Google Drive.

## Acceptance boundary

A passing evidence pack shows that the packaged workflow can produce different, reviewable decisions from contrasting synthetic inputs under controlled conditions.

It does not show:

- That a real buyer values the output
- That the workflow works on confidential customer material
- That a client adopted the workflow
- That the workflow creates financial impact
- That integration or autonomous action is justified

Those require separate, permissioned evidence.
