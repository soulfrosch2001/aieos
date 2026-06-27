# Forge — Action Contract
Status: experimental
Type: reference
Owner: CTO (Government)
Extends: none

An **action** is the unit of what an agent *does* (vs. its static definition). The Forge
plans and runs actions in the [action loop](action-loop.md). An action declares:

| Field | Meaning |
|-------|---------|
| **Intent** | The goal this action serves (one line). |
| **Actor** | The agent performing it — it must hold the authority. |
| **Inputs** | What it needs to start. |
| **Effect** | What it changes (files, memory, a report) — its observable result. |
| **Gate** | The check that proves it worked (often `npm test` or a council sign-off). |
| **On block** | Where it escalates if it cannot proceed. |

## Rules
- An action stays inside the actor's
  [decision authority](../kernel/laws/decision-authority.md).
- An action's effect is **verifiable** — verify, then claim (the
  [doctrine](../kernel/laws/operating-doctrine.md)).
- Consequential actions are recorded in memory
  ([Directive #8](../kernel/laws/prime-directives.md)).
- Actions never route around the Government
  ([Directive #5](../kernel/laws/prime-directives.md)) or skip the gate
  ([Directive #9](../kernel/laws/prime-directives.md)).
