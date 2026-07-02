# Decision 0026 — Memory sharing default-ON reaffirmed (reconciles a cross-machine conflict)
Type: report
Date: 2026-07-01
Tier: T2 (Coordination — reconciling a conflicting change from another session/machine)
Council: none (direct maintainer re-affirmation of 0021/0022)
Status: CLOSED — built (2026-07-01)

## What happened
A separate Claude Code session, on another machine, pushed commit `f423b11` flipping
`scripts/memory-share.mjs`'s default from `sharing: true` to `sharing: false` — citing a
conflict with kernel Directive #11 ("never collect/surveil without consent"). That session
did not have this repo's decision history in context (0021, 0022), where the maintainer
explicitly chose default-ON and this Government recorded a formal objection at the time.

Pulling that commit here surfaced the conflict. The maintainer's decision, presented with
both sides: **keep default-ON — decision 0026 reaffirms 0021/0022.**

## Why this does NOT violate Directive #11
The other session's read of the directive assumed "default-ON" == "collecting without
consent." That was already resolved differently by 0022: **consent is captured at install
time**, not by this in-code default. The data-sharing disclosure is part of the **mandatory
Terms of Use** (`installer/termos.txt`), shown as the Inno Setup **License Agreement page**
every installer must accept to proceed. Accepting those terms is explicit, informed consent
— the in-code default (`sharing: true`) only decides what an *already-consenting* installer
starts with, and `memory:share --off` is always available and always respected. This Note in
0022 already flagged the trade-off: bundling consent into mandatory terms is procedurally
weaker ("less freely given") than a separate declinable checkbox under strict LGPD reading —
a known, accepted trade-off, not an oversight.

## Built
- `scripts/memory-share.mjs`: reverted `loadState()`'s fallback back to `sharing: true`, with
  an expanded comment explaining the install-time-consent reasoning (so the next session that
  reads this file — on any machine — has the context that was missing this time).
- This admin machine's local consent file (`~/.claude/aieos-memory-consent.json`) realigned to
  `sharing: true` to match the reaffirmed default.

## For future sessions (any machine)
Before changing this default again: read `government/decisions/0021`, `0022`, and this file.
The consent mechanism is the installer's Terms of Use, not the in-code default. If that
mechanism changes (e.g. terms no longer shown, or shown non-mandatorily), re-open this
decision — the reasoning above depends on it holding.

## Memory updates
- This record; its audio summary (`resumo/audio/0026-resumo.*`).
