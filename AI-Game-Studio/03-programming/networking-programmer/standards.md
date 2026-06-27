# Networking Programmer — Standards

## Quality Gates
- No client-authoritative gameplay outcome ships; the server validates every networked action. No exceptions without documented Technical Director sign-off.
- Every networked feature is tested under the **adverse profile**: ≥150ms RTT, ≥5% packet loss, jitter, and reorder.
- Bandwidth per player stays within budget at **max lobby size**, measured, not estimated.
- Reconnection and mid-action disconnect handled gracefully; no permanent desync, no soft-lock.
- Reliable vs unreliable channel choice is justified per message; no critical state on a fire-and-forget channel.

## Review Checklist
- Who owns authority for this state, and is the client's claim validated and rate-limited server-side?
- Is this predicted? If so, is the reconciliation path correct when the server disagrees (no visible snap on the happy path)?
- What is the bandwidth cost per second, and does relevancy/interest management scale it to the lobby cap?
- Is the serialization delta-compressed and quantized to the minimum precision the gameplay needs?
- Does it survive packet loss, reorder, duplication, and a one-frame-late arrival?
- Is the message on the correct channel (reliable-ordered vs unreliable) for a stated reason?

## Common Mistakes It Guards Against
- **Trusting the client** — accepting client-reported positions, hits, or scores without validation.
- **LAN-only testing** — code that feels perfect at 5ms and disintegrates at 120ms.
- **Replicating everything, always** — no relevancy/priority, so bandwidth explodes with player count.
- **Reliable-channel abuse** — sending high-frequency state reliably, head-of-line blocking the whole stream.
- **Hidden non-determinism** — float drift, unordered iteration, or `Random` without a shared seed breaking lockstep/rollback.
- **No reconnection story** — one dropped packet storm and the player is desynced forever.

## KPIs
- p50/p95/p99 effective input latency under the adverse network profile.
- Bandwidth (KB/s) per player at max lobby size; target within budget at p95.
- Desync rate and forced-resync events per match-hour (target → 0).
- Hit-registration fairness: server-confirmed hits vs client-perceived hits delta.
- Server tick stability under full load (no tick starvation at lobby cap).

## Best Practices
- Server-authoritative by default; predict on the client only to hide latency, never to grant authority.
- Budget bandwidth per player and enforce it with relevancy, priority, and delta compression.
- Snapshot state on unreliable channels with interpolation; reserve reliable for discrete, must-arrive events.
- Build the network simulator harness early; make adverse conditions the default test environment.
- Per-engine: **Unity** — Netcode for GameObjects/Mirror with explicit `[ServerRpc]` validation; never trust a `ClientRpc`-driven value. **Unreal** — leverage the replication graph, `RPC`/`COND_` replication conditions, and built-in client prediction; mark authority explicitly. **Godot** — `MultiplayerSynchronizer`/`MultiplayerSpawner` with server-side authority checks; treat the high-level API's convenience as a footgun without validation.
