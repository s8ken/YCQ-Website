"use client";

import { Button } from "@/components/ui/button";
import { 
  Shield, 
  CheckCircle2, 
  Circle,
  Clock,
  ArrowRight,
  ExternalLink,
  Zap
} from "lucide-react";
import Link from "next/link";
import { DEMO_URL, CONTACT_EMAIL } from "@/lib/site";

export default function RoadmapPage() {
  const milestones = [
    {
      phase: "Phase 1: Cryptographic Foundation",
      status: "complete",
      date: "Delivered",
      description: "Production-ready cryptographic trust infrastructure.",
      enables: "Independently verifiable AI decision evidence.",
      items: [
        { title: "Ed25519 Digital Signatures", status: "complete", desc: "Real signatures, not just hashing - independently verifiable" },
        { title: "Hash-Chained Receipts", status: "complete", desc: "Each receipt links to previous - tamper-evident audit trail" },
        { title: "W3C DID Implementation", status: "complete", desc: "did:web method with /.well-known/did.json resolution" },
        { title: "Public Key Endpoint", status: "complete", desc: "/.well-known/sonate-pubkey for independent verification" },
        { title: "6-Constraint Policy Engine", status: "complete", desc: "Low-latency governance scoring" },
        { title: "Independent Verification Page", status: "complete", desc: "Verify any receipt at /verify without account" },
        { title: "Multi-Agent DIDs", status: "complete", desc: "Each agent gets own DID with platform as controller" },
        { title: "Domain Linkage Proofs", status: "complete", desc: "/.well-known/did-configuration.json for DID verification" },
      ]
    },
    {
      phase: "Phase 1.5: Visibility & Drift Detection",
      status: "complete",
      date: "Delivered",
      description: "Visual trust indicators - making AI trust as visible as SSL certificates.",
      enables: "Real-time trust visibility for end users and operators.",
      items: [
        { title: "Behavioral Drift Detection", status: "complete", desc: "Detects significant shifts in reasoning patterns, output volatility, or policy alignment across sessions" },
        { title: "Trust Status Badge", status: "complete", desc: "Real-time AI trust state, embeddable like an SSL status indicator" },
        { title: "Tactical Replay", status: "complete", desc: "Time-travel debugger for AI conversations with trust score timeline" },
        { title: "Violation Persistence", status: "complete", desc: "Trust violations stored and queryable with full context" },
        { title: "Session Grouping", status: "complete", desc: "Receipts grouped by conversation for audit trails" },
        { title: "Guest Demo Mode", status: "complete", desc: "Try the platform without creating an account" },
      ]
    },
    {
      phase: "Phase 2: Enterprise Hardening",
      status: "complete",
      date: "Delivered",
      description: "Advanced features for enterprise deployments.",
      enables: "Enterprise-scale AI governance with policy enforcement and auditability.",
      items: [
        { title: "Unified Model Gateway (Provider-Agnostic Execution)", status: "complete", desc: "Single API for OpenAI, Anthropic, local models" },
        { title: "Role-Based Access Control (RBAC)", status: "complete", desc: "Granular permissions for teams" },
        { title: "Webhooks", status: "complete", desc: "Real-time alerts to Slack, PagerDuty, custom endpoints" },
        { title: "Key Rotation", status: "complete", desc: "Versioned key management with backward compatibility" },
        { title: "Custom Policy Rules", status: "complete", desc: "Tenant-specific rules with conditions and actions" },
        { title: "SSO Integration", status: "complete", desc: "Generic OIDC with Google, Microsoft, Okta support" },
      ]
    },
    {
      phase: "Phase 2.5: Data Governance Controls (Planned)",
      status: "planned",
      date: "Planned",
      description: "Enterprise data controls for compliance and privacy.",
      enables: "Configurable data handling, retention, and export policies.",
      items: [
        { title: "Configurable Payload Hashing", status: "planned", desc: "Sensitive fields can be stored as hashes only" },
        { title: "Retention Policies", status: "planned", desc: "Configurable retention windows per tenant" },
        { title: "Tenant Isolation", status: "planned", desc: "Strict data isolation boundaries" },
        { title: "Export Controls", status: "planned", desc: "Governed export flows for audits" },
      ]
    },
    {
      phase: "Phase 3: Autonomous Governance & Intelligence",
      status: "complete",
      date: "Delivered",
      description: "From static rule enforcement to autonomous AI governance with emergent behavior detection.",
      enables: "Continuous, adaptive oversight that detects risks no static policy could anticipate.",
      items: [
        { title: "Overseer Agent (Brain Cycle)", status: "complete", desc: "Autonomous governance agent: Sense → Analyze → Plan → Execute → Measure → Learn" },
        { title: "Trust Kernel Architecture", status: "complete", desc: "Constitutional framework defining the Overseer's own boundaries — refusals as a feature" },
        { title: "Emergence Detection (Bedau Index)", status: "complete", desc: "Computational emergence index identifies novel patterns across agent workflows" },
        { title: "Multi-Model Comparison Lab", status: "complete", desc: "Run same prompt across OpenAI, Anthropic, Gemini — compare trust scores, latency, compliance" },
        { title: "Compliance Reporting Engine", status: "complete", desc: "Automated compliance report generation with policy violation summaries" },
        { title: "Prompt Safety Scoring", status: "complete", desc: "Real-time prompt risk assessment with injection and jailbreak detection" },
        { title: "Live Alerting System", status: "complete", desc: "Real-time trust violation alerts, consent withdrawals, and emergence notifications" },
        { title: "30+ Page Governance Dashboard", status: "complete", desc: "Trust trends, agent comparison, drift monitoring, experiment tracking, audit trails" },
      ]
    },
    {
      phase: "Phase 4: Adaptive Governance & Scale (Planned)",
      status: "planned",
      date: "Planned",
      description: "Multi-agent coordination, on-chain anchoring, and governance marketplace.",
      enables: "Enterprise-scale governance across multi-agent workflows with immutable audit trails.",
      items: [
        { title: "Multi-Agent Swarm Governance", status: "planned", desc: "Governance protocols for coordinated multi-agent workflows with delegation and oversight chains" },
        { title: "On-Chain Receipt Anchoring", status: "planned", desc: "Anchor receipt hashes to blockchain for immutable, third-party-verifiable audit trails" },
        { title: "Governance Policy Marketplace", status: "planned", desc: "Shareable, composable policy templates for industry-specific compliance requirements" },
        { title: "Cross-Organization Trust Federation", status: "planned", desc: "Enable multiple organizations to verify each other's AI governance through shared trust protocols" },
        { title: "Advanced Drift Prediction", status: "planned", desc: "ML-based prediction of governance drift before threshold violations occur" },
        { title: "Governance Simulation Sandbox", status: "planned", desc: "Replay historical sessions under new policy versions to evaluate impact before deployment" },
      ]
    }
  ];

  const getNoteText = () => {
    return "As AI systems become agentic and persistent, governance must extend beyond single organizations. Phase 4 introduces cross-organizational trust federation, on-chain anchoring, and governance marketplaces for the multi-agent era.";
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "complete":
        return <CheckCircle2 className="w-4 h-4 text-green-400" />;
      case "in-progress":
        return <Clock className="w-4 h-4 text-amber-400" />;
      default:
        return <Circle className="w-4 h-4 text-white/30" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "complete":
        return <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">Complete</span>;
      case "in-progress":
        return <span className="text-xs px-2 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">In Progress</span>;
      default:
        return <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/40 border border-white/10">Planned</span>;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-purple-900/10 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10">
        {/* Hero */}
        <section className="pt-20 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Roadmap
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              What we&apos;ve built, what we&apos;re building, and where we&apos;re headed. No vapor - just shipped features and committed plans.
            </p>
          </div>
        </section>

        {/* What We Are Not Building */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-heading font-bold mb-6">What We Are Not Building</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-6">
                <ul className="text-sm text-white/60 space-y-2">
                  <li>Not building a foundation model</li>
                  <li>Not building a chatbot</li>
                  <li>Not replacing model providers</li>
                  <li>Not an AI wrapper</li>
                </ul>
              </div>
              <div className="glass-card p-6">
                <p className="text-sm text-white/60">
                  We are a trust infrastructure layer: policy enforcement, verifiable receipts, observability, and independent verification.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Milestones */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {milestones.map((milestone, i) => (
              <div key={i} className="glass-card p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-heading font-bold">{milestone.phase}</h2>
                    <p className="text-white/50 text-sm mt-1">{milestone.description}</p>
                    {milestone.phase.includes("Phase 4") && (
                      <p className="text-white/40 text-xs mt-3 italic">{getNoteText()}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-white/40">{milestone.date}</span>
                    {getStatusBadge(milestone.status)}
                  </div>
                </div>

                <div className="space-y-3">
                  {milestone.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                      {getStatusIcon(item.status)}
                      <div className="flex-1">
                        <div className="text-sm font-medium">{item.title}</div>
                        <div className="text-xs text-white/40">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* What This Enables */}
                {milestone.enables && (
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center shrink-0">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">What This Enables</div>
                        <div className="text-base font-medium text-white">{milestone.enables}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Note */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-6 border-amber-500/20">
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-semibold mb-2">About This Roadmap</h3>
                  <p className="text-sm text-white/60">
                    &quot;Delivered&quot; phases represent modules implemented in the current platform or public demos. &quot;Planned&quot; phases represent committed directions - timelines may shift based on market demand and customer feedback. 
                    We don&apos;t announce features until confident we can deliver them with enterprise quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-heading font-bold mb-6">Current Platform Footprint</h2>
            <p className="text-white/60 mb-8">
              Phases 1–3 describe the current platform footprint: live trust receipts, deployed verification infrastructure, and advanced governance modules in active development and demos. Phase 4 expansion is underway.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={`mailto:${CONTACT_EMAIL}?subject=SONATE Pilot Interest`}>
                <Button size="lg" className="gap-2">
                  Request Pilot <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2">
                  Full Demo <ExternalLink className="w-4 h-4" />
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
              <span className="text-white/40 text-sm">by yseeku</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/40">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
              <Link href="/investors" className="hover:text-white transition-colors">Investors</Link>
              <Link href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Full Demo</Link>
              <Link href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
