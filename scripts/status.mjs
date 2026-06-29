#!/usr/bin/env node
// AIEOS status hub — a one-glance panel of the system's health: version + update status,
// conformance, memory, git sync, and whether the /aieos command is active.
//
//   aieos status
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import https from 'node:https';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pkg = (() => { try { return JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8')); } catch { return {}; } })();
const ver = pkg.version || '0.0.0';

function cmpVer(a, b) {
  const pa = String(a).split('.').map((n) => parseInt(n, 10) || 0);
  const pb = String(b).split('.').map((n) => parseInt(n, 10) || 0);
  for (let i = 0; i < 3; i++) { if ((pa[i] || 0) > (pb[i] || 0)) return 1; if ((pa[i] || 0) < (pb[i] || 0)) return -1; }
  return 0;
}
function slug() {
  const r = pkg.repository; const url = typeof r === 'string' ? r : (r && r.url) || '';
  const m = url.match(/github\.com[:/]+([^/]+)\/([^/.]+)/i); return m ? `${m[1]}/${m[2]}` : null;
}
function remoteVersion() {
  return new Promise((resolve) => {
    const s = slug(); if (!s) return resolve(null);
    const req = https.get(`https://raw.githubusercontent.com/${s}/main/package.json`, { headers: { 'User-Agent': 'aieos' }, timeout: 4000 }, (r) => {
      if (r.statusCode !== 200) { r.resume(); return resolve(null); }
      let d = ''; r.on('data', (c) => (d += c)); r.on('end', () => { try { resolve(JSON.parse(d).version || null); } catch { resolve(null); } });
    });
    req.on('error', () => resolve(null)); req.on('timeout', () => { req.destroy(); resolve(null); });
  });
}
const countDir = (p, filter) => { try { return fs.readdirSync(p).filter(filter).length; } catch { return 0; } };
const sh = (cmd, args) => { try { return spawnSync(cmd, args, { cwd: ROOT, encoding: 'utf8' }).stdout.trim(); } catch { return ''; } };

const rules = countDir(path.join(ROOT, 'tests', 'conformance', 'rules'), (f) => f.endsWith('.mjs'));
const ledger = countDir(path.join(ROOT, 'memory', 'ledger'), (f) => f.endsWith('.md') && f !== 'README.md');
const quar = countDir(path.join(ROOT, 'memory', 'ledger', 'quarantine'), (f) => f.endsWith('.md') && f !== 'README.md');
const cmdInstalled = fs.existsSync(path.join(os.homedir(), '.claude', 'commands', 'aieos.md'));
const isGit = fs.existsSync(path.join(ROOT, '.git'));
const branch = isGit ? sh('git', ['rev-parse', '--abbrev-ref', 'HEAD']) : '';
const dirty = isGit ? sh('git', ['status', '--porcelain']).length > 0 : false;
const hasRemote = isGit ? !!sh('git', ['remote']) : false;

const remoteVer = await remoteVersion();
const upd = remoteVer == null ? 'unknown (offline?)' : (cmpVer(remoteVer, ver) > 0 ? `update available → ${remoteVer}  (run: aieos update)` : 'up to date');

const line = (k, v) => `  ${(k + ':').padEnd(16)} ${v}`;
console.log('');
console.log('  ┌─ AIEOS — System Status ───────────────────────────');
console.log(line('Version', `${ver}   (${upd})`));
console.log(line('Install root', ROOT));
console.log(line('Conformance', `${rules} rules`));
console.log(line('Memory', `${ledger} ledger entr${ledger === 1 ? 'y' : 'ies'}, ${quar} quarantined`));
console.log(line('/aieos command', cmdInstalled ? 'installed (machine-wide)' : 'not installed — run: aieos setup'));
console.log(line('Git', isGit ? `${branch}${dirty ? ' (uncommitted changes)' : ' (clean)'}${hasRemote ? '' : ', no remote'}` : 'not a git checkout (installed copy)'));
console.log(line('Node', process.version));
console.log('  └───────────────────────────────────────────────────');
console.log('');
