# Care Review Council
Status: stable
Type: council
Owner: chief-medical-officer
Extends: feature-council

## Purpose
Reviews **care-process design** — how cases move through intake, coordination, and
care — for coherence, safety of the *process*, and fit with the clinic's
organizational standards of care. It decides whether a proposed or changed care
process is sound enough to adopt. It **never** renders clinical judgment, never
diagnoses, and never reviews an individual patient's care decision (Directive
[#2](../../../kernel/laws/prime-directives.md)); its subject is the process, not the
patient.

## Participants
- **Chair** (breaks deadlocks): [chief-medical-officer](../../01-executive/chief-medical-officer/) — holds the clinical-process veto.
- **Core** (must attend): [care-coordinator](../../03-care/care-coordinator/), [case-manager](../../03-care/case-manager/), [operations-director](../../01-executive/operations-director/).
- **Advisory** (as needed): [compliance-officer](../../04-compliance/compliance-officer/), [triage-coordinator](../../02-intake/triage-coordinator/), [pharmacy-coordinator](../../03-care/pharmacy-coordinator/).

## When convened
Not standing. Convened at a care-process gate by the
[intake-orchestrator](../../01-executive/intake-orchestrator/) when work reaches
**T2** or above — see [engagement-tiers.md](../../../kernel/laws/engagement-tiers.md).
A new or changed care protocol always triggers it.

## Inputs
The proposed care-process design or change; the current
[care-protocols](../../memory/registers/care-protocols.md) it would amend; relevant
[care-lessons](../../memory/registers/care-lessons.md); and any open items in the
[incident-register](../../memory/registers/incident-register.md) that bear on the
process.

## Index
- [process.md](process.md)
- [output.md](output.md)
