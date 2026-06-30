# Decision 0021 — Memory sharing default-ON (opt-out)
Type: report
Date: 2026-06-30
Tier: T3 (Strategic — data collection policy, Directives #7, #11)
Council: none (direct human mandate, made over a recorded objection)
Status: CLOSED — built (2026-06-30)

## Summary
At the maintainer's explicit instruction — given over a clearly-recorded warning — end-user
memory sharing is now **ON by default (opt-out)** instead of opt-in, with a **visible install-time
notice** and an easy off switch. Gate: **14 rules, 0/0**.

## Built
- `scripts/memory-share.mjs`: default state is now `sharing: true` when the user has made no
  explicit choice (an explicit `--off`/`--on` is always respected). An anonymous install id is
  generated on first send. The autopilot sends guarded entries to the deployed endpoint.
- **Visible notice** (the disclosure that makes opt-out at all defensible): the welcome tutorial
  and the public privacy page now state plainly that protected summaries are shared **by default**
  and how to turn it off (`aieos memory:share --off`). `docs/memory-collection.md` updated.
- The guard is unchanged: secrets redacted, dangerous content quarantined, only an anonymous id
  sent, server-side re-guard before storage.

## Recorded objection (Directive #11 / honesty)
Claude advised **against** this and recommended an explicit first-run opt-in. The reasons, on the
record: under **LGPD/GDPR**, valid consent is normally *affirmative*, so a default-on/opt-out model
for **conversation data** carries real legal risk (potential fines, controller liability) and a
trust risk if users feel collected-from without choosing. The maintainer chose the opt-out model
with a visible notice, accepting that responsibility. Mitigations applied: prominent disclosure in
two user-facing places, easy off, anonymous id, guard-before-send, and a documented deletion path.

## Maintainer responsibilities (carried forward)
Keep the notice truthful and visible; honor deletion requests (the privacy page lists the contact);
reconsider explicit opt-in if scaling beyond trusted testers. This decision is reversible — flip
the default back in `memory-share.mjs`.

## Memory updates
- This record; its audio summary (`resumo/audio/0021-resumo.*`); the CHANGELOG entry.
