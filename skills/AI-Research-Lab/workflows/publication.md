<!-- Workflow (1 file). Contract: ../../kernel/contracts/workflow.md -->

# Workflow: publication
Status: stable
Type: workflow
Owner: science-writer
Extends: documentation

**Purpose:** Write up a peer-reviewed finding into an honest, complete, reproducible
publication and release it.
**Default Tier:** [T2](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** science-writer
**Extends:** [documentation](../../workflows/documentation.md)

This workflow inherits stdlib [documentation](../../workflows/documentation.md) and adds
strictness: a publication may describe **only** a finding that already cleared
[peer-review](peer-review.md), it must ship its data and analysis code (or a recorded
reason it cannot), and it carries an ethics clearance
([resolution-order](../../kernel/loader/resolution-order.md): add strictness only).

## Trigger
A finding that has passed [peer-review](peer-review.md) and is recorded in
[findings](../memory/registers/findings.md), sized [T2](../../kernel/laws/engagement-tiers.md).
An unreviewed result never reaches this workflow.

## Participants
- [lab-orchestrator](../../kernel/protocols/orchestration.md) — routes the write-up, never authors the science.
- [science-writer](../04-publication/science-writer/) — owns the manuscript: structure, claims, figures, prose.
- [principal-investigator](../02-research/principal-investigator/) — confirms every claim matches the cleared finding.
- [ethics-officer](../04-publication/ethics-officer/) — clears authorship, consent, data privacy, and disclosure.
- [chief-auditor](../01-executive/chief-auditor/) — Gate B quality check that the write-up does not overstate the evidence.

## Inputs
The cleared finding, its review record, the raw data and analysis code, and the figures.

## Steps
```
draft ─> [GATE A: every claim traces to a cleared finding] ─> figures + data package ─> ethics clearance ─> [GATE B: reproducible + no overclaim] ─> publish ─> record
```
1. **Draft** — science-writer — write methods, results, and discussion; each claim cites its evidence. `[GATE A]`
2. **Verify** — principal-investigator — confirm no claim exceeds what peer-review cleared.
3. **Package** — science-writer — assemble figures, the data set, and runnable analysis code (or record why a part is withheld).
4. **Clear ethics** — ethics-officer — authorship, consent, privacy, and conflict disclosure.
5. **Audit** — chief-auditor — confirm the write-up is reproducible and free of overclaim. `[GATE B]`
6. **Publish** — science-writer — release the manuscript and its package.
7. **Record** — lab-orchestrator — update the memory registers below.

## Review Gates
- **Gate A — every claim traces to a cleared finding:** the manuscript may assert nothing
  that [peer-review](peer-review.md) did not clear; an uncited or unreviewed claim blocks the
  draft (Directive [#9](../../kernel/laws/prime-directives.md)).
- **Gate B — reproducible + no overclaim:** a reader can reproduce the result from the
  shipped data and code, and the language matches the strength of the evidence. The
  chief-auditor blocks on overclaim; the ethics-officer blocks on an ethics gap.

## Approval Process
The chief-auditor clears Gate B (quality veto) and the ethics-officer holds an ethics veto
via the [ethics-council](../councils/ethics-council/)
([decision-authority](../../kernel/laws/decision-authority.md)). The lab-director sets
whether and where to publish. Only a human maintainer overrides an auditor veto.

## Outputs
A published manuscript with methods, results, discussion, figures, a data set, runnable
analysis code, and an ethics/disclosure statement.

## Completion Criteria
- [ ] Every claim traces to a cleared finding (Gate A).
- [ ] Data and code packaged (or withholding recorded with reason).
- [ ] Ethics cleared.
- [ ] Reproducible with no overclaim (Gate B); memory registers appended.

## Memory Updates
- [findings](../memory/registers/findings.md) — link the published artifact to the finding it reports, dated.
- [experiment-log](../memory/registers/experiment-log.md) — note the publication against the originating experiment.
- [open-questions](../memory/registers/open-questions.md) — the follow-on questions the discussion section raised.

## Failure / Rollback
A claim does not trace to a cleared finding → cut the claim or send it back to
[peer-review](peer-review.md). Ethics gap found → block release until the ethics-officer
clears it. A post-publication error is corrected by a dated correction or retraction
appended to [findings](../memory/registers/findings.md), never by silently editing the
record (Directive [#8](../../kernel/laws/prime-directives.md)).
