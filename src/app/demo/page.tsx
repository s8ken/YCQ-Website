import Link from "next/link";
import { CONSOLE_URL } from "@/lib/site";

export default function TechnicalDemo() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-stone-800">Sonate</Link>
              <div className="ml-2 text-sm text-stone-600">Trust Infrastructure</div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/#platform" className="text-stone-700 hover:text-stone-900 px-3 py-2 text-sm font-medium">
                  Platform
                </Link>
                <Link href="/technology" className="text-stone-700 hover:text-stone-900 px-3 py-2 text-sm font-medium">
                  Technology
                </Link>
                <Link href="/demo" className="text-stone-900 px-3 py-2 text-sm font-medium border-b-2 border-amber-600">
                  Technical Demo
                </Link>
                <Link href="/trust-demo" className="text-stone-700 hover:text-stone-900 px-3 py-2 text-sm font-medium">
                     Trust Ledger
                   </Link>
                   <Link href={CONSOLE_URL} target="_blank" rel="noopener noreferrer" className="bg-stone-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-stone-900">
                  Full Platform
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Technical Demo: SYMBI Trust Protocol
            </h1>
            <p className="text-xl text-stone-600 mb-8 max-w-3xl mx-auto">
              Explore cryptographic trust receipts, Ed25519 signatures, and the SYMBI Trust Framework that powers Sonate
            </p>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-10 rounded-xl mb-12 text-white shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-green-500/30 backdrop-blur-sm text-green-100 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-green-400/30">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Live Demo Available Now
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🎯 Interactive Platform Demo
              </h2>
              <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
                Experience Sonate featuring SYMBI Trust Framework live with production-ready trust infrastructure — no signup required
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4">Demo Credentials</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-blue-200 mb-2 font-semibold">User Name:</p>
                    <code className="block bg-black/40 text-green-300 px-4 py-3 rounded-lg font-mono text-base border border-green-500/30">
                      admin
                    </code>
                  </div>
                  <div>
                    <p className="text-sm text-blue-200 mb-2 font-semibold">Password:</p>
                    <code className="block bg-black/40 text-green-300 px-4 py-3 rounded-lg font-mono text-base border border-green-500/30">
                      SONATE_admin_2026!
                    </code>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4">What You'apos;ll Experience</h3>
                <ul className="space-y-2 text-blue-100 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span>Cryptographic trust receipts for every AI interaction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span>Multi-provider AI comparison (OpenAI, Anthropic, Perplexity)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span>Real-time bias detection & compliance scoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span>Interactive audit trail exploration</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link
                href={CONSOLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-4 rounded-lg text-xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Launch Interactive Demo
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
              <p className="text-sm text-blue-200 mt-4">
                Demo Limits: 3 conversations • 10 messages per conversation • Data purged every 24 hours
              </p>
            </div>
          </div>

          {/* DID Resolution Demo */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-8">DID Resolution Across 4 Methods</h2>
            <p className="text-lg text-stone-600 mb-8">
              SYMBI Trust Protocol supports four W3C-compliant DID methods, providing flexibility for different enterprise requirements.
            </p>

            <div className="grid md:grid-cols-1 gap-8 mb-8 max-w-2xl mx-auto">
              <div className="bg-white border border-stone-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-stone-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-3">1</span>
                  did:web
                </h3>
                <p className="text-stone-600 mb-4">Enterprise gold standard - DNS-based, no blockchain required</p>
                <div className="bg-stone-900 p-4 rounded text-sm overflow-x-auto">
                  <pre className="text-green-400">
{`// Resolve a did:web identifier
const did = "did:web:example.com:user:alice"
const result = await resolveDID(did)

// Returns DID Document
{
  "@context": "https://w3id.org/did/v1",
  "id": "did:web:example.com:user:alice",
  "verificationMethod": [{
    "id": "...",
    "type": "Ed25519VerificationKey2020",
    "publicKeyMultibase": "z6Mk..."
  }]
}`}
                  </pre>
                </div>
              </div>

              <div className="bg-white border border-stone-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-stone-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold mr-3">2</span>
                  did:key
                </h3>
                <p className="text-stone-600 mb-4">Zero-infrastructure trust receipts - perfect for testing</p>
                <div className="bg-stone-900 p-4 rounded text-sm overflow-x-auto">
                  <pre className="text-green-400">
{`// Resolve a did:key identifier
const did = "did:key:z6MkhaXgBZDvotDkL..."
const result = await resolveDID(did)

// Self-verifying, no network calls
{
  "@context": "https://w3id.org/did/v1",
  "id": "did:key:z6MkhaXgBZDvotDkL...",
  "verificationMethod": [{
    "type": "Ed25519VerificationKey2020"
  }]
}`}
                  </pre>
                </div>
              </div>

              <div className="bg-white border border-stone-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-stone-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold mr-3">3</span>
                  did:ethr
                </h3>
                <p className="text-stone-600 mb-4">Ethereum-based decentralized identity</p>
                <div className="bg-stone-900 p-4 rounded text-sm overflow-x-auto">
                  <pre className="text-green-400">
{`// Resolve a did:ethr identifier
const did = "did:ethr:0xb9c5714089..."
const result = await resolveDID(did)

// Ethereum registry lookup
{
  "@context": "https://w3id.org/did/v1",
  "id": "did:ethr:0xb9c5714089...",
  "controller": "0xb9c5714089...",
  "verificationMethod": [...]
}`}
                  </pre>
                </div>
              </div>

              <div className="bg-white border border-stone-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-stone-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold mr-3">4</span>
                  did:ion
                </h3>
                <p className="text-stone-600 mb-4">Bitcoin-anchored Sidetree (Microsoft)</p>
                <div className="bg-stone-900 p-4 rounded text-sm overflow-x-auto">
                  <pre className="text-green-400">
{`// Resolve a did:ion identifier
const did = "did:ion:EiClkZMDxPK..."
const result = await resolveDID(did)

// Bitcoin-anchored identity
{
  "@context": "https://w3id.org/did/v1",
  "id": "did:ion:EiClkZMDxPK...",
  "verificationMethod": [...],
  "service": [...]
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Verifiable Credentials Demo */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-8">Verifiable Credentials Issuance</h2>

            <div className="bg-white border border-stone-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-stone-900 mb-4">Issue AI Agent Capability Credential</h3>
              <p className="text-stone-600 mb-6">
                Cryptographically signed credentials that prove AI agent capabilities, training data, and trust scores
              </p>

              <div className="bg-stone-900 p-6 rounded text-sm overflow-x-auto mb-4">
                <pre className="text-green-400">
{`// Issue a Verifiable Credential
const credential = {
  "@context": ["https://www.w3.org/2018/credentials/v1"],
  "type": ["VerifiableCredential", "AIAgentCapability"],
  "issuer": "did:web:ycq.com:issuer",
  "issuanceDate": "2024-10-10T12:00:00Z",
  "credentialSubject": {
    "id": "did:key:z6MkhaXgBZDvotDkL...",
    "agentCapabilities": [
      "natural-language-processing",
      "sentiment-analysis",
      "compliance-checking"
    ],
    "trustScore": 0.94,
    "trainingDataset": "enterprise-2024-v3",
    "accuracyMetrics": {
      "precision": 0.92,
      "recall": 0.89
    }
  },
  "proof": {
    "type": "Ed25519Signature2020",
    "created": "2024-10-10T12:00:00Z",
    "verificationMethod": "did:web:ycq.com:issuer#key-1",
    "proofPurpose": "assertionMethod",
    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..."
  }
}`}
                </pre>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">✓ Verification Steps</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>1. Resolve issuer DID → verify issuer identity</li>
                  <li>2. Verify cryptographic signature → ensure not tampered</li>
                  <li>3. Check revocation status → ensure still valid</li>
                  <li>4. Validate credential schema → ensure compliance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Revocation Demo */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-8">Privacy-Preserving Revocation (Status List 2021)</h2>

            <div className="bg-white border border-stone-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-stone-900 mb-4">Check Credential Revocation Status</h3>
              <p className="text-stone-600 mb-6">
                W3C Status List 2021 allows revocation checking without revealing which credential is being checked (privacy-preserving)
              </p>

              <div className="bg-stone-900 p-6 rounded text-sm overflow-x-auto mb-4">
                <pre className="text-green-400">
{`// Check revocation status
const credential = { /* VC with credentialStatus */ }
const isRevoked = await checkRevocationStatus(credential)

// Status List lookup (bitstring)
{
  "@context": ["https://www.w3.org/2018/credentials/v1"],
  "type": ["VerifiableCredential", "StatusList2021Credential"],
  "issuer": "did:web:ycq.com:issuer",
  "credentialSubject": {
    "type": "StatusList2021",
    "statusPurpose": "revocation",
    "encodedList": "H4sIAAAAAAAAA..."  // Compressed bitstring
  }
}

// Result
{
  "isRevoked": false,
  "statusListIndex": 42,
  "checkedAt": "2024-10-10T12:30:00Z"
}`}
                </pre>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">✓ Privacy Benefits</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• No credential correlation</li>
                    <li>• Batch checking (thousands at once)</li>
                    <li>• Compressed bitstring (efficient)</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">⚡ Performance</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Resolution latency: ~50ms</li>
                    <li>• Cache hit rate: 95%+</li>
                    <li>• Supports 100K+ credentials/list</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Cryptographic Audit Trail */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-8">Cryptographic Audit Trail</h2>

            <div className="bg-white border border-stone-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-stone-900 mb-4">Complete Trust Chain Verification</h3>
              <p className="text-stone-600 mb-6">
                Every trust operation is logged with Ed25519 signatures in Sonate Ledger&apos;s append-only, hash-chained structure
              </p>

              <div className="bg-stone-900 p-6 rounded text-sm overflow-x-auto">
                <pre className="text-green-400">
{`// Example audit log entry
{
  "event_id": "evt_20241010_123045_a7f8b2",
  "timestamp": "2024-10-10T12:30:45.892Z",
  "event_type": "did_resolution",
  "did": "did:web:example.com:user:alice",
  "resolution_method": "did:web",
  "resolution_time_ms": 47,
  "cache_hit": true,
  "signature": {
    "algorithm": "Ed25519",
    "public_key": "3c2a8f9b1e4d...",
    "signature": "9a7f3e2c8b5d..."
  },
  "previous_hash": "sha256:b8c3f7e9a2d4...",
  "current_hash": "sha256:e4f9c2a7d3b8..."
}

// Verify audit trail integrity
const isValid = await verifyAuditChain(eventId)
// Returns: true (all signatures valid, no breaks in hash chain)`}
                </pre>
              </div>
            </div>
          </div>

          {/* Full Flow Example */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-8">Complete Trust Protocol Flow</h2>

            <div className="bg-gradient-to-br from-stone-50 to-blue-50 border border-stone-200 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-stone-900 mb-6">End-to-End AI Agent Verification</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-stone-900 mb-1">Resolve AI Agent DID</h4>
                    <p className="text-stone-600 text-sm">Lookup agent identity using did:web resolver → verify agent exists and retrieve verification methods</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-stone-900 mb-1">Verify Agent Capability Credential</h4>
                    <p className="text-stone-600 text-sm">Check cryptographic signature on capability VC → verify issuer → validate credential schema</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-stone-900 mb-1">Check Revocation Status</h4>
                    <p className="text-stone-600 text-sm">Query Status List 2021 → check bitstring index → confirm credential not revoked</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold text-stone-900 mb-1">Log to Cryptographic Audit Trail</h4>
                    <p className="text-stone-600 text-sm">Sign verification result with Ed25519 → append to Sonate Ledger hash chain → provide immutable audit record</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-stone-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">✓</div>
                  <div>
                    <h4 className="font-semibold text-stone-900 mb-1">Trust Established</h4>
                    <p className="text-stone-600 text-sm">Agent identity verified, capabilities confirmed, revocation checked, audit trail created → ready for trusted AI operations</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white border border-green-200 rounded-lg p-4">
                <p className="text-sm text-green-800">
                  <strong>Total time: ~100ms</strong> • All operations cached for performance • W3C-compliant • Regulator-verifiable
                </p>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-8">Production Performance Metrics</h2>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white border border-stone-200 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">47ms</div>
                <div className="text-sm text-stone-600">Avg DID Resolution</div>
                <div className="text-xs text-stone-500 mt-1">95% cache hit rate</div>
              </div>

              <div className="bg-white border border-stone-200 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-sm text-stone-600">Test Coverage</div>
                <div className="text-xs text-stone-500 mt-1">All 4 DID methods</div>
              </div>

              <div className="bg-white border border-stone-200 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
                <div className="text-sm text-stone-600">DID Methods</div>
                <div className="text-xs text-stone-500 mt-1">web, key, ethr, ion</div>
              </div>

              <div className="bg-white border border-stone-200 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">100K+</div>
                <div className="text-sm text-stone-600">Credentials/List</div>
                <div className="text-xs text-stone-500 mt-1">Status List 2021</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-stone-800 to-stone-700 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Experience Sonate?
            </h2>
            <p className="text-stone-300 mb-6 max-w-2xl mx-auto">
              Launch the interactive platform demo to experience production-ready trust infrastructure in action
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={CONSOLE_URL} target="_blank" rel="noopener noreferrer" className="bg-amber-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-amber-700 transition-colors">
                Launch Interactive Demo →
              </Link>
              <Link href="mailto:stephen@yseeku.com?subject=YCQ Labs Technical Discussion" className="border border-stone-300 text-stone-300 px-8 py-3 rounded-md text-lg font-medium hover:bg-stone-700 transition-colors">
                Schedule Technical Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
