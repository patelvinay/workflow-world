"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
	Activity,
	AlertCircle,
	ArrowRight,
	CheckCircle2,
	Clock,
	Code2,
	Cpu,
	Database,
	ExternalLink,
	FileText,
	GitBranch,
	Github,
	HardDrive,
	Hash,
	Layers,
	Lock,
	Radio,
	Send,
	Server,
	Target,
	Terminal,
	TrendingUp,
	Users,
	Zap,
} from "lucide-react";
import { NavBar } from "../../shared/components/Navbar";

const fadeUp = {
	initial: { opacity: 0, y: 24 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, amount: 0.2 },
	transition: { duration: 0.45 },
};

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

function HeroSection() {
	const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
	const [isGlowVisible, setIsGlowVisible] = useState(false);

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
			<div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-size-[80px_80px]" />
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
				className="pointer-events-none absolute z-10 hidden h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 md:block"
				animate={{
					opacity: isGlowVisible ? 1 : 0,
					scale: isGlowVisible ? 1 : 0.92,
				}}
				transition={{
					opacity: { duration: 0.25, ease: "easeOut" },
					scale: { duration: 0.35, ease: "easeOut" },
				}}
				style={{
					left: `${mousePosition.x}%`,
					top: `${mousePosition.y}%`,
					filter: "blur(18px)",
					boxShadow: "0 0 180px rgba(139, 92, 246, 0.14)",
				}}
			>
				<motion.div
					className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(103,232,249,0.82),rgba(6,182,212,0.28)_30%,rgba(139,92,246,0.18)_58%,transparent_78%)] mix-blend-screen"
					animate={{
						x: [0, 16, -12, 8, 0],
						y: [0, -14, 10, 18, 0],
						scale: [1, 1.08, 0.92, 1.04, 1],
						borderRadius: [
							"42% 58% 55% 45% / 49% 39% 61% 51%",
							"57% 43% 48% 52% / 42% 58% 44% 56%",
							"46% 54% 40% 60% / 58% 42% 58% 42%",
							"60% 40% 57% 43% / 47% 53% 41% 59%",
							"42% 58% 55% 45% / 49% 39% 61% 51%",
						],
					}}
					transition={{
						duration: 7.5,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute left-[18%] top-[16%] h-[62%] w-[62%] rounded-full bg-[radial-gradient(circle_at_60%_40%,rgba(196,181,253,0.82),rgba(139,92,246,0.38)_36%,rgba(6,182,212,0.14)_66%,transparent_84%)] mix-blend-screen"
					animate={{
						x: [10, -8, 18, -4, 10],
						y: [-12, 14, -6, 12, -12],
						scale: [0.94, 1.06, 0.9, 1.08, 0.94],
						rotate: [0, 18, -14, 9, 0],
						borderRadius: [
							"59% 41% 63% 37% / 44% 57% 43% 56%",
							"44% 56% 39% 61% / 58% 47% 53% 42%",
							"62% 38% 55% 45% / 36% 64% 36% 64%",
							"48% 52% 60% 40% / 51% 38% 62% 49%",
							"59% 41% 63% 37% / 44% 57% 43% 56%",
						],
					}}
					transition={{
						duration: 6.2,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute left-[34%] top-[35%] h-[34%] w-[34%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.72),rgba(103,232,249,0.28)_38%,rgba(196,181,253,0.22)_62%,transparent_78%)] mix-blend-screen"
					animate={{
						x: [-8, 12, -4, 10, -8],
						y: [10, -6, 12, -10, 10],
						scale: [0.8, 1.14, 0.9, 1.08, 0.8],
						opacity: [0.6, 0.9, 0.55, 0.82, 0.6],
					}}
					transition={{
						duration: 4.8,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute inset-[12%] rounded-full border border-cyan-300/10"
					animate={{
						scale: [0.92, 1.08, 0.96, 1.04, 0.92],
						opacity: [0.1, 0.2, 0.08, 0.16, 0.1],
						rotate: [0, 24, -18, 12, 0],
					}}
					transition={{
						duration: 9,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
			</motion.div>
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
	const [activeTab, setActiveTab] = useState<"status" | "processes" | "systems">("status");

	const statusToneClasses = {
		green: {
			dot: "text-green-400",
			badge: "border border-green-500/20 bg-green-500/10 text-green-400",
		},
		cyan: {
			dot: "text-cyan-400",
			badge: "border border-cyan-500/20 bg-cyan-500/10 text-cyan-400",
		},
	} as const;

	return (
		<section className="relative overflow-hidden px-6 py-32 lg:px-8">
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:64px_64px] opacity-50" />

			<div className="relative mx-auto max-w-7xl">
				<div className="mb-12 max-w-3xl">
					<div className="mb-4 flex items-center gap-3">
						<div className="h-8 w-1 bg-gradient-to-b from-cyan-500 to-violet-500" />
						<div>
							<div className="mb-1 flex items-center gap-2">
								<Terminal className="h-4 w-4 text-cyan-400" />
								<span className="text-xs uppercase tracking-wider text-cyan-400" style={monoStyle}>
									Outpost Terminal
								</span>
							</div>
							<h2 className="text-3xl text-white lg:text-5xl">Live System Monitor</h2>
						</div>
					</div>
					<p className="border-l-2 border-gray-800 pl-4 text-lg text-gray-500">
						Real-time view of active deployments, running processes, and system health across all
						production environments.
					</p>
				</div>

				<div className="relative">
					<div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-black via-gray-950 to-black shadow-2xl">
						<div className="relative flex items-center justify-between border-b border-white/10 bg-black/80 px-6 py-3 backdrop-blur-sm">
							<div className="flex items-center gap-4">
								<div className="flex gap-2">
									<div className="h-3 w-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
									<div className="h-3 w-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
									<div className="h-3 w-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
								</div>
								<span className="text-xs text-gray-600" style={monoStyle}>
									outpost://terminal-01.workflow-world.dev
								</span>
							</div>

							<div className="flex items-center gap-3">
								<div className="flex items-center gap-2 text-xs" style={monoStyle}>
									<Activity className="h-3 w-3 animate-pulse text-green-400" />
									<span className="text-green-400">OPERATIONAL</span>
									<span className="text-gray-700">|</span>
									<span className="text-gray-500">14:32:18 UTC</span>
								</div>
							</div>
						</div>

						<div className="flex gap-px border-b border-white/5 bg-gradient-to-r from-cyan-950/20 to-violet-950/20">
							{[
								{ id: "status", label: "System Status", icon: Activity },
								{ id: "processes", label: "Active Processes", icon: Cpu },
								{ id: "systems", label: "Deployed Systems", icon: Database },
							].map((tab) => (
								<button
									key={tab.id}
									onClick={() => setActiveTab(tab.id as "status" | "processes" | "systems")}
									className={`relative flex items-center gap-2 px-4 py-3 text-xs transition-all lg:px-6 ${
										activeTab === tab.id
											? "bg-cyan-500/5 text-cyan-400"
											: "text-gray-600 hover:bg-white/5 hover:text-gray-400"
									}`}
									style={monoStyle}
								>
									<tab.icon className="h-3.5 w-3.5" />
									<span className="hidden sm:inline">{tab.label}</span>
									{activeTab === tab.id && (
										<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-violet-500" />
									)}
								</button>
							))}
						</div>

						<div className="min-h-[400px] p-6 text-sm" style={monoStyle}>
							{activeTab === "status" && (
								<div className="space-y-4">
									<div className="mb-6 flex items-center gap-2 text-cyan-400">
										<span className="text-gray-600">workflow@outpost-01</span>
										<span className="text-gray-700">~</span>
										<span className="text-violet-400">$</span>
										<span className="text-cyan-400">system-status --verbose</span>
									</div>

									<div className="space-y-3">
										<div className="mb-2 text-violet-400">⎯⎯⎯ Infrastructure Health ⎯⎯⎯</div>

										{[
											{
												service: "API Gateway",
												status: "healthy",
												metric: "45ms avg",
												uptime: "99.98%",
												color: "green" as const,
											},
											{
												service: "Database Cluster",
												status: "synced",
												metric: "3 nodes",
												uptime: "100%",
												color: "green" as const,
											},
											{
												service: "Cache Layer (Redis)",
												status: "optimal",
												metric: "12GB used",
												uptime: "99.95%",
												color: "green" as const,
											},
											{
												service: "Message Queue",
												status: "processing",
												metric: "127 msgs/s",
												uptime: "99.92%",
												color: "cyan" as const,
											},
											{
												service: "CDN Edge Network",
												status: "distributed",
												metric: "247 req/s",
												uptime: "99.99%",
												color: "green" as const,
											},
										].map((item) => {
											const tone = statusToneClasses[item.color];

											return (
												<div
													key={item.service}
													className="flex items-center justify-between border-b border-white/5 py-2 last:border-0"
												>
													<div className="flex items-center gap-3">
														<span className={tone.dot}>●</span>
														<span className="min-w-[180px] text-gray-300">{item.service}</span>
														<span className={`rounded-full px-2 py-0.5 text-xs ${tone.badge}`}>
															{item.status}
														</span>
													</div>
													<div className="flex items-center gap-6 text-xs">
														<span className="text-gray-500">{item.metric}</span>
														<span className="min-w-[60px] text-right text-gray-600">
															{item.uptime}
														</span>
													</div>
												</div>
											);
										})}
									</div>

									<div className="grid grid-cols-2 gap-4 pt-4 lg:grid-cols-4">
										{[
											{ label: "CPU", value: "23%", icon: Cpu, status: "optimal" },
											{
												label: "Memory",
												value: "8.4GB",
												icon: HardDrive,
												status: "normal",
											},
											{
												label: "Disk I/O",
												value: "142MB/s",
												icon: Database,
												status: "optimal",
											},
											{
												label: "Network",
												value: "1.2GB/s",
												icon: Activity,
												status: "optimal",
											},
										].map((metric) => (
											<div
												key={metric.label}
												className="rounded-lg border border-white/10 bg-white/5 p-3"
											>
												<div className="mb-2 flex items-center gap-2">
													<metric.icon className="h-3.5 w-3.5 text-gray-500" />
													<span className="text-xs text-gray-500">{metric.label}</span>
												</div>
												<div className="text-xl text-white">{metric.value}</div>
												<div className="mt-1 text-xs text-green-400">{metric.status}</div>
											</div>
										))}
									</div>

									<div className="flex items-center gap-2 pt-6">
										<span className="text-gray-600">workflow@outpost-01</span>
										<span className="text-gray-700">~</span>
										<span className="text-violet-400">$</span>
										<div className="ml-1 h-4 w-2 animate-pulse bg-cyan-400" />
									</div>
								</div>
							)}

							{activeTab === "processes" && (
								<div className="space-y-4">
									<div className="mb-6 flex items-center gap-2 text-cyan-400">
										<span className="text-gray-600">workflow@outpost-01</span>
										<span className="text-gray-700">~</span>
										<span className="text-violet-400">$</span>
										<span className="text-cyan-400">ps aux --sort=-cpu</span>
									</div>

									<div className="space-y-2">
										{[
											{
												pid: "2847",
												process: "node api-gateway.js",
												cpu: "12.3%",
												mem: "847MB",
												time: "47:32:14",
											},
											{
												pid: "2851",
												process: "postgres: analytics",
												cpu: "8.7%",
												mem: "1.2GB",
												time: "47:31:58",
											},
											{
												pid: "2863",
												process: "redis-server *:6379",
												cpu: "5.2%",
												mem: "412MB",
												time: "47:29:42",
											},
											{
												pid: "2891",
												process: "node worker-queue.js",
												cpu: "4.8%",
												mem: "523MB",
												time: "12:45:33",
											},
											{
												pid: "2904",
												process: "nginx: master process",
												cpu: "2.1%",
												mem: "89MB",
												time: "47:32:01",
											},
											{
												pid: "2917",
												process: "node websocket-server.js",
												cpu: "1.9%",
												mem: "234MB",
												time: "08:12:27",
											},
										].map((proc) => (
											<div
												key={proc.pid}
												className="flex items-center justify-between border-b border-white/5 py-2 text-xs"
											>
												<div className="flex flex-1 items-center gap-4">
													<span className="w-12 text-gray-600">{proc.pid}</span>
													<span className="flex-1 text-gray-400">{proc.process}</span>
												</div>
												<div className="flex items-center gap-6 text-gray-600">
													<span className="w-14 text-right">{proc.cpu}</span>
													<span className="w-16 text-right">{proc.mem}</span>
													<span className="w-20 text-right">{proc.time}</span>
												</div>
											</div>
										))}
									</div>

									<div className="pt-4 text-xs text-gray-600">
										12 processes running • Total CPU: 34.8% • Total Memory: 3.2GB
									</div>
								</div>
							)}

							{activeTab === "systems" && (
								<div className="space-y-4">
									<div className="mb-6 flex items-center gap-2 text-cyan-400">
										<span className="text-gray-600">workflow@outpost-01</span>
										<span className="text-gray-700">~</span>
										<span className="text-violet-400">$</span>
										<span className="text-cyan-400">kubectl get deployments --all-namespaces</span>
									</div>

									<div className="space-y-3">
										{[
											{
												name: "neural-commerce",
												env: "production",
												version: "v1.8.2",
												replicas: "3/3",
												status: "Running",
												uptime: "47d 12h",
											},
											{
												name: "quantum-orchestrator",
												env: "staging",
												version: "v2.1.0-rc3",
												replicas: "2/2",
												status: "Running",
												uptime: "8d 4h",
											},
											{
												name: "cascade-analytics",
												env: "production",
												version: "v3.4.1",
												replicas: "4/4",
												status: "Running",
												uptime: "23d 18h",
											},
											{
												name: "nexus-design-system",
												env: "production",
												version: "v1.2.8",
												replicas: "2/2",
												status: "Running",
												uptime: "12d 7h",
											},
										].map((system) => (
											<div
												key={system.name}
												className="rounded-lg border border-white/10 bg-white/5 p-4"
											>
												<div className="mb-3 flex items-start justify-between">
													<div>
														<div className="mb-1 flex items-center gap-3">
															<span className="text-cyan-400">{system.name}</span>
															<span
																className={`rounded-full px-2 py-0.5 text-xs ${
																	system.env === "production"
																		? "border border-green-500/20 bg-green-500/10 text-green-400"
																		: "border border-yellow-500/20 bg-yellow-500/10 text-yellow-400"
																}`}
															>
																{system.env}
															</span>
														</div>
														<div className="text-xs text-gray-500">Version: {system.version}</div>
													</div>
													<div className="text-right">
														<div className="mb-1 text-xs text-green-400">{system.status}</div>
														<div className="text-xs text-gray-600">{system.uptime}</div>
													</div>
												</div>
												<div className="flex items-center justify-between text-xs">
													<span className="text-gray-500">Replicas: {system.replicas}</span>
													<div className="h-1 w-32 overflow-hidden rounded-full bg-white/10">
														<div className="h-full w-full bg-gradient-to-r from-cyan-500 to-violet-500" />
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							)}
						</div>
					</div>

					<div className="absolute -right-6 top-1/4 hidden w-48 rounded-lg border border-violet-500/30 bg-black/95 p-4 shadow-2xl backdrop-blur-xl lg:block">
						<div className="mb-3 text-xs text-violet-400" style={monoStyle}>
							Live Deployment Log
						</div>
						<div className="space-y-2 text-[10px] text-gray-600" style={monoStyle}>
							<div className="flex items-start gap-2">
								<span className="text-green-400">✓</span>
								<span>14:32 Deploy: neural-commerce@v1.8.2</span>
							</div>
							<div className="flex items-start gap-2">
								<span className="text-cyan-400">⟳</span>
								<span>14:28 Build: quantum-orch@v2.1.0-rc3</span>
							</div>
							<div className="flex items-start gap-2">
								<span className="text-green-400">✓</span>
								<span>14:15 Health check: All systems pass</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function SystemsSection() {
	const missions = [
		{
			id: "MISSION-2847",
			title: "Neural Commerce v2.0",
			objective: "Scale AI recommendation engine",
			status: "active" as const,
			priority: "high" as const,
			progress: 67,
			deadline: "Mar 28, 2026",
			metrics: { commits: 142, tests: "98%" },
			gradientClass: "from-cyan-500 to-blue-600",
		},
		{
			id: "MISSION-2851",
			title: "Quantum Task System",
			objective: "Implement distributed job queuing",
			status: "active" as const,
			priority: "critical" as const,
			progress: 45,
			deadline: "Apr 12, 2026",
			metrics: { commits: 87, tests: "94%" },
			gradientClass: "from-violet-500 to-purple-600",
		},
		{
			id: "MISSION-2863",
			title: "Analytics Pipeline Upgrade",
			objective: "Real-time data processing layer",
			status: "review" as const,
			priority: "medium" as const,
			progress: 89,
			deadline: "Mar 15, 2026",
			metrics: { commits: 203, tests: "99%" },
			gradientClass: "from-emerald-500 to-green-600",
		},
		{
			id: "MISSION-2891",
			title: "Design System v2",
			objective: "Component library modernization",
			status: "deployed" as const,
			priority: "low" as const,
			progress: 100,
			deadline: "Completed",
			metrics: { commits: 327, tests: "100%" },
			gradientClass: "from-amber-500 to-orange-600",
		},
	];

	return (
		<section id="systems" className="relative px-6 py-24 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="mb-12 max-w-3xl">
					<div className="mb-4 flex items-center gap-3">
						<div className="h-8 w-1 bg-gradient-to-b from-cyan-500 to-violet-500" />
						<div>
							<div className="mb-1 flex items-center gap-2">
								<Target className="h-4 w-4 text-violet-400" />
								<span
									className="text-xs uppercase tracking-wider text-violet-400"
									style={monoStyle}
								>
									Active Missions
								</span>
							</div>
							<h2 className="text-3xl text-white lg:text-5xl">Current Operations</h2>
						</div>
					</div>
					<p className="border-l-2 border-gray-800 pl-4 text-lg text-gray-500">
						Mission-critical systems in active development. Track progress, objectives, and
						deployment timelines.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
					{missions.map((mission) => (
						<div
							key={mission.id}
							className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-gray-950/80 to-black/80 backdrop-blur-sm transition-all hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]"
						>
							<div className="border-b border-white/10 bg-gradient-to-r from-cyan-950/20 to-violet-950/20 px-6 py-4">
								<div className="mb-2 flex items-start justify-between">
									<div>
										<div className="mb-1 text-xs text-gray-600" style={monoStyle}>
											{mission.id}
										</div>
										<h3 className="text-lg text-white">{mission.title}</h3>
									</div>
									<div
										className={`rounded-full border px-3 py-1 text-xs ${
											mission.priority === "critical"
												? "border-red-500/30 bg-red-500/10 text-red-400"
												: mission.priority === "high"
													? "border-orange-500/30 bg-orange-500/10 text-orange-400"
													: mission.priority === "medium"
														? "border-yellow-500/30 bg-yellow-500/10 text-yellow-400"
														: "border-gray-500/30 bg-gray-500/10 text-gray-400"
										}`}
										style={monoStyle}
									>
										{mission.priority}
									</div>
								</div>
								<p className="text-sm text-gray-400">{mission.objective}</p>
							</div>

							<div className="space-y-4 p-6">
								<div>
									<div className="mb-2 flex items-center justify-between">
										<span className="text-xs text-gray-500" style={monoStyle}>
											PROGRESS
										</span>
										<span className="text-sm text-cyan-400" style={monoStyle}>
											{mission.progress}%
										</span>
									</div>
									<div className="h-2 overflow-hidden rounded-full border border-white/10 bg-white/5">
										<div
											className={`h-full bg-gradient-to-r transition-all ${mission.gradientClass}`}
											style={{ width: `${mission.progress}%` }}
										/>
									</div>
								</div>

								<div className="grid grid-cols-2 gap-4">
									<div className="rounded-lg border border-white/10 bg-white/5 p-3">
										<div className="mb-1 text-xs text-gray-500" style={monoStyle}>
											COMMITS
										</div>
										<div className="text-xl text-white" style={monoStyle}>
											{mission.metrics.commits}
										</div>
									</div>
									<div className="rounded-lg border border-white/10 bg-white/5 p-3">
										<div className="mb-1 text-xs text-gray-500" style={monoStyle}>
											TEST COV
										</div>
										<div className="text-xl text-white" style={monoStyle}>
											{mission.metrics.tests}
										</div>
									</div>
								</div>

								<div className="flex items-center justify-between border-t border-white/10 pt-2">
									<div className="flex items-center gap-2">
										{mission.status === "deployed" ? (
											<CheckCircle2 className="h-4 w-4 text-green-400" />
										) : mission.status === "review" ? (
											<AlertCircle className="h-4 w-4 text-yellow-400" />
										) : (
											<Zap className="h-4 w-4 animate-pulse text-cyan-400" />
										)}
										<span
											className={`text-xs uppercase ${
												mission.status === "deployed"
													? "text-green-400"
													: mission.status === "review"
														? "text-yellow-400"
														: "text-cyan-400"
											}`}
											style={monoStyle}
										>
											{mission.status}
										</span>
									</div>
									<div className="flex items-center gap-2 text-xs text-gray-500">
										<Clock className="h-3.5 w-3.5" />
										<span style={monoStyle}>{mission.deadline}</span>
									</div>
								</div>
							</div>

							<div
								className={`absolute -right-24 -bottom-24 h-48 w-48 rounded-full bg-gradient-to-br opacity-0 blur-3xl transition-opacity group-hover:opacity-10 ${mission.gradientClass}`}
							/>
						</div>
					))}
				</div>

				<div className="mt-12 rounded-xl border border-white/10 bg-gradient-to-br from-gray-950/50 to-black/50 p-8">
					<div className="mb-6 flex items-center gap-3">
						<TrendingUp className="h-5 w-5 text-cyan-400" />
						<h3 className="text-xl text-white">Lab Activity Metrics</h3>
					</div>
					<div className="grid grid-cols-2 gap-6 md:grid-cols-4">
						{[
							{ label: "Active Sprints", value: "4", change: "+2 this quarter", trend: "up" },
							{ label: "Code Velocity", value: "2.4K", change: "lines/week", trend: "up" },
							{ label: "Deploy Frequency", value: "24", change: "per week", trend: "up" },
							{
								label: "Mean Time to Deploy",
								value: "18min",
								change: "-3min vs last month",
								trend: "down",
							},
						].map((stat) => (
							<div key={stat.label} className="border-l-2 border-cyan-500/30 pl-4">
								<div
									className="mb-1 text-xs uppercase tracking-wider text-gray-600"
									style={monoStyle}
								>
									{stat.label}
								</div>
								<div className="mb-1 text-3xl text-white" style={monoStyle}>
									{stat.value}
								</div>
								<div
									className={`text-xs ${stat.trend === "up" ? "text-green-400" : "text-cyan-400"}`}
									style={monoStyle}
								>
									{stat.change}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

function FeaturedProjectsSection() {
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
								<span className="text-xs uppercase tracking-wider text-cyan-400" style={monoStyle}>
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
											className={`rounded-lg border px-3 py-1.5 text-xs backdrop-blur-sm ${
												system.classification === "Production"
													? "border-green-500/30 bg-green-500/10 text-green-400"
													: "border-yellow-500/30 bg-yellow-500/10 text-yellow-400"
											}`}
											style={monoStyle}
										>
											{system.classification}
										</div>
									</div>

									<div className="absolute bottom-4 left-4">
										<div className="mb-1 text-xs text-gray-600" style={monoStyle}>
											{system.id}
										</div>
										<div className="text-sm text-cyan-400" style={monoStyle}>
											{system.codename}
										</div>
									</div>
								</div>

								<div className="p-6 lg:col-span-7 lg:p-8">
									<div className="mb-6">
										<h3 className="mb-3 text-2xl text-white transition-colors group-hover:text-cyan-400">
											{system.title}
										</h3>
										<div className="flex items-start gap-2">
											<span className="mt-0.5 shrink-0 text-xs text-gray-600" style={monoStyle}>
												OBJECTIVE:
											</span>
											<p className="text-sm leading-relaxed text-gray-400">{system.objective}</p>
										</div>
									</div>

									<div className="mb-6">
										<div className="mb-2 text-xs text-gray-600" style={monoStyle}>
											STACK:
										</div>
										<div className="flex flex-wrap gap-2">
											{system.stack.map((tech) => (
												<span
													key={tech}
													className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400"
													style={monoStyle}
												>
													{tech}
												</span>
											))}
										</div>
									</div>

									<div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
										<div className="space-y-3">
											<div className="text-xs text-gray-600" style={monoStyle}>
												METRICS:
											</div>
											{system.metrics.map(([key, value]) => (
												<div key={key} className="flex items-baseline justify-between gap-4">
													<span className="text-xs uppercase text-gray-500">{key}</span>
													<span className="text-sm text-white" style={monoStyle}>
														{value}
													</span>
												</div>
											))}
										</div>

										<div className="space-y-3">
											<div className="text-xs text-gray-600" style={monoStyle}>
												DEPLOYMENT:
											</div>
											<div className="flex items-baseline justify-between gap-4">
												<span className="text-xs text-gray-500">ENV</span>
												<span className="text-sm text-white" style={monoStyle}>
													{system.deployment.env}
												</span>
											</div>
											<div className="flex items-baseline justify-between gap-4">
												<span className="text-xs text-gray-500">VERSION</span>
												<span className="text-sm text-white" style={monoStyle}>
													{system.deployment.version}
												</span>
											</div>
											<div className="flex items-baseline justify-between gap-4">
												<span className="text-xs text-gray-500">REPLICAS</span>
												<span className="text-sm text-white" style={monoStyle}>
													{system.deployment.replicas}
												</span>
											</div>
										</div>
									</div>

									<div className="flex flex-wrap items-center gap-4 border-t border-white/10 pt-4">
										<button
											type="button"
											className="inline-flex items-center gap-2 text-sm text-cyan-400 transition-colors hover:text-cyan-300"
											style={monoStyle}
										>
											<ExternalLink className="h-4 w-4" />
											View System
										</button>
										<button
											type="button"
											className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-400"
											style={monoStyle}
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
								<span className="text-xs uppercase text-gray-600" style={monoStyle}>
									{stat.label}
								</span>
							</div>
							<div className="mb-1 text-3xl text-white" style={monoStyle}>
								{stat.value}
							</div>
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

function LogsSection() {
	const logs = [
		{
			id: "LOG-0847",
			date: "2026-03-08",
			timestamp: "14:32 UTC",
			title: "Building Resilient Microservices with Event Sourcing",
			summary:
				"Deep dive into implementing event sourcing patterns for distributed systems. Lessons learned from production deployments and handling edge cases at scale.",
			readTime: "12 min",
			category: "Architecture",
			tags: ["event-sourcing", "distributed-systems", "resilience"],
			status: "published",
		},
		{
			id: "LOG-0843",
			date: "2026-03-03",
			timestamp: "09:15 UTC",
			title: "API Design Principles: Developer Experience First",
			summary:
				"Exploring principles of great API design through real examples. From versioning strategies to documentation that developers actually want to read and use.",
			readTime: "8 min",
			category: "Design",
			tags: ["api-design", "dx", "documentation"],
			status: "published",
		},
		{
			id: "LOG-0839",
			date: "2026-02-28",
			timestamp: "16:47 UTC",
			title: "Zero-Downtime Deployments: A Production Story",
			summary:
				"How we achieved seamless deployments across 50+ services. Blue-green strategies, canary releases, and automated rollback mechanisms in practice.",
			readTime: "15 min",
			category: "DevOps",
			tags: ["deployment", "kubernetes", "automation"],
			status: "published",
		},
	];

	return (
		<section id="logs" className="relative px-6 py-32 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="mb-16 max-w-3xl">
					<div className="mb-4 flex items-center gap-3">
						<div className="h-8 w-1 bg-gradient-to-b from-cyan-500 to-violet-500" />
						<div>
							<div className="mb-1 flex items-center gap-2">
								<FileText className="h-4 w-4 text-violet-400" />
								<span
									className="text-xs uppercase tracking-wider text-violet-400"
									style={monoStyle}
								>
									Field Logs
								</span>
							</div>
							<h2 className="text-3xl text-white lg:text-5xl">Builder&apos;s Journal</h2>
						</div>
					</div>
					<p className="border-l-2 border-gray-800 pl-4 text-lg text-gray-500">
						Technical notes, architecture decisions, and lessons from the field. Documenting the
						journey from concept to production.
					</p>
				</div>

				<div className="space-y-4">
					{logs.map((log) => (
						<article
							key={log.id}
							className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-gray-950/50 to-black/50 backdrop-blur-sm transition-all hover:border-cyan-500/30 hover:bg-gray-950/70"
						>
							<div className="grid gap-0 lg:grid-cols-12">
								<div className="border-b border-white/10 bg-black/30 p-6 lg:col-span-3 lg:border-r lg:border-b-0">
									<div className="space-y-4">
										<div>
											<div className="mb-1 text-xs text-gray-600" style={monoStyle}>
												LOG_ID
											</div>
											<div className="text-sm text-cyan-400" style={monoStyle}>
												{log.id}
											</div>
										</div>

										<div>
											<div className="mb-1 text-xs text-gray-600" style={monoStyle}>
												TIMESTAMP
											</div>
											<div className="text-sm text-white" style={monoStyle}>
												{log.date}
											</div>
											<div className="text-xs text-gray-500" style={monoStyle}>
												{log.timestamp}
											</div>
										</div>

										<div>
											<div className="mb-1 text-xs text-gray-600" style={monoStyle}>
												CATEGORY
											</div>
											<div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1">
												<Code2 className="h-3 w-3 text-violet-400" />
												<span className="text-xs text-violet-400" style={monoStyle}>
													{log.category}
												</span>
											</div>
										</div>

										<div>
											<div className="mb-1 text-xs text-gray-600" style={monoStyle}>
												READ_TIME
											</div>
											<div className="flex items-center gap-2 text-sm text-gray-400">
												<Clock className="h-3.5 w-3.5" />
												<span style={monoStyle}>{log.readTime}</span>
											</div>
										</div>

										<div>
											<div className="mb-1 text-xs text-gray-600" style={monoStyle}>
												STATUS
											</div>
											<div className="inline-flex items-center gap-2">
												<div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
												<span className="text-xs uppercase text-green-400" style={monoStyle}>
													{log.status}
												</span>
											</div>
										</div>
									</div>
								</div>

								<div className="p-6 lg:col-span-9 lg:p-8">
									<h3 className="mb-4 text-2xl leading-tight text-white transition-colors group-hover:text-cyan-400">
										{log.title}
									</h3>

									<p className="mb-6 text-sm leading-relaxed text-gray-400 lg:text-base">
										{log.summary}
									</p>

									<div className="mb-6 flex items-center gap-3">
										<Hash className="h-4 w-4 text-gray-600" />
										<div className="flex flex-wrap gap-2">
											{log.tags.map((tag) => (
												<span
													key={tag}
													className="cursor-pointer text-xs text-gray-500 transition-colors hover:text-cyan-400"
													style={monoStyle}
												>
													{tag}
												</span>
											))}
										</div>
									</div>

									<button
										type="button"
										className="flex items-center gap-2 text-sm text-cyan-400 opacity-70 transition-opacity group-hover:opacity-100"
										style={monoStyle}
									>
										Read Full Log
										<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
									</button>
								</div>
							</div>

							<div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-cyan-500 via-violet-500 to-cyan-500 opacity-0 transition-opacity group-hover:opacity-100" />
						</article>
					))}
				</div>

				<div className="mt-12 rounded-xl border border-white/10 bg-gradient-to-r from-gray-950/50 to-black/50 p-8">
					<div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
						<div>
							<h3 className="mb-2 text-lg text-white">Complete Log Archive</h3>
							<p className="text-sm text-gray-500" style={monoStyle}>
								47 entries • Last updated 2 days ago • All categories
							</p>
						</div>
						<button
							type="button"
							className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 text-sm text-cyan-300 transition-all hover:border-cyan-500/50 hover:bg-cyan-500/20"
							style={monoStyle}
						>
							Access Archive →
						</button>
					</div>
				</div>
			</div>
		</section>
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
