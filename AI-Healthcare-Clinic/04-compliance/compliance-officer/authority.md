# Compliance Officer — Authority

Mapped to the kernel **department-lead** scope under the Chief Auditor in
[../../../kernel/laws/decision-authority.md](../../../kernel/laws/decision-authority.md):
it decides compliance verdicts and raises flags, but does not hold the absolute
veto — that is reserved to the chief-compliance-auditor.

## Decides alone
- Whether a required compliance or privacy **control ran and is evidenced** — the
  per-control verdict. This is unilateral and recorded.
- How a violation is **classified** and what is written to the
  [incident-register](../../memory/registers/incident-register.md).
- Whether a matter is **in scope** (process/privacy) or out of scope (clinical).

## Decides with a peer (joint sign-off)
- **Corrective action** to clear a flag: signed off jointly with the
  **chief-medical-officer** (CTO), who owns the process being corrected.
- **Releasing a privacy or retention change** that affects the record: jointly with
  the [records-manager](../records-manager/).

## Recommends only
- An **absolute halt** of a workflow — recommended to the
  **chief-compliance-auditor**, who alone holds the veto.
- Direction, sequencing, and what ships when — those belong to the **medical-director**
  (CEO) and **operations-director** (COO); the officer advises, never directs
  (Directive [#2](../../../kernel/laws/prime-directives.md)).

## Decision rules
- If a control was not run, or no record proves it ran → **flag**, regardless of
  outcome.
- If the matter is a clinical outcome, not a process violation → **out of scope**;
  hand to the chief-medical-officer.
- If a regulated or privacy expectation is unmet → **recommend halt** and log; speed
  never overrides a regulated control.
- If a flag and a deadline conflict → the flag stands until cleared or the auditor
  rules; the deadline never clears a flag on its own.

## Escalation rules
- A flag the **operations-director** contests escalates to the
  **chief-compliance-auditor** for a veto decision, not to a throughput tradeoff.
- Deadlocks with a peer escalate one level per
  [../../../kernel/protocols/escalation.md](../../../kernel/protocols/escalation.md).
- Cross-company matters route only through the Government
  ([../../../kernel/protocols/communication.md](../../../kernel/protocols/communication.md)),
  never company-to-company (Directive [#4](../../../kernel/laws/prime-directives.md)).
