"use client";

import { LogCard, LogCardEntry } from "./LogCard";

type ArchivedLogsSection = {
	regularLogs: LogCardEntry[];
};

export function ArchivedLogsSection({ regularLogs }: ArchivedLogsSection) {
	return (
		<section className="px-6 py-16 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="mb-12 flex items-center justify-between">
					<div>
						<h2 className="mb-2 text-xl text-white font-mono-ui">Archive Index</h2>
						<p className="text-sm text-gray-500 font-mono-ui">
							{regularLogs.length} technical logs available
						</p>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					{regularLogs.map((log) => (
						<LogCard key={log.id} log={log} />
					))}
				</div>
			</div>
		</section>
	);
}
