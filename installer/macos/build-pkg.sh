#!/bin/bash
# Build the AIEOS macOS installer (.pkg). Requires macOS with pkgbuild/productbuild
# (Xcode command-line tools). Compiled by CI on a macOS runner — see ../../.github/workflows/release.yml.
#
#   bash installer/macos/build-pkg.sh [version]
#
# Produces installer/macos/Output/AIEOS-<version>.pkg. The .pkg installs AIEOS to
# /usr/local/aieos and its postinstall runs `npm install` + `npm run setup` (configuring
# /aieos for the logged-in user), mirroring the Windows installer.
set -euo pipefail
VERSION="${1:-0.1.0}"
ID="com.aieos.installer"
HERE="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$HERE/../.." && pwd)"
BUILD="$HERE/build"
PAYLOAD="$BUILD/payload/usr/local/aieos"
SCRIPTS="$BUILD/scripts"
OUT="$HERE/Output"

rm -rf "$BUILD"
mkdir -p "$PAYLOAD" "$SCRIPTS" "$OUT"

# Payload = the repo, minus VCS / deps / build artifacts (deps are installed on the target).
rsync -a \
  --exclude '.git' --exclude 'node_modules' \
  --exclude 'installer/macos/build' --exclude 'installer/macos/Output' --exclude 'installer/Output' \
  "$REPO_ROOT/" "$PAYLOAD/"

# pkgbuild scripts dir holds the postinstall (must be named exactly "postinstall").
cp "$HERE/postinstall" "$SCRIPTS/postinstall"
chmod +x "$SCRIPTS/postinstall"

pkgbuild \
  --root "$BUILD/payload" \
  --scripts "$SCRIPTS" \
  --identifier "$ID" \
  --version "$VERSION" \
  --install-location "/" \
  "$BUILD/aieos-component.pkg"

productbuild \
  --distribution "$HERE/distribution.xml" \
  --package-path "$BUILD" \
  "$OUT/AIEOS-$VERSION.pkg"

echo "Built $OUT/AIEOS-$VERSION.pkg"
