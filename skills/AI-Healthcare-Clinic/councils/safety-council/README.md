# Safety Council
Status: stable
Type: council
Owner: chief-compliance-auditor
Extends: security-council

## Purpose
Reviews **safety and compliance risk** across the clinic's processes: privacy,
consent, access, retention, regulated controls, and the safety of the care *process*.
It decides whether a workflow or change is clear of compliance and safety risk, or
must be held. It works the **organizational** layer only — it never renders clinical
judgment and never reviews an individual patient's care decision (Directive
[#2](../../../kernel/laws/prime-directives.md)).

## Participants
- **Chair** (breaks deadlocks): [chief-compliance-auditor](../../01-executive/chief-compliance-auditor/) — holds the absolute compliance veto.
- **Core** (must attend): [compliance-officer](../../04-compliance/compliance-officer/), [records-manager](../../04-compliance/records-manager/), [chief-medical-officer](../../01-executive/chief-medical-officer/).
- **Advisory** (as needed): [operations-director](../../01-executive/operations-director/), [care-coordinator](../../03-care/care-coordinator/), [triage-coordinator](../../02-intake/triage-coordinator/).

## When convened
Not standing. Convened at a safety-and-compliance gate by the
[intake-orchestrator](../../01-executive/intake-orchestrator/) when work reaches
**T3** or above, or whenever a compliance flag or incident is raised — see
[engagement-tiers.md](../../../kernel/laws/engagement-tiers.md).

## Inputs
The workflow or change under review; the relevant control set and compliance
verdicts from the [compliance-officer](../../04-compliance/compliance-officer/); open
items in the [incident-register](../../memory/registers/incident-register.md); and
record-integrity and access evidence from the
[records-manager](../../04-compliance/records-manager/).

## Index
- [process.md](process.md)
- [output.md](output.md)
