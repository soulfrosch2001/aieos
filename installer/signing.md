# Installer signing & notarization

The release CI ([../.github/workflows/release.yml](../.github/workflows/release.yml)) signs the
installers **only if** the relevant secrets are present — so it builds unsigned artifacts out of
the box and starts signing the moment you add credentials. No code changes needed to enable it.

## Windows (Authenticode)
Add these GitHub repository secrets:

| Secret | What |
|--------|------|
| `WINDOWS_CERT_BASE64` | Your code-signing certificate (`.pfx`), base64-encoded. |
| `WINDOWS_CERT_PASSWORD` | The `.pfx` password. |

The CI decodes the cert and runs `signtool sign … /fd sha256 /tr <timestamp>` on the `.exe`.
Without a signed cert, Windows SmartScreen may warn on first run.

## macOS (Developer ID + notarization)
Add these secrets:

| Secret | What |
|--------|------|
| `MACOS_CERT_BASE64` | "Developer ID Installer" certificate (`.p12`), base64-encoded. |
| `MACOS_CERT_PASSWORD` | The `.p12` password. |
| `MACOS_KEYCHAIN_PASSWORD` | A throwaway password for the temporary CI keychain. |
| `APPLE_ID` | Apple ID email for notarization. |
| `APPLE_TEAM_ID` | Your Apple Developer Team ID. |
| `APPLE_APP_PASSWORD` | An app-specific password for `notarytool`. |

The CI imports the cert, `productsign`s the `.pkg`, submits it with `xcrun notarytool submit
--wait`, and staples the ticket. Without these, Gatekeeper may block the unsigned `.pkg`.

## Note
Certificates are issued by a CA (Windows) or Apple (macOS) and cannot be generated here — these
are maintainer-provided. The signing steps are written and gated; they activate when the secrets
exist.
