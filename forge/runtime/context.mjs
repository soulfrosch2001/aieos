// Forge runtime — virtual context. trimMessages (llm.mjs) keeps long runs inside the
// context budget by DROPPING the oldest middle turns — information gone for good. This
// module makes that loss recoverable: every dropped turn is archived as an indexable
// document, and each subsequent step can pull back the archived slices relevant to what
// the run is doing RIGHT NOW. The model effectively gets an unbounded transcript, paged
// by relevance — the same trick the opening memory block plays with repo memory, applied
// to the run's own history. Pure and model-free: reuses the BM25 retriever from
// memory.mjs, no I/O, identical under --dry-run.
import { retrieve } from './memory.mjs';

// Fold dropped messages into the archive as retrievable docs. Skips the elision markers
// trimMessages itself inserts (they carry no content worth recalling). `now` stamps
// mtimeMs so the retriever's recency decay favours recently-dropped turns.
export function archiveTurns(archive, dropped, now = Date.now()) {
  for (const m of dropped || []) {
    const text = flattenContent(m.content);
    if (!text || text.startsWith('[runtime: trimmed')) continue;
    archive.push({
      source: 'run-transcript',
      title: `earlier ${m.role} turn`,
      text,
      mtimeMs: now,
    });
  }
  return archive;
}

// Retrieve the archived turns most relevant to `query` and format them as an observation
// block, or '' when nothing scores. k stays small and excerpts are capped — this is a
// recall aid threaded into every remaining turn's budget, not a second transcript.
export function recallFromArchive(archive, query, { k = 2, maxCharsPerHit = 500 } = {}) {
  if (!archive.length || !query) return '';
  const hits = retrieve(query, archive, { k });
  if (!hits.length) return '';
  const parts = [
    '[archived context recall — turns trimmed from this run\'s own transcript, ' +
    'resurfaced because they match what you are doing now]',
  ];
  for (const h of hits) {
    const t = h.text.length > maxCharsPerHit ? h.text.slice(0, maxCharsPerHit) + '…' : h.text;
    parts.push(`--- ${h.title} ---\n${t}`);
  }
  return parts.join('\n');
}

// Flatten a message's content (string or block array) to plain text: text blocks verbatim;
// tool calls and results as compact one-liners so a recalled turn still says what it DID,
// not just what it said.
function flattenContent(content) {
  if (typeof content === 'string') return content.trim();
  if (!Array.isArray(content)) return '';
  const parts = [];
  for (const b of content) {
    if (b.type === 'text' && b.text) parts.push(b.text);
    else if (b.type === 'tool_use') parts.push(`(called ${b.name} ${clipJson(b.input)})`);
    else if (b.type === 'tool_result') parts.push(`(result: ${clipStr(b.content)})`);
  }
  return parts.join('\n').trim();
}

function clipJson(v) {
  const s = JSON.stringify(v || {});
  return s.length > 200 ? s.slice(0, 197) + '...' : s;
}

function clipStr(v) {
  const s = typeof v === 'string' ? v : JSON.stringify(v);
  return s.length > 300 ? s.slice(0, 297) + '...' : s;
}
