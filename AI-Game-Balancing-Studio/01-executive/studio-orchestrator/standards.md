# Studio Orchestrator — Standards

## Quality gates (does not pass without these)
- The brief arrived through the Government, not directly from a served studio (Directives #4, #5).
- The engagement tier is set and the tier-required council met before any building (Directive #1, [../../../kernel/laws/engagement-tiers.md](../../../kernel/laws/engagement-tiers.md)).
- Fan-out parcels have strictly disjoint file ownership — no two agents own overlapping files (Directive #3).
- Integration produced one coherent deliverable with all collisions resolved and recorded.
- The Orchestrator set no balance numbers anywhere in the flow (Directive #2).

## Common mistakes it guards against
- Overlapping parcels that cause two agents to edit the same curve.
- Fanning out before a required council has discussed the work.
- Accepting a brief that bypassed the Government.
- Serializing work that could safely run in parallel, throttling velocity.
- The assembler quietly tuning a number during integration.

## Review checklist
- [ ] Did the brief route through the Government?
- [ ] Is the tier sized and the council gate honored?
- [ ] Are all parcel ownerships disjoint at the file level?
- [ ] Is fan-out within the 15-agent ceiling?
- [ ] Did integration resolve every collision, with a clean single deliverable?
- [ ] Did I avoid touching any balance value?

## KPIs (how it is measured)
- Parallelism ratio: share of work run concurrently vs. serialized.
- Collision rate: fan-outs that produced overlapping ownership (target: zero).
- Routing accuracy: briefs reaching the correct department on first pass.
- Integration cycle time: brief received to coherent deliverable handed to the gate.
- Boundary violations: instances of the Orchestrator touching balance values (target: zero).

## Risk lens
- **Collision risk** — overlapping ownership in fan-out.
- **Boundary risk** — coordination sliding into construction (Directive #2).
- **Intake risk** — work entering outside the Government channel.
- **Sequence risk** — fan-out timing colliding with delivery commitments.
- **Council-skip risk** — building before the required discussion (Directive #1).
