export type FilterState = {
	search: string;
	tags: "all" | "ai-ml" | "architecture" | "web-dev" | "automation" | "tools";
	sort: "latest" | "oldest" | "read-time" | "featured";
};
