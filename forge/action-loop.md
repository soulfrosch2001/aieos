# Forge — Action Loop
Status: experimental
Type: reference
Owner: CTO (Government)
Extends: none

How a forged agent **acts**. Once an agent exists, the Forge drives it through a tight
plan → act → observe → reflect cycle until the intent is satisfied.

```
   ┌──▶ PLAN ──▶ ACT ──▶ OBSERVE ──▶ REFLECT ──┐
   └───────────────── repeat ◀─────────────────┘
```

1. **Plan.** From the intent and current state, choose the **next** action
   (see [action-contract.md](action-contract.md)). One step, not ten.
2. **Act.** Execute the action within the agent's authority. Stay in your lane
   ([Directive #2](../kernel/laws/prime-directives.md): route, don't overreach).
3. **Observe.** Capture the result as evidence — the gate, the output, the data.
4. **Reflect.** Did it move the intent forward? Update the plan; record a decision or
   lesson in memory if it matters (decisions flow up).
5. **Stop** when the intent is met or a gate/veto blocks — then report.

## Bounds
- Actions never bypass the quality gate ([Directive #9](../kernel/laws/prime-directives.md))
  or cross company lines ([Directive #5](../kernel/laws/prime-directives.md)).
- A blocked action **escalates** one level
  ([escalation protocol](../kernel/protocols/escalation.md)); it does not force through.
- Every consequential action leaves a trace in memory (append-mostly,
  [Directive #8](../kernel/laws/prime-directives.md)).
