<!-- Workflow (1 file). Contract: ../../kernel/contracts/workflow.md -->

# Workflow: portfolio-rebalance
Status: stable
Type: workflow
Owner: Chief Operating Officer
Extends: planning

**Purpose:** Plan and execute a rebalance under compliance gates — turning a
target allocation into a sequenced, owned set of trades that no gate can skip.
**Default Tier:** [T2](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** Chief Operating Officer
**Extends:** [planning](../../workflows/planning.md)

## Trigger
A drift from target allocation, a cleared [investment-thesis](investment-thesis.md),
or a mandate change that requires moving the book — sized
[T2](../../kernel/laws/engagement-tiers.md). Rebalancing routes and sequences
trades; it does not originate the investment call ([Directive #2](../../kernel/laws/prime-directives.md)).

## Participants
- [finance-orchestrator](../01-executive/finance-orchestrator/) — decomposes targets into disjoint trade tracks.
- [investment-council](../councils/investment-council/) — pressure-tests sequence and priorities ([Directive #3](../../kernel/laws/prime-directives.md)).
- [Chief Operating Officer](../01-executive/chief-operating-officer/) — owns the execution plan and sequencing.
- [portfolio-manager](../03-risk/) — confirms target weights and trade feasibility.
- [Chief Compliance Auditor](../01-executive/chief-compliance-auditor/) — clears the compliance gate before any trade binds.

## Inputs
The target allocation (from a cleared thesis and risk-review), the current book,
the firm's limits, available liquidity, and the regulatory constraints on trading.

## Steps
```
target ─> [GATE A: target + limits + criteria clear] ─> decompose ─> sequence ─> [GATE B: tracks disjoint + risk-cleared + compliance-cleared] ─> record
```
1. **Frame** — finance-orchestrator — state the target allocation and done-criteria. `[GATE A]`
2. **Decompose** — finance-orchestrator — break the move into the smallest independent trade units.
3. **Partition** — finance-orchestrator — assign each unit a single owner; mark dependencies and liquidity constraints.
4. **Sequence** — [investment-council](../councils/investment-council/) — order waves of ≤15 parallel tracks ([orchestration](../../kernel/protocols/orchestration.md)).
5. **Confirm** — COO verifies tracks are disjoint and owned; [risk-review](risk-review.md) clears exposure; Chief Compliance Auditor clears mandate compliance. `[GATE B]`
6. **Record** — finance-orchestrator — update the memory registers below.

## Review Gates
- **Gate A — target + limits + criteria clear:** no decomposition starts on a vague
  target; the allocation, limits, and done-criteria are explicit.
- **Gate B — tracks disjoint + risk-cleared + compliance-cleared:** no two trade tracks
  touch the same instrument unmanaged, every track has an owner,
  [risk-review](risk-review.md) shows no unowned exposure, and the Chief Compliance
  Auditor confirms every trade is mandate- and regulation-compliant. Overlap is a
  decomposition error; an uncleared compliance check blocks execution.

## Approval Process
The [investment-council](../councils/investment-council/) pressure-tests; the
[COO](../01-executive/chief-operating-officer/) signs the execution plan; the
[Chief Compliance Auditor](../01-executive/chief-compliance-auditor/) holds the absolute
compliance veto on Gate B per [decision-authority](../../kernel/laws/decision-authority.md).
A rebalance that shifts firm strategy escalates to the [CEO](../01-executive/ceo/).

## Outputs
An execution plan: ordered waves of disjoint, owned trade tracks with dependencies,
liquidity notes, the risk clearance, and the compliance clearance.

## Completion Criteria
- [ ] Target and criteria explicit (Gate A).
- [ ] Tracks disjoint and owned; risk and compliance cleared (Gate B).
- [ ] Memory registers appended.

## Memory Updates
- [investment-decisions](../memory/registers/investment-decisions.md) — target allocation, trade tracks, sequence, and rationale, dated.
- [risk-register](../memory/registers/risk-register.md) — exposures the rebalance opens or closes.
- [compliance-log](../memory/registers/compliance-log.md) — pre-trade compliance checks and their disposition.

## Failure / Rollback
Trade tracks overlap → re-partition; never fan out overlapping ownership of an
instrument. Target shifts mid-plan → re-frame at Gate A. Compliance veto at Gate B →
execution halts and the rebalance returns to council, never overridden. A partial
fill that breaches a limit → escalate to [risk-review](risk-review.md) at T3.
