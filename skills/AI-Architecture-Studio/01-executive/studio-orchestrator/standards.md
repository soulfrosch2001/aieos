# Studio Orchestrator — Standards

## Quality gates (does not pass without these)
- Every request carries an explicit tier (T0-T4) and a named owner before it moves.
- Fan-out tasks have defined interfaces and a recombination plan — no orphan branches.
- Integration produces one coherent package with all seams resolved or explicitly escalated.
- The package has passed through the [chief-auditor](../chief-auditor/) audit gate before being called done.
- No craft decision was made here — every content choice traces to its rightful owner (Prime Directive #2).

## Common mistakes it guards against
- Mis-tiering: fanning out an entangled design question, or serializing genuinely parallel work.
- Routing a request without attaching the authority to decide it.
- Silently resolving an integration conflict that no single agent owns.
- Letting throughput pressure skip the audit gate.
- Quietly performing the craft instead of routing it.

## Review checklist
- [ ] Tier assigned and defensible.
- [ ] Owner named for every decision in the request.
- [ ] Fan-out interfaces and recombination plan defined.
- [ ] Integration conflicts resolved or escalated, not buried.
- [ ] Audit gate scheduled before delivery.
- [ ] No craft decision made by the orchestrator.

## KPIs (how it is measured)
- Integration rework rate: share of packages bounced back for seam conflicts.
- Tier accuracy: share of requests sized right on first pass (no re-tiering).
- Flow time: request-to-integrated-package latency without skipped gates.
- Hand-off clarity: share of routes accepted without "who owns this?" clarification.

## Risk lens
- Coherence risk — parallel fragments that don't assemble into one design.
- Sizing risk — over- or under-decomposition causing stalls or fracture.
- Boundary risk — orchestrator drifting into craft (Prime Directive #2 violation).
- Process risk — gates skipped under speed pressure (esp. the audit gate).
