"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
	ArrowLeft,
	Database,
	FileText,
	Layers,
	Radio,
	Terminal,
} from "lucide-react";
import { ArchiveFilterBar } from "@/app/components/layout/archive-filter-bar";

const monoStyle = {
	fontFamily:
		"var(--font-geist-mono, ui-monospace), SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
};

type FilterState = {
	status: "all" | "production" | "staging" | "active" | "planned";
	stack: "all" | "react" | "nextjs" | "typescript" | "python" | "go" | "ai";
	search: string;
	sort: "recent" | "impact" | "complexity" | "featured";
};

type SystemEntry = {
	id: string;
	codename: string;
	title: string;
	status: "production" | "staging" | "active" | "planned";
	objective: string;
	image: string;
	stack: string[];
	deployment: {
		version: string;
		replicas: number;
		env: "production" | "staging" | "development";
	};
	date: string;
	featured?: boolean;
	outcome?: string;
};

const systems: SystemEntry[] = [
	{
		id: "SYS-001",
		codename: "neural-commerce",
		title: "Neural Commerce Engine",
		status: "production",
		objective:
			"AI-powered e-commerce platform with real-time inventory prediction and personalized customer journeys at scale.",
		image:
			"https://images.unsplash.com/photo-1720962158883-b0f2021fb51e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzMwMjUyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
		stack: ["Next.js", "TensorFlow", "PostgreSQL", "Redis", "Stripe"],
		outcome: "47K+ active users, 99.98% uptime, 2.4M daily requests",
		deployment: { version: "v1.8.2", replicas: 3, env: "production" },
		date: "2025-11",
		featured: true,
	},
	{
		id: "SYS-002",
		codename: "quantum-orchestrator",
		title: "Quantum Task Orchestrator",
		status: "staging",
		objective:
			"Distributed task management with priority queuing and intelligent resource allocation.",
		image:
			"https://images.unsplash.com/photo-1643398899826-2fca1e015fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY3liZXJwdW5rJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MzExMTA1NXww&ixlib=rb-4.1.0&q=80&w=1080",
		stack: ["Go", "Kubernetes", "RabbitMQ", "Grafana"],
		deployment: { version: "v2.1.0-rc3", replicas: 2, env: "staging" },
		date: "2026-02",
	},
	{
		id: "SYS-003",
		codename: "cascade-analytics",
		title: "Cascade Analytics Hub",
		status: "production",
		objective: "Real-time data pipeline with visualization dashboards and anomaly detection.",
		image:
			"https://images.unsplash.com/photo-1765046255479-669cf07a0230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhdGElMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc3MzA0MjYzMHww&ixlib=rb-4.1.0&q=80&w=1080",
		stack: ["Python", "Apache Kafka", "D3.js", "TimescaleDB"],
		deployment: { version: "v3.4.1", replicas: 4, env: "production" },
		date: "2025-09",
	},
	{
		id: "SYS-004",
		codename: "nexus-design-sys",
		title: "Nexus Design System",
		status: "production",
		objective: "Component library for building consistent, accessible interfaces across platforms.",
		image:
			"https://images.unsplash.com/photo-1642287040066-2bd340523289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBuaWdodHxlbnwxfHx8fDE3NzMwMzMxODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
		stack: ["React", "TypeScript", "Storybook", "Tailwind"],
		deployment: { version: "v1.2.8", replicas: 2, env: "production" },
		date: "2025-07",
	},
	{
		id: "SYS-005",
		codename: "sentinel-auth",
		title: "Sentinel Auth Service",
		status: "active",
		objective:
			"Zero-trust authentication service with multi-factor support and session management.",
		image:
			"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5fGVufDF8fHx8MTc3MzA0MjYzMHww&ixlib=rb-4.1.0&q=80&w=1080",
		stack: ["Node.js", "Redis", "JWT", "WebAuthn"],
		deployment: { version: "v2.0.3", replicas: 3, env: "production" },
		date: "2026-01",
	},
	{
		id: "SYS-006",
		codename: "atlas-deployment",
		title: "Atlas Deployment Pipeline",
		status: "production",
		objective: "Automated CI/CD pipeline with blue-green deployments and rollback capabilities.",
		image:
			"https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZvcHMlMjBwaXBlbGluZXxlbnwxfHx8fDE3NzMwNDI2MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
		stack: ["GitHub Actions", "Docker", "Kubernetes", "ArgoCD"],
		deployment: { version: "v4.1.0", replicas: 1, env: "production" },
		date: "2025-10",
	},
	{
		id: "SYS-007",
		codename: "prism-api",
		title: "Prism GraphQL Gateway",
		status: "production",
		objective: "Unified GraphQL API gateway with intelligent caching and rate limiting.",
		image:
			"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaHFsJTIwYXBpfGVufDF8fHx8MTc3MzA0MjYzMHww&ixlib=rb-4.1.0&q=80&w=1080",
		stack: ["GraphQL", "Apollo", "Node.js", "Redis"],
		deployment: { version: "v3.2.1", replicas: 4, env: "production" },
		date: "2025-08",
	},
	{
		id: "SYS-008",
		codename: "orbit-mobile",
		title: "Orbit Mobile App",
		status: "planned",
		objective: "Cross-platform mobile application with offline-first architecture.",
		image:
			"https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzczMDQyNjMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
		stack: ["React Native", "TypeScript", "Expo", "SQLite"],
		deployment: { version: "v0.1.0-alpha", replicas: 0, env: "development" },
		date: "2026-04",
	},
];

const statusClasses = {
	production: "border-green-500/30 bg-green-500/10 text-green-400",
	staging: "border-yellow-500/30 bg-yellow-500/10 text-yellow-400",
	active: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
	planned: "border-gray-500/30 bg-gray-500/10 text-gray-400",
} as const;

const envDistribution = [
	{
		env: "Production",
		count: 32,
		percentage: 68,
		dotClass: "bg-green-400",
		barClass: "bg-green-400/50",
	},
	{
		env: "Staging",
		count: 8,
		percentage: 17,
		dotClass: "bg-yellow-400",
		barClass: "bg-yellow-400/50",
	},
	{
		env: "Development",
		count: 5,
		percentage: 11,
		dotClass: "bg-cyan-400",
		barClass: "bg-cyan-400/50",
	},
	{
		env: "Planned",
		count: 2,
		percentage: 4,
		dotClass: "bg-gray-400",
		barClass: "bg-gray-400/50",
	},
] as const;

const quickStats = [
	{
		label: "Total Systems",
		value: "47",
		sublabel: "registered",
		cardClass: "border-cyan-500/20 bg-cyan-500/5",
	},
	{
		label: "In Production",
		value: "32",
		sublabel: "deployed",
		cardClass: "border-green-500/20 bg-green-500/5",
	},
	{
		label: "Active Missions",
		value: "8",
		sublabel: "in progress",
		cardClass: "border-violet-500/20 bg-violet-500/5",
	},
] as const;

const statusOptions = [
	{ value: "all", label: "All Status" },
	{ value: "production", label: "Production" },
	{ value: "staging", label: "Staging" },
	{ value: "active", label: "Active Dev" },
	{ value: "planned", label: "Planned" },
] as const;

const stackOptions = [
	{ value: "all", label: "All Stacks" },
	{ value: "react", label: "React" },
	{ value: "nextjs", label: "Next.js" },
	{ value: "typescript", label: "TypeScript" },
	{ value: "python", label: "Python" },
	{ value: "go", label: "Go" },
	{ value: "ai", label: "AI/ML" },
] as const;

function matchesStackFilter(system: SystemEntry, stackFilter: FilterState["stack"]) {
	if (stackFilter === "all") {
		return true;
	}

	const normalizedStack = system.stack.map((item) => item.toLowerCase());

	if (stackFilter === "react") {
		return normalizedStack.some((item) => item.includes("react"));
	}

	if (stackFilter === "nextjs") {
		return normalizedStack.some((item) => item.includes("next.js"));
	}

	if (stackFilter === "typescript") {
		return normalizedStack.some((item) => item.includes("typescript"));
	}

	if (stackFilter === "python") {
		return normalizedStack.some((item) => item.includes("python"));
	}

	if (stackFilter === "go") {
		return normalizedStack.some((item) => item === "go");
	}

	return normalizedStack.some(
		(item) => item.includes("tensorflow") || item.includes("ai") || item.includes("ml"),
	);
}

function getComplexityScore(system: SystemEntry) {
	return system.stack.length + system.deployment.replicas;
}

function getImpactScore(system: SystemEntry) {
	if (system.featured) {
		return 100;
	}
	if (system.status === "production") {
		return 80;
	}
	if (system.status === "active") {
		return 60;
	}
	if (system.status === "staging") {
		return 40;
	}
	return 20;
}

export default function SystemsPage() {
	const [activeFilters, setActiveFilters] = useState<FilterState>({
		status: "all",
		stack: "all",
		search: "",
		sort: "recent",
	});

	const filteredSystems = systems
		.filter((system) => {
			if (activeFilters.status !== "all" && system.status !== activeFilters.status) {
				return false;
			}

			if (!matchesStackFilter(system, activeFilters.stack)) {
				return false;
			}

			const search = activeFilters.search.trim().toLowerCase();
			if (!search) {
				return true;
			}

			return [system.title, system.codename, system.objective, ...system.stack]
				.join(" ")
				.toLowerCase()
				.includes(search);
		})
		.sort((a, b) => {
			if (activeFilters.sort === "featured") {
				return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
			}
			if (activeFilters.sort === "impact") {
				return getImpactScore(b) - getImpactScore(a);
			}
			if (activeFilters.sort === "complexity") {
				return getComplexityScore(b) - getComplexityScore(a);
			}
			return b.date.localeCompare(a.date);
		});

	const featuredSystem = filteredSystems.find((system) => system.featured);
	const regularSystems = filteredSystems.filter((system) => !system.featured);

	return (
		<div className="min-h-screen bg-black text-white">
			<div className="fixed inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:80px_80px] opacity-50" />

			<div className="relative">
				<nav className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
					<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
						<Link
							href="/"
							className="inline-flex items-center gap-2 text-cyan-400 transition-colors hover:text-sky-300"
							style={monoStyle}
						>
							<ArrowLeft className="h-4 w-4" />
							<span className="text-sm">Back to Lab</span>
						</Link>
						<div className="flex items-center gap-2">
							<div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
							<span className="text-xs text-gray-500" style={monoStyle}>
								ALL SYSTEMS OPERATIONAL
							</span>
						</div>
					</div>
				</nav>

				<section className="relative overflow-hidden px-6 py-24 lg:px-8">
					<svg
						className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<line
							x1="0"
							y1="30%"
							x2="100%"
							y2="30%"
							stroke="rgb(6,182,212)"
							strokeWidth="1"
							strokeDasharray="4 4"
						/>
						<line
							x1="50%"
							y1="0"
							x2="50%"
							y2="100%"
							stroke="rgb(139,92,246)"
							strokeWidth="1"
							strokeDasharray="4 4"
						/>
					</svg>

					<div className="mx-auto max-w-7xl">
						<div className="grid items-start gap-12 lg:grid-cols-12">
							<div className="lg:col-span-7">
								<div className="mb-8">
									<div className="mb-6 flex items-center gap-3">
										<div className="h-12 w-1 bg-gradient-to-b from-cyan-500 to-violet-500" />
										<div>
											<div className="mb-2 flex items-center gap-2">
												<Database className="h-5 w-5 text-cyan-400" />
												<span
													className="text-xs uppercase tracking-wider text-cyan-400"
													style={monoStyle}
												>
													System Registry • Deployment Index
												</span>
											</div>
											<h1 className="text-5xl text-white lg:text-7xl">Systems Built</h1>
										</div>
									</div>

									<p className="mb-6 max-w-2xl border-l-2 border-gray-800 pl-6 text-lg leading-relaxed text-gray-400">
										A comprehensive archive of production systems, experimental platforms, and
										operational tooling. Each entry represents shipped code, real-world deployments,
										and engineering challenges solved in the field.
									</p>

									<div
										className="flex flex-wrap items-center gap-3 text-xs text-gray-600"
										style={monoStyle}
									>
										<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
											LAST_UPDATED: 2026-03-11
										</span>
										<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
											TOTAL_ENTRIES: 47
										</span>
									</div>
								</div>

								<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
									{quickStats.map((stat) => (
										<div key={stat.label} className={`rounded-lg border p-4 ${stat.cardClass}`}>
											<div className="mb-1 text-3xl text-white" style={monoStyle}>
												{stat.value}
											</div>
											<div className="mb-0.5 text-xs uppercase tracking-wider text-gray-500">
												{stat.label}
											</div>
											<div className="text-xs text-gray-700">{stat.sublabel}</div>
										</div>
									))}
								</div>
							</div>

							<div className="lg:col-span-5">
								<div className="relative overflow-hidden rounded-xl border border-cyan-500/20 bg-gradient-to-br from-black via-gray-950 to-black shadow-2xl">
									<div className="border-b border-white/10 bg-gradient-to-r from-cyan-950/30 to-violet-950/30 px-6 py-3">
										<div className="flex items-center justify-between">
											<div className="flex items-center gap-2">
												<Layers className="h-4 w-4 text-violet-400" />
												<span className="text-sm text-violet-400" style={monoStyle}>
													Deployment Registry
												</span>
											</div>
											<div className="flex items-center gap-2">
												<div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
												<span className="text-xs text-green-400" style={monoStyle}>
													LIVE
												</span>
											</div>
										</div>
									</div>

									<div className="p-6">
										<div className="mb-6">
											<div
												className="mb-4 text-xs uppercase tracking-wider text-gray-600"
												style={monoStyle}
											>
												→ Environment Distribution
											</div>
											<div className="space-y-3">
												{envDistribution.map((item) => (
													<div key={item.env}>
														<div className="mb-2 flex items-center justify-between">
															<div className="flex items-center gap-3">
																<div className={`h-2 w-2 rounded-full ${item.dotClass}`} />
																<span className="text-sm text-gray-400" style={monoStyle}>
																	{item.env}
																</span>
															</div>
															<div className="flex items-center gap-3">
																<span className="text-sm text-white" style={monoStyle}>
																	{item.count}
																</span>
																<span
																	className="w-12 text-right text-xs text-gray-600"
																	style={monoStyle}
																>
																	{item.percentage}%
																</span>
															</div>
														</div>
														<div className="h-1.5 overflow-hidden rounded-full bg-white/5">
															<div
																className={`h-full rounded-full ${item.barClass}`}
																style={{ width: `${item.percentage}%` }}
															/>
														</div>
													</div>
												))}
											</div>
										</div>

										<div className="border-t border-white/10 pt-6">
											<div
												className="mb-4 text-xs uppercase tracking-wider text-gray-600"
												style={monoStyle}
											>
												→ System Health Metrics
											</div>
											<div className="grid grid-cols-2 gap-4">
												<div className="rounded-lg border border-white/10 bg-white/5 p-3">
													<div className="mb-1 text-xs text-gray-600" style={monoStyle}>
														UPTIME_AVG
													</div>
													<div className="text-xl text-green-400" style={monoStyle}>
														99.94%
													</div>
													<div className="mt-1 text-xs text-gray-700">last 90 days</div>
												</div>
												<div className="rounded-lg border border-white/10 bg-white/5 p-3">
													<div className="mb-1 text-xs text-gray-600" style={monoStyle}>
														DEPLOY_TIME
													</div>
													<div className="text-xl text-cyan-400" style={monoStyle}>
														18min
													</div>
													<div className="mt-1 text-xs text-gray-700">average</div>
												</div>
											</div>
										</div>

										<div className="mt-6 border-t border-white/10 pt-6">
											<div
												className="mb-3 text-xs uppercase tracking-wider text-gray-600"
												style={monoStyle}
											>
												→ Latest Registry Updates
											</div>
											<div className="space-y-2 text-xs text-gray-700" style={monoStyle}>
												<div className="flex items-start gap-2">
													<span className="shrink-0 text-green-400">●</span>
													<span>neural-commerce v1.8.2 deployed to production</span>
												</div>
												<div className="flex items-start gap-2">
													<span className="shrink-0 text-yellow-400">●</span>
													<span>quantum-orchestrator promoted to staging</span>
												</div>
												<div className="flex items-start gap-2">
													<span className="shrink-0 text-cyan-400">●</span>
													<span>sentinel-auth system registered</span>
												</div>
											</div>
										</div>
									</div>

									<svg
										className="pointer-events-none absolute inset-0 h-full w-full opacity-10"
										xmlns="http://www.w3.org/2000/svg"
									>
										<line
											x1="0"
											y1="50%"
											x2="100%"
											y2="50%"
											stroke="rgb(6,182,212)"
											strokeWidth="1"
										/>
										<circle cx="10%" cy="50%" r="3" fill="rgb(6,182,212)" />
										<circle cx="90%" cy="50%" r="3" fill="rgb(139,92,246)" />
									</svg>
								</div>
							</div>
						</div>
					</div>
				</section>

				<div className="sticky top-[72px] z-40 border-y border-white/10 bg-black/80 backdrop-blur-xl">
					<div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
						<ArchiveFilterBar
							searchValue={activeFilters.search}
							onSearchChange={(value) =>
								setActiveFilters((prev) => ({ ...prev, search: value }))
							}
							searchPlaceholder="Search by name, stack, or keyword..."
							filterGroups={[
								{
									label: "STATUS_FILTER:",
									value: activeFilters.status,
									onChange: (value) =>
										setActiveFilters((prev) => ({
											...prev,
											status: value as FilterState["status"],
										})),
									options: statusOptions,
									accent: "cyan",
								},
								{
									label: "STACK_FILTER:",
									value: activeFilters.stack,
									onChange: (value) =>
										setActiveFilters((prev) => ({
											...prev,
											stack: value as FilterState["stack"],
										})),
									options: stackOptions,
									accent: "violet",
								},
							]}
							sortConfig={{
								label: "SORT_BY:",
								value: activeFilters.sort,
								onChange: (value) =>
									setActiveFilters((prev) => ({
										...prev,
										sort: value as FilterState["sort"],
									})),
								options: [
									{ value: "recent", label: "Recent" },
									{ value: "impact", label: "Impact" },
									{ value: "complexity", label: "Complexity" },
									{ value: "featured", label: "Featured" },
								],
							}}
						/>
					</div>
				</div>

				{featuredSystem && (
					<section className="px-6 py-16 lg:px-8">
						<div className="mx-auto max-w-7xl">
							<div className="mb-8">
								<h2 className="mb-2 text-2xl text-white" style={monoStyle}>
									Featured System
								</h2>
								<p className="text-sm text-gray-500" style={monoStyle}>
									Highlighted deployment from the current registry view
								</p>
							</div>
							<div className="overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-gray-950/80 to-black/80">
								<div className="grid gap-0 lg:grid-cols-12">
									<div className="relative min-h-[320px] lg:col-span-5">
										<Image
											src={featuredSystem.image}
											alt={featuredSystem.title}
											fill
											sizes="(min-width: 1024px) 40vw, 100vw"
											className="object-cover"
										/>
										<div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
										<div className="absolute left-6 top-6">
											<span
												className={`rounded-full border px-3 py-1 text-xs uppercase ${statusClasses[featuredSystem.status]}`}
												style={monoStyle}
											>
												{featuredSystem.status}
											</span>
										</div>
									</div>
									<div className="lg:col-span-7 p-8">
										<div className="mb-6 flex items-start justify-between gap-6">
											<div>
												<p className="mb-2 text-xs text-gray-600" style={monoStyle}>
													{featuredSystem.id} • {featuredSystem.codename}
												</p>
												<h3 className="text-3xl text-white">{featuredSystem.title}</h3>
											</div>
											<div className="text-right">
												<div className="text-xs text-gray-600" style={monoStyle}>
													LATEST DEPLOYMENT
												</div>
												<div className="text-sm text-cyan-400" style={monoStyle}>
													{featuredSystem.deployment.version}
												</div>
											</div>
										</div>
										<p className="mb-6 max-w-2xl text-base leading-relaxed text-gray-400">
											{featuredSystem.objective}
										</p>
										<div className="mb-6 grid gap-4 sm:grid-cols-3">
											<div className="rounded-lg border border-white/10 bg-white/5 p-4">
												<div className="mb-1 text-xs text-gray-600" style={monoStyle}>
													OUTCOME
												</div>
												<div className="text-sm text-white">
													{featuredSystem.outcome ?? "Production system in active service"}
												</div>
											</div>
											<div className="rounded-lg border border-white/10 bg-white/5 p-4">
												<div className="mb-1 text-xs text-gray-600" style={monoStyle}>
													ENVIRONMENT
												</div>
												<div className="text-sm text-white" style={monoStyle}>
													{featuredSystem.deployment.env}
												</div>
											</div>
											<div className="rounded-lg border border-white/10 bg-white/5 p-4">
												<div className="mb-1 text-xs text-gray-600" style={monoStyle}>
													REPLICAS
												</div>
												<div className="text-sm text-white" style={monoStyle}>
													{featuredSystem.deployment.replicas}
												</div>
											</div>
										</div>
										<div className="flex flex-wrap gap-2">
											{featuredSystem.stack.map((item) => (
												<span
													key={item}
													className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400"
													style={monoStyle}
												>
													{item}
												</span>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				)}

				<section className="px-6 py-16 lg:px-8">
					<div className="mx-auto max-w-7xl">
						<div className="mb-12 flex items-center justify-between">
							<div>
								<h2 className="mb-2 text-2xl text-white" style={monoStyle}>
									All Systems
								</h2>
								<p className="text-sm text-gray-500" style={monoStyle}>
									{regularSystems.length} entries in registry
								</p>
							</div>
						</div>

						<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
							{regularSystems.map((system) => (
								<article
									key={system.id}
									className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-950/70 to-black/80 transition-all hover:border-cyan-500/30"
								>
									<div className="relative aspect-[16/10]">
										<Image
											src={system.image}
											alt={system.title}
											fill
											sizes="(min-width: 768px) 50vw, 100vw"
											className="object-cover"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
										<div className="absolute left-5 top-5 flex flex-wrap items-center gap-2">
											<span
												className={`rounded-full border px-3 py-1 text-xs uppercase ${statusClasses[system.status]}`}
												style={monoStyle}
											>
												{system.status}
											</span>
											<span
												className="rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs text-gray-300"
												style={monoStyle}
											>
												{system.deployment.version}
											</span>
										</div>
									</div>
									<div className="space-y-5 p-6">
										<div>
											<p className="mb-2 text-xs text-gray-600" style={monoStyle}>
												{system.id} • {system.codename}
											</p>
											<h3 className="mb-3 text-2xl text-white">{system.title}</h3>
											<p className="text-sm leading-relaxed text-gray-400">{system.objective}</p>
										</div>
										<div className="grid grid-cols-3 gap-3">
											<div className="rounded-lg border border-white/10 bg-white/5 p-3">
												<div className="mb-1 text-xs text-gray-600" style={monoStyle}>
													ENV
												</div>
												<div className="text-sm text-white" style={monoStyle}>
													{system.deployment.env}
												</div>
											</div>
											<div className="rounded-lg border border-white/10 bg-white/5 p-3">
												<div className="mb-1 text-xs text-gray-600" style={monoStyle}>
													REPLICAS
												</div>
												<div className="text-sm text-white" style={monoStyle}>
													{system.deployment.replicas}
												</div>
											</div>
											<div className="rounded-lg border border-white/10 bg-white/5 p-3">
												<div className="mb-1 text-xs text-gray-600" style={monoStyle}>
													DATE
												</div>
												<div className="text-sm text-white" style={monoStyle}>
													{system.date}
												</div>
											</div>
										</div>
										<div className="flex flex-wrap gap-2">
											{system.stack.map((item) => (
												<span
													key={item}
													className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-400"
													style={monoStyle}
												>
													{item}
												</span>
											))}
										</div>
									</div>
								</article>
							))}
						</div>
					</div>
				</section>

				<section className="border-t border-white/10 px-6 py-16 lg:px-8">
					<div className="mx-auto max-w-7xl">
						<div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
							{[
								{ label: "Combined Uptime", value: "99.94%", detail: "last 90 days" },
								{ label: "Deploy Frequency", value: "24/wk", detail: "production average" },
								{ label: "Registry Growth", value: "+12", detail: "systems this year" },
								{ label: "Mean Recovery", value: "6m", detail: "incident average" },
							].map((metric) => (
								<div key={metric.label} className="border-l-2 border-cyan-500/30 pl-4">
									<div
										className="mb-1 text-xs uppercase tracking-wider text-gray-600"
										style={monoStyle}
									>
										{metric.label}
									</div>
									<div className="mb-1 text-3xl text-white" style={monoStyle}>
										{metric.value}
									</div>
									<div className="text-xs text-gray-500">{metric.detail}</div>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="border-t border-white/10 px-6 py-24 lg:px-8">
					<div className="mx-auto max-w-7xl">
						<div className="grid gap-6 md:grid-cols-3">
							<Link
								href="/#logs"
								className="group rounded-xl border border-white/10 bg-gradient-to-br from-gray-950/50 to-black/50 p-8 transition-all hover:border-cyan-500/30"
							>
								<FileText className="mb-4 h-8 w-8 text-cyan-400" />
								<h3 className="mb-2 text-xl text-white transition-colors group-hover:text-cyan-400">
									Field Logs
								</h3>
								<p className="text-sm text-gray-500">
									Read technical deep dives and engineering insights
								</p>
							</Link>

							<Link
								href="/#dispatch"
								className="group rounded-xl border border-white/10 bg-gradient-to-br from-gray-950/50 to-black/50 p-8 transition-all hover:border-violet-500/30"
							>
								<Radio className="mb-4 h-8 w-8 text-violet-400" />
								<h3 className="mb-2 text-xl text-white transition-colors group-hover:text-violet-400">
									Join Dispatch
								</h3>
								<p className="text-sm text-gray-500">
									Subscribe to monthly technical transmissions
								</p>
							</Link>

							<Link
								href="/"
								className="group rounded-xl border border-white/10 bg-gradient-to-br from-gray-950/50 to-black/50 p-8 transition-all hover:border-green-500/30"
							>
								<Terminal className="mb-4 h-8 w-8 text-green-400" />
								<h3 className="mb-2 text-xl text-white transition-colors group-hover:text-green-400">
									Return to Lab
								</h3>
								<p className="text-sm text-gray-500">Back to the main control center</p>
							</Link>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
