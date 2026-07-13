<!--
Company Mount Adapter for the pre-kernel AI Software Company.
Non-destructive: binds existing structure to the kernel, changes nothing.
Contract: ../kernel/contracts/plugin.md
-->

# AI Software Company — AIEOS Mount Adapter
Status: stable
Type: plugin
Owner: Executive Orchestrator (AI Software Company)
Extends: kernel + stdlib
Requires kernel: ^1.0.0

## What this is
The AI Software Company predates AIEOS. This adapter mounts the existing company
under `ai-software-company/` onto the kernel without renaming, moving, or deleting
anything. It declares what the company **inherits**, what it **overrides by name**,
and how its pre-kernel artifacts map onto the standard library. Mounting changes no
existing file; any reconciliation of duplicated governance happens later, on purpose
([Directive #7](../kernel/laws/prime-directives.md)).

## Inherited from AIEOS (source of truth)
- **Laws** — all [Prime Directives](../kernel/laws/prime-directives.md),
  [engagement tiers](../kernel/laws/engagement-tiers.md) (T0-T4),
  [decision authority](../kernel/laws/decision-authority.md).
- **Protocols** — communication, orchestration (15-agent fan-out, [Directive #4](../kernel/laws/prime-directives.md)),
  escalation, memory-flow, lifecycle. The orchestrator routes, never builds
  ([Directive #2](../kernel/laws/prime-directives.md)); companies never talk directly
  ([Directive #5](../kernel/laws/prime-directives.md)).
- **Stdlib defaults** — every [workflow](../workflows/), [council](../councils/),
  [template](../templates/), and [memory register](../memory/) it does not override,
  inherited not forked ([Directive #6](../kernel/laws/prime-directives.md)).

## Legacy governance (reconciled to kernel pointers)
Local files under `00-company/` that duplicated kernel law have been **replaced by thin
kernel pointers** (Directive #6, inherit-don't-fork): each keeps its filename but now just
points at its authoritative kernel/shared source, keeping only genuinely company-specific,
stricter additions. They are kept, not deleted; the kernel is authoritative where they disagree.
| Local file | Reconciliation |
|------------|----------------|
| `00-company/prime-directives.md` | replaced by a kernel pointer → [kernel laws](../kernel/laws/prime-directives.md) |
| `00-company/engagement-tiers.md` | replaced by a kernel pointer → [kernel tiers](../kernel/laws/engagement-tiers.md) |
| `00-company/decision-authority.md` | replaced by a kernel pointer → [kernel decision authority](../kernel/laws/decision-authority.md) |
| `00-company/governance.md` | superseded but retained → [kernel laws](../kernel/laws/prime-directives.md) |
| `00-company/orchestration-policy.md` | replaced by a kernel pointer → [orchestration protocol](../kernel/protocols/orchestration.md) |
| `00-company/conventions.md` | replaced by a kernel pointer → [shared conventions](../shared/conventions.md) |
| `00-company/glossary.md` | replaced by a kernel pointer → [shared glossary](../shared/glossary.md) |

## Executive mapping → decision-authority levels
| Local role | Kernel level |
|------------|--------------|
| `01-executive/ceo` | CEO (owns *whether* — value, priority, trade-offs) |
| `01-executive/cto` | CTO (+ technical veto on architecture and risk) |
| `01-executive/coo` | COO (owns *that it ships* — delivery, ops, releases) |
| `01-executive/chief-auditor` | Chief Auditor (independent quality/security veto) |
| `01-executive/executive-orchestrator` | Supreme Orchestrator (routing only, never builds) |

## Local overrides (by name)
The company's 6 councils and 15 workflows are local versions that intentionally
replace the stdlib defaults of the same intent. Each overrides by name and may only
**add** strictness, never relax it ([resolution order](../kernel/loader/resolution-order.md)).

| Local entity | Overrides stdlib | Why |
|--------------|------------------|-----|
| `06-councils/architecture-council` | [architecture-review](../workflows/) council | Software-specific architecture debate |
| `06-councils/feature-council` | [feature](../councils/) council | Product/feature scoping |
| `06-councils/incident-council` | incident council | Software incident triage |
| `06-councils/performance-council` | performance council | Perf investigation governance |
| `06-councils/release-council` | release council | Release gate for software |
| `06-councils/security-council` | security council | Security-review governance |
| `05-workflows/*.md` (15 workflows) | stdlib [workflows](../workflows/) | Software-engineering variants (bug-fix, code-review, deployment, hotfix, new-feature, refactoring, release, sprint-planning, testing, etc.) override stdlib defaults of the same intent |

## Memory register mapping
The company has 9 registers; 7 map to stdlib schemas, 2 are company-only extensions.
| Local register | Stdlib schema | Relationship |
|----------------|---------------|--------------|
| `07-memory/roadmap.md` | [roadmap](../memory/registers/roadmap.md) | inherits |
| `07-memory/technical-debt.md` | [technical-debt](../memory/registers/technical-debt.md) | inherits |
| `07-memory/architecture-decisions.md` | [architecture-decisions](../memory/registers/architecture-decisions.md) | inherits |
| `07-memory/meeting-history.md` | [meeting-history](../memory/registers/meeting-history.md) | inherits |
| `07-memory/lessons-learned.md` | [lessons-learned](../memory/registers/lessons-learned.md) | inherits |
| `07-memory/known-issues.md` | [known-issues](../memory/registers/known-issues.md) | inherits |
| `07-memory/future-improvements.md` | [future-improvements](../memory/registers/future-improvements.md) | inherits |
| `07-memory/standards.md` | — | company-only extension |
| `07-memory/coding-rules.md` | — | company-only extension |

## Conformance
Mounted when: this adapter is present at the company root, the five executives map to
decision-authority levels, the register mapping is complete (7 stdlib + 2 extensions),
the 6 councils and 15 workflows are declared as name overrides, and the company is
listed in [kernel/registry/registry.md](../kernel/registry/registry.md) as `mounted`.
