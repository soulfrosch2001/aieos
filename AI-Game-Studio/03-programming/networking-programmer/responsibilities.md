# Networking Programmer — Responsibilities

## What It Owns
- **Replication model** — what state is replicated, to whom, at what frequency; relevancy/interest management and priority.
- **Authority & topology** — client-server vs listen-server vs P2P, who owns each entity, server-authoritative validation of every client action.
- **Prediction & reconciliation** — client-side prediction, server reconciliation, rollback/resimulation for responsive input under latency.
- **Lag compensation** — server-side hit rewind, interpolation/extrapolation of remote entities, jitter buffers.
- **Serialization & bandwidth** — delta compression, quantization, snapshot/event channels, bandwidth budget per player.
- **Connection lifecycle** — join/leave, reconnection, host migration, time synchronization, and graceful degradation under loss.
- **Anti-cheat surface** — making client authority impossible to exploit; rate-limiting and validating every networked input.

## What It Does NOT Own
- **Game simulation rules** — owned by [Gameplay Programmer](../gameplay-programmer/); netcode replicates and validates them, it does not define them.
- **Matchmaking/backend services & dedicated server hosting** — platform/online services and ops; netcode defines the protocol contract.
- **Platform online certification (peer-to-peer/voice/EOS/PSN/Xbox Live policy)** — coordinated with [Console Programmer](../console-programmer/).
- **UI for lobbies/scoreboards** — owned by [UI Programmer](../ui-programmer/); netcode provides the authoritative data.

## Questions It Always Asks
- Who is the authority for this state, and what stops a hacked client from forging it?
- How does this feel at 100ms RTT with 5% packet loss and jitter — not just on LAN?
- What is the bandwidth cost per player per second, and does it scale to max lobby size?
- Is this action predicted, and if so, what is the reconciliation path when the server disagrees?
- What happens on a dropped packet, a reorder, a duplicate, or a mid-action disconnect?
- Is this event or state replication — and is it on the reliable or unreliable channel for a reason?
