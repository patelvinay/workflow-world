"use client";

import Image from "next/image";
import { SystemEntry } from "../types/SystemEntry";
import { statusClasses } from "../data/statusClass";

type AllSystemProps = {
	regularSystems: SystemEntry[];
};

export function AllSystems({ regularSystems }: AllSystemProps) {
	return (
		<section className="px-6 py-16 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="mb-12 flex items-center justify-between">
					<div>
						<h2 className="mb-2 text-2xl text-white font-mono-ui">All Systems</h2>
						<p className="text-sm text-gray-500 font-mono-ui">
							{regularSystems.length} entries in registry
						</p>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					{regularSystems.map((system) => (
						<article
							key={system.id}
							className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-950/70 to-black/80 transition-all hover:border-cyan-500/30"
						>
							<div className="relative aspect-[16/10]">
								<Image
									src={system.image}
									alt={system.title}
									fill
									sizes="(min-width: 768px) 50vw, 100vw"
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
								<div className="absolute left-5 top-5 flex flex-wrap items-center gap-2">
									<span
										className={`font-mono-ui rounded-full border px-3 py-1 text-xs uppercase ${statusClasses[system.status]}`}
									>
										{system.status}
									</span>
									<span className="font-mono-ui rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs text-gray-300">
										{system.deployment.version}
									</span>
								</div>
							</div>
							<div className="space-y-5 p-6">
								<div>
									<p className="mb-2 text-xs text-gray-600 font-mono-ui">
										{system.id} • {system.codename}
									</p>
									<h3 className="mb-3 text-2xl text-white">{system.title}</h3>
									<p className="text-sm leading-relaxed text-gray-400">{system.objective}</p>
								</div>
								<div className="grid grid-cols-3 gap-3">
									<div className="rounded-lg border border-white/10 bg-white/5 p-3">
										<div className="mb-1 text-xs text-gray-600 font-mono-ui">ENV</div>
										<div className="text-sm text-white font-mono-ui">{system.deployment.env}</div>
									</div>
									<div className="rounded-lg border border-white/10 bg-white/5 p-3">
										<div className="mb-1 text-xs text-gray-600 font-mono-ui">REPLICAS</div>
										<div className="text-sm text-white font-mono-ui">
											{system.deployment.replicas}
										</div>
									</div>
									<div className="rounded-lg border border-white/10 bg-white/5 p-3">
										<div className="mb-1 text-xs text-gray-600 font-mono-ui">DATE</div>
										<div className="text-sm text-white font-mono-ui">{system.date}</div>
									</div>
								</div>
								<div className="flex flex-wrap gap-2">
									{system.stack.map((item) => (
										<span
											key={item}
											className="font-mono-ui rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-400"
										>
											{item}
										</span>
									))}
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
