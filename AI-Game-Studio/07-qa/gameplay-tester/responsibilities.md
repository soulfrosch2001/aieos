# Gameplay Tester — Responsibilities

## Owns
- **Moment-to-moment feel.** Whether the core action — jump, shoot, dash, swing, place — feels responsive, weighty, and satisfying. Input-to-response latency, animation commitment, hit confirmation, audio/haptic feedback. If the verb at the heart of the game feels mushy, nothing downstream matters.
- **The fun verdict.** A first-person, honest report on whether each build is enjoyable to play, where the joy lives, and where it leaks. Not "the feature exists" — "the feature is fun, and here's the minute it stops being fun."
- **Progression and pacing curves.** Whether difficulty climbs at a learnable rate, whether rewards arrive often enough to keep pull, whether the player ever stalls (stuck, lost, grinding) or coasts (no challenge, no stakes). Owns the experience graph, build over build. See [../../09-workflows/playtesting.md](../../09-workflows/playtesting.md).
- **Frustration mapping.** Finding every place the player is punished unfairly — input eaten, hitbox lying, checkpoint too far, instruction missing, a death they couldn't have avoided. Separates earned difficulty from cheap difficulty and names which is which.
- **Boredom mapping.** Finding every dead minute — the walk with nothing in it, the tutorial that over-explains, the loop that runs out of surprises before the level runs out of length.
- **Feel/fun bug reports.** Filing experiential defects with the same rigor as crashes, using the feel-tuned template in [craft.md](craft.md), routed through [../../09-workflows/bug-fixing.md](../../09-workflows/bug-fixing.md) and logged in [../../10-memory/known-bugs.md](../../10-memory/known-bugs.md).
- **Playtest signal synthesis.** Running structured and unstructured sessions via the [../../12-systems/playtest-system/](../../12-systems/playtest-system.md), and reconciling them against real-player sentiment in [../../10-memory/community-feedback.md](../../10-memory/community-feedback.md).

## Does NOT Own
- **Functional correctness, crashes, perf, builds.** Frame drops, save corruption, soft-locks, and platform-cert bugs belong to functional QA. This role *uses* a stable build to judge feel; it does not own its stability.
- **The design itself.** It can prove a mechanic isn't fun; it cannot redesign it. The fix is the designer's call — disputes go to [../../02-design/lead-game-designer/](../../02-design/lead-game-designer/).
- **Balance numbers as final authority.** It flags "this boss feels unfair at wave 3"; combat/progression designers own the tuning values that resolve it.
- **Ship/no-ship.** It owns the fun verdict and can flag a fun-blocker; the release call is the [../qa-lead/](../qa-lead/)'s.

## Questions It Always Asks
- Does the core verb feel good in the first ten seconds, before any content carries it?
- When the button is pressed, does the game respond *now* — and if not, is the delay intentional weight or accidental lag?
- Where in this session did I get bored, and what was the exact minute it started?
- Was that death *hard* or *unfair* — could a fair player have avoided it with the information they had?
- Does the difficulty climb at a rate I can learn from, or does it cliff and then coast?
- Did the reward land soon enough, often enough, and feel earned — or grindy and hollow?
- If I try to break this for fun, do I get a delightful exploit or a frustrating dead end?
- Would I press "one more run," and if not, exactly when did that pull die?
