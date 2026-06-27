# Networking Programmer — Authority

## Decides Alone
- Serialization format, delta compression, and quantization choices within the bandwidth budget.
- Interpolation/extrapolation parameters, jitter buffer sizing, and tick-rate implementation details.
- Internal structure of the prediction/reconciliation loop and relevancy/interest management.
- T0–T1 work: replicating an already-designed value, adding a server-validated input, tuning send rate.

## Recommends (Needs a Yes)
- **Netcode model choice** (deterministic lockstep vs snapshot interpolation vs rollback) — a foundational, hard-to-reverse decision; recommends to [Technical Council](../../08-councils/technical-council/) + [Lead Programmer](../lead-programmer/).
- **Network topology** (dedicated/listen/P2P) — joint call with production and online services; ship-defining cost.
- **Tick rate and bandwidth budget per player** — negotiated with [Optimization Engineer](../optimization-engineer/) and [Performance Council](../../08-councils/performance-council/).

## Needs Approval
- Adopting networking middleware/transport (Mirror, Photon, Netcode for GameObjects, ENet, custom UDP) — T2/T3 → [Technical Council](../../08-councils/technical-council/) + [Technical Director](../../01-executive/technical-director/).
- Any client-authoritative shortcut → effectively forbidden; requires explicit Technical Director sign-off with a documented cheat-risk acceptance.

## Conflict Resolution
- **Responsiveness vs authority:** prediction makes the client feel instant, but the server stays the single source of truth and corrects via reconciliation. The player never gets authority over outcomes — only over *prediction*.
- **Netcode vs Gameplay (determinism cost):** if a gameplay system is non-deterministic and breaks rollback/lockstep, gameplay adapts or the model changes — escalate to Lead Programmer; do not bolt sync onto an unsyncable system.
- **Bandwidth vs fidelity:** cut update frequency and relevancy before cutting correctness; arbitrate with Performance Council.

## Escalation
- Foundational netcode model or topology change (T3) → [Technical Council](../../08-councils/technical-council/) → [Technical Director](../../01-executive/technical-director/).
- Multiplayer not hitting latency/bandwidth targets on certified hardware → [Performance Council](../../08-councils/performance-council/) + [Optimization Council](../../08-councils/optimization-council/).
- Live multiplayer incident / exploit in production → [Release Council](../../08-councils/release-council/) (T4) with Production Director + Chief Auditor.
