import Link from "next/link";
import { CONSOLE_URL } from "@/lib/site";

export default function Changelog() {
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Changelog
            </h1>
            <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto">
              Version history and methodology updates for YCQ Sonate metrics
            </p>
            <Link href="/metrics-methodology" className="text-blue-600 hover:text-blue-800 font-medium">
              ← Back to Metrics Methodology
            </Link>
          </div>
        </div>
      </section>

      {/* Changelog Entries */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* 2025.11.08-r1 */}
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <h2 className="text-2xl font-bold text-stone-900">2025.11.08-r1</h2>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  Initial Release
                </span>
              </div>
              <ul className="text-stone-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Initial public methodology release with complete KPI definitions (FAR-A, FAR-H, PFI, TIS)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Weight vector for complexity normalization set to [0.25, 0.35, 0.30, 0.10]</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Introduced LVP/RC/GA/AD components for TIS calculation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Published complete evaluation protocol and statistical reporting standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Added guardrails matrix with provider-agnostic policy mapping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Implemented JSON-LD structured data for SEO and discoverability</span>
                </li>
              </ul>
            </div>

            {/* Template for future entries */}
            <div className="border-l-4 border-stone-300 pl-6 py-2 opacity-50">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <h2 className="text-2xl font-bold text-stone-900">YYYY.MM.DD-rN</h2>
                <span className="bg-stone-100 text-stone-800 text-sm font-medium px-3 py-1 rounded-full">
                  Future Release
                </span>
              </div>
              <ul className="text-stone-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-stone-400 font-bold mr-2">•</span>
                  <span>Methodology updates will be documented here with detailed change descriptions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-400 font-bold mr-2">•</span>
                  <span>Weight vector modifications with justification and impact analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-400 font-bold mr-2">•</span>
                  <span>New KPI additions or deprecated metric removals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-400 font-bold mr-2">•</span>
                  <span>Evaluation protocol refinements and sampling improvements</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Versioning Convention</h3>
            <p className="text-blue-800">
              We follow the format <code className="bg-blue-100 px-1 rounded">YYYY.MM.DD-rN</code> where:
            </p>
            <ul className="text-blue-800 mt-2 space-y-1">
              <li>• <code className="bg-blue-100 px-1 rounded">YYYY.MM.DD</code> represents the release date</li>
              <li>• <code className="bg-blue-100 px-1 rounded">rN</code> represents the revision number for that day (starting with r1)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Additional Resources</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/metrics-methodology" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                View Full Methodology
              </Link>
              <Link href="/technology" className="border border-stone-300 text-stone-700 px-6 py-3 rounded-md font-medium hover:bg-stone-50 transition-colors">
                Technical Implementation
              </Link>
              <Link href={CONSOLE_URL} target="_blank" className="bg-stone-800 text-white px-6 py-3 rounded-md font-medium hover:bg-stone-900 transition-colors">
                Live Platform
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}