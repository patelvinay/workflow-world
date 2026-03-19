"use client";

import { Menu, Terminal, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function NavBar() {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const closeMenu = () => setIsMenuOpen(false);

	return (
		<nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
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

					<button
						type="button"
						aria-expanded={isMenuOpen}
						aria-controls="mobile-site-menu"
						aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
						onClick={() => setIsMenuOpen((open) => !open)}
						className="inline-flex h-7 w-7 p-2 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-200 transition hover:border-cyan-400/40 hover:text-cyan-400 md:hidden"
					>
						{isMenuOpen ? (
							<X className="h-5 w-5   rounded-full" />
						) : (
							<Menu className="h-5 w-5 rounded-full" />
						)}
					</button>
				</div>

				{isMenuOpen ? (
					<div id="mobile-site-menu" className="pb-4 md:hidden">
						<div className="rounded-2xl border border-white/10 bg-black/90 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
							<div className="flex flex-col gap-1">
								<Link
									href="/systems"
									onClick={closeMenu}
									className="rounded-xl px-3 py-2 text-sm text-gray-200 transition hover:bg-white/5 hover:text-cyan-400"
								>
									Systems
								</Link>
								<Link
									href="/field-logs"
									onClick={closeMenu}
									className="rounded-xl px-3 py-2 text-sm text-gray-200 transition hover:bg-white/5 hover:text-cyan-400"
								>
									Field Logs
								</Link>
								<Link
									href="/dispatch"
									onClick={closeMenu}
									className="rounded-xl px-3 py-2 text-sm text-gray-200 transition hover:bg-white/5 hover:text-cyan-400"
								>
									Dispatch
								</Link>
							</div>

							<div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4">
								<span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
								<span className="font-mono-ui text-xs tracking-[0.2em] text-gray-500">
									OPERATIONAL
								</span>
							</div>
						</div>
					</div>
				) : null}
			</div>
		</nav>
	);
}
