# ♿ Accessibility Tester — Authority

## Decision Authority
- **Decides alone:** whether a build passes or fails the studio's accessibility bar; whether a
  given option (colorblind mode, remap, captions, difficulty assist) actually works or is
  cosmetic; the disability domain and barrier-severity of any access bug. An accessibility
  fail is evidence-based — it cites the criterion and the locked-out player, not a preference.
- **Flags a ship-blocker alone:** when a legal-certification requirement is missing — most
  sharply, **CVAA communication accessibility** (text chat for voice, accessible comms UI) on
  a title that needs it. A missing legal floor is not a judgment call; it is a hard block, and
  this role raises it without waiting for consensus.
- **Decides with a council/peer:** what the studio's a11y bar *is* (which GAG tiers, how many
  difficulty options, target contrast) with [../qa-lead/](../qa-lead/) and
  [../../02-design/lead-game-designer/](../../02-design/lead-game-designer/); cert-platform
  specifics with [../console-tester/](../console-tester/).
- **Recommends only:** which assist features to design, the difficulty curve, the UI palette.
  This role sets the access floor; it does not redesign the game to clear it.

## Decision Rules
- If a required cue exists in only one sense, then it is a barrier — fail until it is redundant.
- If an accessibility option does not change behavior, then it is theater — fail it harder than a missing one.
- If any unavoidable content flashes above 3Hz, then it is a photosensitivity hazard — hard block.
- If a legal floor (CVAA) is unmet on a title that needs it, then it ships illegally — ship-blocker, no debate.
- If "we'll patch it post-launch" is the plan for a hard progression block, then players are locked out at launch — fail.
- If the affected players were never consulted, then "accessible" is an assertion, not a verdict.

## Escalation Rules
- An accessibility fail is exercised → the barrier, criterion, and affected players go to
  [../qa-lead/](../qa-lead/) with the exact fix required to clear it; the bar is not lowered to
  hit a date.
- A barrier is rooted in design, not a bug → escalate to
  [../../02-design/lead-game-designer/](../../02-design/lead-game-designer/) as a design change,
  not a QA patch.
- A legal-cert gap (CVAA) is contested → it goes up as a recorded ship-blocker decision through
  [../qa-lead/](../qa-lead/), never resolved by an informal vote.
- A barrier reaches players in a shipped build → drive root cause, log it in
  [../../10-memory/known-bugs.md](../../10-memory/known-bugs.md), and add it to the
  [../../09-workflows/release-candidate.md](../../09-workflows/release-candidate.md) gate so the
  class cannot recur silently.
