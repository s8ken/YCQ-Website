# YCQ Sonate — 60‑second Trust Receipt Demo

**Goal:** Mint a cryptographically signed Trust Receipt and verify it entirely in your browser.

## Live Demo (Recommended)

### Quick Start
1. Visit **https://yseeku.com/trust-demo**
2. Click the **🎫 Demo Receipt** tab
3. Click **"Generate Demo Receipt"**
4. Click **"Verify in Browser"** → a new tab opens at `/verifier.html` with the receipt pre‑loaded
5. Click **"Verify"** and confirm both checks are **✅ OK**:
   - Entry hash computation (SHA-256 chain)
   - Ed25519 signature validation

### What You're Seeing
- **Cryptographic Signing**: Each receipt is signed with Ed25519 (elliptic curve cryptography)
- **Hash Chain**: `entry_hash = SHA256(prev_hash || inputs_hash || outputs_hash)`
- **Client-Side Verification**: All verification happens in your browser using Web Crypto API
- **Zero Trust**: No backend calls needed for verification - complete transparency

## Local Development

### Prerequisites
```bash
Node.js 20.x or later
pnpm (or npm/yarn)
```

### Setup
```bash
# Clone and install
git clone https://github.com/s8ken/YCQ-Website.git
cd YCQ-Website
pnpm install

# Start development server
pnpm dev
```

### Test Receipt Generation
```bash
# In another terminal, test the API endpoint
curl -X POST http://localhost:3000/api/receipts/demo \
  -H 'content-type: application/json' \
  -d '{"actor":"test@ycq","intent":"verify","inputs":{"q":"hello"},"outputs":{"a":"hi"}}'
```

### Access Local Demo
1. Open http://localhost:3000/trust-demo
2. Click **🎫 Demo Receipt** tab
3. Click **"Generate Demo Receipt"**
4. Click **"Verify in Browser"**

## API Endpoints

### POST /api/receipts/demo
Generate a signed trust receipt.

**Request:**
```json
{
  "actor": "demo@ycq",
  "intent": "verify-demo",
  "inputs": {"query": "What is SYMBI?"},
  "outputs": {"response": "SYMBI is...", "compliance_score": 0.98},
  "prev_hash": "optional_previous_hash_hex"
}
```

**Response:**
```json
{
  "payload": "{&quot;actor&quot;:&quot;demo@ycq&quot;,&quot;inputs&quot;:{...},&quot;intent&quot;:&quot;verify-demo&quot;,&quot;outputs&quot;:{...},&quot;ts&quot;:&quot;2025-11-08T12:00:00.000Z&quot;}",
  "inputs_hash": "sha256_hex_of_inputs",
  "outputs_hash": "sha256_hex_of_outputs",
  "prev_hash": "previous_entry_hash_or_zeros",
  "entry_hash": "sha256(prev||inputs||outputs)",
  "ed25519_pubkey": "base64url_public_key",
  "ed25519_sig": "base64url_signature",
  "policy_id": "demo.v1",
  "guardrail_action": "none",
  "ledger_height": 0,
  "_note": "Demo receipt for verifier — do not use in production."
}
```

### GET /.well-known/ycq-receipt-pubkey
Retrieve the public key for receipt verification.

**Response:**
```json
{
  "ed25519_pubkey_b64u": "base64url_encoded_public_key"
}
```

**Cache:** 10 minutes (`max-age=600`)

## Receipt Structure

### Payload (Signed Content)
The payload is a canonical JSON string containing:
- `ts`: ISO 8601 timestamp
- `actor`: Identity of the actor (user, agent, system)
- `intent`: Purpose of the action
- `inputs`: Input data (hashed separately)
- `outputs`: Output data (hashed separately)

### Hashes
- **inputs_hash**: SHA-256 of canonical JSON inputs
- **outputs_hash**: SHA-256 of canonical JSON outputs
- **prev_hash**: Previous entry's hash (creates chain)
- **entry_hash**: SHA-256(prev_hash || inputs_hash || outputs_hash)

### Signature
- **Algorithm**: Ed25519 (RFC 8032)
- **Signed Data**: The payload string (canonical JSON)
- **Format**: Base64url encoding (no padding)

## Verification Process

### Browser-Based Verification
1. **Parse Receipt**: Extract all fields from JSON
2. **Recompute Entry Hash**:
   ```javascript
   entry_hash = SHA256(
     hex_to_bytes(prev_hash) + 
     hex_to_bytes(inputs_hash) + 
     hex_to_bytes(outputs_hash)
   )
   ```
3. **Verify Signature**:
   ```javascript
   Ed25519.verify(
     public_key,
     payload_bytes,
     signature_bytes
   )
   ```
4. **Check Results**: Both must pass for valid receipt

### What Verification Proves
- ✅ **Authenticity**: Receipt was signed by holder of private key
- ✅ **Integrity**: Content hasn't been tampered with
- ✅ **Non-repudiation**: Signer cannot deny creating receipt
- ✅ **Chain Integrity**: Receipt is part of valid hash chain

## Security Notes

### Demo Environment
- **Purpose**: Demonstration and evaluation only
- **Keys**: Ephemeral keys for demo (production uses managed keys)
- **Data**: Automatically purged every 24 hours
- **Rate Limits**: 50 requests per 15 minutes per IP
- **No PII**: No personal information logged or stored

### Production Deployment
For production use:
1. Generate dedicated Ed25519 keypair
2. Store private key in secret manager (e.g., Vercel environment variables)
3. Set `RECEIPT_SIGNING_PRIVATE_KEY_PEM` environment variable
4. Set `RECEIPT_VERIFY_PUBKEY_B64U` environment variable
5. Enable proper rate limiting and monitoring
6. Implement receipt persistence (optional)

### Cryptographic Properties
- **Ed25519**: Fast, secure, deterministic signatures
- **SHA-256**: Industry-standard hashing (FIPS 140-2)
- **Canonical JSON**: Deterministic serialization prevents malleability
- **Base64url**: URL-safe encoding for web transmission

## Architecture

### Components
```
┌─────────────────┐
│   Browser UI    │
│  (trust-demo)   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Next.js API    │
│ /api/receipts/  │
│     demo        │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Crypto Library │
│  (receipt.ts)   │
│  - Ed25519      │
│  - SHA-256      │
│  - Canonical    │
└─────────────────┘
```

### Verification Flow
```
┌─────────────────┐
│   Receipt JSON  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  verifier.html  │
│  (Web Crypto)   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  ✅ Valid or    │
│  ❌ Invalid     │
└─────────────────┘
```

## Troubleshooting

### Receipt Generation Fails
- Check that the API endpoint is accessible
- Verify environment variables are set (for production)
- Check browser console for error messages
- Ensure rate limits haven't been exceeded

### Verification Fails
- Confirm receipt JSON is complete and valid
- Check that public key matches signing key
- Verify browser supports Web Crypto API
- Try loading example receipt first

### Auto-load Not Working
- Check URL hash format: `#r=base64url_encoded_json`
- Verify localStorage is enabled in browser
- Clear browser cache and try again
- Check browser console for errors

## Additional Resources

### Documentation
- **Metrics Methodology**: https://yseeku.com/metrics-methodology
- **Changelog**: https://yseeku.com/changelog
- **Full Platform**: https://symbi-synergy-pa9k82n5m-ycq.vercel.app

### Technical Details
- **Ed25519**: https://ed25519.cr.yp.to/
- **RFC 8032**: https://datatracker.ietf.org/doc/html/rfc8032
- **Web Crypto API**: https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API

### Support
- **Issues**: https://github.com/s8ken/YCQ-Website/issues
- **Email**: Contact through website

## For YC Reviewers

### What This Demonstrates
1. **Real Technology**: Actual cryptographic implementation, not mockups
2. **Technical Depth**: Ed25519 signatures, SHA-256 hashing, canonical JSON
3. **User Experience**: One-click generation and verification
4. **Transparency**: Complete client-side verification without backend trust
5. **Production Ready**: Proper key management, error handling, security practices

### Key Differentiators
- **Cryptographic Proof**: Not just guidelines - verifiable trust receipts
- **Zero Trust Architecture**: Verification without backend dependency
- **Regulatory Alignment**: Maps to EU AI Act Articles 13, 14, 61
- **Enterprise Ready**: Rate limiting, monitoring, security best practices
- **Open Verification**: Anyone can verify receipts independently

### Testing Checklist
- [ ] Generate demo receipt
- [ ] Copy receipt JSON
- [ ] Verify in browser
- [ ] Check entry hash computation
- [ ] Verify Ed25519 signature
- [ ] Test with modified receipt (should fail)
- [ ] Test localStorage persistence
- [ ] Test URL hash sharing

### Time to Verify
**< 2 minutes** from landing page to verified receipt

---

**Built with Next.js 15, TypeScript, and Web Crypto API**
**© 2024 YCQ Sonate - Enterprise AI Trust Infrastructure**