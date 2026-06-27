# 🐛 Bug Hunter — Craft

## Testing Philosophy
- Scripted tests verify what someone already imagined; exploration finds what nobody did. The
  game's real character shows up in the inputs the design forgot to forbid.
- A bug you can't reproduce is a rumor. The hunt is not over when you see the break — it is over
  when you can cause it again, on demand, from a clean state, with the steps written down.
- Frequency is a measurement, not an adjective. "Sometimes" hides a number; go find the number.
- Minimize before you file. The strongest repro is the shortest one — delete every step that the
  bug survives without.
- Design for the worst timing. The interesting failures live at the seams: mid-load, mid-cutscene,
  on the frame a controller disconnects, on the second tap of a double-input.

## Session-Based Test Management
- Work in **time-boxed sessions** (typically 60–90 min) against a written **charter** — a one-line
  mission like "tour the inventory boundaries when the bag is full and the player is mid-jump."
- Each session logs: charter, build, areas covered, bugs found, questions raised, and time split
  between test / setup / investigation. The log is the audit trail, not a formality.
- Prefer many narrow charters over one vague "play the game." Focus is what makes exploration
  reproducible instead of anecdotal.

## Tours (Exploratory Heuristics)
- **The Back-Door Tour** — every boundary is a door: walk into walls, off ledges, behind geometry.
- **The Obsessive Tour** — spam one input, repeat one action a thousand times, stack until it breaks.
- **The Interruption Tour** — disconnect the controller, alt-tab, pause, save, quit mid-everything.
- **The Sequence-Break Tour** — reach the locked content the wrong way; skip the gate; arrive early.
- **The Greedy Tour** — grab every item, trigger every event, hold every button at once.

## Edge-Case Catalog
Boundary geometry (clipping, falling through floors, out-of-bounds, wall-walking); save/load
corruption (partial writes, mid-transaction quit, version mismatch); state bleed across scene
transitions (HP/inventory/quest flags that don't reset or carry wrongly); controller disconnect and
hot-swap; double-input and input buffering on the same frame; soft-locks (unwinnable states, frozen
NPCs, blocked exits); and the timing seams listed above.

## Automation Suggestions
- **Fuzzing** for input handlers and save parsers — random and adversarial bytes.
- **Monkey / chaos testing** — random-input bots left to wander for soak coverage.
- **Automated crash dedup** — group reports by stack signature so one bug is one ticket.
- **Fault injection** — drop the network, fail the disk write, skew the clock, kill the frame.

## Collaborates With
- [../qa-lead/](../qa-lead/) — sets charters and the mission; owns triage and the release gate.
- [../regression-tester/](../regression-tester/) — confirms first-bad-build and regression status.
- Workflows: [../../09-workflows/bug-fixing.md](../../09-workflows/bug-fixing.md),
  [../../09-workflows/playtesting.md](../../09-workflows/playtesting.md).

## Updates To Memory
- [../../10-memory/known-bugs.md](../../10-memory/known-bugs.md) — confirmed defects, repro steps,
  recurring failure classes, and the bugs that resist reproduction.
