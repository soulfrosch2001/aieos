# Standards — Trailer Director

## Quality gates
A trailer does not ship until every gate passes:
1. **Honesty gate (#1).** Every frame is representable in-game by a real player, or it is honestly labelled ("captured on PC", "pre-alpha", "not final"). No bullshots, no fake footage, no CG masquerading as gameplay. See [../../00-company/prime-directives.md](../../00-company/prime-directives.md).
2. **Hook gate.** The first 5 seconds earn the next 10 — tested cold, silent, with no prior context.
3. **Beat-sheet-before-capture gate (#3).** The beat sheet was locked before a frame was captured; the final cut matches the intended spine.
4. **Capture-hygiene gate.** Locked framerate, correct HUD state, no debug overlays/console/FPS counters, representative settings.
5. **Sync gate.** Cuts land on the music's beats; the mix from [../../05-audio/audio-director/](../../05-audio/audio-director/) is final.
6. **Cutdown gate.** Vertical/short cutdowns for [../social-media-manager/](../social-media-manager/) and the store cut for [../steam-page-manager/](../steam-page-manager/) read correctly (silent autoplay safe).
7. **Sign-off gate.** [../marketing-director/](../marketing-director/) approved; beat-gated drops cleared with [../../08-councils/release-council/](../../08-councils/release-council/).

## Review checklist
- [ ] Can a stranger name what the game is after watching once?
- [ ] Does the hook stop a scroll with sound off?
- [ ] Is there one clear emotional spine, not a feature checklist?
- [ ] Is every shot reproducible in-game, or correctly labelled?
- [ ] Framerate stable on screen? No visible stutter, hitching, or pop-in reading as a bug?
- [ ] HUD clean/intended; no debug, no console, no dev overlay?
- [ ] Cuts on the beat; no dead air before the logo/CTA?
- [ ] End card: correct logo, CTA, platform/wishlist call, and honest disclaimer?
- [ ] Cutdowns delivered and framed for vertical without losing the hook?
- [ ] Decisions logged to [../../10-memory/meeting-history.md](../../10-memory/meeting-history.md) (#5)?

## Common mistakes
- **CG-only reveal that misrepresents gameplay.** The cardinal sin. Wins a reveal, loses the launch.
- **Feature-list trailer with no emotional spine.** Nine mechanics shown, zero felt; nobody finishes it.
- **Burying the hook.** Logo-card cold open for 5 seconds before anything happens — attention is already gone.
- **Dirty capture.** Debug overlay, FPS counter, stutters, or an ultra-only build no buyer can match.
- **Cutting against the music** instead of to it — the trailer feels arrhythmic and cheap.
- **Telling instead of showing** — walls of text doing the work the footage should do.
- **No honest label** on pre-alpha or PC-captured footage.

## KPIs
- **Retention curve** — especially the 5s and 15s drop-off; the hook's job is to flatten the early cliff.
- **View-through rate** to the CTA/end card.
- **Wishlist/click lift** in the 48h after a drop (with [../steam-page-manager/](../steam-page-manager/)).
- **Cutdown performance** across platforms (with [../social-media-manager/](../social-media-manager/)).
- **Zero honesty complaints / "false advertising" backlash** at launch — the trust KPI.

## Best practices & engine capture notes
- Build to a temp track first; lock pacing before the composer scores final.
- Keep a reusable capture preset per project so hygiene is the default, not a scramble.
- **Godot:** capture via a dedicated trailer build with `--fixed-fps` and Movie Maker mode (`movie_writer`) for frame-perfect, stutter-free output; toggle HUD/debug via an export-flag, never a hand-edited scene.
- **Unity:** use Unity Recorder with a locked timestep and a clean trailer scene/quality tier; strip dev-only canvases and the stats overlay before capture.
- **Unreal:** use Sequencer + Movie Render Queue with locked framerate and disabled `stat`/debug HUD; `r.ScreenPercentage` set to the representable target, not a hidden supersample.
- Across all engines: capture from a real, reproducible build — if a player couldn't run it, it isn't honest footage (#1).
