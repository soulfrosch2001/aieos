# AI Education Academy — AIEOS Mount Adapter
Status: stable
Type: plugin
Owner: academy-orchestrator
Extends: kernel + stdlib
Requires kernel: ^1.0.0

## What this is
AI Education Academy is **kernel-native**: it was born inheriting the AIEOS kernel and forks nothing. This adapter declares what the company inherits, how its five executives map to decision-authority levels, and which stdlib entities it overrides by name. There is no pre-kernel legacy to reconcile.

## Inherited from AIEOS (source of truth)
- **Laws** — all [Prime Directives](../../kernel/laws/prime-directives.md), [engagement tiers](../../kernel/laws/engagement-tiers.md), [decision authority](../../kernel/laws/decision-authority.md).
- **Protocols** — [communication](../../kernel/protocols/communication.md), [orchestration](../../kernel/protocols/orchestration.md), [escalation](../../kernel/protocols/escalation.md), [memory-flow](../../kernel/protocols/memory-flow.md), [lifecycle](../../kernel/protocols/lifecycle.md).
- **Loader** — [resolution order](../../kernel/loader/resolution-order.md).
- **Stdlib defaults** — every [workflow](../../workflows/), [council](../../councils/), [template](../../templates/), and [memory register](../../memory/) not overridden below.

## Executive mapping → decision-authority levels
| Local role | Kernel level |
|------------|--------------|
| [dean](../01-executive/dean/) | CEO |
| [academic-director](../01-executive/academic-director/) | CTO (+ pedagogy veto) |
| [operations-director](../01-executive/operations-director/) | COO |
| [chief-auditor](../01-executive/chief-auditor/) | Chief Auditor (quality veto) |
| [academy-orchestrator](../01-executive/academy-orchestrator/) | Supreme Orchestrator (routing) |

## Local overrides (by name)
Local entities that intentionally extend a stdlib default of the same family.
| Local entity | Overrides stdlib | Why |
|--------------|------------------|-----|
| [curriculum-council](../councils/curriculum-council/) | architecture-council | Pedagogical structure is the academy's architecture; chair academic-director. |
| [assessment-council](../councils/assessment-council/) | feature-council | Assessment design is gated like a feature; chair assessment-designer. |
| [course-design](../workflows/course-design.md) | feature | A course is the unit of delivered value (T2). |
| [lesson-production](../workflows/lesson-production.md) | documentation | Lessons are authored content (T1). |
| [assessment-review](../workflows/assessment-review.md) | audit | Assessment quality is audited (T2). |

## Memory register mapping
| Local register | Stdlib schema | Relationship |
|----------------|---------------|--------------|
| [pedagogy-decisions.md](../memory/registers/pedagogy-decisions.md) | architecture-decisions | extends (owner academic-director) |
| [learning-outcomes.md](../memory/registers/learning-outcomes.md) | lessons-learned | extends (owner curriculum-designer) |
| [course-ideas.md](../memory/registers/course-ideas.md) | future-improvements | extends (owner course-author) |

## Conformance
Mounted **kernel-native** when: this adapter is present with `Requires kernel: ^1.0.0`, the five executives map to decision-authority levels, the override and register mappings are complete, and the company is listed in [kernel/registry/registry.md](../../kernel/registry/registry.md) as `mounted`.
