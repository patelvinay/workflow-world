import { Terminal } from "lucide-react";
import Link from "next/link";

export function NavBar() {
	return (
		<nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
			<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
				<Link href="/" className="flex items-center gap-3">
					<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-cyan-500 to-violet-600">
						<Terminal className="h-5 w-5 text-white" />
					</div>
					<div>
						<p className="text-sm leading-none">Workflow World</p>
						<p className="text-xs leading-none text-cyan-400 font-mono-ui">× Builder Lab</p>
					</div>
				</Link>

				<div className="hidden items-center gap-7 md:flex">
					<Link href="/systems" className="text-sm text-gray-400 hover:text-cyan-400">
						Systems
					</Link>
					<a href="#logs" className="text-sm text-gray-400 hover:text-cyan-400">
						Field Logs
					</a>
					<a href="#dispatch" className="text-sm text-gray-400 hover:text-cyan-400">
						Dispatch
					</a>
					<span className="h-4 w-px bg-white/30" />
					<span className="inline-flex items-center gap-2 text-xs text-green-400">
						<span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

						<span className="text-gray-500 text-md">OPERATIONAL</span>
					</span>
				</div>
			</div>
		</nav>
	);
}
