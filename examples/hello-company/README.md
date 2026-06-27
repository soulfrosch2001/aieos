# Hello Company

Status: stable
Type: company
Owner: its CEO
Extends: kernel + stdlib

The smallest company that AIEOS will mount. It exists to answer one question:
*what is the least a company must write, and what does it get for free?* Almost
everything here is inherited; the company itself is barely more than a charter, one
executive, and one working agent. Build a real company by growing this one — not by
starting from an empty folder.

## What Hello Company writes (the minimum)

```
hello-company/
  00-company/
    README.md          charter + identity block; declares Extends: kernel + stdlib
  01-executive/
    ceo/               one executive agent — the 5-file agent shape
  02-greeting/
    README.md          the department index
    greeter/           one agent — the 5-file agent shape
```

That is the whole plugin. One executive (`ceo`), one department (`02-greeting`),
one agent inside it (`greeter`). Each agent is a folder of **5 files**
(`README.md`, `responsibilities.md`, `authority.md`, `craft.md`, `standards.md`)
built from [../../templates/agent.template.md](../../templates/agent.template.md)
and satisfying [agent.md](../../kernel/contracts/agent.md). The company folder is
built from [../../templates/company.template.md](../../templates/company.template.md)
and satisfies [plugin.md](../../kernel/contracts/plugin.md).

## What it inherits for free (and does NOT write)

Hello Company writes **no** workflows, **no** councils, and **no** memory
registers. It does not need to. The loader resolves every one of those to the
standard-library default of the same name, because the company defines no local
override — this is exactly the
[resolution order](../../kernel/loader/resolution-order.md):

> company-local first, **stdlib default of the same name** as fallback.

So `greeter` runs on the stdlib workflows, decisions go to stdlib councils, and
records land in stdlib memory schemas — all inherited
([Directive #6](../../kernel/laws/prime-directives.md)). The day Hello Company
wants a custom code-review council, it creates a council of that same name in its
own tree and the loader prefers it. Until then: nothing to write, nothing to
maintain, nothing to drift.

## Why this is the right starting point

A blank company tempts you to re-implement defaults; this one shows that the
correct first move is to inherit and add only the irreducible specifics. If your
new company is bigger than Hello Company, every extra file should justify why it is
not just a stdlib default — that justification is the whole discipline.

See [../../companies/README.md](../../companies/README.md) to register a real
company and [../../CONTRIBUTING.md](../../CONTRIBUTING.md) for the propose-before-
build rule.
