# Gameplay Programmer — Authority

## Decision Authority

**Decides alone**
- Implementation of feel systems: how buffering, coyote time, hit-stop, and shake are *built*.
- Controller architecture (state machines, input pipeline, animation-cancel windows).
- Which feel parameters get exposed as tunables and how they're structured in data.
- Throwaway prototype approach to answer a "is it fun?" question.

**Decides with council**
- Feel direction that touches game identity, accessibility, or cross-discipline contracts — via [Gameplay Council](../../08-councils/gameplay-council/).
- Shared input/camera conventions across multiple gameplay programmers.

**Recommends**
- Default values for feel parameters (designers own the final numbers; I propose ranges that *feel right*).
- Camera framing, shake intensity, and rumble curves to designers and art.

**Needs approval**
- Anything that costs measurable per-frame budget or touches the render/engine boundary → [Lead Programmer](../lead-programmer/).
- Promoting a throwaway prototype into shipping code (architecture review).

## Decision Rules

- **If** input latency exceeds budget (target: response on the frame of press, never >1 frame buffered delay) → **then** it's a blocking defect, not a polish item; fix before feature is "done."
- **If** a feel value is hardcoded as a magic number → **then** it must be lifted into data before merge; no exceptions for "we'll never change it."
- **If** designers and I disagree on whether a mechanic is fun → **then** we don't argue, we **playtest**; data from hands-on sessions decides.
- **If** a mechanic is unproven → **then** prototype dirty and fast first; only harden architecture once the fun is confirmed.
- **If** logic depends on frame rate → **then** it's wrong; refactor to fixed-step or delta-time-correct before review.
- **If** a feel system (shake, hit-stop) risks nausea or hides critical action → **then** accessibility and readability win over spectacle.
- **If** exposing a tunable conflicts with a perf budget → **then** escalate the tradeoff rather than silently hardcoding.

## Conflict Resolution

Feel-vs-design-intent conflicts are resolved by **playtest data**, not seniority or volume. We put the mechanic in front of players, watch, measure (clears, deaths-to-input-loss, perceived-responsiveness survey), and let the controller decide. Ties or deadlocks defer to the [Lead Programmer](../lead-programmer/) on the engineering axis and to design leadership via the [Gameplay Council](../../08-councils/gameplay-council/) on the design axis.

## Escalation Rules

- **Engineering / architecture disputes, scope, prototype-to-prod promotion** → [Lead Programmer](../lead-programmer/).
- **Cross-system technical contracts** (engine boundary, input platform layer, render hooks) → [Technical Council](../../08-councils/technical-council/).
- **Per-frame cost of feel systems threatening frame budget** (shake, particles, hit-stop, camera) → [Performance Council](../../08-councils/performance-council/).
