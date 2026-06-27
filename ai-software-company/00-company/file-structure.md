# file-structure.md — How Entities Are Split Into Files

Because files target ≤50 lines, every multi-part entity is a **folder** whose
`README.md` is the index. A file may exceed the target only when it genuinely cannot be
split without harming clarity. See [conventions.md](conventions.md).

## An Agent = a Folder
```
<agent-name>/
  README.md          # Identity · Mission · Personality & Mindset · index links
  responsibilities.md# Responsibilities · Questions This Agent Always Asks
  authority.md       # Decision Authority · Decision Rules · Escalation Rules
  standards.md       # Common Mistakes · Review Checklist · Best Practices ·
                     #   Quality Gates · Risk Analysis Lens
  craft.md           # Communication Style · Collaborates With · Updates To Memory ·
                     #   Coding Philosophy (eng) OR Business+User Thinking (product/design)
```
Template: [../09-templates/agent-template.md](../09-templates/agent-template.md).

## A Council = a Folder
```
<council-name>/
  README.md   # Identity · Participants · Objectives · Inputs · index
  process.md  # Discussion Rules · Decision Process · Approval Gate · Escalation
  output.md   # Output Format (minutes) · Memory Updates
```
Template: [../09-templates/council-template.md](../09-templates/council-template.md).

## A Workflow = one file (kept ≤50 lines)
If a workflow needs more, split it into a folder the same way.
Template: [../09-templates/workflow-template.md](../09-templates/workflow-template.md).

## Every Folder Has a README
The `README.md` states the folder's purpose and indexes its contents in ≤50 lines.
