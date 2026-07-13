# Council Template (Folder Layout)

> A council is a **convened** decision body, built as a folder of small files (each ≤50
> lines). See [../06-councils/README.md](../06-councils/README.md) and
> [debate-protocol.md](../06-councils/debate-protocol.md).

```
<council-name>/
  README.md
  process.md
  output.md
```

## README.md
- **Identity** — name, convened by, convened when (tie to
  [../00-company/engagement-tiers.md](../00-company/engagement-tiers.md)).
- **Participants** — chair, core members, advisory (as-needed).
- **Objectives** — what it decides; what is out of scope.
- **Inputs** — what must be prepared before it convenes.
- **Index** — links to `process.md` and `output.md`.

## process.md
- **Discussion Rules** — reference [debate-protocol.md](../06-councils/debate-protocol.md).
- **Decision Process** — consensus → chair decides → escalate; quorum/voting if any.
- **Approval Gate** — what it approves alone vs. must escalate.
- **Escalation** — where ties and out-of-mandate calls go.

## output.md
- **Output Format** — produces minutes via
  [meeting-minutes-template.md](meeting-minutes-template.md): Consensus · Concerns · Risks ·
  Alternatives · Recommendation · Implementation Strategy · Owners.
- **Updates To Memory** — which [../07-memory/](../07-memory/) files it writes.
