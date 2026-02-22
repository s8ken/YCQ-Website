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
  Mail,
  Code,
  Lock,
  Server,
  BookOpen,
  Zap,
  Eye,
  Check
} from "lucide-react";
import Link from "next/link";
import { DEMO_URL, CONTACT_EMAIL } from "@/lib/site";

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
      title: "Behavioral Drift Detection",
      description: "Detects significant shifts in reasoning patterns, output volatility, or policy alignment across sessions.",
      status: "Live"
    },
    {
      icon: BadgeCheck,
      title: "Embeddable Trust Status Badge",
      description: "Real-time AI trust state, embeddable like an SSL status indicator.",
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
      description: "Each response scored against six enforceable governance constraints. Adds <50ms overhead per interaction. Scores from 0–100 with detailed breakdowns.",
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

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-8">
              <span className="text-lg">⭐</span>
              <span className="text-xs font-medium text-yellow-400 uppercase tracking-widest">Production Ready - Hardening Complete</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-[1.1] tracking-tight">
              The Standard for<br />
              <span className="gradient-text">Verifiable AI Trust</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-300 max-w-3xl mx-auto mb-4 font-semibold">
              The Open Standard for Cryptographically-Verifiable AI Governance
            </p>
            
            <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed">
              SONATE Trust Receipt Specification v1.0 — Ed25519-signed receipts, hash-chained audit trails, independently verifiable. No vendor lock-in. No backend required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link href="/developers#quickstart">
                <Button size="lg" className="w-full sm:w-auto gap-2 bg-blue-600 hover:bg-blue-700">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/developers#specification">
                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                  Read the Specification <BookOpen className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/verify">
                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                  Verify a Receipt <Shield className="w-4 h-4" />
                </Button>
              </Link>
              <Link href={`mailto:${CONTACT_EMAIL}?subject=SONATE Enterprise`}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                  Enterprise <Mail className="w-4 h-4" />
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

        {/* Why SONATE Exists - Emotional Context */}
        <section className="py-20 px-6 border-t border-white/5 bg-gradient-to-r from-red-900/10 to-orange-900/10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold mb-6">Why SONATE Exists</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-white">The Problem</h3>
                <ul className="space-y-4 text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">→</span>
                    <span><strong>No audit trail:</strong> AI systems make consequential decisions with zero verifiable record of what they did or why.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">→</span>
                    <span><strong>No safety verification:</strong> Enterprises have no way to independently verify that AI outputs meet governance requirements.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">→</span>
                    <span><strong>Vendor lock-in:</strong> Trust verification depends on proprietary dashboards with no interoperability.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">→</span>
                    <span><strong>Compliance gaps:</strong> Regulators have no standard way to audit AI behavior across organizations.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-blue-300">The SONATE Solution</h3>
                <ul className="space-y-4 text-white/70">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Cryptographic proof:</strong> Ed25519-signed receipts for every AI interaction. Tamper-evident via hash chains.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Independent verification:</strong> Verify receipts in-browser with zero backend dependency. Full audit trail available.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Open standard:</strong> RFC 8785 canonicalization, W3C DIDs, cross-language SDKs. No vendor lock-in.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Compliance-ready:</strong> GDPR, HIPAA, SOC2, NIST-aligned. Privacy-by-default.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Production Ready - Hardening Complete */}
        <section className="py-20 px-6 border-t border-white/5 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <span className="text-2xl">✅</span>
                <span className="font-semibold text-green-400">February 21, 2026</span>
              </div>
              <h2 className="text-4xl font-heading font-bold mb-4">SONATE Hardening Sprint Complete</h2>
              <p className="text-xl text-white/70">
                From research prototype to production-ready enterprise platform in one intensive sprint.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="p-6 rounded-lg border border-green-500/20 bg-green-500/5 text-center">
                <div className="text-5xl font-bold text-green-400 mb-2">3,200+</div>
                <p className="text-white/70">Lines of Code</p>
              </div>
              <div className="p-6 rounded-lg border border-blue-500/20 bg-blue-500/5 text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">90+</div>
                <p className="text-white/70">Regression Tests</p>
              </div>
              <div className="p-6 rounded-lg border border-purple-500/20 bg-purple-500/5 text-center">
                <div className="text-5xl font-bold text-purple-400 mb-2">380</div>
                <p className="text-white/70">Line Specification</p>
              </div>
              <div className="p-6 rounded-lg border border-yellow-500/20 bg-yellow-500/5 text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">0</div>
                <p className="text-white/70">Security Issues</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-white/80">RFC-Style Specification</span>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-white/80">Python SDK (PyPI-Ready)</span>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-white/80">Policy Engine (3 Policies)</span>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-white/80">Verification Playground</span>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-white/80">Multi-Model Examples</span>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-white/80">Cross-Language Tests</span>
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
                  Each response scored against six enforceable governance constraints. Adds &lt;50ms overhead per interaction. The weighted scores combine into a single trust score (0–100) that determines policy compliance.
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

        {/* How It Works - Architecture Diagram */}
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">The SONATE Architecture</h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Cryptographic proof-of-behavior for every AI interaction. Four-step pipeline from request to independent verification.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Zap, step: "1", title: "AI Call Instrumented", desc: "wrap() hooks OpenAI, Anthropic, Gemini, or local LLM", color: "from-blue-500 to-blue-600" },
                { icon: Lock, step: "2", title: "Receipt Generated", desc: "Canonical JSON → SHA-256 hash → Ed25519 signature", color: "from-purple-500 to-purple-600" },
                { icon: Server, step: "3", title: "Hash-Chained", desc: "Tamper-evident temporal ordering. Prevents insertion/deletion.", color: "from-green-500 to-green-600" },
                { icon: Eye, step: "4", title: "Independently Verified", desc: "Browser verification. Zero backend. No vendor lock-in.", color: "from-orange-500 to-orange-600" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="relative">
                    {i < 3 && <div className="absolute right-0 top-1/3 w-6 h-1 bg-gradient-to-r from-white/20 to-transparent transform translate-x-full" />}
                    <div className="glass-card p-6 text-center h-full">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-xs font-mono text-white/50 mb-2">Step {item.step}</div>
                      <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-white/50">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="glass-card p-8 mb-8">
              <h3 className="text-lg font-heading font-semibold mb-4">Performance Guarantees</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">&lt;50ms</div>
                  <p className="text-sm text-white/60">Verification latency per receipt</p>
                </div>
                <div className="text-center border-l border-r border-white/10">
                  <div className="text-3xl font-bold text-blue-400 mb-2">&lt;5KB</div>
                  <p className="text-sm text-white/60">Memory per receipt</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">0</div>
                  <p className="text-sm text-white/60">Backend dependencies</p>
                </div>
              </div>
            </div>

            <Link href="/developers#wrap">
              <Button variant="outline" className="gap-2">
                Explore the API <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Verify It Yourself - Proof Section */}
        <section className="py-20 px-6 border-t border-white/5 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Verify Any Receipt — In Your Browser</h2>
              <p className="text-white/60 max-w-2xl mx-auto mb-8">
                This is your strongest proof point. Paste a receipt and verify the signature, hash chain, DID identity, and privacy mode — all without touching a backend.
              </p>
            </div>
            <div className="glass-card p-8 text-center">
              <Fingerprint className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl font-heading font-semibold mb-4">Test the Playground Now</h3>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Load a sample receipt, inspect every field, and verify the cryptography. No signup. No data collection. Pure verification.
              </p>
              <Link href="/verify">
                <Button size="lg" className="gap-2 bg-purple-600 hover:bg-purple-700">
                  Try Verification Playground <Shield className="w-4 h-4" />
                </Button>
              </Link>
              <p className="text-xs text-white/40 mt-6">
                Verification is available as a TypeScript SDK, Python library, or standalone web component.
              </p>
            </div>
          </div>
        </section>

        {/* For Developers */}
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-center">For Developers</h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-12 text-center">
              One-line wrap(). Full support for OpenAI, Anthropic, Gemini, and local LLMs. TypeScript or Python.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Code className="w-5 h-5 text-blue-400" />
                  <h3 className="font-heading font-semibold">TypeScript</h3>
                </div>
                <pre className="bg-black/50 rounded-lg p-4 text-sm overflow-x-auto mb-4">
                  <code className="text-green-400">{`import { wrap } from '@sonate/sdk';

const receipt = await wrap(
  client.chat.completions.create,
  { model: 'gpt-4', messages }
);

// receipt is signed Ed25519`}</code>
                </pre>
                <Link href="/developers#typescript">
                  <Button variant="outline" size="sm" className="gap-1">
                    View Docs <ArrowRight className="w-3 h-3" />
                  </Button>
                </Link>
              </div>
              <div className="glass-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Code className="w-5 h-5 text-blue-400" />
                  <h3 className="font-heading font-semibold">Python</h3>
                </div>
                <pre className="bg-black/50 rounded-lg p-4 text-sm overflow-x-auto mb-4">
                  <code className="text-green-400">{`from sonate.sdk import wrap

receipt = await wrap(
  client.messages.create,
  model='claude-3-opus',
  messages=[...]
)

# receipt is signed Ed25519`}</code>
                </pre>
                <Link href="/developers#python">
                  <Button variant="outline" size="sm" className="gap-1">
                    View Docs <ArrowRight className="w-3 h-3" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-lg text-center">
              <p className="text-white/60 mb-4">Supported AI Platforms</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm border border-blue-500/30">OpenAI</span>
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm border border-purple-500/30">Anthropic</span>
                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm border border-green-500/30">Google Gemini</span>
                <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm border border-orange-500/30">Local LLMs</span>
                <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-400 text-sm border border-pink-500/30">Custom Functions</span>
              </div>
            </div>
          </div>
        </section>

        {/* For Enterprises */}
        <section className="py-20 px-6 border-t border-white/5 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-center">For Enterprises</h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-12 text-center">
              Governance infrastructure that scales. Policy engine, privacy-by-default, DID-based identity.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Policy Engine v1", desc: "Built-in Safety, Hallucination, and Compliance policies. Extensible JSON Schema rules." },
                { title: "Privacy-by-Default", desc: "Hash-only mode for GDPR/HIPAA. Never transmit raw content without consent." },
                { title: "W3C DID Identity", desc: "Decentralized identifiers for platforms and agents. Standard did:web with public key resolution." },
                { title: "Zero-Backend Verification", desc: "Enterprise customers can verify receipts without calling home. Full audit autonomy." },
                { title: "NIST/ISO Alignment", desc: "Mapped to NIST SP 800-32, ISO 27001, SOC2 Type II, and GDPR Article 22." },
                { title: "Custom Policy Support", desc: "Build domain-specific policies. Patent scores, medical accuracy, regulatory compliance." },
              ].map((item, i) => (
                <div key={i} className="glass-card p-6">
                  <CheckCircle2 className="w-6 h-6 text-blue-400 mb-4" />
                  <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/60">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href={`mailto:${CONTACT_EMAIL}?subject=Enterprise Governance`}>
                <Button size="lg" className="gap-2">
                  Schedule Governance Demo <Mail className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* For Auditors & Regulators */}
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-center">For Auditors & Regulators</h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-12 text-center">
              Standard audit evidence. Deterministic. Independently verifiable. Compliance-mapped.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-heading font-semibold mb-6">What You Get</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Hash-Chained Audit Trail</strong> — Proof of temporal ordering. Prevents insertion/deletion/reordering.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong>RFC 8785 Determinism</strong> — Canonical JSON. Same input → identical hash across implementations.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Ed25519 Signature Verification</strong> — Public key resolution via W3C DID. Standard cryptography.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Test Vectors</strong> — Interoperability examples. Verify against SONATE or third-party implementations.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold mb-6">Compliance Mappings</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong>GDPR Article 22</strong> — Right to explanation. Audit trail proves human oversight.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong>HIPAA § 164.312</strong> — Audit controls. Hash-only mode for patient privacy.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong>SOC2 Type II</strong> — Trustworthiness. Cryptographic proof of behavior.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong>ISO 27001</strong> — Information security. Tamper-evident receipts satisfy A.12 controls.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <Link href={`mailto:${CONTACT_EMAIL}?subject=Regulatory Compliance Review`}>
                <Button size="lg" variant="outline" className="gap-2">
                  Request Compliance Briefing <FileText className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* SONATE vs Alternatives */}
        <section className="py-20 px-6 border-t border-white/5 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-center">SONATE vs Alternatives</h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-12 text-center">
              How SONATE compares on the features that matter most.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 font-heading font-semibold">Feature</th>
                    <th className="text-center py-4 px-4 font-heading font-semibold text-blue-400">SONATE</th>
                    <th className="text-center py-4 px-4 font-heading font-semibold text-white/60">Observability Tools</th>
                    <th className="text-center py-4 px-4 font-heading font-semibold text-white/60">Safety Filters</th>
                    <th className="text-center py-4 px-4 font-heading font-semibold text-white/60">Logging Systems</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Cryptographic Receipts", sonate: true, alt1: false, alt2: false, alt3: false },
                    { feature: "Zero-Backend Verification", sonate: true, alt1: false, alt2: false, alt3: false },
                    { feature: "Privacy-by-Default (Hash-Only)", sonate: true, alt1: false, alt2: false, alt3: false },
                    { feature: "Multi-Model Support", sonate: true, alt1: true, alt2: true, alt3: true },
                    { feature: "Policy Engine", sonate: true, alt1: false, alt2: true, alt3: false },
                    { feature: "Open Specification", sonate: true, alt1: false, alt2: false, alt3: false },
                    { feature: "Cross-Language SDKs", sonate: true, alt1: true, alt2: false, alt3: true },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="py-4 px-4 font-medium">{row.feature}</td>
                      <td className="py-4 px-4 text-center">{row.sonate ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <span className="text-white/20">—</span>}</td>
                      <td className="py-4 px-4 text-center">{row.alt1 ? <Check className="w-5 h-5 text-white/40 mx-auto" /> : <span className="text-white/20">—</span>}</td>
                      <td className="py-4 px-4 text-center">{row.alt2 ? <Check className="w-5 h-5 text-white/40 mx-auto" /> : <span className="text-white/20">—</span>}</td>
                      <td className="py-4 px-4 text-center">{row.alt3 ? <Check className="w-5 h-5 text-white/40 mx-auto" /> : <span className="text-white/20">—</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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

        {/* Clear Conversion Funnel */}
        <section className="py-20 px-6 border-t border-white/5 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-center">Your SONATE Conversion Path</h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-12 text-center">
              From curiosity to production deployment in five steps.
            </p>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                {
                  step: "1",
                  title: "Understand the Standard",
                  desc: "Read the 380-line RFC-style specification. Understand the cryptography.",
                  link: "/developers#specification",
                  linkText: "Read Spec"
                },
                {
                  step: "2",
                  title: "Instrument Your First Call",
                  desc: "One-line wrap(). Works with OpenAI, Anthropic, Gemini, local LLMs.",
                  link: "/developers#quickstart",
                  linkText: "Get Started"
                },
                {
                  step: "3",
                  title: "Verify a Receipt",
                  desc: "Paste JSON in the playground. Verify signature, chain, DID, privacy mode.",
                  link: "/verify",
                  linkText: "Try Verification"
                },
                {
                  step: "4",
                  title: "Explore the Dashboard",
                  desc: "See all receipts, trust scores, policy violations, audit trails.",
                  link: DEMO_URL,
                  linkText: "Full Demo",
                  external: true
                },
                {
                  step: "5",
                  title: "Launch Your Pilot",
                  desc: "Work with our team on a 12-week pilot. $50K-150K typically.",
                  link: `mailto:${CONTACT_EMAIL}?subject=SONATE Pilot`,
                  linkText: "Request Pilot"
                },
              ].map((item, i) => (
                <Link key={i} href={item.link} {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                  <div className="glass-card p-6 hover:border-white/30 transition-colors cursor-pointer h-full">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4">
                      <span className="font-bold text-sm">{item.step}</span>
                    </div>
                    <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-white/60 mb-4">{item.desc}</p>
                    <span className="text-xs text-green-400 hover:text-green-300 font-medium flex items-center gap-1">
                      {item.linkText} <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Build Verifiable AI?
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              SONATE is production-ready today. Start with the verification playground, read the spec, or schedule a governance demo with our team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/verify">
                <Button size="lg" className="gap-2 bg-green-600 hover:bg-green-700">
                  Try Verification <Shield className="w-4 h-4" />
                </Button>
              </Link>
              <Link href={`mailto:${CONTACT_EMAIL}?subject=SONATE Pilot Interest`}>
                <Button size="lg" variant="outline" className="gap-2">
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
              <Link href="/investors" className="hover:text-white transition-colors">Investors</Link>
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
