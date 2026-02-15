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
  Layers,
  Radar,
  BadgeCheck,
  History,
  Mail
} from "lucide-react";
import Link from "next/link";
import { CONSOLE_URL, DEMO_URL, CONTACT_EMAIL } from "@/lib/site";

export default function HomePage() {
  const coreFeatures = [
    {
      icon: Fingerprint,
      title: "Ed25519 Signed Receipts",
      description: "Every interaction signed with Ed25519 digital signatures. Hash-chained for tamper-evident audit trails. Independently verifiable.",
      status: "Live"
    },
    {
      icon: Radar,
      title: "Identity Coherence Radar",
      description: "Spider chart showing 6-dimension agent fingerprint. Detects when AI 'changes personality' mid-conversation with shift alerts.",
      status: "Live"
    },
    {
      icon: BadgeCheck,
      title: "Trust Passport Widget",
      description: "Embeddable badge showing real-time trust status - like the SSL green padlock, but for AI. Drop into any website.",
      status: "Live"
    },
    {
      icon: History,
      title: "Tactical Replay",
      description: "Time-travel debugger for AI conversations. Scrub through interactions, see trust scores evolve, replay identity shifts.",
      status: "Live"
    },
    {
      icon: Activity,
      title: "Real-time Policy Scoring",
      description: "Every AI response evaluated against 6 constitutional principles in under 50ms. Scores from 0-100 with detailed breakdowns.",
      status: "Live"
    },
    {
      icon: Layers,
      title: "W3C DID Integration",
      description: "Decentralized Identifiers for platform and agents. Standard did:web method with public key resolution.",
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
            <Link href="/developers" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Developers</Link>
            <Link href="/trust-demo" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Trust Demo</Link>
            <Link href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Full Demo</Link>
            <Link href="/roadmap" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Roadmap</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href={DEMO_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="hidden sm:flex gap-2" size="sm">
                Full Demo <ExternalLink className="w-3 h-3" />
              </Button>
            </Link>
            <Link href={`mailto:${CONTACT_EMAIL}?subject=SONATE Pilot Interest`}>
              <Button size="sm">Request Pilot</Button>
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
              Ed25519 signed receipts for every AI interaction. W3C DIDs for identity. Hash-chained audit trails. Independently verifiable - no trust required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link href={`mailto:${CONTACT_EMAIL}?subject=SONATE Pilot Interest`}>
                <Button size="lg" className="w-full sm:w-auto gap-2">
                  Request Pilot <Mail className="w-4 h-4" />
                </Button>
              </Link>
              <Link href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                  Full Demo <ExternalLink className="w-4 h-4" />
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
                      <span className="text-white/40">ID (SHA-256):</span>
                      <span className="text-blue-400">f860961876968f2c...</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">Signature:</span>
                      <span className="text-purple-400">Ed25519:f33ee6d928...</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">Agent DID:</span>
                      <span className="text-blue-400">did:web:yseeku.com:agents:...</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">Chain Hash:</span>
                      <span className="text-green-400">715799d2fb16c4b6...</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">Trust Score:</span>
                      <span className="text-green-400">94/100 PASS</span>
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
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Cryptographic Trust Infrastructure</h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Real cryptography, not just hashing. Ed25519 signatures, W3C Decentralized Identifiers, and hash-chained receipts you can verify independently.
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

        {/* Open Source & Licensing */}
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Open Verification, Protected Core
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                We believe in transparency for trust verification while protecting the innovation that makes it possible.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Open Source SDK */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold">Verification SDK</h3>
                    <span className="text-xs text-green-400 font-medium">MIT License</span>
                  </div>
                </div>
                <p className="text-sm text-white/60 mb-4">
                  Independently verify trust receipts in your own applications. Full Ed25519 signature verification, chain hash validation, and TypeScript support.
                </p>
                <ul className="text-sm text-white/50 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    Node.js &amp; browser support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    Zero dependencies
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    Full TypeScript definitions
                  </li>
                </ul>
                <Link 
                  href="https://github.com/s8ken/sonate-verify-sdk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors"
                >
                  View on GitHub <ExternalLink className="w-3 h-3" />
                </Link>
              </div>

              {/* Proprietary Platform */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/5 border border-purple-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold">Core Platform</h3>
                    <span className="text-xs text-purple-400 font-medium">Proprietary</span>
                  </div>
                </div>
                <p className="text-sm text-white/60 mb-4">
                  The policy engine, trust scoring algorithms, and receipt generation are proprietary. Source available for transparency, commercial licensing available.
                </p>
                <ul className="text-sm text-white/50 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-purple-400" />
                    Policy engine &amp; scoring
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-purple-400" />
                    Receipt generation &amp; signing
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-purple-400" />
                    Enterprise dashboard
                  </li>
                </ul>
                <Link 
                  href="mailto:licensing@yseeku.com"
                  className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Enterprise Licensing <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <p className="text-center text-sm text-white/40 mt-8">
              Why this model? Anyone can verify receipts independently (trust), but the core technology remains protected (business sustainability).
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready for Your Pilot?
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              We're working with select enterprises on $50K-150K pilots. See trust receipts in action, then let's talk about your AI compliance needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={`mailto:${CONTACT_EMAIL}?subject=SONATE Pilot Interest`}>
                <Button size="lg" className="gap-2">
                  Request Pilot <Mail className="w-4 h-4" />
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
              <span className="text-white/40 text-sm">by YCQ Labs</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/40">
              <Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
              <Link href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Full Demo</Link>
              <Link href="/roadmap" className="hover:text-white transition-colors">Roadmap</Link>
              <Link href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
