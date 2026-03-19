"use client";
import { Search, SlidersHorizontal } from "lucide-react";

import { statusOptions } from "../data/statusOptions";
import { stackOptions } from "../data/stackoptions";

type FilterState = {
	status: "all" | "production" | "staging" | "active" | "planned";
	stack: "all" | "react" | "nextjs" | "typescript" | "python" | "go" | "ai";
	search: string;
	sort: "recent" | "impact" | "complexity" | "featured";
};

interface FilterBarProps {
	activeFilters: FilterState;
	setActiveFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

export function SystemsFilterBar({ activeFilters, setActiveFilters }: FilterBarProps) {
	return (
		<div className="sticky top-[72px] z-40 border-y border-white/10 bg-black/80 backdrop-blur-xl">
			<div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
				<div className="space-y-6">
					<div className="relative">
						<Search className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-gray-600" />
						<input
							type="text"
							value={activeFilters.search}
							onChange={(event) =>
								setActiveFilters((prev) => ({ ...prev, search: event.target.value }))
							}
							placeholder="Search by name, stack, or keyword..."
							className="font-mono-ui w-full rounded-lg border border-white/10 bg-black/40 py-3.5 pr-4 pl-12 text-sm text-white placeholder:text-gray-600 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
						/>
					</div>

					<div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
						<div className="lg:col-span-5">
							<div className="font-mono-ui mb-3 text-xs uppercase tracking-wider text-gray-600">
								STATUS_FILTER:
							</div>
							<div className="flex flex-wrap gap-2">
								{statusOptions.map((option) => {
									const isActive = activeFilters.status === option.value;

									return (
										<button
											key={option.value}
											type="button"
											onClick={() =>
												setActiveFilters({
													...activeFilters,
													status: option.value,
												})
											}
											className={`font-mono-ui rounded-full px-4 py-2 text-xs uppercase tracking-wider transition-all ${
												isActive
													? "border border-cyan-500/50 bg-cyan-500/20 text-cyan-400"
													: "border border-white/10 bg-white/5 text-gray-500 hover:bg-white/10 hover:text-gray-400"
											}`}
										>
											{option.label}
										</button>
									);
								})}
							</div>
						</div>

						<div className="lg:col-span-5">
							<div className="font-mono-ui mb-3 text-xs uppercase tracking-wider text-gray-600">
								STACK_FILTER:
							</div>
							<div className="flex flex-wrap gap-2">
								{stackOptions.map((option) => {
									const isActive = activeFilters.stack === option.value;

									return (
										<button
											key={option.value}
											type="button"
											onClick={() =>
												setActiveFilters({
													...activeFilters,
													stack: option.value,
												})
											}
											className={`font-mono-ui rounded-full px-4 py-2 text-xs uppercase tracking-wider transition-all ${
												isActive
													? "border border-violet-500/50 bg-violet-500/20 text-violet-400"
													: "border border-white/10 bg-white/5 text-gray-500 hover:bg-white/10 hover:text-gray-400"
											}`}
										>
											{option.label}
										</button>
									);
								})}
							</div>
						</div>

						<div className="lg:col-span-2">
							<div className="font-mono-ui mb-3 text-xs uppercase tracking-wider text-gray-600">
								SORT_BY:
							</div>
							<div className="relative">
								<SlidersHorizontal className="pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-gray-600" />
								<select
									value={activeFilters.sort}
									onChange={(event) =>
										setActiveFilters({
											...activeFilters,
											sort: event.target.value as FilterState["sort"],
										})
									}
									className="font-mono-ui w-full cursor-pointer appearance-none rounded-lg border border-white/10 bg-black/40 py-2 pr-3 pl-10 text-xs text-white transition-all focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
								>
									<option value="recent">Recent</option>
									<option value="impact">Impact</option>
									<option value="complexity">Complexity</option>
									<option value="featured">Featured</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
