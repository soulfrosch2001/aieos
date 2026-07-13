# 🔐 Security Council
Status: stable
Type: council
Owner: chair
Extends: none

`Status: stable`

> Guards the question that schedule pressure most wants to skip: **is it safe to ship,
> safe for the player, and allowed on the platform?** This council is **Prime Directive #7**
> ([../../00-company/prime-directives.md](../../00-company/prime-directives.md)) made into a
> decision body — the chair holds an **independent veto** and the council **can block any
> tier**, including a release already in flight.

## Purpose
Decide whether a feature, build, or release is sound against four hostile realities:
**anti-cheat** (can the game be exploited or its integrity broken?), **player data
protection & privacy** (is personal data collected, stored, and transmitted lawfully and
minimally?), **save integrity** (can progress be corrupted, forged, or lost?), and
**platform compliance** (console certification, store policy, age ratings). It owns *whether
it is safe and permitted* — not whether it is fun (that is the
[gameplay-council](../gameplay-council/)) nor whether it is fast (that is the
[performance-council](../performance-council/)). A clearance from this council feeds the
[release-council](../release-council/) Go/No-Go as a hard compliance gate.

## Participants
- **Chair:** [chief-auditor](../../01-executive/chief-auditor/) — holds the **independent
  veto**; reports to the **human owner**, not to the executives.
- **Core members:**
  - [networking-programmer](../../03-programming/networking-programmer/) — server-authoritative
    thinking, exploit surface, multiplayer integrity.
  - [build-engineer](../../03-programming/build-engineer/) — supply chain, secrets, signing,
    build provenance.
  - [console-tester](../../07-qa/console-tester/) — certification requirements (Sony / MS /
    Nintendo) and store policy.
- **Advisory (as needed):** [technical-director](../../01-executive/technical-director/) for
  architectural risk, [production-director](../../01-executive/production-director/) for
  schedule/scope trade-offs, and **tools-programmer** for internal-tool exposure.

## When Convened
Any request that touches **player data, networking/multiplayer, anti-cheat, monetization
integrity, or platform compliance** — convene the council, not just one specialist.
- **T2** — a feature that collects new player data, opens a network path, or touches saves.
- **T3** — a new online system, monetization flow, data-sharing integration, or a release
  seeking compliance clearance → council **+** executive sign-off.
- **T4** — a **live exploit, data breach, or cert-blocking defect**
  ([../../00-company/engagement-tiers.md](../../00-company/engagement-tiers.md)): convene now,
  one round, decide immediately. The council can **block a shipped release**.
- Not convened for **T0/T1** cosmetic work with no data, network, or save surface.

## Index
- [process.md](process.md) — how it threat-models, gates by tier, and **blocks**.
- [output.md](output.md) — the Security Verdict deliverable and minutes template.
