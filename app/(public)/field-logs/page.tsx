"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Calendar, FileText, Radio, Tag } from "lucide-react";
import { ArchiveFilterBar } from "@/app/components/layout/archive-filter-bar";
import { FeaturedLog } from "@/app/components/layout/featured-log";
import { LogActivityStrip } from "@/app/components/layout/log-activity-strip";
import { LogCard, type LogCardEntry } from "@/app/components/layout/log-card";

const monoStyle = {
	fontFamily:
		"var(--font-geist-mono, ui-monospace), SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
};

type LogEntry = LogCardEntry & {
	id: string;
	featured?: boolean;
	status: "published";
};

type FilterState = {
	search: string;
	tags: "all" | "ai-ml" | "architecture" | "web-dev" | "automation" | "tools";
	sort: "latest" | "oldest" | "read-time" | "featured";
};

const logs: LogEntry[] = [
	{
		id: "LOG-047",
		slug: "neural-search-architecture",
		title: "Building a Neural Search Engine: From Vector Embeddings to Production",
		excerpt:
			"Deep dive into designing and deploying a semantic search system using OpenAI embeddings, Pinecone vector database, and Next.js. Lessons learned from handling 10M+ queries.",
		coverImage:
			"https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMG5ldXJhbCUyMG5ldHdvcmt8ZW58MXx8fHwxNzQyMDI1MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
		tags: ["AI/ML", "Architecture", "Next.js"],
		publishedDate: "2026-03-08",
		readTime: "12 min",
		featured: true,
		status: "published",
	},
	{
		id: "LOG-046",
		slug: "micro-frontend-orchestration",
		title: "Micro-Frontend Orchestration with Module Federation",
		excerpt:
			"How we built a scalable micro-frontend architecture for a multi-tenant platform using Webpack 5 Module Federation and runtime composition.",
		coverImage:
			"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3NlcnZpY2VzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc0MjAyNTIwMHww&ixlib=rb-4.1.0&q=80&w=1080",
		tags: ["Architecture", "React", "Web Dev"],
		publishedDate: "2026-03-01",
		readTime: "10 min",
		status: "published",
	},
	{
		id: "LOG-045",
		slug: "real-time-collaboration-crdt",
		title: "Real-Time Collaboration with CRDTs and WebSockets",
		excerpt:
			"Implementing conflict-free replicated data types for a collaborative document editor. Exploring Yjs, operational transforms, and sync strategies.",
		coverImage:
			"https://images.unsplash.com/photo-1516321497487-e288fb19713f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwdGltZSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzQyMDI1MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
		tags: ["Web Dev", "Experiments", "TypeScript"],
		publishedDate: "2026-02-22",
		readTime: "15 min",
		status: "published",
	},
	{
		id: "LOG-044",
		slug: "shopify-automation-workflows",
		title: "Automating E-Commerce Workflows with Shopify Functions",
		excerpt:
			"Building custom discount logic, inventory sync, and order automation using Shopify Functions, GraphQL Admin API, and serverless architecture.",
		coverImage:
			"https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc0MjAyNTIwMHww&ixlib=rb-4.1.0&q=80&w=1080",
		tags: ["Automation", "Shopify", "Tools"],
		publishedDate: "2026-02-15",
		readTime: "8 min",
		status: "published",
	},
	{
		id: "LOG-043",
		slug: "edge-computing-cloudflare-workers",
		title: "Edge Computing Patterns with Cloudflare Workers",
		excerpt:
			"Exploring edge-first architecture, distributed caching strategies, and A/B testing at the edge using Cloudflare Workers and KV storage.",
		coverImage:
			"https://images.unsplash.com/photo-1544197150-b99a580bb7a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZ3xlbnwxfHx8fDE3NDIwMjUyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
		tags: ["Web Dev", "Architecture", "Performance"],
		publishedDate: "2026-02-08",
		readTime: "11 min",
		status: "published",
	},
	{
		id: "LOG-042",
		slug: "observability-distributed-tracing",
		title: "Observability in Distributed Systems: Tracing, Metrics, Logs",
		excerpt:
			"Setting up comprehensive observability with OpenTelemetry, Grafana, and custom instrumentation for microservices debugging.",
		coverImage:
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwbW9uaXRvcmluZ3xlbnwxfHx8fDE3NDIwMjUyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
		tags: ["Tools", "Architecture", "DevOps"],
		publishedDate: "2026-02-01",
		readTime: "13 min",
		status: "published",
	},
	{
		id: "LOG-041",
		slug: "ai-code-generation-experiments",
		title: "Experiments with AI Code Generation and AST Transformations",
		excerpt:
			"Testing Claude, GPT-4, and custom fine-tuned models for code generation, refactoring automation, and AST-based code analysis.",
		coverImage:
			"https://images.unsplash.com/photo-1635070041078-e363dbe005cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGNvZGluZ3xlbnwxfHx8fDE3NDIwMjUyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
		tags: ["AI/ML", "Experiments", "Tools"],
		publishedDate: "2026-01-25",
		readTime: "14 min",
		status: "published",
	},
	{
		id: "LOG-040",
		slug: "database-migration-zero-downtime",
		title: "Zero-Downtime Database Migrations at Scale",
		excerpt:
			"Strategies for migrating production databases with millions of rows using blue-green deployments, shadow writes, and gradual rollouts.",
		coverImage:
			"https://images.unsplash.com/photo-1544383835-bda2bc66a55d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMHNlcnZlcnxlbnwxfHx8fDE3NDIwMjUyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
		tags: ["Architecture", "DevOps", "Database"],
		publishedDate: "2026-01-18",
		readTime: "9 min",
		status: "published",
	},
];

const tagOptions = [
	{ value: "all", label: "All Tags" },
	{ value: "ai-ml", label: "AI/ML" },
	{ value: "architecture", label: "Architecture" },
	{ value: "web-dev", label: "Web Dev" },
	{ value: "automation", label: "Automation" },
	{ value: "tools", label: "Tools" },
] as const;

const quickStats = [
	{
		label: "Published Logs",
		value: "47",
		sublabel: "total entries",
		cardClass: "border-cyan-500/20 bg-cyan-500/5",
	},
	{
		label: "Active Topics",
		value: "12",
		sublabel: "categories",
		cardClass: "border-violet-500/20 bg-violet-500/5",
	},
	{
		label: "Avg Read Time",
		value: "11min",
		sublabel: "per log",
		cardClass: "border-green-500/20 bg-green-500/5",
	},
] as const;

const popularTopics = ["AI/ML", "Architecture", "Web Dev", "Automation", "Tools"] as const;

function matchesTagFilter(log: LogEntry, filter: FilterState["tags"]) {
	if (filter === "all") {
		return true;
	}

	const normalizedTags = log.tags.map((tag) => tag.toLowerCase());

	if (filter === "ai-ml") {
		return normalizedTags.some((tag) => tag.includes("ai/ml"));
	}
	if (filter === "architecture") {
		return normalizedTags.some((tag) => tag.includes("architecture"));
	}
	if (filter === "web-dev") {
		return normalizedTags.some((tag) => tag.includes("web dev"));
	}
	if (filter === "automation") {
		return normalizedTags.some((tag) => tag.includes("automation"));
	}

	return normalizedTags.some((tag) => tag.includes("tools"));
}

function getReadTimeMinutes(log: LogEntry) {
	return Number.parseInt(log.readTime, 10);
}

export default function FieldLogsPage() {
	const [activeFilters, setActiveFilters] = useState<FilterState>({
		search: "",
		tags: "all",
		sort: "latest",
	});

	const filteredLogs = logs
		.filter((log) => {
			if (!matchesTagFilter(log, activeFilters.tags)) {
				return false;
			}

			const search = activeFilters.search.trim().toLowerCase();
			if (!search) {
				return true;
			}

			return [log.id, log.title, log.excerpt, ...log.tags].join(" ").toLowerCase().includes(search);
		})
		.sort((a, b) => {
			if (activeFilters.sort === "featured") {
				return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
			}
			if (activeFilters.sort === "read-time") {
				return getReadTimeMinutes(b) - getReadTimeMinutes(a);
			}
			if (activeFilters.sort === "oldest") {
				return a.publishedDate.localeCompare(b.publishedDate);
			}
			return b.publishedDate.localeCompare(a.publishedDate);
		});

	const featuredLog = filteredLogs.find((log) => log.featured);
	const regularLogs = filteredLogs.filter((log) => !log.featured);

	return (
		<div className="min-h-screen bg-black text-white">
			<div className="fixed inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:80px_80px] opacity-50" />

			<div className="relative">
				<nav className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
					<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
						<Link
							href="/"
							className="inline-flex items-center gap-2 text-cyan-400 transition-colors hover:text-sky-300"
							style={monoStyle}
						>
							<ArrowLeft className="h-4 w-4" />
							<span className="text-sm">Return to Lab</span>
						</Link>
						<div className="flex items-center gap-2">
							<div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
							<span className="text-xs text-gray-500" style={monoStyle}>
								ARCHIVE SYNCHRONIZED
							</span>
						</div>
					</div>
				</nav>

				<section className="relative overflow-hidden px-6 py-24 lg:px-8">
					<svg
						className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<line
							x1="0"
							y1="40%"
							x2="100%"
							y2="40%"
							stroke="rgb(6,182,212)"
							strokeWidth="1"
							strokeDasharray="6 6"
						/>
						<line
							x1="30%"
							y1="0"
							x2="30%"
							y2="100%"
							stroke="rgb(139,92,246)"
							strokeWidth="1"
							strokeDasharray="6 6"
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
												<FileText className="h-5 w-5 text-cyan-400" />
												<span
													className="text-xs uppercase tracking-wider text-cyan-400"
													style={monoStyle}
												>
													Technical Archive • Builder Records
												</span>
											</div>
											<h1 className="text-5xl text-white lg:text-7xl">Field Logs</h1>
										</div>
									</div>

									<p className="mb-6 max-w-2xl border-l-2 border-gray-800 pl-6 text-lg leading-relaxed text-gray-400">
										Documentation of experiments, system builds, and technical discoveries from
										the field. Each log captures lessons learned, problems solved, and decisions
										made while shipping production systems.
									</p>

									<div
										className="flex flex-wrap items-center gap-3 text-xs text-gray-600"
										style={monoStyle}
									>
										<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
											TOTAL_LOGS: 47
										</span>
										<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
											LAST_PUBLISHED: 2026-03-08
										</span>
									</div>
								</div>

								<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
									{quickStats.map((stat) => (
										<div key={stat.label} className={`rounded-lg border p-4 ${stat.cardClass}`}>
											<div className="mb-1 text-3xl text-white" style={monoStyle}>
												{stat.value}
											</div>
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
												<FileText className="h-4 w-4 text-violet-400" />
												<span className="text-sm text-violet-400" style={monoStyle}>
													Log Stream Console
												</span>
											</div>
											<div className="flex items-center gap-2">
												<div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
												<span className="text-xs text-green-400" style={monoStyle}>
													SYNCED
												</span>
											</div>
										</div>
									</div>

									<div className="p-6">
										<div className="mb-6">
											<div
												className="mb-4 text-xs uppercase tracking-wider text-gray-600"
												style={monoStyle}
											>
												→ Recent Publications
											</div>
											<div className="space-y-3">
												{logs.slice(0, 5).map((log) => (
													<div
														key={log.id}
														className="flex items-start gap-3 border-b border-white/5 py-2 last:border-0"
													>
														<div className="pt-1">
															<div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
														</div>
														<div className="min-w-0 flex-1">
															<div className="mb-0.5 text-xs text-gray-600" style={monoStyle}>
																{log.id}
															</div>
															<div className="truncate text-sm text-gray-400">{log.title}</div>
															<div
																className="mt-1 flex items-center gap-2 text-xs text-gray-700"
																style={monoStyle}
															>
																<Calendar className="h-3 w-3" />
																<span>{log.publishedDate}</span>
															</div>
														</div>
													</div>
												))}
											</div>
										</div>

										<div className="border-t border-white/10 pt-6">
											<div
												className="mb-4 text-xs uppercase tracking-wider text-gray-600"
												style={monoStyle}
											>
												→ Popular Topics
											</div>
											<div className="flex flex-wrap gap-2">
												{popularTopics.map((topic) => (
													<span
														key={topic}
														className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-400"
														style={monoStyle}
													>
														{topic}
													</span>
												))}
											</div>
										</div>
									</div>

									<svg
										className="pointer-events-none absolute inset-0 h-full w-full opacity-10"
										xmlns="http://www.w3.org/2000/svg"
									>
										<line
											x1="0"
											y1="30%"
											x2="100%"
											y2="30%"
											stroke="rgb(6,182,212)"
											strokeWidth="1"
										/>
										<circle cx="20%" cy="30%" r="3" fill="rgb(6,182,212)" />
										<circle cx="80%" cy="30%" r="3" fill="rgb(139,92,246)" />
									</svg>
								</div>
							</div>
						</div>
					</div>
				</section>

				<div className="sticky top-[72px] z-40 border-y border-white/10 bg-black/80 backdrop-blur-xl">
					<div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
						<ArchiveFilterBar
							searchValue={activeFilters.search}
							onSearchChange={(value) =>
								setActiveFilters((prev) => ({ ...prev, search: value }))
							}
							searchPlaceholder="Search by title, excerpt, tag, or log ID..."
							filterGroups={[
								{
									label: "TOPIC_FILTER:",
									value: activeFilters.tags,
									onChange: (value) =>
										setActiveFilters((prev) => ({
											...prev,
											tags: value as FilterState["tags"],
										})),
									options: tagOptions,
									accent: "violet",
									className: "lg:col-span-10",
								},
							]}
							sortConfig={{
								label: "SORT_BY:",
								value: activeFilters.sort,
								onChange: (value) =>
									setActiveFilters((prev) => ({
										...prev,
										sort: value as FilterState["sort"],
									})),
								options: [
									{ value: "latest", label: "Latest" },
									{ value: "oldest", label: "Oldest" },
									{ value: "read-time", label: "Read Time" },
									{ value: "featured", label: "Featured" },
								],
							}}
						/>
					</div>
				</div>

				{featuredLog && (
					<section className="px-6 py-16 lg:px-8">
						<div className="mx-auto max-w-7xl">
							<FeaturedLog log={featuredLog} />
						</div>
					</section>
				)}

				<section className="px-6 py-16 lg:px-8">
					<div className="mx-auto max-w-7xl">
						<div className="mb-12 flex items-center justify-between">
							<div>
								<h2 className="mb-2 text-xl text-white" style={monoStyle}>
									Archive Index
								</h2>
								<p className="text-sm text-gray-500" style={monoStyle}>
									{regularLogs.length} technical logs available
								</p>
							</div>
						</div>

						<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
							{regularLogs.map((log) => (
								<LogCard key={log.id} log={log} />
							))}
						</div>
					</div>
				</section>

				<section className="border-t border-white/10 px-6 py-16 lg:px-8">
					<div className="mx-auto max-w-7xl">
						<LogActivityStrip />
					</div>
				</section>

				<section id="dispatch" className="border-t border-white/10 px-6 py-24 lg:px-8">
					<div className="mx-auto max-w-4xl">
						<div className="relative overflow-hidden rounded-2xl border border-violet-500/20 bg-gradient-to-br from-gray-950 to-black p-12">
							<div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 opacity-10 blur-3xl" />

							<div className="relative">
								<div className="mb-4 flex items-center gap-2">
									<Radio className="h-5 w-5 text-violet-400" />
									<span
										className="text-xs uppercase tracking-wider text-violet-400"
										style={monoStyle}
									>
										Dispatch Terminal
									</span>
								</div>

								<h2 className="mb-4 text-4xl text-white">Join the Dispatch</h2>
								<p className="mb-8 max-w-2xl text-lg text-gray-400">
									Receive monthly field notes, system updates, and technical insights directly in
									your inbox. No spam, just builder-to-builder updates.
								</p>

								<form className="flex flex-col gap-4 sm:flex-row">
									<input
										type="email"
										placeholder="engineer@example.com"
										className="flex-1 rounded-lg border border-white/10 bg-black/40 px-6 py-4 font-mono text-white placeholder:text-gray-600 transition-all focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 focus:outline-none"
									/>
									<button
										type="submit"
										className="rounded-lg bg-gradient-to-r from-violet-500 to-cyan-500 px-8 py-4 text-white transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
										style={monoStyle}
									>
										Subscribe
									</button>
								</form>

								<div className="mt-6 flex items-center gap-2 text-xs text-gray-600" style={monoStyle}>
									<div className="h-1 w-1 rounded-full bg-green-400" />
									<span>327 builders subscribed</span>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="border-t border-white/10 px-6 py-24 lg:px-8">
					<div className="mx-auto max-w-7xl">
						<div className="grid gap-6 md:grid-cols-3">
							<Link
								href="/systems"
								className="group rounded-xl border border-white/10 bg-gradient-to-br from-gray-950/50 to-black/50 p-8 transition-all hover:border-cyan-500/30"
							>
								<FileText className="mb-4 h-8 w-8 text-cyan-400" />
								<h3 className="mb-2 text-xl text-white transition-colors group-hover:text-cyan-400">
									Systems Built
								</h3>
								<p className="text-sm text-gray-500">
									Explore deployed systems and production builds
								</p>
							</Link>

							<Link
								href="/"
								className="group rounded-xl border border-white/10 bg-gradient-to-br from-gray-950/50 to-black/50 p-8 transition-all hover:border-violet-500/30"
							>
								<Radio className="mb-4 h-8 w-8 text-violet-400" />
								<h3 className="mb-2 text-xl text-white transition-colors group-hover:text-violet-400">
									Control Center
								</h3>
								<p className="text-sm text-gray-500">Return to the main lab interface</p>
							</Link>

							<Link
								href="/#status"
								className="group rounded-xl border border-white/10 bg-gradient-to-br from-gray-950/50 to-black/50 p-8 transition-all hover:border-green-500/30"
							>
								<Tag className="mb-4 h-8 w-8 text-green-400" />
								<h3 className="mb-2 text-xl text-white transition-colors group-hover:text-green-400">
									Current Status
								</h3>
								<p className="text-sm text-gray-500">View active missions and ongoing work</p>
							</Link>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
