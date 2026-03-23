"use client";

import { Radio } from "lucide-react";

export function DispatchSection() {
	return (
		<section id="dispatch" className="border-t border-white/10 px-6 py-24 lg:px-8">
			<div className="mx-auto max-w-4xl">
				<div className="relative overflow-hidden rounded-2xl border border-violet-500/20 bg-linear-to-br from-gray-950 to-black p-12">
					<div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-linear-to-br from-violet-500 to-cyan-500 opacity-10 blur-3xl" />

					<div className="relative">
						<div className="mb-4 flex items-center gap-2">
							<Radio className="h-5 w-5 text-violet-400" />
							<span className="text-xs uppercase tracking-wider text-violet-400 font-mono-ui">
								Dispatch Terminal
							</span>
						</div>

						<h2 className="mb-4 text-4xl text-white">Join the Dispatch</h2>
						<p className="mb-8 max-w-2xl text-lg text-gray-400">
							Receive monthly field notes, system updates, and technical insights directly in your
							inbox. No spam, just builder-to-builder updates.
						</p>

						<form className="flex flex-col gap-4 sm:flex-row">
							<input
								type="email"
								placeholder="engineer@example.com"
								className="flex-1 rounded-lg border border-white/10 bg-black/40 px-6 py-4 font-mono text-white placeholder:text-gray-600 transition-all focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 focus:outline-none"
							/>
							<button
								type="submit"
								className="font-mono-ui rounded-lg bg-linear-to-r from-violet-500 to-cyan-500 px-8 py-4 text-white transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
							>
								Subscribe
							</button>
						</form>

						<div className="mt-6 flex items-center gap-2 text-xs text-gray-600 font-mono-ui">
							<div className="h-1 w-1 rounded-full bg-green-400" />
							<span>327 builders subscribed</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
