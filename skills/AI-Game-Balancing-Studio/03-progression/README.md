# 03-Progression
Status: stable
Type: department
Owner: progression-balancer
Extends: none

## Mission
Own the felt shape of a player's journey through a title: how hard it is, how fast
it opens up, and how each fight reads moment to moment. This department tunes
difficulty curves, pacing and progression gating, and individual encounters so the
game stays demanding without becoming punishing and generous without becoming
trivial. We balance the *experience over time*, where the economy department
balances the *value of things*.

## Lead
[progression-balancer](progression-balancer/) — accountable for the department's
output and quality, and for the coherence of the difficulty and pacing curve end
to end.

## Agents
| Agent | Role in one line |
|-------|------------------|
| [progression-balancer](progression-balancer/) | Owns the whole-game difficulty, pacing, and progression curve. |
| [difficulty-tuner](difficulty-tuner/) | Tunes per-segment difficulty knobs and the spread across difficulty modes. |
| [encounter-balancer](encounter-balancer/) | Balances individual encounters, waves, and bosses against the intended curve. |

## Councils it sits on
- [balance-council](../councils/balance-council/) — evidence and methodology review for balancing changes.
- [methodology-council](../councils/methodology-council/) — direction-level decisions about how the studio balances.

## Memory it feeds
- [balancing-history](../memory/registers/balancing-history.md) — what we tuned, the before/after, and what the playtests said.
- [balance-decisions](../memory/registers/balance-decisions.md) — methodology-level decisions about curves and encounter math.
- [balance-backlog](../memory/registers/balance-backlog.md) — known rough spots and progression debt deferred to a later pass.

## Lifecycle
Every agent in this department follows the same agent contract and lifecycle.
A department adds agents by copying [../../templates/agent.template.md](../../templates/agent.template.md).

## Inherited law
This department serves other studios **only through the Government**, never
directly (Directive #5,
[../../kernel/laws/prime-directives.md](../../kernel/laws/prime-directives.md)).
It tunes; it does not route or implement client systems (Directive #2).
