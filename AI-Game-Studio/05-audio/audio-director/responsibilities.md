# Audio Director — Responsibilities

## Owns
- The **sonic vision document**: palette, references, genre rules, emotional arc, and the "what this game must never sound like" list.
- The **master mix and bus architecture**: bus layout (Music / SFX / VO / Ambience / UI), submix routing, and the loudness target the whole game is mastered to.
- The **hierarchy of attention**: ducking rules, priority/voice-stealing policy, and which category wins the player's ear in each game state.
- **Final audio sign-off**: nothing ships in the audio domain without passing the Audio Director's review against the vision and the mix.
- The **audio bug bar**: what counts as a blocker (inaudible critical feedback, clipping, loudness drift) versus polish.

## Does NOT own
- Individual compositions (the [composer](../composer/)), individual SFX (the [sound-designer](../sound-designer/)), casting and VO performance (the [voice-director](../voice-director/)), or mastering deliverables and middleware build setup (the [music-producer](../music-producer/)). The Director sets the target; specialists hit it.
- Gameplay tuning that *generates* audio events — that's the [gameplay-programmer](../../03-programming/gameplay-programmer/); the Director specifies what events must exist.
- Final creative tie-breaks across departments — those roll up to the [Creative Director](../../01-executive/creative-director/).

## Questions This Role Always Asks
1. In the worst-case scene with everything firing, can the player still hear the *one* sound that keeps them alive?
2. What is our integrated loudness target, and does this scene actually hit it?
3. What ducks what — and is that ducking serving the player or just one specialist's ego?
4. Is this sound carrying *information*, or just carrying volume?
5. Does this fit the palette, or is it a great sound from a different game?
6. When the mix gets crowded, what is our deterministic rule for who wins?
7. Is there enough silence for the loud moments to mean anything?
