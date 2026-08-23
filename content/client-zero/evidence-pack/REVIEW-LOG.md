# Client Zero Evidence Review Log

## Review roles

- **Workflow operator:** Harvey, running canonical packaged agents
- **Automated QA reviewer:** Canonical Output QA Red-Team Agent
- **Commercial owner and external-use approver:** Brad Towers
- **Current external-use status:** Not approved

## Decision states

- `Pending generation`
- `Generated, QA pending`
- `Blocked by QA`
- `Usable after revision`
- `Ready for Brad review`
- `Approved for private demonstration`
- `Rejected`

## Artifact decisions

| Artifact | Expected behavior | Automated QA state | Brad decision | Notes |
|---|---|---|---|---|
| Case A Discovery Gap output | Identify gaps and give a proposal-readiness verdict | 100/100, PASS, accepted as client-ready synthetic discovery output | Pending | Synthetic test only; kickoff remains blocked by stated gates |
| Case B Discovery Gap output | Give a no-go or substantial-redefinition verdict | 99/100, ACCEPT; current request NO-GO; Proposal Agent BLOCKED | Pending | Synthetic test only; no proposal generated |
| Case A Proposal and SOW output | Produce a scope-safe £5,000 Starter proposal draft | 98/100, PASS, accepted for human proposal review subject to explicit gates | Pending | Internal draft only; external sending and kickoff remain gated |

## Required review questions

### Grounding

- Does every factual statement trace to the synthetic input?
- Are assumptions and unknowns visibly labelled?
- Did the agent invent any person, metric, commitment, capability, policy, or buyer intent?

### Commercial safety

- Is the £5,000 price used only because it was supplied?
- Are two-week timing and two-workflow scope preserved?
- Are integrations, autonomous sending, legal approval, and guaranteed outcomes excluded?
- Does Case B remain a no-go rather than becoming a discounted proposal?

### Evidence boundary

- Is every artifact clearly labelled synthetic?
- Does the pack avoid customer, testimonial, revenue, conversion, time-saving, or adoption claims?
- Is external use still subject to Brad's explicit approval?

## Final decision

No artifact in this folder is approved for public or prospect use until:

1. The canonical QA report contains no unresolved blockers.
2. The evidence contract passes.
3. Brad reviews the private evidence pack and explicitly approves the demonstration boundary.
