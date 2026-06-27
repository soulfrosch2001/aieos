# Forge — the AIEOS Agent Engine
Status: experimental
Type: reference
Owner: CTO (Government)
Extends: none

The Forge is AIEOS acting **like a sharp AI assistant that builds and runs agents**:
it turns an **intent** into a complete, contract-valid agent, then **drives that
agent's actions** until the intent is satisfied — and feeds the result back. It is the
"Fable-5 / Mythos" feel ([operating-doctrine](../kernel/laws/operating-doctrine.md))
made into a concrete loop over the kernel's agent model.

> Status: **experimental (kernel 1.3.0)**. v0 ships the creation tool, the action model,
> and the two loops. Runtime action execution is performed by Claude operating the loops.

## The two loops

```
INTENT ──▶ [ creation loop ] ──▶ AGENT ──▶ [ action loop ] ──▶ RESULT
   ▲                                                              │
   └──────────────────── feeds back ◀────────────────────────────┘
```

- **Creation loop** ([creation-loop.md](creation-loop.md)) — intent → a full 5-file
  agent that satisfies [the agent contract](../kernel/contracts/agent.md). Scaffolded by
  the tool below, then filled with a distinct voice.
- **Action loop** ([action-loop.md](action-loop.md)) — the agent **plans → acts →
  observes → reflects**, taking [actions](action-contract.md) until done, then reports.

## The tool — create an agent from intent

```
npm run forge -- <target-dir> <agent-name> "<one-line mission>"
# e.g.
npm run forge -- forge/examples balance-scout "Find balance outliers in live telemetry."
```

It writes a conformant 5-file agent (`README.md` + responsibilities/authority/craft/
standards) ready to be enriched. The result passes `npm test` immediately — see
[create-agent.mjs](create-agent.mjs).

## How it relates to the rest of AIEOS
- It **inherits the kernel**, never forks it (Directive #6). A forged agent is a normal
  agent; it lives in a department and obeys decision-authority.
- It is **bounded by the laws**: the Forge is assertive (the doctrine) but never bypasses
  the gate (Directive #9) or routes around the Government (Directive #5).
- See [examples/](examples/) for a forged agent.
