"use client";

import Link from "next/link";
import { CONSOLE_URL } from "@/lib/site";
import {
  Shield,
  Brain,
  Target,
  Fingerprint,
  TrendingUp,
  Lock,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Zap,
  Eye,
  Users,
  FileCheck
} from "lucide-react";

export default function BenefitsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-stone-800">Sonate</Link>
              <div className="ml-2 text-sm text-stone-600">AI Trust Infrastructure</div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/#platform" className="text-stone-700 hover:text-stone-900 px-3 py-2 text-sm font-medium">
                  Platform
                </Link>
                <Link href="/benefits" className="text-blue-600 hover:text-blue-800 px-3 py-2 text-sm font-medium font-semibold">
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
          </div>
        </div>
      </nav>

      {/* Hero Section - Sovereign Identity */}
      <section className="bg-gradient-to-b from-stone-900 to-stone-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm mb-8">
              <Fingerprint className="w-4 h-4 mr-2" />
              Sovereign AI Identity
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your AI Should Speak With Your Voice.
              <span className="block text-blue-400">Not Everyone Else&apos;s.</span>
            </h1>
            <p className="text-xl text-stone-300 mb-8 max-w-3xl mx-auto">
              Generic AI models dilute your brand&apos;s identity. The <strong className="text-white">Sovereign Framework</strong> lets
              you deploy AI that reasons <em>through</em> your values, not around them. Your principles become a
              dynamic constitution that evolves with your organisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
                See It In Action <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/governance" className="border-2 border-stone-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-stone-700 transition-colors">
                How We Govern AI
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem - The Generic Trap */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              The Generic AI Trap
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Most AI deployments share a fatal flaw: they borrow intelligence without building identity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* The Problem */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-red-900">Without Sovereign AI</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">✗</span>
                  <div>
                    <strong className="text-red-900">Brand Dilution:</strong>
                    <span className="text-red-800"> Your AI sounds like everyone else&apos;s AI</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">✗</span>
                  <div>
                    <strong className="text-red-900">Value Drift:</strong>
                    <span className="text-red-800"> No way to ensure AI aligns with your principles</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">✗</span>
                  <div>
                    <strong className="text-red-900">Compliance Gaps:</strong>
                    <span className="text-red-800"> Generic guardrails miss industry-specific requirements</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">✗</span>
                  <div>
                    <strong className="text-red-900">Zero Accountability:</strong>
                    <span className="text-red-800"> When AI fails, you can&apos;t explain why</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">✗</span>
                  <div>
                    <strong className="text-red-900">Black Box Decisions:</strong>
                    <span className="text-red-800"> No audit trail, no proof, no trust</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* The Solution */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-emerald-600 mr-3" />
                <h3 className="text-2xl font-bold text-emerald-900">With Sonate</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-emerald-900">Sovereign Identity:</strong>
                    <span className="text-emerald-800"> AI that reasons through YOUR values</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-emerald-900">Dynamic Constitution:</strong>
                    <span className="text-emerald-800"> Living governance that evolves with your org</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-emerald-900">Quantified Alignment:</strong>
                    <span className="text-emerald-800"> Bedau Index proves identity coherence</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-emerald-900">Cryptographic Proof:</strong>
                    <span className="text-emerald-800"> Every decision has a verifiable receipt</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-emerald-900">Refusal as Trust Signal:</strong>
                    <span className="text-emerald-800"> When AI says no, you know why</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Value Proposition */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              The Cognitive Governance Layer
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Not another AI wrapper. A governance architecture that makes trust <strong>engineered</strong>, not crowdsourced.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Constitution */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <FileCheck className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Trust Kernel</h3>
              <p className="text-stone-600 mb-4">
                Your organisation&apos;s values encoded as a constitutional document. Not static rules -
                a living framework that defines <em>what your AI believes</em>.
              </p>
              <ul className="text-sm text-stone-500 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  6 Trust Principles mapped to policy
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  Versioned and auditable changes
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  Human-authored, machine-enforced
                </li>
              </ul>
            </div>

            {/* Identity DNA */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Fingerprint className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Identity Coherence</h3>
              <p className="text-stone-600 mb-4">
                The Bedau Index quantifies how well AI outputs align with your constitutional identity.
                Not vibes - mathematics.
              </p>
              <ul className="text-sm text-stone-500 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  0-100 coherence score per response
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  Drift detection over time
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  Automated re-alignment triggers
                </li>
              </ul>
            </div>

            {/* Insight Verification */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Resonance Engine</h3>
              <p className="text-stone-600 mb-4">
                Hybrid semantic + mathematical validation. Every AI decision is scored against
                your principles before execution.
              </p>
              <ul className="text-sm text-stone-500 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  Real-time alignment scoring
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  Semantic + rule-based validation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                  Intervention before harm
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Refusal as Feature */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-6">
                <Lock className="w-4 h-4 mr-2" />
                Trust Signal
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
                Refusal Is a Feature, Not a Bug
              </h2>
              <p className="text-lg text-stone-600 mb-6">
                When your AI refuses to act, that&apos;s not a failure - it&apos;s proof that your governance is working.
                Every refusal generates a cryptographic receipt explaining <strong>why</strong> the action was blocked
                and which principle it violated.
              </p>
              <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-6">
                <p className="text-stone-800 font-medium mb-2">
                  &ldquo;Trust is engineered, not crowdsourced.&rdquo;
                </p>
                <p className="text-stone-600 text-sm">
                  Unlike DAOs that vote on every decision, Sonate&apos;s constitutional framework means
                  AI knows what it should refuse <em>before</em> being asked.
                </p>
              </div>
              <Link href="/governance/why-not-dao" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                Why Not a DAO? <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-stone-900 rounded-xl p-6 text-stone-100 font-mono text-sm">
              <div className="text-amber-400 mb-2">// Refusal Receipt</div>
              <pre className="text-stone-300 overflow-x-auto">{`{
  "action": "REFUSED",
  "request": "Delete all user data",
  "principle_violated": "Data Sovereignty",
  "constitution_ref": "§4.2.1",
  "resonance_score": 0.12,
  "threshold": 0.70,
  "explanation": "Action violates data
    retention policy and user consent
    requirements",
  "receipt_hash": "sha256:8f3a9b...",
  "timestamp": "2025-01-13T14:32:01Z",
  "verifiable": true
}`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Who It&apos;s For */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Built For Enterprise AI Governance
            </h2>
            <p className="text-xl text-stone-600">
              Two buyers, one platform. Whether you&apos;re managing risk or driving innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Compliance Buyer */}
            <div className="bg-white rounded-xl p-8 border border-stone-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900">Compliance Leaders</h3>
                  <p className="text-stone-600 text-sm">Risk Managers, Legal, InfoSec</p>
                </div>
              </div>
              <p className="text-stone-600 mb-6">
                &ldquo;How do we deploy AI without creating regulatory liability?&rdquo;
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-stone-700">EU AI Act compliance mapping built-in</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-stone-700">Cryptographic audit trails for every decision</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-stone-700">Human-in-the-loop override with full accountability</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-stone-700">Explainable refusals for regulatory inquiries</span>
                </li>
              </ul>
              <Link href="/demo" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                See Compliance Dashboard <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Innovation Buyer */}
            <div className="bg-white rounded-xl p-8 border border-stone-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900">Innovation Leaders</h3>
                  <p className="text-stone-600 text-sm">R&D Leads, AI/ML Teams, Product</p>
                </div>
              </div>
              <p className="text-stone-600 mb-6">
                &ldquo;How do we ship AI faster without sacrificing quality?&rdquo;
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-stone-700">Alignment Lab for rapid iteration and testing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-stone-700">Multi-agent orchestration with trust scoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-stone-700">Model-agnostic - works with any LLM provider</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-stone-700">Deploy with confidence, iterate with data</span>
                </li>
              </ul>
              <Link href="/technology" className="text-purple-600 hover:text-purple-800 font-medium inline-flex items-center">
                Explore Technology <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Governance You Can See
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Real-time visibility into AI alignment, trust scores, and decision patterns.
            </p>
          </div>

          <div className="bg-stone-900 rounded-2xl p-8 shadow-2xl">
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {/* Metric Cards */}
              <div className="bg-stone-800 rounded-lg p-4">
                <div className="text-stone-400 text-sm mb-1">Identity Coherence</div>
                <div className="text-3xl font-bold text-emerald-400">94.2%</div>
                <div className="text-emerald-500 text-sm">+2.1% this week</div>
              </div>
              <div className="bg-stone-800 rounded-lg p-4">
                <div className="text-stone-400 text-sm mb-1">Resonance Score</div>
                <div className="text-3xl font-bold text-blue-400">0.87</div>
                <div className="text-blue-500 text-sm">Above threshold</div>
              </div>
              <div className="bg-stone-800 rounded-lg p-4">
                <div className="text-stone-400 text-sm mb-1">Trust Receipts</div>
                <div className="text-3xl font-bold text-purple-400">12,847</div>
                <div className="text-purple-500 text-sm">100% verifiable</div>
              </div>
              <div className="bg-stone-800 rounded-lg p-4">
                <div className="text-stone-400 text-sm mb-1">Refusal Rate</div>
                <div className="text-3xl font-bold text-amber-400">3.2%</div>
                <div className="text-amber-500 text-sm">Healthy boundary</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-stone-800 rounded-lg p-6">
                <h4 className="text-white font-semibold mb-4">Trust Principle Compliance</h4>
                <div className="space-y-3">
                  {[
                    { name: "Transparency", score: 96 },
                    { name: "Accountability", score: 94 },
                    { name: "Fairness", score: 91 },
                    { name: "Privacy", score: 98 },
                    { name: "Security", score: 95 },
                    { name: "Reliability", score: 89 },
                  ].map((principle) => (
                    <div key={principle.name} className="flex items-center">
                      <span className="text-stone-400 text-sm w-28">{principle.name}</span>
                      <div className="flex-1 bg-stone-700 rounded-full h-2 mx-3">
                        <div
                          className="bg-emerald-500 h-2 rounded-full"
                          style={{ width: `${principle.score}%` }}
                        />
                      </div>
                      <span className="text-stone-300 text-sm w-10">{principle.score}%</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-stone-800 rounded-lg p-6">
                <h4 className="text-white font-semibold mb-4">Recent Activity</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-emerald-400">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>Agent deployed with 0.92 resonance</span>
                    <span className="ml-auto text-stone-500">2m ago</span>
                  </div>
                  <div className="flex items-center text-amber-400">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    <span>Request refused - privacy principle</span>
                    <span className="ml-auto text-stone-500">8m ago</span>
                  </div>
                  <div className="flex items-center text-emerald-400">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>Trust receipt verified by auditor</span>
                    <span className="ml-auto text-stone-500">15m ago</span>
                  </div>
                  <div className="flex items-center text-blue-400">
                    <Users className="w-4 h-4 mr-2" />
                    <span>Human override approved action</span>
                    <span className="ml-auto text-stone-500">23m ago</span>
                  </div>
                  <div className="flex items-center text-emerald-400">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>Constitution v2.4 deployed</span>
                    <span className="ml-auto text-stone-500">1h ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-stone-900 to-stone-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make Your AI Sovereign?
          </h2>
          <p className="text-xl text-stone-300 mb-8">
            Stop deploying generic AI. Start deploying AI that thinks like your organisation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
              Schedule Demo <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/trust-demo" className="border-2 border-stone-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-stone-700 transition-colors">
              Try Trust Ledger
            </Link>
          </div>
          <p className="text-stone-500 text-sm mt-8">
            Enterprise deployment ready. SOC 2 compliant infrastructure.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 border-t border-stone-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-xl font-bold text-white">Sonate</div>
              <div className="text-stone-500 text-sm">AI Trust Infrastructure by YCQ Labs</div>
            </div>
            <div className="flex space-x-8 text-stone-400 text-sm">
              <Link href="/governance" className="hover:text-white">Governance</Link>
              <Link href="/technology" className="hover:text-white">Technology</Link>
              <Link href="/investors" className="hover:text-white">Investors</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-stone-800 text-center text-stone-500 text-sm">
            <p>
              Sonate operates under a constitutional governance model with human oversight.
              Trust is engineered, not crowdsourced.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
