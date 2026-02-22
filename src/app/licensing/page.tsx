"use client";

import { Button } from "@/components/ui/button";
import {
  Lock,
  Scale,
  CheckCircle2,
  BookOpen,
  Shield,
  Eye,
  Code,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";

export default function LicensingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10">
        {/* Hero */}
        <section className="pt-20 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Scale className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-medium text-blue-400 uppercase tracking-widest">
                Licensing & Standards
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Open Verification, Protected Governance
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              SONATE is built on a simple belief: AI governance must be independently verifiable. Verification should never depend on a single vendor—including us.
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-20 px-6 border-t border-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Our Philosophy</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-8">
                <Eye className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Open Verification</h3>
                <p className="text-gray-300">
                  We publish open standards, verification tools, and transparent cryptographic foundations. Anyone can independently verify SONATE trust receipts without relying on our infrastructure.
                </p>
              </div>

              <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-8">
                <Lock className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Protected Governance</h3>
                <p className="text-gray-300">
                  We protect the proprietary governance engine that powers enforcement, drift detection, and oversight. This is our intellectual property.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-gray-900/50 border border-gray-800 rounded-lg p-8">
              <p className="text-gray-300 text-lg">
                This balance — <strong>open verification, protected governance</strong> — is what makes SONATE both trustworthy and defensible.
              </p>
            </div>
          </div>
        </section>

        {/* Open Components */}
        <section className="py-20 px-6 border-t border-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Open Components</h2>
            <p className="text-gray-400 mb-12 text-lg">
              MIT-licensed and freely available. Enable independent verification without vendor lock-in.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/30 rounded-lg p-6">
                <Code className="w-8 h-8 text-emerald-400 mb-3" />
                <h3 className="text-lg font-semibold mb-3">Verification SDKs (MIT)</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Ed25519 signature validation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>SHA-256 hash-chain verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>RFC 8785 canonicalization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>JavaScript and Python parity</span>
                  </li>
                </ul>
                <a
                  href="https://github.com/s8ken/sonate-verify-sdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-emerald-400 hover:text-emerald-300 transition-colors text-sm"
                >
                  View on GitHub <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/30 rounded-lg p-6">
                <BookOpen className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="text-lg font-semibold mb-3">Specifications (Public)</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Trust Receipt Specification v1.0</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Hash-chaining format</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>DID identity structure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Compliance mappings (NIST, ISO 27001, SOC 2)</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-400 mt-4 border-t border-cyan-500/20 pt-4">
                  Standardized, versioned, and interoperable across languages.
                </p>
              </div>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-6">
              <p className="text-gray-300">
                <strong>Verification is vendor-neutral by design.</strong> Anyone can validate SONATE receipts offline, in any environment, using open tools.
              </p>
            </div>
          </div>
        </section>

        {/* Proprietary Components */}
        <section className="py-20 px-6 border-t border-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Proprietary Components</h2>
            <p className="text-gray-400 mb-12 text-lg">
              Commercial license. These systems form SONATE's governance engine—the intelligence layer that evaluates, enforces, and governs AI behavior.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/30 rounded-lg p-6">
                <Shield className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-lg font-semibold mb-2">Policy Engine Runtime</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Weighted constraint orchestration</li>
                  <li>• Real-time enforcement logic</li>
                  <li>• SYMBI principle evaluation</li>
                  <li>• Violation persistence and audit</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/30 rounded-lg p-6">
                <Shield className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-lg font-semibold mb-2">Behavioral Drift Detection</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Cross-session volatility modeling</li>
                  <li>• Temporal alignment analysis</li>
                  <li>• Multi-turn behavioral deviation</li>
                  <li>• Phase-shift velocity detection</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/30 rounded-lg p-6">
                <Shield className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-lg font-semibold mb-2">Overseer Governance Layer</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Closed-loop monitoring and escalation</li>
                  <li>• Autonomous policy enforcement</li>
                  <li>• Archive analysis and validation</li>
                  <li>• Real-time threat detection</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/30 rounded-lg p-6">
                <Shield className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-lg font-semibold mb-2">Enterprise Features</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Unified model gateway</li>
                  <li>• Key rotation and security controls</li>
                  <li>• Multi-region deployment</li>
                  <li>• Compliance export tooling</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-purple-500/10 border border-purple-500/20 rounded-lg p-6">
              <p className="text-gray-300">
                These systems represent SONATE's core intellectual property and competitive advantage. They enable enterprise-grade governance that isn't achievable with commodity solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Commercial Licensing */}
        <section className="py-20 px-6 border-t border-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Commercial Licensing</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Enterprise Licensing</h3>
                <p className="text-gray-300 mb-4">SONATE is licensed on a per-tenant, per-environment basis.</p>
                <p className="text-gray-400 text-sm mb-6">Enterprise licensing includes:</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {[
                    "Unified model gateway",
                    "Governance enforcement",
                    "Drift detection",
                    "Trust receipt generation",
                    "Archive ingestion",
                    "Compliance export tooling",
                    "Key rotation and security controls",
                    "Multi-region deployment options",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Custom Licensing</h3>
                <p className="text-gray-300 mb-6">
                  Custom licensing is available for regulated industries and high-assurance environments.
                </p>
                <p className="text-gray-400 text-sm mb-8">
                  If you require specific terms, dedicated support, or custom features, we can work with you.
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=SONATE Custom Licensing`}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  licensing@yseeku.com <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Standards Commitment */}
        <section className="py-20 px-6 border-t border-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Standards Commitment</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Eye,
                  title: "Open Verification",
                  desc: "Anyone can validate SONATE receipts",
                },
                {
                  icon: Code,
                  title: "Independent Auditability",
                  desc: "Cryptography is transparent, no black boxes",
                },
                {
                  icon: Shield,
                  title: "Transparent Foundations",
                  desc: "Ed25519, SHA-256, RFC standards",
                },
                {
                  icon: Lock,
                  title: "No Lock-in",
                  desc: "Use our SDKs or implement your own",
                },
                {
                  icon: BookOpen,
                  title: "Stable Specifications",
                  desc: "Versioned, standardized formats",
                },
                {
                  icon: ArrowRight,
                  title: "Interoperability",
                  desc: "JavaScript, Python, Go, and more",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition"
                  >
                    <Icon className="w-8 h-8 text-blue-400 mb-3" />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 bg-blue-500/10 border border-blue-500/20 rounded-lg p-8 text-center">
              <p className="text-gray-300 text-lg mb-4">
                <strong>SONATE aims to become the industry standard for AI non-repudiation infrastructure</strong>
              </p>
              <p className="text-gray-400">
                A foundation that any organization can trust, verify, and build upon.
              </p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="py-20 px-6 border-t border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">The Balance</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-8">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Open Where It Matters</h3>
                <p className="text-gray-300">
                  Verification, cryptography, specifications, and SDKs. No vendor lock-in.
                </p>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-8">
                <Lock className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Proprietary Where It Must Be</h3>
                <p className="text-gray-300">
                  Governance engine, enforcement logic, drift detection, and Overseer.
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-300 mb-12">
              <strong>SONATE is transparent by design.</strong> No black boxes, no unverifiable claims. Built for the ecosystem—not just for our platform.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/how-it-works">
                <Button variant="outline" className="gap-2">
                  How It Works <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href={`mailto:${CONTACT_EMAIL}?subject=SONATE Licensing`}>
                <Button className="gap-2">
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
