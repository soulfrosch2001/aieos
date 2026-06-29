# bin/

The AIEOS command-line entrypoint.

[aieos](aieos) is a thin dispatcher over the project's scripts, so AIEOS feels like a normal
CLI once it is on your `PATH` (via Homebrew, or `npm link`):

```sh
aieos setup          # register the global /aieos command + machine-wide bootstrap
aieos teardown       # remove them
aieos conformance    # run the conformance gate
aieos version
```

Each subcommand runs the matching script from the AIEOS root — identical to `npm run <x>`.
Exposed through the `bin` field in [../package.json](../package.json) and installed by the
[Homebrew formula](../installer/homebrew/aieos.rb).
