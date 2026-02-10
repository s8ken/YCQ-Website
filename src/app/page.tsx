"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Shield, Zap, Brain, BarChart3, Lock, GitBranch } from "lucide-react";
import { CONSOLE_URL } from "@/lib/site";

function Index() {
        const [activeFeature, setActiveFeature] = useState(0);

        const features = [
                {
                        icon: Shield,
						title: "SONATE Trust Framework",
						description:
							"A measurable trust model (6 principles → weighted scoring) that turns governance from prose into repeatable evaluation.",
                },
                {
                        icon: Brain,
						title: "Real-time Detection",
						description:
							"Production monitoring via @sonate/detect: multi-dimension scoring, alerts, and drift signals derived from the core framework.",
                },
                {
                        icon: Zap,
						title: "Cryptographic Trust Receipts",
						description:
							"Receipts designed for verifiable audit trails (SHA-256 hashing + Ed25519 signatures) and quick verification workflows.",
                },
                {
                        icon: BarChart3,
						title: "Research Validation",
						description:
							"A separate research lane via @sonate/lab for experiments and evaluation, kept distinct from production monitoring.",
                },
                {
                        icon: Lock,
						title: "Orchestration Layer",
						description:
							"Infrastructure tooling via @sonate/orchestrate: identities, access controls, and operational workflows for agent systems.",
                },
                {
                        icon: GitBranch,
						title: "Open Source Progress",
						description:
							"Progress is tracked transparently in the public TypeScript monorepo (packages + apps), and this site provides a live demo for the receipt flow.",
                },
        ];

		const tiers = [
                {
						name: "What's Live (Site)",
						status: "Available",
                        features: [
								"Trust receipt demo UI",
								"Generate + verify flow",
								"Technology overview",
								"Security + governance pages",
								"Sitemap of routes",
                        ],
                        color: "from-blue-500 to-blue-600",
                },
                {
						name: "Implemented (Repo)",
						status: "Active",
                        features: [
								"@sonate/core trust scoring",
								"Receipt hashing + signing primitives",
								"@sonate/detect monitoring",
								"@sonate/lab evaluation harness",
								"@sonate/orchestrate scaffolding",
                        ],
                        color: "from-purple-500 to-purple-600",
                },
                {
						name: "In Progress",
						status: "Iterating",
                        features: [
								"Tightening demo-to-repo parity",
								"Hardening API surface",
								"Documentation surfacing",
								"Operational dashboards",
								"Enterprise integration paths",
                        ],
                        color: "from-green-500 to-green-600",
                },
                {
						name: "Roadmap",
						status: "Planned",
                        features: [
								"Richer verification UX",
								"Wider provider integrations",
								"Formal docs + specs",
								"Multi-tenant deployment",
								"Compliance tooling",
                        ],
                        color: "from-orange-500 to-orange-600",
                },
        ];

        const ActiveIcon = features[activeFeature].icon;

        return (
                <div className="bg-white">
                        {/* Hero Section */}
                        <section className="relative overflow-hidden py-20 sm:py-32">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50" />
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                                                <div>
                                                        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                                                                <span className="text-sm text-blue-700">Constitutional AI Governance</span>
                                                        </div>
										<h1 className="text-5xl sm:text-6xl font-black mb-6 leading-tight text-stone-900">
												Enterprise AI You Can{" "}
                                                                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
														Trust
                                                                </span>
                                                        </h1>
                                                        <p className="text-xl text-stone-600 mb-8 leading-relaxed">
												SONATE (Yseeku Platform) is an open TypeScript monorepo for constitutional AI governance: trust scoring,
												cryptographic receipts, production detection, and orchestration scaffolding.
                                                        </p>
                                                        <div className="flex flex-col sm:flex-row gap-4">
												<Link
													href="/trust-demo"
													className="inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none px-6 py-3 text-lg bg-blue-600 text-white hover:bg-blue-700 gap-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
												>
													Try Trust Demo <ChevronRight className="w-4 h-4" />
												</Link>
												<Link
													href="/technology"
													className="inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none px-6 py-3 text-lg border border-stone-300 text-stone-700 hover:bg-stone-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stone-500"
												>
													View Technical Overview
												</Link>
                                                        </div>
                                                        <div className="mt-12 grid grid-cols-3 gap-8 pt-8 border-t border-stone-200">
                                                                <div>
														<div className="text-3xl font-bold text-blue-600">4</div>
														<p className="text-sm text-stone-500">Core Packages</p>
                                                                </div>
                                                                <div>
														<div className="text-3xl font-bold text-purple-600">OSS</div>
														<p className="text-sm text-stone-500">Public Repo</p>
                                                                </div>
                                                                <div>
														<div className="text-3xl font-bold text-green-600">Live</div>
														<p className="text-sm text-stone-500">Demo Flow</p>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="relative">
                                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl blur-3xl" />
                                                        <div className="relative bg-white rounded-2xl border border-stone-200 p-8 shadow-xl">
                                                                <div className="space-y-4">
													{[
															"Trust receipt demo: generate + verify",
															"Technical overview aligned to repo modules",
															"Public progress tracked on GitHub",
															"Link to live platform console",
													].map((item, i) => (
                                                                                <div key={i} className="flex items-center gap-3 text-stone-700">
                                                                                        <div className="w-2 h-2 bg-green-500 rounded-full" />
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
                        <section id="features" className="py-20 sm:py-32 bg-stone-50 border-t border-stone-200">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                        <div className="text-center mb-16">
                                                <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-stone-900">
                                                        Comprehensive Agent Governance
                                                </h2>
                                                <p className="text-xl text-stone-600 max-w-2xl mx-auto">
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
                                                                                                ? "bg-white border-blue-500 shadow-md"
                                                                                                : "bg-white border-stone-200 hover:border-blue-300"
                                                                                }`}
                                                                        >
                                                                                <div className="flex items-start gap-4">
                                                                                        <Icon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                                                                        <div>
                                                                                                <h3 className="font-bold text-lg mb-2 text-stone-900">{feature.title}</h3>
                                                                                                <p className="text-stone-600 text-sm">{feature.description}</p>
                                                                                        </div>
                                                                                </div>
                                                                        </button>
                                                                );
                                                        })}
                                                </div>

                                                {/* Feature Highlight */}
                                                <div className="relative">
                                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl blur-2xl" />
                                                        <div className="relative bg-white rounded-2xl border border-stone-200 p-8 h-full flex flex-col justify-between shadow-lg">
                                                                <div>
                                                                        <div className="p-4 bg-blue-50 rounded-lg w-fit mb-6">
                                                                                <ActiveIcon className="w-8 h-8 text-blue-600" />
                                                                        </div>
                                                                        <h3 className="text-2xl font-bold mb-3 text-stone-900">{features[activeFeature].title}</h3>
                                                                        <p className="text-stone-600 mb-6 leading-relaxed">
                                                                                {features[activeFeature].description}
                                                                        </p>
                                                                </div>
													<Link
														href="/technology"
														className="w-full inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none px-4 py-2 text-base bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
													>
													Read the Technical Overview <ChevronRight className="w-4 h-4 ml-2" />
												</Link>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </section>

                        {/* Development Status Section */}
                        <section id="status" className="py-20 sm:py-32 border-t border-stone-200">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                        <div className="text-center mb-16">
												<h2 className="text-4xl sm:text-5xl font-bold mb-4 text-stone-900">Project Status</h2>
													<p className="text-xl text-stone-600 max-w-2xl mx-auto">
															An honest snapshot of what&apos;s live on this site vs what&apos;s implemented in the repo
													</p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                                {tiers.map((tier, i) => (
                                                        <div
                                                                key={i}
                                                                className="bg-white rounded-xl border border-stone-200 p-6 hover:border-stone-300 hover:shadow-md transition"
                                                        >
                                                                <div className="flex items-start justify-between mb-4">
                                                                        <h3 className="font-bold text-lg pr-2 text-stone-900">{tier.name}</h3>
                                                                        <span
                                                                                className={`text-xs font-bold whitespace-nowrap bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}
                                                                        >
                                                                                {tier.status}
                                                                        </span>
                                                                </div>
                                                                <ul className="space-y-2">
                                                                        {tier.features.map((feature, j) => (
                                                                                <li key={j} className="text-sm text-stone-600 flex items-center gap-2">
                                                                                        <div className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                                                                                        {feature}
                                                                                </li>
                                                                        ))}
                                                                </ul>
                                                        </div>
                                                ))}
                                        </div>

												<div className="mt-16 bg-stone-50 rounded-xl border border-stone-200 p-8">
														<div className="mb-4 flex items-center justify-between">
																<h3 className="font-bold text-lg text-stone-900">Quick Links</h3>
																<span className="text-2xl font-bold text-blue-600">Now</span>
														</div>
														<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
																<Link
																	href="/trust-demo"
																	className="bg-white border border-stone-200 rounded-lg px-4 py-3 hover:border-stone-300 hover:shadow-sm transition"
																>
																	<p className="font-bold text-stone-900">Try the Demo</p>
																	<p className="text-xs text-stone-500 mt-1">Trust ledger + receipt verification</p>
																</Link>
																<Link
																	href="/technology"
																	className="bg-white border border-stone-200 rounded-lg px-4 py-3 hover:border-stone-300 hover:shadow-sm transition"
																>
																	<p className="font-bold text-stone-900">Technology</p>
																	<p className="text-xs text-stone-500 mt-1">Architecture + technical details</p>
																</Link>
																<Link
																	href="/sitemap"
																	className="bg-white border border-stone-200 rounded-lg px-4 py-3 hover:border-stone-300 hover:shadow-sm transition"
																>
																	<p className="font-bold text-stone-900">Sitemap</p>
																	<p className="text-xs text-stone-500 mt-1">All pages + API routes</p>
																</Link>
																<a
																	href="https://github.com/s8ken/yseeku-platform"
																	target="_blank"
																	rel="noopener noreferrer"
																	className="bg-white border border-stone-200 rounded-lg px-4 py-3 hover:border-stone-300 hover:shadow-sm transition"
																>
																	<p className="font-bold text-stone-900">GitHub Repo</p>
																	<p className="text-xs text-stone-500 mt-1">Track real progress + code</p>
																</a>
														</div>
												</div>
                                </div>
                        </section>

                        {/* Tech Stack Section */}
                        <section className="py-20 sm:py-32 border-t border-stone-200 bg-stone-50">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                        <h2 className="text-4xl font-bold mb-12 text-stone-900">Built With</h2>
                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                                {[
															{ name: "TypeScript", status: "Monorepo" },
															{ name: "React", status: "Dashboard UI" },
															{ name: "Express", status: "Backend API" },
															{ name: "SHA-256", status: "Content hashing" },
															{ name: "Ed25519", status: "Receipt signing" },
															{ name: "W3C DID/VC", status: "Identity model" },
                                                        { name: "Tailwind CSS", status: "Styling" },
															{ name: "Docker", status: "Deployment" },
															{ name: "Redis", status: "Rate limiting" },
															{ name: "Kubernetes", status: "Scale targets" },
                                                ].map((tech, i) => (
                                                        <div
                                                                key={i}
                                                                className="bg-white rounded-xl border border-stone-200 p-4 text-center hover:border-stone-300 hover:shadow-sm transition"
                                                        >
                                                                <p className="font-bold text-stone-900">{tech.name}</p>
                                                                <p className="text-xs text-stone-500 mt-1">{tech.status}</p>
                                                        </div>
                                                ))}
                                        </div>
                                </div>
                        </section>

                        {/* CTA Section */}
                        <section className="py-20 sm:py-32 border-t border-stone-200">
                                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
										<h2 className="text-4xl sm:text-5xl font-bold mb-6 text-stone-900">See What&apos;s Built Today</h2>
										<p className="text-xl text-stone-600 mb-8">
												Use the demo to understand the trust receipt flow, then follow the repo to track what&apos;s implemented and what&apos;s next.
										</p>
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
												<a
													href={CONSOLE_URL}
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none px-6 py-3 text-lg bg-blue-600 text-white hover:bg-blue-700 gap-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
												>
													Open Platform Console <ChevronRight className="w-4 h-4" />
												</a>
												<a
													href="https://github.com/s8ken/yseeku-platform"
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none px-6 py-3 text-lg border border-stone-300 text-stone-700 hover:bg-stone-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stone-500"
												>
													View on GitHub
												</a>
                                        </div>
                                </div>
                        </section>
                </div>
        );
}

export default Index;
