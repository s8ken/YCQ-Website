"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL, DEMO_URL } from "@/lib/site";
import {
  Shield,
  Headset,
  Building2,
  Briefcase,
  Landmark,
  Stethoscope,
  Bot,
  FileCheck,
  ArrowRight,
  ExternalLink,
  Fingerprint,
  Scale,
  History,
  CheckCircle2,
} from "lucide-react";

const USE_CASES = [
  {
    icon: Headset,
    title: "Customer Support and Agent Assist",
    summary:
      "Add signed receipts to high-volume support interactions so supervisors can review what the model said, what policy path was applied, and whether the response should be escalated.",
    fit: "Best when AI is customer-facing and quality review needs more than screenshots.",
    proof: ["Signed interaction receipt", "Trust score and telemetry", "Replayable audit trail"],
  },
  {
    icon: Briefcase,
    title: "Internal Knowledge Assistants",
    summary:
      "Instrument internal copilots used by employees so important answers carry verifiable evidence instead of relying on informal trust in the interface.",
    fit: "Best for HR, legal, finance, and operations teams using internal AI assistants.",
    proof: ["Prompt and response hashes", "Policy evaluation outputs", "Independent verification path"],
  },
  {
    icon: Building2,
    title: "Regulated Enterprise Workflows",
    summary:
      "Capture evidence for AI-assisted decisions in workflows that already require auditability, exception handling, and human review.",
    fit: "Best when the question is not just 'did the model answer' but 'can we prove what happened later.'",
    proof: ["Hash-chained receipts", "Exportable evidence chain", "Tamper-evident history"],
  },
  {
    icon: Landmark,
    title: "Public Sector and Procurement Reviews",
    summary:
      "Provide a verifiable record for AI-generated summaries, recommendations, or drafting assistance in environments where scrutiny and retention matter.",
    fit: "Best for teams that need a durable record of supported AI usage, not a black-box tool.",
    proof: ["Receipt verification with public key", "Chain integrity checks", "Review-ready JSON artifacts"],
  },
  {
    icon: Stethoscope,
    title: "Healthcare and Sensitive Data Operations",
    summary:
      "Use receipts to document governed AI-assisted interactions around triage, intake, or operational support where oversight matters and raw content handling may need tighter controls.",
    fit: "Best for controlled internal deployments with clear human review boundaries.",
    proof: ["Hash-only receipt mode", "Policy checkpoints", "Operator review trail"],
  },
  {
    icon: Bot,
    title: "Multi-Agent or Autonomous Workflows",
    summary:
      "Track chains of agent actions and surface verifiable receipts when an automated system performs a meaningful step on behalf of a human operator.",
    fit: "Best when agent behavior needs replay, attribution, and post-incident review.",
    proof: ["Sequential trust receipts", "Linked chain state", "Verification after retrieval"],
  },
];

const BUYER_LANES = [
  {
    title: "For Product Teams",
    body:
      "Make trust visible inside the application instead of asking users to trust an opaque model output.",
  },
  {
    title: "For Risk and Compliance",
    body:
      "Create reviewable evidence for supported AI interactions without depending entirely on vendor dashboards.",
  },
  {
    title: "For Platform Engineering",
    body:
      "Add a verification layer that can travel with the interaction record across services and environments.",
  },
];

const CAPABILITIES = [
  {
    icon: Fingerprint,
    title: "Receipts, Not Screenshots",
    description:
      "SONATE turns a supported AI interaction into a signed artifact that can be stored, retrieved, and independently checked later.",
  },
  {
    icon: Scale,
    title: "Governance Signals",
    description:
      "When policy scoring is enabled, receipts can include trust-oriented telemetry that helps operators understand why an interaction deserves attention.",
  },
  {
    icon: History,
    title: "Evidence That Travels",
    description:
      "Hash chaining and public-key verification make the evidence portable across demos, audits, and customer reviews.",
  },
];

export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10">
        <section className="pt-20 pb-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
              <Shield className="w-3 h-3 text-blue-400" />
              <span className="text-xs font-medium text-blue-400 uppercase tracking-widest">
                Where SONATE Fits
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Use cases for teams that need
              <span className="gradient-text"> verifiable AI records.</span>
            </h1>
            <p className="text-lg text-white/60 max-w-3xl mx-auto mb-10">
              SONATE is strongest where AI interactions need review, retrieval, and proof. These are the deployment patterns where signed receipts and independent verification add real value.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/trust-demo">
                <Button size="lg" className="gap-2">
                  Explore Trust Demo <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2">
                  Full Platform Demo <ExternalLink className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            {BUYER_LANES.map((lane) => (
              <div key={lane.title} className="glass-card p-6">
                <h2 className="text-lg font-heading font-semibold mb-3">{lane.title}</h2>
                <p className="text-sm text-white/60 leading-relaxed">{lane.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold mb-4">Supported Deployment Patterns</h2>
              <p className="text-white/60 max-w-3xl mx-auto">
                The strongest SONATE use cases have two things in common: the interaction matters, and someone may need to verify it later.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {USE_CASES.map((useCase) => {
                const Icon = useCase.icon;
                return (
                  <div key={useCase.title} className="glass-card p-6 md:p-7">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-3">{useCase.title}</h3>
                    <p className="text-white/70 mb-4 leading-relaxed">{useCase.summary}</p>
                    <div className="text-sm text-white/50 mb-5">{useCase.fit}</div>
                    <div className="space-y-2">
                      {useCase.proof.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-white/70">
                          <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold mb-4">What SONATE Adds</h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                The value is not just another monitoring panel. It is evidence that can survive outside the original runtime.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {CAPABILITIES.map((capability) => {
                const Icon = capability.icon;
                return (
                  <div key={capability.title} className="glass-card p-6">
                    <Icon className="w-10 h-10 text-blue-400 mb-4" />
                    <h3 className="text-lg font-heading font-semibold mb-2">{capability.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{capability.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="glass-card p-8 md:p-10">
              <div className="flex items-start gap-4">
                <FileCheck className="w-8 h-8 text-green-400 shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">A practical buyer filter</h2>
                  <p className="text-white/70 mb-4 leading-relaxed">
                    If the workflow never needs to be reviewed, exported, or independently verified, SONATE may be unnecessary overhead. If the workflow touches trust, compliance, customer impact, or delegated decision-making, the receipt layer becomes much more defensible.
                  </p>
                  <p className="text-white/50">
                    That is the standard to keep applying across the site and product: use verifiable receipts where proof matters, not everywhere just because AI is involved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">See the strongest use case live</h2>
            <p className="text-white/60 mb-8">
              Start with the trust demo if you want to see signed receipts generated and verified. Use the full platform demo if you want the broader operator and governance workflow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/trust-demo">
                <Button size="lg" className="gap-2">
                  Trust Demo <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/compliance-demo">
                <Button size="lg" variant="outline">
                  Compliance Demo
                </Button>
              </Link>
              <Link href={`mailto:${CONTACT_EMAIL}?subject=SONATE Use Cases`}>
                <Button size="lg" variant="outline">
                  Talk About Fit
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <footer className="py-12 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-tr from-blue-500 to-purple-600 rounded flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="font-heading font-bold">SONATE</span>
              <span className="text-white/40 text-sm">by yseeku</span>
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
