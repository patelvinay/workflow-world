"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ExternalLink, FileText } from "lucide-react";

export type LogCardEntry = {
	id: string;
	slug: string;
	title: string;
	excerpt: string;
	coverImage: string;
	tags: string[];
	publishedDate: string;
	readTime: string;
};

type LogCardProps = {
	log: LogCardEntry;
};

export function LogCard({ log }: LogCardProps) {
	return (
		<Link
			href={`/field-logs/${log.slug}`}
			className="group relative block overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-gray-950/80 to-black/80 backdrop-blur-sm transition-all hover:border-violet-500/30"
		>
			<div className="grid grid-cols-1 gap-0 md:grid-cols-12">
				<div className="relative aspect-[5/4] overflow-hidden border-b border-white/10 md:col-span-4 md:aspect-auto md:border-r md:border-b-0">
					<Image
						src={log.coverImage}
						alt={log.title}
						fill
						sizes="(min-width: 768px) 18vw, 100vw"
						className="object-cover transition-transform duration-500 group-hover:scale-110"
					/>
					<div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent" />

					<div className="absolute bottom-3 left-3">
						<div className="rounded-lg border border-white/10 bg-black/60 p-2 backdrop-blur-sm">
							<FileText className="h-4 w-4 text-violet-400" />
						</div>
					</div>
				</div>

				<div className="p-4 md:col-span-8 md:p-5">
					<div className="mb-2 text-xs text-gray-600 font-mono-ui">{log.id}</div>

					<h3 className="mb-3 text-base leading-tight text-white transition-colors group-hover:text-violet-400 md:text-xl lg:text-[1.45rem]">
						{log.title}
					</h3>

					<p className="mb-4 line-clamp-2 text-sm leading-relaxed text-gray-400 md:text-[0.95rem]">
						{log.excerpt}
					</p>

					<div className="mb-3">
						<div className="flex flex-wrap gap-1.5">
							{log.tags.slice(0, 2).map((tag) => (
								<span
									key={tag}
									className="rounded border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-gray-400 font-mono-ui"
								>
									{tag}
								</span>
							))}
							{log.tags.length > 2 && (
								<span className="px-2 py-0.5 text-[10px] text-gray-600 font-mono-ui">
									+{log.tags.length - 2}
								</span>
							)}
						</div>
					</div>

					<div className="flex items-center justify-between border-t border-white/10 pt-2.5">
						<div className="font-mono-ui flex items-center gap-3 text-[10px] text-gray-600 sm:text-xs">
							<div className="flex items-center gap-1">
								<Calendar className="h-3 w-3" />
								<span>{log.publishedDate}</span>
							</div>
							<span className="text-gray-800">|</span>
							<div className="flex items-center gap-1">
								<Clock className="h-3 w-3" />
								<span>{log.readTime}</span>
							</div>
						</div>
						<span className="font-mono-ui flex items-center gap-1.5 text-xs text-violet-400 opacity-0 transition-opacity group-hover:opacity-100">
							Read
							<ExternalLink className="h-3 w-3" />
						</span>
					</div>
				</div>
			</div>

			<div className="absolute -right-12 -bottom-12 h-32 w-32 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 opacity-0 blur-3xl transition-opacity group-hover:opacity-10" />
		</Link>
	);
}
