import Link from "next/link";
import { CONSOLE_URL } from "@/lib/site";
import TrustLedgerDemo from "@/components/TrustLedgerDemo";

export default function TrustDemoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-stone-800">YCQ Sonate</Link>
              <div className="ml-2 text-sm text-stone-600">Trust Infrastructure</div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/#platform" className="text-stone-700 hover:text-stone-900 px-3 py-2 text-sm font-medium">
                  Platform
                </Link>
                <Link href="/technology" className="text-stone-700 hover:text-stone-900 px-3 py-2 text-sm font-medium">
                  Technology
                </Link>
                <Link href="/demo" className="text-stone-700 hover:text-stone-900 px-3 py-2 text-sm font-medium">
                  Technical Demo
                </Link>
                <Link href="/trust-demo" className="text-stone-900 px-3 py-2 text-sm font-medium border-b-2 border-amber-600">
                  Trust Ledger
                </Link>
                <Link href={CONSOLE_URL} target="_blank" rel="noopener noreferrer" className="bg-stone-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-stone-900">
                  Full Platform
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-green-400/30">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Interactive Demo Available
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              🔐 Trust Ledger Interactive Demo
            </h1>
            <p className="text-xl text-stone-600 mb-8 max-w-3xl mx-auto">
              Experience cryptographic trust receipts, real-time compliance scoring, and verifiable AI audit trails
            </p>
          </div>
        </div>
      </section>

      {/* Demo Credentials Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">🎯 Demo Access - No Signup Required</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <p className="text-sm text-blue-200 mb-2 font-semibold">Email:</p>
                <code className="block bg-black/40 text-green-300 px-4 py-2 rounded font-mono text-base border border-green-500/30">
                  demo@symbi-trust.com
                </code>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <p className="text-sm text-blue-200 mb-2 font-semibold">Password:</p>
                <code className="block bg-black/40 text-green-300 px-4 py-2 rounded font-mono text-base border border-green-500/30">
                  demo123
                </code>
              </div>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              ⚠️ Demo Environment: Data purged every 24 hours • Rate limited for fair use
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustLedgerDemo />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">
            What You Can Explore
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Trust Analytics</h3>
              <p className="text-stone-600">
                Real-time compliance metrics, trust scores, and distribution analysis across AI agents
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Create Declarations</h3>
              <p className="text-stone-600">
                Build trust declarations with 6 fundamental articles and get instant compliance scoring
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">AI + Trust Receipts</h3>
              <p className="text-stone-600">
                Generate AI responses with automatic cryptographic trust receipt generation
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Verify Receipts</h3>
              <p className="text-stone-600">
                One-click cryptographic verification of trust receipts with detailed audit trails
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Articles Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-900 mb-4 text-center">
            The 6 Trust Articles
          </h2>
          <p className="text-lg text-stone-600 mb-12 text-center max-w-3xl mx-auto">
            Every AI agent must comply with these fundamental trust principles for enterprise deployment
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Inspection Mandate",
                description: "Right to audit and inspect AI behavior and decision-making processes",
                icon: "🔍"
              },
              {
                title: "Consent Architecture",
                description: "Explicit consent required before data processing or action execution",
                icon: "✅"
              },
              {
                title: "Ethical Override",
                description: "Ability to override AI decisions based on ethical considerations",
                icon: "⚖️"
              },
              {
                title: "Continuous Validation",
                description: "Ongoing verification of AI behavior against established trust criteria",
                icon: "🔄"
              },
              {
                title: "Right to Disconnect",
                description: "User's right to terminate AI interactions and data processing at any time",
                icon: "🔌"
              },
              {
                title: "Moral Recognition",
                description: "AI's acknowledgment and respect for human moral agency and values",
                icon: "🤝"
              }
            ].map((article, idx) => (
              <div key={idx} className="bg-stone-50 border border-stone-200 p-6 rounded-lg">
                <div className="text-4xl mb-3">{article.icon}</div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">{article.title}</h3>
                <p className="text-stone-600 text-sm">{article.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Privacy Section */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">
            Security & Privacy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🔐</div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Cryptographic Security</h3>
              <ul className="text-stone-600 space-y-2 text-sm">
                <li>✓ SHA-256 content hashing</li>
                <li>✓ Digital signatures for authenticity</li>
                <li>✓ Hash-chain immutability</li>
                <li>✓ Event-based traceability</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Demo Protection</h3>
              <ul className="text-stone-600 space-y-2 text-sm">
                <li>✓ Rate limiting (50 req/15min)</li>
                <li>✓ Input validation & sanitization</li>
                <li>✓ Automatic data purging (24h)</li>
                <li>✓ No real API keys stored</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Privacy First</h3>
              <ul className="text-stone-600 space-y-2 text-sm">
                <li>✓ Demo-only environment</li>
                <li>✓ No personal data collection</li>
                <li>✓ Encrypted in transit (HTTPS)</li>
                <li>✓ Session-based isolation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Enterprise Deployment?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience the full SYMBI Trust Platform with production-ready features
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={CONSOLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-50 transition-all duration-300 shadow-xl"
            >
              Launch Full Platform
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white/10 transition-all duration-300"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-stone-400">
            © 2024 YCQ Sonate. Enterprise AI Trust Infrastructure.
          </p>
          <p className="text-stone-500 text-sm mt-2">
            Demo environment for evaluation purposes only
          </p>
        </div>
      </footer>
    </div>
  );
}