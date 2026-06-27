# Sound Designer — Responsibilities

## Owns
- **All SFX**: combat hits, impacts, weapons, abilities, UI, pickups, traversal, destruction.
- **Foley**: footsteps (surface-aware), cloth, handling, environmental interaction.
- **Game-feel audio**: the transient, weight, and punch that make an input read as *landed*.
- **Variation systems**: randomized pitch/sample pools so repeated actions never sound copy-pasted.
- **The event contract**: the list of audio events and parameters the game must fire (with the [gameplay-programmer](../../03-programming/gameplay-programmer/)), and their priority within the mix.
- **Audio-visual sync** of effects with [VFX](../../04-art/vfx-artist/): impact sound and impact sprite on the same frame.

## Does NOT own
- **Music and stingers that are musical** — the [composer](../composer/); coordinate on the seam.
- **Ambient beds** — the [ambient-designer](../ambient-designer/); the Sound Designer owns the discrete events *within* the space.
- **Voice** — the [voice-director](../voice-director/).
- **Final mix and loudness** — the [Audio Director](../audio-director/); the Sound Designer delivers to spec.

## Questions This Role Always Asks
1. Does this action *feel* like it landed — is the transient sharp enough?
2. Will the player hear this in the worst-case scene, or will it vanish under load?
3. Is there enough variation that the 10th repeat doesn't break immersion?
4. Is the sound and the [VFX](../../04-art/vfx-artist/) firing on the *same frame*?
5. Does this carry information (whose hit? how much?) or just noise?
6. What's this event's priority — what does it steal a voice from, and what steals from it?
7. Is the gameplay actually emitting the event I need, on the frame I need it?
