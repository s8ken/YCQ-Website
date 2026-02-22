"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL } from "@/lib/site";
import ComplianceEvidenceDemo from "@/components/ComplianceEvidenceDemo";
import {
  Shield,
  Building2,
  Heart,
  Landmark,
  ArrowRight,
} from "lucide-react";

const USE_CASES = [
  {
    icon: Building2,
    title: "Financial Services",
    color: "blue",
    frameworks: ["SOX Section 404", "FINRA Rule 3110", "MiFID II"],
    description:
      "Prove every AI-assisted trade recommendation, risk assessment, and customer interaction was governed by policy and auditable.",
  },
  {
    icon: Heart,
    title: "Healthcare",
    color: "purple",
    frameworks: ["HIPAA", "FDA 21 CFR Part 11", "HITRUST"],
    description:
      "Demonstrate that AI-generated clinical insights, patient data queries, and diagnostic support met compliance requirements.",
  },
  {
    icon: Landmark,
    title: "Government & Defense",
    color: "green",
    frameworks: ["FedRAMP", "NIST AI RMF", "EO 14110"],
    description:
      "Provide tamper-proof evidence that AI systems used in government operations comply with federal AI governance mandates.",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  blue: { bg: "bg-blue-500/20", text: "text-blue-400", border: "border-blue-500/20" },
  purple: { bg: "bg-purple-500/20", text: "text-purple-400", border: "border-purple-500/20" },
  green: { bg: "bg-green-500/20", text: "text-green-400", border: "border-green-500/20" },
};

export default function ComplianceDemoPage() {
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                <Shield className="w-3 h-3 text-purple-400" />
                <span className="text-xs font-medium text-purple-400 uppercase tracking-widest">Compliance Evidence</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 leading-tight">
              AI Compliance Evidence Chain
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
              See how SONATE creates tamper-proof audit trails for AI interactions.
              Generate a receipt chain, verify its integrity, and export it as compliance evidence.
            </p>
          </div>
        </section>

        {/* Demo Component */}
        <section className="px-6 pb-16">
          <div className="max-w-5xl mx-auto">
            <div className="glass-card p-6 md:p-8">
              <ComplianceEvidenceDemo />
            </div>
          </div>
        </section>

        {/* Enterprise Use Cases */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-heading font-bold mb-3">Enterprise Use Cases</h2>
              <p className="text-white/50 max-w-xl mx-auto text-sm">
                Trust receipt chains provide the cryptographic evidence required
                by industry-specific compliance frameworks.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {USE_CASES.map((uc) => {
                const Icon = uc.icon;
                const c = colorMap[uc.color];
                return (
                  <div key={uc.title} className="glass-card p-6">
                    <div className={`w-10 h-10 rounded-lg ${c.bg} flex items-center justify-center mb-4`}>
                      <Icon className={`w-5 h-5 ${c.text}`} />
                    </div>
                    <h3 className="font-heading font-semibold mb-2">{uc.title}</h3>
                    <p className="text-sm text-white/50 mb-4">{uc.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {uc.frameworks.map((fw) => (
                        <span
                          key={fw}
                          className={`text-[10px] px-2 py-0.5 rounded-full border ${c.border} ${c.text}`}
                        >
                          {fw}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-heading font-bold mb-4">Ready for Auditable AI?</h2>
            <p className="text-white/60 mb-8">
              Get started with the SDK or talk to us about compliance requirements for your industry.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/developers">
                <Button size="lg" className="gap-2">
                  Developer Docs <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href={`mailto:${CONTACT_EMAIL}?subject=SONATE Compliance Pilot`}>
                <Button size="lg" variant="outline">
                  Request Compliance Pilot
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
              <Link href="/trust-demo" className="hover:text-white transition-colors">Trust Demo</Link>
              <Link href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
