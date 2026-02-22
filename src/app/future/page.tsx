"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Zap,
  TrendingUp,
  Lock,
  GitBranch,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export default function FuturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation Back */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-white hover:text-blue-400 transition-colors">
            ← Back to SONATE
          </Link>
          <div className="text-xs text-slate-400">Research Infrastructure</div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="w-8 h-8 text-purple-400" />
            <span className="text-purple-400 font-semibold">Phase 4 Research</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Adaptive Governance Systems
          </h1>

          <p className="text-xl text-slate-300 mb-8 max-w-2xl">
            As AI systems become agentic and persistent, governance must extend beyond single
            interactions. We've built the foundational infrastructure for adaptive oversight.
          </p>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-12">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-100">
                <strong>Status:</strong> Research infrastructure production-ready. Autonomous
                remediation loop planned for Phase 4 expansion.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Built & Production-Ready</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Bedau Index */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-purple-500/20 border border-purple-500/30">
                  <Brain className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Bedau Index</h3>
                  <p className="text-sm text-slate-400">Weak Emergence Detection</p>
                </div>
              </div>

              <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                Production-grade implementation of Mark Bedau's weak emergence theory. Quantifies
                emergence by analyzing semantic intent versus surface patterns.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-slate-300">
                    Semantic-surface divergence (cosine distance)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-slate-300">
                    Kolmogorov complexity approximation (Lempel-Ziv)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-slate-300">
                    Bootstrap confidence intervals (1000 samples)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-slate-300">
                    Strong emergence indicators (experimental)
                  </span>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded p-4 mb-6">
                <div className="text-xs font-mono text-slate-300">
                  <div className="text-purple-300 mb-2">Classification Thresholds:</div>
                  <div className="text-slate-400">0.0 - 0.3 → LINEAR</div>
                  <div className="text-slate-400">0.3 - 0.7 → WEAK_EMERGENCE</div>
                  <div className="text-slate-400">0.7 - 1.0 → HIGH_WEAK_EMERGENCE</div>
                </div>
              </div>

              <Link
                href="https://github.com/s8ken/yseeku-platform/blob/main/packages/detect/src/bedau-index.ts"
                target="_blank"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors"
              >
                View Implementation →
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>

            {/* Temporal Tracking */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-amber-500/20 border border-amber-500/30">
                  <TrendingUp className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Temporal Tracking</h3>
                  <p className="text-sm text-slate-400">Emergence Evolution Analysis</p>
                </div>
              </div>

              <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                Tracks emergence patterns over time with phase transition detection and critical
                point identification.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-slate-300">
                    Time-series Bedau Index analysis
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-slate-300">
                    Phase transition detection (low → high emergence)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-slate-300">
                    Critical transition identification (±0.2 threshold)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-slate-300">
                    Emergence trajectory visualization
                  </span>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded p-4 mb-6">
                <div className="text-xs font-mono text-slate-300">
                  <div className="text-amber-300 mb-2">Output Metrics:</div>
                  <div className="text-slate-400">trajectory: number[]</div>
                  <div className="text-slate-400">emergenceLevel: number</div>
                  <div className="text-slate-400">critical_transitions: number[]</div>
                  <div className="text-slate-400">confidence: 0-1</div>
                </div>
              </div>

              <Link
                href="https://github.com/s8ken/yseeku-platform/blob/main/packages/detect/src/temporal-bedau-tracker.ts"
                target="_blank"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors"
              >
                View Implementation →
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Engine Integration */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Policy Governance Foundation</h2>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-blue-500/20 border border-blue-500/30">
                <Lock className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Policy Engine v1</h3>
                <p className="text-sm text-slate-400">Extensible Governance Framework</p>
              </div>
            </div>

            <p className="text-slate-300 mb-8 text-sm leading-relaxed">
              The Policy Engine evaluates receipts against extensible rules. This foundation
              enables Phase 4 autonomous policy enforcement.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-700/30 rounded-lg p-6">
                <div className="font-mono text-xs text-blue-300 mb-3">Safety Policy</div>
                <p className="text-sm text-slate-300">
                  Content pattern detection + integrity checks
                </p>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-6">
                <div className="font-mono text-xs text-blue-300 mb-3">Hallucination Detection</div>
                <p className="text-sm text-slate-300">
                  Validation scoring + citation requirements
                </p>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-6">
                <div className="font-mono text-xs text-blue-300 mb-3">Compliance</div>
                <p className="text-sm text-slate-300">
                  Privacy mode enforcement + SYMBI verification
                </p>
              </div>
            </div>

            <div className="bg-slate-700/20 border border-slate-600 rounded p-6 font-mono text-xs text-slate-300 overflow-x-auto mb-6">
              <div className="text-blue-300 mb-3">// Phase 4: Autonomous policy adaptation</div>
              <div>
                <span className="text-slate-400">const </span>
                <span className="text-green-300">policies</span>
                <span className="text-slate-400"> = [</span>
              </div>
              <div className="ml-4">
                <span className="text-slate-400">evaluate(receipt) →</span>
                <span className="text-amber-300"> generate flags</span>
              </div>
              <div className="ml-4">
                <span className="text-slate-400">detect(</span>
                <span className="text-purple-300">bedau_index</span>
                <span className="text-slate-400">) →</span>
                <span className="text-amber-300"> trigger remediation</span>
              </div>
              <div>
                <span className="text-slate-400">]</span>
              </div>
            </div>

            <Link
              href="https://github.com/s8ken/yseeku-platform/blob/main/packages/core/src/policies/policy-engine-v1.ts"
              target="_blank"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors"
            >
              View Policy Engine →
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Phase 4 Roadmap */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Phase 4 Expansion</h2>

          <div className="space-y-6">
            {[
              {
                number: "1",
                title: "Longitudinal Behavior Analysis",
                description:
                  "Extended time-series analysis with seasonal pattern detection and anomaly scoring.",
                status: "planned",
              },
              {
                number: "2",
                title: "Emergent Workflow Risk Detection",
                description:
                  "Identify workflows exhibiting unexpected collective behavior patterns across interaction chains.",
                status: "planned",
              },
              {
                number: "3",
                title: "Policy Drift Monitoring",
                description:
                  "Automated detection when AI behavior diverges from intended policy constraints.",
                status: "planned",
              },
              {
                number: "4",
                title: "Adaptive Remediation Engine",
                description:
                  "Autonomous policy override suggestions based on detected emergence patterns.",
                status: "planned",
              },
            ].map((item) => (
              <div key={item.number} className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-6">
                    <div className="text-4xl font-bold text-purple-400/30 leading-none">
                      {item.number}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-slate-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-wide">
                    {item.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specification */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Research Documentation</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="https://github.com/s8ken/yseeku-platform/blob/main/docs/research/BEDAU_RESEARCH.md"
              target="_blank"
              className="group bg-slate-800/50 border border-slate-700 hover:border-purple-500/50 rounded-lg p-8 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <GitBranch className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                  Bedau Index & Emergence Framework
                </h3>
              </div>
              <p className="text-sm text-slate-400 mb-4">
                Complete technical reference covering weak emergence theory, algorithm details, and
                implementation patterns.
              </p>
              <div className="text-xs text-slate-500">documentation.md →</div>
            </a>

            <a
              href="https://github.com/s8ken/yseeku-platform/blob/main/docs/ENTERPRISE_GUIDE_v1.4.0.md"
              target="_blank"
              className="group bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 rounded-lg p-8 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <Zap className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                  Enterprise Integration Guide
                </h3>
              </div>
              <p className="text-sm text-slate-400 mb-4">
                How to integrate Bedau Index and adaptive governance into enterprise AI governance
                workflows.
              </p>
              <div className="text-xs text-slate-500">guide.md →</div>
            </a>
          </div>
        </div>
      </section>

      {/* Test Coverage */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Production Validation</h2>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-white mb-4 text-lg">Test Coverage</h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>296 lines of test specifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Linear classification validation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Weak & high weak emergence cases</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Bootstrap CI verification</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-4 text-lg">Performance Metrics</h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <Zap className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>&lt;50ms</strong> single Bedau Index calculation
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>&lt;200ms</strong> for 100-receipt time series
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>1000</strong> bootstrap samples for statistical rigor
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lock className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Production-grade</strong> error handling
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <Link
              href="https://github.com/s8ken/yseeku-platform/blob/main/packages/detect/src/__tests__/bedau-index.spec.ts"
              target="_blank"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm mt-8 transition-colors"
            >
              View Test Suite →
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Dashboard Integration */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Live Dashboard</h2>
          <p className="text-slate-300 mb-8">
            The Bedau Index is already integrated into the SONATE dashboard for real-time tracking
            of emergence patterns.
          </p>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <Brain className="w-4 h-4 text-purple-400" />
                  Emergence Testing Page
                </h3>
                <p className="text-sm text-slate-400 mb-4">
                  Real-time emergence detection with live Bedau Index calculations and event
                  tracking.
                </p>
                <code className="text-xs text-slate-300 bg-slate-700/30 rounded px-2 py-1 block">
                  /dashboard/lab/emergence
                </code>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-amber-400" />
                  Bedau Index Tracker
                </h3>
                <p className="text-sm text-slate-400 mb-4">
                  Historical Bedau Index trends with 4-day rolling averages and emergence event
                  logging.
                </p>
                <code className="text-xs text-slate-300 bg-slate-700/30 rounded px-2 py-1 block">
                  /dashboard/lab/bedau
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready for Phase 4?</h2>
          <p className="text-lg text-slate-300 mb-8">
            We've built the foundational research infrastructure. The governance layer is
            production-ready. Now comes the adaptive intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Back to SONATE
              </Button>
            </Link>
            <a
              href="https://github.com/s8ken/yseeku-platform/tree/main/packages/detect"
              target="_blank"
            >
              <Button variant="outline" className="border-slate-600 text-blue-400 hover:text-blue-300">
                Explore Code
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-12 px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
        <p>
          SONATE Research Infrastructure • Phase 4 in active development • See roadmap for
          timeline
        </p>
      </footer>
    </div>
  );
}
