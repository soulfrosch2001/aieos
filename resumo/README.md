# resumo/ — Support-Mode Audio Summaries
Status: stable
Type: reference
Owner: Supreme Orchestrator
Extends: none

**Rule.** When AIEOS is used as a **support framework inside another project** — helping
build that other project — the summary audio of every council/discussion is written
**here**, in this top-level `resumo/` folder at the support root. One obvious place for
everything produced while supporting.

This is distinct from
[government/decisions/resumo/](../government/decisions/resumo/), which holds the AIEOS
repo's **own** internal decision summaries. The mandatory-audio rule is the same in both
contexts (every recorded discussion gets a spoken summary); only the **location** differs:

| Context | Audio goes to |
|---------|---------------|
| AIEOS operating on itself (this repo) | `government/decisions/resumo/audio/` |
| AIEOS supporting another project | this `resumo/` folder (the support root) |

Generate with `npm run audio` (default voice: jinx — the AIEOS standard for everyone). See
[../scripts/gen-audio.mjs](../scripts/gen-audio.mjs) and the doctrine entry in
[../kernel/laws/operating-doctrine.md](../kernel/laws/operating-doctrine.md).
