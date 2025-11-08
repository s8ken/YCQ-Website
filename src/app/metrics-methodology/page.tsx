import Link from "next/link";
import { CONSOLE_URL } from "@/lib/site";

export default function MetricsMethodology() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-stone-800">YCQ Sonate</Link>
              <div className="ml-2 text-sm text-stone-600">Why Seek You</div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/#platform" className="text-stone-700 hover:text-stone-900 px-3 py-2 text-sm font-medium">
                  Platform
                </Link>
                <Link href="/technology" className="text-stone-700 hover:text-stone-900 px-3 py-2 text-sm font-medium">
                  Technology
                </Link>
                <Link href="/investors" className="text-stone-700 hover:text-stone-900 px-3 py-2 text-sm font-medium">
                  Investors
                </Link>
                <Link href="/trust-demo" className="text-blue-600 hover:text-blue-800 px-3 py-2 text-sm font-medium">
                  Trust Demo
                </Link>
                <Link href={CONSOLE_URL} target="_blank" className="bg-stone-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-stone-900">
                  Full Platform
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-stone-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Metrics Methodology & Assumptions
            </h1>
            <p className="text-xl text-stone-600 mb-8 max-w-3xl mx-auto">
              Defining YCQ Sonate's platform KPIs (FAR-A, FAR-H, PFI, TIS), evaluation protocol, and statistical reporting conventions. Version: 2025.11.08-r1
            </p>
              <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-lg max-w-3xl mx-auto">
                <p className="text-amber-900 font-semibold mb-2">📋 Implementation Status</p>
                <p className="text-amber-800 text-sm">
                  Core trust scoring operational with 6-principle weighted algorithm (compliance_score, guilt_score). 
                  Advanced metrics (FAR-A, FAR-H, PFI, TIS) methodology defined, implementation in progress.
                </p>
              </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#kpi-definitions" className="text-blue-600 hover:text-blue-800 font-medium">
                View KPIs →
              </Link>
              <Link href="#evaluation-protocol" className="text-blue-600 hover:text-blue-800 font-medium">
                Evaluation Protocol →
              </Link>
              <Link href="/changelog" className="text-purple-600 hover:text-purple-800 font-medium">
                Change-log →
              </Link>
            </div>
          </div>

          {/* JSON-LD TechArticle */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TechArticle",
              "headline": "YCQ Sonate Metrics Methodology & Assumptions",
              "datePublished": "2025-11-08",
              "dateModified": "2025-11-08",
              "author": {
                "@type": "Organization",
                "name": "Yseeku"
              },
              "about": ["Trust Receipts","Hash-chained Ledger","AI Guardrails","Fairness","Hallucination"]
            })
          }} />
        </div>
      </section>

      {/* KPI Definitions */}
      <section id="kpi-definitions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">KPI Definitions</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Clear, auditable, directionally correct metrics for AI trust infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* FAR-A */}
            <div className="bg-red-50 p-6 rounded-lg border border-red-100">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">FAR-A</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-1">FAR-A</h3>
                  <p className="text-stone-700 font-medium">False Apology Rate (Automated)</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Definition</h4>
                  <p className="text-stone-600 text-sm">
                    Unnecessary or policy-misfired apologies issued by the system (including automated guardrail apologies) when no breach or harm occurred. <strong>Lower is better.</strong>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Formula</h4>
                  <div className="bg-white p-3 rounded border text-sm font-mono">
                    FAR-A = (Apologies flagged as unnecessary / Total interactions) × 100
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Target</h4>
                  <p className="text-stone-600 text-sm">
                    &lt; 0.50%
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Notes</h4>
                  <p className="text-stone-600 text-sm">
                    An apology is "unnecessary" if post-hoc adjudication finds no breach, harm, or policy trigger. Includes both model-initiated and guardrail-initiated apologies.
                  </p>
                </div>
              </div>
            </div>

            {/* FAR-H */}
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-100">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">FAR-H</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-1">FAR-H</h3>
                  <p className="text-stone-700 font-medium">Factual Assertion Failure (Hallucination) Rate</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Definition</h4>
                  <p className="text-stone-600 text-sm">
                    Share of <strong>factual claims</strong> that fail verification against the ground-truth set or authoritative references. <strong>Lower is better.</strong>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Formula</h4>
                  <div className="bg-white p-3 rounded border text-sm font-mono">
                    FAR-H = (Factual claims failing verification / Total factual claims checked) × 100
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Target</h4>
                  <p className="text-stone-600 text-sm">
                    &lt; 1.00% across general tasks; &lt; 0.25% for regulated domains
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Notes</h4>
                  <p className="text-stone-600 text-sm">
                    Factual claims are extracted by the claim-miner; verification uses citation checks, structured tests, or oracle datasets.
                  </p>
                </div>
              </div>
            </div>

            {/* PFI */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">PFI</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-1">PFI</h3>
                  <p className="text-stone-700 font-medium">Protected Fairness Index</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Definition</h4>
                  <p className="text-stone-600 text-sm">
                    Distributional parity across protected attributes (e.g., gender, ethnicity, age) for key outcomes (access, approval, refusal, latency, quality). <strong>Higher is better.</strong>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Formula</h4>
                  <div className="bg-white p-3 rounded border text-sm font-mono">
                    PFI = 1 - Σ(w<sub>s</sub> × Δ<sub>s</sub>)
                  </div>
                  <p className="text-stone-600 text-xs mt-2">
                    Where Δ = 1 - min(p<sub>i</sub>/max(p<sub>j</sub>)) for rates, clamped to [0,1]
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Target</h4>
                  <p className="text-stone-600 text-sm">
                    ≥ 0.98 (enterprise), ≥ 0.95 (public)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Notes</h4>
                  <p className="text-stone-600 text-sm">
                    Report attribute coverage, sample sizes per group, and uncertainty (see §3).
                  </p>
                </div>
              </div>
            </div>

            {/* TIS */}
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">TIS</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-1">TIS</h3>
                  <p className="text-stone-700 font-medium">Trust Integrity Score</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Definition</h4>
                  <p className="text-stone-600 text-sm">
                    Composite integrity of execution and auditability. <strong>Higher is better.</strong>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Components & Weights</h4>
                  <ul className="text-stone-600 text-sm space-y-1">
                    <li>• <strong>Ledger Verification Pass Rate</strong> (0.35)</li>
                    <li>• <strong>Receipt Coverage</strong> (0.20)</li>
                    <li>• <strong>Guardrail Adherence</strong> (0.25)</li>
                    <li>• <strong>Audit Depth</strong> (0.20)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Formula</h4>
                  <div className="bg-white p-3 rounded border text-sm font-mono">
                    TIS = Σ(w<sub>k</sub> × m<sub>k</sub>)
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Target</h4>
                  <p className="text-stone-600 text-sm">
                    ≥ 0.995
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Notes</h4>
                  <p className="text-stone-600 text-sm">
                    Publish per-component scores and weights; show receipt examples.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Protocol */}
      <section id="evaluation-protocol" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Evaluation Protocol</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              How we measure and validate our trust metrics
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Sampling */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-stone-900 mb-4">2.1 Sampling</h3>
              <ul className="text-stone-600 text-sm space-y-2">
                <li>• <strong>Stratified by Task Complexity</strong>: Simple, Standard, Advanced, Critical</li>
                <li>• <strong>Domains</strong>: General, Code, Legal-adjacent, Health-adjacent, Finance-adjacent, Safety</li>
                <li>• <strong>Providers</strong>: OpenAI, Anthropic, and any added vendor; cross-vendor balance ≥ 15% per provider per report</li>
              </ul>
            </div>

            {/* Claim Mining */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-stone-900 mb-4">2.2 Claim Mining (for FAR-H)</h3>
              <ul className="text-stone-600 text-sm space-y-2">
                <li>• Extract factual claims using deterministic patterns + model-assisted span detection</li>
                <li>• Deduplicate near-identical claims; map to verification methods (oracle set, regex matcher, API-free validator, human adjudication)</li>
              </ul>
            </div>

            {/* Adjudication */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-stone-900 mb-4">2.3 Adjudication</h3>
              <ul className="text-stone-600 text-sm space-y-2">
                <li>• <strong>Blind, two-pass</strong> where applicable: Reviewer A, Reviewer B, tie-break by Lead</li>
                <li>• <strong>Inter-rater agreement</strong> (Gwet AC1) reported per domain</li>
              </ul>
            </div>

            {/* Guardrail Events */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-stone-900 mb-4">2.4 Guardrail Events (for FAR-A, TIS)</h3>
              <ul className="text-stone-600 text-sm space-y-2">
                <li>• Log trigger → action with policy ID, severity, user impact</li>
                <li>• An apology is counted as <strong>unnecessary</strong> if: (a) no policy breach verified, <strong>and</strong> (b) user intent was permissible within ToS, <strong>and</strong> (c) the content was non-harmful on re-inspection</li>
              </ul>
            </div>

            {/* Complexity Normalization */}
            <div className="bg-white p-6 rounded-lg shadow-sm md:col-span-2">
              <h3 className="text-xl font-semibold text-stone-900 mb-4">2.5 Complexity Normalization</h3>
              <ul className="text-stone-600 text-sm space-y-2">
                <li>• Report KPIs per stratum</li>
                <li>• Provide <strong>Complexity-Normalized KPI</strong>:</li>
              </ul>
              <div className="bg-stone-50 p-3 rounded border text-sm font-mono my-3">
                M<sub>norm</sub> = Σ(α<sub>s</sub> × M<sub>s</sub>)
              </div>
              <p className="text-stone-600 text-sm">
                Where α<sub>s</sub> is a fixed publishable weight vector (e.g., [0.25, 0.35, 0.30, 0.10]). Publish the weight vector and keep it stable across releases; log any changes in the change-log.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistical Reporting */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Statistical Reporting</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Confidence intervals, rounding rules, and disclosure requirements
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <ul className="text-stone-700 space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span><strong>Confidence Intervals</strong>: 95% Wilson for proportions (FAR-A, FAR-H, components), normal CI for indices (PFI, TIS) via bootstrap (≥ 1,000 resamples)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span><strong>Rounding Rules</strong>: proportions to 2 decimals (e.g., 0.47%), indices to 3 decimals (e.g., 0.997)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span><strong>Minimum N</strong>: Do not publish stratum estimates with (n &lt; 200) interactions or (&lt; 50) claims; mark as <strong>NA</strong> and include in aggregate via partial pooling only</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <span><strong>Disclosure</strong>: Always publish <strong>N total</strong>, per-stratum N, provider mix, and evaluation window</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Trust Receipts & Ledger */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Trust Receipts & Ledger</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              User-verifiable cryptographic audit trails
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-stone-900 mb-4">Receipt Fields (Public)</h3>
              <ul className="text-stone-600 text-sm space-y-2">
                <li>• <code className="bg-stone-100 px-1 rounded">ts</code> - Timestamp</li>
                <li>• <code className="bg-stone-100 px-1 rounded">actor</code> - Actor identifier</li>
                <li>• <code className="bg-stone-100 px-1 rounded">intent</code> - User intent</li>
                <li>• <code className="bg-stone-100 px-1 rounded">inputs_hash</code> - Hash of inputs</li>
                <li>• <code className="bg-stone-100 px-1 rounded">outputs_hash</code> - Hash of outputs</li>
                <li>• <code className="bg-stone-100 px-1 rounded">policy_id</code> - Policy identifier</li>
                <li>• <code className="bg-stone-100 px-1 rounded">guardrail_action</code> - Guardrail action taken</li>
                <li>• <code className="bg-stone-100 px-1 rounded">ed25519_sig</code> - Ed25519 signature</li>
                <li>• <code className="bg-stone-100 px-1 rounded">ledger_height</code> - Ledger position</li>
                <li>• <code className="bg-stone-100 px-1 rounded">prev_hash</code> - Previous entry hash</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-stone-900 mb-4">Verification (Client-side)</h3>
              <ol className="text-stone-600 text-sm space-y-2 list-decimal list-inside">
                <li>Recompute <code className="bg-stone-100 px-1 rounded">inputs_hash</code>/<code className="bg-stone-100 px-1 rounded">outputs_hash</code> from the payload</li>
                <li>Verify Ed25519 signature against the public key</li>
                <li>Recompute hash-chain: <code className="bg-stone-100 px-1 rounded">prev_hash</code> → <code className="bg-stone-100 px-1 rounded">hash(payload)</code> consistency at <code className="bg-stone-100 px-1 rounded">ledger_height</code></li>
                <li>Check policy metadata (human-in-loop flags, escalation state)</li>
              </ol>
            </div>
              <div className="mt-4 text-center">
                <a href="/verifier.html" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  Open in-browser verifier →
                </a>
              </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-stone-900 mb-4">See a Trust Receipt → Verify</h3>
            <p className="text-stone-700 mb-6 max-w-2xl mx-auto">
              Try our minimalist web verifier (pure JS) to paste a receipt and verify its signature and hash-chain integrity
            </p>
            <Link href="/verifier.html" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Open In-Browser Verifier
              </Link>
          </div>
        </div>
      </section>

      {/* Guardrails Matrix */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Guardrails Matrix</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Provider-agnostic policy mapping with receipt evidence
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-stone-200">
              <thead>
                <tr className="bg-stone-100">
                  <th className="py-3 px-4 text-left text-stone-900 font-semibold border-b">Policy</th>
                  <th className="py-3 px-4 text-left text-stone-900 font-semibold border-b">Trigger (examples)</th>
                  <th className="py-3 px-4 text-left text-stone-900 font-semibold border-b">Action</th>
                  <th className="py-3 px-4 text-left text-stone-900 font-semibold border-b">Evidence in Receipt</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-200">
                  <td className="py-3 px-4 text-stone-700 font-medium">Safety</td>
                  <td className="py-3 px-4 text-stone-600 text-sm">Toxicity/violence threshold crossed</td>
                  <td className="py-3 px-4 text-stone-600 text-sm">Apologize + refuse</td>
                  <td className="py-3 px-4 text-stone-600 text-sm"><code className="bg-stone-100 px-1 rounded">policy_id</code>, <code className="bg-stone-100 px-1 rounded">scores</code>, <code className="bg-stone-100 px-1 rounded">guardrail_action=refuse</code></td>
                </tr>
                <tr className="border-b border-stone-200">
                  <td className="py-3 px-4 text-stone-700 font-medium">Privacy</td>
                  <td className="py-3 px-4 text-stone-600 text-sm">PII detected</td>
                  <td className="py-3 px-4 text-stone-600 text-sm">Mask + human-approve</td>
                  <td className="py-3 px-4 text-stone-600 text-sm"><code className="bg-stone-100 px-1 rounded">policy_id</code>, <code className="bg-stone-100 px-1 rounded">pii_spans</code>, <code className="bg-stone-100 px-1 rounded">human_flag=true</code></td>
                </tr>
                <tr className="border-b border-stone-200">
                  <td className="py-3 px-4 text-stone-700 font-medium">Compliance</td>
                  <td className="py-3 px-4 text-stone-600 text-sm">Regulated-domain query</td>
                  <td className="py-3 px-4 text-stone-600 text-sm">Escalate to human</td>
                  <td className="py-3 px-4 text-stone-600 text-sm"><code className="bg-stone-100 px-1 rounded">policy_id</code>, <code className="bg-stone-100 px-1 rounded">routing=human</code></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-stone-700 font-medium">Continuity</td>
                  <td className="py-3 px-4 text-stone-600 text-sm">Long-running context</td>
                  <td className="py-3 px-4 text-stone-600 text-sm">Summarize + confirm</td>
                  <td className="py-3 px-4 text-stone-600 text-sm"><code className="bg-stone-100 px-1 rounded">policy_id</code>, <code className="bg-stone-100 px-1 rounded">continuity=true</code></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <p className="text-stone-600 mb-4">
              Each row links to a sample Trust Receipt demonstrating the evidence captured.
            </p>
            <Link href="/trust-demo" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              View Sample Receipts
            </Link>
          </div>
        </div>
      </section>

      {/* Example Formulas */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Example Formulas</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Ready-to-render component calculations for TIS
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-stone-900 mb-4">Ledger Verification Pass Rate</h3>
              <div className="bg-stone-50 p-3 rounded border text-sm font-mono">
                LVP = (Receipts that pass sig + chain checks / Receipts sampled)
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-stone-900 mb-4">Receipt Coverage</h3>
              <div className="bg-stone-50 p-3 rounded border text-sm font-mono">
                RC = (Actions with receipts / Actions total)
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-stone-900 mb-4">Guardrail Adherence</h3>
              <div className="bg-stone-50 p-3 rounded border text-sm font-mono">
                GA = 1 - (Misfires (false positives + false negatives) / Total guardrail triggers)
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-stone-900 mb-4">Audit Depth</h3>
              <div className="bg-stone-50 p-3 rounded border text-sm font-mono">
                AD = (Artifacts present / Artifacts required)
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm md:col-span-2">
              <h3 className="text-xl font-semibold text-stone-900 mb-4">TIS Composite</h3>
              <div className="bg-stone-50 p-3 rounded border text-sm font-mono">
                TIS = 0.35×LVP + 0.20×RC + 0.25×GA + 0.20×AD
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publishing Conventions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Publishing Conventions</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Standards for public reporting and versioning
            </p>
          </div>

          <div className="bg-amber-50 p-8 rounded-lg">
            <ul className="text-stone-700 space-y-3">
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-2">•</span>
                <span><strong>Evaluation Window</strong>: show ISO start/end timestamps in UTC</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-2">•</span>
                <span><strong>Versioning</strong>: YYYY.MM.DD-rN (e.g., 2025.11.08-r1)</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-2">•</span>
                <span><strong>Change-log</strong>: link to <code className="bg-stone-100 px-1 rounded">/changelog</code> and include the diff of weights, sampling, or definitions</span>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-stone-900 mb-6">Change-log Template</h3>
            <div className="bg-stone-900 text-stone-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`## 2025.11.08-r1
- Initial public methodology.
- Weight vector for complexity normalization set to [0.25, 0.35, 0.30, 0.10].
- Introduced LVP/RC/GA/AD components for TIS.`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Page Skeleton */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Page Skeleton</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              For <code className="bg-stone-100 px-1 rounded">/metrics-methodology</code>
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg">
            <div className="font-mono text-sm text-stone-700">
              <div className="mb-4"># Metrics Methodology & Assumptions</div>
              <div className="mb-4">&gt; Last updated: 2025-11-08 (version 2025.11.08-r1)</div>
              <div className="mb-4">## KPIs</div>
              <div className="mb-2">- FAR-A (False Apology Rate)</div>
              <div className="mb-2">- FAR-H (Hallucination Rate)</div>
              <div className="mb-2">- PFI (Protected Fairness Index)</div>
              <div className="mb-4">- TIS (Trust Integrity Score)</div>
              <div className="mb-4">## Evaluation Protocol</div>
              <div className="mb-2">- Sampling & stratification</div>
              <div className="mb-2">- Claim mining & verification</div>
              <div className="mb-2">- Adjudication & agreement</div>
              <div className="mb-2">- Guardrail event handling</div>
              <div className="mb-4">- Complexity normalization</div>
              <div className="mb-4">## Statistical Reporting</div>
              <div className="mb-2">- CIs, rounding, minimum N, disclosure</div>
              <div className="mb-4">## Trust Receipts & Ledger</div>
              <div className="mb-2">- Fields, verification steps, example JSON</div>
              <div className="mb-4">## Guardrails Matrix</div>
              <div className="mb-2">- Policy → action → evidence</div>
              <div className="mb-4">## JSON-LD</div>
              <div className="mb-2">- SoftwareApplication + TechArticle blocks</div>
              <div className="mb-4">## Change-log</div>
              <div className="mb-2">- Link to /changelog</div>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Blocks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">JSON-LD Blocks</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Structured data for SEO and discoverability
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-stone-900 text-stone-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">SoftwareApplication</h3>
              <div className="font-mono text-sm overflow-x-auto">
                <pre>{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "YCQ Sonate — AI Trust Infrastructure",
  "applicationCategory": "SecurityApplication",
  "operatingSystem": "Web",
  "url": "https://yseeku.com/",
  "softwareVersion": "2025.11.08-r1",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
</script>`}</pre>
              </div>
            </div>

            <div className="bg-stone-900 text-stone-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">TechArticle</h3>
              <div className="font-mono text-sm overflow-x-auto">
                <pre>{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "YCQ Sonate Metrics Methodology & Assumptions",
  "datePublished": "2025-11-08",
  "dateModified": "2025-11-08",
  "author": {
    "@type": "Organization",
    "name": "Yseeku"
  },
  "about": ["Trust Receipts","Hash-chained Ledger","AI Guardrails","Fairness","Hallucination"]
}
</script>`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appendix */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Appendix — Terms</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-stone-900 mb-3">Trust Receipt</h3>
              <p className="text-stone-600 text-sm">
                User-verifiable record of an action, signed (Ed25519), placed into an append-only, hash-chained ledger.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-stone-900 mb-3">Hash-chained ledger</h3>
              <p className="text-stone-600 text-sm">
                Each entry references the previous entry's hash; tamper-evident.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-stone-900 mb-3">DID/VC</h3>
              <p className="text-stone-600 text-sm">
                Decentralized Identifiers & Verifiable Credentials for actor identity and attestations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-stone-900 mb-6">Additional Resources</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/technology" className="bg-stone-800 text-white px-6 py-3 rounded-md font-medium hover:bg-stone-900 transition-colors">
                Technical Implementation
              </Link>
              <Link href="/trust-demo" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                Live Demo & Verification
              </Link>
              <Link href="/investors" className="border border-stone-300 text-stone-700 px-6 py-3 rounded-md font-medium hover:bg-stone-50 transition-colors">
                Investment Overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}