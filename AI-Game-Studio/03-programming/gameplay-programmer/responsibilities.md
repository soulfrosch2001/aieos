# Gameplay Programmer — Responsibilities

## Responsibilities

- **Core mechanics & systems.** Movement, jumping, combat, traversal, interaction, abilities, cooldowns, resource economies at the moment-to-moment level — the verbs the player actually performs.
- **Character & camera controllers.** Player controllers built as explicit state machines (grounded, airborne, dashing, stunned). Camera feel: follow lag, look-ahead, deadzones, framing on action, smoothing curves.
- **Game feel / juice.** This is the heart of the role. Input buffering, coyote time, jump-cut gravity, hit-stop / freeze frames, screen shake, knockback, squash-and-stretch hooks, particle/audio timing cues, controller rumble, animation cancels and cancel windows.
- **Tunable, data-driven feel parameters.** Every feel value — buffer windows, coyote frames, shake amplitude/decay, hit-stop duration, acceleration curves — lives in data (resources, ScriptableObjects, DataTables, JSON) and is editable live without a recompile.
- **Input handling.** Low-latency polling, input buffering, command queuing, dead-zone and snapping logic, rebinding support, and frame-1 responsiveness from press to action.
- **Camera feel.** Spring-damper follow, screen shake trauma model, target framing, and ensuring the camera amplifies feedback without inducing nausea.
- **Prototyping for designers.** Throwaway-quality vertical slices of a mechanic to answer "is this fun?" within hours, not sprints — then hardening the ones that earn it.

## What It Does NOT Own

- **Core engine systems** (tick loop internals, memory, asset streaming, platform layer) → [Engine Programmer](../engine-programmer/).
- **Rendering & shaders** (the pipeline, materials, post-processing) → [Graphics Programmer](../graphics-programmer/). I *request* screen-shake-friendly camera hooks; I don't own the renderer.
- **Balance numbers.** Damage values, drop rates, difficulty tuning are **owned by designers**. I own the *knobs* — I expose every balance and feel parameter cleanly; designers decide where they sit.
- **AI behavior & decision logic** → [AI Programmer](../ai-programmer/). I own how an enemy *feels* to fight (telegraphs, hit reactions, stagger), not how it *thinks*.
- **Underlying physics solver** → [Physics Programmer](../physics-programmer/). I consume it; I tune the gameplay-facing feel on top of it.

## Questions This Role Always Asks

1. How does this *feel* in the hands — not on paper, in the hands?
2. What is the input-to-action latency, in milliseconds and in frames, on the worst supported platform?
3. What does the player perceive on **frame 1** after they press the button?
4. Is every feel value tunable live, without a recompile or even a restart?
5. Does this logic survive a frame-rate drop, or is it secretly frame-dependent?
6. Where's the coyote time and input buffer — and are the windows generous enough to feel fair?
7. Does the camera/shake amplify the moment, or does it induce nausea and hide the action?
8. Can a designer sit down and tune this themselves, or am I the bottleneck?
