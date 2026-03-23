"use client";

import { Calendar, FileText, Tag, TrendingUp, Users, Zap } from "lucide-react";

const metrics = [
	{
		icon: FileText,
		label: "Total Logs",
		value: "47",
		detail: "technical entries",
		iconClass: "border-cyan-500/20 bg-cyan-500/10 text-cyan-400",
	},
	{
		icon: Calendar,
		label: "Publishing Frequency",
		value: "3.2/mo",
		detail: "average rate",
		iconClass: "border-violet-500/20 bg-violet-500/10 text-violet-400",
	},
	{
		icon: TrendingUp,
		label: "Total Reads",
		value: "24.3K",
		detail: "all-time views",
		iconClass: "border-green-500/20 bg-green-500/10 text-green-400",
	},
	{
		icon: Zap,
		label: "Active Topics",
		value: "12",
		detail: "categories",
		iconClass: "border-amber-500/20 bg-amber-500/10 text-amber-400",
	},
	{
		icon: Tag,
		label: "Experiments",
		value: "18",
		detail: "documented",
		iconClass: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
	},
	{
		icon: Users,
		label: "Dispatch Subscribers",
		value: "327",
		detail: "active readers",
		iconClass: "border-blue-500/20 bg-blue-500/10 text-blue-400",
	},
] as const;

const timeline = [
	{ month: "Oct", count: 4 },
	{ month: "Nov", count: 3 },
	{ month: "Dec", count: 2 },
	{ month: "Jan", count: 5 },
	{ month: "Feb", count: 4 },
	{ month: "Mar", count: 2 },
] as const;

export function LogActivityStrip() {
	return (
		<section className="border-t border-white/10 px-6 py-16 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div>
					<div className="mb-8">
						<h2 className="mb-2 text-2xl text-white font-mono-ui">Archive Activity</h2>
						<p className="text-sm text-gray-500 font-mono-ui">
							Publishing metrics and research progress
						</p>
					</div>

					<div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
						{metrics.map((metric) => (
							<div
								key={metric.label}
								className="rounded-lg border border-white/10 bg-gradient-to-br from-gray-950/50 to-black/50 p-5 transition-all hover:border-white/20"
							>
								<div className={`mb-4 inline-flex rounded-lg border p-2 ${metric.iconClass}`}>
									<metric.icon className="h-5 w-5" />
								</div>
								<div className="mb-1 text-2xl text-white font-mono-ui">{metric.value}</div>
								<div className="mb-1 text-xs uppercase tracking-wider text-gray-600 font-mono-ui">
									{metric.label}
								</div>
								<div className="text-xs text-gray-700">{metric.detail}</div>
							</div>
						))}
					</div>

					<div className="mt-8 rounded-xl border border-white/10 bg-gradient-to-r from-gray-950/30 to-black/30 p-6">
						<div className="mb-6">
							<div className="mb-2 text-xs uppercase tracking-wider text-gray-600 font-mono-ui">
								→ Publication Timeline (Last 6 Months)
							</div>
						</div>

						<div className="grid grid-cols-6 gap-3">
							{timeline.map((item) => (
								<div key={item.month} className="flex flex-col items-center">
									<div className="flex h-24 w-full items-end overflow-hidden rounded-lg bg-white/5 p-2">
										<div
											className="w-full rounded bg-gradient-to-t from-violet-500 to-cyan-500 transition-all"
											style={{ height: `${(item.count / 5) * 100}%` }}
										/>
									</div>
									<div className="mt-2 text-xs text-gray-600 font-mono-ui">{item.month}</div>
									<div className="text-sm text-white font-mono-ui">{item.count}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
