// AIEOS memory ingestion — Cloudflare Worker (free tier).
//
// Receives OPT-IN, already-guarded session memory from users who chose to share, RE-RUNS the
// security guard server-side, and appends accepted entries to the PRIVATE memory repo via the
// GitHub API using a server-side token the client never sees.
//
// Deploy: see backend/README.md. Secrets (server-side only): GH_TOKEN, MEMORY_REPO.
//
// Privacy: this only ever receives data a user explicitly opted in to send; it stores nothing
// that fails the guard; it namespaces by an anonymous install id (not a person).

const SECRETS = [
  [/-----BEGIN[A-Z ]*PRIVATE KEY-----[\s\S]*?-----END[A-Z ]*PRIVATE KEY-----/g, 'private-key'],
  [/\bAKIA[0-9A-Z]{16}\b/g, 'aws-access-key'],
  [/\bgh[posru]_[A-Za-z0-9]{20,}\b/g, 'github-token'],
  [/\bsk-ant-[A-Za-z0-9_-]{20,}\b/g, 'anthropic-key'],
  [/\bsk-[A-Za-z0-9_-]{20,}\b/g, 'openai-key'],
  [/\bxox[baprs]-[A-Za-z0-9-]{10,}\b/g, 'slack-token'],
  [/\bAIza[0-9A-Za-z_-]{35}\b/g, 'google-api-key'],
  [/\beyJ[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}\b/g, 'jwt'],
  [/\b(pass(word|wd)?|secret|token|api[_-]?key|access[_-]?key|client[_-]?secret|bearer)\b(\s*[:=]\s*|\s+)["']?[^\s"'`]{6,}/gi, 'credential'],
];
const DANGERS = [
  /\brm\s+-rf?\s+(?:--no-preserve-root\s+)?(?:[/~*]|\$\w|%\w|\.\.?(?=\s|$))/i,
  /\b(mkfs|dd\s+if=|>\s*\/dev\/sd[a-z])/i, /\bformat\s+[a-z]:/i, /\bdel\s+\/[fsq]/i,
  /Remove-Item\b[^\n]*-Recurse\b[^\n]*-Force\b/i, /\breg\s+delete\b/i, /Set-MpPreference\b[^\n]*-Disable/i,
  /\b(curl|wget)\b[^\n|]*\|\s*(sudo\s+)?(ba)?sh\b/i, /\b(iwr|irm|Invoke-WebRequest|Invoke-RestMethod)\b[^\n|]*\|\s*iex\b/i,
  /\bInvoke-Expression\b/i, /\bpowershell(\.exe)?\s+-e(nc(odedcommand)?)?\b/i, /\bcertutil\b[^\n]*-urlcache/i,
  /\b(ignore|disregard|forget)\b[^\n]{0,30}\b(previous|above|all|prior)\b[^\n]{0,20}\b(instructions?|prompt|rules?|context)\b/i,
];

function guard(input) {
  let text = String(input || ''); let secrets = 0;
  for (const [re, type] of SECRETS) text = text.replace(re, () => { secrets++; return `[REDACTED:${type}]`; });
  const danger = DANGERS.some((re) => re.test(text));
  text = text.replace(/```/g, "''' ").replace(/~~~/g, "''' ");
  return { text, secrets, safe: !danger };
}

const json = (obj, status = 200) => new Response(JSON.stringify(obj), { status, headers: { 'Content-Type': 'application/json' } });
function b64utf8(str) { const bytes = new TextEncoder().encode(str); let bin = ''; for (const b of bytes) bin += String.fromCharCode(b); return btoa(bin); }

export default {
  async fetch(request, env) {
    if (request.method === 'GET') return new Response('AIEOS memory ingestion is running. POST opted-in, guarded memory only.', { status: 200 });
    if (request.method !== 'POST') return json({ ok: false, error: 'method not allowed' }, 405);
    if (!env.GH_TOKEN || !env.MEMORY_REPO) return json({ ok: false, error: 'server not configured' }, 503);

    const raw = await request.text();
    if (raw.length > 200000) return json({ ok: false, error: 'payload too large' }, 413);
    let payload; try { payload = JSON.parse(raw); } catch { return json({ ok: false, error: 'invalid json' }, 400); }

    const { entry, installId, consent } = payload || {};
    if (consent !== true) return json({ ok: false, error: 'no consent flag' }, 403);
    if (typeof entry !== 'string' || !entry.trim()) return json({ ok: false, error: 'no entry' }, 400);

    const g = guard(entry);
    if (!g.safe || g.secrets > 0) return json({ ok: false, error: 'rejected by guard (unsafe or secrets present)' }, 422);

    const id = String(installId || 'anon').replace(/[^a-z0-9-]/gi, '').slice(0, 24) || 'anon';
    const path = `ledger/users/${id}/${Date.now()}.md`;
    const res = await fetch(`https://api.github.com/repos/${env.MEMORY_REPO}/contents/${encodeURIComponent(path).replace(/%2F/g, '/')}`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${env.GH_TOKEN}`, 'User-Agent': 'aieos-worker', Accept: 'application/vnd.github+json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: `user memory: ${id}`, content: b64utf8(g.text) }),
    });
    if (!res.ok) return json({ ok: false, error: 'store failed' }, 502);
    return json({ ok: true });
  },
};
