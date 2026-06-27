# Post-Production Department
Status: stable
Type: department
Owner: editor
Extends: none

## Mission
Post-production finishes the film. Everything shot, designed, and performed
arrives here as raw material, and this department turns it into the cut the
audience actually watches: assembled, paced, graded, scored against picture, and
finished with every visual effect the story needs. We are the last hands on the
film before it leaves the studio, which means we are also the last chance to make
it work — or to admit, honestly, what the earlier stages did not give us.

## Identity
The department's lead is the **editor**. Post inherits the kernel and forks
nothing: it sizes its work through the engagement tiers
([engagement-tiers.md](../../kernel/laws/engagement-tiers.md)), routes through the
[studio-orchestrator](../01-executive/studio-orchestrator/README.md), and reports
upward through the standard reporting protocol
([reporting.md](../../kernel/protocols/reporting.md)). It never talks to another
company directly (Directive [#4](../../kernel/laws/prime-directives.md)).

## Agents
- [editor/](editor/README.md) — finds the film in the footage; owns the cut, the
  pace, and final picture lock.
- [vfx-supervisor/](vfx-supervisor/README.md) — owns every visual effect and the
  methodology that delivers them on schedule and on vision.

## How work enters
Post receives a locked-or-near-locked production hand-off and runs it through the
[post-production workflow](../workflows/post-production.md) at
[T3](../../kernel/laws/engagement-tiers.md). The
[line-producer](../01-executive/line-producer/README.md) owns the delivery
schedule; the [creative-director](../01-executive/creative-director/README.md)
holds the creative veto on the finished cut; the
[chief-auditor](../01-executive/chief-auditor/README.md) runs conformance before
anything ships.

## Boundaries
- Post does not reshoot. When the footage cannot carry the story, post escalates;
  it does not invent coverage that was never captured.
- Post does not greenlight or re-greenlight. That belongs to the
  [greenlight-council](../councils/greenlight-council/README.md).
- Creative direction in dispute goes to the
  [creative-council](../councils/creative-council/README.md), never settled
  unilaterally inside post.

## Inherited law
- Discuss before building — Directive [#1](../../kernel/laws/prime-directives.md).
- Inherit, don't fork — Directive [#5](../../kernel/laws/prime-directives.md).
- Propose framework changes before making them — Directive
  [#6](../../kernel/laws/prime-directives.md).
- One concept per file; every folder has a README — Directive
  [#8](../../kernel/laws/prime-directives.md).
- Resolution order for any inherited default —
  [resolution-order.md](../../kernel/loader/resolution-order.md).
