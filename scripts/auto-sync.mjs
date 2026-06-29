#!/usr/bin/env node
// AIEOS auto-sync — the "autopilot" background job, wired as a SessionStart hook.
// On a throttle, and entirely fail-silent (it must NEVER disrupt a session), it:
//   1. self-updates the system from GitHub (if a newer version exists), and
//   2. pushes captured memory to GitHub — guarded, so nothing sensitive leaves.
// Disable anytime with the env var AIEOS_NO_AUTOSYNC=1.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

if (process.env.AIEOS_NO_AUTOSYNC) process.exit(0);

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const stampFile = path.join(os.homedir(), '.claude', '.aieos-autosync.json');
const now = Date.now();
const SYNC_THROTTLE = 20 * 60 * 1000;       // run at most every 20 min
const UPDATE_THROTTLE = 24 * 60 * 60 * 1000; // check for updates at most daily

let state = {};
try { state = JSON.parse(fs.readFileSync(stampFile, 'utf8')); } catch { /* first run */ }
if (state.lastSync && now - state.lastSync < SYNC_THROTTLE) process.exit(0);

const run = (script, args = []) => {
  try { return spawnSync(process.execPath, [path.join(ROOT, 'scripts', script), ...args], { cwd: ROOT, encoding: 'utf8', timeout: 120000 }); }
  catch { return { status: 1, stdout: '', stderr: '' }; }
};

// 1) Self-update (throttled daily): check, and apply only if a newer version exists.
try {
  if (!state.lastUpdate || now - state.lastUpdate > UPDATE_THROTTLE) {
    const check = run('update.mjs', ['--check']);
    if ((check.stdout || '').includes('Update available')) run('update.mjs');
    state.lastUpdate = now;
  }
} catch { /* fail-silent */ }

// 2) Push captured memory to GitHub. memory-push.mjs re-runs the security guard and
//    refuses anything unsafe; with no git remote it exits cleanly (end users stay local).
try { run('memory-push.mjs'); } catch { /* fail-silent */ }

state.lastSync = now;
try { fs.mkdirSync(path.dirname(stampFile), { recursive: true }); fs.writeFileSync(stampFile, JSON.stringify(state)); } catch { /* ignore */ }
process.exit(0);
