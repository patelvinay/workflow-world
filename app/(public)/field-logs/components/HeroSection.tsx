"use client";

import { Calendar, FileText } from "lucide-react";
import { quickStats } from "../data/quickStats";
import { logs } from "../data/logs";
import { popularTopics } from "../data/popularTopics";

export function HeroSection() {
	return (
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
								<div className="h-12 w-1 bg-linear-to-b from-cyan-500 to-violet-500" />
								<div>
									<div className="mb-2 flex items-center gap-2">
										<FileText className="h-5 w-5 text-cyan-400" />
										<span className="text-xs uppercase tracking-wider text-cyan-400 font-mono-ui">
											Technical Archive • Builder Records
										</span>
									</div>
									<h1 className="text-5xl text-white lg:text-7xl">Field Logs</h1>
								</div>
							</div>

							<p className="mb-6 max-w-2xl border-l-2 border-gray-800 pl-6 text-lg leading-relaxed text-gray-400">
								Documentation of experiments, system builds, and technical discoveries from the
								field. Each log captures lessons learned, problems solved, and decisions made while
								shipping production systems.
							</p>

							<div className="flex flex-wrap items-center gap-3 text-xs text-gray-600 font-mono-ui">
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
						<div className="relative overflow-hidden rounded-xl border border-cyan-500/20 bg-linear-to-br from-black via-gray-950 to-black shadow-2xl">
							<div className="border-b border-white/10 bg-linear-to-r from-cyan-950/30 to-violet-950/30 px-6 py-3">
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-2">
										<FileText className="h-4 w-4 text-violet-400" />
										<span className="text-sm text-violet-400 font-mono-ui">Log Stream Console</span>
									</div>
									<div className="flex items-center gap-2">
										<div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
										<span className="text-xs text-green-400 font-mono-ui">SYNCED</span>
									</div>
								</div>
							</div>

							<div className="p-6">
								<div className="mb-6">
									<div className="font-mono-ui mb-4 text-xs uppercase tracking-wider text-gray-600">
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
													<div className="mb-0.5 text-xs text-gray-600 font-mono-ui">{log.id}</div>
													<div className="truncate text-sm text-gray-400">{log.title}</div>
													<div className="mt-1 flex items-center gap-2 text-xs text-gray-700 font-mono-ui">
														<Calendar className="h-3 w-3" />
														<span>{log.publishedDate}</span>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>

								<div className="border-t border-white/10 pt-6">
									<div className="font-mono-ui mb-4 text-xs uppercase tracking-wider text-gray-600">
										→ Popular Topics
									</div>
									<div className="flex flex-wrap gap-2">
										{popularTopics.map((topic) => (
											<span
												key={topic}
												className="font-mono-ui rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-400"
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
								<line x1="0" y1="30%" x2="100%" y2="30%" stroke="rgb(6,182,212)" strokeWidth="1" />
								<circle cx="20%" cy="30%" r="3" fill="rgb(6,182,212)" />
								<circle cx="80%" cy="30%" r="3" fill="rgb(139,92,246)" />
							</svg>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
