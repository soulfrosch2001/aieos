# Protocol: Communication — the Message Envelope

Status: stable
Type: protocol
Owner: Supreme Orchestrator
Extends: none

This protocol implements [Prime Directive #5](../laws/prime-directives.md):
**companies never talk to companies directly.** Every cross-company message is
mediated by the Government. A company that reaches into another company's folder
or addresses its agents directly is in violation, full stop.

## The message envelope

Every message — within or across companies — travels as a structured envelope.
No naked prose hops between entities.

| Field | Meaning |
|-------|---------|
| `from` | The sending entity's full path (e.g. `companies/acme/02-engineering`). |
| `to` | The recipient's path. **Cross-company `to` is always the Government**, never a peer company. |
| `intent` | `request` \| `report` \| `brief` \| `question` \| `escalation`. |
| `tier` | The [T0–T4](../laws/engagement-tiers.md) size of the work this concerns. |
| `payload` | The actual content: the ask, the plan, the result, the question. |
| `response-path` | Where the reply returns. Omitted for fire-and-forget reports. |

The envelope is what the orchestrator routes on. It never inspects payloads to
decide routing — `to`, `intent`, and `tier` are sufficient (Directive #2: the
orchestrator routes, it never builds).

## The two modes

- **Synchronous — council / debate.** Used when a decision must be made together
  before work proceeds (T2+, see [Directive #3](../laws/prime-directives.md)).
  The envelope carries a `response-path`; the sender blocks on the council's
  output. Cross-company councils are convened *by the Government*.
- **Asynchronous — report.** Used to inform without blocking. `intent: report`,
  no `response-path`. The recipient consumes it on its own cadence and may
  promote it upward via [memory-flow](memory-flow.md).

## Within-company messaging

Inside one company, agents communicate without Government mediation — but always
through the envelope, and always vertically:

- **Down via briefs.** A lead hands work down as a `brief`: goal, inputs,
  boundaries, contracts to satisfy. This is the same brief the orchestrator
  produces when it fans out (see [orchestration.md](orchestration.md)).
- **Up via reports.** A track hands results up as a `report`: what was done,
  what was decided, what needs a decision above it.

Peer agents in the same company coordinate through their shared lead, not by
side-channel — the same routing discipline, one level down.

## Guardrails
- **Cross-company `from`→`to` peers are rejected.** Re-route through the Government.
- **A request that grows in tier mid-flight is re-enveloped, not downgraded.**
  See [escalation.md](escalation.md).
- **Every cross-company message is recorded** so the enterprise memory keeps the
  thread. See [memory-flow.md](memory-flow.md).
