# macOS installer (.pkg)

The macOS counterpart of the [Windows installer](../). It installs AIEOS to
`/usr/local/aieos` and **auto-configures it on install** — its `postinstall` runs
`npm install` then `npm run setup`, so `/aieos` is ready in every project for the logged-in
user. **Prerequisite:** Node.js >= 18 (the postinstall checks and aborts with a message if
it is missing).

## Files
| File | Role |
|------|------|
| [postinstall](postinstall) | Runs after the payload is laid down: Node preflight, `npm install`, then `npm run setup` as the console user. |
| [build-pkg.sh](build-pkg.sh) | Assembles the `.pkg` with `pkgbuild` + `productbuild`. |
| [distribution.xml](distribution.xml) | `productbuild` distribution (title, macOS 11+ requirement). |

## Building
Requires macOS with the Xcode command-line tools. It is built automatically by CI on a
macOS runner (see [../../.github/workflows/release.yml](../../.github/workflows/release.yml))
and attached to the GitHub Release. To build locally:

```sh
bash installer/macos/build-pkg.sh 0.1.0   # → installer/macos/Output/AIEOS-0.1.0.pkg
```

## Uninstall
The per-user config is removed with `npm run teardown` (from `/usr/local/aieos`). To remove
the payload itself: `sudo rm -rf /usr/local/aieos`.

## Not yet
Code-signing / notarization (to avoid Gatekeeper warnings) and a Homebrew formula are
deferred — see the decisions log.
