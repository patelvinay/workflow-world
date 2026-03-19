"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SystemsNav } from "./components/SystemsNav";
import { FileText, Radio, Terminal } from "lucide-react";
import { SystemsHeroSection } from "./components/HeroSection";
import { SystemsFilterBar } from "./components/FilterBar";
import { FeaturedSection } from "./components/FeaturedSystem";
import { statusClasses } from "./data/statusClass";
import { AllSystems } from "./components/AllSystems";

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

export default function SystemPageContent() {
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
				<SystemsNav />

				<SystemsHeroSection />

				<SystemsFilterBar activeFilters={activeFilters} setActiveFilters={setActiveFilters} />

				{featuredSystem && <FeaturedSection featuredSystem={featuredSystem} />}

				<AllSystems regularSystems={regularSystems} />

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
