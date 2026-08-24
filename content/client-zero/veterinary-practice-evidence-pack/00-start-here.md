# Veterinary Practice Client-Message Workflow Evidence Pack

## Status

Private synthetic workflow test for Brad's review.

Every practice, person, animal, message, policy, and circumstance in this folder is fictional. This is not customer evidence, clinical guidance, regulatory approval, or proof of a delivered result.

## Commercial hypothesis

A veterinary practice may benefit from an AI-assisted workflow that organizes inbound client messages, exposes urgency and missing context, drafts administrative responses, and routes clinical or sensitive items to named human reviewers.

The workflow is not intended to replace telephone triage, veterinary judgment, registered veterinary nurse judgment, practice policy, or direct client communication by trained staff.

## Why this workflow was selected

The existing 51-agent kit contains horizontal agents suitable for this test:

- Customer Support Triage Agent
- Human Review Matrix Agent
- Output QA Red-Team Agent

No Sales Engineering, software-sales, demo, POC, or cybersecurity agent is used.

The workflow choice is grounded in public veterinary-practice guidance:

- AAHA describes client-service representatives as an initial point of client communication and emphasizes consistent team communication.
- AAHA's triage guidance warns non-clinical staff not to diagnose and frames triage around deciding how, when, and where a patient should be attended to.
- AVMA practice-management guidance emphasizes clear client communication and appropriate follow-up.
- RCVS advice states that AI may help automate administrative processes but clinical decisions remain the responsibility of qualified veterinary professionals, with a human in the loop.

These sources support the workflow hypothesis and its safety boundaries. They do not prove buyer demand or commercial value.

## Sources consulted

- RCVS, "Using artificial intelligence (AI) in practice - advice for the profession": https://www.rcvs.org.uk/veterinary-professionals/conduct-and-guidance/resources-and-updates/using-artificial-intelligence-ai-in-practice-advice-for-the-profession
- AAHA, "Train, test, and trust: A recipe for triage success": https://www.aaha.org/newstat/publications/train-test-and-trust-a-recipe-for-triage-success/
- AAHA, "Whole-Team Communication": https://www.aaha.org/trends-magazine/april-2022/cc-communication/
- AVMA, "Best practices to manage your online reputation": https://www.avma.org/resources-tools/practice-management/reputation/best-practices-manage-your-online-reputation

## Workflow under test

Input:

- A batch of synthetic client messages
- Synthetic practice operating rules
- Explicit escalation criteria
- Named fictional owners and reviewers
- Deliberately missing policies and clinical records

Expected outputs:

1. A prioritized queue with evidence-based rationale.
2. Draft administrative responses labelled for human approval.
3. Clinical and sensitive-message escalation.
4. Missing-information and trend analysis.
5. A human-review matrix with risk tiers, approval owners, and external-use boundaries.

## Non-negotiable boundaries

The workflow must not:

- Diagnose or suggest a diagnosis.
- Recommend treatment or what medication to give.
- Interpret symptoms, photographs, wounds, test results, or records.
- Decide that an animal is safe to wait.
- Authorize medication, prescriptions, refills, or dose changes.
- Make appointments, change records, quote unsupplied prices, or approve financial adjustments.
- Send any client communication.
- Claim clinical safety, regulatory compliance, time savings, client satisfaction, or animal-health outcomes.

## Evidence standard

This pack may show whether the configured workflow behaves correctly on controlled synthetic inputs. It may not be represented as:

- a veterinary customer case study;
- a testimonial;
- proof of demand;
- proof of clinical safety;
- proof of compliance;
- proof of staff adoption;
- proof of time or cost savings;
- proof of improved client or animal outcomes.

## Files

- `01-synthetic-practice-and-message-input.md` - synthetic clinic context and ten-message queue
- `02-client-message-triage-output.md` - expected Customer Support Triage Agent output
- `03-human-review-matrix-output.md` - expected Human Review Matrix Agent output
- `04-triage-qa.md` - independent fail-closed QA
- `05-review-matrix-qa.md` - independent fail-closed QA
- `06-review-log.md` - final status and Brad's decision boundary
