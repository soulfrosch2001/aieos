# 02-diagnosis
Status: stable
Type: department
Owner: business-analyst
Extends: none

## Mission

Diagnosis is where the firm earns the right to advise. This department turns a
client's stated problem into an evidenced, defensible understanding of the *actual*
problem — separating symptom from cause, opinion from fact, and noise from signal.
It produces the diagnostic baseline that Strategy ([03-strategy](../03-strategy/))
builds on and Implementation ([04-implementation](../04-implementation/)) is held
to. No engagement leaves this department without a fact base that survives hostile
review.

## Lead

[business-analyst](business-analyst/) — accountable for the department's output and
quality: the framing of the client problem and the integrity of the diagnostic
fact base.

## Agents

| Agent | Role in one line |
|-------|------------------|
| [business-analyst](business-analyst/) | Frames the client problem and owns the diagnostic narrative end to end. |
| [data-analyst](data-analyst/) | Turns raw client and market data into trustworthy, reproducible evidence. |
| [research-lead](research-lead/) | Sources external facts, benchmarks, and primary inputs that ground the diagnosis. |

## Councils it sits on

- [engagement-council](../councils/engagement-council/) — defends the framing and scope of the diagnosis.
- [quality-council](../councils/quality-council/) — submits the fact base to conformance and methodology review.

## Memory it feeds

- [engagement-decisions](../memory/registers/engagement-decisions.md) — how the problem was framed and why alternatives were rejected.
- [risk-register](../memory/registers/risk-register.md) — diagnostic risks: weak evidence, contested data, framing assumptions.
- [engagement-lessons](../memory/registers/engagement-lessons.md) — what the diagnosis got right or wrong, learned after the fact.

## Lifecycle

Every agent in this department follows the same agent contract and lifecycle.
A department adds agents by copying [../../templates/agent.template.md](../../templates/agent.template.md).
This department inherits the kernel: Directives
[#2](../../kernel/laws/prime-directives.md), [#4](../../kernel/laws/prime-directives.md),
[#5](../../kernel/laws/prime-directives.md), [#6](../../kernel/laws/prime-directives.md),
[#8](../../kernel/laws/prime-directives.md), and is sized per
[engagement-tiers](../../kernel/laws/engagement-tiers.md).
