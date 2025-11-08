'use client';
import { useState } from 'react';

function b64u(str: string) {
  // base64url encode (UTF‑8)
  const b64 = typeof window === 'undefined' ? Buffer.from(str, 'utf8').toString('base64') : btoa(unescape(encodeURIComponent(str)));
  return b64.replace(/=+$/,'').replace(/\+/g,'-').replace(/\//g,'_');
}

export default function ReceiptDemo() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [receipt, setReceipt] = useState<string>('');

  async function getDemoReceipt() {
    setLoading(true); setError(null);
    try {
      const res = await fetch('/api/receipts/demo', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ actor: 'demo@ycq', intent: 'verify-demo', inputs: { q: 'hello world' }, outputs: { a: 'hi!' } })
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.text();
      setReceipt(json);
      try { localStorage.setItem('ycq_last_receipt', json); } catch {}
    } catch (e: any) {
      setError(e.message || 'Failed to fetch receipt');
    } finally {
      setLoading(false);
    }
  }

  function openVerifier() {
    if (!receipt) return setError('Fetch a demo receipt first.');
    const hash = '#r=' + b64u(receipt);
    window.open('/verifier.html' + hash, '_blank', 'noopener');
  }

  function copyReceipt() {
    if (!receipt) return;
    navigator.clipboard.writeText(receipt).catch(() => {});
  }

  return (
    <div className="not-prose max-w-3xl mx-auto space-y-4">
      <div className="rounded-2xl border p-4">
        <h2 className="text-lg font-semibold">Trust Ledger Demo</h2>
        <p className="text-sm text-zinc-600">1) Mint a signed demo Trust Receipt. 2) Verify it in your browser (no server calls).</p>
        <div className="mt-3 flex gap-2">
          <button onClick={getDemoReceipt} disabled={loading} className="px-3 py-2 rounded-xl border bg-white hover:bg-zinc-50 disabled:opacity-50">{loading ? 'Minting…' : 'Get Demo Receipt'}</button>
          <button onClick={copyReceipt} className="px-3 py-2 rounded-xl border bg-white hover:bg-zinc-50">Copy</button>
          <button onClick={openVerifier} className="px-3 py-2 rounded-xl border bg-white hover:bg-zinc-50">Verify in Browser</button>
        </div>
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        <textarea className="mt-3 w-full min-h-[220px] text-sm font-mono bg-zinc-50 border rounded-xl p-3" value={receipt} onChange={(e)=>setReceipt(e.target.value)} placeholder="Demo receipt JSON will appear here…" />
        <p className="mt-2 text-xs text-zinc-500">Tip: We also saved the last receipt to <code>localStorage</code> as <code>ycq_last_receipt</code>.</p>
      </div>
    </div>
  );
}