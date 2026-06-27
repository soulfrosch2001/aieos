<!-- Workflow (1 file). Contract: ../../kernel/contracts/workflow.md -->

# Workflow: balance-pass
Status: stable
Type: workflow
Owner: balance-director
Extends: feature

**Purpose:** Run a full balancing pass on a system, gated on evidence.
**Default Tier:** [T2](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** balance-director
**Extends:** [feature](../../workflows/feature.md)

## Trigger
The Government routes a balancing brief from a client studio — "the economy inflates,"
"the third act spikes," "this character dominates the meta." The
[studio-orchestrator](../01-executive/studio-orchestrator/) sizes it: a pass that
touches real numbers across a loop lands at [T2](../../kernel/laws/engagement-tiers.md).
A single isolated value with no systemic reach is a trivial edit; a re-tune of an
entire title's balance model is T3 and escalates to the
[balance-council](../councils/balance-council/) plus executive sign-off. The brief
never comes from the client studio directly (Directive
[#5](../../kernel/laws/prime-directives.md)).

## Participants
- [studio-orchestrator](../01-executive/studio-orchestrator/) — sizes, decomposes, routes, integrates; never tunes (Directive [#2](../../kernel/laws/prime-directives.md)).
- [balance-director](../01-executive/balance-director/) — owns methodology; holds the evidence veto at both gates.
- [economy-balancer](../02-economy/economy-balancer/), [progression-balancer](../03-progression/progression-balancer/), [meta-analyst](../04-competitive/meta-analyst/) — department leads owning their surface's track.
- [sink-source-analyst](../02-economy/sink-source-analyst/), [difficulty-tuner](../03-progression/difficulty-tuner/), [matchmaking-analyst](../04-competitive/matchmaking-analyst/) — parallel build tracks within their loop.
- [chief-auditor](../01-executive/chief-auditor/) — Gate B quality/process veto.

## Inputs
A scoped target system, its current numbers and the model behind them, the symptom
being chased with a north-star justification (Directive
[#1](../../kernel/laws/prime-directives.md)), the evidence available
([balancing-history](../memory/registers/balancing-history.md), telemetry, playtest
logs), and a clear definition of "tuned" for this pass.

## Steps
```
brief ─> [GATE A: model + evidence approved] ─> fan-out(≤8 surface tracks) ─> integrate ─> [GATE B: coherent + evidenced] ─> record
```
1. **Frame** — studio-orchestrator — size as T2, state the symptom, the target loop, and what "tuned" means here.
2. **Model** — balance-director — state the balance model and the hypotheses; confirm the supporting evidence exists. `[GATE A]`
3. **Decompose** — studio-orchestrator — split into disjoint surface tracks: economy, progression, competitive — no shared file.
4. **Tune** — surface leads + analysts — change numbers in parallel, each citing its evidence and the cross-loop effects it expects.
5. **Integrate** — studio-orchestrator — reconcile the tracks, surface cross-loop conflicts, resolve seams.
6. **Verify** — chief-auditor — run the tier's gates; balance-director confirms the whole loop stays coherent. `[GATE B]`
7. **Record** — studio-orchestrator — append the registers below.

## Review Gates
- **Gate A — model and evidence approved:** no track tunes a number until the balance-director signs the model and confirms the change is evidenced, not intuited. An unsound or unevidenced model is vetoed here.
- **Gate B — coherent and evidenced:** the pass does not complete until the loop stays internally consistent, every change carries its before/after rationale, and [quality-standards](../../shared/quality-standards.md) gates pass.

## Approval Process
Balance-director signs Gate A and holds the evidence veto; chief-auditor holds the
Gate B veto; the [operations-director](../01-executive/operations-director/) sequences
the result into delivery. See
[decision-authority](../../kernel/laws/decision-authority.md). T3 variants add
[ceo](../01-executive/ceo/) and [balance-council](../councils/balance-council/) sign-off.

## Outputs
A tuned set of numbers for the target system, the balance model and hypotheses behind
them, the cross-loop effects predicted, and the recorded before/after of every change.

## Completion Criteria
- [ ] Model approved at Gate A with evidence cited for every intended change.
- [ ] All surface tracks integrated with no overlapping ownership.
- [ ] Loop stays coherent and Gate B gates pass.
- [ ] Memory registers below appended.

## Memory Updates
- [balance-decisions](../memory/registers/balance-decisions.md) — each tuning decision, its model, and the before/after it commits to.
- [balancing-history](../memory/registers/balancing-history.md) — what the pass measured and learned about the system.
- [balance-backlog](../memory/registers/balance-backlog.md) — symptoms noticed but out of scope this pass.

## Failure / Rollback
Gate A fails → return to the model, do not fan out; an unevidenced change is rejected,
not negotiated. Gate B fails → block the pass, route the conflicting track back to its
owner, re-verify. A tune that regresses after ship is reversed by a superseding
[balance-decisions](../memory/registers/balance-decisions.md) entry and escalates to
the [balance-council](../councils/balance-council/).
