"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CONSOLE_URL } from "@/lib/site";
import TrustLedgerDemo from "@/components/TrustLedgerDemo";
import EnhancedTrustReceipts from "@/components/EnhancedTrustReceipts";
import { ArrowLeft, Shield, Zap, Database, Users, TrendingUp, CheckCircle, AlertCircle, Clock, Download, Share2, Filter, Search, BarChart3, Menu, X } from "lucide-react";

export default function TrustDemoPage() {
  const [showFullPlatform, setShowFullPlatform] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (showFullPlatform) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <nav className="bg-black/50 backdrop-blur-md border-b border-purple-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setShowFullPlatform(false)}
                  className="flex items-center space-x-2 text-purple-300 hover:text-purple-200"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back to Demo</span>
                </button>
                <div className="h-6 w-px bg-purple-500/30" />
                <div className="flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-purple-400" />
                  <span className="text-xl font-bold text-white">SONATE Symphony</span>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <span className="text-green-400 flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Demo Active</span>
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
              <span>Trust Receipt Demo</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              SONATE Symphony
              <span className="block text-purple-400">Platform</span>
            </h1>
            <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
              Demo UI showing receipt generation, hash-chained structures, and signature verification concepts.
            </p>
          </div>
        </section>

        {/* Platform Stats */}
        <section className="py-16 bg-black/30 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">Demo</div>
                <div className="text-purple-200">Receipts</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">Ed25519</div>
                <div className="text-purple-200">Signatures</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">SHA-256</div>
                <div className="text-purple-200">Hashing</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">Live</div>
                <div className="text-purple-200">Verification UI</div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Trust Receipts Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Trust Receipts (Demo)</h2>
              <p className="text-xl text-purple-200 max-w-3xl mx-auto">
                Cryptographic receipt concepts with signatures, hash-chain verification, and basic scoring.
              </p>
            </div>

            {/* Enhanced Trust Receipts Demo */}
            <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20">
              <EnhancedTrustReceipts />
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
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-white">
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
                <p className="text-sm text-blue-200 mb-2 font-semibold">User Name:</p>
                <code className="block bg-black/40 text-green-300 px-4 py-2 rounded font-mono text-base border border-green-500/30">
                  demo@yseeku.com
                </code>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <p className="text-sm text-blue-200 mb-2 font-semibold">Password:</p>
                <code className="block bg-black/40 text-green-300 px-4 py-2 rounded font-mono text-base border border-green-500/30">
                  Demo123!
                </code>
              </div>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              ⚠️ Demo Environment: Data purged every 24 hours • Rate limited for fair use
            </p>
            <div className="mt-8">
              <Link 
                href="https://yseeku-platform-production.up.railway.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                🚀 Launch Platform
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustLedgerDemo />
        </div>
      </section>

      {/* Enhanced Trust Receipts Section - SONATE Symphony Integration */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-blue-400/30">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              SONATE Symphony Integration
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Enhanced Trust Receipts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced cryptographic trust receipts with Ed25519 signatures, hash-chain verification, and enterprise-grade validation
            </p>
          </div>
          <EnhancedTrustReceipts />
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

      {/* Enhanced Dashboard Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Enterprise Trust Dashboards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive monitoring, analytics, and security visualization for enterprise deployment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Trust Dashboard */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Trust Dashboard</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Real-time 6-pillar compliance monitoring, agent declarations, and trust scoring with enterprise-grade visualization.
              </p>
              <Link
                href="/trust-dashboard"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Dashboard
                <TrendingUp className="w-4 h-4" />
              </Link>
            </div>

            {/* Security Monitor */}
            <div className="bg-gradient-to-br from-red-50 to-orange-100 rounded-xl p-6 border border-red-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Security Monitor</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Enterprise security monitoring with threat detection, rate limiting, key management, and system performance tracking.
              </p>
              <Link
                href="/security-monitor"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Monitor Security
                <AlertCircle className="w-4 h-4" />
              </Link>
            </div>

            {/* Analytics */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Analytics</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive analytics with trust distribution charts, compliance trends, agent performance metrics, and data exports.
              </p>
              <Link
                href="/analytics"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
              >
                View Analytics
                <BarChart3 className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The 6 Trust Articles */}
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

      {/* CTA Section - Updated to show full platform */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Enterprise Deployment?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience the full SONATE Trust Platform with production-ready features
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
    </div>
  );
}
