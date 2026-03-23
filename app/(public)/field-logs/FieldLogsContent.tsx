"use client";

import { useState } from "react";
import { ArchiveFilterBar } from "@/app/(public)/field-logs/components/ArchiveFilterBar";
import { FeaturedLogsSection } from "@/app/(public)/field-logs/components/FeaturedLogsSection";
import { LogActivityStrip } from "@/app/(public)/field-logs/components/LogActivityStripe";
import { PagesNavBar } from "../shared/components/PagesNavBar";
import { HeroSection } from "./components/HeroSection";

import { FilterState } from "./types/FilterState";
import { ArchivedLogsSection } from "./components/ArchivedLogsSection";
import { DispatchSection } from "./components/DispatchSection";
import { FooterNavigation } from "./components/FooterNavigation";
import { LogEntry } from "./types/LogEntry";
import { logs } from "./data/logs";
import { tagOptions } from "./data/tagOptions";

function matchesTagFilter(log: LogEntry, filter: FilterState["tags"]) {
	if (filter === "all") {
		return true;
	}

	const normalizedTags = log.tags.map((tag) => tag.toLowerCase());

	if (filter === "ai-ml") {
		return normalizedTags.some((tag) => tag.includes("ai/ml"));
	}
	if (filter === "architecture") {
		return normalizedTags.some((tag) => tag.includes("architecture"));
	}
	if (filter === "web-dev") {
		return normalizedTags.some((tag) => tag.includes("web dev"));
	}
	if (filter === "automation") {
		return normalizedTags.some((tag) => tag.includes("automation"));
	}

	return normalizedTags.some((tag) => tag.includes("tools"));
}

function getReadTimeMinutes(log: LogEntry) {
	return Number.parseInt(log.readTime, 10);
}

export default function FieldLogsContent() {
	const [activeFilters, setActiveFilters] = useState<FilterState>({
		search: "",
		tags: "all",
		sort: "latest",
	});

	const filteredLogs = logs
		.filter((log) => {
			if (!matchesTagFilter(log, activeFilters.tags)) {
				return false;
			}

			const search = activeFilters.search.trim().toLowerCase();
			if (!search) {
				return true;
			}

			return [log.id, log.title, log.excerpt, ...log.tags].join(" ").toLowerCase().includes(search);
		})
		.sort((a, b) => {
			if (activeFilters.sort === "featured") {
				return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
			}
			if (activeFilters.sort === "read-time") {
				return getReadTimeMinutes(b) - getReadTimeMinutes(a);
			}
			if (activeFilters.sort === "oldest") {
				return a.publishedDate.localeCompare(b.publishedDate);
			}
			return b.publishedDate.localeCompare(a.publishedDate);
		});

	const featuredLog = filteredLogs.find((log) => log.featured);
	const regularLogs = filteredLogs.filter((log) => !log.featured);

	return (
		<div className="min-h-screen bg-black text-white">
			<div className="fixed inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-size-[80px_80px] opacity-50" />

			<div className="relative">
				<PagesNavBar />

				<HeroSection />

				<ArchiveFilterBar
					searchValue={activeFilters.search}
					onSearchChange={(value) => setActiveFilters((prev) => ({ ...prev, search: value }))}
					searchPlaceholder="Search by title, excerpt, tag, or log ID..."
					filterGroups={[
						{
							label: "TOPIC_FILTER:",
							value: activeFilters.tags,
							onChange: (value) =>
								setActiveFilters((prev) => ({
									...prev,
									tags: value as FilterState["tags"],
								})),
							options: tagOptions,
							accent: "violet",
							className: "lg:col-span-10",
						},
					]}
					sortConfig={{
						label: "SORT_BY:",
						value: activeFilters.sort,
						onChange: (value) =>
							setActiveFilters((prev) => ({
								...prev,
								sort: value as FilterState["sort"],
							})),
						options: [
							{ value: "latest", label: "Latest" },
							{ value: "oldest", label: "Oldest" },
							{ value: "read-time", label: "Read Time" },
							{ value: "featured", label: "Featured" },
						],
					}}
				/>

				{featuredLog && <FeaturedLogsSection log={featuredLog} />}

				<ArchivedLogsSection regularLogs={regularLogs} />

				<LogActivityStrip />

				<DispatchSection />

				<FooterNavigation />
			</div>
		</div>
	);
}
