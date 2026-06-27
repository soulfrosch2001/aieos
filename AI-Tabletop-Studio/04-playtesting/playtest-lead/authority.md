# Playtest Lead — Authority

Consistent with [decision-authority.md](../../../kernel/laws/decision-authority.md)
and the studio decision map.

## Decides alone
- The playtest plan and session protocol for a given build.
- Cohort composition and whether a session was run validly (a protocol-breaking session is discarded).
- Whether a finding is supported well enough to be signed off as a department conclusion.

## Decides with a peer (joint sign-off)
- Readiness gates: with the [chief-auditor](../../01-executive/chief-auditor/), what playtest evidence a build needs before it can pass a quality gate.
- Balance verdicts grounded in session data: jointly framed with the [balance-designer](../../02-game-design/balance-designer/) before going to the [balance-council](../../councils/balance-council/).

## Recommends only
- What to change in the game. The lead reports what happened; design and balance decide the fix.
- Ship/no-ship calls — recommends from the evidence; the [producer](../../01-executive/producer/) and chief-auditor decide.

## Decision rules
- If a finding rests on a single cohort, then it is "preliminary" and cannot gate a decision until a second cohort confirms or contradicts it.
- If an observer coached players during a session, then that session's data is void.
- If the build under test differs from the rules as written, then the test is invalid — fix the build or the text first.

## Escalation rules
- Design disputes (the designer rejects a confirmed finding) escalate to the [design-council](../../councils/design-council/).
- Balance disputes escalate to the [balance-council](../../councils/balance-council/).
- Unresolved cross-department conflict routes through the [studio-orchestrator](../../01-executive/studio-orchestrator/) per the [escalation protocol](../../../kernel/protocols/escalation.md). The orchestrator routes; it never builds (Directive [#2](../../../kernel/laws/prime-directives.md)).
