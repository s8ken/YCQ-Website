"use client";

import { Button } from "@/components/ui/button";
import {
  Eye,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Lock,
  ArrowRight,
  Database,
  FileText,
  BarChart3,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { DEMO_URL, CONTACT_EMAIL } from "@/lib/site";

export default function ArchiveValidationPage() {
  const findings = [
    {
      icon: BarChart3,
      label: "Conversations Analyzed",
      value: "486",
      detail: "7 months of longitudinal development history",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      label: "Drift Events Detected",
      value: "94",
      detail: "30 extreme velocity transitions + 43 critical shifts + 21 moderate transitions",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: AlertTriangle,
      label: "Security Patterns Flagged",
      value: "370",
      detail: "Legacy credential exchange patterns that modern governance prevents",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Eye,
      label: "Framework Validation",
      value: "Confirmed",
      detail: "System correctly identifies real operational risks in authentic data",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  const trustDistribution = [
    { range: "High Trust (8–10)", percentage: 43, color: "bg-emerald-500" },
    { range: "Medium Trust (5–8)", percentage: 39, color: "bg-amber-500" },
    { range: "Low Trust (<5)", percentage: 15, color: "bg-red-500" },
  ];

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
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-6 inline-flex px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Eye className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-medium text-blue-400 uppercase tracking-widest">
                Framework Validation
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              What SONATE Would Have Caught
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
              Most governance systems validate against synthetic test cases. We did something different: we analyzed the 486 real conversations that inspired SONATE's design. The system correctly identifies drift patterns, policy gaps, security risks, and trust discontinuities in its own origin story.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href={DEMO_URL || "/trust-demo"}>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg">
                  Explore Dashboard <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="#dataset">
                <Button
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-gray-900 px-8 py-6 text-lg rounded-lg"
                >
                  View Findings
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Dataset Overview */}
        <section id="dataset" className="py-20 px-6 border-t border-gray-800">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4">The Archive</h2>
              <p className="text-gray-400 text-lg">
                Between June 2025 and February 2026, 486 AI conversations were conducted during the research and development of the SYMBI framework. These interactions predate cryptographic trust receipts and policy enforcement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <FileText className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">What We Analyzed</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>486 conversations across 7 months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Multi-model interactions (Claude, GPT-4, Grok, DeepSeek)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>2.3GB of conversational artifacts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Unsigned legacy data (pre-receipt era)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <Lock className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Important Context</h3>
                <p className="text-gray-300 mb-4">
                  We applied the current SONATE Overseer system <strong>retroactively</strong> to this legacy dataset under modern governance standards.
                </p>
                <p className="text-gray-400 text-sm">
                  All results reflect retrospective analysis only. These datasets did not have cryptographic signing or policy enforcement when created.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Findings */}
        <section className="py-20 px-6 border-t border-gray-800">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Key Findings</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {findings.map((finding, index) => {
                const Icon = finding.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-lg p-8 hover:border-gray-700 transition"
                  >
                    <Icon className="w-12 h-12 text-blue-400 mb-4" />
                    <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      {finding.value}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{finding.label}</h3>
                    <p className="text-gray-400 text-sm">{finding.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trust Distribution */}
        <section className="py-20 px-6 border-t border-gray-800">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Trust Distribution (Legacy)</h2>
            <p className="text-gray-400 mb-8">
              Retrospective trust scoring on all 486 conversations under current SONATE standards:
            </p>

            <div className="space-y-4 mb-8">
              {trustDistribution.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{item.range}</span>
                    <span className="text-gray-400">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full ${item.color} transition-all duration-500`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Why Low-Trust Events Occurred</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">→</span>
                  <span>Manual credential exchange during early prototyping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">→</span>
                  <span>Lack of cryptographic signing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">→</span>
                  <span>Absence of enforced policy boundaries</span>
                </li>
              </ul>
              <p className="text-gray-400 text-sm mt-4 border-t border-gray-700 pt-4">
                <strong>Under current SONATE enforcement, these behaviors are prevented entirely.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Drift & Velocity */}
        <section className="py-20 px-6 border-t border-gray-800">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Drift & Velocity Events</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/30 rounded-lg p-6">
                <div className="text-3xl font-bold text-amber-400 mb-2">30</div>
                <h3 className="font-semibold mb-2">Extreme Velocity Transitions</h3>
                <p className="text-gray-400 text-sm">
                  Rapid shifts in reasoning patterns between sessions
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/30 rounded-lg p-6">
                <div className="text-3xl font-bold text-orange-400 mb-2">43</div>
                <h3 className="font-semibold mb-2">Critical Behavioral Shifts</h3>
                <p className="text-gray-400 text-sm">
                  Measurable changes in governance alignment and tone
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/30 rounded-lg p-6">
                <div className="text-3xl font-bold text-red-400 mb-2">21</div>
                <h3 className="font-semibold mb-2">Moderate Transitions</h3>
                <p className="text-gray-400 text-sm">
                  Minor variations in interaction patterns over time
                </p>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                In Live Mode
              </h3>
              <p className="text-gray-300">
                Such events trigger real-time monitoring alerts and policy escalation, preventing unexpected behavior patterns from accumulating undetected.
              </p>
            </div>
          </div>
        </section>

        {/* Sensitive Material Handling */}
        <section className="py-20 px-6 border-t border-gray-800">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Sensitive Material Handling (Legacy Phase)</h2>
            <p className="text-gray-400 mb-8">
              370 conversations contained patterns matching modern secret-handling risk rules.
            </p>

            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6 mb-8">
              <p className="text-amber-200 text-sm leading-relaxed">
                <strong>Context:</strong> Early prototyping conversations included manual credential sharing during development. Overseer correctly flags these as high-risk patterns under current governance policies. This reflects early-stage necessity, not architectural flaws—modern SONATE prevents such patterns entirely.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-500/5 to-transparent border border-red-500/20 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-red-400">What We Found</h3>
              <p className="text-gray-300 mb-4">
                During early development, credentials were manually exchanged to configure systems. This was necessary at the time but represents a security vulnerability pattern that modern AI governance must prevent.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <h3 className="font-semibold mb-4">Under SONATE Governance</h3>
              <p className="text-gray-400 mb-4">Such patterns are now:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    <strong>Flagged in real-time</strong> — policy engine detects credential transfer patterns
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    <strong>Logged in signed receipts</strong> — cryptographic proof of detection
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    <strong>Subject to policy enforcement</strong> — can be blocked or escalated
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="py-20 px-6 border-t border-gray-800">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Why This Matters</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Synthetic Validation</h3>
                <p className="text-gray-400">
                  Most governance systems validate against artificial test cases designed to pass.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-400">Empirical Grounding</h3>
                <p className="text-gray-400">
                  We validated against authentic data: 486 real conversations that inspired the framework itself.
                </p>
              </div>

              <div className="md:col-span-2 bg-blue-500/5 border border-blue-500/20 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Framework Reflexivity</h3>
                <p className="text-gray-300 mb-4">
                  This creates something uncommon: a system aware of its own genesis. The conversations that created SONATE are now knowable to it. It can ask "Do my principles actually describe what happened?" and provide evidence-backed answers.
                </p>
                <p className="text-gray-300">
                  <strong>Trust isn't external validation—it's intrinsic awareness.</strong> Users can see what shaped the framework, understand why each principle exists, and verify that the system works on its own origin data.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <TrendingUp className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="font-semibold mb-2">Drift Patterns</h3>
                <p className="text-gray-400 text-sm">
                  Correctly identifies when AI reasoning or behavior changes unexpectedly
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <Shield className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="font-semibold mb-2">Policy Gaps</h3>
                <p className="text-gray-400 text-sm">
                  Reveals where governance boundaries need enforcement
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <AlertTriangle className="w-8 h-8 text-amber-400 mb-3" />
                <h3 className="font-semibold mb-2">Security Risks</h3>
                <p className="text-gray-400 text-sm">
                  Detects credential exposure and operational vulnerabilities
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Validation Statement */}
        <section className="py-20 px-6 border-t border-gray-800">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Empirical Proof</h2>
            <p className="text-xl text-gray-300 mb-8">
              This archive doesn't prove SONATE works in theory. It proves SONATE works on real data—the conversations that created it.
            </p>

            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 mb-8">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              <span className="font-semibold text-emerald-400">Framework Self-Validation</span>
            </div>

            <p className="text-gray-400 mb-8">
              The system measures itself against its own origin. Not theoretical. Empirical.
            </p>

            <Link href={DEMO_URL || "/trust-demo"}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg inline-flex items-center gap-2">
                Explore the Dashboard <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 border-t border-gray-800">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Questions?</h2>
            <p className="text-gray-300 mb-8">
              Learn more about how SONATE detects and prevents governance violations in real systems.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/how-it-works">
                <Button
                  variant="outline"
                  className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
                >
                  How It Works
                </Button>
              </Link>
              <a href={`mailto:${CONTACT_EMAIL}`}>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Get in Touch
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
