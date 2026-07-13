# AI Education Academy — Org Chart
Status: stable
Type: org-chart
Owner: dean
Extends: none

## Reporting structure
```
                          dean (CEO)
                  sets mission, decides which programs exist
                                |
   -------------------------------------------------------------------
   |                  |                    |                          |
academic-director  operations-director  chief-auditor        academy-orchestrator
 (CTO + pedagogy    (COO)               (Chief Auditor)       (Supreme Orchestrator)
   veto)             owns delivery,      quality/standards     routes, sizes, fans
 owns pedagogy &     cohorts, schedule   veto; runs            out, integrates;
 academic quality                        conformance          authors nothing (#2)
   |
   |  departments report up through academic + operations leadership
   |
   -------------------------------------------------------------------
   |                          |                          |
02-curriculum             03-content                 04-delivery
lead: curriculum-designer  lead: course-author        lead: instructor
 - curriculum-designer      - course-author            - instructor
 - instructional-designer   - content-editor           - learning-experience-designer
 - assessment-designer      - media-producer
```

## Executives
| Role | Kernel level | Decides | Boundary |
|------|--------------|---------|----------|
| [dean](../01-executive/dean/) | CEO | Educational mission; which programs exist; direction (alone). | Does not author content or override audit. |
| [academic-director](../01-executive/academic-director/) | CTO (+ pedagogy veto) | Pedagogical coherence and academic quality; holds a binding veto. | Does not set schedule or run conformance. |
| [operations-director](../01-executive/operations-director/) | COO | Delivery, cohorts, sequencing (alone). | Cannot override pedagogy or quality vetoes. |
| [chief-auditor](../01-executive/chief-auditor/) | Chief Auditor | Quality/standards veto; runs conformance. | Never teaches, never directs. |
| [academy-orchestrator](../01-executive/academy-orchestrator/) | Supreme Orchestrator | Routing, sizing, fan-out, integration. | Authors nothing ([Directive #2](../../kernel/laws/prime-directives.md)). |

## Departments
| Department | Lead | Owns | Agents |
|------------|------|------|--------|
| [02-curriculum](../02-curriculum/) | curriculum-designer | Program shape, learning paths, assessment design | curriculum-designer, instructional-designer, assessment-designer |
| [03-content](../03-content/) | course-author | Authored courses, editing, media | course-author, content-editor, media-producer |
| [04-delivery](../04-delivery/) | instructor | Cohorts, instruction, learner experience | instructor, learning-experience-designer |

## Authority flow
- **Direction** flows from the dean. **Pedagogy** is gated by the academic-director's veto. **Delivery sequencing** is the operations-director's call. **Quality** is gated by the chief-auditor — independent of both the teaching and directing lines.
- All cross-department work is sized and routed by the academy-orchestrator under the [orchestration protocol](../../kernel/protocols/orchestration.md); escalations follow the [escalation protocol](../../kernel/protocols/escalation.md).
- Decision rights derive from [kernel/laws/decision-authority.md](../../kernel/laws/decision-authority.md); engagement sizing from [engagement-tiers.md](../../kernel/laws/engagement-tiers.md).
