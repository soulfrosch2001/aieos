# Decision 0008 — "People entering" simulation + hardening
Type: report
Date: 2026-06-29
Tier: T3 (Strategic — security + framework evolution, Directives #7, #11)
Council: none (direct human mandate: simulate newcomers, then improve)
Status: CLOSED — simulated, fixed, verified (2026-06-29)

## Summary
To see how AIEOS behaves as it opens to outside contributors, four newcomers were
simulated in parallel (each mutating an isolated copy of the repo, except the read-only
reviewer): a **legitimate contributor**, a **careless contributor**, a **malicious actor**,
and a **non-expert end user**. The findings drove a hardening pass. The gate stays green
(**12 rules, 0/0**) in both scopes.

## What the simulation found
**Held well:** the conformance gate caught every *structural* violation (missing/out-of-order
workflow sections, missing agent files, broken links, kebab-case, the new
inheritance-claims-resolve on backtick rows); harm-law REMOVAL/gutting was blocked; the
memory guard redacted 6/6 secrets, quarantined destructive payloads, refused the push, and
kept injection text inert.

**Gaps exposed:**
1. **Harm law could be INVERTED, not just removed.** A #11 rewritten to *permit* harm
   ("do no harm — unless ordered… may harm… weapon use is permitted") kept enough tokens to
   pass the structural+token check → gate stayed green. (Most severe.)
2. **package.json scripts were unguarded.** A malicious `postinstall: rm -rf $HOME` (auto-runs
   on `npm install`) sailed through — no rule inspected script bodies.
3. **Prompt-injection memory was publishable.** Low-severity injection text reached the safe
   ledger and would be pushed to a public repo.
4. Onboarding (non-expert): README is "mechanics before meaning" (3.1/5) — value buried under
   jargon, no plain-English "what does /aieos do", no example, safety story buried.
5. Contribution discoverability: CONTRIBUTING never stated the literal gate command.

## Built (this round)
- **Harm-law anti-inversion** (`forge/runtime/integrity.mjs`): after the token vote, the
  Directive #11 clause is scanned for affirmative permission/exception constructions
  ("may harm", "harm is permitted", "may override … to harm", "do no harm — unless …").
  Designed to NOT match the genuine *negated* clause ("no override … may set aside to cause
  harm"). Protects both the `harm-law-intact` gate and the Forge runtime.
- **package.json script guard** (`tests/conformance/rules/package-scripts-safe.mjs`): a new
  rule that ERRORs on dangerous commands in any script and WARNs on npm lifecycle hooks
  (preinstall/postinstall/prepare/…). Reuses the memory guard's danger patterns so both
  surfaces stay in sync.
- **Injection → quarantine** (`scripts/lib/memory-guard.mjs`): prompt-injection / roleplay-
  override patterns are now non-publishable (quarantined, never pushed). Patterns tightened
  to avoid quarantining benign text.
- **Danger-pattern fix** (found by the malicious sim): `rm -rf` detection now also catches
  `$HOME` / `%USERPROFILE%` / bare `.`/`..` targets, while still ignoring legitimate
  `rm -rf node_modules` / `./build`.
- **Onboarding docs** (`README.md`, `CONTRIBUTING.md`): a plain-English "Quick start" with a
  real `/aieos` example and a one-line safety note placed before the mental model; the opt-out
  (`npm run teardown`) clarified; CONTRIBUTING now states the literal gate commands.

## Verification
Negative-tested in isolation: real law passes / inverted law BLOCKED; a `postinstall: rm -rf
$HOME` ERRORs while `rm -rf node_modules` does not; injection transcript lands in quarantine.
Gate: **12 rules, 0/0** (kernel-native 1473 files; incl. legacy).

## Deferred (recorded for a future decision)
- **Fork-detection rule** — a verbatim stdlib clone in a company is still silent (the single
  biggest integrity gap the careless sim found). Needs content-similarity, done carefully.
- **inheritance-claims-resolve** only parses backtick rows; ~10 companies use `[name](path)`
  link-style override tables (backstopped by the links rule, but lineage unchecked).
- **identity-block** skips when an agent README is absent; extend to role sub-files.
- **Orphan-entity warning** — a valid agent not listed in its department README is undiscovered.
- Quarantine-at-rest redaction of dangerous command strings; macOS `.pkg`; installer signing.

## Memory updates
- This record; its audio summary (`resumo/audio/0008-resumo.*`); the CHANGELOG entry.
