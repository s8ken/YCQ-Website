import Link from "next/link";
import { ArrowLeft, Shield, Zap, Database, Users, TrendingUp, CheckCircle, AlertCircle, Clock, Download, Share2, Filter, Search } from "lucide-react";

export default function SymbiPlatformPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-purple-200">
            <Zap className="w-4 h-4" />
            <span>Enterprise Trust Infrastructure</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-stone-900 mb-6">
            SONATE Symphony
            <span className="block text-purple-600">Platform</span>
          </h1>
          <p className="text-xl text-stone-600 mb-8 max-w-3xl mx-auto">
            Complete enterprise-grade trust infrastructure with Ed25519 cryptographic verification,
            hash-chained trust ledger, and comprehensive AI governance
          </p>
        </div>
      </section>

      {/* Platform Stats */}
      <section className="py-16 bg-stone-50 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50K+</div>
              <div className="text-stone-600">Trust Receipts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-stone-600">Uptime Target</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-stone-600">LLM Providers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">24/7</div>
              <div className="text-stone-600">Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Trust Receipts Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-900 mb-4">Advanced Trust Receipts</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Enterprise-grade cryptographic trust receipts with Ed25519 signatures,
              hash-chain verification, and real-time compliance scoring
            </p>
          </div>

          {/* Enhanced Trust Receipts Demo */}
          <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Sample Trust Receipt */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-md">
                  <div className="flex items-center justify-between mb-4 border-b border-stone-100 pb-4">
                    <h3 className="text-xl font-bold text-stone-900">Trust Receipt #TS-2024-001</h3>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-green-700 text-sm font-medium">Verified</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-stone-500">Issuer:</span>
                      <span className="text-stone-800 font-mono text-sm">did:sonate:org:techcorp</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Recipient:</span>
                      <span className="text-stone-800 font-mono text-sm">did:sonate:ai:assistant-001</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Trust Score:</span>
                      <span className="text-green-600 font-bold">9.8/10</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Verification Level:</span>
                      <span className="text-purple-600 font-medium">Premium</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Blockchain:</span>
                      <span className="text-stone-800">Ethereum</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Status:</span>
                      <span className="text-green-600 font-medium">Active</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-stone-100">
                    <div className="flex justify-between items-center">
                      <span className="text-stone-500 text-sm">Cryptographic Hash:</span>
                      <span className="text-stone-400 font-mono text-xs">0x7f8a...b2c9</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                  <div className="flex items-center space-x-3 mb-2">
                    <Shield className="w-5 h-5 text-purple-600" />
                    <h4 className="text-purple-900 font-medium">Zero-Knowledge Proofs</h4>
                  </div>
                  <p className="text-purple-700 text-sm">Privacy-preserving verification without revealing sensitive data</p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <div className="flex items-center space-x-3 mb-2">
                    <Database className="w-5 h-5 text-blue-600" />
                    <h4 className="text-blue-900 font-medium">Multi-Blockchain</h4>
                  </div>
                  <p className="text-blue-700 text-sm">Support for Ethereum, Polygon, and Solana networks</p>
                </div>

                <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                  <div className="flex items-center space-x-3 mb-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <h4 className="text-green-900 font-medium">Real-time Scoring</h4>
                  </div>
                  <p className="text-green-700 text-sm">Dynamic trust scoring based on behavior and compliance</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors">
                <Download className="w-4 h-4" />
                <span>Download Receipt</span>
              </button>
              <button className="bg-white border border-stone-300 hover:bg-stone-50 text-stone-700 px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Share Receipt</span>
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors">
                <CheckCircle className="w-4 h-4" />
                <span>Verify Receipt</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-900 mb-4">Enterprise Features</h2>
            <p className="text-xl text-stone-600">Comprehensive trust infrastructure for enterprise deployment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Governance */}
            <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-stone-900">AI Governance</h3>
              </div>
              <ul className="space-y-2 text-stone-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Automated compliance monitoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Policy enforcement engine</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Risk assessment scoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Audit trail generation</span>
                </li>
              </ul>
            </div>

            {/* Real-time Analytics */}
            <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-stone-900">Real-time Analytics</h3>
              </div>
              <ul className="space-y-2 text-stone-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Trust score tracking</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Behavioral analysis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Performance metrics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Predictive insights</span>
                </li>
              </ul>
            </div>

            {/* Decentralized Identity */}
            <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-stone-900">DID Management</h3>
              </div>
              <ul className="space-y-2 text-stone-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Decentralized identities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Verifiable credentials</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Cross-platform support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Privacy-preserving</span>
                </li>
              </ul>
            </div>

            {/* Multi-Blockchain */}
            <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-stone-900">Multi-Blockchain</h3>
              </div>
              <ul className="space-y-2 text-stone-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Ethereum integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Polygon support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Solana compatibility</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Cross-chain verification</span>
                </li>
              </ul>
            </div>

            {/* Security Monitoring */}
            <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-stone-900">Security Monitor</h3>
              </div>
              <ul className="space-y-2 text-stone-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>24/7 monitoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Threat detection</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Incident response</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Compliance alerts</span>
                </li>
              </ul>
            </div>

            {/* API Integration */}
            <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-stone-900">API Integration</h3>
              </div>
              <ul className="space-y-2 text-stone-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>RESTful APIs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>GraphQL support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>WebSocket connections</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>SDK availability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-stone-900 mb-4">
            Ready to Deploy?
          </h2>
          <p className="text-xl text-stone-600 mb-8">
            Experience the full power of SONATE Symphony with enterprise-grade features
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/trust-demo"
              className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Demo</span>
            </Link>
            <button className="inline-flex items-center justify-center gap-2 bg-white border border-stone-300 text-purple-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-purple-50 transition-all duration-300 shadow-md hover:shadow-lg">
              <Shield className="w-5 h-5" />
              <span>Contact Enterprise Sales</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
