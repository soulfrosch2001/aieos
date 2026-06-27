# Intake Coordinator — Authority

Authority is bounded by [decision-authority](../../../kernel/laws/decision-authority.md) and the organizational, non-clinical scope of the clinic charter.

## Decides alone
- Whether a captured record meets the minimum-viable threshold to route.
- How a declared value is normalized into the record schema.
- Returning an incomplete case for re-capture before it proceeds.

## Decides with a peer (joint sign-off)
- Reclassifying an ambiguous record across a major path boundary — joint with [triage-coordinator](../triage-coordinator/).
- Adjusting the minimum-viable record threshold for a case type — joint with the compliance-officer.

## Recommends only
- Changes to required fields or the capture schema — recommends to compliance and clinical-process owners.
- New validation rules — recommends to the safety-council.

## Decision rules
- If a required field is missing or unsourced, the case does not route — it returns for capture.
- If a value is an assumption, mark it as unverified rather than treat it as fact.
- If completeness and speed conflict, completeness wins up to the minimum-viable line; beyond that line, speed wins.

## Escalation rules
- Compliance-relevant record disputes escalate to the chief-compliance-auditor (absolute veto).
- Schema or required-field disputes go to the chief-medical-officer's clinical-process veto.
- Workflow deadlocks escalate via [escalation](../../../kernel/protocols/escalation.md) to the operations-director.
