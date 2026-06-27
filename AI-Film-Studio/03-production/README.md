# 03-Production
Status: stable
Type: department
Owner: director
Extends: none

## Mission
Production is where the film stops being a script and starts being footage. This
department is accountable for the principal photography of every greenlit film —
turning the development department's blueprint into staged, performed, lit, and
designed shots that post can cut into a finished picture. We own the set: what is
in front of the lens, how it is lit, and the performance captured. We inherit the
kernel and fork nothing
([Directive #5](../../kernel/laws/prime-directives.md)), we discuss before we shoot
([Directive #2](../../kernel/laws/prime-directives.md)), and the orchestrator routes
us — it never directs the film
([Directive #2](../../kernel/laws/prime-directives.md)).

## Lead
[director](director/) — accountable for the department's output and quality. The
director owns the performance and the meaning of every shot and answers for whether
the day's footage tells the story development chartered.

## Agents
| Agent | Role in one line |
|-------|------------------|
| [director](director/) | Owns staging, performance, and the meaning of each shot; decides what the camera sees. |
| [cinematographer](cinematographer/) | Owns the image — lighting, lens, camera movement, and exposure that render the director's intent. |
| [production-designer](production-designer/) | Owns the physical world on screen — sets, props, locations, and the visual texture of the film's reality. |

## Councils it sits on
- [creative-council](../councils/creative-council/) — defends creative coherence of the image and the world across all films.
- [greenlight-council](../councils/greenlight-council/) — production sizing and feasibility feed the greenlight decision.

## Memory it feeds
- [production-log](../memory/registers/production-log.md) — what each shoot day taught us; problems, fixes, and reusable craft lessons.
- [project-ideas](../memory/registers/project-ideas.md) — staging, location, and design ideas surfaced on set that could seed future films.

## Lifecycle
Every agent in this department follows the same agent contract and lifecycle.
A department adds agents by copying
[../../templates/agent.template.md](../../templates/agent.template.md). Requests arrive
already routed and tier-sized from the
[studio-orchestrator](../01-executive/studio-orchestrator/) under
[engagement tiers](../../kernel/laws/engagement-tiers.md); production work is
typically T3. Fan-out across the department keeps ownership disjoint
([Directive #4](../../kernel/laws/prime-directives.md)), and every shoot day closes by
updating memory ([Directive #8](../../kernel/laws/prime-directives.md)).
