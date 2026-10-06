# AIEOS Bridge
Status: experimental
Type: department
Owner: Bridge Platform Lead
Extends: none

The Bridge is the local execution plane for provider sessions and authorized local
tools. W1 starts with a stdio connection to the Codex App Server. Credentials never
leave the provider's local harness.

## Commands

```sh
npm run work:doctor
npm run work:run -- "Inspect the workspace and summarize it."
```

The first slice is read-only. Provider approval requests fail closed.

