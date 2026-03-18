"use client";

import Image from "next/image";
import Link from "next/link";

import {
	ArrowRight,
	Clock,
	Code2,
	Database,
	ExternalLink,
	FileText,
	Github,
	Hash,
	Layers,
	Lock,
	Radio,
	Send,
	Server,
	Users,
	Zap,
} from "lucide-react";
import { NavBar } from "../shared/components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { TerminalSection } from "./components/TerminalSection";
import { SystemsSection } from "./components/SyatemsSection";
import { FeaturedProjectsSection } from "./components/FeaturedProjectSection";
import { LogsSection } from "./components/LogsSection";

const monoStyle = {
	fontFamily:
		"var(--font-geist-mono, ui-monospace), SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
};

export function HomePageContent() {
	return (
		<div className="min-h-screen bg-black text-white">
			<NavBar />
			<main className="pt-16">
				<HeroSection />
				<TerminalSection />
				<SystemsSection />
				<FeaturedProjectsSection />
				<LogsSection />
				<DispatchSection />
			</main>
			<FooterSection />
		</div>
	);
}

function DispatchSection() {
	return (
		<section id="dispatch" className="relative overflow-hidden px-6 py-32 lg:px-8">
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:64px_64px] opacity-50" />
			<div className="absolute left-1/4 top-1/2 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
			<div className="absolute right-1/4 bottom-1/2 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

			<div className="relative mx-auto max-w-7xl">
				<div className="mb-12 max-w-3xl">
					<div className="mb-4 flex items-center gap-3">
						<div className="h-8 w-1 bg-gradient-to-b from-cyan-500 to-violet-500" />
						<div>
							<div className="mb-1 flex items-center gap-2">
								<Radio className="h-4 w-4 animate-pulse text-violet-400" />
								<span
									className="text-xs uppercase tracking-wider text-violet-400"
									style={monoStyle}
								>
									Dispatch Terminal
								</span>
							</div>
							<h2 className="text-3xl text-white lg:text-5xl">Subscribe to Updates</h2>
						</div>
					</div>
					<p className="border-l-2 border-gray-800 pl-4 text-lg text-gray-500">
						Receive encrypted transmissions on engineering deep dives, system launches, and
						technical insights directly to your inbox.
					</p>
				</div>

				<div className="grid gap-8 lg:grid-cols-12">
					<div className="lg:col-span-7">
						<div className="overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-black via-gray-950 to-black shadow-2xl">
							<div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-cyan-950/30 to-violet-950/30 px-6 py-3">
								<div className="flex items-center gap-3">
									<div className="flex gap-1.5">
										<div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
										<div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
										<div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
									</div>
									<span className="text-xs text-gray-500" style={monoStyle}>
										dispatch://subscribe
									</span>
								</div>
								<div className="flex items-center gap-2">
									<Lock className="h-3 w-3 text-green-400" />
									<span className="text-xs text-green-400" style={monoStyle}>
										SECURE
									</span>
								</div>
							</div>

							<div className="p-8" style={monoStyle}>
								<div className="mb-6">
									<div className="mb-4 flex items-center gap-2 text-cyan-400">
										<span className="text-gray-600">dispatch@workflow-world</span>
										<span className="text-gray-700">~</span>
										<span className="text-violet-400">$</span>
										<span className="text-cyan-400">./subscribe-operator</span>
									</div>
									<p className="mb-6 border-l-2 border-cyan-500/30 pl-4 text-sm text-gray-500">
										Join 3,247 builders receiving monthly technical dispatches.
									</p>
								</div>

								<form className="space-y-5">
									<div>
										<label className="mb-2 block text-xs text-gray-600">→ OPERATOR_NAME:</label>
										<input
											type="text"
											placeholder="Enter your name"
											className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-700 transition-all focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
										/>
									</div>

									<div>
										<label className="mb-2 block text-xs text-gray-600">→ EMAIL_ADDRESS:</label>
										<input
											type="email"
											placeholder="operator@domain.com"
											className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-700 transition-all focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
										/>
									</div>

									<div>
										<label className="mb-2 block text-xs text-gray-600">→ INTEREST_AREA:</label>
										<select className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-all focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20">
											<option value="" className="bg-gray-950">
												Select primary focus
											</option>
											<option value="architecture" className="bg-gray-950">
												System Architecture
											</option>
											<option value="frontend" className="bg-gray-950">
												Frontend Engineering
											</option>
											<option value="backend" className="bg-gray-950">
												Backend Development
											</option>
											<option value="devops" className="bg-gray-950">
												DevOps & Infrastructure
											</option>
											<option value="fullstack" className="bg-gray-950">
												Full-Stack
											</option>
										</select>
									</div>

									<button
										type="submit"
										className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-4 transition-all hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]"
									>
										<span className="relative flex items-center justify-center gap-2 text-sm text-white">
											<Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
											Initialize Subscription
										</span>
									</button>
								</form>

								<div className="mt-6 border-t border-white/10 pt-6">
									<p className="text-xs text-gray-600">
										<span className="text-gray-700">{"//"}</span> No spam. Unsubscribe anytime.
										Privacy-first communication.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="space-y-6 lg:col-span-5">
						<div className="rounded-xl border border-white/10 bg-gradient-to-br from-gray-950/50 to-black/50 p-6">
							<div className="mb-6 flex items-center gap-3">
								<div className="rounded-lg border border-violet-500/20 bg-violet-500/10 p-2">
									<Radio className="h-5 w-5 text-violet-400" />
								</div>
								<h3 className="text-lg text-white" style={monoStyle}>
									Transmission Details
								</h3>
							</div>

							<div className="space-y-4">
								{[
									{
										label: "Frequency",
										value: "Monthly",
										detail: "First week of each month",
									},
									{
										label: "Content Type",
										value: "Technical",
										detail: "Deep dives & tutorials",
									},
									{
										label: "Avg. Read Time",
										value: "8-12 min",
										detail: "Focused content",
									},
									{ label: "Format", value: "Markdown", detail: "Code-friendly" },
								].map((item) => (
									<div
										key={item.label}
										className="flex items-start justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0"
									>
										<div>
											<div className="mb-1 text-xs text-gray-600" style={monoStyle}>
												{item.label}
											</div>
											<div className="text-sm text-white" style={monoStyle}>
												{item.value}
											</div>
										</div>
										<div className="text-xs text-gray-500">{item.detail}</div>
									</div>
								))}
							</div>
						</div>

						<div className="rounded-xl border border-white/10 bg-gradient-to-br from-gray-950/50 to-black/50 p-6">
							<div className="mb-6 flex items-center gap-3">
								<div className="rounded-lg border border-cyan-500/20 bg-cyan-500/10 p-2">
									<Users className="h-5 w-5 text-cyan-400" />
								</div>
								<h3 className="text-lg text-white" style={monoStyle}>
									Network Stats
								</h3>
							</div>

							<div className="grid grid-cols-2 gap-4">
								{[
									{ label: "Subscribers", value: "3,247" },
									{ label: "Open Rate", value: "94.2%" },
									{ label: "Avg. Session", value: "8m 47s" },
									{ label: "Engagement", value: "High" },
								].map((stat) => (
									<div
										key={stat.label}
										className="rounded-lg border border-white/10 bg-white/5 p-4 text-center"
									>
										<div className="mb-1 text-2xl text-white" style={monoStyle}>
											{stat.value}
										</div>
										<div className="text-xs uppercase tracking-wider text-gray-600">
											{stat.label}
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="rounded-xl border border-white/10 bg-gradient-to-br from-gray-950/50 to-black/50 p-6">
							<h3 className="mb-4 text-sm text-gray-400" style={monoStyle}>
								Recent Dispatch Topics:
							</h3>
							<div className="space-y-2 text-sm">
								{[
									"Event-driven architecture patterns",
									"Kubernetes autoscaling strategies",
									"Zero-trust security implementation",
									"Observability at scale",
								].map((topic) => (
									<div
										key={topic}
										className="flex items-start gap-2 text-gray-500"
										style={monoStyle}
									>
										<span className="shrink-0 text-cyan-400">→</span>
										<span>{topic}</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function FooterSection() {
	return (
		<footer className="border-t border-white/10 bg-black/60 px-6 py-10 lg:px-8">
			<div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-sm text-gray-500">
				<p>© 2026 Workflow World × Builder Lab</p>
				<div className="inline-flex items-center gap-2 text-green-400">
					<Layers className="h-4 w-4" />
					All Systems Operational
				</div>
			</div>
		</footer>
	);
}
