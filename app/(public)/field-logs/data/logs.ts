import { LogEntry } from "../types/LogEntry";

export const logs: LogEntry[] = [
	{
		id: "LOG-047",
		slug: "neural-search-architecture",
		title: "Building a Neural Search Engine: From Vector Embeddings to Production",
		excerpt:
			"Deep dive into designing and deploying a semantic search system using OpenAI embeddings, Pinecone vector database, and Next.js. Lessons learned from handling 10M+ queries.",
		coverImage:
			"https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMG5ldXJhbCUyMG5ldHdvcmt8ZW58MXx8fHwxNzQyMDI1MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
		tags: ["AI/ML", "Architecture", "Next.js"],
		publishedDate: "2026-03-08",
		readTime: "12 min",
		featured: true,
		status: "published",
	},
	{
		id: "LOG-046",
		slug: "micro-frontend-orchestration",
		title: "Micro-Frontend Orchestration with Module Federation",
		excerpt:
			"How we built a scalable micro-frontend architecture for a multi-tenant platform using Webpack 5 Module Federation and runtime composition.",
		coverImage:
			"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3NlcnZpY2VzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc0MjAyNTIwMHww&ixlib=rb-4.1.0&q=80&w=1080",
		tags: ["Architecture", "React", "Web Dev"],
		publishedDate: "2026-03-01",
		readTime: "10 min",
		status: "published",
	},
	{
		id: "LOG-045",
		slug: "real-time-collaboration-crdt",
		title: "Real-Time Collaboration with CRDTs and WebSockets",
		excerpt:
			"Implementing conflict-free replicated data types for a collaborative document editor. Exploring Yjs, operational transforms, and sync strategies.",
		coverImage:
			"https://images.unsplash.com/photo-1516321497487-e288fb19713f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwdGltZSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzQyMDI1MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
		tags: ["Web Dev", "Experiments", "TypeScript"],
		publishedDate: "2026-02-22",
		readTime: "15 min",
		status: "published",
	},
	{
		id: "LOG-044",
		slug: "shopify-automation-workflows",
		title: "Automating E-Commerce Workflows with Shopify Functions",
		excerpt:
			"Building custom discount logic, inventory sync, and order automation using Shopify Functions, GraphQL Admin API, and serverless architecture.",
		coverImage:
			"https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc0MjAyNTIwMHww&ixlib=rb-4.1.0&q=80&w=1080",
		tags: ["Automation", "Shopify", "Tools"],
		publishedDate: "2026-02-15",
		readTime: "8 min",
		status: "published",
	},
	{
		id: "LOG-043",
		slug: "edge-computing-cloudflare-workers",
		title: "Edge Computing Patterns with Cloudflare Workers",
		excerpt:
			"Exploring edge-first architecture, distributed caching strategies, and A/B testing at the edge using Cloudflare Workers and KV storage.",
		coverImage:
			"https://images.unsplash.com/photo-1544197150-b99a580bb7a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZ3xlbnwxfHx8fDE3NDIwMjUyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
		tags: ["Web Dev", "Architecture", "Performance"],
		publishedDate: "2026-02-08",
		readTime: "11 min",
		status: "published",
	},
	{
		id: "LOG-042",
		slug: "observability-distributed-tracing",
		title: "Observability in Distributed Systems: Tracing, Metrics, Logs",
		excerpt:
			"Setting up comprehensive observability with OpenTelemetry, Grafana, and custom instrumentation for microservices debugging.",
		coverImage:
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwbW9uaXRvcmluZ3xlbnwxfHx8fDE3NDIwMjUyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
		tags: ["Tools", "Architecture", "DevOps"],
		publishedDate: "2026-02-01",
		readTime: "13 min",
		status: "published",
	},
	{
		id: "LOG-041",
		slug: "ai-code-generation-experiments",
		title: "Experiments with AI Code Generation and AST Transformations",
		excerpt:
			"Testing Claude, GPT-4, and custom fine-tuned models for code generation, refactoring automation, and AST-based code analysis.",
		coverImage:
			"https://images.unsplash.com/photo-1635070041078-e363dbe005cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGNvZGluZ3xlbnwxfHx8fDE3NDIwMjUyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
		tags: ["AI/ML", "Experiments", "Tools"],
		publishedDate: "2026-01-25",
		readTime: "14 min",
		status: "published",
	},
	{
		id: "LOG-040",
		slug: "database-migration-zero-downtime",
		title: "Zero-Downtime Database Migrations at Scale",
		excerpt:
			"Strategies for migrating production databases with millions of rows using blue-green deployments, shadow writes, and gradual rollouts.",
		coverImage:
			"https://images.unsplash.com/photo-1544383835-bda2bc66a55d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMHNlcnZlcnxlbnwxfHx8fDE3NDIwMjUyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
		tags: ["Architecture", "DevOps", "Database"],
		publishedDate: "2026-01-18",
		readTime: "9 min",
		status: "published",
	},
];
