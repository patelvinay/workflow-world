"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ExternalLink, Star } from "lucide-react";
import type { LogCardEntry } from "@/app/components/layout/log-card";

const monoStyle = {
	fontFamily:
		"var(--font-geist-mono, ui-monospace), SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
};

type FeaturedLogProps = {
	log: LogCardEntry;
};

export function FeaturedLog({ log }: FeaturedLogProps) {
	return (
		<div className="relative">
			<div className="mb-6 flex items-center gap-2">
				<Star className="h-4 w-4 text-amber-400" />
				<span className="text-xs uppercase tracking-wider text-amber-400" style={monoStyle}>
					Featured Research Log
				</span>
			</div>

			<div className="group relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-gray-950 to-black shadow-2xl">
				<div className="grid lg:grid-cols-12">
					<div className="relative aspect-[16/10] overflow-hidden lg:col-span-5 lg:aspect-auto">
						<Image
							src={log.coverImage}
							alt={log.title}
							fill
							sizes="(min-width: 1024px) 40vw, 100vw"
							className="absolute inset-0 object-cover transition-transform duration-700 group-hover:scale-105"
						/>
						<div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

						<div className="absolute top-6 left-6">
							<div className="rounded-lg border border-amber-500/30 bg-black/60 px-4 py-2 backdrop-blur-sm">
								<span className="text-sm text-amber-400" style={monoStyle}>
									{log.id}
								</span>
							</div>
						</div>

						<div className="absolute right-6 bottom-6 left-6">
							<div className="flex items-center gap-4 text-xs text-gray-400" style={monoStyle}>
								<div className="flex items-center gap-1.5">
									<Calendar className="h-3.5 w-3.5" />
									<span>{log.publishedDate}</span>
								</div>
								<div className="flex items-center gap-1.5">
									<Clock className="h-3.5 w-3.5" />
									<span>{log.readTime}</span>
								</div>
							</div>
						</div>
					</div>

					<div className="p-8 lg:col-span-7 lg:p-10">
						<div className="mb-6">
							<h2 className="mb-4 text-3xl leading-tight text-white transition-colors group-hover:text-cyan-400 lg:text-4xl">
								{log.title}
							</h2>
							<p className="text-base leading-relaxed text-gray-400">{log.excerpt}</p>
						</div>

						<div className="mb-8">
							<div className="mb-3 text-xs uppercase tracking-wider text-gray-600" style={monoStyle}>
								Topics:
							</div>
							<div className="flex flex-wrap gap-2">
								{log.tags.map((tag) => (
									<span
										key={tag}
										className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-300"
										style={monoStyle}
									>
										{tag}
									</span>
								))}
							</div>
						</div>

						<div className="flex flex-wrap gap-3">
							<Link
								href={`/field-logs/${log.slug}`}
								className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 text-white transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
							>
								<span className="text-sm" style={monoStyle}>
									Open Log
								</span>
								<ExternalLink className="h-4 w-4" />
							</Link>
						</div>
					</div>
				</div>

				<div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 opacity-0 blur-3xl transition-opacity group-hover:opacity-10" />
			</div>
		</div>
	);
}
