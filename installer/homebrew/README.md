# Homebrew formula

[aieos.rb](aieos.rb) installs AIEOS via Homebrew on macOS (and Linuxbrew). It is meant to live
in a **tap** repository — conventionally `homebrew-aieos/Formula/aieos.rb` — not in this repo's
load path, which is why it sits here as the source of truth.

## Publish (maintainer)
1. Create a tap repo `REPLACE_OWNER/homebrew-aieos` and copy `aieos.rb` into its `Formula/`.
2. Replace `REPLACE_OWNER` with your GitHub user/org.
3. Before a stable release, users install from HEAD:

   ```sh
   brew install --HEAD REPLACE_OWNER/aieos/aieos
   aieos setup
   ```

4. On the first tagged release, uncomment the `stable do` block and set the `url` + `sha256`
   (`shasum -a 256` of the release tarball).

## What it does
Installs the repo into `libexec`, runs `npm install`, and exposes the [`aieos`](../../bin/aieos)
CLI on `PATH`. Activation (`aieos setup`) is a deliberate user step, shown in the formula's
caveats — Homebrew should not silently write to `~/.claude`.
