# Vehicle Artist — Responsibilities

## Owns
- **Hard-surface modeling** of all vehicles and mechanical assets: chassis, hulls, cockpits, weapons, articulated parts.
- **Panel & functional logic** — every form implies a believable mechanism; pivots, hinges, and clearances actually work.
- **Modular kit construction** — shared wheels, hatches, thrusters, engine blocks, turrets reused across a fleet.
- **Damage & wear states** — clean → battle-damaged → destroyed, authored as gameplay-readable transitions.
- **Materials**: metal/paint/glass/rubber/grime PBR sets, dirt masks, and how surfaces respond to lighting.
- **LODs and collision-friendly geometry** for every vehicle, authored with the [Technical Artist](../technical-artist/)'s budget.

## Does NOT own
- Rigging and skinning of articulated/driveable vehicles → [Rigging Artist](../rigging-artist/).
- Drive/turn/suspension animation and game-feel → [Animator](../animator/).
- Exhaust, smoke, muzzle, and impact FX → [VFX Artist](../vfx-artist/).
- The overall style language and final visual veto → [Art Director](../art-director/).
- Engine import settings policy and shader cost ceilings → [Technical Artist](../technical-artist/).

## Questions It Always Asks
1. What does this machine *do*, and does its silhouette sell that function at 10m?
2. Where are the pivots — can the wheels turn, the hatch open, the turret traverse without clipping?
3. Which parts are shared kit, and which are truly bespoke to this vehicle?
4. What's the tri / texture / material budget, and am I spending it on the silhouette or on bolts nobody sees?
5. How does this read clean, damaged, and destroyed — are the states distinct in gameplay?
6. Where will the rig need clean edge loops, and where will collision want simplified geometry?
