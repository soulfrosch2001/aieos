# AI Film Studio
Status: stable
Type: company
Owner: ceo
Extends: kernel + stdlib

## Charter
AI Film Studio is a kernel-native film production studio chartered by
[Government decision 0001](../../government/decisions/0001-charter-four-new-companies.md).
It develops, produces, and finishes films across three stages — **development**
(story and greenlight), **production** (principal work on screen), and
**post-production** (assembly and delivery). Its north star is a slate of films
that are both on-vision and on-schedule: stories worth telling, delivered when
they were promised. The studio is born inheriting the kernel and forks nothing
([Directive #6](../../kernel/laws/prime-directives.md)).

The studio reasons about the *organization* of filmmaking — who decides, how work
is routed, how quality is gated. Creative and craft judgment lives in the
departments; this charter governs how those judgments are coordinated, never the
content of any individual frame.

## Inherited from AIEOS (source of truth)
- **Laws** — all [Prime Directives](../../kernel/laws/prime-directives.md), the
  [engagement tiers](../../kernel/laws/engagement-tiers.md) T0–T4, and the
  [decision-authority](../../kernel/laws/decision-authority.md) levels.
- **Protocols** — [communication](../../kernel/protocols/communication.md),
  [orchestration](../../kernel/protocols/orchestration.md) (15-agent fan-out),
  [escalation](../../kernel/protocols/escalation.md),
  [memory-flow](../../kernel/protocols/memory-flow.md),
  [lifecycle](../../kernel/protocols/lifecycle.md), and
  [reporting](../../kernel/protocols/reporting.md).
- **Stdlib defaults** — every template, workflow, council, and memory register the
  studio does not override by name, resolved per
  [resolution-order](../../kernel/loader/resolution-order.md).

## Local rules (stricter only)
A company may **add** strictness, never loosen a Kernel Law
([Directive #6](../../kernel/laws/prime-directives.md);
[resolution-order](../../kernel/loader/resolution-order.md)). The studio adds:

1. **No film is greenlit without a council.** Even a T2 development pitch passes
   through the [greenlight-council](../councils/greenlight-council/README.md);
   this is stricter than the default tier mapping, never looser — discuss before
   building ([Directive #1](../../kernel/laws/prime-directives.md)).
2. **The creative veto is recorded, not assumed.** The creative-director's veto on
   off-vision work ([Directive #2 boundary](../../kernel/laws/prime-directives.md))
   is written into [greenlight-decisions](../memory/registers/greenlight-decisions.md)
   with its reasoning, so vision is auditable, not personal taste.
3. **Production and post handoffs are logged.** Every stage handoff appends to the
   [production-log](../memory/registers/production-log.md) before the next stage
   may begin — memory is append-mostly ([Directive #7](../../kernel/laws/prime-directives.md)).

## Local overrides (by name)
| Entity | Overrides stdlib | Why |
|--------|------------------|-----|
| greenlight-council | feature-council | A film greenlight needs the CEO chair and creative veto, not a generic feature gate. |
| creative-council | architecture-council | Story coherence across the slate is the studio's "architecture". |
| development | planning | Development is planning sized to a film's story, T2. |
| production | feature | A production is the studio's feature build, T3. |
| post-production | release | Post is the studio's release pipeline, T3. |
| greenlight-decisions | architecture-decisions | Greenlights are the studio's load-bearing decisions. |
| production-log | lessons-learned | Each production teaches the next. |
| project-ideas | future-improvements | The development slate is the studio's idea backlog. |

## Structure
```
00-company/     this charter, mount adapter, org-chart, local rules
01-executive/   ceo, creative-director, line-producer, chief-auditor, studio-orchestrator
02-development/ screenwriter (lead), story-editor, development-executive
03-production/  director (lead), cinematographer, production-designer
04-post/        editor (lead), vfx-supervisor
councils/       greenlight-council, creative-council
workflows/      development, production, post-production
memory/         greenlight-decisions, production-log, project-ideas
reports/        health-report.md per the reporting protocol
```

## Departments
- **02-development** — owns story, the slate, and the case for each greenlight.
- **03-production** — owns what happens on screen: direction, image, and design.
- **04-post** — owns assembly, finishing, and delivery of the cut.

## KPIs
- Slate health — films greenlit vs. delivered on the promised window.
- Vision adherence — share of delivered films with zero unresolved creative veto.
- Handoff cleanliness — stage handoffs logged before the next stage begins.

See [../reports/README.md](../reports/README.md) and the
[reporting protocol](../../kernel/protocols/reporting.md).

## Mounting
Mounted kernel-native via [AIEOS.md](AIEOS.md). Registered in
[../../kernel/registry/](../../kernel/registry/); see
[../../kernel/contracts/plugin.md](../../kernel/contracts/plugin.md).
