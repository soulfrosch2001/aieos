# 02-curriculum
Status: stable
Type: department
Owner: curriculum-designer
Extends: none

## Mission
The curriculum department owns the academy's learning architecture: which programs exist as coherent journeys, how courses sequence into learning paths, and how every objective is made measurable. It is accountable for pedagogical structure before any content is authored — it decides what a learner should be able to do, in what order they earn that capability, and how we will know they did. It is the bridge between the [dean](../01-executive/dean/)'s educational mission and the concrete work of [content](../03-content/) and [delivery](../04-delivery/).

## Lead
[curriculum-designer](curriculum-designer/) — accountable for the department's output and quality.

## Agents
| Agent | Role in one line |
|-------|------------------|
| [curriculum-designer](curriculum-designer/) | Owns the program and learning-path architecture and objective coherence across courses. |
| [instructional-designer](instructional-designer/) | Translates objectives into learning experiences, activity sequences, and cognitive scaffolding. |
| [assessment-designer](assessment-designer/) | Designs the assessments and rubrics that prove each objective was met. |

## Councils it sits on
- [curriculum-council](../councils/curriculum-council/) — chaired by the [academic-director](../01-executive/academic-director/); ratifies program and learning-path architecture.
- [assessment-council](../councils/assessment-council/) — chaired by the [assessment-designer](assessment-designer/); ratifies assessment design and rubric standards.

## Memory it feeds
- [pedagogy-decisions](../memory/registers/pedagogy-decisions.md) — durable pedagogical and structural decisions and their rationale.
- [learning-outcomes](../memory/registers/learning-outcomes.md) — what we learned about which designs actually produced learning.

## Lifecycle
Every agent in this department follows the same agent contract and lifecycle.
A department adds agents by copying [../templates/agent.template.md](../../templates/agent.template.md).
