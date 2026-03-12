"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
	Activity,
	ArrowRight,
	Database,
	FileText,
	GitBranch,
	Layers,
	Radio,
	Send,
	Terminal,
} from "lucide-react";

const fadeUp = {
	initial: { opacity: 0, y: 24 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, amount: 0.2 },
	transition: { duration: 0.45 },
};

const systems = [
	{
		id: "SYS-001",
		codename: "neural-commerce",
		title: "Neural Commerce Engine",
		objective:
			"AI commerce platform with recommendation, inventory prediction, and personalization.",
		status: "Production",
	},
	{
		id: "SYS-002",
		codename: "quantum-orchestrator",
		title: "Quantum Task Orchestrator",
		objective: "Distributed task system with priority queues and autoscaling workers.",
		status: "Staging",
	},
	{
		id: "SYS-003",
		codename: "cascade-analytics",
		title: "Cascade Analytics Hub",
		objective: "Realtime analytics pipelines with dashboards and anomaly detection.",
		status: "Production",
	},
];

const monoStyle = {
	fontFamily:
		"var(--font-geist-mono, ui-monospace), SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
};

export function HomePageContent() {
	return (
		<div className="min-h-screen bg-black text-white">
			<HomeNav />
			<main className="pt-16">
				<HeroSection />
				<TerminalSection />
				<SystemsSection />
				<LogsSection />
				<DispatchSection />
			</main>
			<FooterSection />
		</div>
	);
}

function HomeNav() {
	return (
		<nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
			<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
				<Link href="/" className="flex items-center gap-3">
					<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-cyan-500 to-violet-600">
						<Terminal className="h-5 w-5 text-white" />
					</div>
					<div>
						<p className="text-sm leading-none">Workflow World</p>
						<p className="text-xs leading-none text-cyan-400" style={monoStyle}>
							× Builder Lab
						</p>
					</div>
				</Link>

				<div className="hidden items-center gap-7 md:flex">
					<Link href="/systems" className="text-sm text-gray-400 hover:text-cyan-400">
						Systems
					</Link>
					<a href="#logs" className="text-sm text-gray-400 hover:text-cyan-400">
						Field Logs
					</a>
					<a href="#dispatch" className="text-sm text-gray-400 hover:text-cyan-400">
						Dispatch
					</a>
					<span className="h-4 w-px bg-white/30" />
					<span className="inline-flex items-center gap-2 text-xs text-green-400">
						<span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

						<span className="text-gray-500 text-md">OPERATIONAL</span>
					</span>
				</div>
			</div>
		</nav>
	);
}

function HeroSection() {
	const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
	const [isGlowVisible, setIsGlowVisible] = useState(false);
	const ctaGlowColors =
		"rgba(6, 182, 212, 0.45), rgba(139, 92, 246, 0.38), rgba(6, 182, 212, 0.24)";

	const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
		const rect = event.currentTarget.getBoundingClientRect();
		const x = ((event.clientX - rect.left) / rect.width) * 100;
		const y = ((event.clientY - rect.top) / rect.height) * 100;
		setMousePosition({ x, y });
		setIsGlowVisible(true);
	};

	const handleMouseLeave = () => {
		setIsGlowVisible(false);
	};

	return (
		<section
			className="relative z-0 overflow-hidden px-6 py-4 lg:px-8"
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			<div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:80px_80px]" />
			<div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.05),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.05),transparent_50%)]" />
			<svg
				className="absolute inset-0 z-0 h-full w-full opacity-30"
				xmlns="http://www.w3.org/2000/svg"
			>
				<line x1="10%" y1="20%" x2="40%" y2="50%" stroke="url(#grad1)" strokeWidth="1" />
				<line x1="40%" y1="50%" x2="60%" y2="30%" stroke="url(#grad1)" strokeWidth="1" />
				<line x1="60%" y1="70%" x2="90%" y2="60%" stroke="url(#grad2)" strokeWidth="1" />
				<defs>
					<linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" stopColor="rgb(6,182,212)" stopOpacity="0" />
						<stop offset="50%" stopColor="rgb(6,182,212)" stopOpacity="0.5" />
						<stop offset="100%" stopColor="rgb(6,182,212)" stopOpacity="0" />
					</linearGradient>
					<linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" stopColor="rgb(139,92,246)" stopOpacity="0" />
						<stop offset="50%" stopColor="rgb(139,92,246)" stopOpacity="0.5" />
						<stop offset="100%" stopColor="rgb(139,92,246)" stopOpacity="0" />
					</linearGradient>
				</defs>
			</svg>
			<motion.div
				className="pointer-events-none absolute z-10 hidden h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full will-change-transform md:block"
				animate={{
					opacity: isGlowVisible ? 1 : 0,
					rotate: isGlowVisible ? 360 : 0,
					scale: isGlowVisible ? 1 : 0.96,
				}}
				transition={{
					opacity: { duration: 0.2, ease: "easeOut" },
					scale: { duration: 0.2, ease: "easeOut" },
					rotate: {
						duration: 18,
						repeat: Infinity,
						ease: "linear",
					},
				}}
				style={{
					left: `${mousePosition.x}%`,
					top: `${mousePosition.y}%`,
					background: `conic-gradient(from 0deg, ${ctaGlowColors})`,
					filter: "blur(26px)",
					boxShadow: "0 0 40px rgba(6, 182, 212, 0.08)",
				}}
			/>
			<div className="relative z-20 mx-auto flex max-w-7xl flex-col justify-center gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-20">
				<motion.div {...fadeUp} className="space-y-7 ">
					<span
						className="inline-flex items-center gap-2 rounded-md border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-[10px] text-cyan-300"
						style={monoStyle}
					>
						<span className="relative flex size-2">
							<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75"></span>
							<span className="relative inline-flex size-2 rounded-full bg-cyan-300"></span>
						</span>
						OPERATOR_ID: WW-2847 • CLEARANCE: ARCHITECT
					</span>
					<h1 className="text-5xl lg:text-7xl tracking-tight leading-[1.1] cursor-default">
						<span className="mb-2 block text-2xl text-gray-500 lg:text-3xl" style={monoStyle}>
							./initialize
						</span>
						<span className="block text-white">Building systems</span>
						<span className="block bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
							worth using
						</span>
					</h1>
					<p className="text-lg lg:text-xl text-gray-400 leading-relaxed max-w-xl border-l-2 border-cyan-500/30 pl-4 cursor-default">
						Welcome to the lab. I architect, ship, and maintain production systems at the
						intersection of elegant code and real-world impact. This is my operational base.
					</p>
					<div className="flex flex-wrap gap-4">
						<Link
							href="/systems"
							className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-cyan-500 to-violet-600 px-5 py-3 text-sm"
						>
							<Terminal className="h-4 w-4" />
							Enter the Lab <ArrowRight className="h-4 w-4" />
						</Link>
						<a
							href="#logs"
							className="inline-flex items-center gap-2 rounded-lg border border-violet-500/30 bg-black/40 px-5 py-3 text-sm text-violet-300"
						>
							<FileText className="h-4 w-4" /> Systems Map
						</a>
					</div>
					<div className="grid grid-cols-3 gap-4 pt-4">
						{[
							{ value: "47", label: "Systems", sublabel: "deployed" },
							{ value: "12K+", label: "Commits", sublabel: "this year" },
							{ value: "99.8%", label: "Uptime", sublabel: "production" },
						].map((stat, i) => (
							<div key={i} className="relative">
								<div className="text-3xl font-mono text-cyan-400">{stat.value}</div>
								<div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
								<div className="text-xs text-gray-600">{stat.sublabel}</div>
								{i < 2 && (
									<div className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-px bg-white/10" />
								)}
							</div>
						))}
					</div>
				</motion.div>
				<motion.div {...fadeUp} className="w-full lg:w-[28rem] lg:flex-none xl:w-[31rem]">
					<div className="relative">
						<div className="relative overflow-hidden rounded-xl border border-cyan-500/30 bg-black/90 shadow-2xl backdrop-blur-xl">
							<div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-cyan-950/50 to-violet-950/50 px-4 py-2.5">
								<div className="flex items-center gap-3">
									<div className="flex gap-1.5">
										<div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
										<div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
										<div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
									</div>
									<span className="text-xs text-gray-500" style={monoStyle}>
										workflow-world.local
									</span>
								</div>
								<div className="flex items-center gap-2">
									<Activity className="h-3 w-3 animate-pulse text-green-400" />
									<span className="text-xs text-green-400" style={monoStyle}>
										LIVE
									</span>
								</div>
							</div>

							<div className="h-80 space-y-3 overflow-hidden p-4 text-xs" style={monoStyle}>
								<div className="text-cyan-400">
									<span className="text-gray-600">$</span> ./initialize-systems
								</div>

								<div className="space-y-1.5 text-gray-400">
									<div className="flex items-center gap-2">
										<span className="text-green-400">✓</span>
										<span>API Gateway v2.4.1 responding [45ms avg]</span>
									</div>
									<div className="flex items-center gap-2">
										<span className="text-green-400">✓</span>
										<span>Database cluster synced [3 nodes]</span>
									</div>
									<div className="flex items-center gap-2">
										<span className="text-green-400">✓</span>
										<span>CDN edge cache optimal [247 req/s]</span>
									</div>
									<div className="flex items-center gap-2">
										<span className="text-cyan-400">⟳</span>
										<span>Background jobs processing [12 active]</span>
									</div>
								</div>

								<div className="border-t border-white/5 pt-2">
									<div className="mb-2 text-violet-400">→ Active Systems:</div>
									<div className="space-y-1.5 pl-4 text-gray-500">
										<div className="flex justify-between">
											<span>neural-commerce</span>
											<span className="text-green-400">prod</span>
										</div>
										<div className="flex justify-between">
											<span>quantum-orchestrator</span>
											<span className="text-yellow-400">staging</span>
										</div>
										<div className="flex justify-between">
											<span>cascade-analytics</span>
											<span className="text-green-400">prod</span>
										</div>
										<div className="flex justify-between">
											<span>nexus-design-sys</span>
											<span className="text-green-400">prod</span>
										</div>
									</div>
								</div>

								<div className="border-t border-white/5 pt-2">
									<div className="mb-2 text-violet-400">→ Latest Activity:</div>
									<div className="space-y-1 pl-4 text-[10px] text-gray-600">
										<div>14:32 Deployment completed: neural-commerce@v1.8.2</div>
										<div>14:28 Merged PR #847: Add Redis caching layer</div>
										<div>14:15 System check passed: all services nominal</div>
									</div>
								</div>

								<div className="flex items-center gap-2 pt-2">
									<span className="text-cyan-400">$</span>
									<div className="h-3.5 w-2 animate-pulse bg-cyan-400" />
								</div>
							</div>
						</div>

						<div className="absolute -left-4 top-8 w-32 rounded-lg border border-violet-500/30 bg-black/90 p-3 shadow-xl backdrop-blur-xl">
							<div className="mb-2 flex items-center gap-2">
								<GitBranch className="h-3 w-3 text-violet-400" />
								<span className="text-xs text-gray-500">Deploy Freq</span>
							</div>
							<div className="text-xl text-white">24/wk</div>
							<div className="mt-1 text-[10px] text-green-400">↑ 12% vs last month</div>
						</div>

						<div className="absolute -right-4 bottom-8 w-36 rounded-lg border border-cyan-500/30 bg-black/90 p-3 shadow-xl backdrop-blur-xl">
							<div className="mb-2 flex items-center gap-2">
								<Layers className="h-3 w-3 text-cyan-400" />
								<span className="text-xs text-gray-500">Active Sprint</span>
							</div>
							<div className="text-xl text-white">Week 8/12</div>
							<div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
								<div className="h-full w-2/3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

function TerminalSection() {
	return (
		<motion.section {...fadeUp} className="px-6 py-20 lg:px-8">
			<div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-linear-to-br from-gray-950 to-black p-8">
				<div className="mb-6 flex items-center gap-3">
					<Terminal className="h-5 w-5 text-cyan-400" />
					<h2 className="text-3xl">Live System Monitor</h2>
				</div>
				<div className="grid gap-4 md:grid-cols-3">
					{[
						{ label: "Combined Uptime", value: "99.94%" },
						{ label: "Requests", value: "2.4M/day" },
						{ label: "Deploy Frequency", value: "24/wk" },
					].map((m) => (
						<div key={m.label} className="rounded-lg border border-white/10 bg-white/5 p-4">
							<p className="text-xs text-gray-500">{m.label}</p>
							<p className="mt-2 text-2xl text-cyan-400" style={monoStyle}>
								{m.value}
							</p>
						</div>
					))}
				</div>
			</div>
		</motion.section>
	);
}

function SystemsSection() {
	return (
		<motion.section {...fadeUp} id="systems" className="px-6 py-20 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="mb-8 flex items-center gap-3">
					<Database className="h-5 w-5 text-cyan-400" />
					<h2 className="text-3xl">Deployed Systems</h2>
				</div>
				<div className="space-y-4">
					{systems.map((s) => (
						<article
							key={s.id}
							className="rounded-xl border border-white/10 bg-linear-to-br from-gray-950/70 to-black/80 p-6"
						>
							<div className="mb-2 flex items-center justify-between">
								<p className="text-xs text-gray-500" style={monoStyle}>
									{s.id} · {s.codename}
								</p>
								<p className="text-xs text-green-400">{s.status}</p>
							</div>
							<h3 className="text-xl">{s.title}</h3>
							<p className="mt-2 text-sm text-gray-400">{s.objective}</p>
						</article>
					))}
				</div>
				<div className="mt-8">
					<Link
						href="/systems"
						className="inline-flex items-center gap-2 rounded-lg border border-violet-500/30 bg-violet-500/10 px-5 py-3 text-violet-300"
					>
						Explore all systems <ArrowRight className="h-4 w-4" />
					</Link>
				</div>
			</div>
		</motion.section>
	);
}

function LogsSection() {
	return (
		<motion.section {...fadeUp} id="logs" className="px-6 py-20 lg:px-8">
			<div className="mx-auto max-w-7xl rounded-xl border border-white/10 bg-linear-to-br from-gray-950/50 to-black/50 p-8">
				<div className="mb-4 flex items-center gap-3">
					<FileText className="h-5 w-5 text-violet-400" />
					<h2 className="text-3xl">Builder&apos;s Journal</h2>
				</div>
				<p className="text-gray-400">
					Technical logs on architecture, API design, deployment reliability, and production
					learnings.
				</p>
			</div>
		</motion.section>
	);
}

function DispatchSection() {
	return (
		<motion.section {...fadeUp} id="dispatch" className="px-6 py-20 lg:px-8">
			<div className="mx-auto max-w-7xl rounded-2xl border border-cyan-500/20 bg-linear-to-br from-black to-gray-950 p-8">
				<div className="mb-6 flex items-center gap-3">
					<Radio className="h-5 w-5 text-violet-400" />
					<h2 className="text-3xl">Dispatch Terminal</h2>
				</div>
				<form className="grid gap-4 md:grid-cols-3">
					<input
						className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm"
						placeholder="Operator name"
					/>
					<input
						className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm"
						placeholder="Email address"
					/>
					<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-linear-to-r from-cyan-500 to-violet-600 px-5 py-3 text-sm">
						<Send className="h-4 w-4" />
						Subscribe
					</button>
				</form>
			</div>
		</motion.section>
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
