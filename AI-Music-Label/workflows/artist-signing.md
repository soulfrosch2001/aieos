# Workflow: artist-signing
Status: stable
Type: workflow
Owner: label-orchestrator
Extends: planning
**Purpose:** Evaluate a prospective artist and decide whether to sign them to the roster.
**Default Tier:** T2  ·  **Owner:** ar-director
**Extends:** planning

## Trigger
A prospect surfaces — inbound demo, scout discovery, or referral — and the
ar-scout judges it worth a formal evaluation rather than a quick pass.

## Participants
- ar-scout — sources the prospect, assembles the evidence pack, owns the pipeline entry.
- artist-manager — assesses the human fit, availability, and working relationship.
- repertoire-curator — judges catalog fit and where the artist sits in the roster.
- ar-director — chairs the signing-council, holds the artistic veto, decides to sign.
- label-head — confirms the signing aligns with label direction and roster strategy.
- label-orchestrator — sizes the request, convenes the council, integrates the result.

## Inputs
- A demo or body of work the prospect can stand behind.
- A scout brief: where they were found, comparable artists, audience signal.
- Current roster state and any open slots from the catalog strategy.

## Steps
```
prospect → [scout brief] → ar-scout
   → assemble evidence pack
   → [GATE A: evidence complete] → signing-council (chair: ar-director)
       → deliberate fit (artistic · human · catalog)
       → [GATE B: artistic veto clear] → sign / pass
           → record decision → update pipeline + catalog
```
1. **Source** — ar-scout — log the prospect in artist-pipeline and build the evidence pack.
2. **Screen** — artist-manager + repertoire-curator — score human fit and catalog fit in parallel.
3. **Deliberate** — signing-council — discuss before committing ([Directive #1 — discuss before building](../../kernel/laws/prime-directives.md)).
4. **Decide** — ar-director — exercise or clear the artistic veto; label-head confirms direction.
5. **Record** — update the memory registers below.

## Review Gates
- **Gate A — evidence complete:** the council does not convene until the evidence pack carries demo, scout brief, and both fit scores. Missing any one blocks deliberation.
- **Gate B — artistic veto clear:** no signing proceeds while the ar-director's veto stands; a standing veto returns the prospect to the pipeline with a recorded reason.

## Approval Process
T2 signing is approved by the ar-director (CTO-level + artistic veto) with the
label-head (CEO-level) confirming direction, per
[../../kernel/laws/decision-authority.md](../../kernel/laws/decision-authority.md).
The label-orchestrator never approves — it routes ([Directive #2](../../kernel/laws/prime-directives.md)).

## Outputs
- A signed (or passed) decision with a written rationale.
- An updated roster entry and pipeline status.
- Council minutes per [../councils/signing-council/output.md](../councils/signing-council/output.md).

## Completion Criteria
- [ ] Both fit scores recorded and reviewed by the council.
- [ ] Artistic veto explicitly cleared or exercised.
- [ ] Decision and rationale written to the registers below.

## Memory Updates
- [artist-pipeline](../memory/registers/artist-pipeline.md) — prospect status, scores, and the sign/pass outcome.
- [catalog-decisions](../memory/registers/catalog-decisions.md) — roster-shaping decisions when an artist is signed.

## Failure / Rollback
If Gate A fails the prospect stays in the pipeline pending evidence. If Gate B
holds (veto stands), the signing is abandoned and the reason is logged; no roster
change is written. A signing already recorded is corrected by appending a dated
reversal entry — never by erasing history ([Directive #7](../../kernel/laws/prime-directives.md)).
