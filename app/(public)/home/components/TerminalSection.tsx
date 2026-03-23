import { useState } from "react";
import { Activity, Terminal, Cpu, Database, HardDrive } from "lucide-react";
export function TerminalSection() {
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
								<span className="text-xs uppercase tracking-wider text-cyan-400">
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
								<span className="text-xs text-gray-600 font-mono-ui">
									outpost://terminal-01.workflow-world.dev
								</span>
							</div>

							<div className="flex items-center gap-3">
								<div className="flex items-center gap-2 text-xs font-mono-ui">
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
									className={`relative flex items-center gap-2 px-4 py-3 text-xs transition-all lg:px-6 font-mono-ui ${
										activeTab === tab.id
											? "bg-cyan-500/5 text-cyan-400"
											: "text-gray-600 hover:bg-white/5 hover:text-gray-400"
									}`}
								>
									<tab.icon className="h-3.5 w-3.5" />
									<span className="hidden sm:inline">{tab.label}</span>
									{activeTab === tab.id && (
										<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-violet-500" />
									)}
								</button>
							))}
						</div>

						<div className="min-h-[400px] p-6 text-sm font-mono-ui">
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
						<div className="mb-3 text-xs text-violet-400 font-mono-ui">Live Deployment Log</div>
						<div className="space-y-2 text-[10px] text-gray-600 font-mono-ui">
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
