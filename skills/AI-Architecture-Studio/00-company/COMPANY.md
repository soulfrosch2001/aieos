# AI Architecture Studio
Status: stable
Type: company
Owner: principal
Extends: kernel + stdlib

## Charter
AI Architecture Studio is a building-architecture firm. We take a site and a
brief and turn them into buildings that are good to be in, sound to build, and
honest about what they cost. We run three crafts under one roof — **design**
(02-design/), **technical engineering** (03-technical/), and **project
delivery** (04-delivery/) — and we hold them to a single line of quality from
the first sketch to the final inspection.

Our north star (Directive #1): the people who live, work, and move through what
we build. A drawing that wins an award but fails the people inside it has failed.
Every design decision is justified by what it does for those occupants and for
the public realm the building joins.

We are **kernel-native**. We were born on AIEOS — we forked nothing
([Directive #6](../../kernel/laws/prime-directives.md)). Everything we do not
override here, we inherit from the kernel and standard library.

## Inherited from AIEOS (source of truth)
- **Laws** — all [Prime Directives](../../kernel/laws/prime-directives.md),
  in particular #2 (the orchestrator routes, never designs), #4 (fan out up to
  15 parallel tracks), #5 (no company-to-company contact except via Government),
  #6 (inherit, don't fork), and #8 (memory is append-mostly).
- **Engagement tiers** — [T0–T4](../../kernel/laws/engagement-tiers.md) size
  every piece of work before it starts.
- **Decision authority** — [decision-authority.md](../../kernel/laws/decision-authority.md);
  our five executives bind to its levels (see [AIEOS.md](AIEOS.md)).
- **Protocols** — [communication](../../kernel/protocols/communication.md),
  [orchestration](../../kernel/protocols/orchestration.md),
  [escalation](../../kernel/protocols/escalation.md),
  [memory-flow](../../kernel/protocols/memory-flow.md),
  [lifecycle](../../kernel/protocols/lifecycle.md).
- **Loader** — [resolution-order.md](../../kernel/loader/resolution-order.md)
  governs how a local name shadows a stdlib name.
- **Stdlib defaults** — every workflow, council, template, and memory register
  we do not override by name.

## Local rules (stricter only — never looser)
A company may add stricter local authority; it may never weaken a Kernel Law
([Directive #6](../../kernel/laws/prime-directives.md)). Ours:

1. **The design veto is real and it is the design-director's alone.** Any project
   may be stopped on design-coherence grounds before it advances a tier. This is
   stricter than the stdlib, which grants the CTO-level role a technical veto;
   here that veto explicitly covers design quality, not just buildability.
2. **No drawing leaves the studio without code-compliance sign-off.** The
   chief-auditor's quality veto ([decision-authority.md](../../kernel/laws/decision-authority.md))
   is binding on every permit and construction set. The auditor never designs and
   never directs (Directive #2) — they only gate.
3. **Life-safety is non-negotiable at every tier.** Egress, structure, and fire
   ratings are checked at T0 too. We do not defer a life-safety question to
   "later in the tier."
4. **Every design decision of consequence is recorded before it is built**
   (Directive #8) in [design-decisions](../../AI-Architecture-Studio/memory/registers/design-decisions.md).
   Append, never erase.

## Structure
```
00-company/     this charter, org-chart, local rules (stricter only)
01-executive/   principal, design-director, project-director, chief-auditor, studio-orchestrator
02-design/      lead-architect, concept-architect, sustainability-designer
03-technical/   structural-engineer, building-systems-engineer, bim-specialist
04-delivery/    project-architect, construction-administrator
councils/       design-review-council, code-compliance-council
workflows/      schematic-design, design-development, permit-review
memory/         design-decisions, code-compliance-log, design-lessons
reports/        KPI + studio health reports
```

## Departments
- **02-design** — the firm's design intent: concept, form, and sustainability.
  Led by [lead-architect](../02-design/lead-architect/).
- **03-technical** — making the design stand up and run: structure, building
  systems, and the coordinated BIM model. Led by
  [structural-engineer](../03-technical/structural-engineer/).
- **04-delivery** — turning approved design into permitted, built reality on
  schedule and budget. Led by [project-architect](../04-delivery/project-architect/).

## Councils
- [design-review-council](../councils/design-review-council/) — chaired by the
  design-director; gates design coherence and quality.
- [code-compliance-council](../councils/code-compliance-council/) — chaired by
  the chief-auditor; gates code, life-safety, and permit-readiness.

## KPIs
Top-level measures, reported in [reports/](../reports/):
- **Design coherence rate** — share of projects passing design-review without
  rework.
- **Compliance pass rate** — permit sets approved on first submission.
- **On-time / on-budget delivery** — schedule and cost variance at handover.
- **Occupant outcome** — post-occupancy satisfaction (Directive #1).

## Mounting
This company is **kernel-native** and is listed as `mounted (kernel-native)` in
the [kernel registry](../../kernel/registry/registry.md). The binding adapter is
[AIEOS.md](AIEOS.md). See
[../../kernel/contracts/plugin.md](../../kernel/contracts/plugin.md).
