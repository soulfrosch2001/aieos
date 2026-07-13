# 🔐 Security Council — Process

## Discussion Rules
Follow [../debate-protocol.md](../debate-protocol.md) and
[../communication-protocol.md](../communication-protocol.md). Every option has a named honest
owner; fake consensus is a defect; dissent is recorded, never suppressed (**Prime Directive
#4**). Here it cuts harder: an unowned *threat* is not "handled" — it is unmitigated and goes
on the record as such. The chair surfaces the worst-case attacker before calling any
clearance, and "it's probably fine" is not a position.

## Decision Process — Threat-Model Driven
1. The [chief-auditor](../../01-executive/chief-auditor/) frames **what is being protected**
   and the platform it ships on — not the fix.
2. **Identify assets at risk** — player accounts, personal data, save files, currency/
   entitlements, server authority, build secrets, the cert itself.
3. **Enumerate threats** against each asset: cheating, data leak, exploit, save-corruption,
   policy/cert violation. The [networking-programmer](../../03-programming/networking-programmer/)
   assumes a **server-authoritative** stance — the client is hostile; never trust it.
4. **Rate likelihood × impact** for each threat. A high-impact threat with a credible path is
   a blocker until mitigated, regardless of how unlikely someone *claims* it is.
5. **Mitigations** — name the control, its owner, and how it is verified. Data handling is held
   to a **GDPR-style** bar (lawful basis, minimization, consent, deletion, breach disclosure);
   compliance is held to **console certification** (Sony / MS / Nintendo, platform-neutral)
   and store policy / age-rating requirements via [console-tester](../../07-qa/console-tester/).
6. **Verdict:** **CLEARED**, **CLEARED-WITH-CONDITIONS** (mitigations + re-review triggers), or
   **BLOCKED**. No residual high-impact threat may be cleared by argument alone.

## Approval Gate by Tier
- **T2 — new data/network/save surface:** the council **+**
  [Executive Orchestrator](../../01-executive/executive-orchestrator/) sign off; chief-auditor
  clearance is mandatory.
- **T3 — online system, monetization, data integration, or release clearance:** requires
  [technical-director](../../01-executive/technical-director/) sign-off (risk) **and** an
  explicit chief-auditor clearance feeding the [release-council](../release-council/).
- **T4 — live exploit / breach / cert-block:** one round, chair decides immediately; a
  shipped release can be **blocked or pulled**.
- **The council CAN BLOCK ANY TIER.** A BLOCK applies to T0 through T4, up to and including a
  release already shipped — **schedule pressure is not a counter-argument** (Prime Directive
  #7, [../../00-company/prime-directives.md](../../00-company/prime-directives.md)).

## Escalation
- Technical mitigation deadlock → [technical-director](../../01-executive/technical-director/).
- Schedule vs. block → [production-director](../../01-executive/production-director/) — who may
  *request*, but **cannot overturn**, a security block.
- **A BLOCK is final.** It is not a deadlock to be voted away and no executive can override it.
  **Only a recorded HUMAN risk-acceptance** lifts a block (Prime Directive #7); the chair logs
  who accepted what risk, when, and why, in
  [../../10-memory/meeting-history.md](../../10-memory/meeting-history.md). Authority lines:
  [../../00-company/decision-authority.md](../../00-company/decision-authority.md).
