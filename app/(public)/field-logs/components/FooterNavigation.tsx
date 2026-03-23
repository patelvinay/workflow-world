"use client";

import { FileText, Radio, Tag } from "lucide-react";
import Link from "next/link";

export function FooterNavigation() {
	return (
		<section className="border-t border-white/10 px-6 py-24 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="grid gap-6 md:grid-cols-3">
					<Link
						href="/systems"
						className="group rounded-xl border border-white/10 bg-linear-to-br from-gray-950/50 to-black/50 p-8 transition-all hover:border-cyan-500/30"
					>
						<FileText className="mb-4 h-8 w-8 text-cyan-400" />
						<h3 className="mb-2 text-xl text-white transition-colors group-hover:text-cyan-400">
							Systems Built
						</h3>
						<p className="text-sm text-gray-500">Explore deployed systems and production builds</p>
					</Link>

					<Link
						href="/"
						className="group rounded-xl border border-white/10 bg-linear-to-br from-gray-950/50 to-black/50 p-8 transition-all hover:border-violet-500/30"
					>
						<Radio className="mb-4 h-8 w-8 text-violet-400" />
						<h3 className="mb-2 text-xl text-white transition-colors group-hover:text-violet-400">
							Control Center
						</h3>
						<p className="text-sm text-gray-500">Return to the main lab interface</p>
					</Link>

					<Link
						href="/#status"
						className="group rounded-xl border border-white/10 bg-linear-to-br from-gray-950/50 to-black/50 p-8 transition-all hover:border-green-500/30"
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
	);
}
