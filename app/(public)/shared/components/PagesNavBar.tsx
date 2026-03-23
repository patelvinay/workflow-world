import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function PagesNavBar() {
	return (
		<nav className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
			<div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
				<Link
					href="/"
					className="font-mono-ui inline-flex items-center gap-2 text-cyan-400 transition-colors hover:text-sky-300"
				>
					<ArrowLeft className="h-4 w-4" />
					<span className="text-sm">Back to Lab</span>
				</Link>
				<div className="flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-3 py-2 sm:self-auto">
					<div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
					<span className="text-xs text-gray-500 font-mono-ui">ALL SYSTEMS OPERATIONAL</span>
				</div>
			</div>
		</nav>
	);
}
