<!--
Company Mount Adapter for AI-Game-Studio. NON-DESTRUCTIVE: binds the existing
studio onto the kernel without renaming, moving, or deleting any file.
Contract: ../kernel/contracts/plugin.md
-->

# AI-Game-Studio — AIEOS Mount Adapter
Status: stable
Type: plugin
Owner: CEO (via Executive Orchestrator)
Extends: kernel + stdlib
Requires kernel: ^1.0.0

## What this is
AI-Game-Studio is an engine-agnostic AAA game studio that existed before AIEOS. This
adapter mounts it onto the kernel: it declares what the studio **inherits**, what it
**overrides by name**, and how its pre-kernel artifacts map onto the standard library.
Mounting changes no existing file — duplicated governance is reconciled later,
deliberately ([Directive #7](../kernel/laws/prime-directives.md)).

## Inherited from AIEOS (source of truth)
- **Laws** — all [Prime Directives](../kernel/laws/prime-directives.md),
  [engagement tiers](../kernel/laws/engagement-tiers.md),
  [decision authority](../kernel/laws/decision-authority.md).
- **Protocols** — communication, orchestration (15-agent fan-out), escalation,
  memory-flow, lifecycle ([Directive #4](../kernel/laws/prime-directives.md)).
- **Stdlib defaults** — every [workflow](../workflows/), [council](../councils/),
  [template](../templates/), and [memory register](../memory/) it does not override.

## Legacy governance (superseded, retained for history)
The studio carries a full copy of its own governance under `00-company/`. Those files
duplicate kernel law and are now **superseded by the kernel**; they are kept, not
deleted, and the kernel is authoritative where they disagree ([Directive #6 — inherit,
don't fork](../kernel/laws/prime-directives.md)). The six core governance files have been
**replaced by kernel pointers** that inherit the authoritative version and keep only
stricter game-specific additions.
| Local file | Status | Authority |
|------------|--------|-----------|
| `00-company/prime-directives.md` | replaced by a kernel pointer | [kernel laws](../kernel/laws/prime-directives.md) |
| `00-company/engagement-tiers.md` | replaced by a kernel pointer | [kernel tiers](../kernel/laws/engagement-tiers.md) |
| `00-company/decision-authority.md` | replaced by a kernel pointer | [kernel decision authority](../kernel/laws/decision-authority.md) |
| `00-company/orchestration-policy.md` | replaced by a kernel pointer | [kernel orchestration protocol](../kernel/protocols/) |
| `00-company/conventions.md` | replaced by a kernel pointer | [shared conventions](../shared/conventions.md) |
| `00-company/glossary.md` | replaced by a kernel pointer | [shared glossary](../shared/glossary.md) |
| `00-company/continuous-improvement.md` | superseded but retained | [kernel memory-flow protocol](../kernel/protocols/) |

## Executive mapping → decision-authority levels
| Local role | Kernel level |
|------------|--------------|
| `ceo` | CEO |
| `technical-director` | CTO (+ technical veto) |
| `production-director` | COO |
| `chief-auditor` | Chief Auditor (quality veto) |
| `executive-orchestrator` | Supreme Orchestrator (routing only, [Directive #2](../kernel/laws/prime-directives.md)) |
| `studio-director` | company-specific leadership (no kernel equivalent) |
| `creative-director` | company-specific leadership (no kernel equivalent) |

Note: `studio-director`, `creative-director`, and `technical-director` form the studio's
craft-leadership trio. Only `technical-director` carries a kernel-level mandate (CTO +
technical veto); the studio and creative directors are local leadership that sit above
councils but below executive decision authority.

## Local overrides (by name)
This studio's 10 councils and 21 workflows are game-domain specialisations. They override
any stdlib default of the same name and otherwise extend the library; nothing here talks
to another company directly ([Directive #5](../kernel/laws/prime-directives.md)).
| Local entity | Overrides stdlib | Why |
|--------------|------------------|-----|
| `08-councils/*` (10 councils: animation, art, economy, gameplay, narrative, optimization, performance, release, security, technical) | stdlib councils of same name | Game-domain expertise the generic council set does not cover |
| `09-workflows/*` (21 workflows: ability-design … weapon-design) | stdlib workflows of same name | Production pipelines specific to shipping games |

## Memory register mapping
Eleven local registers map onto the seven stdlib registers; four are company-only
extensions retained under this company's namespace.
| Local register | Stdlib schema | Relationship |
|----------------|---------------|--------------|
| `10-memory/known-bugs.md` | `memory/known-issues.md` | inherits (renamed) |
| `10-memory/future-features.md` | `memory/future-improvements.md` | inherits (renamed) |
| `10-memory/architecture-decisions.md` | `memory/architecture-decisions.md` | inherits |
| `10-memory/lessons-learned.md` | `memory/lessons-learned.md` | inherits |
| `10-memory/technical-debt.md` | `memory/technical-debt.md` | inherits |
| `10-memory/roadmap.md` | `memory/roadmap.md` | inherits |
| `10-memory/meeting-history.md` | `memory/meeting-history.md` | inherits |
| `10-memory/balancing-history.md` | — | company-only extension |
| `10-memory/community-feedback.md` | — | company-only extension |
| `10-memory/game-design-decisions.md` | — | company-only extension |
| `10-memory/performance-reports.md` | — | company-only extension |

## Conformance
Mounted when: this adapter is present, executives map to decision-authority, the register
mapping is complete, and the company is listed in
[kernel/registry/registry.md](../kernel/registry/registry.md) as `mounted`.
