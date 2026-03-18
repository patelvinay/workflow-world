import { Database, ExternalLink, Github, Server, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function FeaturedProjectsSection() {
	const systems = [
		{
			id: "SYS-001",
			codename: "neural-commerce",
			title: "Neural Commerce Engine",
			classification: "Production" as const,
			objective:
				"AI-powered e-commerce platform with real-time inventory prediction and personalized customer journeys.",
			image:
				"https://images.unsplash.com/photo-1720962158883-b0f2021fb51e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzMwMjUyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
			stack: ["Next.js 14", "TensorFlow", "PostgreSQL", "Redis"],
			metrics: [
				["users", "47K+"],
				["uptime", "99.98%"],
				["requests", "2.4M/day"],
			] as const,
			deployment: {
				env: "Production",
				version: "v1.8.2",
				replicas: 3,
			},
			gradientClass: "from-cyan-500 to-blue-600",
		},
		{
			id: "SYS-002",
			codename: "quantum-orchestrator",
			title: "Quantum Task Orchestrator",
			classification: "Staging" as const,
			objective:
				"Distributed task management system with priority queuing, automatic scaling, and intelligent resource allocation.",
			image:
				"https://images.unsplash.com/photo-1643398899826-2fca1e015fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY3liZXJwdW5rJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MzExMTA1NXww&ixlib=rb-4.1.0&q=80&w=1080",
			stack: ["Go", "Kubernetes", "RabbitMQ", "Grafana"],
			metrics: [
				["tasks", "1.2M/day"],
				["latency", "45ms"],
				["efficiency", "94%"],
			] as const,
			deployment: {
				env: "Staging",
				version: "v2.1.0-rc3",
				replicas: 2,
			},
			gradientClass: "from-violet-500 to-purple-600",
		},
		{
			id: "SYS-003",
			codename: "cascade-analytics",
			title: "Cascade Analytics Hub",
			classification: "Production" as const,
			objective:
				"Real-time data pipeline with custom visualization dashboards, anomaly detection, and predictive insights.",
			image:
				"https://images.unsplash.com/photo-1765046255479-669cf07a0230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhdGElMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc3MzA0MjYzMHww&ixlib=rb-4.1.0&q=80&w=1080",
			stack: ["Python", "Apache Kafka", "D3.js", "TimescaleDB"],
			metrics: [
				["events", "5.8M/hr"],
				["streams", "47"],
				["accuracy", "97.2%"],
			] as const,
			deployment: {
				env: "Production",
				version: "v3.4.1",
				replicas: 4,
			},
			gradientClass: "from-emerald-500 to-green-600",
		},
		{
			id: "SYS-004",
			codename: "nexus-design-sys",
			title: "Nexus Design System",
			classification: "Production" as const,
			objective:
				"Component library and design tokens for building consistent, accessible interfaces at scale across platforms.",
			image:
				"https://images.unsplash.com/photo-1642287040066-2bd340523289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBuaWdodHxlbnwxfHx8fDE3NzMwMzMxODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
			stack: ["React", "TypeScript", "Storybook", "Tailwind"],
			metrics: [
				["components", "142"],
				["downloads", "28K/mo"],
				["coverage", "100%"],
			] as const,
			deployment: {
				env: "Production",
				version: "v1.2.8",
				replicas: 2,
			},
			gradientClass: "from-amber-500 to-orange-600",
		},
	] as const;

	return (
		<section className="relative overflow-hidden px-6 py-32 lg:px-8">
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:64px_64px] opacity-50" />
			<div className="absolute inset-0 bg-gradient-to-b from-violet-950/10 via-transparent to-transparent" />

			<div className="relative mx-auto max-w-7xl">
				<div className="mb-16 max-w-3xl">
					<div className="mb-4 flex items-center gap-3">
						<div className="h-8 w-1 bg-gradient-to-b from-cyan-500 to-violet-500" />
						<div>
							<div className="mb-1 flex items-center gap-2">
								<Database className="h-4 w-4 text-cyan-400" />
								<span className="text-xs uppercase tracking-wider text-cyan-400 font-mono-ui">
									System Registry
								</span>
							</div>
							<h2 className="text-3xl text-white lg:text-5xl">Deployed Systems</h2>
						</div>
					</div>
					<p className="border-l-2 border-gray-800 pl-4 text-lg text-gray-500">
						Production-grade systems and experimental platforms. Each dossier contains technical
						specifications, deployment status, and operational metrics.
					</p>
				</div>

				<div className="space-y-6">
					{systems.map((system) => (
						<div
							key={system.id}
							className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-950/80 to-black/80 backdrop-blur-sm transition-all hover:border-cyan-500/30"
						>
							<div className="grid gap-0 lg:grid-cols-12">
								<div className="relative aspect-[4/3] overflow-hidden lg:col-span-5 lg:aspect-auto">
									<Image
										src={system.image}
										alt={system.title}
										fill
										sizes="(min-width: 1024px) 40vw, 100vw"
										className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent lg:via-black/80" />

									<div className="absolute left-4 top-4">
										<div
											className={`rounded-lg border px-3 py-1.5 text-xs backdrop-blur-sm font-mono-ui ${
												system.classification === "Production"
													? "border-green-500/30 bg-green-500/10 text-green-400"
													: "border-yellow-500/30 bg-yellow-500/10 text-yellow-400"
											}`}
										>
											{system.classification}
										</div>
									</div>

									<div className="absolute bottom-4 left-4">
										<div className="mb-1 text-xs text-gray-600 font-mono-ui">{system.id}</div>
										<div className="text-sm text-cyan-400 font-mono-ui">{system.codename}</div>
									</div>
								</div>

								<div className="p-6 lg:col-span-7 lg:p-8">
									<div className="mb-6">
										<h3 className="mb-3 text-2xl text-white transition-colors group-hover:text-cyan-400">
											{system.title}
										</h3>
										<div className="flex items-start gap-2">
											<span className="mt-0.5 shrink-0 text-xs text-gray-600 font-mono-ui">
												OBJECTIVE:
											</span>
											<p className="text-sm leading-relaxed text-gray-400">{system.objective}</p>
										</div>
									</div>

									<div className="mb-6">
										<div className="mb-2 text-xs text-gray-600 font-mono-ui">STACK:</div>
										<div className="flex flex-wrap gap-2">
											{system.stack.map((tech) => (
												<span
													key={tech}
													className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400 font-mono-ui"
												>
													{tech}
												</span>
											))}
										</div>
									</div>

									<div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
										<div className="space-y-3">
											<div className="text-xs text-gray-600 font-mono-ui">METRICS:</div>
											{system.metrics.map(([key, value]) => (
												<div key={key} className="flex items-baseline justify-between gap-4">
													<span className="text-xs uppercase text-gray-500">{key}</span>
													<span className="text-sm text-white font-mono-ui">{value}</span>
												</div>
											))}
										</div>

										<div className="space-y-3">
											<div className="text-xs text-gray-600 font-mono-ui">DEPLOYMENT:</div>
											<div className="flex items-baseline justify-between gap-4">
												<span className="text-xs text-gray-500">ENV</span>
												<span className="text-sm text-white font-mono-ui">
													{system.deployment.env}
												</span>
											</div>
											<div className="flex items-baseline justify-between gap-4">
												<span className="text-xs text-gray-500">VERSION</span>
												<span className="text-sm text-white font-mono-ui">
													{system.deployment.version}
												</span>
											</div>
											<div className="flex items-baseline justify-between gap-4">
												<span className="text-xs text-gray-500">REPLICAS</span>
												<span className="text-sm text-white font-mono-ui">
													{system.deployment.replicas}
												</span>
											</div>
										</div>
									</div>

									<div className="flex flex-wrap items-center gap-4 border-t border-white/10 pt-4">
										<button
											type="button"
											className="inline-flex items-center gap-2 text-sm text-cyan-400 transition-colors hover:text-cyan-300 font-mono-ui"
										>
											<ExternalLink className="h-4 w-4" />
											View System
										</button>
										<button
											type="button"
											className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-400 font-mono-ui"
										>
											<Github className="h-4 w-4" />
											Repository
										</button>
									</div>
								</div>
							</div>

							<div
								className={`absolute bottom-0 right-0 h-48 w-48 rounded-full bg-gradient-to-br opacity-0 blur-3xl transition-opacity group-hover:opacity-10 ${system.gradientClass}`}
							/>
						</div>
					))}
				</div>

				<div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
					{[
						{
							icon: Database,
							label: "Total Systems",
							value: "47",
							detail: "across all environments",
						},
						{
							icon: Server,
							label: "Production Instances",
							value: "124",
							detail: "currently running",
						},
						{
							icon: Zap,
							label: "Combined Uptime",
							value: "99.94%",
							detail: "last 90 days",
						},
					].map((stat) => (
						<div
							key={stat.label}
							className="rounded-xl border border-white/10 bg-gradient-to-br from-gray-950/50 to-black/50 p-6"
						>
							<div className="mb-4 flex items-center gap-3">
								<div className="rounded-lg border border-cyan-500/20 bg-cyan-500/10 p-2">
									<stat.icon className="h-5 w-5 text-cyan-400" />
								</div>
								<span className="text-xs uppercase text-gray-600 font-mono-ui">{stat.label}</span>
							</div>
							<div className="mb-1 text-3xl text-white font-mono-ui">{stat.value}</div>
							<div className="text-xs text-gray-500">{stat.detail}</div>
						</div>
					))}
				</div>

				<div className="mt-12 text-center">
					<Link
						href="/systems"
						className="inline-block rounded-lg border border-violet-500/30 bg-violet-500/10 px-8 py-4 text-violet-300 transition-all hover:border-violet-500/50 hover:bg-violet-500/20"
					>
						Explore All Systems →
					</Link>
				</div>
			</div>
		</section>
	);
}
