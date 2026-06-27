<!-- Department index. Contract: ../../kernel/contracts/department.md -->

# 04-Playtesting
Status: active
Type: department
Owner: playtest-lead
Extends: none

## Mission
Playtesting is where the studio's claims about its games meet real players. The
department owns the evidence: it designs structured sessions, runs them with
disjoint cohorts, and converts what happens at the table into findings the
design and balance departments can act on. A rule is not "clear" because the
rules-writer says so; it is clear because players read it once and played it
right. This department exists to make that distinction enforceable.

## Lead
[playtest-lead](playtest-lead/) — accountable for the department's output and
quality. Designs the playtest plan and owns the [playtest workflow](../workflows/playtest.md).

## Agents
| Agent | Role in one line |
|-------|------------------|
| [playtest-lead](playtest-lead/) | Designs the playtest plan, sets session protocol, owns the playtest workflow, signs off on findings. |
| [playtester](playtester/) | Runs sessions to protocol, observes without coaching, reports raw findings to the feedback register. |

## Councils it sits on
- [design-council](../councils/design-council/) — brings player evidence to design decisions.
- [balance-council](../councils/balance-council/) — supplies session data that confirms or kills balance hypotheses.

## Memory it feeds
- [playtest-feedback](../memory/registers/playtest-feedback.md) — every session's findings, append-only (Directive [#8](../../kernel/laws/prime-directives.md)).
- [balancing-history](../memory/registers/balancing-history.md) — observed outcomes that inform balance changes.

## Lifecycle
Every agent in this department follows the agent contract
([../../kernel/contracts/agent.md](../../kernel/contracts/agent.md)) and is built
from [../../templates/agent.template.md](../../templates/agent.template.md).
T1 findings are signed off by the lead; T2+ conclusions escalate to a council
(see [engagement-tiers.md](../../kernel/laws/engagement-tiers.md)).
