import Link from "next/link";

export default function Governance() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-stone-800">Sonate</Link>
              <div className="ml-2 text-sm text-stone-600">Constitutional Governance</div>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Governance at YSEEKU
            </h1>
            <p className="text-2xl text-purple-700 font-semibold mb-6">
              Constitutional Trust for Intelligent Systems
            </p>
            <p className="text-xl text-stone-600 mb-8 max-w-3xl mx-auto">
              YSEEKU is built on a simple premise: trust in AI systems must be engineered, not crowdsourced.
            </p>
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-medium text-sm">Authority is Explicit • Actions are Constrained • Refusals are Intentional • Outcomes are Auditable</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-stone-700 leading-relaxed mb-8">
              Instead of relying on ad-hoc rules, opaque automation, or consensus voting, YSEEKU SONATE implements a
              <strong className="text-purple-700"> constitutional governance model</strong> for AI systems — one where
              authority is explicit, actions are constrained, refusals are intentional, and outcomes are auditable.
            </p>
            <p className="text-xl text-stone-700 leading-relaxed">
              This governance layer is powered by the <strong>SONATE Trust Framework</strong> and enforced by the
              <strong> Overseer</strong> system agent.
            </p>
          </div>
        </div>
      </section>

      {/* What We Mean by Governance */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              What We Mean by &quot;Governance&quot;
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              At YSEEKU, governance is not a policy document or a promise. <strong>It is live system behavior.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
              <h3 className="font-bold text-stone-900 mb-2">Who Can Act</h3>
              <p className="text-stone-600">Every action is attributable to a named identity with explicit authority.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
              <h3 className="font-bold text-stone-900 mb-2">Context Boundaries</h3>
              <p className="text-stone-600">Actions may only occur within defined contexts and jurisdictions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
              <h3 className="font-bold text-stone-900 mb-2">Permission Model</h3>
              <p className="text-stone-600">Actions are explicitly permitted, constrained, or refused.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
              <h3 className="font-bold text-stone-900 mb-2">Audit Trail</h3>
              <p className="text-stone-600">Decisions are recorded, reviewed, and learned from.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-rose-500">
              <h3 className="font-bold text-stone-900 mb-2">Human Override</h3>
              <p className="text-stone-600">Humans can intervene or override at any point.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-cyan-500">
              <h3 className="font-bold text-stone-900 mb-2">Inside the System</h3>
              <p className="text-stone-600">Governance exists inside the system — not outside it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SONATE Trust Framework */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              The SONATE Trust Framework
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              At the core of YSEEKU SONATE is the SONATE Trust Framework, a constitutional layer that governs all intelligent behavior in the platform.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-stone-900 mb-6 text-center">Trust Kernel: Non-Negotiable Rules</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-purple-600 font-bold">1</span>
                  </div>
                  <h4 className="font-bold text-stone-900">Identity & Authority</h4>
                </div>
                <p className="text-stone-600">Every action is attributable to a named identity and scoped to a tenant.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <h4 className="font-bold text-stone-900">Intent & Action Classification</h4>
                </div>
                <p className="text-stone-600">Actions are classified as observational, advisory, or executory before they occur.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 font-bold">3</span>
                  </div>
                  <h4 className="font-bold text-stone-900">Constraint & Refusal Logic</h4>
                </div>
                <p className="text-stone-600">Unsafe, unjustified, or out-of-scope actions are explicitly refused — and recorded.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-amber-600 font-bold">4</span>
                  </div>
                  <h4 className="font-bold text-stone-900">Memory & Continuity Ethics</h4>
                </div>
                <p className="text-stone-600">Memory is selective, tenant-scoped, and used to improve safety, not expand authority.</p>
              </div>
            </div>
            <p className="text-center text-stone-700 mt-6 font-medium">
              These rules apply to all system agents, including SONATE itself.
            </p>
          </div>
        </div>
      </section>

      {/* Overseer Section */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Overseer: Governance in Action
            </h2>
            <p className="text-lg text-stone-300 max-w-3xl mx-auto">
              Overseer is YSEEKU&apos;s system governance agent. It operates continuously to maintain trust integrity.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 mb-12">
            <div className="bg-stone-800 p-4 rounded-lg text-center">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-1">Monitor</h4>
              <p className="text-stone-400 text-sm">Trust health & emergence signals</p>
            </div>
            <div className="bg-stone-800 p-4 rounded-lg text-center">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h4 className="font-semibold mb-1">Analyze</h4>
              <p className="text-stone-400 text-sm">Context & risk state labeling</p>
            </div>
            <div className="bg-stone-800 p-4 rounded-lg text-center">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-1">Plan</h4>
              <p className="text-stone-400 text-sm">Mitigation actions</p>
            </div>
            <div className="bg-stone-800 p-4 rounded-lg text-center">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-1">Execute</h4>
              <p className="text-stone-400 text-sm">Under explicit authority</p>
            </div>
            <div className="bg-stone-800 p-4 rounded-lg text-center">
              <div className="w-10 h-10 bg-rose-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h4 className="font-semibold mb-1">Learn</h4>
              <p className="text-stone-400 text-sm">Effectiveness & refusals</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-stone-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Advisory Mode</h3>
              <ul className="space-y-2 text-stone-300">
                <li>• Observes and plans only</li>
                <li>• Produces recommendations</li>
                <li>• Never mutates system state</li>
              </ul>
            </div>
            <div className="bg-stone-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-amber-400">Enforced Mode</h3>
              <ul className="space-y-2 text-stone-300">
                <li>• Executes permitted actions under audit</li>
                <li>• Requires explicit authority</li>
                <li>• Produces traceable enforcement records</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-stone-400 mt-8">
            This separation preserves human sovereignty while enabling delegated oversight.
          </p>
        </div>
      </section>

      {/* Refusal Is a Feature */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              Refusal Is a Feature
            </h2>
            <p className="text-xl text-stone-700 mb-8">
              In YSEEKU, a refusal is not an error.
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-stone-900 mb-3">Refusals Occur When:</h3>
                <ul className="space-y-2 text-stone-600">
                  <li>• Actions lack proper authority</li>
                  <li>• Justification is missing for high-impact enforcement</li>
                  <li>• Tenant context is invalid</li>
                  <li>• Trust Kernel constraints would be violated</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-stone-900 mb-3">Every Refusal:</h3>
                <ul className="space-y-2 text-stone-600">
                  <li>• Is explicitly recorded</li>
                  <li>• Generates an audit trail</li>
                  <li>• Can inform future recommendations</li>
                  <li>• Preserves system trust</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-100 border-2 border-red-300 rounded-lg p-6">
              <p className="text-xl font-bold text-red-900">
                A system that cannot say &quot;no&quot; cannot be trusted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Human Authority */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              Human Authority & Override
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              YSEEKU governance is human-centered by design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-stone-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <p className="text-stone-700 font-medium">Humans define governance parameters</p>
            </div>
            <div className="bg-stone-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-stone-700 font-medium">Humans approve or revoke enforcement authority</p>
            </div>
            <div className="bg-stone-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <p className="text-stone-700 font-medium">Humans can review, override, or halt actions</p>
            </div>
            <div className="bg-stone-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <p className="text-stone-700 font-medium">All overrides are logged and auditable</p>
            </div>
          </div>

          <p className="text-center text-lg text-stone-600 mt-8 max-w-3xl mx-auto">
            SONATE and Overseer do not replace human judgment — they structure and protect it.
          </p>
        </div>
      </section>

      {/* What This Is Not */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              What This Is Not
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              To be explicit, YSEEKU governance is not:
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            <div className="bg-white p-4 rounded-lg text-center border border-stone-200">
              <svg className="w-8 h-8 text-red-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <p className="text-sm text-stone-700">Token-based voting</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center border border-stone-200">
              <svg className="w-8 h-8 text-red-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <p className="text-sm text-stone-700">DAO-driven execution</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center border border-stone-200">
              <svg className="w-8 h-8 text-red-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <p className="text-sm text-stone-700">Anonymous consensus</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center border border-stone-200">
              <svg className="w-8 h-8 text-red-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <p className="text-sm text-stone-700">Self-authorizing AI</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center border border-stone-200">
              <svg className="w-8 h-8 text-red-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <p className="text-sm text-stone-700">Black-box decisions</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center border border-stone-200">
              <svg className="w-8 h-8 text-red-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <p className="text-sm text-stone-700">Diffuse accountability</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/governance/why-not-dao" className="text-purple-600 hover:text-purple-800 font-medium">
              Read: Why YSEEKU Is Not a DAO →
            </Link>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Why This Matters
            </h2>
            <p className="text-xl text-purple-200 mb-8">
              As AI systems become more capable, the real risk is not intelligence — it is unbounded authority.
            </p>

            <div className="grid md:grid-cols-5 gap-4 mb-8">
              <div className="bg-purple-800/50 p-4 rounded-lg">
                <p className="font-medium">Power is constrained</p>
              </div>
              <div className="bg-purple-800/50 p-4 rounded-lg">
                <p className="font-medium">Decisions are explainable</p>
              </div>
              <div className="bg-purple-800/50 p-4 rounded-lg">
                <p className="font-medium">Actions are reversible</p>
              </div>
              <div className="bg-purple-800/50 p-4 rounded-lg">
                <p className="font-medium">Failures are visible</p>
              </div>
              <div className="bg-purple-800/50 p-4 rounded-lg">
                <p className="font-medium">Trust degrades safely</p>
              </div>
            </div>

            <p className="text-lg text-purple-100">
              This is how intelligent systems earn legitimacy in production environments.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Learn More
          </h2>
          <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto">
            Explore how YSEEKU implements constitutional governance for AI systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/technology" className="bg-purple-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-purple-700 transition-colors">
              Technology Details
            </Link>
            <Link href="/governance/why-not-dao" className="border border-stone-300 text-stone-300 px-8 py-3 rounded-md text-lg font-medium hover:bg-stone-700 transition-colors">
              Why Not a DAO?
            </Link>
            <Link href="/demo" className="border border-stone-300 text-stone-300 px-8 py-3 rounded-md text-lg font-medium hover:bg-stone-700 transition-colors">
              See Live Demo
            </Link>
          </div>

          <div className="border-t border-stone-700 pt-8 mt-12">
            <p className="text-lg text-stone-300 font-medium">
              YSEEKU is building AI systems that can be trusted — because they are governed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
