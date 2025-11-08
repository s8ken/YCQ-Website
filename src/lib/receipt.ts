// lib/receipt.ts
import { createHash, createPrivateKey, generateKeyPairSync, sign as nodeSign, KeyObject } from 'crypto';

export function sha256Hex(bytes: Uint8Array | Buffer): string {
  return createHash('sha256').update(bytes).digest('hex');
}

export function hex(bytes: Uint8Array | Buffer): string {
  return Buffer.from(bytes).toString('hex');
}

export function fromHex(h: string): Buffer {
  return Buffer.from(h.replace(/^0x/, ''), 'hex');
}

export function b64u(buf: Uint8Array | Buffer): string {
  return Buffer.from(buf).toString('base64').replace(/=+$/,'').replace(/\+/g,'-').replace(/\//g,'_');
}

export function fromB64u(s: string): Buffer {
  const pad = s.length % 4 === 0 ? '' : '='.repeat(4 - (s.length % 4));
  return Buffer.from(s.replace(/-/g,'+').replace(/_/g,'/') + pad, 'base64');
}

// Deterministic, UTF‑8, no whitespace: canonical JSON string
export function canonicalJSONStringify(obj: any): string {
  return JSON.stringify(obj, Object.keys(obj).sort());
}

export function deriveEntryHash(prev_hash: string, inputs_hash: string, outputs_hash: string): string {
  const prev = fromHex(prev_hash);
  const ih = fromHex(inputs_hash);
  const oh = fromHex(outputs_hash);
  const concat = Buffer.concat([prev, ih, oh]);
  return sha256Hex(concat);
}

export function loadSigningKey(): { priv: KeyObject; pubB64u: string } {
  // 1) PEM wins if provided
  const pem = process.env.RECEIPT_SIGNING_PRIVATE_KEY_PEM;
  if (pem) {
    const priv = createPrivateKey(pem);
    const pubB64u = process.env.RECEIPT_VERIFY_PUBKEY_B64U || '';
    return { priv, pubB64u };
  }
  
  // 2) For dev/demo: generate ephemeral keypair
  // WARNING: Do not use in production - use PEM-encoded key from secret manager
  const { publicKey, privateKey } = generateKeyPairSync('ed25519');
  
  // Export public key as base64url for demo purposes
  const pubDer = publicKey.export({ type: 'spki', format: 'der' });
  // Ed25519 public key is last 32 bytes of SPKI DER
  const pubRaw = pubDer.slice(-32);
  const pubB64u = b64u(pubRaw);
  
  console.warn('⚠️  Using ephemeral Ed25519 keypair for demo. Set RECEIPT_SIGNING_PRIVATE_KEY_PEM in production.');
  
  return { priv: privateKey, pubB64u };
}

export function signEd25519(priv: KeyObject, message: Buffer): Buffer {
  return nodeSign(null, message, priv); // null → Ed25519/Ed448 ignore digest
}