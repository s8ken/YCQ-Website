// app/.well-known/ycq-receipt-pubkey/route.ts
export async function GET() {
  const key = process.env.RECEIPT_VERIFY_PUBKEY_B64U || 'MISSING_PUBKEY';
  return new Response(JSON.stringify({ ed25519_pubkey_b64u: key }), {
    headers: { 
      'content-type': 'application/json', 
      'cache-control': 'public, max-age=600' 
    }
  });
}