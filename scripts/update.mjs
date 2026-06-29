#!/usr/bin/env node
// AIEOS self-update — pull the latest version from GitHub WITHOUT reinstalling the app.
//
//   aieos update           # update in place (code/docs/rules), then npm install + setup
//   aieos update --check   # just report whether a newer version is available (no changes)
//
// Works for both layouts:
//   - a git checkout (the dev repo)      → `git pull --ff-only`
//   - the installed copy (plain files)   → download the latest tarball from GitHub and overlay
// The user's local memory (memory/ledger) and node_modules are preserved across updates.
//
// Requires the GitHub repository to be PUBLIC (or release assets public) so users can fetch
// it without credentials. The repo is read from package.json "repository".
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import https from 'node:https';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const AIEOS_ROOT = process.env.AIEOS_UPDATE_DIR || path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CHECK = process.argv.includes('--check');
const PRESERVE = new Set(['node_modules', '.git']); // never overwritten; memory/ledger handled below

function readPkg(dir) {
  try { return JSON.parse(fs.readFileSync(path.join(dir, 'package.json'), 'utf8')); } catch { return {}; }
}
function repoSlug() {
  const r = readPkg(AIEOS_ROOT).repository;
  const url = typeof r === 'string' ? r : (r && r.url) || '';
  const m = url.match(/github\.com[:/]+([^/]+)\/([^/.]+)/i);
  return m ? `${m[1]}/${m[2]}` : null;
}
function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'aieos-update' } }, (r) => {
      if (r.statusCode >= 300 && r.statusCode < 400 && r.headers.location) { r.resume(); return get(r.headers.location).then(resolve, reject); }
      if (r.statusCode !== 200) { r.resume(); return reject(new Error('HTTP ' + r.statusCode)); }
      let d = ''; r.on('data', (c) => (d += c)); r.on('end', () => resolve(d));
    }).on('error', reject);
  });
}
function downloadTo(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'aieos-update' } }, (r) => {
      if (r.statusCode >= 300 && r.statusCode < 400 && r.headers.location) { r.resume(); return downloadTo(r.headers.location, dest).then(resolve, reject); }
      if (r.statusCode !== 200) { r.resume(); return reject(new Error('HTTP ' + r.statusCode)); }
      const f = fs.createWriteStream(dest); r.pipe(f); f.on('finish', () => f.close(() => resolve())); f.on('error', reject);
    }).on('error', reject);
  });
}

const slug = repoSlug();
const localVer = readPkg(AIEOS_ROOT).version || '0.0.0';

if (!slug) {
  console.error('No GitHub repository configured in package.json ("repository"). Cannot self-update.');
  process.exit(1);
}

// ---- --check: compare local vs remote version, change nothing ----
if (CHECK) {
  try {
    const remote = JSON.parse(await get(`https://raw.githubusercontent.com/${slug}/main/package.json`));
    const remoteVer = remote.version || '0.0.0';
    if (remoteVer !== localVer) {
      console.log(`Update available: ${localVer} → ${remoteVer}. Run \`aieos update\`.`);
    } else {
      console.log(`AIEOS is up to date (${localVer}).`);
    }
  } catch (e) {
    console.error('Could not check for updates: ' + e.message + ' (is the repo public?)');
    process.exit(1);
  }
  process.exit(0);
}

// ---- update: git pull (checkout) or tarball overlay (installed copy) ----
console.log(`Updating AIEOS at ${AIEOS_ROOT} …`);
if (fs.existsSync(path.join(AIEOS_ROOT, '.git'))) {
  const r = spawnSync('git', ['pull', '--ff-only'], { cwd: AIEOS_ROOT, stdio: 'inherit' });
  if (r.status !== 0) { console.error('git pull failed; resolve manually and retry.'); process.exit(1); }
} else {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'aieos-update-'));
  const tgz = path.join(tmp, 'aieos.tar.gz');
  console.log('Downloading latest from GitHub …');
  try { await downloadTo(`https://codeload.github.com/${slug}/tar.gz/refs/heads/main`, tgz); }
  catch (e) { console.error('Download failed: ' + e.message + ' (is the repo public?)'); process.exit(1); }
  const ex = spawnSync('tar', ['-xzf', tgz, '-C', tmp], { stdio: 'inherit' });
  if (ex.status !== 0) { console.error('Extraction failed (tar not available?).'); process.exit(1); }
  const top = fs.readdirSync(tmp).map((n) => path.join(tmp, n)).find((p) => fs.statSync(p).isDirectory());
  if (!top) { console.error('Unexpected archive layout.'); process.exit(1); }
  // Overlay extracted files onto the install, preserving node_modules/.git and local memory.
  fs.cpSync(top, AIEOS_ROOT, {
    recursive: true, force: true,
    filter: (src) => {
      const rel = path.relative(top, src);
      if (!rel) return true;
      const first = rel.split(path.sep)[0];
      if (PRESERVE.has(first)) return false;
      if (rel.split(path.sep).slice(0, 2).join('/') === 'memory/ledger') return false; // keep local memory
      return true;
    },
  });
  fs.rmSync(tmp, { recursive: true, force: true });
}

console.log('Installing dependencies …');
spawnSync('npm', ['install', '--omit=dev'], { cwd: AIEOS_ROOT, stdio: 'inherit', shell: process.platform === 'win32' });
console.log('Re-registering the global command …');
spawnSync(process.execPath, [path.join(AIEOS_ROOT, 'scripts', 'install-command.mjs')], { cwd: AIEOS_ROOT, stdio: 'inherit' });

const newVer = readPkg(AIEOS_ROOT).version || localVer;
console.log(`AIEOS updated → ${newVer}. ✓`);
