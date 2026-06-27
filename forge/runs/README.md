# Forge — Run Traces
Status: experimental
Type: reference
Owner: CTO (Government)
Extends: none

Auditable traces of [Forge runtime](../run.mjs) runs. One JSON file per run, written
incrementally as the loop turns so a crash still leaves evidence (append-mostly,
Directive #8). This folder is created at runtime; checked-in traces are optional.

## File naming

```
<ISO-timestamp>-<agent>.json    e.g. 2026-06-27T17-40-00.000Z-balance-scout.json
```

## Trace shape

```
{
  "goal":      "...",            // the request the agent was given
  "model":     "<id> | null",    // null on a --dry-run
  "dryRun":    true | false,
  "agent":     "balance-scout",
  "startedAt": "<ISO>",
  "endedAt":   "<ISO>",
  "steps": [
    { "n": 1, "text": "<plan/reflection>", "stop_reason": "tool_use",
      "actions": [ { "name": "list_dir", "input": {…}, "ok": true, "output": "…" } ] }
  ],
  "outcome":   "done | incomplete | stuck | budget_exhausted",
  "summary":   "<finish summary>",
  "gateClean": true | false,
  "tracePath": "forge/runs/<file>.json"
}
```

`outcome: "done"` means the agent called `finish` cleanly (gate passed if it wrote
anything). The other outcomes are bounded-autonomy stops: `incomplete` (stalled),
`stuck` (repeated the same action), `budget_exhausted` (hit the step ceiling).

See the [Forge runtime](../run.mjs) and [the action loop](../action-loop.md).
