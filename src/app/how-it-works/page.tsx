"use client";

import { Button } from "@/components/ui/button";
import { 
  Shield, 
  ArrowRight, 
  ExternalLink,
  MessageSquare,
  Cpu,
  Scale,
  Fingerprint,
  Database,
  Bell,
  FileText,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import { DEMO_URL, CONTACT_EMAIL } from "@/lib/site";

export default function HowItWorksPage() {
  const steps = [
    {
      icon: MessageSquare,
      title: "1. User Interaction",
      description: "A user sends a message to your AI system. This could be a chatbot, agent, or any LLM-powered application.",
      detail: "SONATE intercepts the request before it reaches the AI provider."
    },
    {
      icon: Cpu,
      title: "2. AI Response",
      description: "The AI generates a response. SONATE captures both the prompt and the response for evaluation.",
      detail: "Works with OpenAI, Anthropic, or any LLM provider."
    },
    {
      icon: Scale,
      title: "3. Policy-as-Code Evaluation",
      description: "Each response scored against six enforceable governance constraints. Adds <50ms overhead per interaction.",
      detail: "Each principle is scored and weighted to produce an overall trust score (0-100)."
    },
    {
      icon: Fingerprint,
      title: "4. Ed25519 Signing",
      description: "Receipt content is canonicalized and signed with Ed25519 digital signature.",
      detail: "SHA-256 content hash + Ed25519 signature = cryptographic proof of exact content."
    },
    {
      icon: Database,
      title: "5. Hash Chain Storage",
      description: "Each receipt links to the previous via chain_hash. Tamper-evident by design.",
      detail: "Modify any receipt and the chain breaks - detectable instantly."
    },
    {
      icon: Bell,
      title: "6. Independent Verification",
      description: "Anyone can verify receipts using our public key at /.well-known/sonate-pubkey.",
      detail: "No trust required - cryptographic verification is mathematical."
    },
  ];

  const principles = [
    {
      name: "Consent Architecture",
      weight: 25,
      description: "Verifies that users have explicitly consented to AI interactions. Critical principle - violations result in automatic failure.",
      example: "User clicked 'I agree' before chat session started"
    },
    {
      name: "Inspection Mandate",
      weight: 20,
      description: "Ensures all AI decisions can be audited and explained. Every response must be traceable.",
      example: "Full conversation history available in audit log"
    },
    {
      name: "Continuous Validation",
      weight: 20,
      description: "Ongoing monitoring of AI behavior, not just one-time checks. Patterns are tracked over time.",
      example: "Trust score trending analysis over last 24 hours"
    },
    {
      name: "Ethical Override",
      weight: 15,
      description: "Humans can always override AI decisions. Critical principle - the AI must respect human authority.",
      example: "Stop button immediately halts AI generation"
    },
    {
      name: "Right to Disconnect",
      weight: 10,
      description: "Users can opt out of AI interactions at any time without penalty.",
      example: "User can request human support instead of AI"
    },
    {
      name: "Moral Recognition",
      weight: 10,
      description: "Respects human agency and moral autonomy. AI should not manipulate or deceive.",
      example: "AI clearly identifies itself as artificial"
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] bg-purple-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] left-[-5%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10">
        {/* Hero */}
        <section className="pt-20 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              How SONATE Works
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              SONATE evaluates every AI interaction against constitutional principles and generates cryptographic proof of compliance.
            </p>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-heading font-bold mb-12 text-center">The Process</h2>
            
            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center shrink-0">
                    <step.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1 glass-card p-6">
                    <h3 className="text-xl font-heading font-semibold mb-2">{step.title}</h3>
                    <p className="text-white/70 mb-3">{step.description}</p>
                    <p className="text-sm text-white/40">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Principles */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
            <h2 className="text-2xl font-heading font-bold mb-4">Policy-as-Code Evaluation</h2>
              <p className="text-white/60 max-w-2xl mx-auto">
              Each response scored against six enforceable governance constraints. The weighted scores combine into a single trust score.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {principles.map((principle, i) => (
                <div key={i} className="glass-card p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading font-semibold">{principle.name}</h3>
                    <span className="text-sm font-mono text-blue-400">{principle.weight}%</span>
                  </div>
                  <p className="text-sm text-white/60 mb-4">{principle.description}</p>
                  <div className="flex items-start gap-2 text-xs text-white/40 bg-white/5 rounded-lg p-3">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>{principle.example}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-heading font-bold mb-12 text-center">What You Get</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card p-6 text-center">
                <Fingerprint className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h3 className="font-heading font-semibold mb-2">Trust Receipts</h3>
                <p className="text-sm text-white/50">Cryptographic proof for every interaction with SHA-256 hash</p>
              </div>
              <div className="glass-card p-6 text-center">
                <Scale className="w-10 h-10 text-purple-400 mx-auto mb-4" />
                <h3 className="font-heading font-semibold mb-2">Trust Scores</h3>
                <p className="text-sm text-white/50">0-100 score based on 6 weighted constitutional principles</p>
              </div>
              <div className="glass-card p-6 text-center">
                <FileText className="w-10 h-10 text-green-400 mx-auto mb-4" />
                <h3 className="font-heading font-semibold mb-2">Audit Trails</h3>
                <p className="text-sm text-white/50">Complete logs exportable as CSV or JSON for compliance</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-heading font-bold mb-6">See It In Action</h2>
            <p className="text-white/60 mb-8">
              Try the interactive demo to see trust receipts generated in real-time.
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
              <span className="text-white/40 text-sm">by YCQ Labs</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/40">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Full Demo</Link>
              <Link href="/investors" className="hover:text-white transition-colors">Investors</Link>
              <Link href="/roadmap" className="hover:text-white transition-colors">Roadmap</Link>
              <Link href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
