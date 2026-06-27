# AI Architecture Studio — AIEOS Mount Adapter
Status: stable
Type: plugin
Owner: principal
Extends: kernel + stdlib
Requires kernel: ^1.0.0

## What this is
AI Architecture Studio is **kernel-native** — born on AIEOS, forking nothing
([Directive #6](../../kernel/laws/prime-directives.md)). There is no pre-kernel
estate to reconcile and therefore **no legacy governance**: this adapter does not
supersede anything, it simply declares the bindings. It states what the studio
**inherits**, how its five executives map onto the
[decision-authority](../../kernel/laws/decision-authority.md) levels, and which
stdlib entities it **overrides by name**.

## Inherited from AIEOS (source of truth)
- **Laws** — all [Prime Directives](../../kernel/laws/prime-directives.md),
  [engagement tiers T0–T4](../../kernel/laws/engagement-tiers.md),
  [decision authority](../../kernel/laws/decision-authority.md).
- **Protocols** — [communication](../../kernel/protocols/communication.md),
  [orchestration](../../kernel/protocols/orchestration.md) (15-agent fan-out),
  [escalation](../../kernel/protocols/escalation.md),
  [memory-flow](../../kernel/protocols/memory-flow.md),
  [lifecycle](../../kernel/protocols/lifecycle.md).
- **Loader** — [resolution-order.md](../../kernel/loader/resolution-order.md).
- **Stdlib defaults** — every [workflow](../../workflows/),
  [council](../../councils/), [template](../../templates/), and
  [memory register](../../memory/) the studio does not override below.

## Executive mapping → decision-authority levels
| Local role | Kernel level |
|------------|--------------|
| [principal](../01-executive/principal/) | CEO — sets design vision and project selection; decides direction alone. |
| [design-director](../01-executive/design-director/) | CTO (+ design veto) — owns design coherence; holds an absolute veto on design grounds. |
| [project-director](../01-executive/project-director/) | COO — owns schedules, budgets, delivery sequencing; decides sequencing alone. |
| [chief-auditor](../01-executive/chief-auditor/) | Chief Auditor (quality veto) — runs conformance; never designs, never directs (Directive #2). |
| [studio-orchestrator](../01-executive/studio-orchestrator/) | Supreme Orchestrator — routes, sizes, fans out, integrates; never designs (Directive #2). |

## Local overrides (by name)
Local entities that intentionally replace a stdlib default of the same shape.
Each shadows its stdlib parent by name per the
[resolution order](../../kernel/loader/resolution-order.md).

### Councils
| Local entity | Overrides stdlib | Why |
|--------------|------------------|-----|
| [design-review-council](../councils/design-review-council/) | [architecture-council](../../councils/architecture-council/) | Gates building-design coherence, not software architecture; chaired by the design-director who holds the design veto. |
| [code-compliance-council](../councils/code-compliance-council/) | [security-council](../../councils/security-council/) | Recasts the hardest gate as building-code and life-safety compliance; chaired by the chief-auditor. |

### Workflows
| Local entity | Overrides stdlib | Tier | Why |
|--------------|------------------|------|-----|
| [schematic-design](../workflows/schematic-design.md) | [feature](../../workflows/feature.md) | T2 | Turns a brief into a schematic design package. |
| [design-development](../workflows/design-development.md) | [planning](../../workflows/planning.md) | T3 | Develops schematics into coordinated, buildable design. |
| [permit-review](../workflows/permit-review.md) | [security-review](../../workflows/security-review.md) | T3 | The compliance gate before a set goes to the authority having jurisdiction. |

### Memory registers
| Local register | Stdlib schema | Owner | Relationship |
|----------------|---------------|-------|--------------|
| [design-decisions](../memory/registers/design-decisions.md) | [architecture-decisions](../../memory/registers/architecture-decisions.md) | design-director | extends |
| [code-compliance-log](../memory/registers/code-compliance-log.md) | [known-issues](../../memory/registers/known-issues.md) | chief-auditor | extends |
| [design-lessons](../memory/registers/design-lessons.md) | [lessons-learned](../../memory/registers/lessons-learned.md) | lead-architect | extends |

## Conformance
Mounted **kernel-native** when: this adapter is present, the five executives map
to decision-authority levels, the council/workflow/register overrides resolve by
name, and the studio is listed in
[kernel/registry/registry.md](../../kernel/registry/registry.md) as
`mounted (kernel-native)`. See
[../../kernel/contracts/plugin.md](../../kernel/contracts/plugin.md).
