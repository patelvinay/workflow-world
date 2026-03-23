import { ArrowRight, Clock, Code2, FileText, Hash } from "lucide-react";

export function LogsSection() {
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
								<span className="text-xs uppercase tracking-wider text-violet-400 font-mono-ui">
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
											<div className="mb-1 text-xs text-gray-600 font-mono-ui">LOG_ID</div>
											<div className="text-sm text-cyan-400 font-mono-ui">{log.id}</div>
										</div>

										<div>
											<div className="mb-1 text-xs text-gray-600 font-mono-ui">TIMESTAMP</div>
											<div className="text-sm text-white font-mono-ui">{log.date}</div>
											<div className="text-xs text-gray-500 font-mono-ui">{log.timestamp}</div>
										</div>

										<div>
											<div className="mb-1 text-xs text-gray-600 font-mono-ui">CATEGORY</div>
											<div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1">
												<Code2 className="h-3 w-3 text-violet-400" />
												<span className="text-xs text-violet-400 font-mono-ui">{log.category}</span>
											</div>
										</div>

										<div>
											<div className="mb-1 text-xs text-gray-600 font-mono-ui">READ_TIME</div>
											<div className="flex items-center gap-2 text-sm text-gray-400">
												<Clock className="h-3.5 w-3.5" />
												<span className="font-mono-ui">{log.readTime}</span>
											</div>
										</div>

										<div>
											<div className="mb-1 text-xs text-gray-600 font-mono-ui">STATUS</div>
											<div className="inline-flex items-center gap-2">
												<div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
												<span className="text-xs uppercase text-green-400 font-mono-ui">
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
													className="cursor-pointer text-xs text-gray-500 transition-colors hover:text-cyan-400 font-mono-ui"
												>
													{tag}
												</span>
											))}
										</div>
									</div>

									<button
										type="button"
										className="flex items-center gap-2 text-sm text-cyan-400 opacity-70 transition-opacity font-mono-ui group-hover:opacity-100"
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
							<p className="text-sm text-gray-500 font-mono-ui">
								47 entries • Last updated 2 days ago • All categories
							</p>
						</div>
						<button
							type="button"
							className="font-mono-ui rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 text-sm text-cyan-300 transition-all hover:border-cyan-500/50 hover:bg-cyan-500/20"
						>
							Access Archive →
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
