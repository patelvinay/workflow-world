import { Database, Layers } from "lucide-react";
import { quickStats } from "../data/quickStats";
import { envDistribution } from "../data/envDistribution";

export function SystemsHeroSection() {
	return (
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
										<span className="font-mono-ui text-xs uppercase tracking-wider text-cyan-400">
											System Registry • Deployment Index
										</span>
									</div>
									<h1 className="text-5xl text-white lg:text-7xl">Systems Built</h1>
								</div>
							</div>

							<p className="mb-6 max-w-2xl border-l-2 border-gray-800 pl-6 text-lg leading-relaxed text-gray-400">
								A comprehensive archive of production systems, experimental platforms, and
								operational tooling. Each entry represents shipped code, real-world deployments, and
								engineering challenges solved in the field.
							</p>

							<div className="font-mono-ui flex flex-wrap items-center gap-3 text-xs text-gray-600">
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
									<div className="mb-1 text-3xl text-white font-mono-ui">{stat.value}</div>
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
										<span className="text-sm text-violet-400 font-mono-ui">
											Deployment Registry
										</span>
									</div>
									<div className="flex items-center gap-2">
										<div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
										<span className="text-xs text-green-400 font-mono-ui">LIVE</span>
									</div>
								</div>
							</div>

							<div className="p-6">
								<div className="mb-6">
									<div className="mb-4 text-xs uppercase tracking-wider text-gray-600 font-mono-ui">
										→ Environment Distribution
									</div>
									<div className="space-y-3">
										{envDistribution.map((item) => (
											<div key={item.env}>
												<div className="mb-2 flex items-center justify-between">
													<div className="flex items-center gap-3">
														<div className={`h-2 w-2 rounded-full ${item.dotClass}`} />
														<span className="text-sm text-gray-400 font-mono-ui">{item.env}</span>
													</div>
													<div className="flex items-center gap-3">
														<span className="text-sm text-white font-mono-ui">{item.count}</span>
														<span className="w-12 text-right text-xs text-gray-600 font-mono-ui">
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
									<div className="mb-4 text-xs uppercase tracking-wider text-gray-600 font-mono-ui">
										→ System Health Metrics
									</div>
									<div className="grid grid-cols-2 gap-4">
										<div className="rounded-lg border border-white/10 bg-white/5 p-3">
											<div className="mb-1 text-xs text-gray-600 font-mono-ui">UPTIME_AVG</div>
											<div className="text-xl text-green-400 font-mono-ui">99.94%</div>
											<div className="mt-1 text-xs text-gray-700">last 90 days</div>
										</div>
										<div className="rounded-lg border border-white/10 bg-white/5 p-3">
											<div className="mb-1 text-xs text-gray-600 font-mono-ui">DEPLOY_TIME</div>
											<div className="text-xl text-cyan-400 font-mono-ui">18min</div>
											<div className="mt-1 text-xs text-gray-700">average</div>
										</div>
									</div>
								</div>

								<div className="mt-6 border-t border-white/10 pt-6">
									<div className="mb-3 text-xs uppercase tracking-wider text-gray-600 font-mono-ui">
										→ Latest Registry Updates
									</div>
									<div className="space-y-2 text-xs text-gray-700 font-mono-ui">
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
								<line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgb(6,182,212)" strokeWidth="1" />
								<circle cx="10%" cy="50%" r="3" fill="rgb(6,182,212)" />
								<circle cx="90%" cy="50%" r="3" fill="rgb(139,92,246)" />
							</svg>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
