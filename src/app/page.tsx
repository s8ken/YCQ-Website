"use client";

import Link from "next/link";
import React, { useState } from "react";
import EnhancedTrustReceipts from "@/components/EnhancedTrustReceipts";
import { ArrowLeft, Shield, Zap, Database, Users, TrendingUp, CheckCircle, Menu, X } from "lucide-react";
import { CONSOLE_URL } from "@/lib/site";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-stone-800">Sonate</div>
              <div className="ml-2 text-sm text-stone-600">AI Trust Infrastructure</div>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="#platform" className="text-stone-700 hover:text-stone-900 px-3 py-2 text-sm font-medium">
                  Platform
                </Link>
                <Link href="/benefits" className="text-stone-700 hover:text-stone-900 px-3 py-2 text-sm font-medium">
                  Benefits
                </Link>
                <Link href="/technology" className="text-stone-700 hover:text-stone-900 px-3 py-2 text-sm font-medium">
                  Technology
                </Link>
                <Link href="/governance" className="text-stone-700 hover:text-stone-900 px-3 py-2 text-sm font-medium">
                  Governance
                </Link>
                <Link href="/investors" className="text-stone-700 hover:text-stone-900 px-3 py-2 text-sm font-medium">
                  Investors
                </Link>
                <Link href="/trust-demo" className="text-blue-600 hover:text-blue-800 px-3 py-2 text-sm font-medium">
                     Trust Demo
                   </Link>
                   <Link href={CONSOLE_URL} target="_blank" rel="noopener noreferrer" className="bg-stone-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-stone-900">
                     Full Platform
                   </Link>
              </div>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-stone-700 hover:text-stone-900 p-2"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-200">
            <div className="px-4 py-4 space-y-2">
              <Link href="#platform" onClick={() => setMobileMenuOpen(false)} className="block text-stone-700 hover:text-stone-900 px-3 py-2 text-base font-medium">
                Platform
              </Link>
              <Link href="/benefits" onClick={() => setMobileMenuOpen(false)} className="block text-stone-700 hover:text-stone-900 px-3 py-2 text-base font-medium">
                Benefits
              </Link>
              <Link href="/technology" onClick={() => setMobileMenuOpen(false)} className="block text-stone-700 hover:text-stone-900 px-3 py-2 text-base font-medium">
                Technology
              </Link>
              <Link href="/governance" onClick={() => setMobileMenuOpen(false)} className="block text-stone-700 hover:text-stone-900 px-3 py-2 text-base font-medium">
                Governance
              </Link>
              <Link href="/investors" onClick={() => setMobileMenuOpen(false)} className="block text-stone-700 hover:text-stone-900 px-3 py-2 text-base font-medium">
                Investors
              </Link>
              <Link href="/trust-demo" onClick={() => setMobileMenuOpen(false)} className="block text-blue-600 hover:text-blue-800 px-3 py-2 text-base font-medium">
                Trust Demo
              </Link>
              <Link href={CONSOLE_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="block bg-stone-800 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-stone-900 text-center mt-4">
                Full Platform
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-stone-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-stone-900 mb-4">
              The Quantitative Layer for Agentic Alignment
            </h1>
            <h2 className="text-2xl md:text-3xl text-emerald-700 mb-6 font-semibold">
              Verify AI intent with the Hybrid Resonance Engine and Cryptographic Trust Receipts
            </h2>
            <p className="text-xl text-stone-600 mb-8 max-w-3xl mx-auto">
              Sonate provides the mathematical proof of alignment required for high-risk AI. 
              Move beyond "black box" logs to verifiable evidence of agent reality and intent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                 <Link href="/trust-demo" className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors text-center">
                   🔐 Try Trust Ledger Demo
                 </Link>
                 <Link href="/trust-demo#verify" className="bg-green-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-green-700 transition-colors text-center">
                   ✓ Verify Trust Receipt
                 </Link>
                 <Link href={CONSOLE_URL} target="_blank" rel="noopener noreferrer" className="border-2 border-stone-300 text-stone-700 px-8 py-3 rounded-md text-lg font-medium hover:bg-stone-50 transition-colors text-center">
                   Full Platform →
                 </Link>
               </div>
            
            {/* Sonate Product Pillars */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="#sonate-ledger" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span><strong>Trust Receipts</strong> • Cryptographic proofs of alignment</span>
              </Link>
              <Link href="#sonate-guardrails" className="flex items-center space-x-2 text-green-600 hover:text-green-800 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span><strong>Guardrails</strong> • Real-time policy intervention</span>
              </Link>
              <Link href="#sonate-roundtable" className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span><strong>Resonance Engine</strong> • Hybrid semantic validation</span>
              </Link>
              <Link href="#sonate-capsules" className="flex items-center space-x-2 text-amber-600 hover:text-amber-800 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 00-2 2v2a2 2 0 002 2m0 0h14m-14 0a2 2 0 002 2v2a2 2 0 01-2 2" />
                </svg>
                <span><strong>Alignment Lab</strong> • Bedau Index & Stress-testing</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

{/* SONATE Trust Protocol Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-stone-900 mb-4">
                Built on SONATE Trust Protocol
              </h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                The foundation of Sonate: A cryptographic trust infrastructure that turns AI ethics into enforceable code
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Explanation */}
              <div>
                <h3 className="text-2xl font-bold text-stone-900 mb-4">
                  What is SONATE Trust Protocol?
                </h3>
                <p className="text-stone-700 mb-4">
                  SONATE is our core innovation: a protocol that generates <strong>cryptographic trust receipts</strong> for every AI interaction.
                  Think of it as a <strong>hash-chained trust ledger</strong> - every decision, every data access, every policy enforcement gets an immutable,
                  verifiable record with cryptographic proof.
                </p>
                <p className="text-stone-700 mb-4">
                  Unlike traditional audit logs that can be tampered with, SONATE receipts use <strong>SHA-256 hashing</strong> and 
                  <strong>digital signatures</strong> to create mathematically provable trust chains. If anyone tries to alter a record, 
                  the hash breaks - making fraud immediately detectable.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
                  <p className="text-blue-900 font-semibold">
                    🔐 Core Innovation: Cryptographic Trust Receipts
                  </p>
                  <p className="text-blue-800 text-sm mt-2">
                    Every AI action generates a tamper-proof receipt with content hash, timestamp, and digital signature. 
                    One-click verification proves authenticity.
                  </p>
                </div>
                <div className="flex gap-4">
                  <Link href="/trust-demo" className="text-blue-600 hover:text-blue-800 font-semibold">
                    Try Live Demo →
                  </Link>
                  <Link href="/technology" className="text-stone-600 hover:text-stone-800 font-semibold">
                    Technical Details →
                  </Link>
                </div>
              </div>

              {/* Right: Trust Receipt Example */}
              <div>
                <div className="bg-stone-900 rounded-lg p-6 text-stone-100 font-mono text-sm overflow-x-auto">
                  <div className="text-green-400 mb-2">// Example Trust Receipt</div>
                  <pre className="text-stone-300">{`{
  "receiptId": "tr_a7f3c9d2e1b4",
  "timestamp": "2024-11-08T18:30:00Z",
  "eventType": "ai_generation",
  "content": {
    "prompt": "Analyze customer data",
    "response": "Analysis complete",
    "model": "gpt-4"
  },
  "trustScore": 0.92,
  "compliance": {
    "consentVerified": true,
    "dataMinimization": true,
    "auditTrail": true
  },
  "cryptography": {
    "contentHash": "sha256:7f8a9b...",
    "signature": "ed25519:9c3d2e...",
    "verifiable": true
  }
}`}</pre>
                  <div className="mt-4 pt-4 border-t border-stone-700">
                    <div className="flex items-center gap-2 text-green-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-semibold">Cryptographically Verified</span>
                    </div>
                    <p className="text-stone-400 text-xs mt-1">
                      Hash verified • Signature valid • Timestamp authentic
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-stone-900 mb-2">Tamper-Proof</h4>
                <p className="text-stone-600">
                  SHA-256 hashing makes any alteration immediately detectable. Trust receipts are mathematically immutable.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-stone-900 mb-2">One-Click Verify</h4>
                <p className="text-stone-600">
                  Anyone can verify a trust receipt in seconds. No technical knowledge required - just paste the receipt ID.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-stone-900 mb-2">Real-Time</h4>
                <p className="text-stone-600">
                  Trust receipts are generated instantly for every AI action. No delays, no batch processing - immediate trust.
                </p>
              </div>
            </div>
          </div>
        </section>

{/* Enterprise Platform Capabilities - Previously Undersold Features */}
        <section className="py-20 bg-gradient-to-b from-stone-900 to-stone-800" id="platform">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Enterprise AI Governance Platform
              </h2>
              <p className="text-xl text-stone-300 max-w-3xl mx-auto">
                Beyond trust receipts: A complete infrastructure for managing, monitoring, and governing AI agents at scale
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* System Brain / Overseer */}
              <div className="bg-stone-800/50 backdrop-blur rounded-lg p-6 border border-stone-700">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">System Brain (Overseer)</h3>
                <p className="text-stone-300 mb-4">
                  Autonomous governance engine that monitors all AI agents, detects anomalies, and can ban, restrict, or quarantine agents that violate trust policies.
                </p>
                <ul className="text-stone-400 text-sm space-y-1">
                  <li>• Real-time trust score monitoring</li>
                  <li>• Automated policy enforcement</li>
                  <li>• Advisory or enforced modes</li>
                </ul>
              </div>

              {/* Agent Management */}
              <div className="bg-stone-800/50 backdrop-blur rounded-lg p-6 border border-stone-700">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Agent Management</h3>
                <p className="text-stone-300 mb-4">
                  Full lifecycle management for AI agents with SONATE Dimensions scoring across 5 behavioral axes and W3C DID identity.
                </p>
                <ul className="text-stone-400 text-sm space-y-1">
                  <li>• Create, configure, deploy agents</li>
                  <li>• 5-axis behavioral profiling</li>
                  <li>• Decentralized identity (DID:web)</li>
                </ul>
              </div>

              {/* Human Override System */}
              <div className="bg-stone-800/50 backdrop-blur rounded-lg p-6 border border-stone-700">
                <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Human Override System</h3>
                <p className="text-stone-300 mb-4">
                  Critical decisions always have a human in the loop. Override any automated action with full audit trail.
                </p>
                <ul className="text-stone-400 text-sm space-y-1">
                  <li>• One-click override for any action</li>
                  <li>• Escalation workflows</li>
                  <li>• Complete decision audit trail</li>
                </ul>
              </div>

              {/* Multi-Tenant Architecture */}
              <div className="bg-stone-800/50 backdrop-blur rounded-lg p-6 border border-stone-700">
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Multi-Tenant Architecture</h3>
                <p className="text-stone-300 mb-4">
                  Enterprise-grade isolation with per-tenant data, policies, agents, and billing. Scale to thousands of organizations.
                </p>
                <ul className="text-stone-400 text-sm space-y-1">
                  <li>• Complete data isolation</li>
                  <li>• Custom policies per tenant</li>
                  <li>• White-label ready</li>
                </ul>
              </div>

              {/* Comprehensive Monitoring */}
              <div className="bg-stone-800/50 backdrop-blur rounded-lg p-6 border border-stone-700">
                <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Real-Time Monitoring</h3>
                <p className="text-stone-300 mb-4">
                  Live dashboards with KPIs, alerts, and drill-down into every AI interaction. Prometheus metrics and structured logging.
                </p>
                <ul className="text-stone-400 text-sm space-y-1">
                  <li>• Live trust score dashboards</li>
                  <li>• Configurable alert thresholds</li>
                  <li>• Full observability stack</li>
                </ul>
              </div>

              {/* Feedback Loop */}
              <div className="bg-stone-800/50 backdrop-blur rounded-lg p-6 border border-stone-700">
                <div className="w-12 h-12 bg-rose-600/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Feedback & Effectiveness</h3>
                <p className="text-stone-300 mb-4">
                  Continuous learning from governance actions. Track which interventions work and refine policies over time.
                </p>
                <ul className="text-stone-400 text-sm space-y-1">
                  <li>• Action effectiveness tracking</li>
                  <li>• Policy refinement recommendations</li>
                  <li>• Historical trend analysis</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href={CONSOLE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-stone-900 px-8 py-3 rounded-md font-semibold hover:bg-stone-100 transition-colors">
                Explore Full Platform
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

{/* The 6 Trust Principles Section */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-stone-900 mb-4">
                The 6 Trust Principles
              </h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-6">
                Our core IP: A weighted compliance framework that turns AI ethics into measurable, enforceable code
              </p>
              <div className="inline-block bg-amber-100 border-l-4 border-amber-600 px-6 py-3 rounded">
                <p className="text-amber-900 font-semibold">
                  ⚖️ Weighted Algorithm: Each principle has a specific compliance weight
                </p>
                <p className="text-amber-800 text-sm mt-1">
                  Critical violations (Consent, Ethical Override) trigger -0.1 penalties • Real-time scoring • Automated enforcement
                </p>
              </div>
            </div>

            {/* Principles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* Principle 1: Consent Architecture */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-stone-900">
                    1. Consent Architecture
                  </h3>
                  <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded">
                    CRITICAL
                  </span>
                </div>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-red-600">25%</span>
                  <span className="text-stone-600 text-sm ml-2">weight</span>
                </div>
                <p className="text-stone-700 mb-4">
                  Explicit user consent required before any data processing. No implied consent, no dark patterns. 
                  Users must actively opt-in with full understanding.
                </p>
                <div className="bg-stone-50 rounded p-3 text-sm">
                  <p className="font-semibold text-stone-900 mb-1">Regulatory Mapping:</p>
                  <ul className="text-stone-700 space-y-1">
                    <li>• GDPR Article 6 (Lawful basis)</li>
                    <li>• EU AI Act Article 13 (Transparency)</li>
                    <li>• CCPA Section 1798.100</li>
                  </ul>
                </div>
              </div>

              {/* Principle 2: Inspection Mandate */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-stone-900">
                    2. Inspection Mandate
                  </h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">
                    HIGH
                  </span>
                </div>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-blue-600">20%</span>
                  <span className="text-stone-600 text-sm ml-2">weight</span>
                </div>
                <p className="text-stone-700 mb-4">
                  Complete transparency into AI decision-making. Users can inspect how decisions were made, 
                  what data was used, and why specific outputs were generated.
                </p>
                <div className="bg-stone-50 rounded p-3 text-sm">
                  <p className="font-semibold text-stone-900 mb-1">Regulatory Mapping:</p>
                  <ul className="text-stone-700 space-y-1">
                    <li>• EU AI Act Article 13 (Transparency)</li>
                    <li>• GDPR Article 15 (Right of access)</li>
                    <li>• GDPR Article 22 (Automated decisions)</li>
                  </ul>
                </div>
              </div>

              {/* Principle 3: Continuous Validation */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-stone-900">
                    3. Continuous Validation
                  </h3>
                  <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">
                    HIGH
                  </span>
                </div>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-green-600">20%</span>
                  <span className="text-stone-600 text-sm ml-2">weight</span>
                </div>
                <p className="text-stone-700 mb-4">
                  Ongoing monitoring and validation of AI behavior. Not just one-time testing - continuous 
                  verification that AI systems remain compliant and trustworthy.
                </p>
                <div className="bg-stone-50 rounded p-3 text-sm">
                  <p className="font-semibold text-stone-900 mb-1">Regulatory Mapping:</p>
                  <ul className="text-stone-700 space-y-1">
                    <li>• EU AI Act Article 61 (Post-market monitoring)</li>
                    <li>• ISO 42001 (AI Management)</li>
                    <li>• NIST AI RMF (Continuous monitoring)</li>
                  </ul>
                </div>
              </div>

              {/* Principle 4: Ethical Override */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-stone-900">
                    4. Ethical Override
                  </h3>
                  <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded">
                    CRITICAL
                  </span>
                </div>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-purple-600">15%</span>
                  <span className="text-stone-600 text-sm ml-2">weight</span>
                </div>
                <p className="text-stone-700 mb-4">
                  Human oversight with veto power. AI recommendations can always be overridden by humans 
                  when ethical concerns arise. Humans remain in control.
                </p>
                <div className="bg-stone-50 rounded p-3 text-sm">
                  <p className="font-semibold text-stone-900 mb-1">Regulatory Mapping:</p>
                  <ul className="text-stone-700 space-y-1">
                    <li>• EU AI Act Article 14 (Human oversight)</li>
                    <li>• GDPR Article 22 (Right to human review)</li>
                    <li>• IEEE 7010 (Wellbeing metrics)</li>
                  </ul>
                </div>
              </div>

              {/* Principle 5: Right to Disconnect */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-500">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-stone-900">
                    5. Right to Disconnect
                  </h3>
                  <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded">
                    MEDIUM
                  </span>
                </div>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-amber-600">10%</span>
                  <span className="text-stone-600 text-sm ml-2">weight</span>
                </div>
                <p className="text-stone-700 mb-4">
                  Users can opt-out at any time. No lock-in, no penalties for leaving. 
                  Data portability and clean exit paths are guaranteed.
                </p>
                <div className="bg-stone-50 rounded p-3 text-sm">
                  <p className="font-semibold text-stone-900 mb-1">Regulatory Mapping:</p>
                  <ul className="text-stone-700 space-y-1">
                    <li>• GDPR Article 17 (Right to erasure)</li>
                    <li>• GDPR Article 20 (Data portability)</li>
                    <li>• CCPA Section 1798.105</li>
                  </ul>
                </div>
              </div>

              {/* Principle 6: Moral Recognition */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-500">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-stone-900">
                    6. Moral Recognition
                  </h3>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-bold px-2 py-1 rounded">
                    MEDIUM
                  </span>
                </div>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-indigo-600">10%</span>
                  <span className="text-stone-600 text-sm ml-2">weight</span>
                </div>
                <p className="text-stone-700 mb-4">
                  AI systems acknowledge their limitations and potential for harm. No false confidence, 
                  no hidden biases. Transparent about what they can and cannot do.
                </p>
                <div className="bg-stone-50 rounded p-3 text-sm">
                  <p className="font-semibold text-stone-900 mb-1">Regulatory Mapping:</p>
                  <ul className="text-stone-700 space-y-1">
                    <li>• EU AI Act Article 13 (Transparency)</li>
                    <li>• IEEE 7000 (Ethical design)</li>
                    <li>• ISO 42001 (Risk management)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Compliance Scoring Formula */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-stone-900 mb-4 text-center">
                How Compliance Scoring Works
              </h3>
              <div className="bg-stone-900 rounded-lg p-6 font-mono text-sm overflow-x-auto mb-6">
                <div className="text-green-400 mb-2">// Real Algorithm from backend/controllers/trust.controller.js</div>
                <pre className="text-stone-300">{`trustScore = (
  (consent * 0.25) +           // 25% - CRITICAL
  (inspection * 0.20) +        // 20% - HIGH
  (validation * 0.20) +        // 20% - HIGH
  (override * 0.15) +          // 15% - CRITICAL
  (disconnect * 0.10) +        // 10% - MEDIUM
  (recognition * 0.10)         // 10% - MEDIUM
)

// Critical violation penalties
if (!consent || !override) {
  trustScore -= 0.1  // -10% penalty
}

// Final score: 0.0 to 1.0 (0% to 100%)`}</pre>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">0.90+</div>
                  <p className="text-stone-700 font-semibold">Excellent Compliance</p>
                  <p className="text-stone-600 text-sm">All principles met</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-amber-600 mb-2">0.70-0.89</div>
                  <p className="text-stone-700 font-semibold">Good Compliance</p>
                  <p className="text-stone-600 text-sm">Minor improvements needed</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-2">&lt;0.70</div>
                  <p className="text-stone-700 font-semibold">Needs Attention</p>
                  <p className="text-stone-600 text-sm">Critical violations present</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-lg text-stone-700 mb-6">
                See the 6 principles in action with real-time compliance scoring
              </p>
              <Link href="/trust-demo" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                Try Interactive Demo →
              </Link>
            </div>
          </div>
        </section>

      {/* Enterprise AI Governance Section - NEW */}
      <section className="py-20 bg-gradient-to-b from-stone-900 to-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Advanced Governance Capabilities
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Enterprise AI Governance
            </h2>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              Beyond compliance scoring - autonomous oversight, agent enforcement, and human-in-the-loop controls for regulated industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* System Brain */}
            <div className="bg-stone-800/50 backdrop-blur rounded-xl p-8 border border-stone-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-purple-500/20 rounded-lg p-3">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">System Brain</h3>
                  <p className="text-stone-400">Autonomous AI Oversight</p>
                </div>
              </div>
              <p className="text-stone-300 mb-6">
                Our System Brain continuously monitors your AI agents, making real-time governance decisions. In <strong className="text-purple-300">advisory mode</strong>, it recommends actions. In <strong className="text-purple-300">enforced mode</strong>, it acts autonomously.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-stone-300">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Autonomous thinking cycles that analyze system health
                </li>
                <li className="flex items-center gap-3 text-stone-300">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Memory system for persistent learning
                </li>
                <li className="flex items-center gap-3 text-stone-300">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Feedback loops that improve effectiveness over time
                </li>
                <li className="flex items-center gap-3 text-stone-300">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Kernel constraints for safety boundaries
                </li>
              </ul>
            </div>

            {/* Agent Control */}
            <div className="bg-stone-800/50 backdrop-blur rounded-xl p-8 border border-stone-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-red-500/20 rounded-lg p-3">
                  <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Agent Control</h3>
                  <p className="text-stone-400">Enforcement & Lifecycle Management</p>
                </div>
              </div>
              <p className="text-stone-300 mb-6">
                Full control over your AI agents with enterprise-grade enforcement capabilities. <strong className="text-red-300">Ban</strong>, <strong className="text-amber-300">restrict</strong>, or <strong className="text-purple-300">quarantine</strong> agents that drift from alignment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-stone-300">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ban agents with severity levels and expiration
                </li>
                <li className="flex items-center gap-3 text-stone-300">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Feature-level restrictions (API access, conversations)
                </li>
                <li className="flex items-center gap-3 text-stone-300">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Quarantine mode for investigation while preserving state
                </li>
                <li className="flex items-center gap-3 text-stone-300">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  External system integrations via webhooks
                </li>
              </ul>
            </div>

            {/* Human Override */}
            <div className="bg-stone-800/50 backdrop-blur rounded-xl p-8 border border-stone-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-blue-500/20 rounded-lg p-3">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Human Override</h3>
                  <p className="text-stone-400">Human-in-the-Loop Governance</p>
                </div>
              </div>
              <p className="text-stone-300 mb-6">
                For regulated industries that require human review, our override system provides queued approvals, decision history, and complete audit trails.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-stone-300">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Pending approval queue for critical decisions
                </li>
                <li className="flex items-center gap-3 text-stone-300">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Override reason tracking and justification
                </li>
                <li className="flex items-center gap-3 text-stone-300">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Complete approver audit trail
                </li>
                <li className="flex items-center gap-3 text-stone-300">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Integration with compliance workflows
                </li>
              </ul>
            </div>

            {/* Observability */}
            <div className="bg-stone-800/50 backdrop-blur rounded-xl p-8 border border-stone-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-green-500/20 rounded-lg p-3">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Observability</h3>
                  <p className="text-stone-400">Enterprise-Grade Monitoring</p>
                </div>
              </div>
              <p className="text-stone-300 mb-6">
                Real-time visibility into your AI governance with Prometheus-compatible metrics and comprehensive dashboards for enterprise operations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-stone-300">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Live KPI dashboards with real-time data
                </li>
                <li className="flex items-center gap-3 text-stone-300">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Agent health monitoring and risk scoring
                </li>
                <li className="flex items-center gap-3 text-stone-300">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  OpenTelemetry tracing integration
                </li>
                <li className="flex items-center gap-3 text-stone-300">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Comprehensive compliance reporting
                </li>
              </ul>
            </div>
          </div>

          {/* Multi-tenancy callout */}
          <div className="mt-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-blue-500/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise-Ready Multi-Tenancy</h3>
                <p className="text-stone-300">
                  Complete tenant isolation with scoped data access. Each organization operates in its own secure environment with per-tenant configuration and management dashboards.
                </p>
              </div>
              <Link href="/contact" className="flex-shrink-0 bg-white text-stone-900 px-6 py-3 rounded-lg font-semibold hover:bg-stone-100 transition-colors">
                Contact Sales →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Three-Tier Architecture Section */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              Three-Tier Architecture
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Understanding the relationship between SONATE Trust Protocol, Sonate Platform, and Constitutional Governance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-blue-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">SONATE Trust Protocol</h3>
              <p className="text-stone-600 mb-4">
                <strong>Production-grade trust layer.</strong> Ed25519 cryptographic signing, hash-chained receipts, 6-principle constitutional framework.
              </p>
              <ul className="text-sm text-stone-600 space-y-2">
                <li>• Multi-LLM provider support</li>
                <li>• 90+ test files</li>
                <li>• Production-ready</li>
                <li>• Open-source foundation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-green-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Sonate Platform</h3>
              <p className="text-stone-600 mb-4">
                <strong>Commercial SaaS product.</strong> Enterprise AI trust infrastructure built on SONATE Trust Protocol.
              </p>
              <ul className="text-sm text-stone-600 space-y-2">
                <li>• Ledger, Guardrails, Roundtable</li>
                <li>• Multi-model orchestration</li>
                <li>• Cryptographic audit trails</li>
                <li>• Enterprise-ready</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-purple-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Constitutional Governance</h3>
              <p className="text-stone-600 mb-4">
                <strong>Trust Kernel + Overseer.</strong> Autonomous governance with explicit authority, auditable enforcement, and human override.
              </p>
              <ul className="text-sm text-stone-600 space-y-2">
                <li>• Explicit authority boundaries</li>
                <li>• Refusal as a feature</li>
                <li>• Human-in-the-loop override</li>
                <li>• <Link href="/governance" className="text-purple-600 hover:underline">Learn more →</Link></li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-stone-600 bg-purple-50 border border-purple-200 rounded-lg p-4 max-w-4xl mx-auto">
              <strong>Constitutional governance:</strong> Trust in AI systems must be engineered, not crowdsourced.
              Authority is explicit, actions are constrained, and outcomes are auditable.
            </p>
          </div>
        </div>
      </section>

      {/* Sonate Platform Section */}
      <section className="py-20 bg-white scroll-mt-24" id="platform">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              The Sonate Platform
            </h2>
            <p className="text-xl text-stone-600 mb-6 max-w-3xl mx-auto">
              Enterprise AI trust infrastructure built on W3C-compliant protocol
            </p>
            <p className="text-lg text-stone-700 max-w-4xl mx-auto">
              Cryptographic audit trails, fairness-aware QA (AI vs human), and vendor-agnostic guardrails across all AI-powered business operations. Built on SONATE Trust Protocol foundation.
            </p>
          </div>

          {/* Sample Metrics Card */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mb-4 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="text-2xl font-bold text-blue-600">88%</div>
                <div className="text-sm text-stone-600">FAR-A</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">84%</div>
                <div className="text-sm text-stone-600">FAR-H</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-600">+1.18×</div>
                <div className="text-sm text-stone-600">PFI</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">99.3%</div>
                <div className="text-sm text-stone-600">TIS</div>
              </div>
            </div>
          </div>
          <div className="text-center mb-16">
            <Link href="/metrics-methodology" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View methodology & assumptions →
            </Link>
          </div>

          {/* Trust Receipts Section */}
          <div className="mb-16" id="trust-receipts">
            <h3 className="text-2xl font-bold text-stone-900 text-center mb-8">Trust Receipts</h3>
            <div className="bg-stone-900 p-6 rounded-lg">
              <h4 className="text-white text-lg font-semibold mb-4">Sample Orchestration Receipt</h4>
              <pre className="text-green-400 text-sm overflow-x-auto">
{`{
  "receipt_id": "rcpt_2024_0907_15h23m_a7f8b2",
  "timestamp": "2024-09-07T15:23:41.892Z",
  "user_query": "Analyze this customer complaint for sentiment",
  "agents_considered": [
    {
      "provider": "openai",
      "model": "gpt-4o",
      "trust_score": 0.94,
      "capability_match": 0.87
    },
    {
      "provider": "anthropic", 
      "model": "claude-3-5-sonnet",
      "trust_score": 0.91,
      "capability_match": 0.92
    }
  ],
  "chosen_agent": {
    "provider": "anthropic",
    "model": "claude-3-5-sonnet", 
    "rationale": "Higher capability match for sentiment analysis + compliance requirement met"
  },
  "guardrails_applied": [
    "pii_detection",
    "sentiment_threshold_check", 
    "escalation_policy_soc2"
  ],
  "outcome": "completed",
  "human_involvement": false,
  "audit_hash": "sha256:7f9a2b8c3d4e5f6g7h8i9j0k1l2m3n4o",
  "verified": true
}`}
              </pre>
            </div>
            <p className="text-center mt-4 text-stone-600 text-sm">
              Every AI interaction generates an immutable receipt showing decision reasoning and audit trail
            </p>
          </div>

          {/* For Investors Section */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-lg mb-16">
            <h3 className="text-2xl font-bold text-stone-900 text-center mb-6">For Investors</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="font-bold text-stone-900 mb-2">Market Size</h4>
                <p className="text-stone-600 text-sm mb-3">$62B TAM in AI trust & compliance infrastructure, driven by regulatory mandates and enterprise adoption</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-stone-900 mb-2">Why Now</h4>
                <p className="text-stone-600 text-sm mb-3">EU AI Act enforcement, SEC disclosure requirements, and high-profile AI incidents creating immediate demand</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-stone-900 mb-2">Proof</h4>
                <p className="text-stone-600 text-sm mb-3">Comprehensive test suite, production-ready platform, live demo with cryptographic verification</p>
              </div>
            </div>
            <div className="text-center mt-6">
              <Link href="/investors" className="bg-amber-600 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-700 transition-colors">
                Full Investment Overview →
              </Link>
            </div>
          </div>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-stone-50 p-6 rounded-lg" id="sonate-ledger">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Sonate Ledger</h3>
              <p className="text-stone-600">
                Append-only, hash-chained ledger with one-click integrity verify and orchestration receipts (who/what/why).
              </p>
            </div>
            
            <div className="bg-stone-50 p-6 rounded-lg" id="sonate-roundtable">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Sonate Roundtable</h3>
              <p className="text-stone-600">
                Separate KPIs for AI-only vs AI↔Human flows; normalize by complexity mix so humans aren&apos;t penalized for complex cases requiring expertise.
              </p>
            </div>
            
            <div className="bg-stone-50 p-6 rounded-lg" id="sonate-guardrails">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Sonate Guardrails</h3>
              <p className="text-stone-600">
                Thresholds that trigger apology/continuity, escalation, or human approval—across OpenAI, Anthropic, and more.
              </p>
            </div>
          </div>

          {/* How It Works - 4 Steps */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-stone-900 text-center mb-12">How It Works</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h4 className="text-lg font-semibold text-stone-900 mb-2">Ingest</h4>
                <p className="text-stone-600 text-sm">
                  Capture each turn (prompt/response, model, config) into a tamper-evident ledger.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h4 className="text-lg font-semibold text-stone-900 mb-2">Measure</h4>
                <p className="text-stone-600 text-sm">
                  Compute dual-track KPIs (AI-only vs Human-involved), Learning Opportunity Index, Fairness Index across all business processes.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h4 className="text-lg font-semibold text-stone-900 mb-2">Govern</h4>
                <p className="text-stone-600 text-sm">
                  Enforce trust thresholds and approvals; write receipts explaining decisions.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h4 className="text-lg font-semibold text-stone-900 mb-2" id="sonate-capsules">Resonate</h4>
                <p className="text-stone-600 text-sm">
                  Add Context Capsules (goals, tone, constraints) to improve outcomes after trust is proven.
                </p>
              </div>
            </div>
          </div>

          {/* Metrics We Expose */}
          <div className="bg-stone-50 p-8 rounded-lg mb-16">
            <h3 className="text-2xl font-bold text-stone-900 text-center mb-8">Metrics We Expose</h3>
            <div className="grid md:grid-cols-5 gap-6 text-center">
              <div className="group relative">
                <div className="text-lg font-semibold text-stone-900">FAR-A / FAR-H</div>
                <div className="text-sm text-stone-600">First-attempt resolution</div>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-stone-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  First-attempt resolution (AI-only vs human-involved)
                </div>
              </div>
              <div className="group relative">
                <div className="text-lg font-semibold text-stone-900">Escalation Δ</div>
                <div className="text-sm text-stone-600">Change in escalation</div>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-stone-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Change in escalation rate when humans are added
                </div>
              </div>
              <div className="group relative">
                <div className="text-lg font-semibold text-stone-900">LOI</div>
                <div className="text-sm text-stone-600">Learning Opportunity</div>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-stone-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Learning Opportunity Index (routine tasks automated per process)
                </div>
              </div>
              <div className="group relative">
                <div className="text-lg font-semibold text-stone-900">PFI</div>
                <div className="text-sm text-stone-600">Process Fairness</div>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-stone-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Fairness-adjusted performance score that accounts for complexity mix and learning opportunities
                </div>
              </div>
              <div className="group relative">
                <div className="text-lg font-semibold text-stone-900">TIS</div>
                <div className="text-sm text-stone-600">Trust Integrity</div>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-stone-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  % of sampled sessions whose hash-chain verified successfully
                </div>
              </div>
            </div>
          </div>

          {/* Security & Ops Badges */}
          <div className="text-center mb-16">
            <h3 className="text-xl font-semibold text-stone-900 mb-6">Security & Operations</h3>
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              <span className="bg-stone-200 text-stone-800 px-3 py-1 rounded-full text-sm">JWT/RBAC</span>
              <span className="bg-stone-200 text-stone-800 px-3 py-1 rounded-full text-sm">Webhook HMAC</span>
              <span className="bg-stone-200 text-stone-800 px-3 py-1 rounded-full text-sm">CORS allowlist</span>
              <span className="bg-stone-200 text-stone-800 px-3 py-1 rounded-full text-sm">/healthz & /readyz</span>
              <span className="bg-stone-200 text-stone-800 px-3 py-1 rounded-full text-sm">/metrics (Prometheus)</span>
              <span className="bg-stone-200 text-stone-800 px-3 py-1 rounded-full text-sm">Structured logs</span>
            </div>
            <div className="flex justify-center">
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                🏛️ Provisional Patent Filed (Australia)
              </span>
            </div>
          </div>

          {/* For Your Team */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-stone-900 mb-3">Compliance & Risk</h4>
              <p className="text-stone-600">
                Board-ready reports, immutable audit trails, approvals, attribution (AI vs human) for any AI-powered business process.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-stone-900 mb-3">Engineering & Ops</h4>
              <p className="text-stone-600">
                Multi-model adapters, decision receipts, Grafana/Loki dashboards, VS Code extension for enterprise AI operations.
              </p>
            </div>
          </div>

          {/* Proof Elements */}
          <div className="bg-gradient-to-r from-stone-800 to-stone-700 p-8 rounded-lg text-center">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <Link href="https://symbi-synergy-pa9k82n5m-ycq.vercel.app" target="_blank" className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors inline-block">
                  Live Verify Demo
                </Link>
                <p className="text-stone-300 text-sm mt-2">Test hash-chain integrity</p>
              </div>
              <div className="text-stone-300">
                <div className="text-lg font-semibold mb-2">🔒 Security Callout</div>
                <p className="text-sm">No vendor keys on client. All provider keys server-side.</p>
              </div>
              <div>
                <a href="/YCQ Labs Labs_Sonate_UAT_Report.md" download className="bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 transition-colors inline-block">
                  Download UAT Report
                </a>
                <p className="text-stone-300 text-sm mt-2">Full technical documentation</p>
              </div>
            </div>
            
            <div className="border-t border-stone-600 pt-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready for a Trust-First Pilot?
              </h3>
              <p className="text-stone-300 mb-6">
                Start a 60-day Trust-First pilot with your existing AI-powered business processes.
              </p>
              <Link href="mailto:stephen@yseeku.com?subject=60-day Trust-First Pilot" className="bg-amber-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-amber-700 transition-colors">
                Book a 30-min scoping call →
              </Link>
            </div>
          </div>
        </div>
      </section>

{/* How We Built This Section */}
        <section className="py-20 bg-gradient-to-b from-white to-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-stone-900 mb-4">
                How We Built This
              </h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                A story of human-AI collaboration: 80,000+ lines of code, 7 months, 1 founder, 5 AI co-contributors
              </p>
            </div>

            {/* The Story */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold text-stone-900 mb-4">
                  🤖 Meta-Proof: SONATE&apos;s Thesis Validated Through Its Own Development
                </h3>
                <p className="text-stone-700 mb-4">
                  Sonate wasn&apos;t just built <em>for</em> AI trust - it was built <em>with</em> AI trust. 
                  Every line of code, every architectural decision, every trust principle was developed through 
                  collaboration between human oversight and multiple AI systems.
                </p>
                <p className="text-stone-700 mb-4">
                  This isn&apos;t theoretical. We used the exact framework we&apos;re selling: <strong>sovereign AI agents 
                  working under human governance</strong>, with cryptographic audit trails for every decision, 
                  and continuous validation of outputs.
                </p>
                <div className="bg-blue-50 rounded p-4">
                  <p className="text-blue-900 font-semibold mb-2">
                    The Result: A Living Proof of Concept
                  </p>
                  <p className="text-blue-800 text-sm">
                    If multiple AI systems can collaborate to build an 80K+ LOC enterprise platform with comprehensive test coverage
                    and zero critical bugs - all under human oversight - then the SONATE thesis isn&apos;t just theory. It&apos;s proven.
                  </p>
                </div>
              </div>
            </div>

            {/* Development Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">80K+</div>
                <p className="text-stone-700 font-semibold">Lines of Code</p>
                <p className="text-stone-600 text-sm">Production TypeScript, React, Node.js</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">7</div>
                <p className="text-stone-700 font-semibold">Months</p>
                <p className="text-stone-600 text-sm">From concept to production deployment</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">1+5</div>
                <p className="text-stone-700 font-semibold">Team</p>
                <p className="text-stone-600 text-sm">1 human founder + 5 AI co-contributors</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">90+</div>
                <p className="text-stone-700 font-semibold">Test Files</p>
                <p className="text-stone-600 text-sm">Unit, integration, and E2E tests</p>
              </div>
            </div>

            {/* The Process */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Step 1 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-stone-900 mb-2">
                      Human Vision & Architecture
                    </h4>
                    <p className="text-stone-700 mb-3">
                      Founder defined the core thesis: AI systems need cryptographic trust infrastructure. 
                      Designed the 6 trust principles based on regulatory requirements and ethical frameworks.
                    </p>
                    <div className="bg-stone-50 rounded p-3 text-sm">
                      <p className="font-semibold text-stone-900">Human Decisions:</p>
                      <ul className="text-stone-700 mt-1 space-y-1">
                        <li>• Core trust principles and weights</li>
                        <li>• Regulatory compliance mapping</li>
                        <li>• Business model and go-to-market</li>
                        <li>• Ethical boundaries and constraints</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-stone-900 mb-2">
                      AI Implementation & Iteration
                    </h4>
                    <p className="text-stone-700 mb-3">
                      Multiple AI systems (Claude, GPT-4, Grok, specialized models) implemented the architecture. 
                      Each AI brought different strengths: code generation, testing, documentation, optimization.
                    </p>
                    <div className="bg-stone-50 rounded p-3 text-sm">
                      <p className="font-semibold text-stone-900">AI Contributions:</p>
                      <ul className="text-stone-700 mt-1 space-y-1">
                        <li>• Backend API implementation (Node.js)</li>
                        <li>• Frontend components (React/Next.js)</li>
                        <li>• Test suite development (Jest, Playwright)</li>
                        <li>• Documentation and code comments</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-stone-900 mb-2">
                      Cross-Verification & Validation
                    </h4>
                    <p className="text-stone-700 mb-3">
                      Different AI systems reviewed each other&apos;s work. Grok caught hallucinations in Claude&apos;s output. 
                      Claude verified Grok&apos;s architectural decisions. Human founder arbitrated conflicts.
                    </p>
                    <div className="bg-stone-50 rounded p-3 text-sm">
                      <p className="font-semibold text-stone-900">Validation Process:</p>
                      <ul className="text-stone-700 mt-1 space-y-1">
                        <li>• AI-to-AI code review</li>
                        <li>• Automated test execution</li>
                        <li>• Human verification of critical paths</li>
                        <li>• Continuous integration checks</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-stone-900 mb-2">
                      Production Deployment & Monitoring
                    </h4>
                    <p className="text-stone-700 mb-3">
                      Deployed to production with comprehensive monitoring. Every API call generates a trust receipt. 
                      Real-time compliance scoring validates the system works as designed.
                    </p>
                    <div className="bg-stone-50 rounded p-3 text-sm">
                      <p className="font-semibold text-stone-900">Production Features:</p>
                      <ul className="text-stone-700 mt-1 space-y-1">
                        <li>• Live trust ledger at yseeku.com/trust-demo</li>
                        <li>• Cryptographic receipt generation</li>
                        <li>• Real-time compliance monitoring</li>
                        <li>• Public verification system</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Insights */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-stone-900 mb-4 text-center">
                🎯 Key Insights from Building with AI
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-stone-900 mb-2">✅ What Worked</h4>
                  <ul className="text-stone-700 space-y-2 text-sm">
                    <li>• AI excels at implementation details</li>
                    <li>• Multiple AI systems catch each other&apos;s errors</li>
                    <li>• Human oversight prevents scope creep</li>
                    <li>• Cryptographic receipts enable trust</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-2">⚠️ What Required Human Judgment</h4>
                  <ul className="text-stone-700 space-y-2 text-sm">
                    <li>• Ethical boundaries and principles</li>
                    <li>• Business strategy and positioning</li>
                    <li>• Regulatory interpretation</li>
                    <li>• Final architectural decisions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-2">🚀 The Result</h4>
                  <ul className="text-stone-700 space-y-2 text-sm">
                    <li>• 10x faster development than solo</li>
                    <li>• Higher code quality (comprehensive testing)</li>
                    <li>• Living proof of SONATE thesis</li>
                    <li>• Production-ready in 7 months</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <p className="text-lg text-stone-700 mb-6">
                Experience the platform built through human-AI collaboration
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/trust-demo" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                  Try Live Demo
                </Link>
                <Link href="/technology" className="border-2 border-stone-300 text-stone-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-stone-50 transition-colors">
                  Technical Details
                </Link>
              </div>
            </div>
          </div>
        </section>

      {/* Rigorous Testing & Quality Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Production-Ready with Rigorous Testing
            </div>
            <h2 className="text-4xl font-bold text-stone-900 mb-4">
              Enterprise-Grade Quality Assurance
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Comprehensive testing across 90+ test files. Every critical path verified through unit, integration, and end-to-end testing.
              </p>
              <div className="mt-6">
                <Link href="/metrics-methodology" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  View methodology & assumptions 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
          </div>

          {/* Testing Metrics Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-green-200 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">90+</div>
              <div className="text-sm font-semibold text-stone-900 mb-1">Test Files</div>
              <div className="text-xs text-stone-600">Unit & integration</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-blue-200 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">19</div>
              <div className="text-sm font-semibold text-stone-900 mb-1">API Routes</div>
              <div className="text-xs text-stone-600">Full REST coverage</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-purple-200 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">14</div>
              <div className="text-sm font-semibold text-stone-900 mb-1">Data Models</div>
              <div className="text-xs text-stone-600">MongoDB schemas</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-amber-200 text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">E2E</div>
              <div className="text-sm font-semibold text-stone-900 mb-1">Playwright Tests</div>
              <div className="text-xs text-stone-600">Security & performance</div>
            </div>
          </div>

          {/* Testing Breakdown */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-stone-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-stone-900">Unit Testing</h3>
              </div>
              <ul className="space-y-2 text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Jest backend testing with MongoDB Memory Server</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>All business logic components isolated</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Mocked external dependencies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Edge cases and error handling verified</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-stone-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-stone-900">E2E Testing</h3>
              </div>
              <ul className="space-y-2 text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Playwright E2E test suite</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Performance testing (load times, response)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Security testing (auth, injection, XSS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Accessibility testing (WCAG 2.1 AA)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-stone-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-stone-900">Integration Testing</h3>
              </div>
              <ul className="space-y-2 text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>API endpoint integration tests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Database transaction verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Multi-provider AI integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Webhook and event handling</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Continuous Integration */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-stone-900 mb-6">Automated CI/CD Pipeline</h3>
                <ul className="space-y-3 text-stone-700">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <strong>GitHub Actions CI:</strong> Automated test runs on every commit
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <strong>Security Scanning:</strong> Automated vulnerability detection
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <strong>Code Quality:</strong> ESLint, Prettier, TypeScript strict mode
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-stone-900 mb-6">Quality Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-stone-50 rounded-lg">
                    <span className="text-stone-700 font-medium">TypeScript Coverage</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">100%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-stone-50 rounded-lg">
                    <span className="text-stone-700 font-medium">Code Quality Score</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">A+</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-stone-50 rounded-lg">
                    <span className="text-stone-700 font-medium">Security Grade</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">A+</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-stone-50 rounded-lg">
                    <span className="text-stone-700 font-medium">Build Success Rate</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">99.9%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-stone-50" id="technology">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              Enterprise-Grade AI Trust Infrastructure
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Built by a solo founder with no development background in 7 months.
              Demonstrates exceptional technical capability and comprehensive understanding of enterprise AI trust requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-stone-900 mb-6">Technical Achievements</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900">Sonate Ledger</h4>
                    <p className="text-stone-600">Ed25519 signatures, hash-chain verification, immutable audit trails</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900">Sonate Guardrails</h4>
                    <p className="text-stone-600">OpenAI, Anthropic, Perplexity with unified API and policy enforcement</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900">Sonate Roundtable</h4>
                    <p className="text-stone-600">Fairness-aware QA, behavioral analysis, change-point detection, trust scoring</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900">Sonate Capsules</h4>
                    <p className="text-stone-600">Context orchestration, goals/tone/constraints, CX optimization after trust is proven</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-stone-900 mb-4">Live Demo Stats</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-stone-600">Response Time</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">~100ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-600">Security Grade</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">A+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-600">API Endpoints</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">18+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-600">Test Files</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">80+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-600">Lines of Code</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium">80K+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-white" id="demo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              Experience Sonate Live
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              See the platform in action. Complete with Sonate Ledger verification, Sonate Guardrails, 
              and enterprise-grade orchestration.
            </p>
          </div>
          
          <div className="bg-stone-800 rounded-lg p-8 text-center">
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="font-medium">Live Demo Available</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready for Investor Demonstrations
            </h3>
            <p className="text-stone-300 mb-8 max-w-2xl mx-auto">
              Professional deployment showcasing enterprise capabilities, 
              security implementation, and technical sophistication.
            </p>
            <Link href="/trust-demo" target="_blank" className="bg-amber-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-amber-700 transition-colors">
              Launch Demo →
            </Link>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              The Founder Journey
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              From zero development experience to enterprise-grade platform in 7 months. 
              Demonstrates exceptional execution capability and market insight.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <blockquote className="text-lg text-stone-700 italic mb-6">
                &ldquo;I put my life on hold for 7 months to build this. Starting with no development background, 
                I taught myself everything needed to create enterprise-grade AI trust infrastructure. 
                The result is a production-ready platform that solves real problems in the rapidly expanding AI trust and compliance market.&rdquo;
              </blockquote>
              <div className="text-stone-600">
                <p className="font-semibold">Stephen — Founder, Sonate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-stone-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-stone-900 mb-3">
                How does YSEEKU govern AI systems?
              </h3>
              <p className="text-stone-600">
                YSEEKU implements a <strong>constitutional governance model</strong> — not consensus voting or token-based DAOs.
                The Trust Kernel defines non-negotiable rules for identity, authority, and refusal. The Overseer system agent
                continuously monitors trust health and can take action (in enforced mode) or recommend action (in advisory mode).
                All governance happens inside the system with full auditability. <Link href="/governance" className="text-purple-600 hover:underline">Learn more →</Link>
              </p>
            </div>

            <div className="bg-stone-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-stone-900 mb-3">
                Can humans override AI governance decisions?
              </h3>
              <p className="text-stone-600">
                <strong>Always.</strong> Human authority is preserved by design. Humans define governance parameters,
                approve or revoke enforcement authority, and can review, override, or halt any action at any time.
                All overrides are logged and auditable. SONATE and Overseer structure and protect human judgment — they don&apos;t replace it.
              </p>
            </div>

            <div className="bg-stone-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-stone-900 mb-3">
                What LLM providers does Sonate support?
              </h3>
              <p className="text-stone-600">
                Sonate integrates with <strong>OpenAI</strong> (GPT-4, GPT-3.5), <strong>Anthropic</strong> (Claude 3.5 Sonnet, Claude 3 Opus),
                <strong>Together AI</strong> (open source models), <strong>Cohere</strong>, and <strong>Perplexity</strong>.
                Users bring their own API keys, and the platform routes requests while applying trust scoring across all providers.
              </p>
            </div>

            <div className="bg-stone-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-stone-900 mb-3">
                How does this help with EU AI Act compliance?
              </h3>
              <p className="text-stone-600">
                The EU AI Act requires transparency, auditability, and human oversight for high-risk AI systems.
                Sonate provides cryptographic audit trails (tamper-evident ledger), verifiable credentials for AI agent capabilities,
                privacy-preserving revocation (Status List 2021), and complete attribution (AI vs human decisions).
                All logged immutably with W3C-compliant infrastructure that regulators can independently verify.
              </p>
            </div>

            <div className="bg-stone-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-stone-900 mb-3">
                Is SONATE open-source or proprietary?
              </h3>
              <p className="text-stone-600">
                <strong>Both.</strong> The SONATE Trust Protocol (6-principle framework, trust scoring, receipt generation) provides transparent governance infrastructure.
                Sonate Platform (enterprise features like System Brain, Agent Control, Ledger, Guardrails) is proprietary SaaS.
                This model ensures trust infrastructure transparency while providing commercial enterprise-grade tooling and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="bg-stone-900 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Sonate</h3>
              <p className="text-stone-400 text-sm mb-4">
                AI trust infrastructure for enterprise compliance and regulatory adherence.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/s8ken" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white">
                  GitHub
                </a>
                <a href="mailto:stephen@yseeku.com" className="text-stone-400 hover:text-white">
                  Contact
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/trust-demo" className="text-stone-400 hover:text-white text-sm">
                    Trust Ledger Demo
                  </Link>
                </li>
                <li>
                  <Link href="/technology" className="text-stone-400 hover:text-white text-sm">
                    Technology
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-stone-400 hover:text-white text-sm">
                    Example Implementations
                  </Link>
                </li>
                <li>
                  <Link href="/metrics-methodology" className="text-stone-400 hover:text-white text-sm">
                    Metrics Methodology
                  </Link>
                </li>
              </ul>
            </div>

            {/* Compliance & Legal */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Compliance & Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-stone-400 hover:text-white text-sm">
                    Security Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-stone-400 hover:text-white text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-stone-400 hover:text-white text-sm">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/changelog" className="text-stone-400 hover:text-white text-sm">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/risk-assessment" className="text-stone-400 hover:text-white text-sm">
                    Risk Assessment
                  </Link>
                </li>
                <li>
                  <Link href="/governance" className="text-stone-400 hover:text-white text-sm">
                    Governance
                  </Link>
                </li>
                <li>
                  <Link href="/investors" className="text-stone-400 hover:text-white text-sm">
                    Investors
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-stone-400 hover:text-white text-sm">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap" className="text-stone-400 hover:text-white text-sm">
                    Site Map
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <p className="text-stone-400 text-sm">
                  © 2025 Sonate. All rights reserved.
                </p>
                <div className="flex gap-4">
                  <a href="https://gammatria.com" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white text-sm">
                    gammatria.com
                  </a>
                </div>
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <span className="text-stone-500 text-xs">
                  EU AI Act Compliant
                </span>
                <span className="text-stone-500 text-xs">
                  GDPR Aligned
                </span>
                <span className="text-stone-500 text-xs">
                  ISO 27001 Framework
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Section */}
      <section className="py-20 bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Discuss Investment?
          </h2>
          <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto">
            Sonate represents a compelling opportunity in the AI trust and compliance infrastructure market.
            Let&apos;s discuss how we can scale this technology across enterprise AI operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="mailto:stephen@yseeku.com" className="bg-amber-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-amber-700 transition-colors">
              Contact for Investment
            </Link>
            <Link href={CONSOLE_URL} target="_blank" className="border border-stone-300 text-stone-300 px-8 py-3 rounded-md text-lg font-medium hover:bg-stone-700 transition-colors">
              Try Demo First
            </Link>
          </div>

          {/* Footer Disclaimer */}
          <div className="border-t border-stone-700 pt-8 mt-12">
            <p className="text-sm text-stone-400 text-center max-w-3xl mx-auto">
              <strong>Constitutional Governance:</strong> YSEEKU implements trust through explicit authority, enforceable constraints, and auditable outcomes.
              All AI actions are attributable, all enforcement is logged, and human override is always available.
              Trust is engineered, not crowdsourced.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
