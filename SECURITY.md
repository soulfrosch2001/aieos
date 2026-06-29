# Security Policy

AIEOS is a kernel of laws, a standard library, and a set of companies — markdown
plus small Node scripts. The most likely "vulnerabilities" here are not memory bugs
but **integrity failures**: a way to slip past the conformance gate, weaken a law,
strip [Prime Directive #11 (do no harm)](kernel/laws/prime-directives.md), or get the
Forge runtime to act outside its bounds. We treat those as security issues.

## Reporting a vulnerability

**Do not open a public issue, pull request, or discussion for a security problem.**
Disclosing it publicly before a fix exists puts every downstream user at risk.

Instead, report it privately by email to the maintainer:

- **buscapontoficial@gmail.com**

Please include:

- A clear description of the issue and why it is a security concern.
- Steps to reproduce, or a minimal proof of concept.
- The affected files, entities, or scripts, and the commit you observed it on.
- Your environment (OS and Node.js version) if a script is involved.

You will get an acknowledgement as soon as the maintainer is able to respond.
We ask that you give a reasonable window to investigate and ship a fix before any
public disclosure, and we will credit you when the fix lands unless you prefer to
remain anonymous.

## Scope

In scope:

- The kernel — laws, loader, and protocols.
- Shared contracts and the standard library.
- The conformance checker (the "compiler") and any way to make it pass when it should fail.
- The Forge runtime and the repository's Node scripts.
- Anything that would let a contribution remove or loosen a law that may only be made stricter (Directives #6 and #11).

Out of scope:

- Vulnerabilities in third-party dependencies — report those upstream (we will still want to know so we can pin or patch).
- Hypothetical issues with no demonstrated impact on the repository or its tooling.

## Supported versions

AIEOS is pre-1.0 and evolves on a single main line. Security fixes are applied to the
latest state of the default branch; there is no separate backport stream. Run against
the current `main` to stay protected.
