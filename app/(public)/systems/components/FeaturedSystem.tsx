"use client";

import Image from "next/image";
import { statusClasses } from "../data/statusClass";
import { SystemEntry } from "../types/SystemEntry";

type FeaturedSectionProps = {
	featuredSystem: SystemEntry;
};
export function FeaturedSection({ featuredSystem }: FeaturedSectionProps) {
	return (
		<section className="px-6 py-16 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="mb-8">
					<h2 className="mb-2 text-2xl text-white font-mono-ui">Featured System</h2>
					<p className="text-sm text-gray-500 font-mono-ui">
						Highlighted deployment from the current registry view
					</p>
				</div>
				<div className="overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-gray-950/80 to-black/80">
					<div className="grid gap-0 lg:grid-cols-12">
						<div className="relative min-h-[320px] lg:col-span-5">
							<Image
								src={featuredSystem.image}
								alt={featuredSystem.title}
								fill
								sizes="(min-width: 1024px) 40vw, 100vw"
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
							<div className="absolute left-6 top-6">
								<span
									className={`font-mono-ui rounded-full border px-3 py-1 text-xs uppercase ${statusClasses[featuredSystem.status]}`}
								>
									{featuredSystem.status}
								</span>
							</div>
						</div>
						<div className="lg:col-span-7 p-8">
							<div className="mb-6 flex items-start justify-between gap-6">
								<div>
									<p className="mb-2 text-xs text-gray-600 font-mono-ui">
										{featuredSystem.id} • {featuredSystem.codename}
									</p>
									<h3 className="text-3xl text-white">{featuredSystem.title}</h3>
								</div>
								<div className="text-right">
									<div className="text-xs text-gray-600 font-mono-ui">LATEST DEPLOYMENT</div>
									<div className="text-sm text-cyan-400 font-mono-ui">
										{featuredSystem.deployment.version}
									</div>
								</div>
							</div>
							<p className="mb-6 max-w-2xl text-base leading-relaxed text-gray-400">
								{featuredSystem.objective}
							</p>
							<div className="mb-6 grid gap-4 sm:grid-cols-3">
								<div className="rounded-lg border border-white/10 bg-white/5 p-4">
									<div className="mb-1 text-xs text-gray-600 font-mono-ui">OUTCOME</div>
									<div className="text-sm text-white">
										{featuredSystem.outcome ?? "Production system in active service"}
									</div>
								</div>
								<div className="rounded-lg border border-white/10 bg-white/5 p-4">
									<div className="mb-1 text-xs text-gray-600 font-mono-ui">ENVIRONMENT</div>
									<div className="text-sm text-white font-mono-ui">
										{featuredSystem.deployment.env}
									</div>
								</div>
								<div className="rounded-lg border border-white/10 bg-white/5 p-4">
									<div className="mb-1 text-xs text-gray-600 font-mono-ui">REPLICAS</div>
									<div className="text-sm text-white font-mono-ui">
										{featuredSystem.deployment.replicas}
									</div>
								</div>
							</div>
							<div className="flex flex-wrap gap-2">
								{featuredSystem.stack.map((item) => (
									<span
										key={item}
										className="font-mono-ui rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400"
									>
										{item}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
