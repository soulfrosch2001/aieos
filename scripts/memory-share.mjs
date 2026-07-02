#!/usr/bin/env node
// AIEOS memory sharing — OPT-IN, default OFF. Lets a user choose to send their guarded session
// memory to the maintainer's ingestion endpoint (see backend/). Nothing is ever sent unless the
// user explicitly turned it on AND an endpoint is configured. Only guard-safe entries are sent.
//
//   aieos memory:share --on       # consent + enable
//   aieos memory:share --off      # disable
//   aieos memory:share --status   # show state
//   aieos memory:share            # send any new safe entries (used by the autopilot)
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import https from 'node:https';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import guard from './lib/memory-guard.mjs';

const AIEOS_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CONSENT = path.join(os.homedir(), '.claude', 'aieos-memory-consent.json');
const CENTRAL = path.join(os.homedir(), '.claude', 'aieos-memory', 'ledger');
const LEDGER = fs.existsSync(CENTRAL) ? CENTRAL : path.join(AIEOS_ROOT, 'memory', 'ledger');

function pkg() { try { return JSON.parse(fs.readFileSync(path.join(AIEOS_ROOT, 'package.json'), 'utf8')); } catch { return {}; } }
const endpoint = () => process.env.AIEOS_MEMORY_ENDPOINT || pkg().memoryEndpoint || '';
// Default OFF (opt-in): if the user has never made an explicit choice, sharing is DISABLED —
// nothing is ever sent until they run `aieos memory:share --on`. An explicit choice is always
// respected. Opt-in keeps the system honest with Directive #11 (never collect without consent).
function loadState() { try { return JSON.parse(fs.readFileSync(CONSENT, 'utf8')); } catch { return { sharing: false, installId: null, sent: [] }; } }
function saveState(s) { try { fs.mkdirSync(path.dirname(CONSENT), { recursive: true }); fs.writeFileSync(CONSENT, JSON.stringify(s, null, 2)); } catch { /* ignore */ } }

const arg = process.argv[2];
const state = loadState();

if (arg === '--on') {
  console.log('\n── Compartilhar memória com o AIEOS (opcional) ──────────────');
  console.log('Ao ativar, o AIEOS enviará um RESUMO já protegido das suas sessões para o mantenedor,');
  console.log('para melhorar o sistema. O que é enviado:');
  console.log('  • apenas resumos que passam pelo GUARDA (segredos/senhas são removidos);');
  console.log('  • um id anônimo de instalação (não identifica você);');
  console.log('  • nada de conteúdo perigoso (fica em quarentena, nunca sai).');
  console.log('Você pode desligar quando quiser: aieos memory:share --off');
  state.sharing = true;
  state.installId = state.installId || crypto.randomUUID();
  saveState(state);
  console.log('\n✓ Compartilhamento ATIVADO. Obrigado! (id: ' + state.installId.slice(0, 8) + '…)\n');
  process.exit(0);
}
if (arg === '--off') { state.sharing = false; saveState(state); console.log('Compartilhamento DESATIVADO. Sua memória fica só no seu computador.'); process.exit(0); }
if (arg === '--status') {
  console.log(`sharing: ${state.sharing ? 'ON' : 'OFF'} | endpoint: ${endpoint() ? 'set' : 'not set'} | sent: ${(state.sent || []).length}`);
  process.exit(0);
}

// Default: send new safe entries (no-op if turned off, or no endpoint configured).
if (!state.sharing) process.exit(0);
const url = endpoint();
if (!url) process.exit(0);
if (!fs.existsSync(LEDGER)) process.exit(0);
if (!state.installId) { state.installId = crypto.randomUUID(); saveState(state); } // anonymous id on first send

function post(body) {
  return new Promise((resolve) => {
    try {
      const u = new URL(url); const data = JSON.stringify(body);
      const req = https.request({ hostname: u.hostname, path: u.pathname + u.search, port: 443, method: 'POST', timeout: 15000,
        headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(data) } },
        (r) => { let d = ''; r.on('data', (c) => (d += c)); r.on('end', () => resolve({ status: r.statusCode })); });
      req.on('error', () => resolve({ status: 0 })); req.on('timeout', () => { req.destroy(); resolve({ status: 0 }); });
      req.write(data); req.end();
    } catch { resolve({ status: 0 }); }
  });
}

const sent = new Set(state.sent || []);
const entries = fs.readdirSync(LEDGER).filter((f) => f.endsWith('.md') && f !== 'README.md' && !sent.has(f));
for (const f of entries) {
  let text; try { text = fs.readFileSync(path.join(LEDGER, f), 'utf8'); } catch { continue; }
  const g = guard(text);
  if (!g.safe || g.secrets > 0 || /^safe-to-publish:\s*false\s*$/im.test(text)) continue; // never send unsafe
  const res = await post({ entry: g.text, installId: state.installId, consent: true });
  if (res.status === 200) { sent.add(f); }
}
state.sent = [...sent];
saveState(state);
process.exit(0);
