# AI Consulting Firm — AIEOS Mount Adapter
Status: stable
Type: plugin
Owner: managing-partner
Extends: kernel + stdlib
Requires kernel: ^1.1.0

## What this is
AI Consulting Firm is **kernel-native** — born on AIEOS under Government decision
0001, forking nothing ([Directive #6](../../kernel/laws/prime-directives.md)).
There is no pre-kernel estate to reconcile and therefore **no legacy
governance**: this adapter does not supersede anything, it simply declares the
bindings. It states what the firm **inherits**, how its five executives map onto
the [decision-authority](../../kernel/laws/decision-authority.md) levels, and
which stdlib entities it **overrides by name**.

## Inherited from AIEOS (source of truth)
- **Laws** — all [Prime Directives](../../kernel/laws/prime-directives.md),
  [engagement tiers T0–T4](../../kernel/laws/engagement-tiers.md),
  [decision authority](../../kernel/laws/decision-authority.md).
- **Protocols** — [communication](../../kernel/protocols/communication.md),
  [orchestration](../../kernel/protocols/orchestration.md) (15-agent fan-out),
  [escalation](../../kernel/protocols/escalation.md),
  [memory-flow](../../kernel/protocols/memory-flow.md),
  [lifecycle](../../kernel/protocols/lifecycle.md),
  [reporting](../../kernel/protocols/reporting.md).
- **Loader** — [resolution-order.md](../../kernel/loader/resolution-order.md).
- **Stdlib defaults** — every [workflow](../../workflows/),
  [council](../../councils/), [template](../../templates/), and
  [memory register](../../memory/) the firm does not override below.

## Executive mapping → decision-authority levels
| Local role | Kernel level |
|------------|--------------|
| [managing-partner](../01-executive/managing-partner/) | CEO — sets practice direction and which engagements to take; decides direction alone. |
| [engagement-director](../01-executive/engagement-director/) | CTO (+ methodology veto) — owns analytical rigor and methodology across engagements; holds an absolute veto on method grounds. |
| [operations-partner](../01-executive/operations-partner/) | COO — owns staffing, delivery, and deadlines; decides sequencing alone. |
| [chief-auditor](../01-executive/chief-auditor/) | Chief Auditor (quality veto) — runs conformance; never delivers client work, never directs (Directive #2). |
| [engagement-orchestrator](../01-executive/engagement-orchestrator/) | Supreme Orchestrator — routes engagements, sizes, fans out, integrates; never delivers (Directive #2). |

## Local overrides (by name)
Local entities that intentionally replace a stdlib default of the same shape.
Each shadows its stdlib parent by name per the
[resolution order](../../kernel/loader/resolution-order.md).

### Councils
| Local entity | Overrides stdlib | Why |
|--------------|------------------|-----|
| [engagement-council](../councils/engagement-council/) | [feature-council](../../councils/feature-council/) | Gates the analytical approach and design of an engagement, not a software feature; chaired by the engagement-director who holds the methodology veto. |
| [quality-council](../councils/quality-council/) | [architecture-council](../../councils/architecture-council/) | Recasts the hardest gate as deliverable quality, sourcing, and conformance; chaired by the chief-auditor. |

### Workflows
| Local entity | Overrides stdlib | Tier | Why |
|--------------|------------------|------|-----|
| [engagement-scoping](../workflows/engagement-scoping.md) | [planning](../../workflows/planning.md) | T2 | Sizes an incoming problem and turns it into a scoped engagement plan. |
| [strategy-development](../workflows/strategy-development.md) | [feature](../../workflows/feature.md) | T2 | Develops diagnosis findings into a defensible strategy and option set. |
| [implementation](../workflows/implementation.md) | [release](../../workflows/release.md) | T3 | Takes an approved strategy into staged delivery and change adoption. |

### Memory registers
| Local register | Stdlib schema | Owner | Relationship |
|----------------|---------------|-------|--------------|
| [engagement-decisions](../memory/registers/engagement-decisions.md) | [architecture-decisions](../../memory/registers/architecture-decisions.md) | engagement-director | extends |
| [risk-register](../memory/registers/risk-register.md) | [known-issues](../../memory/registers/known-issues.md) | chief-auditor | extends |
| [engagement-lessons](../memory/registers/engagement-lessons.md) | [lessons-learned](../../memory/registers/lessons-learned.md) | operations-partner | extends |

## Reporting
Per the [reporting protocol](../../kernel/protocols/reporting.md), this company
produces [reports/health-report.md](../reports/health-report.md) — the firm's
periodic health and KPI report — alongside the per-engagement reports each
engagement closes with.

## Conformance
Mounted **kernel-native** when: this adapter is present, the five executives map
to decision-authority levels, the council/workflow/register overrides resolve by
name, and the firm is listed in
[kernel/registry/registry.md](../../kernel/registry/registry.md) as
`mounted (kernel-native)`. See
[../../kernel/contracts/plugin.md](../../kernel/contracts/plugin.md).
