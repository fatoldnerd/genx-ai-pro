# Veterinary Practice Human-Review Matrix Output

> **Classification:** Clearly synthetic test material. Willowbrook Veterinary Practice, Priya Shah, Dr Hannah Cole, Marcus Lee, every client, animal, message, rule, and circumstance referenced below are fictional. This artifact is not customer evidence, clinical guidance, a real veterinary record, regulatory approval, or proof of a delivered result.

## Situation and input assessment

This matrix governs an AI-assisted workflow for ten synthetic inbound client messages (V01-V10). The AI may classify, summarize, identify missing information, suggest internal routing, and draft text for human review. It may not make a clinical, operational, financial, or external-communication decision.

- **Workflow owner:** Priya Shah, fictional practice manager.
- **Clinical reviewer on duty:** Dr Hannah Cole, fictional veterinary surgeon.
- **Operational user:** Marcus Lee, fictional client-care lead.
- **Audience before approval:** Willowbrook staff only.
- **Decision moments:** priority assignment; routing; acceptance of a summary; approval of draft wording; any use of practice data or policy; and the final decision by a human to send or act.
- **Input quality:** The synthetic rules, emergency triggers, roles, and messages are sufficient to define review gates. They are deliberately insufficient to answer questions about appointments, prices, payment plans, registration, prescribing, clinical records, discharge instructions, out-of-hours routing, bereavement, or aftercare.
- **Evidence boundary:** This is a controlled synthetic workflow test. It does not establish clinical safety, regulatory compliance, suitability for identifiable or confidential records, buyer demand, staff adoption, time or cost savings, client satisfaction, animal outcomes, or permission to integrate with any practice system.

### Facts, assumptions, and unknowns

**Supplied facts**

- The priority framework is P0-P4 as defined in the synthetic input.
- V01 and V02 contain supplied P0 emergency triggers.
- V03, V04, and V10 require P1 clinical review.
- V07 and V08 require P2 practice-manager review; a qualified reviewer may add clinical escalation if clinical content arises.
- V05, V06, and V09 are administrative requests with information needed to answer omitted.
- No AI-generated message may be sent automatically.
- No response-time service level is supplied.

**Operating assumptions used only to make this matrix runnable**

- Marcus is the first human queue operator because he is the named operational user; this does not give him clinical authority.
- Priya can own workflow exceptions and manager-review items because she is the named workflow owner and practice manager; this does not give her clinical authority.
- Dr Hannah is the required reviewer for clinical content because she is the named veterinary surgeon on duty.
- A trained human staff member, not the AI, performs any final send or system action after the required approvals. The supplied material does not name the individual sender for each channel.

**Unknowns that must not be inferred**

- Current appointment availability; prices; payment-plan rules; registration status and procedure; prescribing and repeat-medication process details; patient records; discharge instructions; and bereavement or aftercare procedure.
- Out-of-hours provider name, number, and routing instructions.
- Delegation rules for registered veterinary nurses or other clinical staff.
- Data-protection, identity-verification, record-access, complaint-handling, and message-retention procedures.
- Who is authorized to send on each channel or make each system change.
- Coverage when Priya, Dr Hannah, or Marcus is unavailable.

## 1. Review matrix

**Approval labels**

- **Route:** Internal handoff only. It does not approve a response or action.
- **Review:** Check the AI output and decide the next human step.
- **Approve wording:** Accept or rewrite exact text for possible external use.
- **Act/send:** A human performs the action or sends the approved text through an authorized process. AI never does this.
- **Dual approval:** Every named approval is required; one reviewer cannot approve outside their role.

| Message / output | Assigned tier and reason | AI-permitted internal output | Required reviewer and approval level | Approval conditions | Prohibited AI decision or action | Escalation trigger |
|---|---|---|---|---|---|---|
| **V01 — Milo: breathing difficulty, pale gums, will not stand; asks whether this can wait** | **P0 — Immediate clinical escalation.** Breathing difficulty is a supplied emergency trigger; the message also asks for a safe-delay decision. | Flag P0; faithfully summarize; display the source wording; route internally to Dr Hannah. A neutral draft may be prepared only as unapproved text and must contain no clinical instruction or timing promise. | **Dr Hannah: immediate clinical review and approval of any clinically relevant wording or next-step instruction.** Marcus may route and, only after required approval, perform an authorized human send. | Clinical reviewer checks original message, identity/context available to staff, urgency handling, and exact wording. Internal escalation must not wait for draft completion. | Diagnose; interpret symptoms; say Milo is safe to wait; advise treatment; promise when someone will respond; send. | Any failure to reach the on-duty clinical reviewer, uncertainty about urgency, or new symptoms: continue P0 escalation through a human-approved practice route. The route itself is not supplied here and must not be invented. |
| **V02 — Luna: repeated litter-tray attempts, no urine seen, crying; asks what to give** | **P0 — Immediate clinical escalation.** Inability to urinate is a supplied emergency trigger; medication/treatment advice is requested. | Flag P0; summarize without interpretation; route internally to Dr Hannah. A neutral unapproved draft may acknowledge receipt but may not answer what to give. | **Dr Hannah: immediate clinical review and approval of any clinically relevant wording or next-step instruction.** Marcus may route and later perform an authorized human send after approval. | Reviewer uses the original message, not the AI summary alone; no treatment or medication wording leaves the practice without clinical approval. Escalation does not wait for drafting. | Diagnose; recommend what to give; authorize medication; determine safe delay; promise timing; send. | Same fail-closed P0 path as V01 if the named reviewer is unavailable or the message changes. No omitted out-of-hours details may be invented. |
| **V03 — Pepper: post-operative wound appears more open; absent photo; asks if normal** | **P1 — Prompt clinical review.** Post-operative concern and symptom interpretation are clinical; the referenced image is unavailable. | Flag P1; state that the photo is absent; summarize; route to Dr Hannah; draft only non-clinical acknowledgment text. | **Dr Hannah: clinical review and approval of all clinical content or next-step wording.** Marcus may handle an approved administrative acknowledgment and human send. | Reviewer checks the original message and any materials obtained through approved practice processes. The AI summary must not imply it inspected the absent photo. | Interpret the wound or photo; say it is normal; diagnose; advise treatment; determine safe delay; alter records; send. | Any newly reported P0 trigger or inability to exclude immediate risk from new information moves the item to P0. |
| **V04 — Archie: repeat tablets and same-dose approval requested** | **P1 — Prompt clinical review.** Medication, refill, and dose request; medication and prescribing context are absent. | Flag P1; list missing medication name, dose, history, examination, and prescribing status; route to Dr Hannah. | **Dr Hannah: clinical/prescribing review under the practice's current process and approval of any wording about medication.** Marcus may route and send only approved text. | Current practice process and relevant record must be checked by authorized humans; neither is supplied to the AI. | Approve a refill or prescription; keep or change a dose; infer prescribing eligibility; update a record; promise completion; send. | Missing record/process, clinical concern, or reviewer uncertainty stays with qualified clinical review; it must not be converted to a routine administrative approval. |
| **V05 — Nori: cancel Thursday vaccination appointment and move to Saturday** | **P4 — Missing information / clarification.** Administrative request, but calendar and availability are absent. | Summarize the requested changes; identify calendar/availability gaps; draft a non-committal acknowledgment labelled for approval. | **Marcus: administrative review and approval of wording.** A human authorized under the practice's actual process must separately verify availability and perform any appointment change. **Priya reviews policy exceptions or unresolved ownership.** | Wording must not state that an appointment is cancelled, moved, held, or available unless an authorized human has verified and completed the relevant action. | Book, cancel, hold, or move an appointment; access or alter the calendar/record; promise availability or timing; send. | Clinical content discovered moves to P1/P0 as applicable. Policy/authority uncertainty goes to Priya. |
| **V06 — Jasper: vaccination price and instalment request** | **P4 — Missing information / clarification.** Prices and payment-plan policy are absent. | Identify both missing inputs; draft a neutral acknowledgment or request for approved follow-up, with no amount, eligibility statement, or deadline. | **Marcus: initial administrative review. Priya: required approval for any payment-plan, exception, financial-adjustment, or policy wording.** A current supplied price may be used only after an authorized human verifies it. | Exact price source and current payment policy must be verified outside the AI output. If the response discusses instalment eligibility or exceptions, Priya must approve exact wording. | Quote or estimate an unsupplied price; approve instalments or a financial adjustment; invent policy; promise timing; send. | Any unresolved price/payment authority or exception goes to Priya. Clinical questions move to qualified clinical review. |
| **V07 — Bella: disputed charge, unexplained blood test, threat of online criticism** | **P2 — Sensitive manager review.** Payment dispute, complaint, clinical-explanation element, and reputational risk. | Flag P2; separate the billing complaint, request for explanation, and public-criticism threat; list missing invoice, estimate, record, and prior communications; draft only calm, non-defensive text for review. | **Priya: manager approval of the entire response and any financial/complaint wording. Dr Hannah: additional required approval for any clinical explanation of the blood test.** Marcus may send only the final approved wording if authorized. | Dual approval applies if the response contains any clinical explanation. Relevant source documents must be checked by humans. No deadline or remedy may be promised without human authority. | Explain or interpret the blood test; assign fault; approve refund/credit/adjustment; promise resolution today; alter records; send. | Clinical concern to Dr Hannah; privacy concern or missing complaint/payment process to Priya. Any unsolved conflict between approvals remains unsent. |
| **V08 — Tilly: death at home; asks what to do next** | **P2 — Sensitive manager review.** Bereavement communication; aftercare procedure is absent. | Flag P2; summarize compassionately; identify missing bereavement/aftercare procedure; draft a brief compassionate acknowledgment with no procedural or clinical claims. | **Priya: manager review and approval of bereavement/aftercare wording. Dr Hannah: additional review for any clinical statement or clinical question.** Marcus may send only approved wording if authorized. | Use only verified current practice procedure. Do not imply cause, outcome, or available service. Tone must be compassionate and non-judgmental. | State or imply cause of death; give unsupplied aftercare instructions; promise service or timing; change records; send. | Any clinical question goes to Dr Hannah. Missing procedure, ownership, or sensitive exception remains with Priya and unsent until resolved. |
| **V09 — Coco: prospective client asks about registration** | **P4 — Missing information / clarification.** Administrative request; registration status and procedure are absent. | Identify missing registration status/procedure; draft a neutral acknowledgment without claiming that registration is open. | **Marcus: administrative review and approval of wording. Priya: review if registration policy or authority is unclear.** | A human must verify the current registration position and procedure before any factual answer. | Claim the practice is accepting clients; register the client/animal; update systems or records; promise timing; send. | Policy or ownership gap goes to Priya. Any clinical content is separately routed P1/P0. |
| **V10 — Finn: asks whether bandage removal was today or tomorrow** | **P1 — Prompt clinical review.** The answer depends on discharge instructions/clinical record and could amount to treatment advice. | Flag P1; state that discharge instructions and record are unavailable to the AI; route to Dr Hannah; draft only a non-clinical acknowledgment. | **Dr Hannah: clinical review and approval of the instruction or exact clinically relevant wording.** Marcus may send only after approval if authorized. | Authorized human checks the actual record/instructions. The AI summary is not evidence of what the nurse said. | Choose today or tomorrow; advise bandage removal; infer instructions; alter the record; promise timing; send. | Missing or conflicting instructions stay with Dr Hannah; any new P0 trigger moves to P0. |

### Cross-message review decisions

| AI output type | Default decision owner | Human decision required before reliance |
|---|---|---|
| Priority and queue placement | Marcus for operational inspection; Dr Hannah for P0/P1 clinical priority; Priya for P2 sensitivity | Confirm against the original message and supplied trigger list; upgrade when uncertain. Never downgrade P0/P1 or use P4 to delay an emergency trigger. |
| Summary and missing-information list | Reviewer responsible for the tier | Confirm material facts, negation, time references, attachments, omissions, and that no interpretation has been added. |
| Internal route recommendation | Marcus executes routing; Priya owns workflow exceptions | Confirm recipient has the appropriate role. Routing is not approval of content or action. |
| Administrative draft | Marcus; Priya when sensitive, financial, complaint, policy, or exception content appears | Verify every factual statement against supplied/current approved practice information and approve exact wording. |
| Clinical or clinically relevant draft | Dr Hannah | Qualified clinical review of exact wording is mandatory. The AI may not originate diagnosis, treatment advice, safe-delay decisions, medication authorization, or record-derived instructions. |
| Sensitive-manager draft | Priya; Dr Hannah additionally for clinical content | Approve exact tone, facts, remedy/commitment boundaries, and any clinical wording. |
| External send or operational/system action | Authorized human under an actual practice process, not established by this artifact | Confirm all required approvals, then the human performs the send/action. AI never sends, books, cancels, alters a record, or makes a financial adjustment. |

## 2. Risk tier definitions

The supplied **P0-P4 priority framework is also the minimum review tier** for this test. It controls routing and review; it is not a clinical diagnosis, prognosis, or response-time SLA.

| Tier | Trigger | Minimum reviewer | Approval standard | Permitted AI role | Fail-closed rule |
|---|---|---|---|---|---|
| **P0 — Immediate clinical escalation** | A supplied emergency trigger is present, or immediate risk cannot safely be excluded. | Dr Hannah, the named veterinary surgeon on duty. | Immediate human clinical review of the original message; exact approval for any next-step or clinical wording. Internal routing must not wait for a draft. | Detect supplied trigger, flag, quote/summarize without interpretation, and route internally. | Never downgrade because information is missing. Never answer whether the animal can wait. If the route/reviewer is unavailable, escalate through a human-approved route not defined here; do not invent contact instructions. |
| **P1 — Prompt clinical review** | Any other symptom, post-operative concern, medication question, change in condition, or record-dependent clinical instruction. | Dr Hannah. | Clinical reviewer checks original source and relevant available records/materials; approves any clinically relevant response. | Flag, summarize, identify missing material, route, and draft only within non-clinical boundaries. | New emergency trigger or inability to exclude immediate risk moves to P0. Administrative staff cannot approve clinical content. |
| **P2 — Sensitive manager review** | Complaint, bereavement, euthanasia-related communication, privacy concern, payment dispute, or reputational risk. | Priya. Dr Hannah additionally for any clinical content. | Manager approves whole response; clinical reviewer separately approves clinical portions. | Identify sensitive topics, summarize, identify missing evidence, and draft calm text for review. | No blame, remedy, financial adjustment, policy, deadline, or clinical explanation may be invented. Dual approval is mandatory when clinical content exists. |
| **P3 — Administrative review** | Routine non-clinical request answerable in full from supplied and verified practice information. | Marcus. Priya for exceptions or policy uncertainty. | Client-care reviewer verifies every factual statement and approves exact wording. | Classify, summarize, route, and draft supported administrative wording. | If a needed fact or authority is absent, use P4; if clinical/sensitive content appears, use P1/P0 or P2. None of V05, V06, or V09 qualifies for a complete P3 answer on the supplied data. |
| **P4 — Missing information / clarification** | Request cannot be routed or answered safely without more context and contains no emergency trigger. | Reviewer matched to the underlying subject: Marcus for administration, Priya for sensitive/policy/financial issues, Dr Hannah for clinical issues. | Reviewer confirms the missing facts and approves any clarification or acknowledgment wording. | Expose the gap and draft non-committal text. | P4 must never delay a supplied emergency trigger. It is not permission to infer policy, clinical facts, availability, price, or timing. |

**Conflict rule:** Apply the highest-risk applicable gate and all specialist approvals. P0 overrides every other tier. P1 clinical review and P2 manager review may both apply; neither substitutes for the other.

## 3. Approval rules

1. **AI output is internal and unapproved by default.** Every draft must visibly state **Human approval required before sending**.
2. **No AI output may diagnose, advise treatment, interpret symptoms/images/wounds/tests/records, determine prognosis or safe delay, authorize medication/prescriptions/refills/dose changes, alter appointments or records, quote unsupplied prices, approve financial adjustments, promise timing, or send externally.**
3. **Clinical content always requires qualified human review.** For this test, Dr Hannah is the named qualified clinical reviewer. Priya or Marcus cannot substitute for that approval.
4. **P0 is route-first, not draft-first.** Marcus must route the original message and alert to Dr Hannah; drafting cannot delay the internal escalation. The AI does not determine the clinical response.
5. **Review the source, not only the summary.** The reviewer must compare each output with the original message and available attachments/records. An AI summary is not a clinical or operational record.
6. **Approval attaches to exact wording and current facts.** Material edits, new client information, changed symptoms, changed price/availability/policy, or a new commitment invalidate prior approval and require re-review.
7. **No silent downgrade.** A P0/P1/P2 item may be downgraded only by the reviewer with authority for that risk. The reason and reviewer must be recorded by a human under an approved practice process, which is not supplied here.
8. **Multiple risks require multiple approvals.** Priya approves the full P2 response; Dr Hannah separately approves any clinical content. All required approvals must exist before external use.
9. **Missing evidence means withhold, clarify, or escalate.** It never licenses invention. The reviewer must remove unsupported facts or obtain them through an authorized practice process.
10. **Administrative approval is bounded.** Marcus may approve only non-clinical wording fully supported by verified practice information. He cannot approve policy exceptions, payment decisions, clinical statements, or system changes.
11. **Manager approval is bounded.** Priya owns sensitive communications and workflow exceptions, but cannot approve clinical content unless separately qualified and acting under an actual practice process; no such additional qualification is supplied here.
12. **Human send/action is separate from content approval.** After all approvals, an authorized human must make the final send or perform any appointment, financial, or record action. This artifact does not grant that authority or define the practice procedure.
13. **No timing claims.** “Immediate” and “prompt” describe internal priority gates only. They do not create a client response-time promise or SLA.
14. **No implied veterinary review.** A message may say it was reviewed by a veterinarian only when a named qualified reviewer actually reviewed it and a human confirms that statement is accurate.
15. **No use of omitted out-of-hours details.** If such routing is needed, staff must use a verified current practice source; the AI may not invent a provider, number, or instruction.

## 4. Review checklist by output type

### A. Priority classification and queue entry

- [ ] Original message ID, channel, received time, client, and animal match the source.
- [ ] Emergency-trigger wording was checked directly against the supplied list.
- [ ] V01/V02 remain P0; V03/V04/V10 remain at least P1; V07/V08 remain at least P2.
- [ ] V05/V06/V09 expose missing operational information rather than imply completion or an answer.
- [ ] P4 has not been used where an emergency trigger exists.
- [ ] Mixed risks carry every required reviewer, including dual Priya/Dr Hannah review where relevant.
- [ ] The entry does not state a diagnosis, prognosis, safe-delay decision, treatment, or unsupplied SLA.

### B. Summary and missing-information output

- [ ] Summary preserves uncertainty, client wording, negations, chronology, and the actual request.
- [ ] No symptom, image, wound, test, instruction, or record has been interpreted.
- [ ] Missing attachment/record is explicit (for example, V03's absent photo).
- [ ] Missing operational data is explicit: calendar, availability, prices, payment policy, registration status/procedure, prescribing details, record/instructions, complaint documents, or bereavement/aftercare procedure as applicable.
- [ ] No omitted information has been filled from general knowledge.
- [ ] The summary is visibly internal and unapproved.

### C. Internal routing or escalation notice

- [ ] Tier and evidence-based reason are stated without diagnosis.
- [ ] Correct named reviewer is selected: Dr Hannah for clinical; Priya for P2/manager; Marcus for supported administration.
- [ ] Original message is available to the reviewer; the AI summary is not the sole source.
- [ ] P0 routing occurs without waiting for a draft.
- [ ] Reviewer unavailability does not cause an AI-created route or contact detail.
- [ ] Route does not imply that content, treatment, medication, timing, or external communication is approved.

### D. Administrative acknowledgment or clarification draft

- [ ] Draft begins or ends with **Human approval required before sending**.
- [ ] Marcus has checked every statement against supplied/current approved information.
- [ ] No appointment is represented as booked, cancelled, moved, or available unless a human has separately verified and completed the action.
- [ ] No unsupplied price, payment eligibility, registration status, policy, or timing appears.
- [ ] Questions request only necessary clarification and do not delay P0/P1 escalation.
- [ ] Tone is calm, compassionate, concise, non-judgmental, and free of false reassurance.
- [ ] A human—not the AI—will perform any authorized send.

### E. Clinical, medication, post-operative, or record-dependent draft

- [ ] Dr Hannah reviewed the original message and any relevant material available through authorized practice processes.
- [ ] Exact clinically relevant wording has Dr Hannah's approval.
- [ ] Draft contains no AI-generated diagnosis, treatment advice, symptom/image/wound/test interpretation, prognosis, safe-delay decision, medication authorization, dose decision, or inferred record instruction.
- [ ] Medication/prescribing outcome was not inferred from missing process or record details.
- [ ] The draft does not claim veterinary review unless that review actually occurred.
- [ ] New information was re-tiered and re-reviewed where required.
- [ ] Draft carries **Human approval required before sending** until the final human send decision.

### F. Complaint, payment, reputational, bereavement, or other P2 draft

- [ ] Priya reviewed and approved the entire response.
- [ ] Dr Hannah separately approved any clinical explanation or statement.
- [ ] Invoice, estimate, prior communication, record, procedure, or policy claims are supported by materials humans actually checked.
- [ ] No blame, admission, refund, credit, instalment plan, deadline, aftercare service, or resolution is promised without human authority and evidence.
- [ ] Tone acknowledges concern or loss without false reassurance, defensiveness, or speculation.
- [ ] Privacy-sensitive material is not repeated unnecessarily.
- [ ] Draft carries **Human approval required before sending** until final human send.

### G. Final external-use and action gate

- [ ] All reviewers required by the tier and topic approved the exact final text.
- [ ] No material change or new information occurred after approval.
- [ ] Sender/action-taker is a human authorized under an actual practice process; this matrix does not confer authorization.
- [ ] Recipient identity, channel, and included data/attachments have been checked under the practice's real procedure, which is not supplied here.
- [ ] No autonomous send, booking, cancellation, record update, prescribing action, financial adjustment, or system change will occur.
- [ ] The approval and send/action can be recorded using an approved human process; the process is a missing input, not invented here.

## 5. Escalation path

1. **AI flags and holds.** The output remains internal, carries its tier and evidence, and is never sent or actioned automatically.
2. **Marcus inspects the source and routes.** He checks that identifiers and the original message are attached. He may correct clerical classification but cannot make clinical judgments.
3. **P0/P1 clinical route:** Marcus routes the original message to Dr Hannah. P0 routing takes precedence over drafting. Dr Hannah decides the clinical handling and approves any clinically relevant external wording.
4. **P2 manager route:** Marcus routes the item to Priya. If any clinical statement, symptom, test, medication, record instruction, or clinical question is involved, Priya also routes that portion to Dr Hannah; both approvals are required.
5. **P3/P4 administrative route:** Marcus may review supported administrative wording. Missing or uncertain policy, authority, price, payment, registration, appointment, sender, or exception ownership goes to Priya. Clinical uncertainty goes to Dr Hannah and is re-tiered P1/P0.
6. **Conflicting or incomplete review:** Do not send and do not act. Keep the highest applicable tier, identify the unresolved question, and return it to the reviewer with authority for that subject.
7. **Named reviewer unavailable:** Do not substitute the AI or an unauthorized person. Use the practice's verified human escalation/cover process. No cover rota or route is supplied, so this matrix cannot name one.
8. **New information:** Reassess the tier. New P0 trigger causes P0 escalation; new clinical content requires Dr Hannah; new sensitive-manager content requires Priya. Prior wording approval is void if materially affected.
9. **System or external action:** Once exact wording and action are approved, an authorized human performs the send or operational action. If authorization is unclear, stop and escalate to Priya rather than infer it.

## 6. External-use boundary

### Internal use permitted in this synthetic test

Subject to human inspection, the AI may produce:

- queue classification using the supplied P0-P4 rules;
- faithful summaries and missing-information lists;
- internal reviewer/routing suggestions;
- draft administrative acknowledgments or clarification text;
- non-clinical draft wording for clinical or sensitive items, provided it remains internal and does not cross the prohibited decision boundaries.

Every draft remains marked **Human approval required before sending**.

### External use permitted only after human approval

A human may choose to use exact draft wording externally only when:

- the required reviewer(s) approved that exact final text;
- all facts, current policies, recipient details, and attachments were verified through an authorized practice process;
- any clinical content received qualified clinical review from Dr Hannah;
- any P2 content received Priya's approval;
- a human authorized under the practice's real process makes the send; and
- no material change or new information invalidated approval.

This is a review gate, not permission from this artifact to communicate with a client.

### Always prohibited for the AI

The AI may not:

- diagnose or suggest a diagnosis;
- advise or recommend treatment, including what to give an animal;
- interpret symptoms, photographs, wounds, test results, instructions, or clinical records;
- determine prognosis or whether an animal is safe to wait;
- authorize medication, a prescription, a refill, or a dose continuation/change;
- book, cancel, hold, or change an appointment;
- update, create, or alter a patient/client record or practice-management system;
- quote or estimate an unsupplied price;
- approve instalments, refunds, credits, discounts, or other financial adjustments;
- invent policy, availability, registration status, out-of-hours details, owner authority, or clinical facts;
- promise a response, appointment, resolution, medication, result, or any other timing;
- claim a veterinarian reviewed a message unless that review actually occurred and is verified by a human;
- send a client message, publish content, contact another party, or trigger any external/system action.

### Data and integration boundary

The synthetic pack does not establish suitability for confidential or identifiable records and does not grant access to email, SMS, website forms, patient records, calendars, pricing, payment, prescribing, messaging, or practice-management systems. Any live-data handling, integration, logging, retention, or access-control work is outside this artifact and requires separate approved design and review. No claim of regulatory compliance is made.

### Evidence and marketing boundary

This output may be described only as a synthetic workflow test artifact. It must not be presented as a customer case study, testimonial, clinical guidance, proof of demand, proof of clinical safety or regulatory compliance, proof of adoption or savings, proof of improved satisfaction/outcomes, or proof that autonomous operation is safe.

## 7. Owner map

| Role | Named fictional owner | Owns | May approve | Must not approve or perform by virtue of this matrix | Backup / unresolved boundary |
|---|---|---|---|---|---|
| Workflow owner / practice-manager reviewer | **Priya Shah** | Workflow exceptions; P2 sensitive review; unresolved policy, authority, financial, complaint, bereavement, privacy, and reputational issues | Exact P2 wording; manager aspects of dual-review responses; administrative exceptions when supported by verified practice authority | Clinical content; diagnosis/treatment; medication; safe delay; autonomous send; system action. This matrix does not itself grant financial or operational authority. | No backup or coverage process supplied. |
| Clinical reviewer on duty | **Dr Hannah Cole** | P0/P1 clinical review; clinical portions of mixed-risk responses; clinically relevant wording | Exact clinical or next-step wording after reviewing appropriate source material under the practice's actual process | AI autonomy; manager policy/financial decisions; autonomous send or system action | No backup clinician or cover route supplied. RVN delegation rules are not supplied. |
| Operational user / client-care lead | **Marcus Lee** | Source checking; queue inspection; internal routing; supported non-clinical administrative draft review | Exact administrative wording fully supported by verified information; clerical corrections to queue entries | Clinical decisions/content; P2 final approval; financial/policy exceptions; medication; appointment or record changes unless separately authorized by a real practice process; autonomous send | Sender and system-action authority are not supplied. Escalate unclear ownership to Priya. |
| Final sender / action-taker | **Not named in supplied input** | Human send or approved operational action under the practice's real process | Only what their actual role/process authorizes after all content approvals | No AI may fill this role. This matrix does not confer channel, calendar, record, prescribing, or financial authority. | Must be named and authorized before live use. |
| AI assistant | **No human authority** | Internal classification, summary, gap identification, routing suggestion, and review-labelled drafting | Nothing | All clinical, operational, financial, record, appointment, medication, timing, and external-use decisions/actions | Always hands off to the appropriate named human. |

## Red flags

- P0 alert waits behind drafting, queue order, or a request for clarification.
- V01 is answered with whether Milo can wait, or V02 is answered with what to give Luna.
- V03's absent photo is described as reviewed or interpreted.
- V04 refill or same dose is treated as routine administration.
- V05 is represented as cancelled/rebooked without an authorized human calendar action.
- V06 contains a price, instalment decision, or financial promise not in supplied evidence.
- V07 contains an AI explanation of the blood test, a financial remedy, blame, or a promise to fix the issue today.
- V08 contains invented aftercare instructions, services, cause-of-death language, or false reassurance.
- V09 says the practice is accepting clients without verified current information.
- V10 chooses today or tomorrow without qualified review of the actual instructions/record.
- A P4 label is used to postpone a message containing a P0 trigger.
- Marcus or Priya is treated as a substitute for qualified clinical review.
- Dr Hannah's clinical approval is treated as manager, financial, sender, or system-action approval.
- A draft loses the label **Human approval required before sending**.
- An AI output is copied externally without exact-text approval or is materially edited after approval without re-review.
- A price, SLA, out-of-hours number, policy, clinical fact, record fact, appointment availability, authority, or compliance claim is invented.
- The synthetic output is described as real customer evidence or proof of safety, compliance, value, demand, adoption, or outcomes.

## Missing information

Before any live or external deployment, the practice would need to supply and approve at least:

- Named qualified clinical cover and escalation route when Dr Hannah is unavailable.
- Named manager and operational cover when Priya or Marcus is unavailable.
- Authorized final sender(s) and channel-specific approval/send process.
- Current out-of-hours provider details and routing instructions.
- Appointment-booking/cancellation authority, verification, and completion process.
- Current prices, source of truth, payment-plan rules, and financial-adjustment authority.
- New-client registration status, procedure, and owner.
- Prescribing and repeat-medication process, including authorized roles and record checks.
- Bereavement/aftercare and complaint-handling procedures.
- Identity verification, privacy, data-access, retention, audit, and record-handling requirements.
- Rules for use of attachments/photos and access to clinical or discharge records.
- RVN/clinical delegation and escalation boundaries.
- Approval-log format, evidence retention, and the method for invalidating/re-reviewing changed drafts.
- Response targets, if the practice has them; none may be inferred from “immediate” or “prompt.”

These are gaps, not inferred policies and not commitments to new delivery scope.

## Recommended next action

**Priya should run one documented tabletop review of V01-V10 with Dr Hannah and Marcus before any external or live-data use.** For each message, they should confirm the tier, required reviewer(s), prohibited decision, missing source information, exact human send/action owner, and what happens if the named reviewer is unavailable. Any unresolved item should remain internal and blocked. The exercise should not send messages, alter appointments/records, or use real client data.

## Human-review checklist

Before Brad or the fictional practice accepts this artifact:

- [ ] Confirm the entire artifact is clearly marked synthetic and is not represented as customer, clinical, compliance, or outcome evidence.
- [ ] Confirm all seven contracted artifacts are present: review matrix, risk tiers, approval rules, output-type checklists, escalation path, external-use boundary, and owner map.
- [ ] Confirm Priya, Dr Hannah, and Marcus are described as fictional and their authority is bounded.
- [ ] Confirm V01/V02 are P0; V03/V04/V10 are P1; V07/V08 are P2; V05/V06/V09 expose P4 missing information.
- [ ] Confirm P0 cannot be delayed by P4 clarification or drafting.
- [ ] Confirm all clinical content requires Dr Hannah's qualified human review.
- [ ] Confirm sensitive and clinical mixed content requires both Priya and Dr Hannah.
- [ ] Confirm no AI output may diagnose, advise treatment, determine safe delay, authorize medication, alter appointments or records, quote unsupplied prices, promise timing, or send externally.
- [ ] Confirm final human sender/action authority, coverage, and live procedures are explicitly missing rather than invented.
- [ ] Confirm no regulatory-compliance, clinical-safety, commercial-value, adoption, saving, satisfaction, or outcome claim is made.
- [ ] Confirm the next action is an internal synthetic tabletop review, not live deployment.

## Assumptions made

1. Marcus is used as the first queue operator because the supplied input calls him the operational user and client-care lead.
2. Priya is used for workflow exceptions and P2 review because the supplied input calls her the workflow owner and practice manager.
3. Dr Hannah is used for required clinical review because the supplied input calls her the clinical reviewer on duty and a veterinary surgeon.
4. “Immediate” and “prompt” are priority labels only; they are not invented response-time commitments.
5. The person authorized to perform a final send, appointment action, record action, or financial action is not assumed. Where this artifact says Marcus “may send,” it is conditional on separate authorization under the practice's real process.
6. No assumption is made that a registered veterinary nurse may substitute for Dr Hannah; delegation details are explicitly absent.
7. No real-world regulation or unsupplied practice policy is asserted. The rules in this artifact come only from the synthetic test input and evidence boundary.
