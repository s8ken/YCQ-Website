"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL, API_URL } from "@/lib/site";
import TrustLedgerDemo from "@/components/TrustLedgerDemo";
import {
  Shield,
  Fingerprint,
  CheckCircle2,
  AlertCircle,
  Copy,
  Code,
  ArrowRight,
  Key
} from "lucide-react";

const installCommand = "npm install @sonate/trust-receipts";

const wrapExample = `import { wrap } from "@sonate/trust-receipts";
import OpenAI from "openai";

const client = wrap(new OpenAI(), {
  agent: "did:web:yseeku.com:agents:my-agent",
  policy: "default",
});

// Every call now returns a trust receipt
const res = await client.chat.completions.create({
  model: "gpt-4o",
  messages: [{ role: "user", content: "Hello" }],
});

console.log(res.receipt); // { id, signature, trust_score, ... }`;

const BACKEND_API = API_URL.replace('/api', '');

export default function TrustDemoPage() {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [publicKeyLoading, setPublicKeyLoading] = useState(true);

  useEffect(() => {
    fetch(`${BACKEND_API}/api/public-demo/public-key`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data?.publicKey) {
          setPublicKey(data.data.publicKey);
        }
      })
      .catch(() => {})
      .finally(() => setPublicKeyLoading(false));
  }, []);

  const copyToClipboard = (text: string, section: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2000);
  };
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10">
        {/* Hero */}
        <section className="pt-16 pb-8 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium text-green-400 uppercase tracking-widest">Interactive Demo</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                <Shield className="w-3 h-3 text-blue-400" />
                <span className="text-xs font-medium text-blue-400 uppercase tracking-widest">SSL for AI Interactions</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 leading-tight">
              Trust Receipt Demo
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
              See how SONATE generates cryptographic trust receipts for AI interactions — like SSL certificates, but for every AI call.
            </p>
          </div>
        </section>

        {/* Demo Component */}
        <section className="px-6 pb-16">
          <div className="max-w-5xl mx-auto">
            <div className="glass-card p-6 md:p-8">
              <TrustLedgerDemo />
            </div>
          </div>
        </section>

        {/* How It Works Mini */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-heading font-bold mb-8 text-center">What Just Happened?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card p-6">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                  <Fingerprint className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="font-heading font-semibold mb-2">Receipt Generated</h3>
                <p className="text-sm text-white/50">
                  A SHA-256 hash was created from your message, the AI response, timestamp, and trust scores. This is your cryptographic proof.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="font-heading font-semibold mb-2">Trust Evaluated</h3>
                <p className="text-sm text-white/50">
                  The AI response was scored against six enforceable governance constraints. The weighted average produced the trust score you see.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                  <AlertCircle className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="font-heading font-semibold mb-2">Policy Checked</h3>
                <p className="text-sm text-white/50">
                  If the trust score fell below the threshold (default: 70), it would be flagged as PARTIAL or FAIL with alerts triggered.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SDK Code Snippet */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                <Code className="w-3 h-3 text-blue-400" />
                <span className="text-xs font-medium text-blue-400 uppercase tracking-widest">Developer SDK</span>
              </div>
              <h2 className="text-2xl font-heading font-bold mb-3">Integrate in Your App</h2>
              <p className="text-white/60 max-w-xl mx-auto">
                Add trust receipts to any AI integration in minutes. One line wraps your existing OpenAI client.
              </p>
            </div>

            {/* Public Key */}
            <div className="glass-card p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Key className="w-5 h-5 text-blue-400" />
                  <div>
                    <div className="text-sm font-medium">SONATE Public Key (Ed25519)</div>
                    <div className="text-xs text-white/40 font-mono">
                      {publicKeyLoading ? 'Loading...' : (
                        publicKey ? `${publicKey.substring(0, 16)}...${publicKey.substring(publicKey.length - 16)}` : 'Unavailable'
                      )}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => publicKey && copyToClipboard(publicKey, 'pubkey')}
                  disabled={!publicKey}
                  className="text-xs text-white/40 hover:text-white flex items-center gap-1 disabled:opacity-30"
                >
                  {copiedSection === 'pubkey' ? <CheckCircle2 className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {copiedSection === 'pubkey' ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {/* Install command */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/60">Install</span>
                  <button
                    onClick={() => copyToClipboard(installCommand, 'install')}
                    className="text-xs text-white/40 hover:text-white flex items-center gap-1"
                  >
                    {copiedSection === 'install' ? <CheckCircle2 className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    {copiedSection === 'install' ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <pre className="bg-white/5 rounded-lg border border-white/10 p-4 font-mono text-sm overflow-x-auto">
                  <code className="text-white/80">{installCommand}</code>
                </pre>
              </div>

              {/* Wrap example */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/60">Wrap your AI client</span>
                  <button
                    onClick={() => copyToClipboard(wrapExample, 'wrap')}
                    className="text-xs text-white/40 hover:text-white flex items-center gap-1"
                  >
                    {copiedSection === 'wrap' ? <CheckCircle2 className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    {copiedSection === 'wrap' ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <pre className="bg-white/5 rounded-lg border border-white/10 p-4 font-mono text-sm overflow-x-auto">
                  <code className="text-white/80">{wrapExample}</code>
                </pre>
              </div>
            </div>

            <div className="text-center mt-6">
              <Link href="/developers" className="text-sm text-blue-400 hover:text-blue-300 inline-flex items-center gap-1">
                Full documentation & API reference <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-heading font-bold mb-4">Ready to Add Trust to Your AI?</h2>
            <p className="text-white/60 mb-8">
              Get started with the SDK or talk to us about a pilot for your organization.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/developers">
                <Button size="lg" className="gap-2">
                  <Code className="w-4 h-4" /> Get the SDK
                </Button>
              </Link>
              <Link href={`mailto:${CONTACT_EMAIL}?subject=SONATE Pilot Interest`}>
                <Button size="lg" variant="outline" className="gap-2">
                  Request Pilot
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
              <Link href="/roadmap" className="hover:text-white transition-colors">Roadmap</Link>
              <Link href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
