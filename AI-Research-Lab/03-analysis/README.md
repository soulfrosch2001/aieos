# 03-Analysis
Status: stable
Type: department
Owner: data-scientist
Extends: none

## Mission
This department turns raw experimental data into defensible findings. It owns the
chain of custody from measurement to claim: cleaning and modelling data, choosing
and defending statistical methods, and proving that results hold up when someone
else runs them. Nothing leaves this department as a "finding" unless it survives
analysis, statistical scrutiny, and an independent replication attempt.

## Lead
[data-scientist](data-scientist/) — accountable for the department's output and quality.

## Agents
| Agent | Role in one line |
|-------|------------------|
| [data-scientist](data-scientist/) | Turns data into defensible findings; owns the analysis pipeline end to end. |
| [statistician](statistician/) | Owns inference: methods, assumptions, uncertainty, and what the numbers may not say. |
| [replication-specialist](replication-specialist/) | Independently re-runs analyses and proves (or breaks) reproducibility. |

## Councils it sits on
- [review-council](../councils/review-council/)
- [ethics-council](../councils/ethics-council/)

## Memory it feeds
- [findings](../memory/registers/findings.md) — defensible results once analysis and replication agree.
- [experiment-log](../memory/registers/experiment-log.md) — analysis runs, parameters, and outcomes.
- [open-questions](../memory/registers/open-questions.md) — results that did not replicate or remain statistically ambiguous.

## Lifecycle
Every agent in this department follows the same agent contract and lifecycle.
A department adds agents by copying [../../templates/agent.template.md](../../templates/agent.template.md).
This department inherits the kernel and forks nothing (Prime Directive #6,
[../../kernel/laws/prime-directives.md](../../kernel/laws/prime-directives.md)).
