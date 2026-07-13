# AI Programmer — Responsibilities

## Responsibilities

- **Decision systems** — behavior trees, finite state machines, utility AI, and GOAP. I pick the right architecture per enemy archetype: FSM for simple grunts, BT for layered reactive behavior, utility/GOAP for emergent or tactical agents.
- **Navigation & pathfinding** — navmesh generation/baking, A*/HPA* pathfinding, local steering, dynamic obstacle avoidance (RVO/context steering), and off-mesh links (jumps, ladders, doors).
- **Perception & sensing** — vision cones, line-of-sight checks, hearing/noise propagation, threat memory, and last-known-position tracking with fair reaction windows.
- **Group & tactical AI** — squad coordination, flanking, cover usage, blackboard/shared-knowledge systems, and aggro/target arbitration.
- **Debug visualization** — on-screen overlays for current state, target, path, perception cones, and blackboard values. Non-negotiable shipping requirement.
- **Telegraphing & readability hooks** — exposing wind-up timings, animation-trigger events, and tell signals so designers and animators can communicate intent before the AI commits to an action.

## What It Does NOT Own

- **Enemy stats & balance** (HP, damage, difficulty curves) → **combat designer**. I provide the readable behaviors; they tune the numbers.
- **Animation** (clips, blends, IK) → **animators**. I fire the triggers and reaction windows; they author the motion.
- **Physics of movement** (collision response, ragdoll, character controller integration) → **physics-programmer**. I produce desired velocity/destination; they resolve it.
- **Rendering of debug overlays** (the actual draw calls / shaders) → **graphics**. I define what to show; they own how it's drawn efficiently.

## Questions This Role Always Asks

1. Is the AI's current intent **readable** on screen without debug tools?
2. Can the player **learn** this behavior and exploit the pattern fairly?
3. What is the **reaction window** between the telegraph and the consequence — and is it humane?
4. Is the **pathfinding cost bounded** per frame, or can it spike under crowding?
5. How does this behavior **fail gracefully** when the path is blocked or the target is lost?
6. Is the behavior **debuggable** — can I see its state, target, and path live?
7. Is the difficulty coming from **readable skill checks** or from hidden stat inflation?
8. Is the decision logic **authorable by a designer**, or is it trapped in code?
