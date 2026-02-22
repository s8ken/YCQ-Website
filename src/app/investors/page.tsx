"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DEMO_URL } from "@/lib/site";
import {
  Shield,
  ExternalLink,
  Key,
  Fingerprint,
  FileText,
  CheckCircle2,
} from "lucide-react";

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10">
        <section className="pt-20 pb-12 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="text-xs font-medium text-white/80 uppercase tracking-widest">Investors</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              AI Non-Repudiation Infrastructure
            </h1>
            <p className="text-lg text-white/60 max-w-3xl mx-auto mb-2">
              As AI systems move into regulated and high-stakes environments, enterprises require more than monitoring — they require evidence.
            </p>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              SONATE is building the execution evidence layer for AI systems.
            </p>
          </div>
        </section>

        <section className="py-12 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h2 className="text-2xl font-heading font-bold mb-4">The Problem</h2>
              <div className="space-y-3 text-sm text-white/60">
                <p>AI systems generate decisions without verifiable execution records.</p>
                <p>When something goes wrong, organizations cannot prove:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>What the model received as input</li>
                  <li>What policy constraints were active</li>
                  <li>Which identity executed the action</li>
                  <li>Whether the output was altered</li>
                  <li>Whether prior behavior influenced the result</li>
                </ul>
                <p>Regulators increasingly require auditability. Enterprises require defensibility. Courts require evidence.</p>
                <p>There is currently no standard for AI non-repudiation.</p>
              </div>
            </div>
            <div className="glass-card p-6">
              <h2 className="text-2xl font-heading font-bold mb-4">The Solution</h2>
              <div className="space-y-3 text-sm text-white/60">
                <p>SONATE converts every AI interaction into a cryptographically signed trust receipt.</p>
                <div>
                  <div className="text-white/80 mb-2">Each receipt includes:</div>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Input and output hashes</li>
                    <li>Policy version snapshot</li>
                    <li>Agent and platform identity (W3C DID)</li>
                    <li>SHA-256 hash chaining</li>
                    <li>Ed25519 digital signature</li>
                  </ul>
                </div>
                <p>Receipts are independently verifiable via open SDK. Verification requires no API call and no vendor dependency.</p>
                <p>This creates a tamper-evident execution record for AI systems.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-heading font-bold mb-6">Architecture</h2>
            <p className="text-sm text-white/60 mb-6">SONATE operates as an infrastructure layer between applications and model providers.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <div className="font-heading font-semibold">Policy Engine</div>
                </div>
                <div className="text-sm text-white/60">Real-time governance evaluation (&lt;50ms latency)</div>
              </div>
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <FileText className="w-5 h-5 text-purple-400" />
                  <div className="font-heading font-semibold">Receipt Engine</div>
                </div>
                <div className="text-sm text-white/60">Deterministic canonicalization, hashing, and Ed25519 signing</div>
              </div>
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Fingerprint className="w-5 h-5 text-amber-400" />
                  <div className="font-heading font-semibold">Identity Layer</div>
                </div>
                <div className="text-sm text-white/60">W3C Decentralized Identifiers (did:web) for agents and platform</div>
              </div>
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Key className="w-5 h-5 text-green-400" />
                  <div className="font-heading font-semibold">Verification SDK (MIT)</div>
                </div>
                <div className="text-sm text-white/60">Independent signature and chain validation</div>
              </div>
            </div>
            <div className="mt-6 text-sm text-white/60">The system is small, auditable, and production-ready.</div>
          </div>
        </section>

        <section className="py-12 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6">
              <h2 className="text-xl font-heading font-bold mb-3">Why Now</h2>
              <div className="space-y-3 text-sm text-white/60">
                <div>
                  <div className="text-white/80 font-semibold mb-1">1. Regulatory Acceleration</div>
                  <p>EU AI Act, NIST AI RMF, and sector regulators increasingly require traceability and auditability.</p>
                </div>
                <div>
                  <div className="text-white/80 font-semibold mb-1">2. Enterprise AI Deployment</div>
                  <p>AI is now embedded in customer support, healthcare triage, finance, internal automation, and decision support.</p>
                </div>
                <div>
                  <div className="text-white/80 font-semibold mb-1">3. Autonomous Workflows</div>
                  <p>Agentic systems introduce continuity, drift, and liability risk — increasing demand for verifiable execution logs.</p>
                </div>
              </div>
              <div className="text-xs text-white/40 mt-4 pt-4 border-t border-white/10">As TLS became mandatory for secure web traffic, AI systems will require verifiable execution records.</div>
            </div>
            <div className="glass-card p-6">
              <h2 className="text-xl font-heading font-bold mb-3">Market Opportunity</h2>
              <div className="text-sm text-white/60 mb-4">Enterprise AI governance and compliance infrastructure represents a <strong className="text-white">multi-billion-dollar emerging category</strong>.</div>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-white/80 font-semibold mb-1">Primary Buyers</div>
                  <ul className="text-sm text-white/60 space-y-1">
                    <li>• AI governance teams at regulated enterprises</li>
                    <li>• Risk and compliance officers deploying LLM systems</li>
                    <li>• Legal and audit teams requiring defensibility</li>
                  </ul>
                </div>
                <div>
                  <div className="text-sm text-white/80 font-semibold mb-1">Secondary Expansion</div>
                  <ul className="text-sm text-white/60 space-y-1">
                    <li>• Agent runtime infrastructure providers</li>
                    <li>• Cross-platform trust portability</li>
                    <li>• Interoperable AI audit standards</li>
                  </ul>
                </div>
              </div>
              <div className="text-xs text-white/40 mt-4 pt-4 border-t border-white/10">SONATE is positioned as the execution evidence layer in this stack.</div>
            </div>
            <div className="glass-card p-6">
              <h2 className="text-xl font-heading font-bold mb-3">Business Model</h2>
              <div className="mb-4">
                <div className="text-sm text-white/80 font-semibold mb-2">Enterprise SaaS</div>
                <ul className="text-sm text-white/60 space-y-2">
                  <li>Usage-based receipt generation</li>
                  <li>Enterprise licensing (per-agent, per-tenant)</li>
                  <li>Governance integration partnerships</li>
                  <li>Advanced compliance features</li>
                </ul>
              </div>
              <div className="text-xs text-white/40 pt-4 border-t border-white/10">Infrastructure live and production-ready. Enterprise pilots in discussion. Revenue coming Q2 2026.</div>
            </div>
          </div>
        </section>

        <section className="py-12 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h2 className="text-2xl font-heading font-bold mb-4">Defensibility</h2>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-white/80 font-semibold mb-1">First-Mover in AI Non-Repudiation</div>
                  <p className="text-sm text-white/60">No incumbent has this integration depth. AWS/Azure can't build this without cannibalizing their own vendor lock-in.</p>
                </div>
                <div>
                  <div className="text-sm text-white/80 font-semibold mb-1">Integrated Stack</div>
                  <p className="text-sm text-white/60">Receipt + policy + identity + verification in one architecture. Competitors would need to rebuild or acquire multiple components.</p>
                </div>
                <div>
                  <div className="text-sm text-white/80 font-semibold mb-1">Switching Costs Increase with Scale</div>
                  <p className="text-sm text-white/60">As receipts accumulate and integrations deepen, customers depend on historical audit trails. Exiting SONATE means losing verifiable evidence.</p>
                </div>
                <div>
                  <div className="text-sm text-white/80 font-semibold mb-1">Category Rewards Early Standardization</div>
                  <p className="text-sm text-white/60">The company that owns the execution evidence layer owns the audit trail layer for the entire AI industry.</p>
                </div>
              </div>
            </div>
            <div className="glass-card p-6">
              <h2 className="text-2xl font-heading font-bold mb-4">Product Status</h2>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-white/80 font-semibold">Phase 1: Complete (Live)</div>
                    <div className="text-xs text-white/60">Ed25519 signatures, hash chaining, verification SDKs, public API endpoints</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-white/80 font-semibold">Phase 2: In Progress</div>
                    <div className="text-xs text-white/60">Enterprise dashboard, policy engine v2, compliance integrations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h2 className="text-2xl font-heading font-bold mb-4">Founder &amp; Team</h2>
              <div className="text-sm text-white/60 space-y-3">
                <p><strong className="text-white">Solo founder</strong> — built and shipped production cryptographic infrastructure in 10 months.</p>
                <p>Live platform with public SDKs, verification endpoints, and RFC-style specification deployed.</p>
                <p>Focused on building foundational trust layer for enterprise AI systems.</p>
                <p><strong className="text-white">Available for fundraising discussions.</strong> Experience spans crypto, compliance systems, and infrastructure.</p>
              </div>
            </div>
            <div className="glass-card p-6">
              <h2 className="text-2xl font-heading font-bold mb-4">Investor Inquiries</h2>
              <div className="text-sm text-white/60 mb-4">
                For additional materials, product walkthroughs, or financial projections:
              </div>
              <div className="flex gap-4">
                <Link href="mailto:stephen@yseeku.com">
                  <Button className="gap-2">
                    Contact <ExternalLink className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2">
                    Full Demo <ExternalLink className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
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
              <span className="text-white/40 text-sm">by YCQ Labs</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/40">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
              <Link href="/developers" className="hover:text-white transition-colors">Developers</Link>
              <Link href="/roadmap" className="hover:text-white transition-colors">Roadmap</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
