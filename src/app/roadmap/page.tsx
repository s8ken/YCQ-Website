"use client";

import { Button } from "@/components/ui/button";
import { 
  Shield, 
  CheckCircle2, 
  Circle,
  Clock,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import Link from "next/link";
import { CONSOLE_URL } from "@/lib/site";

export default function RoadmapPage() {
  const milestones = [
    {
      phase: "Phase 1: Foundation",
      status: "complete",
      date: "Delivered",
      description: "Core trust infrastructure for AI systems.",
      items: [
        { title: "Trust Receipt Generation", status: "complete", desc: "Cryptographic proof for every interaction" },
        { title: "6-Principle Policy Evaluation", status: "complete", desc: "Constitutional AI scoring framework" },
        { title: "Real-time Dashboard", status: "complete", desc: "Live monitoring of trust scores and alerts" },
        { title: "Multi-Agent Support", status: "complete", desc: "Manage multiple AI agents per tenant" },
        { title: "Audit Export (CSV/JSON)", status: "complete", desc: "Complete audit trail export" },
        { title: "JWT Authentication", status: "complete", desc: "Secure API access" },
      ]
    },
    {
      phase: "Phase 2: Enterprise",
      status: "in-progress",
      date: "Q2 2026",
      description: "Advanced features for enterprise deployments.",
      items: [
        { title: "Multi-Provider API Gateway", status: "in-progress", desc: "Single API for OpenAI, Anthropic, local models" },
        { title: "Role-Based Access Control", status: "planned", desc: "Granular permissions for teams" },
        { title: "Compliance Report Generation", status: "planned", desc: "Automated regulatory reports" },
        { title: "Custom Policy Rules", status: "planned", desc: "Define your own evaluation criteria" },
        { title: "SSO Integration", status: "planned", desc: "Enterprise identity providers" },
      ]
    },
    {
      phase: "Phase 3: Decentralized Trust",
      status: "planned",
      date: "2026-2027",
      description: "Portable, externally verifiable trust receipts.",
      items: [
        { title: "W3C Verifiable Credentials", status: "planned", desc: "Industry-standard credential format" },
        { title: "Decentralized Identifiers (DID)", status: "planned", desc: "Self-sovereign identity for agents" },
        { title: "Public Verification Service", status: "planned", desc: "Anyone can verify receipts without our backend" },
        { title: "Hash Anchoring", status: "planned", desc: "Optional blockchain timestamping" },
      ]
    }
  ];

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
            <Link href="/trust-demo" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Trust Demo</Link>
            <Link href="/roadmap" className="text-sm font-medium text-white transition-colors">Roadmap</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/trust-demo">
              <Button size="sm">Try Demo</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero */}
        <section className="pt-20 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Roadmap
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              What we've built, what we're building, and where we're headed. No vapor - just shipped features and committed plans.
            </p>
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
                    This roadmap reflects our current plans and priorities. "Planned" items are committed directions but timelines may shift. 
                    We don't announce features until we're confident we can deliver them. Phase 1 is live and usable today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-heading font-bold mb-6">Try What's Live Today</h2>
            <p className="text-white/60 mb-8">
              Phase 1 is complete and deployed. See trust receipts in action.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/trust-demo">
                <Button size="lg" className="gap-2">
                  Try Trust Demo <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href={CONSOLE_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2">
                  Full Platform <ExternalLink className="w-4 h-4" />
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
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
