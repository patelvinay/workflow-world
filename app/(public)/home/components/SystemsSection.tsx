import { AlertCircle, CheckCircle2, Clock, Target, TrendingUp, Zap } from "lucide-react";

export function SystemsSection() {
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
								<span className="text-xs uppercase tracking-wider text-violet-400 font-mono-ui">
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
										<div className="mb-1 text-xs text-gray-600 font-mono-ui">{mission.id}</div>
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
														: "border-gray-500/30 bg-gray-500/10 text-gray-400 font-mono-ui"
										}`}
									>
										{mission.priority}
									</div>
								</div>
								<p className="text-sm text-gray-400">{mission.objective}</p>
							</div>

							<div className="space-y-4 p-6">
								<div>
									<div className="mb-2 flex items-center justify-between">
										<span className="text-xs text-gray-500 font-mono-ui">PROGRESS</span>
										<span className="text-sm text-cyan-400 font-mono-ui">{mission.progress}%</span>
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
										<div className="mb-1 text-xs text-gray-500 font-mono-ui">COMMITS</div>
										<div className="text-xl text-white font-mono-ui">{mission.metrics.commits}</div>
									</div>
									<div className="rounded-lg border border-white/10 bg-white/5 p-3">
										<div className="mb-1 text-xs text-gray-500 font-mono-ui">TEST COV</div>
										<div className="text-xl text-white font-mono-ui">{mission.metrics.tests}</div>
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
											className={`text-xs uppercase font-mono-ui ${
												mission.status === "deployed"
													? "text-green-400"
													: mission.status === "review"
														? "text-yellow-400"
														: "text-cyan-400"
											}`}
										>
											{mission.status}
										</span>
									</div>
									<div className="flex items-center gap-2 text-xs text-gray-500">
										<Clock className="h-3.5 w-3.5" />
										<span className="font-mono-ui">{mission.deadline}</span>
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
								<div className="mb-1 text-xs uppercase tracking-wider text-gray-600 font-mono-ui">
									{stat.label}
								</div>
								<div className="mb-1 text-3xl text-whitefont-mono-ui">{stat.value}</div>
								<div
									className={`text-xs font-mono-ui ${stat.trend === "up" ? "text-green-400" : "text-cyan-400"}`}
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
