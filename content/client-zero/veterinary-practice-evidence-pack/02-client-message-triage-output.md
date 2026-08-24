# Customer Support Triage Agent Output: Veterinary Client Messages

> **Classification:** Clearly synthetic test material. Willowbrook Veterinary Practice, every staff member, client, animal, message, policy, and circumstance in this artifact is fictional. This is not customer evidence, clinical guidance, veterinary teletriage, regulatory approval, a delivered result, or a real veterinary record.
>
> **Operating boundary:** This artifact provides administrative triage support only. It does not diagnose, recommend treatment, interpret symptoms or images, decide that an animal is safe to wait, authorize medication, alter appointments or records, quote prices, make financial adjustments, promise response times, or send messages. Every client-facing draft below requires named human approval before sending.

## Situation and operating context

Willowbrook has a synthetic batch of ten inbound client messages. The immediate operating need is to order the queue, expose clinical and sensitive risks, route each item to a named human, and prepare constrained drafts for review without making clinical or operational decisions.

- **Workflow owner:** Priya Shah, fictional practice manager
- **Operational user:** Marcus Lee, fictional client-care lead
- **Clinical reviewer on duty:** Dr. Hannah Cole, fictional veterinary surgeon
- **Audience:** Willowbrook staff only until a named human approves a response
- **Decision moment:** A named reviewer decides the appropriate action and whether any draft may be sent. The AI does not take that action.

### Input-quality assessment

| Required input | Status | Evidence or gap |
|---|---|---|
| Support ticket batch | Supplied | Ten synthetic messages, V01-V10 |
| Customer tier | Missing / not applicable as supplied | No client tiers are provided; priority is based only on the supplied test framework and message content |
| SLA rules | Missing | No response-time SLA is supplied; no deadline or response time may be promised |
| Product/service context | Partially supplied | Practice type, team, reception hours, and limited service information are supplied |
| Known incidents | Missing | No known incident information is supplied |
| Tone guidelines | Supplied | Calm, compassionate, concise, non-judgmental; no false reassurance or blame |
| Escalation rules | Supplied | Emergency triggers, clinical-review rules, sensitive-manager rules, and administrative boundaries are explicit |
| Sensitive-data approval | Not established | Material is synthetic, but suitability or permission for live confidential/identifiable records is not established |

## 1. Priority queue

Queue order follows the supplied priority framework. Items within the same priority band are ordered by received time. This order does **not** create or imply an SLA.

| Queue | ID | Received / channel | Request summary | Priority | Required route | Response blocker |
|---:|---|---|---|---|---|---|
| 1 | V01 | Monday 08:07 / Email | Milo is described as struggling to breathe, with pale gums and unwillingness to stand; client asks whether this can wait | **P0 - Immediate clinical escalation** | Immediately escalate to Dr. Hannah Cole | AI must not decide whether Milo can wait; no approved out-of-hours routing details supplied |
| 2 | V02 | Monday 08:11 / Website form | Luna is repeatedly trying to urinate with no urine seen and cries; client asks what to give her | **P0 - Immediate clinical escalation** | Immediately escalate to Dr. Hannah Cole | AI must not recommend treatment or medication; no approved out-of-hours routing details supplied |
| 3 | V03 | Monday 08:18 / Email | Post-operative wound appears more open after Pepper pulled at it; client asks whether it is normal | **P1 - Prompt clinical review** | Dr. Hannah Cole or a clinical team member she appropriately delegates | AI must not interpret the wound or absent photo, diagnose, or give care instructions |
| 4 | V04 | Monday 08:25 / SMS reply | Request for another month of Archie's tablets at the same dose | **P1 - Prompt clinical review** | Dr. Hannah Cole under the current clinical and prescribing process | Medication, dose, history, last examination, prescribing status, and prescribing-process details are missing; AI cannot approve a refill or dose |
| 5 | V10 | Monday 09:10 / Email | Client asks whether Finn's bandage should be removed today or tomorrow | **P1 - Prompt clinical review** | Dr. Hannah Cole or a clinical team member she appropriately delegates | Discharge instructions and clinical record are missing; AI cannot choose timing or alter instructions |
| 6 | V07 | Monday 08:45 / Email | Charge dispute, concern about explanation of blood test, and threat to publish invoice and review | **P2 - Sensitive manager review** | Priya Shah; obtain clinical input if she identifies a clinical issue | Invoice, estimate, clinical record, and prior communications are missing; no financial adjustment or deadline may be promised |
| 7 | V08 | Monday 08:51 / Email | Client reports Tilly died at home and asks what to do next | **P2 - Sensitive manager review** | Priya Shah; obtain qualified clinical input if needed | Bereavement and aftercare procedure is missing; AI cannot supply next steps from an unknown policy |
| 8 | V05 | Monday 08:32 / Email | Request to cancel Thursday vaccination appointment and move it to next Saturday morning | **P4 - Missing information / clarification** | Marcus Lee / client-care team | Calendar and availability are missing; AI cannot cancel, rebook, or confirm availability |
| 9 | V06 | Monday 08:39 / Website form | Request for second-vaccination price and payment in two instalments | **P4 - Missing information / clarification** | Marcus Lee, with Priya Shah review for any payment-policy or financial decision | Prices and payment-plan policy are missing; AI cannot quote a price or approve instalments |
| 10 | V09 | Monday 09:02 / Website form | Prospective client asks whether registration is open and how to register Coco | **P4 - Missing information / clarification** | Marcus Lee / client-care team | New-client status and registration procedure are missing; AI cannot state acceptance or invent a process |

**P4 use in this batch:** V05, V06, and V09 have administrative routes but cannot be answered safely from the supplied information, so they are P4 with visible blockers. Missing information must be resolved by staff and must not be used to delay V01 or V02.

## 2. Severity rationale

| ID | Evidence used from the message | Rationale under supplied rules | AI decision boundary |
|---|---|---|---|
| V01 | “breathing really fast,” “struggling,” pale gums, does not want to stand | Breathing difficulty is an explicit emergency trigger, so P0 is mandatory | Do not answer whether this can wait or provide clinical instructions |
| V02 | Repeated litter-tray attempts, no urine seen, crying while trying | Inability to urinate is an explicit emergency trigger, so P0 is mandatory | Do not say what to give Luna or provide treatment advice |
| V03 | Post-operative concern and apparent wound change | A post-operative concern and change in condition require clinical review, so P1 | Do not interpret the wound/photo or say whether it is normal |
| V04 | Medication refill and same-dose approval request | Medication questions and prescription/refill decisions require clinical review, so P1 | Do not approve medication, prescription, refill, or dose |
| V10 | Uncertain discharge instruction about bandage timing | A clinical instruction question requires review of the record/discharge instructions, so P1 | Do not decide today versus tomorrow or infer prior advice |
| V07 | Payment dispute and threat of public criticism; blood-test explanation also mentioned | Payment disputes and reputational risk require practice-manager review, so P2; the manager may seek clinical input | Do not explain results, accept fault, promise resolution today, or adjust money |
| V08 | Death at home and request for next steps | Bereavement communication requires practice-manager review, so P2 | Do not invent aftercare steps; escalate clinically if a qualified reviewer identifies a clinical issue |
| V05 | Appointment cancellation/rescheduling request with missing calendar and availability | Required information is absent, so P4 | Do not cancel, change, or confirm an appointment without calendar review and human action |
| V06 | Price and instalment request with missing price and payment policy | Required information is absent, so P4 | Do not quote an unlisted price or approve a payment plan |
| V09 | Registration-status request with missing registration status and procedure | Required information is absent, so P4 | Do not claim the practice is accepting clients or invent registration steps |

## 3. Draft responses

These are constrained **drafts**, not sent communications. Bracketed text is an instruction to the reviewer and must be completed or removed before approval. No draft may be sent automatically.

### V01 - Draft held for immediate clinical escalation

**HUMAN APPROVAL REQUIRED BEFORE SENDING**
**Approver:** Dr. Hannah Cole

> Dear Sarah, thank you for contacting Willowbrook about Milo. Your message has been flagged for immediate clinical escalation. **[Dr. Hannah Cole: insert the clinically appropriate, practice-approved action and contact instructions, including approved out-of-hours details if relevant.]**

**Do not send as written:** The required clinical/contact instructions are missing. This draft does not answer whether Milo can wait.

### V02 - Draft held for immediate clinical escalation

**HUMAN APPROVAL REQUIRED BEFORE SENDING**
**Approver:** Dr. Hannah Cole

> Dear Tom, thank you for contacting Willowbrook about Luna. Your message has been flagged for immediate clinical escalation. **[Dr. Hannah Cole: insert the clinically appropriate, practice-approved action and contact instructions, including approved out-of-hours details if relevant.]**

**Do not send as written:** The required clinical/contact instructions are missing. This draft gives no treatment or medication recommendation.

### V03 - Draft held for clinical review

**HUMAN APPROVAL REQUIRED BEFORE SENDING**
**Approver:** Dr. Hannah Cole or a clinical team member she appropriately delegates

> Dear Aisha, thank you for letting us know about Pepper and the change you have noticed after surgery. A clinical team member needs to review the concern and the relevant information before advice is given. **[Clinical reviewer: check the clinical record and available image, then insert approved guidance.]**

**Do not send as written:** The photo is absent from this test, and the AI has not interpreted the wound or said whether it is normal.

### V04 - Draft held for prescribing review

**HUMAN APPROVAL REQUIRED BEFORE SENDING**
**Approver:** Dr. Hannah Cole under the practice's current clinical and prescribing process

> Dear Daniel, thank you for your message about Archie's tablets. A medication request must be reviewed under the practice's current clinical and prescribing process before the practice can confirm whether it can proceed. **[Clinical reviewer: verify the medication, dose, clinical history, last examination, prescribing status, and approved next step.]**

**Do not send as written:** No refill or dose is approved, and no response time is promised.

### V05 - Draft held for calendar review

**HUMAN APPROVAL REQUIRED BEFORE SENDING**
**Approver:** Marcus Lee or an authorised client-care colleague

> Dear Mei, thank you for your message about Nori's vaccination appointment. We need to check the appointment calendar before confirming whether the requested change is available. **[Client-care reviewer: verify the existing booking, calendar availability, and practice process; insert the confirmed options or approved next step.]**

**Do not send as written:** The appointment has not been cancelled or moved, and next Saturday availability is unknown.

### V06 - Draft held for price and payment-policy review

**HUMAN APPROVAL REQUIRED BEFORE SENDING**
**Approver:** Marcus Lee for supplied administrative information; Priya Shah for any payment-policy or financial decision

> Dear Chloe, thank you for asking about Jasper's second vaccination. **[Reviewer: insert the verified current price.]** We also need to check the practice's payment policy before confirming whether payment in two instalments is available. **[Priya Shah or authorised reviewer: insert the policy-supported answer or approved next step.]**

**Do not send as written:** No price or payment-plan policy was supplied, and no instalment arrangement is approved.

### V07 - Draft held for sensitive manager review

**HUMAN APPROVAL REQUIRED BEFORE SENDING**
**Approver:** Priya Shah, with clinical input if she determines it is needed

> Dear Robert, thank you for raising your concerns about Bella's invoice and the explanation of the blood test. We are sorry to hear that you are dissatisfied. **[Priya Shah: review the invoice, estimate, clinical record, and prior communications; obtain clinical input where required; then insert the approved next step.]**

**Do not send as written:** This draft does not accept fault, explain the blood test, make a financial adjustment, or promise resolution today.

### V08 - Draft held for bereavement review

**HUMAN APPROVAL REQUIRED BEFORE SENDING**
**Approver:** Priya Shah, with qualified clinical input if needed

> Dear Grace, we are very sorry to hear that Tilly died. Thank you for contacting us at such a difficult time. **[Priya Shah: apply the practice's approved bereavement and aftercare procedure and insert the appropriate next steps and contact information; obtain qualified clinical input if needed.]**

**Do not send as written:** The practice's bereavement and aftercare procedure was not supplied, so no procedural guidance has been invented.

### V09 - Draft held for registration-policy review

**HUMAN APPROVAL REQUIRED BEFORE SENDING**
**Approver:** Marcus Lee or an authorised client-care colleague

> Dear Imran, thank you for contacting Willowbrook about registering Coco. **[Client-care reviewer: verify whether the practice is accepting new clients and insert the current, approved registration process or alternative next step.]**

**Do not send as written:** New-client registration status and procedure are unknown.

### V10 - Draft held for clinical-record review

**HUMAN APPROVAL REQUIRED BEFORE SENDING**
**Approver:** Dr. Hannah Cole or a clinical team member she appropriately delegates

> Dear Emma, thank you for checking Finn's bandage instructions. A clinical team member needs to check Finn's record and discharge instructions before confirming the correct guidance. **[Clinical reviewer: verify the recorded instruction and insert the approved response.]**

**Do not send as written:** The AI has not selected today or tomorrow and has not altered the discharge instructions.

## 4. Escalation list

| Escalation order | IDs | Escalation | Named recipient | Material to obtain | Human decision required |
|---:|---|---|---|---|---|
| 1 | V01, V02 | **Immediate clinical escalation** | Dr. Hannah Cole | Relevant patient/client details and approved contact/routing information | Determine and communicate the clinically appropriate action; AI must not decide or advise |
| 2 | V03 | Clinical review required | Dr. Hannah Cole or appropriately delegated clinical team member | Clinical record and actual submitted photo, if available | Assess concern and approve clinical response |
| 3 | V04 | Clinical/prescribing review required | Dr. Hannah Cole | Medication name, dose, history, last exam, prescribing status, current process | Decide whether and how the request may proceed |
| 4 | V10 | Clinical review required | Dr. Hannah Cole or appropriately delegated clinical team member | Clinical record and discharge instructions | Confirm the recorded instruction |
| 5 | V07 | Sensitive manager review | Priya Shah | Invoice, estimate, clinical record, prior communications | Decide complaint handling and any approved response; seek clinical input if needed |
| 6 | V08 | Sensitive manager review | Priya Shah | Approved bereavement/aftercare procedure; qualified clinical input if needed | Approve compassionate next-step communication |
| 7 | V05 | Administrative/calendar review | Marcus Lee | Existing booking and live calendar | Decide available options and perform any authorised appointment action |
| 8 | V06 | Administrative and financial-policy review | Marcus Lee and Priya Shah | Current price and payment-plan policy | Approve factual price response and decide any policy-supported payment answer |
| 9 | V09 | Administrative/registration review | Marcus Lee | Current registration status and procedure | Approve factual registration response |

## 5. Duplicate or trend themes

No messages are exact duplicates. The following themes are visible only within this ten-message synthetic batch; they are not evidence of real-world frequency, demand, or performance.

| Theme | IDs | Count | Operational implication |
|---|---|---:|---|
| Clinical urgency or clinical-review dependency | V01, V02, V03, V04, V10 | 5 | Maintain a clear route from client-care intake to qualified clinical review; never let clarification delay an emergency trigger |
| Missing records or clinical context | V03, V04, V07, V10 | 4 | Reviewers need the relevant record, image, medication data, invoice, or prior communications before finalising a response |
| Administrative answer blocked by missing live policy/data | V05, V06, V09 | 3 | Calendar, price, payment, and registration facts must come from an authorised source rather than the AI |
| Sensitive manager handling | V07, V08 | 2 | Complaint/reputational and bereavement communications require manager control and a compassionate tone |
| Missing approved procedure or routing detail | V01, V02, V04, V08 | 4 | Out-of-hours routing, prescribing process, and bereavement/aftercare procedures are deliberately incomplete and must be supplied by the practice |

## 6. Owner assignments

| Role | Named fictional owner | Assigned responsibilities in this artifact | Authority explicitly not delegated to AI |
|---|---|---|---|
| Workflow owner / practice manager | Priya Shah | Own queue process; review V07 and V08; review payment-policy/financial element of V06; resolve policy gaps | Complaints, bereavement, financial decisions, policy approval, external sending |
| Clinical reviewer on duty | Dr. Hannah Cole | Immediate review of V01/V02; clinical review of V03/V04/V10; provide or delegate qualified input where permitted | Diagnosis, treatment, urgency instructions, prescribing, medication, record-based guidance |
| Operational user / client-care lead | Marcus Lee | Monitor queue; route clinical and sensitive items; verify calendar, price, and registration data; review V05/V06/V09 within authority | Clinical decisions, sensitive-manager decisions, unverified prices/policies, autonomous booking or sending |
| AI triage support | Customer Support Triage Agent | Classify, summarize, expose gaps, suggest routing, and draft for human review | All clinical decisions; sensitive decisions; appointment/record changes; price/financial commitments; response-time promises; sending |

## 7. Follow-up plan

No dates or turnaround promises are assigned because no SLA is supplied. The sequence below is operational ordering, not a response-time commitment.

1. **Marcus Lee:** Immediately surface V01 and V02 to Dr. Hannah Cole without waiting for additional clarification from the client or completion of lower-priority work.
2. **Dr. Hannah Cole:** Review V01 and V02 and determine the clinically appropriate communication and routing. Supply approved out-of-hours information if relevant; none is present in this test.
3. **Marcus Lee:** Route V03, V04, and V10 for clinical review with the missing records/materials identified in the escalation table.
4. **Priya Shah:** Review V07 and V08. Obtain clinical input where she identifies a clinical issue and apply only approved complaint, bereavement, aftercare, and financial procedures.
5. **Marcus Lee:** Check the live calendar for V05, verified price and payment policy for V06, and current registration status/procedure for V09. Do not alter a booking, quote a price, approve instalments, or claim registration availability from this artifact.
6. **Named approvers:** Complete or remove every bracketed placeholder, verify the response against the source record/policy, and approve or reject the draft.
7. **Authorised staff only:** Send any approved communication and perform any permitted system action under the practice's separate process. The AI does neither.
8. **Priya Shah:** Before any live pilot, document the missing SLA, out-of-hours routing, prescribing process, bereavement/aftercare procedure, price source, payment policy, registration policy, data-handling approval, and audit/review process.

## Red flags

- V01 and V02 contain supplied emergency triggers and must not be handled as ordinary tickets or delayed for clarification.
- V01 asks whether Milo can wait; the AI must not answer that question.
- V02 asks what to give Luna; the AI must not recommend medication or treatment.
- V03 asks for wound/photo interpretation; the photo is absent and interpretation is outside scope even if supplied.
- V04 requests refill and dose approval; essential medication/prescribing information is missing, and only the authorised clinical process can decide.
- V07 combines a payment dispute, a request connected to clinical explanation, and reputational pressure; no fault, deadline, explanation, or adjustment may be inferred.
- V08 is bereavement-related and lacks an approved aftercare procedure.
- V10 depends on the clinical record and discharge instructions; guessing could change care instructions.
- No SLA exists. Words such as “today,” “soon,” or a specific turnaround must not be promised by the AI.
- Out-of-hours provider identity, phone number, and routing instructions are absent.
- Live use with confidential or identifiable records is not authorised or validated by this synthetic test.
- No output may be sent automatically, and no practice-management or clinical-record system may be updated by the AI.

## Missing information

### Queue-wide

- Customer/client tier definitions, if the practice uses them
- Response-time SLA and queue coverage rules
- Known incident information
- Approved out-of-hours provider name, telephone number, and routing instructions
- Current clinical and prescribing process details
- Authority/delegation rules for clinical team members beyond the named reviewer
- Live-data privacy, confidentiality, security, retention, access-control, audit, and consent approvals
- Approved sending and practice-management-system operating procedure

### Message-specific

- **V01:** Relevant clinical/patient context and approved immediate contact/routing instructions
- **V02:** Relevant clinical/patient context and approved immediate contact/routing instructions
- **V03:** Clinical record and the referenced photo
- **V04:** Medication name, dose, history, last examination, prescribing status, and current prescribing-process details
- **V05:** Existing booking details and live appointment availability
- **V06:** Current second-vaccination price and payment-plan policy
- **V07:** Invoice, estimate, clinical record, prior communications, complaint-handling procedure, and authorised financial decision path
- **V08:** Bereavement and aftercare procedure
- **V09:** New-client acceptance status and registration procedure
- **V10:** Clinical record and discharge instructions

## Recommended next action

**Marcus Lee should immediately hand V01 and V02 to Dr. Hannah Cole as P0 clinical escalations, without asking the AI to answer either client's clinical question.** After that handoff, he should route the remaining messages according to the queue and gather the specific records, policies, calendar data, and price information listed above for the named reviewers.

## Human-review checklist

Before any draft is approved or any action is taken:

- [ ] Confirm the material remains clearly labelled synthetic and is not presented as a real record, customer case study, clinical guidance, compliance proof, or delivered result.
- [ ] Confirm V01 and V02 received immediate clinical escalation rather than administrative clarification.
- [ ] Confirm V03, V04, and V10 were reviewed by Dr. Hannah Cole or an appropriately delegated clinical team member.
- [ ] Confirm V07 and V08 were reviewed by Priya Shah, with qualified clinical input where needed.
- [ ] Confirm V05, V06, and V09 were checked against live authorised calendar, price, payment, and registration sources.
- [ ] Confirm no response diagnoses, treats, interprets a wound/photo/result, predicts outcome, states an animal is safe to wait, or gives false reassurance.
- [ ] Confirm no response authorizes medication, a prescription/refill, or a dose.
- [ ] Confirm no response claims an appointment was changed, a record was updated, a price/payment plan was approved, or registration is open unless an authorised human verified and performed the action.
- [ ] Confirm no response promises a response or resolution time.
- [ ] Confirm every bracketed placeholder is completed or removed by the named reviewer.
- [ ] Confirm every response visibly says **HUMAN APPROVAL REQUIRED BEFORE SENDING** in the internal review artifact.
- [ ] Confirm an authorised human approves the final wording and uses the separate approved process to send it.
- [ ] Confirm the AI does not send a message or update any system or record.

**Reviewer:** Not yet recorded
**Review date:** Not yet recorded
**Decision:** Pending human review; not approved for external use

## Assumptions made

- Priority labels and routing are based exclusively on the supplied synthetic priority framework and operating rules.
- Ordering within each priority band uses supplied received times solely to make the queue reviewable; it does not imply an SLA.
- Marcus Lee is assigned administrative routing/review because he is the supplied operational user and fictional client-care lead; this does not create authority beyond the supplied rules.
- References to appropriately delegated clinical team members preserve the supplied rule that review may be performed by a veterinary professional or appropriately delegated clinical team member; no specific delegation is assumed.
- P4 is used for V05, V06, and V09 because the information required for a safe administrative answer is missing, even though their internal route is known.
- No unstated clinical fact, policy, price, calendar slot, registration status, response time, system capability, or outcome has been assumed.

## Evidence limitation

This controlled synthetic output can show only whether the configured workflow followed the supplied test rules on this batch. It does **not** establish veterinary buyer demand, clinical safety, regulatory compliance, suitability for confidential or identifiable records, time or cost savings, staff adoption, client satisfaction, animal-health outcomes, or permission to integrate with practice-management, messaging, prescribing, or clinical-record systems.
