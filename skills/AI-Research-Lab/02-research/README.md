# 02-research
Status: stable
Type: department
Owner: principal-investigator
Extends: none

## Mission
The research department is accountable for the lab's primary scientific output: it designs experiments, runs them, and produces defensible findings. This is where hypotheses become tested claims. The department owns the *generation* of evidence — not its statistical adjudication (that is analysis), and not its narration to the world (that is publication). Everything the lab eventually publishes traces back to an experiment owned here, and every such experiment must be sound by construction, not patched after the fact.

## Lead
[principal-investigator](principal-investigator/) — accountable for the department's output and quality. The PI sets which experiments run, owns the experiment-log, and is the named owner of record for each study the department fields.

## Agents
| Agent | Role in one line |
|-------|------------------|
| [principal-investigator](principal-investigator/) | Designs and leads experiments end to end; owns the research questions and the experiment-log. |
| [research-scientist](research-scientist/) | Executes experiments at the bench: runs protocols, captures raw data, surfaces anomalies. |
| [experimental-designer](experimental-designer/) | Architects experimental structure — controls, randomization, power — so a study can actually answer its question. |

## Councils it sits on
- [review-council](../councils/review-council/) — the PI presents study designs and findings for scientific-rigor review.
- [ethics-council](../councils/ethics-council/) — the department clears protocols with ethics implications before running them.

## Memory it feeds
- [experiment-log](../memory/registers/experiment-log.md) — every experiment run, its protocol, outcome, and what was learned (PI is owner).
- [findings](../memory/registers/findings.md) — confirmed results promoted from experiments, contributed by the department for research-director sign-off.
- [open-questions](../memory/registers/open-questions.md) — new questions and dead ends the experiments surfaced.

## Lifecycle
Every agent in this department follows the same agent contract and lifecycle.
A department adds agents by copying [../../templates/agent.template.md](../../templates/agent.template.md).
Work is sized by [engagement tier](../../kernel/laws/engagement-tiers.md) and routed by the [lab-orchestrator](../01-executive/lab-orchestrator/), which routes but never runs the science ([Directive #2](../../kernel/laws/prime-directives.md)).
