"use client";

import { Search, SlidersHorizontal } from "lucide-react";

type FilterOption = {
	value: string;
	label: string;
};

type FilterGroup = {
	label: string;
	value: string;
	onChange: (value: string) => void;
	options: readonly FilterOption[] | FilterOption[];
	accent?: "cyan" | "violet" | "green";
	className?: string;
};

type SortConfig = {
	label: string;
	value: string;
	onChange: (value: string) => void;
	options: readonly FilterOption[] | FilterOption[];
	className?: string;
};

type ArchiveFilterBarProps = {
	searchValue: string;
	onSearchChange: (value: string) => void;
	searchPlaceholder: string;
	filterGroups: readonly FilterGroup[] | FilterGroup[];
	sortConfig: SortConfig;
};

const activeClasses = {
	cyan: "border border-cyan-500/50 bg-cyan-500/20 text-cyan-400",
	violet: "border border-violet-500/50 bg-violet-500/20 text-violet-400",
	green: "border border-green-500/50 bg-green-500/20 text-green-400",
} as const;

export function ArchiveFilterBar({
	searchValue,
	onSearchChange,
	searchPlaceholder,
	filterGroups,
	sortConfig,
}: ArchiveFilterBarProps) {
	return (
		<div className="border-y border-white/10 bg-black/80 backdrop-blur-xl">
			<div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
				<div className="space-y-6">
					<div className="relative">
						<Search className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-gray-600" />
						<input
							type="text"
							value={searchValue}
							onChange={(event) => onSearchChange(event.target.value)}
							placeholder={searchPlaceholder}
							className="font-mono-ui w-full rounded-lg border border-white/10 bg-black/40 py-3.5 pr-4 pl-12 text-sm text-white placeholder:text-gray-600 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
						/>
					</div>

					<div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
						{filterGroups.map((group, index) => {
							const accent = group.accent ?? "cyan";

							return (
								<div key={`${group.label}-${index}`} className={group.className ?? "lg:col-span-5"}>
									<div className="font-mono-ui mb-3 text-xs uppercase tracking-wider text-gray-600">
										{group.label}
									</div>
									<div className="flex flex-wrap gap-2">
										{group.options.map((option) => {
											const isActive = group.value === option.value;

											return (
												<button
													key={option.value}
													type="button"
													onClick={() => group.onChange(option.value)}
													className={`font-mono-ui rounded-full px-4 py-2 text-xs uppercase tracking-wider transition-all ${
														isActive
															? activeClasses[accent]
															: "border border-white/10 bg-white/5 text-gray-500 hover:bg-white/10 hover:text-gray-400"
													}`}
												>
													{option.label}
												</button>
											);
										})}
									</div>
								</div>
							);
						})}

						<div className={sortConfig.className ?? "lg:col-span-2"}>
							<div className="mb-3 text-xs uppercase tracking-wider text-gray-600 font-mono-ui">
								{sortConfig.label}
							</div>
							<div className="relative">
								<SlidersHorizontal className="pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-gray-600" />
								<select
									value={sortConfig.value}
									onChange={(event) => sortConfig.onChange(event.target.value)}
									className="font-mono-ui w-full cursor-pointer appearance-none rounded-lg border border-white/10 bg-black/40 py-2 pr-3 pl-10 text-xs text-white transition-all focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
								>
									{sortConfig.options.map((option) => (
										<option key={option.value} value={option.value}>
											{option.label}
										</option>
									))}
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
