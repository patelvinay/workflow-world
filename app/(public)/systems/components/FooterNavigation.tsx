"use client";

import { FileText, Radio, Terminal } from "lucide-react";
import Link from "next/link";

export function FooterNavigation() {
	return (
		<section className="border-t border-white/10 px-6 py-24 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="grid gap-6 md:grid-cols-3">
					<Link
						href="/#logs"
						className="group rounded-xl border border-white/10 bg-gradient-to-br from-gray-950/50 to-black/50 p-8 transition-all hover:border-cyan-500/30"
					>
						<FileText className="mb-4 h-8 w-8 text-cyan-400" />
						<h3 className="mb-2 text-xl text-white transition-colors group-hover:text-cyan-400">
							Field Logs
						</h3>
						<p className="text-sm text-gray-500">
							Read technical deep dives and engineering insights
						</p>
					</Link>

					<Link
						href="/#dispatch"
						className="group rounded-xl border border-white/10 bg-gradient-to-br from-gray-950/50 to-black/50 p-8 transition-all hover:border-violet-500/30"
					>
						<Radio className="mb-4 h-8 w-8 text-violet-400" />
						<h3 className="mb-2 text-xl text-white transition-colors group-hover:text-violet-400">
							Join Dispatch
						</h3>
						<p className="text-sm text-gray-500">Subscribe to monthly technical transmissions</p>
					</Link>

					<Link
						href="/"
						className="group rounded-xl border border-white/10 bg-gradient-to-br from-gray-950/50 to-black/50 p-8 transition-all hover:border-green-500/30"
					>
						<Terminal className="mb-4 h-8 w-8 text-green-400" />
						<h3 className="mb-2 text-xl text-white transition-colors group-hover:text-green-400">
							Return to Lab
						</h3>
						<p className="text-sm text-gray-500">Back to the main control center</p>
					</Link>
				</div>
			</div>
		</section>
	);
}
