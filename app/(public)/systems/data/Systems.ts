import { SystemEntry } from "../types/SystemEntry";
export const systems: SystemEntry[] = [
	{
		id: "SYS-001",
		codename: "neural-commerce",
		title: "Neural Commerce Engine",
		status: "production",
		objective:
			"AI-powered e-commerce platform with real-time inventory prediction and personalized customer journeys at scale.",
		image:
			"https://images.unsplash.com/photo-1720962158883-b0f2021fb51e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzMwMjUyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
		stack: ["Next.js", "TensorFlow", "PostgreSQL", "Redis", "Stripe"],
		outcome: "47K+ active users, 99.98% uptime, 2.4M daily requests",
		deployment: { version: "v1.8.2", replicas: 3, env: "production" },
		date: "2025-11",
		featured: true,
	},
	{
		id: "SYS-002",
		codename: "quantum-orchestrator",
		title: "Quantum Task Orchestrator",
		status: "staging",
		objective:
			"Distributed task management with priority queuing and intelligent resource allocation.",
		image:
			"https://images.unsplash.com/photo-1643398899826-2fca1e015fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY3liZXJwdW5rJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MzExMTA1NXww&ixlib=rb-4.1.0&q=80&w=1080",
		stack: ["Go", "Kubernetes", "RabbitMQ", "Grafana"],
		deployment: { version: "v2.1.0-rc3", replicas: 2, env: "staging" },
		date: "2026-02",
	},
	{
		id: "SYS-003",
		codename: "cascade-analytics",
		title: "Cascade Analytics Hub",
		status: "production",
		objective: "Real-time data pipeline with visualization dashboards and anomaly detection.",
		image:
			"https://images.unsplash.com/photo-1765046255479-669cf07a0230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhdGElMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc3MzA0MjYzMHww&ixlib=rb-4.1.0&q=80&w=1080",
		stack: ["Python", "Apache Kafka", "D3.js", "TimescaleDB"],
		deployment: { version: "v3.4.1", replicas: 4, env: "production" },
		date: "2025-09",
	},
	{
		id: "SYS-004",
		codename: "nexus-design-sys",
		title: "Nexus Design System",
		status: "production",
		objective: "Component library for building consistent, accessible interfaces across platforms.",
		image:
			"https://images.unsplash.com/photo-1642287040066-2bd340523289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBuaWdodHxlbnwxfHx8fDE3NzMwMzMxODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
		stack: ["React", "TypeScript", "Storybook", "Tailwind"],
		deployment: { version: "v1.2.8", replicas: 2, env: "production" },
		date: "2025-07",
	},
	{
		id: "SYS-005",
		codename: "sentinel-auth",
		title: "Sentinel Auth Service",
		status: "active",
		objective:
			"Zero-trust authentication service with multi-factor support and session management.",
		image:
			"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5fGVufDF8fHx8MTc3MzA0MjYzMHww&ixlib=rb-4.1.0&q=80&w=1080",
		stack: ["Node.js", "Redis", "JWT", "WebAuthn"],
		deployment: { version: "v2.0.3", replicas: 3, env: "production" },
		date: "2026-01",
	},
	{
		id: "SYS-006",
		codename: "atlas-deployment",
		title: "Atlas Deployment Pipeline",
		status: "production",
		objective: "Automated CI/CD pipeline with blue-green deployments and rollback capabilities.",
		image:
			"https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZvcHMlMjBwaXBlbGluZXxlbnwxfHx8fDE3NzMwNDI2MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
		stack: ["GitHub Actions", "Docker", "Kubernetes", "ArgoCD"],
		deployment: { version: "v4.1.0", replicas: 1, env: "production" },
		date: "2025-10",
	},
	{
		id: "SYS-007",
		codename: "prism-api",
		title: "Prism GraphQL Gateway",
		status: "production",
		objective: "Unified GraphQL API gateway with intelligent caching and rate limiting.",
		image:
			"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaHFsJTIwYXBpfGVufDF8fHx8MTc3MzA0MjYzMHww&ixlib=rb-4.1.0&q=80&w=1080",
		stack: ["GraphQL", "Apollo", "Node.js", "Redis"],
		deployment: { version: "v3.2.1", replicas: 4, env: "production" },
		date: "2025-08",
	},
	{
		id: "SYS-008",
		codename: "orbit-mobile",
		title: "Orbit Mobile App",
		status: "planned",
		objective: "Cross-platform mobile application with offline-first architecture.",
		image:
			"https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzczMDQyNjMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
		stack: ["React Native", "TypeScript", "Expo", "SQLite"],
		deployment: { version: "v0.1.0-alpha", replicas: 0, env: "development" },
		date: "2026-04",
	},
];
