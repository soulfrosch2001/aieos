# AI Healthcare Clinic — 00-company
Status: stable
Type: folder
Owner: medical-director
Extends: none

## What this folder is
The root governance of AI Healthcare Clinic: its charter, mount adapter, org chart,
and the index you are reading. This company models the **organizational structure** of
a medical clinic — intake/triage routing, care-process coordination, and compliance.
It is organizational only and issues **no medical advice**.

## Contents
- [COMPANY.md](COMPANY.md) — the charter: what the clinic does, what it inherits from
  the kernel and stdlib, and the stricter local rules it adds.
- [AIEOS.md](AIEOS.md) — the kernel-native mount adapter: executive mapping, local
  overrides, register mapping, and the reporting path.
- [org-chart.md](org-chart.md) — reporting structure across the five executives and
  three departments.

## Inheritance
Kernel-native; forks nothing. Laws and protocols come from
[../../kernel/](../../kernel/); reusable processes from the stdlib
[workflows](../../workflows/) and [councils](../../councils/). Resolution follows the
kernel [loader order](../../kernel/loader/resolution-order.md).

## Neighbouring folders
- [../01-executive/](../01-executive/README.md) — the five executive roles.
- [../02-intake/](../02-intake/README.md),
  [../03-care/](../03-care/README.md),
  [../04-compliance/](../04-compliance/README.md) — the departments.
- [../councils/](../councils/README.md),
  [../workflows/](../workflows/),
  [../memory/](../memory/README.md),
  [../reports/](../reports/README.md).
