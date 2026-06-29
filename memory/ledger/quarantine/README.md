# Ledger Quarantine
Status: stable
Type: reference
Owner: Chief Auditor
Extends: none

Holds session captures that the memory guard
([`scripts/lib/memory-guard.mjs`](../../../scripts/lib/memory-guard.mjs)) flagged as
**high-severity** — e.g. text containing destructive commands, remote-exec, or
antivirus-tampering patterns. These entries are **git-ignored** and are **never** sent to
GitHub by `npm run memory:push`.

This is the safety net behind the rule "evaluate before forwarding": risky content lands
here for a human to review. To clear an entry, read it, confirm it is harmless (it is
already inert, redacted text), remove the offending lines, and move it up into the parent
`memory/ledger/` folder so it becomes eligible for the next grouped push.

Only this README is tracked; the flagged entries themselves stay local.
