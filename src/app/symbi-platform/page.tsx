import Link from "next/link";
import { ArrowLeft, Shield, Zap, Database, Users, TrendingUp, CheckCircle, AlertCircle, Clock, Download, Share2, Filter, Search } from "lucide-react";

export default function SymbiPlatformPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-black/50 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/trust-demo" className="flex items-center space-x-2 text-purple-300 hover:text-purple-200">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Demo</span>
              </Link>
              <div className="h-6 w-px bg-purple-500/30" />
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-purple-400" />
                <span className="text-xl font-bold text-white">SONATE Symphony</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <span className="text-green-400 flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Platform Active</span>
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-purple-500/20 backdrop-blur-sm text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-purple-400/30">
            <Zap className="w-4 h-4" />
            <span>Enterprise Trust Infrastructure</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            SONATE Symphony
            <span className="block text-purple-400">Platform</span>
          </h1>
          <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
            Complete enterprise-grade trust infrastructure with Ed25519 cryptographic verification,
            hash-chained trust ledger, and comprehensive AI governance
          </p>
        </div>
      </section>

      {/* Platform Stats */}
      <section className="py-16 bg-black/30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">50K+</div>
              <div className="text-purple-200">Trust Receipts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-purple-200">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">5+</div>
              <div className="text-purple-200">LLM Providers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-purple-200">Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Trust Receipts Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Advanced Trust Receipts</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Enterprise-grade cryptographic trust receipts with Ed25519 signatures,
              hash-chain verification, and real-time compliance scoring
            </p>
          </div>

          {/* Enhanced Trust Receipts Demo */}
          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Sample Trust Receipt */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl p-6 border border-purple-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">Trust Receipt #TS-2024-001</h3>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 text-sm font-medium">Verified</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-purple-300">Issuer:</span>
                      <span className="text-white font-mono text-sm">did:sonate:org:techcorp</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-300">Recipient:</span>
                      <span className="text-white font-mono text-sm">did:sonate:ai:assistant-001</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-300">Trust Score:</span>
                      <span className="text-green-400 font-bold">9.8/10</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-300">Verification Level:</span>
                      <span className="text-purple-400 font-medium">Premium</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-300">Blockchain:</span>
                      <span className="text-white">Ethereum</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-300">Status:</span>
                      <span className="text-green-400">Active</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-purple-500/30">
                    <div className="flex justify-between items-center">
                      <span className="text-purple-300 text-sm">Cryptographic Hash:</span>
                      <span className="text-white font-mono text-xs">0x7f8a...b2c9</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-500/20">
                  <div className="flex items-center space-x-3 mb-2">
                    <Shield className="w-5 h-5 text-purple-400" />
                    <h4 className="text-white font-medium">Zero-Knowledge Proofs</h4>
                  </div>
                  <p className="text-purple-200 text-sm">Privacy-preserving verification without revealing sensitive data</p>
                </div>

                <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-500/20">
                  <div className="flex items-center space-x-3 mb-2">
                    <Database className="w-5 h-5 text-blue-400" />
                    <h4 className="text-white font-medium">Multi-Blockchain</h4>
                  </div>
                  <p className="text-blue-200 text-sm">Support for Ethereum, Polygon, and Solana networks</p>
                </div>

                <div className="bg-green-900/30 rounded-lg p-4 border border-green-500/20">
                  <div className="flex items-center space-x-3 mb-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <h4 className="text-white font-medium">Real-time Scoring</h4>
                  </div>
                  <p className="text-green-200 text-sm">Dynamic trust scoring based on behavior and compliance</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4 mt-8">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors">
                <Download className="w-4 h-4" />
                <span>Download Receipt</span>
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Share Receipt</span>
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors">
                <CheckCircle className="w-4 h-4" />
                <span>Verify Receipt</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Enterprise Features</h2>
            <p className="text-xl text-purple-200">Comprehensive trust infrastructure for enterprise deployment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Governance */}
            <div className="bg-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">AI Governance</h3>
              </div>
              <ul className="space-y-2 text-purple-200">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Automated compliance monitoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Policy enforcement engine</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Risk assessment scoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Audit trail generation</span>
                </li>
              </ul>
            </div>

            {/* Real-time Analytics */}
            <div className="bg-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Real-time Analytics</h3>
              </div>
              <ul className="space-y-2 text-blue-200">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Trust score tracking</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Behavioral analysis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Performance metrics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Predictive insights</span>
                </li>
              </ul>
            </div>

            {/* Decentralized Identity */}
            <div className="bg-green-900/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">DID Management</h3>
              </div>
              <ul className="space-y-2 text-green-200">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Decentralized identities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Verifiable credentials</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Cross-platform support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Privacy-preserving</span>
                </li>
              </ul>
            </div>

            {/* Multi-Blockchain */}
            <div className="bg-yellow-900/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Multi-Blockchain</h3>
              </div>
              <ul className="space-y-2 text-yellow-200">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Ethereum integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Polygon support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Solana compatibility</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Cross-chain verification</span>
                </li>
              </ul>
            </div>

            {/* Security Monitoring */}
            <div className="bg-red-900/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Security Monitor</h3>
              </div>
              <ul className="space-y-2 text-red-200">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>24/7 monitoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Threat detection</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Incident response</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Compliance alerts</span>
                </li>
              </ul>
            </div>

            {/* API Integration */}
            <div className="bg-indigo-900/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">API Integration</h3>
              </div>
              <ul className="space-y-2 text-indigo-200">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>RESTful APIs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>GraphQL support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>WebSocket connections</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>SDK availability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Deploy?
          </h2>
          <p className="text-xl text-purple-200 mb-8">
            Experience the full power of SONATE Symphony with enterprise-grade features
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/trust-demo"
              className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-purple-700 transition-all duration-300 shadow-xl"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Demo</span>
            </Link>
            <button className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-purple-50 transition-all duration-300 shadow-xl">
              <Shield className="w-5 h-5" />
              <span>Contact Enterprise Sales</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-md border-t border-purple-500/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-purple-300">
            © 2024 SONATE Symphony. Enterprise Trust Infrastructure.
          </p>
          <p className="text-purple-400 text-sm mt-2">
            Powering the future of AI trust and governance
          </p>
        </div>
      </footer>
    </div>
  );
}