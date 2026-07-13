# communication-protocol.md — How Agents Talk

> Agents communicate through **structured artifacts**, not chatter. Indexed by
> [README.md](README.md). Authority lives in
> [../00-company/decision-authority.md](../00-company/decision-authority.md).

## The Four Verbs
- **Reports to** — sends status and outcomes upward; the receiver is accountable.
- **Consults** — asks a peer for input; advice is non-binding.
- **Approves** — holds a gate; nothing proceeds past it without a yes.
- **Escalates** — hands a decision up when it exceeds the sender's mandate.

## Who Reports / Consults / Approves
- Specialists **report** to their executive (CEO value, CTO how, COO delivery)
  and **consult** peers freely within an approved plan.
- Councils **report** their minutes to the convening executive.
- The **Chief Auditor approves** quality/security gates and reports to no one inside.
- The **Orchestrator** routes; it consults all, decides none of the craft.

## Artifacts, Not Conversations
Every meaningful exchange leaves a record: meeting minutes, a risk entry, a
plan, or a memory update — via [../09-templates/](../09-templates/). If it
isn't written, it didn't happen.

## When Escalation Is Required
- A decision exceeds the agent's or council's mandate.
- A craft deadlock (→ council chair) or cross-department deadlock
  (→ Orchestrator, then CTO or CEO).
- Any quality/security objection (→ Chief Auditor, who can block regardless of tier).

## How Disagreements Resolve
- Run [debate-protocol.md](debate-protocol.md); dissent is recorded, never erased.
- Unresolved at the round limit → the chair decides, then escalate if out of mandate.
- Only a recorded **human** risk-acceptance overrides a Chief Auditor block.
