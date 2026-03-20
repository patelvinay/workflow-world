export type FilterState = {
	status: "all" | "production" | "staging" | "active" | "planned";
	stack: "all" | "react" | "nextjs" | "typescript" | "python" | "go" | "ai";
	search: string;
	sort: "recent" | "impact" | "complexity" | "featured";
};
