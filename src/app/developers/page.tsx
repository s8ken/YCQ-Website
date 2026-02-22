"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Code,
  Copy,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Key,
  FileCode,
  Terminal,
  Clock,
  Lock,
  AlertCircle,
} from "lucide-react";
import { API_URL, CONTACT_EMAIL } from "@/lib/site";

const installGenerate = "npm install @yseeku/trust-receipts";
const installVerify = "npm install @yseeku/verify-sdk";

const generateExample = `import { TrustReceipts } from "@yseeku/trust-receipts";
import OpenAI from "openai";

const receipts = new TrustReceipts({
  privateKey: process.env.SONATE_PRIVATE_KEY,
  // optional: includeContent: true  → include raw prompt/response
});

const client = new OpenAI();

const { response, receipt } = await receipts.wrap(
  () => client.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: "Hello" }],
  }),
  { sessionId: "user-abc123" }
);

console.log(receipt);     // signed trust receipt
console.log(response);    // original AI response`;

const verifyExample = `import { verify, fetchPublicKey } from "@yseeku/verify-sdk";

// Fetch public key automatically (recommended)
const publicKey = await fetchPublicKey();

const receipt = /* paste receipt JSON here */;

const result = await verify(receipt, publicKey);

if (result.valid) {
  console.log("All checks passed");
  console.log("Trust score:", result.trustScore);
} else {
  console.error("Verification failed:", result.errors);
}`;

const curlGenerate = `curl -X POST ${API_URL}/public-demo/generate \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "Explain quantum computing simply"
  }'`;

const curlVerify = `curl -X POST ${API_URL}/public-demo/verify \\
  -H "Content-Type: application/json" \\
  -d '{
    "receipt": { ...your receipt JSON... }
  }'`;

export default function DevelopersPage() {
  const [copied, setCopied] = useState<string | null>(null);
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [publicKeyLoading, setPublicKeyLoading] = useState(true);
  const [publicKeyError, setPublicKeyError] = useState<string | null>(null);

  useEffect(() => {
    const fetchKey = async () => {
      try {
        const res = await fetch(`${API_URL}/public-demo/public-key`);
        const data = await res.json();
        if (data.success && data.data?.publicKey) {
          setPublicKey(data.data.publicKey);
        } else {
          setPublicKeyError("Failed to load public key");
        }
      } catch (err) {
        setPublicKeyError("Network error");
      } finally {
        setPublicKeyLoading(false);
      }
    };
    fetchKey();
  }, []);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const truncatedKey = publicKey
    ? `${publicKey.substring(0, 12)}...${publicKey.substring(publicKey.length - 12)}`
    : "";

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-black" />
      </div>

      <div className="relative">
        {/* Hero with Live Public Key */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
                <span className="text-sm font-medium text-green-400 uppercase tracking-wide">Open SDK + API</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                <Shield className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-400 uppercase tracking-wide">SSL for AI</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              SONATE Developer Hub
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-8">
              Generate signed trust receipts from any AI call. Verify independently. Zero backend required.
            </p>

            {/* Live Public Key Display */}
            <div className="max-w-2xl mx-auto mb-10 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Key className="w-5 h-5 text-blue-400" />
                  <div className="text-left">
                    <div className="text-sm font-medium text-white/80">Current Ed25519 Public Key</div>
                    {publicKeyLoading ? (
                      <div className="text-xs text-white/50 animate-pulse">Loading key...</div>
                    ) : publicKeyError ? (
                      <div className="text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {publicKeyError}
                      </div>
                    ) : (
                      <div className="text-xs font-mono text-white/70 break-all">
                        {truncatedKey}
                      </div>
                    )}
                  </div>
                </div>

                {!publicKeyLoading && !publicKeyError && publicKey && (
                  <button
                    onClick={() => copyToClipboard(publicKey, 'hero-pubkey')}
                    className="text-xs text-white/60 hover:text-white flex items-center gap-1 px-3 py-1.5 rounded-md border border-white/20 hover:border-white/40 transition-colors"
                  >
                    {copied === 'hero-pubkey' ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    {copied === 'hero-pubkey' ? 'Copied' : 'Copy Full Key'}
                  </button>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#quickstart">
                <Button size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700">
                  <Code className="w-5 h-5" /> Start Building
                </Button>
              </Link>
              <Link href="https://www.npmjs.com/package/@yseeku/trust-receipts" target="_blank">
                <Button size="lg" variant="outline" className="gap-2">
                  SDK on npm <ExternalLink className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Quickstart – SDK Focus */}
        <section id="quickstart" className="py-20 px-6 border-t border-white/5 bg-white/[0.03]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Add Verifiable Trust in Minutes
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                The <code className="font-mono bg-white/10 px-2 py-1 rounded">receipts.wrap()</code> pattern is your core integration. One line. Works everywhere.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Generate */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                    <FileCode className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold">Generate Receipts</h3>
                </div>

                <p className="text-white/70">
                  Wrap any async AI call — get a signed, verifiable receipt automatically.
                </p>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-white/60">Install</span>
                      <button
                        onClick={() => copyToClipboard(installGenerate, 'gen-install')}
                        className="text-xs text-white/40 hover:text-white flex items-center gap-1"
                      >
                        {copied === 'gen-install' ? <CheckCircle2 className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                        {copied === 'gen-install' ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                    <pre className="bg-white/5 rounded-lg border border-white/10 p-4 font-mono text-sm overflow-x-auto">
                      <code>{installGenerate}</code>
                    </pre>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-white/60">OpenAI Example</span>
                      <button
                        onClick={() => copyToClipboard(generateExample, 'gen-example')}
                        className="text-xs text-white/40 hover:text-white flex items-center gap-1"
                      >
                        {copied === 'gen-example' ? <CheckCircle2 className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                        {copied === 'gen-example' ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                    <pre className="bg-white/5 rounded-lg border border-white/10 p-4 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
                      <code>{generateExample}</code>
                    </pre>
                  </div>
                </div>

                <div className="text-sm text-white/50">
                  Full docs → <Link href="https://github.com/s8ken/yseeku-platform/tree/main/packages/trust-receipts" className="text-blue-400 hover:underline">GitHub README</Link>
                </div>
              </div>

              {/* Verify */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <Shield className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold">Verify Receipts</h3>
                </div>

                <p className="text-white/70">
                  Independently validate any receipt — zero backend calls required.
                </p>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-white/60">Install</span>
                      <button
                        onClick={() => copyToClipboard(installVerify, 'ver-install')}
                        className="text-xs text-white/40 hover:text-white flex items-center gap-1"
                      >
                        {copied === 'ver-install' ? <CheckCircle2 className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                        {copied === 'ver-install' ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                    <pre className="bg-white/5 rounded-lg border border-white/10 p-4 font-mono text-sm overflow-x-auto">
                      <code>{installVerify}</code>
                    </pre>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-white/60">Usage</span>
                      <button
                        onClick={() => copyToClipboard(verifyExample, 'ver-example')}
                        className="text-xs text-white/40 hover:text-white flex items-center gap-1"
                      >
                        {copied === 'ver-example' ? <CheckCircle2 className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                        {copied === 'ver-example' ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                    <pre className="bg-white/5 rounded-lg border border-white/10 p-4 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
                      <code>{verifyExample}</code>
                    </pre>
                  </div>
                </div>

                <div className="text-sm text-white/50">
                  Full docs → <Link href="https://github.com/s8ken/yseeku-platform/tree/main/packages/verify-sdk" className="text-blue-400 hover:underline">GitHub README</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Public Demo API
            </h2>
            <p className="text-center text-white/70 mb-12 max-w-3xl mx-auto">
              Test SONATE trust receipts without installing anything. These endpoints power the interactive demo.
            </p>

            <div className="space-y-12">
              {/* Generate */}
              <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Terminal className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-semibold">POST /public-demo/generate</h3>
                </div>
                <p className="text-white/70 mb-4">
                  Generate a trust receipt for any prompt. Returns the AI response + signed receipt.
                </p>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/60">cURL Example</span>
                  <button
                    onClick={() => copyToClipboard(curlGenerate, 'curl-gen')}
                    className="text-xs text-white/40 hover:text-white flex items-center gap-1"
                  >
                    {copied === 'curl-gen' ? <CheckCircle2 className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                    {copied === 'curl-gen' ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <pre className="bg-black/50 rounded-lg p-4 font-mono text-sm overflow-x-auto border border-white/10">
                  <code>{curlGenerate}</code>
                </pre>
              </div>

              {/* Verify */}
              <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-semibold">POST /public-demo/verify</h3>
                </div>
                <p className="text-white/70 mb-4">
                  Verify any trust receipt independently. Returns validation details.
                </p>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/60">cURL Example</span>
                  <button
                    onClick={() => copyToClipboard(curlVerify, 'curl-ver')}
                    className="text-xs text-white/40 hover:text-white flex items-center gap-1"
                  >
                    {copied === 'curl-ver' ? <CheckCircle2 className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                    {copied === 'curl-ver' ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <pre className="bg-black/50 rounded-lg p-4 font-mono text-sm overflow-x-auto border border-white/10">
                  <code>{curlVerify}</code>
                </pre>
              </div>

              {/* Public Key */}
              <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Key className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-semibold">GET /public-demo/public-key</h3>
                </div>
                <p className="text-white/70">
                  Retrieve the current Ed25519 public key used for signing receipts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Model */}
        <section className="py-20 px-6 border-t border-white/5 bg-white/[0.03]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Trust Model
            </h2>
            <div className="prose prose-invert max-w-none space-y-6">
              <p>
                Every receipt is signed with <strong>Ed25519</strong> — fast, secure, and widely audited. The signature covers a deterministic hash of the entire receipt (RFC 8785 canonical JSON + SHA-256).
              </p>
              <p>
                Receipts are <strong>hash-chained</strong>: each new receipt includes the previous receipt's hash, creating an immutable audit trail without needing a blockchain.
              </p>
              <p>
                Identity uses <strong>W3C Decentralized Identifiers (DIDs)</strong> — agent_did and human_did are resolvable via did:web, allowing anyone to fetch the current public key.
              </p>
              <p>
                Verification requires <strong>zero API calls</strong> — just the public key and the receipt JSON.
              </p>
            </div>
          </div>
        </section>

        {/* Performance & Security - Minimal */}
        <section className="py-12 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-heading font-semibold mb-2">Production Guarantees</h3>
              <p className="text-sm text-white/70">Receipt generation &lt;50ms • Verification &lt;1ms • Ed25519 256-bit security • SHA-256 hashing • Zero backend required for verification</p>
            </div>
            <Link href="https://github.com/s8ken/yseeku-platform/blob/main/docs/TRUST_RECEIPT_SPECIFICATION_v1.md" target="_blank" className="whitespace-nowrap">
              <Button variant="outline" size="sm" className="gap-1">
                Full Spec <ExternalLink className="w-3 h-3" />
              </Button>
            </Link>
          </div>
        </section>



        {/* CTA */}
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Build with SONATE?
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Use the open SDK for instant integration, test via the public API, or contact us for enterprise pilots, custom policies, and dashboard access.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://github.com/s8ken/yseeku-platform" target="_blank">
                <Button size="lg" variant="outline" className="gap-2">
                  View Source <ExternalLink className="w-4 h-4" />
                </Button>
              </Link>
              <Link href={`mailto:${CONTACT_EMAIL}?subject=SONATE%20Developer%20-%20Pilot%20Interest`}>
                <Button size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700">
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
