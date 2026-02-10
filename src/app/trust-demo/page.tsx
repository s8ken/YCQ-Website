"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CONSOLE_URL } from "@/lib/site";
import TrustLedgerDemo from "@/components/TrustLedgerDemo";
import { 
  Shield, 
  ExternalLink,
  Fingerprint,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

export default function TrustDemoPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full" />
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
            <Link href="/trust-demo" className="text-sm font-medium text-white transition-colors">Trust Demo</Link>
            <Link href="/verify" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Verify</Link>
            <Link href="/roadmap" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Roadmap</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href={CONSOLE_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2">
                Full Platform <ExternalLink className="w-3 h-3" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero */}
        <section className="pt-16 pb-8 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-green-400 uppercase tracking-widest">Interactive Demo</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 leading-tight">
              Trust Receipt Demo
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
              Send a message and watch a trust receipt generate in real-time. Each interaction is evaluated against 6 constitutional principles.
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
                  The AI response was scored against 6 constitutional principles. The weighted average produced the trust score you see.
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

        {/* CTA */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-heading font-bold mb-4">Want the Full Experience?</h2>
            <p className="text-white/60 mb-8">
              The full platform includes real-time dashboards, multi-agent management, audit export, and more.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={CONSOLE_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2">
                  Open Full Platform <ExternalLink className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button size="lg" variant="outline">
                  Learn How It Works
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
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
