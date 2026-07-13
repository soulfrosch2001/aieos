<!-- Workflow (1 file). Contract: ../../kernel/contracts/workflow.md -->

# Workflow: patch-balancing
Status: stable
Type: workflow
Owner: operations-director
Extends: release

**Purpose:** Ship a balance patch with before/after hypotheses.
**Default Tier:** [T2](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** operations-director
**Extends:** [release](../../workflows/release.md)

## Trigger
A [balance-pass](balance-pass.md) has produced a tuned set of numbers and the client,
via the Government, is ready for a patch. The
[studio-orchestrator](../01-executive/studio-orchestrator/) sizes it: assembling and
shipping a balance patch is [T2](../../kernel/laws/engagement-tiers.md). A single
hotfix value is a trivial release; a season-defining overhaul is T3 and escalates to
the [balance-council](../councils/balance-council/) plus executive sign-off. The patch
is handed back through the Government, never delivered to the client studio directly
(Directive [#5](../../kernel/laws/prime-directives.md)).

## Participants
- [studio-orchestrator](../01-executive/studio-orchestrator/) — assembles, sequences with the operations-director, integrates; never tunes (Directive [#2](../../kernel/laws/prime-directives.md)).
- [operations-director](../01-executive/operations-director/) — owns what ships when; decides patch sequencing.
- [economy-balancer](../02-economy/economy-balancer/), [progression-balancer](../03-progression/progression-balancer/), [meta-analyst](../04-competitive/meta-analyst/) — confirm their surface's changes and the before/after hypothesis.
- [balance-director](../01-executive/balance-director/) — evidence veto: no change ships without its recorded before/after and rationale.
- [chief-auditor](../01-executive/chief-auditor/) — Gate B release veto.

## Inputs
The approved tune from a [balance-pass](balance-pass.md), the
[balance-decisions](../memory/registers/balance-decisions.md) entries behind each
change, a stated before/after hypothesis per change, the rollback plan, and the
client's patch constraints relayed by the Government (Directive
[#1](../../kernel/laws/prime-directives.md) justification attached).

## Steps
```
approved tune ─> [GATE A: every change has before/after + rollback] ─> assemble patch ─> [GATE B: release gates pass] ─> ship ─> record
```
1. **Frame** — studio-orchestrator — size as T2, confirm the patch scope matches the approved pass.
2. **Hypothesize** — surface leads — state the before/after hypothesis and success metric for each change; balance-director confirms each is evidenced. `[GATE A]`
3. **Assemble** — studio-orchestrator — compose the patch notes, change list, and rollback plan as one artifact.
4. **Sequence** — operations-director — decide ship order and timing against the client's window.
5. **Verify** — chief-auditor — run the release gates; confirm rollback is real and reversible. `[GATE B]`
6. **Ship** — operations-director — hand the patch and its measurement plan back through the Government.
7. **Record** — studio-orchestrator — append the registers below.

## Review Gates
- **Gate A — every change has before/after and rollback:** no change enters the patch without a stated hypothesis, a success metric, evidence, and a reversal path. Unevidenced changes are vetoed by the balance-director.
- **Gate B — release gates pass:** the patch does not ship until the rollback is verified reversible and [quality-standards](../../shared/quality-standards.md) release gates pass.

## Approval Process
Operations-director signs the ship decision; balance-director holds the evidence veto;
chief-auditor holds the Gate B release veto. See
[decision-authority](../../kernel/laws/decision-authority.md). T3 variants add
[ceo](../01-executive/ceo/) and [balance-council](../councils/balance-council/) sign-off.

## Outputs
A shipped balance patch, its notes and change list, the per-change before/after
hypothesis and success metric, and the rollback plan held in reserve.

## Completion Criteria
- [ ] Every change carries a before/after hypothesis, success metric, and rollback at Gate A.
- [ ] Patch assembled as one auditable artifact with sequenced ship order.
- [ ] Release gates pass and rollback verified reversible at Gate B.
- [ ] Memory registers below appended.

## Memory Updates
- [balance-decisions](../memory/registers/balance-decisions.md) — the shipped change set with its before/after hypotheses marked as shipped.
- [balancing-history](../memory/registers/balancing-history.md) — the patch as a measurement event, to be confirmed against the post-ship window.
- [balance-backlog](../memory/registers/balance-backlog.md) — changes deferred out of this patch.

## Failure / Rollback
Gate A fails → the change leaves the patch until it carries a hypothesis and rollback.
Gate B fails → block the ship, return defects to the owning surface, re-verify. A
shipped patch that regresses against its hypothesis triggers the recorded rollback and a
superseding [balance-decisions](../memory/registers/balance-decisions.md) entry, and
escalates to the [balance-council](../councils/balance-council/).
