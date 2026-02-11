"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DEMO_URL, CONTACT_EMAIL, API_URL } from "@/lib/site";
import { 
  Shield, 
  ExternalLink,
  Code,
  Key,
  Link as LinkIcon,
  FileJson,
  Copy,
  CheckCircle2,
  Terminal,
  Lock,
  Fingerprint,
  GitBranch
} from "lucide-react";

export default function DevelopersPage() {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const copyToClipboard = (text: string, section: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const sampleReceipt = `{
  "self_hash": "f860961876968f2c4a7b3d...",
  "timestamp": 1707667200000,
  "session_id": "sess_abc123",
  "agent_id": "agent_xyz789",
  "interaction": {
    "prompt": "What is the capital of France?",
    "response": "The capital of France is Paris."
  },
  "ciq_metrics": {
    "clarity": 0.95,
    "integrity": 0.92,
    "quality": 0.94
  },
  "trust_score": 94,
  "chain": {
    "previous_hash": "715799d2fb16c4b6...",
    "chain_hash": "a3b8c9d0e1f2..."
  },
  "signature": {
    "algorithm": "Ed25519",
    "value": "f33ee6d928a1b2c3d4e5f6..."
  },
  "issuer": "did:web:yseeku.com",
  "subject": "did:web:yseeku.com:agents:xyz789"
}`;

  const verifyCode = `import { verify } from '@sonate/verify-sdk';

// Fetch the receipt from your backend or SONATE API
const receipt = await fetch('/api/trust/receipts/abc123').then(r => r.json());

// Verify cryptographic signature and chain integrity
const result = await verify(receipt);

if (result.valid) {
  console.log('Trust score:', result.trustScore);
  console.log('Chain intact:', result.chainValid);
} else {
  console.error('Verification failed:', result.errors);
}`;

  const curlGenerate = `curl -X POST ${API_URL}/public-demo/generate \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "What is the capital of France?",
    "response": "The capital of France is Paris."
  }'`;

  const curlVerify = `curl -X POST ${API_URL}/public-demo/verify \\
  -H "Content-Type: application/json" \\
  -d '{"receipt": <your_receipt_json>}'`;

  const curlPublicKey = `curl ${API_URL}/public-demo/public-key`;

  const endpoints = [
    {
      method: "POST",
      path: "/api/public-demo/generate",
      description: "Generate a signed trust receipt for an AI interaction",
      auth: "None (rate limited)",
      request: "{ prompt, response }",
      response: "{ receipt, verification }"
    },
    {
      method: "POST",
      path: "/api/public-demo/verify",
      description: "Verify a trust receipt's signature and chain integrity",
      auth: "None",
      request: "{ receipt }",
      response: "{ valid, checks[], trustScore }"
    },
    {
      method: "GET",
      path: "/api/public-demo/public-key",
      description: "Get the Ed25519 public key for independent verification",
      auth: "None",
      request: "-",
      response: "{ publicKey, algorithm, keyId }"
    },
    {
      method: "GET",
      path: "/.well-known/did.json",
      description: "W3C DID Document for platform identity",
      auth: "None",
      request: "-",
      response: "DID Document (JSON-LD)"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] bg-green-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-heading font-bold tracking-tight">SONATE</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/how-it-works" className="text-sm font-medium text-white/60 hover:text-white transition-colors">How It Works</Link>
            <Link href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Try Demo</Link>
            <Link href="/developers" className="text-sm font-medium text-white transition-colors">Developers</Link>
            <Link href="/roadmap" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Roadmap</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href={`mailto:${CONTACT_EMAIL}?subject=SONATE Pilot Interest`}>
              <Button size="sm">Request Pilot</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero */}
        <section className="pt-20 pb-12 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <Code className="w-4 h-4 text-green-400" />
              <span className="text-xs font-medium text-green-400 uppercase tracking-widest">For Developers</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              Technical Documentation
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mb-8">
              Everything you need to integrate SONATE trust receipts into your application. Verify AI interactions with cryptographic proof.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="https://github.com/s8ken/sonate-verify-sdk" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2">
                  <GitBranch className="w-4 h-4" />
                  View SDK on GitHub
                </Button>
              </Link>
              <Link href="/verify">
                <Button variant="outline" className="gap-2">
                  <Fingerprint className="w-4 h-4" />
                  Try Verification
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-12 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
              <Terminal className="w-6 h-6 text-green-400" />
              Quick Start
            </h2>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/60">Install the SDK (MIT License)</span>
                  <button 
                    onClick={() => copyToClipboard('npm install @sonate/verify-sdk', 'install')}
                    className="text-xs text-white/40 hover:text-white flex items-center gap-1"
                  >
                    {copiedSection === 'install' ? <CheckCircle2 className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    {copiedSection === 'install' ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <div className="bg-white/5 rounded-lg border border-white/10 p-4 font-mono text-sm">
                  <span className="text-green-400">npm</span> install @sonate/verify-sdk
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/60">Verify a receipt (5 lines)</span>
                  <button 
                    onClick={() => copyToClipboard(verifyCode, 'verify')}
                    className="text-xs text-white/40 hover:text-white flex items-center gap-1"
                  >
                    {copiedSection === 'verify' ? <CheckCircle2 className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    {copiedSection === 'verify' ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <pre className="bg-white/5 rounded-lg border border-white/10 p-4 font-mono text-sm overflow-x-auto">
                  <code className="text-white/80">{verifyCode}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-12 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
              <LinkIcon className="w-6 h-6 text-blue-400" />
              API Endpoints
            </h2>
            
            <p className="text-white/60 mb-6">
              Base URL: <code className="text-blue-400 bg-white/5 px-2 py-1 rounded">{API_URL.replace('/api', '')}</code>
            </p>

            <div className="space-y-4">
              {endpoints.map((endpoint, i) => (
                <div key={i} className="glass-card p-4">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className={`text-xs font-mono px-2 py-1 rounded ${
                      endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-sm text-white/80">{endpoint.path}</code>
                    <span className="text-xs text-white/40">Auth: {endpoint.auth}</span>
                  </div>
                  <p className="text-sm text-white/60 mb-2">{endpoint.description}</p>
                  <div className="flex gap-4 text-xs text-white/40">
                    <span>Request: <code className="text-white/60">{endpoint.request}</code></span>
                    <span>Response: <code className="text-white/60">{endpoint.response}</code></span>
                  </div>
                </div>
              ))}
            </div>

            {/* cURL Examples */}
            <div className="mt-8 space-y-4">
              <h3 className="text-lg font-heading font-semibold">cURL Examples</h3>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/60">Generate a receipt</span>
                  <button 
                    onClick={() => copyToClipboard(curlGenerate, 'curl-gen')}
                    className="text-xs text-white/40 hover:text-white flex items-center gap-1"
                  >
                    {copiedSection === 'curl-gen' ? <CheckCircle2 className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
                <pre className="bg-white/5 rounded-lg border border-white/10 p-4 font-mono text-xs overflow-x-auto">
                  <code className="text-white/80">{curlGenerate}</code>
                </pre>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/60">Get public key</span>
                  <button 
                    onClick={() => copyToClipboard(curlPublicKey, 'curl-key')}
                    className="text-xs text-white/40 hover:text-white flex items-center gap-1"
                  >
                    {copiedSection === 'curl-key' ? <CheckCircle2 className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
                <pre className="bg-white/5 rounded-lg border border-white/10 p-4 font-mono text-xs overflow-x-auto">
                  <code className="text-white/80">{curlPublicKey}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Security Architecture */}
        <section className="py-12 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
              <Lock className="w-6 h-6 text-purple-400" />
              Security Architecture
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Key className="w-5 h-5 text-blue-400" />
                  <h3 className="font-heading font-semibold">Ed25519 Signatures</h3>
                </div>
                <p className="text-sm text-white/60 mb-4">
                  Every receipt is signed with Ed25519, the same algorithm used by SSH, Signal, and Tor. Fast, secure, and independently verifiable.
                </p>
                <ul className="text-sm text-white/50 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    256-bit security level
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    Deterministic signatures
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    Public key at /.well-known/sonate-pubkey
                  </li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <LinkIcon className="w-5 h-5 text-green-400" />
                  <h3 className="font-heading font-semibold">Hash Chains</h3>
                </div>
                <p className="text-sm text-white/60 mb-4">
                  Each receipt links to the previous via SHA-256 chain hash. Modify any receipt and the chain breaks - detectable instantly.
                </p>
                <ul className="text-sm text-white/50 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    Tamper-evident by design
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    Full audit trail
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    Chain verification in SDK
                  </li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Fingerprint className="w-5 h-5 text-amber-400" />
                  <h3 className="font-heading font-semibold">W3C DIDs</h3>
                </div>
                <p className="text-sm text-white/60 mb-4">
                  Decentralized Identifiers for platform and agents. Standard did:web method with public key resolution.
                </p>
                <ul className="text-sm text-white/50 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    Platform DID: did:web:yseeku.com
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    Agent DIDs with controller
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    /.well-known/did.json resolution
                  </li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-5 h-5 text-red-400" />
                  <h3 className="font-heading font-semibold">Trust Scoring</h3>
                </div>
                <p className="text-sm text-white/60 mb-4">
                  6 constitutional principles evaluated in under 50ms. Weighted scores combine into a single trust score (0-100).
                </p>
                <ul className="text-sm text-white/50 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    CIQ metrics (Clarity, Integrity, Quality)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    Real-time evaluation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    Configurable thresholds
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sample Receipt */}
        <section className="py-12 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
              <FileJson className="w-6 h-6 text-amber-400" />
              Sample Trust Receipt
            </h2>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-white/60">Full receipt structure</span>
                <button 
                  onClick={() => copyToClipboard(sampleReceipt, 'receipt')}
                  className="text-xs text-white/40 hover:text-white flex items-center gap-1"
                >
                  {copiedSection === 'receipt' ? <CheckCircle2 className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {copiedSection === 'receipt' ? 'Copied' : 'Copy'}
                </button>
              </div>
              <pre className="bg-white/5 rounded-lg border border-white/10 p-4 font-mono text-xs overflow-x-auto">
                <code className="text-white/80">{sampleReceipt}</code>
              </pre>
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-white/40 mb-1">self_hash</div>
                <div className="text-white/80">SHA-256 of receipt content</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-white/40 mb-1">chain.chain_hash</div>
                <div className="text-white/80">Links to previous receipt</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-white/40 mb-1">signature.value</div>
                <div className="text-white/80">Ed25519 signature (hex)</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-heading font-bold mb-6">Ready to Integrate?</h2>
            <p className="text-white/60 mb-8">
              Get started with the SDK or talk to us about enterprise integration.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://github.com/s8ken/sonate-verify-sdk" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2">
                  <GitBranch className="w-4 h-4" />
                  View SDK
                </Button>
              </Link>
              <Link href={`mailto:${CONTACT_EMAIL}?subject=SONATE Integration`}>
                <Button size="lg" className="gap-2">
                  Contact for Integration <ExternalLink className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-tr from-blue-500 to-purple-600 rounded flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="font-heading font-bold">SONATE</span>
              <span className="text-white/40 text-sm">by YCQ Labs</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/40">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
              <Link href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Try Demo</Link>
              <Link href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
