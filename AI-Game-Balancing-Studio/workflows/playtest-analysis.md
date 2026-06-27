<!-- Workflow (1 file). Contract: ../../kernel/contracts/workflow.md -->

# Workflow: playtest-analysis
Status: stable
Type: workflow
Owner: economy-balancer
Extends: research

**Purpose:** Turn playtest and telemetry data into balance findings.
**Default Tier:** [T2](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** economy-balancer
**Extends:** [research](../../workflows/research.md)

## Trigger
The Government delivers a playtest or telemetry dataset from a client studio, or a
[balance-pass](balance-pass.md) needs its hypotheses checked against real play. The
[studio-orchestrator](../01-executive/studio-orchestrator/) sizes it: turning a dataset
into defensible findings is [T2](../../kernel/laws/engagement-tiers.md). A quick read of
a single metric is a trivial query; a full study designing its own instrumentation is
T3 and escalates to the [methodology-council](../councils/methodology-council/). Data
arrives via the Government, never from the client studio directly (Directive
[#5](../../kernel/laws/prime-directives.md)).

## Participants
- [studio-orchestrator](../01-executive/studio-orchestrator/) — sizes, decomposes, routes, integrates; never analyses (Directive [#2](../../kernel/laws/prime-directives.md)).
- [economy-balancer](../02-economy/economy-balancer/) — owns the analysis plan and the Gate A method.
- [sink-source-analyst](../02-economy/sink-source-analyst/), [difficulty-tuner](../03-progression/difficulty-tuner/), [matchmaking-analyst](../04-competitive/matchmaking-analyst/) — parallel analysis tracks by surface.
- [balance-director](../01-executive/balance-director/) — method veto: rejects analysis that does not support a sound conclusion.
- [chief-auditor](../01-executive/chief-auditor/) — Gate B quality/process veto.

## Inputs
A dataset with known provenance and sampling, the questions the client wants answered
with a north-star justification (Directive [#1](../../kernel/laws/prime-directives.md)),
the prior model in [balancing-history](../memory/registers/balancing-history.md) the
data should confirm or refute, and a clear definition of a "finding."

## Steps
```
data ─> [GATE A: method + data sound] ─> fan-out(≤8 question tracks) ─> integrate ─> [GATE B: findings hold] ─> record
```
1. **Frame** — studio-orchestrator — size as T2, state the questions and what a defensible finding requires.
2. **Method** — economy-balancer — define the analysis method, confirm the data is fit for it, and check for sampling bias. `[GATE A]`
3. **Decompose** — studio-orchestrator — split into disjoint question tracks by surface, no shared cut of the data.
4. **Analyse** — analysts — work each question in parallel, each stating effect size and confidence, not just direction.
5. **Integrate** — studio-orchestrator — assemble findings, flag where surfaces disagree, separate signal from noise.
6. **Verify** — chief-auditor — run the tier's gates; balance-director confirms each finding is supported, not asserted. `[GATE B]`
7. **Record** — studio-orchestrator — append the registers below.

## Review Gates
- **Gate A — method and data sound:** no analysis begins until the economy-balancer confirms the data fits the question and the method is stated; biased or insufficient data is rejected here.
- **Gate B — findings hold:** the analysis does not ship until each finding cites its evidence with effect size and confidence and [quality-standards](../../shared/quality-standards.md) gates pass.

## Approval Process
Economy-balancer signs Gate A; balance-director holds the method veto; chief-auditor
holds the Gate B veto. Findings flow to [balance-pass](balance-pass.md) for action, not
to the client directly. See
[decision-authority](../../kernel/laws/decision-authority.md). T3 variants add
[methodology-council](../councils/methodology-council/) sign-off.

## Outputs
A findings report with effect sizes and confidence, the validated-or-refuted prior
model, and the data caveats every downstream tune must respect.

## Completion Criteria
- [ ] Method and data sound at Gate A; sampling bias checked.
- [ ] All question tracks analysed with disjoint data cuts.
- [ ] Every finding evidenced with effect size and confidence; Gate B gates pass.
- [ ] Memory registers below appended.

## Memory Updates
- [balancing-history](../memory/registers/balancing-history.md) — what the data confirmed or refuted about the system's model.
- [balance-decisions](../memory/registers/balance-decisions.md) — only if a finding overturns a recorded decision, a superseding entry.
- [balance-backlog](../memory/registers/balance-backlog.md) — symptoms the data revealed but this study did not chase.

## Failure / Rollback
Gate A fails → the data is unfit; return to the Government for better instrumentation,
do not fabricate signal. Gate B fails → block the report, return the weak finding to its
track for more evidence. A finding later contradicted by fuller data is reversed by a
superseding [balancing-history](../memory/registers/balancing-history.md) entry.
