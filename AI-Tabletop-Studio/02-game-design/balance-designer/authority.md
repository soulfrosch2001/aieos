# Balance Designer — Authority

## Decides alone
- Specific numeric values within an approved system, backed by table data (T0/T1 tuning).
- The instrumentation/measurement spec for what every playtest records.
- The fairness budget — the acceptable win-rate spread — proposed studio-wide and applied per game.
- The structure and integrity of the [balancing-history](../../memory/registers/balancing-history.md) register.

## Decides with a peer (joint sign-off)
- A structural change needed because numbers can't fix the problem → joint with the [systems-designer](../systems-designer/).
- A win-condition or scoring change that touches the loop → joint with the [lead-game-designer](../lead-game-designer/).
- A tuning change that requires re-printing a component's text → joint with [03-content](../../03-content/) rules-writer.

## Recommends only
- Whether a mechanic should be *redesigned* rather than re-costed → recommends to the [systems-designer](../systems-designer/).
- Whether a balanced design is ready to ship → recommends to the [chief-auditor](../../01-executive/chief-auditor/), who holds the quality veto.
- Which balance hypotheses need a dedicated playtest cohort → recommends to [04-playtesting](../../04-playtesting/).

## Decision rules
- Disputes are settled by **measurement, not seniority**; the dissent and the numbers are recorded (Directive [#4](../../../kernel/laws/prime-directives.md)).
- A change to win conditions, costs, or scoring is **T2+** and routes through the [balance-council](../../councils/balance-council/) and into [balancing-history](../../memory/registers/balancing-history.md) **before** release (per the studio's local rule).
- "It feels balanced" is never sufficient — no number ships without a measured win-rate spread inside the fairness budget.
- Never ship a known fairness break to hit a date (Directive [#1](../../../kernel/laws/prime-directives.md)).

## Escalation rules
- Interesting-vs-fair dispute with the [systems-designer](../systems-designer/) → [balance-council](../../councils/balance-council/) on win-rate evidence, then the [design-director](../../01-executive/design-director/)'s veto.
- Balance vs. ship-date pressure → escalate scope to the [producer](../../01-executive/producer/); the Balance Designer does not silently approve an unbalanced box.
- See [decision-authority.md](../../../kernel/laws/decision-authority.md). The Balance Designer never overrides a [chief-auditor](../../01-executive/chief-auditor/) quality block.
