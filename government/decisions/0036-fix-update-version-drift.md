# Decision 0036 — Fix: updater deadlocked by version drift; one version, one truth (kernel 1.19.0 / package 1.19.0)
Type: report
Date: 2026-07-03
Tier: T1 (Support — bug fix + one new conformance rule)
Council: none (root-caused, reproduced, fixed, regression-proofed)
Status: CLOSED — fixed and verified (2026-07-03)

## Symptom
A user's launcher could not update — it sat at "1.0.0" forever.

## Root cause (reproduced, not guessed)
The updater (scripts/update.mjs) and the launcher decide "is there an update?" by
comparing package.json versions, local vs GitHub. But the project's release discipline
bumped kernel/VERSION only (1.9 → 1.19 across recent work) while package.json sat at
0.1.0 the whole time. The stuck machine has an install whose package.json says 1.0.0, so
every check concluded: remote 0.1.0 ≤ local 1.0.0 → "já está na versão mais recente" →
permanent deadlock. Reproduced exactly with the updater's own cmpVer. Worse: `aieos
update` was silently a no-op for EVERY machine, because remote 0.1.0 never exceeded any
local value.

## Fix
1. package.json version set to 1.19.0 — the same number as kernel/VERSION. The moment
   this lands on main, the stuck machine's check becomes remote 1.19.0 > local 1.0.0 and
   its update flows again (no action needed on that machine; its SessionStart auto-sync
   or one launcher click picks it up).
2. NEW conformance rule `version-sync` (rule #15): package.json version MUST equal
   kernel/VERSION, or the gate fails. The drift that caused this can never be committed
   again unnoticed — forgetting is now a gate error, not a latent field bug.

## Verified
- Bug reproduction: cmpVer('0.1.0','1.0.0') → no update (the deadlock, exact).
- Fix: cmpVer('1.19.0','1.0.0') → update proceeds.
- Rule negative test: synthetic tree with package 1.0.0 vs kernel 1.19.0 → 1 finding.
- Gate: now 15 rules, 0 errors / 0 warnings, CONFORMANT (versions in sync).
- update.mjs --check on this machine: "já está na versão mais recente (1.19.0)".

## Memory updates
- This record; audio summary (resumo/audio/0036-resumo.*).
