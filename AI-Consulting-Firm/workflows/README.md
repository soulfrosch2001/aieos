# Workflows
Status: stable
Type: workflow-index
Owner: operations-partner
Extends: none

The repeatable lines of work this firm runs. Each workflow inherits a stdlib
default by name ([Directive #6](../../kernel/laws/prime-directives.md)) and
narrows it to consulting. None of them implement directly — the
[engagement-orchestrator](../01-executive/engagement-orchestrator/) routes and
fans out (Directive [#2](../../kernel/laws/prime-directives.md),
[orchestration](../../kernel/protocols/orchestration.md)). Every workflow ends by
appending to a [memory register](../memory/registers/).

## The three workflows
| Workflow | Tier | Extends (stdlib) | Purpose |
|----------|------|------------------|---------|
| [engagement-scoping](engagement-scoping.md) | [T2](../../kernel/laws/engagement-tiers.md) | [planning](../../workflows/planning.md) | Scope and staff a new engagement. |
| [strategy-development](strategy-development.md) | [T2](../../kernel/laws/engagement-tiers.md) | [feature](../../workflows/feature.md) | Build and defend a strategy recommendation. |
| [implementation](implementation.md) | [T3](../../kernel/laws/engagement-tiers.md) | [release](../../workflows/release.md) | Deliver and embed the change at the client. |

## How they chain
```
engagement-scoping (T2)  ─>  strategy-development (T2)  ─>  implementation (T3)
   scope + staff             decide + defend                deliver + embed
```
Diagnosis feeds scoping; strategy decides; implementation makes it real
(Directive [#1](../../kernel/laws/prime-directives.md) — the client's outcome,
not the deck). Tier sizing precedes every one of them
([engagement-tiers](../../kernel/laws/engagement-tiers.md)).

## Gates and authority
Every gate is blocking. The [engagement-director](../01-executive/engagement-director/)
holds the methodology veto; the [chief-auditor](../01-executive/chief-auditor/)
holds the quality veto. Sign-off scales with tier per
[decision-authority](../../kernel/laws/decision-authority.md).
