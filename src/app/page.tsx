"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Shield, Zap, Brain, BarChart3, Lock, GitBranch } from "lucide-react";

function Index() {
        const [activeFeature, setActiveFeature] = useState(0);

        const features = [
                {
                        icon: Shield,
                        title: "Policy Governance",
                        description: "Constitutional AI governance framework with real-time policy enforcement and agent compliance monitoring",
                },
                {
                        icon: Brain,
                        title: "Emergence Detection",
                        description: "Advanced detection of emergent behaviors using constitutional principles and Bedau metrics",
                },
                {
                        icon: Zap,
                        title: "Live Monitoring",
                        description: "Real-time dashboards with WebSocket-powered metrics, alerts, and incident management",
                },
                {
                        icon: BarChart3,
                        title: "Compliance Export",
                        description: "Export audit logs and metrics in CSV/JSON for regulatory compliance and external audits",
                },
                {
                        icon: Lock,
                        title: "Trust Management",
                        description: "Trust scoring system with receipts, consent management, and agent authentication",
                },
                {
                        icon: GitBranch,
                        title: "Multi-Agent Orchestration",
                        description: "Orchestrate and coordinate multiple agents with drift detection and coherence tracking",
                },
        ];

        const tiers = [
                {
                        name: "Dashboard & Monitoring",
                        status: "✅ Complete",
                        features: [
                                "Real-time policy metrics",
                                "Live alert streaming",
                                "Agent performance cards",
                                "Violation timeline",
                                "Incident manager",
                        ],
                        color: "from-blue-500 to-blue-600",
                },
                {
                        name: "Authentication & Security",
                        status: "✅ Complete",
                        features: [
                                "JWT authentication",
                                "Login/logout flows",
                                "Token refresh",
                                "Protected routes",
                                "Auth middleware",
                        ],
                        color: "from-purple-500 to-purple-600",
                },
                {
                        name: "Metrics & Export",
                        status: "✅ Complete",
                        features: [
                                "Prometheus metrics",
                                "CSV/JSON export",
                                "Alert configuration",
                                "Threshold controls",
                                "Health endpoints",
                        ],
                        color: "from-green-500 to-green-600",
                },
                {
                        name: "Advanced Features",
                        status: "🔄 In Progress",
                        features: [
                                "Scheduled exports",
                                "Custom dashboards",
                                "Alert automation",
                                "Role-based access",
                                "Performance optimization",
                        ],
                        color: "from-orange-500 to-orange-600",
                },
        ];

        const ActiveIcon = features[activeFeature].icon;

        return (
                <div className="min-h-screen bg-black text-white">
                        {/* Navigation */}
                        <nav className="border-b border-gray-800 sticky top-0 z-50 bg-black/80 backdrop-blur">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                                SONATE
                                        </div>
                                        <div className="hidden md:flex items-center gap-8">
                                                <a href="#features" className="text-gray-300 hover:text-white transition">
                                                        Features
                                                </a>
                                                <a href="#status" className="text-gray-300 hover:text-white transition">
                                                        Status
                                                </a>
                                                <a href="#docs" className="text-gray-300 hover:text-white transition">
                                                        Docs
                                                </a>
                                                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                                        Get Started
                                                </Button>
                                        </div>
                                </div>
                        </nav>

                        {/* Hero Section */}
                        <section className="relative overflow-hidden py-20 sm:py-32">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                                                <div>
                                                        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                                                                <span className="text-sm text-blue-300">Constitutional AI Governance</span>
                                                        </div>
                                                        <h1 className="text-5xl sm:text-6xl font-black mb-6 leading-tight">
                                                                Policy Governance for{" "}
                                                                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                                                        Autonomous Agents
                                                                </span>
                                                        </h1>
                                                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                                                SONATE is a comprehensive platform for managing, monitoring, and enforcing policies across
                                                                autonomous agent systems. Built with constitutional AI principles for trust and safety.
                                                        </p>
                                                        <div className="flex flex-col sm:flex-row gap-4">
                                                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 gap-2">
                                                                        Launch Dashboard <ChevronRight className="w-4 h-4" />
                                                                </Button>
                                                                <Button size="lg" variant="outline" className="border-gray-600 hover:bg-gray-900">
                                                                        View Documentation
                                                                </Button>
                                                        </div>
                                                        <div className="mt-12 grid grid-cols-3 gap-8 pt-8 border-t border-gray-800">
                                                                <div>
                                                                        <div className="text-3xl font-bold text-blue-400">35%</div>
                                                                        <p className="text-sm text-gray-400">Website Parity</p>
                                                                </div>
                                                                <div>
                                                                        <div className="text-3xl font-bold text-purple-400">5/5</div>
                                                                        <p className="text-sm text-gray-400">Tier 1 Features</p>
                                                                </div>
                                                                <div>
                                                                        <div className="text-3xl font-bold text-green-400">49/49</div>
                                                                        <p className="text-sm text-gray-400">Tests Passing</p>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="relative">
                                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl blur-3xl" />
                                                        <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl border border-gray-800 p-8 backdrop-blur">
                                                                <div className="space-y-4">
                                                                        {[
                                                                                "Dashboard Live Data ✅",
                                                                                "JWT Authentication ✅",
                                                                                "Prometheus Metrics ✅",
                                                                                "Alert Thresholds ✅",
                                                                                "CSV/JSON Export ✅",
                                                                        ].map((item, i) => (
                                                                                <div key={i} className="flex items-center gap-3 text-gray-300">
                                                                                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                                                                                        {item}
                                                                                </div>
                                                                        ))}
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </section>

                        {/* Features Section */}
                        <section id="features" className="py-20 sm:py-32 border-t border-gray-800">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                        <div className="text-center mb-16">
                                                <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                                                        Comprehensive Agent Governance
                                                </h2>
                                                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                                        Everything you need to manage, monitor, and enforce policies across autonomous agent systems
                                                </p>
                                        </div>

                                        <div className="grid lg:grid-cols-2 gap-12">
                                                {/* Feature Cards */}
                                                <div className="grid grid-cols-1 gap-6">
                                                        {features.map((feature, i) => {
                                                                const Icon = feature.icon;
                                                                return (
                                                                        <button
                                                                                key={i}
                                                                                onClick={() => setActiveFeature(i)}
                                                                                className={`text-left p-6 rounded-xl border transition-all ${
                                                                                        activeFeature === i
                                                                                                ? "bg-gray-800 border-blue-500"
                                                                                                : "bg-gray-900/50 border-gray-700 hover:border-gray-600"
                                                                                }`}
                                                                        >
                                                                                <div className="flex items-start gap-4">
                                                                                        <Icon className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                                                                                        <div>
                                                                                                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                                                                                                <p className="text-gray-400 text-sm">{feature.description}</p>
                                                                                        </div>
                                                                                </div>
                                                                        </button>
                                                                );
                                                        })}
                                                </div>

                                                {/* Feature Highlight */}
                                                <div className="relative">
                                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl blur-2xl" />
                                                        <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl border border-gray-800 p-8 h-full flex flex-col justify-between">
                                                                <div>
                                                                        <div className="p-4 bg-gray-800 rounded-lg w-fit mb-6">
                                                                                <ActiveIcon className="w-8 h-8 text-blue-400" />
                                                                        </div>
                                                                        <h3 className="text-2xl font-bold mb-3">{features[activeFeature].title}</h3>
                                                                        <p className="text-gray-300 mb-6 leading-relaxed">
                                                                                {features[activeFeature].description}
                                                                        </p>
                                                                </div>
                                                                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                                                        Learn More <ChevronRight className="w-4 h-4 ml-2" />
                                                                </Button>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </section>

                        {/* Development Status Section */}
                        <section id="status" className="py-20 sm:py-32 border-t border-gray-800">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                        <div className="text-center mb-16">
                                                <h2 className="text-4xl sm:text-5xl font-bold mb-4">Development Status</h2>
                                                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                                        Track implementation progress across feature tiers
                                                </p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                                {tiers.map((tier, i) => (
                                                        <div
                                                                key={i}
                                                                className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl border border-gray-800 p-6 hover:border-gray-700 transition"
                                                        >
                                                                <div className="flex items-start justify-between mb-4">
                                                                        <h3 className="font-bold text-lg pr-2">{tier.name}</h3>
                                                                        <span
                                                                                className={`text-xs font-bold whitespace-nowrap bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}
                                                                        >
                                                                                {tier.status}
                                                                        </span>
                                                                </div>
                                                                <ul className="space-y-2">
                                                                        {tier.features.map((feature, j) => (
                                                                                <li key={j} className="text-sm text-gray-400 flex items-center gap-2">
                                                                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                                                                                        {feature}
                                                                                </li>
                                                                        ))}
                                                                </ul>
                                                        </div>
                                                ))}
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="mt-16 bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl border border-gray-800 p-8">
                                                <div className="mb-4 flex items-center justify-between">
                                                        <h3 className="font-bold text-lg">Website Feature Parity</h3>
                                                        <span className="text-2xl font-bold text-blue-400">35%</span>
                                                </div>
                                                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                                                        <div
                                                                className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all"
                                                                style={{ width: "35%" }}
                                                        />
                                                </div>
                                                <p className="text-sm text-gray-400 mt-3">
                                                        5 of 5 Tier 1 quick wins completed • Ready for Tier 2 advanced features
                                                </p>
                                        </div>
                                </div>
                        </section>

                        {/* Tech Stack Section */}
                        <section className="py-20 sm:py-32 border-t border-gray-800">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                        <h2 className="text-4xl font-bold mb-12">Built With</h2>
                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                                {[
                                                        { name: "TypeScript", status: "Strict Mode" },
                                                        { name: "React", status: "18.2+" },
                                                        { name: "Node.js", status: "Backend API" },
                                                        { name: "Socket.io", status: "Real-time" },
                                                        { name: "Prometheus", status: "Metrics" },
                                                        { name: "Vitest", status: "49/49 Tests" },
                                                        { name: "Tailwind CSS", status: "Styling" },
                                                        { name: "Docker", status: "Containerized" },
                                                        { name: "PostgreSQL", status: "Data Layer" },
                                                        { name: "JWT Auth", status: "Security" },
                                                ].map((tech, i) => (
                                                        <div
                                                                key={i}
                                                                className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl border border-gray-800 p-4 text-center hover:border-gray-700 transition"
                                                        >
                                                                <p className="font-bold">{tech.name}</p>
                                                                <p className="text-xs text-gray-400 mt-1">{tech.status}</p>
                                                        </div>
                                                ))}
                                        </div>
                                </div>
                        </section>

                        {/* CTA Section */}
                        <section className="py-20 sm:py-32 border-t border-gray-800">
                                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Get Started?</h2>
                                        <p className="text-xl text-gray-300 mb-8">
                                                Deploy SONATE and start governing your autonomous agent systems with constitutional AI principles.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 gap-2">
                                                        Deploy Now <ChevronRight className="w-4 h-4" />
                                                </Button>
                                                <Button size="lg" variant="outline" className="border-gray-600 hover:bg-gray-900">
                                                        View on GitHub
                                                </Button>
                                        </div>
                                </div>
                        </section>

                        {/* Footer */}
                        <footer className="border-t border-gray-800 bg-black py-12">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                                                <div>
                                                        <h3 className="font-bold mb-4">Product</h3>
                                                        <ul className="space-y-2 text-sm text-gray-400">
                                                                <li>
                                                                        <a href="#" className="hover:text-white transition">
                                                                                Features
                                                                        </a>
                                                                </li>
                                                                <li>
                                                                        <a href="#" className="hover:text-white transition">
                                                                                Pricing
                                                                        </a>
                                                                </li>
                                                                <li>
                                                                        <a href="#" className="hover:text-white transition">
                                                                                Documentation
                                                                        </a>
                                                                </li>
                                                        </ul>
                                                </div>
                                                <div>
                                                        <h3 className="font-bold mb-4">Community</h3>
                                                        <ul className="space-y-2 text-sm text-gray-400">
                                                                <li>
                                                                        <a href="#" className="hover:text-white transition">
                                                                                GitHub
                                                                        </a>
                                                                </li>
                                                                <li>
                                                                        <a href="#" className="hover:text-white transition">
                                                                                Discord
                                                                        </a>
                                                                </li>
                                                                <li>
                                                                        <a href="#" className="hover:text-white transition">
                                                                                Twitter
                                                                        </a>
                                                                </li>
                                                        </ul>
                                                </div>
                                                <div>
                                                        <h3 className="font-bold mb-4">Resources</h3>
                                                        <ul className="space-y-2 text-sm text-gray-400">
                                                                <li>
                                                                        <a href="#" className="hover:text-white transition">
                                                                                Blog
                                                                        </a>
                                                                </li>
                                                                <li>
                                                                        <a href="#" className="hover:text-white transition">
                                                                                API Docs
                                                                        </a>
                                                                </li>
                                                                <li>
                                                                        <a href="#" className="hover:text-white transition">
                                                                                Status
                                                                        </a>
                                                                </li>
                                                        </ul>
                                                </div>
                                                <div>
                                                        <h3 className="font-bold mb-4">Legal</h3>
                                                        <ul className="space-y-2 text-sm text-gray-400">
                                                                <li>
                                                                        <a href="#" className="hover:text-white transition">
                                                                                Privacy
                                                                        </a>
                                                                </li>
                                                                <li>
                                                                        <a href="#" className="hover:text-white transition">
                                                                                Terms
                                                                        </a>
                                                                </li>
                                                                <li>
                                                                        <a href="#" className="hover:text-white transition">
                                                                                Security
                                                                        </a>
                                                                </li>
                                                        </ul>
                                                </div>
                                        </div>
                                        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
                                                <p className="text-gray-400 text-sm">© 2026 SONATE. All rights reserved.</p>
                                                <p className="text-gray-400 text-sm mt-4 md:mt-0">
                                                        Tier 1: 5/5 Complete • Website: 35% Parity • Tests: 49/49 Passing
                                                </p>
                                        </div>
                                </div>
                        </footer>
                </div>
        );
}

export default Index;
