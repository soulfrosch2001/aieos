# Decision 0005 — System Experience Review (machine-wide activation, resumo pipeline, conformance coverage)
Type: report
Date: 2026-06-29
Tier: T2 (Tactical review) with T3 framework-evolution items flagged (Directive #7)
Council: System Experience Council (non-standing)
Status: CLOSED — reviewed, approved, built and verified (2026-06-29)

## Summary
A five-member council reviewed AIEOS for overall-experience improvements, one lens each:
onboarding/install (CIO), architecture/kernel (CTO), documentation (CKO), the resumo
audio+PDF pipeline (COO), and risk/footguns (Auditor). Findings were verified before
recording: the conformance gate currently passes **0 errors / 0 warnings** (10 rules,
1462 files), which corrects two over-stated claims (see Recorded corrections). Three
load-bearing gaps emerged, all tied to recent changes made this session.

## Consensus — the three load-bearing gaps
1. **"Audio + PDF" is promised but only audio exists.** The new doctrine (README, the
   `/aieos` command, the machine-wide bootstrap) promises a PDF beside every audio
   summary, but there is **no PDF generator** in `scripts/`, and the `decision-audio`
   conformance rule enforces audio only. The promise is currently aspirational.
2. **Conformance under-enforces the contracts.** The checker is the OS's compiler, yet
   `workflow-sections.mjs` validates 3 of the 10 contract sections; no rule checks that
   inheritance/override claims resolve; the "every folder has a README" law is unenforced.
   The gate is green while real contract clauses go unchecked.
3. **The machine-wide activation has no off-ramp and portability rough edges.** No
   uninstall path; stale absolute paths if the install is moved/deleted; and the global
   `~/.claude/CLAUDE.md` loads over the AIEOS repo's own CLAUDE.md, so the "defer to the
   repo when inside it" promise is not actually guaranteed by load order.

## Findings by area
**Onboarding / install (CIO)**
- No uninstall/disable instructions or `npm run teardown`. (Med)
- README "Install" lacks: what "adding" means, where to run, move-then-re-run, a verify
  step, and system requirements (Node ≥ 18). (High/Med)
- Support-mode `resumo/` behaviour not discoverable without reading generated prose. (Med)

**Architecture / kernel (CTO)**
- `workflow-sections.mjs` checks 3/10 contract sections — silent standard drift. (High)
- No `inheritance-claims-resolve` rule: dangling override claims pass. (High)
- Audio requirement not graduated by tier; laws are silent on *when* audio is required. (Low)
- No tier-discipline / authority-bounds checks. (Med)

**Documentation (CKO)**
- Default-voice contradiction: code default is `thalita`
  (`scripts/gen-audio.mjs`), but `government/decisions/resumo/README.md` says `jinx`. (Med)
- Missing READMEs in `government/decisions/resumo/audio/` and `.../pdf/` — violates the
  stated "every folder has a README" law (not caught by conformance). (Med)
- Voice-name capitalisation inconsistent across docs (`Thalita` vs `thalita`). (Low)

**Resumo pipeline (COO)**
- No `gen-pdf.mjs`; the one existing PDF was made manually by a browser. (High)
- `decision-audio` rule does not require a matching PDF. (High)
- Support-mode folder creation + PDF flow is described, not implemented. (High)
- `scripts/voice-clone.py` (offline voice cloning) exists but is unwired/undocumented. (Low)

**Risk / Auditor**
- No uninstall; relocating/deleting the install leaves dangling absolute paths. (High/Med)
- Repo-vs-global CLAUDE.md precedence ambiguity. (Med)
- Marker-block rewrite has no guard for a corrupted/half-present marker pair. (Low)
- Machine-wide mode risks turning trivial T0 sessions into heavy ceremony. (Low)

## Recorded corrections (verify-then-claim)
- "Missing READMEs block conformance" — **false**: the gate passes 0/0; no rule enforces
  per-folder READMEs. The gap is real as a *law*, but it is not *enforced*.
- "CHANGELOG line 1 sets jinx as default" — **unverified/likely wrong**; not recorded.
- The cross-OS "Windows paths break a mac friend" concern is **overstated**: the generator
  uses `path.join`, so each user's `npm run setup` bakes paths correct for *their* machine.
  Residual risk is only if generated `~/.claude` artifacts were committed/shared.

## Recommendation — prioritised
- **P0 (resolve the promise/reality gap):** either build a `gen-pdf.mjs` + wire conformance
  to require PDF, **or** soften the doctrine to "audio mandatory; PDF optional" until the
  tool exists. Decide direction before shipping more docs that promise PDF.
- **P0 (off-ramp):** add `npm run teardown` (remove the AIEOS block + delete the command)
  and document install/uninstall + a verify step in README.
- **P1 (truth in docs):** fix the `thalita`/`jinx` default-voice contradiction; add the two
  missing resumo READMEs; standardise voice-name casing.
- **P1 (compiler integrity):** extend `workflow-sections.mjs` to all 10 sections; add an
  inheritance-claims-resolve rule.
- **P2:** graduate audio/PDF requirement by tier; add a stale-path warning + corrupted-marker
  guard to `install-command.mjs`; document the voice-clone option.

## Implementation plan (if approved)
Fan out by area with disjoint ownership: (a) resumo tooling — `gen-pdf.mjs` + conformance;
(b) installer — teardown/verify/guards + README; (c) docs — voice contradiction, missing
READMEs, casing; (d) conformance — workflow sections + inheritance rule. Quality gate
`npm test` 0/0 after each. One follow-up decision record closes the build.

## Owners & next steps
- Owner: Supreme Orchestrator (Government).

## Outcome (2026-06-29) — built and verified
The human approved: **soften** the PDF promise (audio mandatory, PDF optional) and build
the teardown, the doc fixes, and the compiler reinforcement. Fanned out across four
disjoint tracks:
- **Doctrine softened** — README, the `/aieos` command, the machine-wide bootstrap, and
  the resumo READMEs now state audio is mandatory and PDF optional.
- **Off-ramp** — `npm run teardown` (`scripts/teardown-command.mjs`) removes the global
  command + the bootstrap block idempotently; README gained install/verify/uninstall steps.
- **Docs truth** — default-voice contradiction fixed (`thalita`); the two missing resumo
  READMEs added.
- **Compiler hardened** — `workflow-sections` now enforces all ten sections in order
  (error level); new `inheritance-claims-resolve` rule (negative-tested) checks override
  claims; `hotfix.md` section order corrected.

Quality gate: **11 rules, 0 errors / 0 warnings** in both scopes (kernel-native: 1465
files; incl. legacy: 2099). Deferred (not in scope this round): a PDF generator, the
tier-graduated audio rule, and the remaining compiler checks (tier-discipline,
authority-bounds) — recorded for a future decision. Decision closed.

## Memory updates
- This record; its audio summary (`resumo/audio/0005-resumo.*`); CHANGELOG entry on build.
