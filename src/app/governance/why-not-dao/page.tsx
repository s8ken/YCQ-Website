import Link from "next/link";

export default function WhyNotDAO() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-stone-800">Sonate</Link>
              <div className="ml-2 text-sm text-stone-600">Why Not a DAO?</div>
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
                  Demo
                </Link>
                <Link href="/governance" className="text-stone-900 px-3 py-2 text-sm font-medium border-b-2 border-purple-600">
                  Governance
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-stone-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Link href="/governance" className="text-purple-600 hover:text-purple-800 text-sm font-medium mb-4 inline-block">
              ← Back to Governance
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Why YSEEKU Is Not a DAO
            </h1>
            <p className="text-2xl text-stone-600">
              Governance Requires Authority, Not Just Consensus
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-stone-700 leading-relaxed">
              Decentralized Autonomous Organizations (DAOs) introduced important ideas: transparency, shared input, and resistance to unilateral control. These ideas have value — and they inform parts of YSEEKU&apos;s long-term thinking.
            </p>
            <p className="text-xl text-stone-700 leading-relaxed">
              However, <strong>DAOs are not suitable as the primary governance mechanism for production AI systems.</strong>
            </p>
            <p className="text-xl text-stone-700 leading-relaxed">
              YSEEKU deliberately chose a different path.
            </p>
          </div>

          {/* Core Difference */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-stone-900 mb-6 text-center">The Core Difference</h2>
            <p className="text-center text-stone-700 mb-6">
              The difference is not technical. <strong>It is constitutional.</strong>
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-stone-900 mb-3">DAOs assume:</h3>
                <p className="text-stone-600 italic">
                  &quot;Legitimacy emerges from participation and consensus.&quot;
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border-2 border-purple-300">
                <h3 className="font-bold text-purple-900 mb-3">YSEEKU assumes:</h3>
                <p className="text-purple-700 italic font-medium">
                  &quot;Legitimacy emerges from constraint, accountability, and enforceable boundaries.&quot;
                </p>
              </div>
            </div>
            <p className="text-center text-stone-700 mt-6 font-medium">
              When intelligent systems can act in real environments, <strong>how authority is constrained</strong> matters more than how votes are counted.
            </p>
          </div>

          {/* Why DAO Breaks Down */}
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Why DAO Governance Breaks Down for AI Systems</h2>

          <div className="space-y-8 mb-12">
            {/* Reason 1 */}
            <div className="bg-stone-50 rounded-lg p-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-red-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">Diffuse Authority Is a Risk, Not a Safeguard</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-semibold text-stone-700 mb-2">In DAO models:</p>
                      <ul className="text-stone-600 space-y-1 text-sm">
                        <li>• Authority is distributed</li>
                        <li>• Accountability is often unclear</li>
                        <li>• Responsibility is diluted across token holders</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-stone-700 mb-2">YSEEKU requires:</p>
                      <ul className="text-stone-600 space-y-1 text-sm">
                        <li>• Named identities</li>
                        <li>• Scoped authority</li>
                        <li>• Explicit responsibility</li>
                        <li>• Auditable enforcement</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-red-50 border-l-4 border-red-400 p-3">
                    <p className="text-red-800 text-sm font-medium">
                      When something goes wrong, no one is clearly responsible. Trust cannot be crowdsourced after the fact.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reason 2 */}
            <div className="bg-stone-50 rounded-lg p-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-amber-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">Voting Is Too Slow for Safety-Critical Decisions</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-semibold text-stone-700 mb-2">AI governance often requires:</p>
                      <ul className="text-stone-600 space-y-1 text-sm">
                        <li>• Immediate intervention</li>
                        <li>• Time-bounded decisions</li>
                        <li>• Proportional response to emerging risk</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-stone-700 mb-2">DAO voting mechanisms are:</p>
                      <ul className="text-stone-600 space-y-1 text-sm">
                        <li>• Latent</li>
                        <li>• Politicized</li>
                        <li>• Unsuitable for real-time mitigation</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-3">
                    <p className="text-amber-800 text-sm font-medium">
                      YSEEKU&apos;s governance is continuous and operational, not periodic and procedural.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reason 3 */}
            <div className="bg-stone-50 rounded-lg p-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">Consensus Cannot Enforce Refusal</h3>
                  <p className="text-stone-600 mb-4">
                    One of the most important safety capabilities in YSEEKU is <strong>refusal</strong>. The system must be able to say:
                  </p>
                  <div className="bg-white rounded p-4 mb-4 font-mono text-sm text-stone-700">
                    <p>&quot;This action is not permitted&quot;</p>
                    <p>&quot;This escalation lacks justification&quot;</p>
                    <p>&quot;This violates constitutional constraints&quot;</p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-3">
                    <p className="text-blue-800 text-sm font-medium">
                      DAO governance struggles because consensus incentivizes compromise, refusal is framed as obstruction, and minority safety concerns are overridden. YSEEKU treats refusal as a first-class trust signal, not a failure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reason 4 */}
            <div className="bg-stone-50 rounded-lg p-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-green-600 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">DAOs Blur the Line Between Advice and Authority</h3>
                  <p className="text-stone-600 mb-4">
                    In many DAO systems, advisory input, policy formation, and execution authority become entangled.
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-400 p-3">
                    <p className="text-green-800 text-sm font-medium">
                      YSEEKU strictly separates <strong>Observation</strong>, <strong>Recommendation</strong>, and <strong>Execution</strong>. This separation is enforced in code, not social norms.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reason 5 */}
            <div className="bg-stone-50 rounded-lg p-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-purple-600 font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">Regulatory Reality Matters</h3>
                  <p className="text-stone-600 mb-4">
                    For enterprise and regulated environments, governance must answer hard questions:
                  </p>
                  <ul className="text-stone-600 space-y-1 mb-4">
                    <li>• Who is accountable?</li>
                    <li>• Who can override decisions?</li>
                    <li>• How are actions audited?</li>
                    <li>• How are failures reconstructed?</li>
                  </ul>
                  <div className="bg-purple-50 border-l-4 border-purple-400 p-3">
                    <p className="text-purple-800 text-sm font-medium">
                      DAO structures often introduce legal ambiguity, jurisdictional confusion, and compliance risk. YSEEKU is designed to withstand regulatory scrutiny, not evade it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What YSEEKU Uses Instead */}
          <div className="bg-stone-900 text-white rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">What YSEEKU Uses Instead</h2>
            <p className="text-stone-300 mb-6">
              YSEEKU implements a <strong className="text-white">constitutional governance model</strong>, enforced by software.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-stone-800 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-400 mb-2">Explicit Authority</h4>
                <p className="text-stone-400 text-sm">Every action is attributable to a named identity.</p>
              </div>
              <div className="bg-stone-800 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-400 mb-2">Delegated Enforcement</h4>
                <p className="text-stone-400 text-sm">Authority is granted, scoped, and revocable.</p>
              </div>
              <div className="bg-stone-800 p-4 rounded-lg">
                <h4 className="font-semibold text-green-400 mb-2">Hard Constraints</h4>
                <p className="text-stone-400 text-sm">Some actions are simply not allowed — even if requested.</p>
              </div>
              <div className="bg-stone-800 p-4 rounded-lg">
                <h4 className="font-semibold text-amber-400 mb-2">Refusal as Feature</h4>
                <p className="text-stone-400 text-sm">Unsafe or unjustified actions are blocked and recorded.</p>
              </div>
              <div className="bg-stone-800 p-4 rounded-lg">
                <h4 className="font-semibold text-rose-400 mb-2">Auditability by Design</h4>
                <p className="text-stone-400 text-sm">Decisions can be reconstructed after the fact.</p>
              </div>
              <div className="bg-stone-800 p-4 rounded-lg">
                <h4 className="font-semibold text-cyan-400 mb-2">Human Override</h4>
                <p className="text-stone-400 text-sm">Humans can always intervene and halt actions.</p>
              </div>
            </div>
            <p className="text-stone-400 mt-6 text-center">
              This model is implemented through the <strong className="text-white">SYMBI Trust Framework</strong> and enforced by the <strong className="text-white">Overseer</strong> system agent.
            </p>
          </div>

          {/* Where Decentralization Does Belong */}
          <div className="bg-blue-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Where Decentralization Does Belong</h2>
            <p className="text-stone-700 mb-4">
              YSEEKU is not anti-decentralization. Decentralized input may play a role in:
            </p>
            <div className="grid md:grid-cols-5 gap-3 mb-6">
              <div className="bg-white p-3 rounded text-center">
                <p className="text-sm text-stone-700">Advisory councils</p>
              </div>
              <div className="bg-white p-3 rounded text-center">
                <p className="text-sm text-stone-700">Policy review</p>
              </div>
              <div className="bg-white p-3 rounded text-center">
                <p className="text-sm text-stone-700">External audits</p>
              </div>
              <div className="bg-white p-3 rounded text-center">
                <p className="text-sm text-stone-700">Transparency reporting</p>
              </div>
              <div className="bg-white p-3 rounded text-center">
                <p className="text-sm text-stone-700">Non-binding input</p>
              </div>
            </div>
            <div className="bg-blue-100 border-l-4 border-blue-500 p-4">
              <p className="text-blue-900 font-medium">
                Crucially: Decentralized participation <strong>informs</strong> governance — it does not <strong>execute</strong> it. Authority remains bounded, accountable, and auditable.
              </p>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-gradient-to-r from-purple-900 to-stone-900 text-white rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-center">The Bottom Line</h2>
            <p className="text-xl text-center text-purple-200 mb-6">
              AI systems do not fail because they lack participation.<br />
              <strong className="text-white">They fail because they lack boundaries.</strong>
            </p>
            <p className="text-center text-stone-300">
              YSEEKU chose constitutional trust over consensus governance because:
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Safety requires constraints</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Accountability requires clarity</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Trust requires the ability to refuse</span>
            </div>
            <p className="text-center text-stone-400 mt-6 text-sm">
              DAOs are powerful tools — just not the right foundation for governing intelligent systems in production.
            </p>
          </div>

          {/* Forward Looking Note */}
          <div className="border border-stone-200 rounded-xl p-8 mb-12">
            <h2 className="text-xl font-bold text-stone-900 mb-4">A Forward-Looking Note</h2>
            <p className="text-stone-700 mb-4">
              As AI governance evolves, new hybrid models may emerge. YSEEKU is built so that:
            </p>
            <ul className="text-stone-600 space-y-2 mb-6">
              <li>• External governance inputs can be integrated</li>
              <li>• Oversight can expand responsibly</li>
              <li>• Authority never becomes unbounded</li>
            </ul>
            <div className="bg-stone-50 p-4 rounded-lg text-center">
              <p className="text-stone-800 font-medium">
                Trust is not voted into existence. It is enforced — carefully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Learn More About Constitutional Governance
          </h2>
          <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto">
            Explore how YSEEKU implements trust that is engineered, not crowdsourced.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/governance" className="bg-purple-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-purple-700 transition-colors">
              Full Governance Overview
            </Link>
            <Link href="/technology" className="border border-stone-300 text-stone-300 px-8 py-3 rounded-md text-lg font-medium hover:bg-stone-700 transition-colors">
              Technology Details
            </Link>
            <Link href="/demo" className="border border-stone-300 text-stone-300 px-8 py-3 rounded-md text-lg font-medium hover:bg-stone-700 transition-colors">
              See Live Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
