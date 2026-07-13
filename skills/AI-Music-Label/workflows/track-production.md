# Workflow: track-production
Status: stable
Type: workflow
Owner: label-orchestrator
Extends: feature
**Purpose:** Take a single track from demo to a delivery-ready master.
**Default Tier:** T2  ·  **Owner:** music-producer
**Extends:** feature

## Trigger
A signed artist has a demo accepted into production, or the operations-director
schedules an existing track for a release slot that needs a finished master.

## Participants
- music-producer — owns the arrangement and the creative direction of the track.
- audio-engineer — owns the recording, editing, and mix.
- mastering-engineer — owns the final master and its technical conformance.
- ar-director — holds the artistic veto on whether the track fits the catalog.
- chief-auditor — runs the conformance gate; never produces, never directs.
- label-orchestrator — sizes the work and fans out the disjoint stages.

## Inputs
- An accepted demo and the artist's intent for the track.
- Target delivery specs (formats, loudness, deadline) from the release schedule.
- Any reference tracks or catalog cues from the repertoire-curator.

## Steps
```
demo → music-producer (arrange)
   → audio-engineer (record · edit · mix)
   → [GATE A: mix locked] → mastering-engineer (master)
       → chief-auditor (conformance)
       → [GATE B: master conforms] → deliver
           → record outcome → release-log
```
1. **Arrange** — music-producer — set arrangement and creative direction from the demo.
2. **Mix** — audio-engineer — record, edit, and mix to a locked mixdown.
3. **Master** — mastering-engineer — produce the master to target delivery specs.
4. **Audit** — chief-auditor — verify conformance against standards before release ([Directive #2](../../kernel/laws/prime-directives.md)).
5. **Record** — update the memory registers below.

## Review Gates
- **Gate A — mix locked:** mastering does not begin until the audio-engineer signs the mix as final; an open mix blocks the handoff and prevents rework downstream.
- **Gate B — master conforms:** the chief-auditor's conformance check (loudness, format, metadata) must pass; a failing master is returned and cannot be delivered.

## Approval Process
T2 production is approved by the music-producer (department lead) for craft, with
the ar-director's artistic veto and the chief-auditor's quality veto as blocking
checks, per [../../kernel/laws/decision-authority.md](../../kernel/laws/decision-authority.md).

## Outputs
- A delivery-ready master plus stems and a technical sheet.
- An audit record from the conformance gate.

## Completion Criteria
- [ ] Mix locked and signed by the audio-engineer.
- [ ] Master passes the chief-auditor's conformance check.
- [ ] Outcome and any lessons written to the registers below.

## Memory Updates
- [release-log](../memory/registers/release-log.md) — what shipped, what went wrong, and the lesson learned.
- [catalog-decisions](../memory/registers/catalog-decisions.md) — any catalog-level call made during production (re-cut, shelving, re-scope).

## Failure / Rollback
A failed Gate A returns the track to the audio-engineer with notes. A failed Gate
B returns it to the mastering-engineer; the track is held out of any release slot
until it conforms. Reversals are appended as dated entries, never erased
([Directive #7](../../kernel/laws/prime-directives.md)).
