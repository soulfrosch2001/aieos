<!-- Workflow (1 file). Contract: ../../kernel/contracts/workflow.md -->

# Workflow: experiment-design
Status: stable
Type: workflow
Owner: research-director
Extends: research

**Purpose:** Turn a hypothesis into a sound, reproducible experiment whose result —
either way — will change what the lab believes.
**Default Tier:** [T2](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** research-director
**Extends:** [research](../../workflows/research.md)

This workflow inherits the stdlib [research](../../workflows/research.md) procedure and
adds strictness in one direction only: stdlib research ends at a *recommendation*; here
the deliverable is a **pre-registered protocol** with a falsifiable hypothesis, a fixed
analysis plan, and a power calculation — none of which may be edited after Gate A without
a recorded amendment ([resolution-order](../../kernel/loader/resolution-order.md): override
by name, add strictness only).

## Trigger
An [open question](../memory/registers/open-questions.md) the lab director judges worth
spending bench time on, sized [T2](../../kernel/laws/engagement-tiers.md). A question
whose answer is already in [findings](../memory/registers/findings.md) does not earn an
experiment.

## Participants
- [lab-orchestrator](../../kernel/protocols/orchestration.md) — frames the question, routes, never runs the science (Directive [#2](../../kernel/laws/prime-directives.md)).
- [principal-investigator](../02-research/principal-investigator/) — owns the hypothesis and scientific framing.
- [experimental-designer](../02-research/experimental-designer/) — designs controls, randomization, and blinding.
- [statistician](../03-analysis/statistician/) — fixes the analysis plan and power calculation **before** data exists.
- [research-director](../01-executive/research-director/) — Gate B rigor sign-off and methodology veto.

## Inputs
A sharp question, the decision or theory it informs, and the prior evidence already in
[findings](../memory/registers/findings.md) and
[experiment-log](../memory/registers/experiment-log.md).

## Steps
```
frame ─> [GATE A: hypothesis falsifiable + analysis plan pre-registered] ─> design controls ─> power calc ─> [GATE B: design reproducible + adequately powered] ─> record
```
1. **Frame** — principal-investigator — state the hypothesis and its falsifier. `[GATE A]`
2. **Pre-register** — statistician — fix the analysis plan, primary endpoint, and stopping rule before any data is collected. `[GATE A]`
3. **Design** — experimental-designer — specify controls, randomization, blinding, sample, and materials.
4. **Power** — statistician — compute required sample size for the declared effect.
5. **Stress-test** — research-director — confirm the design is reproducible and adequately powered. `[GATE B]`
6. **Record** — lab-orchestrator — update the memory registers below.

## Review Gates
- **Gate A — hypothesis falsifiable + analysis plan pre-registered:** no design proceeds
  until the hypothesis names what result would refute it and the analysis plan is fixed.
  Pre-registration after seeing data is blocked (Directive [#9](../../kernel/laws/prime-directives.md)).
- **Gate B — design reproducible + adequately powered:** another lab could re-run it from
  the protocol alone, and the sample is large enough to detect the declared effect. The
  research-director may veto on either ground.

## Approval Process
The research-director clears Gate B and may **veto** any design that is not sound or not
reproducible ([decision-authority](../../kernel/laws/decision-authority.md)). A protocol
with ethical exposure (human subjects, dual-use, data privacy) escalates to the
[ethics-council](../councils/ethics-council/) before any run.

## Outputs
A pre-registered protocol: falsifiable hypothesis, controls, randomization/blinding plan,
sample size with power, fixed analysis plan, and materials list.

## Completion Criteria
- [ ] Hypothesis and falsifier fixed at Gate A.
- [ ] Analysis plan pre-registered before data collection (Gate A).
- [ ] Design reproducible and powered (Gate B).
- [ ] Memory registers appended.

## Memory Updates
- [experiment-log](../memory/registers/experiment-log.md) — the registered hypothesis, design, and planned analysis, dated.
- [open-questions](../memory/registers/open-questions.md) — mark the question as in-progress; spin off sub-questions the design surfaced.
- [findings](../memory/registers/findings.md) — no entry yet; findings are written only after [peer-review](peer-review.md) clears the result.

## Failure / Rollback
Hypothesis is not falsifiable → return to framing; do not design around an untestable
claim. Power calculation says the effect is undetectable at feasible sample → record the
limitation in [experiment-log](../memory/registers/experiment-log.md) and re-scope rather
than run an underpowered study. Any mid-design change to a pre-registered element is logged
as a dated amendment, never a silent edit (Directive [#8](../../kernel/laws/prime-directives.md)).
