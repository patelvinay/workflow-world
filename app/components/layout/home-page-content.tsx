"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
	Activity,
	ArrowRight,
	Database,
	FileText,
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
					<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600">
						<Terminal className="h-5 w-5 text-white" />
					</div>
					<div>
						<p className="text-sm leading-none">Workflow World</p>
						<p className="text-xs leading-none text-cyan-400">× Builder Lab</p>
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
	return (
		<section className="relative overflow-hidden px-6 py-24 lg:px-8 ">
			<div className="pointer-events-none absolute inset-0 opacity-90 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-size-[2cm_2cm]" />
			<div className="relative mx-auto max-w-7xl gap-10 flex flex-col lg:justify-around justify-center  lg:items-center lg:flex-row ">
				<motion.div {...fadeUp} className="space-y-7 ">
					<span className="inline-flex items-center gap-2 rounded-md border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-xs font-mono text-cyan-300">
						<Activity className="h-4 w-4" />
						OPERATOR_ID: WW-2847 • CLEARANCE: ARCHITECT
					</span>
					<h1 className="text-5xl leading-tight lg:text-7xl">
						<span className="block text-gray-500 text-2xl font-mono mb-2">./initialize</span>
						<span className="block">Building systems</span>
						<span className="block bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
							worth using
						</span>
					</h1>
					<p className="max-w-xl border-l-2 border-cyan-500/30 pl-4 text-lg text-gray-400">
						Architecting and shipping production-grade software at the intersection of product
						clarity and system reliability.
					</p>
					<div className="flex flex-wrap gap-4">
						<Link
							href="/systems"
							className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 px-5 py-3 text-sm"
						>
							Enter the Lab <ArrowRight className="h-4 w-4" />
						</Link>
						<a
							href="#logs"
							className="inline-flex items-center gap-2 rounded-lg border border-violet-500/30 bg-black/40 px-5 py-3 text-sm text-violet-300"
						>
							<FileText className="h-4 w-4" /> Read logs
						</a>
					</div>
				</motion.div>
				<motion.div {...fadeUp} className="lg:w-1/3 w-full lg:min-w-100 ">
					<div className="overflow-hidden rounded-xl border border-cyan-500/20 bg-black/80 shadow-2xl">
						<div className="flex items-center justify-between rounded-t-xl border-b border-white/10 bg-gradient-to-r from-cyan-500/30 to-violet-600/30 px-4 py-3 text-xs font-mono">
							<div className="flex gap-1.5 items-center">
								<div className="bg-red-700 rounded size-2"></div>
								<div className="bg-yellow-500 rounded size-2"></div>
								<div className="bg-green-500 rounded size-2"></div>
								<span className="text-gray-500 px-1">workflow-world.local</span>
							</div>
							<span className="text-green-400">LIVE</span>
						</div>
						<div className="space-y-2 p-4 font-mono text-xs text-gray-300">
							<p>
								<span className="text-cyan-400">$</span> ./initialize-systems
							</p>
							<p>✓ API Gateway responding [45ms]</p>
							<p>✓ Database synced [3 nodes]</p>
							<p>✓ CDN cache optimal</p>
							<p>⟳ Queue workers processing</p>
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
			<div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-gradient-to-br from-gray-950 to-black p-8">
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
							<p className="mt-2 text-2xl font-mono text-cyan-400">{m.value}</p>
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
							className="rounded-xl border border-white/10 bg-gradient-to-br from-gray-950/70 to-black/80 p-6"
						>
							<div className="mb-2 flex items-center justify-between">
								<p className="font-mono text-xs text-gray-500">
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
			<div className="mx-auto max-w-7xl rounded-xl border border-white/10 bg-gradient-to-br from-gray-950/50 to-black/50 p-8">
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
			<div className="mx-auto max-w-7xl rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-black to-gray-950 p-8">
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
					<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 px-5 py-3 text-sm">
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
