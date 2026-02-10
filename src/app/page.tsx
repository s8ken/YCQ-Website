"use client";

import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Fingerprint,
  Activity,
  FileText,
  AlertTriangle,
  CheckCircle2, 
  ArrowRight, 
  ExternalLink,
  Brain,
  Layers
} from "lucide-react";
import Link from "next/link";
import { CONSOLE_URL } from "@/lib/site";

export default function HomePage() {
  const coreFeatures = [
    {
      icon: Fingerprint,
      title: "Trust Receipts",
      description: "Cryptographic proof for every AI interaction. SHA-256 hashed, timestamped, and verifiable.",
      status: "Live"
    },
    {
      icon: Layers,
      title: "Policy Evaluation",
      description: "Real-time evaluation against 6 constitutional principles. Every response scored 0-100.",
      status: "Live"
    },
    {
      icon: Activity,
      title: "Live Monitoring",
      description: "Real-time dashboard showing trust scores, alerts, and agent activity across your organization.",
      status: "Live"
    },
    {
      icon: AlertTriangle,
      title: "Violation Alerts",
      description: "Automatic alerts when AI responses fall below trust thresholds or violate policies.",
      status: "Live"
    },
    {
      icon: FileText,
      title: "Audit Export",
      description: "Export complete audit trails as CSV or JSON for compliance reviews and regulatory needs.",
      status: "Live"
    },
    {
      icon: Brain,
      title: "Multi-Agent Support",
      description: "Manage multiple AI agents with individual trust scores, policies, and monitoring.",
      status: "Live"
    },
  ];

  const trustPrinciples = [
    { name: "Consent Architecture", weight: "25%", description: "Explicit user consent for AI interactions" },
    { name: "Inspection Mandate", weight: "20%", description: "All AI decisions must be auditable" },
    { name: "Continuous Validation", weight: "20%", description: "Ongoing behavior monitoring" },
    { name: "Ethical Override", weight: "15%", description: "Humans can always override AI" },
    { name: "Right to Disconnect", weight: "10%", description: "Users can opt out anytime" },
    { name: "Moral Recognition", weight: "10%", description: "Respect for human agency" },
  ];

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
            <Link href="/trust-demo" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Trust Demo</Link>
            <Link href="/verify" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Verify</Link>
            <Link href="/roadmap" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Roadmap</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href={CONSOLE_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="hidden sm:flex gap-2" size="sm">
                Open Platform <ExternalLink className="w-3 h-3" />
              </Button>
            </Link>
            <Link href="/trust-demo">
              <Button size="sm">Try Demo</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-white/80 uppercase tracking-widest">Platform Live</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-[1.1] tracking-tight">
              Trust Receipts for <br />
              <span className="gradient-text">Every AI Interaction</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
              Cryptographic proof that your AI systems behave as expected. Real-time policy evaluation, verifiable compliance, and complete audit trails.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link href="/trust-demo">
                <Button size="lg" className="w-full sm:w-auto gap-2">
                  Try Trust Demo <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href={CONSOLE_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                  Open Platform <ExternalLink className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Trust Receipt Preview */}
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-600 to-green-500 rounded-2xl blur-xl opacity-20" />
              <div className="relative glass-card p-6">
                <div className="bg-black/40 rounded-xl border border-white/5 p-6 font-mono text-sm">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Fingerprint className="w-4 h-4 text-blue-400" />
                      <span className="text-white/80 font-bold">Trust Receipt</span>
                    </div>
                    <span className="text-green-400 text-xs">VERIFIED</span>
                  </div>
                  <div className="space-y-2 text-left">
                    <div className="flex justify-between">
                      <span className="text-white/40">Hash:</span>
                      <span className="text-blue-400">sha256:9f86d08...c3e7c8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">Trust Score:</span>
                      <span className="text-green-400">94/100</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">Policy Status:</span>
                      <span className="text-green-400">PASS</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">Timestamp:</span>
                      <span className="text-white/60">2026-02-10T14:32:18Z</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What It Does Section */}
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What SONATE Does</h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                A trust layer for AI systems that generates cryptographic proof of behavior and evaluates every interaction against constitutional principles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreFeatures.map((feature, i) => (
                <div key={i} className="glass-card p-6 hover:border-white/20 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                      {feature.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-heading font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-white/50">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Protocol Section */}
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  The SONATE Trust Protocol
                </h2>
                <p className="text-white/60 mb-8">
                  Every AI response is evaluated against 6 constitutional principles. The weighted scores combine into a single trust score (0-100) that determines policy compliance.
                </p>
                <div className="space-y-3">
                  {trustPrinciples.map((principle, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/5">
                      <div className="w-12 text-right">
                        <span className="text-sm font-mono text-blue-400">{principle.weight}</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">{principle.name}</div>
                        <div className="text-xs text-white/40">{principle.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-card p-6">
                <div className="text-center mb-6">
                  <div className="text-6xl font-heading font-bold gradient-text mb-2">94</div>
                  <div className="text-white/40 text-sm">Trust Score</div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Consent Architecture</span>
                    <span className="text-green-400">96%</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '96%' }} />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Inspection Mandate</span>
                    <span className="text-green-400">92%</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '92%' }} />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Ethical Override</span>
                    <span className="text-green-400">95%</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '95%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Preview */}
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">How It Works</h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-12">
              SONATE sits between your application and AI providers, evaluating every interaction in real-time.
            </p>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {[
                { step: "1", title: "User Sends Message", desc: "Request goes through SONATE" },
                { step: "2", title: "AI Generates Response", desc: "Response captured for evaluation" },
                { step: "3", title: "Trust Evaluation", desc: "6 principles scored in real-time" },
                { step: "4", title: "Receipt Generated", desc: "Cryptographic proof stored" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold">{item.step}</span>
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/50">{item.desc}</p>
                </div>
              ))}
            </div>

            <Link href="/how-it-works">
              <Button variant="outline" className="gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              See It In Action
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Try the interactive demo to see trust receipts generated in real-time. No account required.
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
              <Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
              <Link href="/trust-demo" className="hover:text-white transition-colors">Trust Demo</Link>
              <Link href="/roadmap" className="hover:text-white transition-colors">Roadmap</Link>
              <Link href={CONSOLE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Platform</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
