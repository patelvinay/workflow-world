"use client";

export function SystemStats() {
	return (
		<section className="border-t border-white/10 px-6 py-16 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
					{[
						{ label: "Combined Uptime", value: "99.94%", detail: "last 90 days" },
						{ label: "Deploy Frequency", value: "24/wk", detail: "production average" },
						{ label: "Registry Growth", value: "+12", detail: "systems this year" },
						{ label: "Mean Recovery", value: "6m", detail: "incident average" },
					].map((metric) => (
						<div key={metric.label} className="border-l-2 border-cyan-500/30 pl-4">
							<div className="mb-1 font-mono-ui text-xs uppercase tracking-wider text-gray-600">
								{metric.label}
							</div>
							<div className="mb-1 text-3xl text-white font-mono-ui">{metric.value}</div>
							<div className="text-xs text-gray-500">{metric.detail}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
