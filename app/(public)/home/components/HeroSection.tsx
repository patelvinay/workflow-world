import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/app/(public)/constants/fadeUp";
import Link from "next/link";
import { Activity, ArrowRight, FileText, GitBranch, Layers, Terminal } from "lucide-react";
export function HeroSection() {
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
			<div className="relative z-20 mx-auto flex max-w-7xl flex-col justify-center gap-10 lg:flex-row lg:tems-center lg:justify-center lg:gap-20">
				<motion.div {...fadeUp} className="space-y-7 ">
					<span className="inline-flex items-center gap-2 rounded-md border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-[10px] text-cyan-300 font-mono-ui">
						<span className="relative flex size-2">
							<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75"></span>
							<span className="relative inline-flex size-2 rounded-full bg-cyan-300"></span>
						</span>
						OPERATOR_ID: WW-2847 • CLEARANCE: ARCHITECT
					</span>
					<h1 className="text-5xl lg:text-7xl tracking-tight leading-[1.1] cursor-default">
						<span className="mb-2 block text-2xl text-gray-500 lg:text-3xl font-mono-ui">
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
									<span className="text-xs text-gray-500 font-mono-ui">workflow-world.local</span>
								</div>
								<div className="flex items-center gap-2">
									<Activity className="h-3 w-3 animate-pulse text-green-400" />
									<span className="text-xs text-green-400 font-mono-ui">LIVE</span>
								</div>
							</div>

							<div className="h-80 space-y-3 overflow-hidden p-4 text-xs font-mono-ui">
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
