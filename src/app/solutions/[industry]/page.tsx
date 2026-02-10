import Link from "next/link";

const INDUSTRY_CONTENT: Record<
  string,
  {
    title: string;
    subtitle: string;
    bullets: string[];
  }
> = {
  healthcare: {
    title: "Healthcare & Life Sciences",
    subtitle: "Traceable AI decisions and verifiable receipts for sensitive workflows.",
    bullets: [
      "Receipt-based audit trails for high-risk AI interactions",
      "Policy-driven evaluation and monitoring signals",
      "Research validation lane for model/process experiments",
    ],
  },
  financial: {
    title: "Financial Services",
    subtitle: "Governance signals and verifiable logs designed for auditability.",
    bullets: [
      "Trust scoring primitives and monitoring dimensions",
      "Tamper-evident receipt approach (hashing + signatures)",
      "Operational workflows for investigations and reporting",
    ],
  },
  manufacturing: {
    title: "Manufacturing & Supply Chain",
    subtitle: "Operational AI with clearer accountability and reviewability.",
    bullets: [
      "Structured evidence for model outputs and downstream actions",
      "Real-time monitoring for drift and anomaly signals",
      "Separation of production monitoring vs research experimentation",
    ],
  },
  retail: {
    title: "Retail & E-commerce",
    subtitle: "Customer-facing AI with verifiable decision evidence.",
    bullets: [
      "Receipts to support dispute resolution and QA",
      "Governance checks for policy alignment and safety",
      "Foundations for consistent evaluation across vendors/models",
    ],
  },
  government: {
    title: "Government & Public Sector",
    subtitle: "Accountable AI systems with auditability as a first-class output.",
    bullets: [
      "Cryptographic receipts for integrity and non-repudiation goals",
      "Framework-based scoring to support review and oversight",
      "Clear boundary separation across core/detect/lab/orchestrate",
    ],
  },
  smb: {
    title: "SMB",
    subtitle: "A practical path to adopt AI with governance fundamentals in place.",
    bullets: [
      "Start with a receipt-based evidence trail",
      "Adopt monitoring signals without building custom governance from scratch",
      "Scale toward orchestration and identity layers as needs grow",
    ],
  },
};

function titleCaseSlug(slug: string) {
  return slug
    .replace(/[-_]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function IndustryPage({
  params,
}: {
  params: { industry: string };
}) {
  const key = String(params.industry || "").toLowerCase();
  const content = INDUSTRY_CONTENT[key];

  const title = content?.title ?? titleCaseSlug(key);
  const subtitle =
    content?.subtitle ??
    "How SONATE concepts can apply in this domain, with current repo progress as the source of truth.";
  const bullets =
    content?.bullets ??
    [
      "Trust scoring + evaluation primitives in @sonate/core",
      "Monitoring signals and detection patterns in @sonate/detect",
      "Receipt verification concepts demonstrated in the live demo",
    ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-white to-stone-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">{title}</h1>
            <p className="text-lg md:text-xl text-stone-600 mb-8">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/trust-demo"
                className="bg-amber-600 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-700 transition-colors text-center"
              >
                Try the Trust Demo
              </Link>
              <Link
                href="/technology"
                className="border border-stone-300 text-stone-700 px-6 py-3 rounded-md font-medium hover:bg-stone-50 transition-colors text-center"
              >
                Read the Technical Overview
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-stone-50 rounded-xl border border-stone-200 p-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">What SONATE provides</h2>
            <ul className="space-y-2 text-stone-700">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="text-amber-700 font-bold">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://github.com/s8ken/yseeku-platform"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-800 text-white px-6 py-3 rounded-md font-medium hover:bg-stone-900 transition-colors text-center"
              >
                View the Repo
              </a>
              <Link
                href="/contact"
                className="border border-stone-300 text-stone-700 px-6 py-3 rounded-md font-medium hover:bg-stone-50 transition-colors text-center"
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
