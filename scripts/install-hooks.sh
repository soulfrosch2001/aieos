#!/bin/sh
# Install the AIEOS git hooks into the current repository.
set -e
HOOK_DIR="$(git rev-parse --git-path hooks 2>/dev/null || echo .git/hooks)"
mkdir -p "$HOOK_DIR"
cp scripts/pre-commit "$HOOK_DIR/pre-commit"
chmod +x "$HOOK_DIR/pre-commit"
echo "Installed AIEOS pre-commit hook → $HOOK_DIR/pre-commit"
