// app/api/receipts/demo/route.ts
import { NextRequest } from 'next/server';
import { canonicalJSONStringify, sha256Hex, deriveEntryHash, loadSigningKey, signEd25519, b64u } from '@/lib/receipt';

export async function POST(req: NextRequest) {
  try {
    const { actor = 'demo@ycq', intent = 'verify-demo', inputs, outputs, prev_hash } = await req.json();
    
    // 1) Build payload (what we sign). Keep fields stable + sorted.
    const payloadObj = {
      ts: new Date().toISOString(),
      actor, 
      intent,
      inputs, 
      outputs,
    } as const;
    const payloadStr = canonicalJSONStringify(payloadObj);

    // 2) Hash inputs/outputs (hex)
    const inputs_hash = sha256Hex(Buffer.from(typeof inputs === 'string' ? inputs : JSON.stringify(inputs)));
    const outputs_hash = sha256Hex(Buffer.from(typeof outputs === 'string' ? outputs : JSON.stringify(outputs)));

    // 3) prev_hash: use provided or zeroes for demo genesis
    const prev = (typeof prev_hash === 'string' && prev_hash.match(/^[0-9a-fA-F]+$/)) ? prev_hash.toLowerCase() : '0'.repeat(64);

    // 4) entry hash (hex)
    const entry_hash = deriveEntryHash(prev, inputs_hash, outputs_hash);

    // 5) Signature over payload (Ed25519)
    const { priv, pubB64u } = loadSigningKey();
    const sig = signEd25519(priv, Buffer.from(payloadStr, 'utf8'));

    const receipt = {
      payload: payloadStr,
      inputs_hash,
      outputs_hash,
      prev_hash: prev,
      entry_hash,
      ed25519_pubkey: pubB64u || 'SET_RECEIPT_VERIFY_PUBKEY_B64U',
      ed25519_sig: b64u(sig),
      policy_id: 'demo.v1',
      guardrail_action: 'none',
      ledger_height: 0,
      _note: 'Demo receipt for verifier — do not use in production.'
    };

    return new Response(JSON.stringify(receipt, null, 2), { 
      status: 200, 
      headers: { 'content-type': 'application/json' } 
    });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { 
      status: 400,
      headers: { 'content-type': 'application/json' }
    });
  }
}