import { config as loadEnv } from "dotenv";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../app/generated/prisma/client";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { systems } from "../app/(public)/systems/data/Systems";
import { logs } from "../app/(public)/field-logs/data/logs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

loadEnv({ path: path.resolve(__dirname, "../.env") });

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
	throw new Error(
		"DATABASE_URL is not set. Expected it in the project root .env file.",
	);
}

const adapter = new PrismaPg({ connectionString });
const db = new PrismaClient({ adapter });

function slugify(value: string) {
	return value
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");
}

function parseProjectStatus(status: (typeof systems)[number]["status"]) {
	switch (status) {
		case "planned":
			return "PLANNED" as const;
		case "staging":
			return "IN_DESIGN" as const;
		case "production":
		case "active":
		default:
			return "ACTIVE" as const;
	}
}

function parsePublishedMonth(value: string) {
	const [year, month] = value.split("-").map(Number);
	return new Date(Date.UTC(year, (month ?? 1) - 1, 1, 12, 0, 0));
}

function parseReadTime(value: string) {
	const match = value.match(/\d+/);
	return match ? Number(match[0]) : null;
}

function buildProjectDescription(system: (typeof systems)[number]) {
	const sections = [
		`# ${system.title}`,
		"",
		system.objective,
		"",
		`Codename: ${system.codename}`,
		`Deployment version: ${system.deployment.version}`,
		`Deployment environment: ${system.deployment.env}`,
		`Replicas: ${system.deployment.replicas}`,
	];

	if (system.outcome) {
		sections.push(`Outcome: ${system.outcome}`);
	}

	return sections.join("\n");
}

function buildBlogContent(log: (typeof logs)[number]) {
	return `# ${log.title}\n\n${log.excerpt}\n\nTags: ${log.tags.join(", ")}`;
}

async function main() {
	const seedTechnologies = [
		{ name: "Next.js", websiteUrl: "https://nextjs.org" },
		{ name: "TypeScript", websiteUrl: "https://www.typescriptlang.org" },
		{ name: "Prisma", websiteUrl: "https://www.prisma.io" },
		{ name: "PostgreSQL", websiteUrl: "https://www.postgresql.org" },
		{ name: "Tailwind", websiteUrl: "https://tailwindcss.com" },
	];

	const technologyNames = Array.from(
		new Set([
			...seedTechnologies.map((technology) => technology.name),
			...systems.flatMap((system) => system.stack),
		]),
	);

	for (const technologyName of technologyNames) {
		const seedTechnology = seedTechnologies.find(
			(technology) => technology.name === technologyName,
		);

		await db.technology.upsert({
			where: { slug: slugify(technologyName) },
			update: {
				name: technologyName,
				websiteUrl: seedTechnology?.websiteUrl,
			},
			create: {
				name: technologyName,
				slug: slugify(technologyName),
				websiteUrl: seedTechnology?.websiteUrl,
			},
		});
	}

	const tags = Array.from(
		new Set(["portfolio", "systems", "nextjs", ...logs.flatMap((log) => log.tags)]),
	);

	for (const tag of tags) {
		await db.tag.upsert({
			where: { slug: slugify(tag) },
			update: { name: tag },
			create: {
				name: tag,
				slug: slugify(tag),
			},
		});
	}

	const featuredProject = await db.project.upsert({
		where: { slug: "workflow-world" },
		update: {
			title: "Workflow World",
			summary:
				"A playful developer portfolio OS with blog, dispatch, admin, and dynamic GitHub sync.",
			description:
				"Workflow World is a portfolio platform that combines systems pages, field logs, dispatch issues, and README sync into one branded developer operating system.",
			status: "ACTIVE",
			category: "Portfolio Platform",
			featured: true,
			coverImage:
				"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
			sortOrder: 1,
			repoUrl: "https://github.com/patelvinay/workflow-world",
			liveUrl: "https://workflow-world.example.com",
			publishedAt: new Date("2026-03-01T10:00:00.000Z"),
		},
		create: {
			title: "Workflow World",
			slug: "workflow-world",
			summary:
				"A playful developer portfolio OS with blog, dispatch, admin, and dynamic GitHub sync.",
			description:
				"Workflow World is a portfolio platform that combines systems pages, field logs, dispatch issues, and README sync into one branded developer operating system.",
			status: "ACTIVE",
			category: "Portfolio Platform",
			featured: true,
			coverImage:
				"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
			sortOrder: 1,
			repoUrl: "https://github.com/patelvinay/workflow-world",
			liveUrl: "https://workflow-world.example.com",
			publishedAt: new Date("2026-03-01T10:00:00.000Z"),
		},
	});

	await db.projectTechnology.deleteMany({
		where: { projectId: featuredProject.id },
	});

	const projectTechnologies = await db.technology.findMany({
		where: {
			slug: { in: seedTechnologies.map((technology) => slugify(technology.name)) },
		},
	});

	await db.projectTechnology.createMany({
		data: projectTechnologies.map((technology) => ({
			projectId: featuredProject.id,
			technologyId: technology.id,
		})),
	});

	await db.mediaAsset.deleteMany({
		where: { projectId: featuredProject.id },
	});

	await db.mediaAsset.createMany({
		data: [
			{
				url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
				alt: "Workflow World dashboard preview",
				caption: "Main project hero image",
				sortOrder: 0,
				projectId: featuredProject.id,
			},
			{
				url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
				alt: "Workflow World admin editing interface",
				caption: "Admin content engine concept",
				sortOrder: 1,
				projectId: featuredProject.id,
			},
		],
	});

	for (const [index, system] of systems.entries()) {
		const project = await db.project.upsert({
			where: { slug: system.codename },
			update: {
				title: system.title,
				summary: system.objective,
				description: buildProjectDescription(system),
				status: parseProjectStatus(system.status),
				category: "Systems",
				featured: system.featured ?? false,
				coverImage: system.image,
				sortOrder: index + 2,
				publishedAt: parsePublishedMonth(system.date),
			},
			create: {
				title: system.title,
				slug: system.codename,
				summary: system.objective,
				description: buildProjectDescription(system),
				status: parseProjectStatus(system.status),
				category: "Systems",
				featured: system.featured ?? false,
				coverImage: system.image,
				sortOrder: index + 2,
				publishedAt: parsePublishedMonth(system.date),
			},
		});

		await db.projectTechnology.deleteMany({
			where: { projectId: project.id },
		});

		const systemTechnologies = await db.technology.findMany({
			where: {
				slug: {
					in: system.stack.map((technology) => slugify(technology)),
				},
			},
		});

		await db.projectTechnology.createMany({
			data: systemTechnologies.map((technology) => ({
				projectId: project.id,
				technologyId: technology.id,
			})),
		});

		await db.mediaAsset.deleteMany({
			where: { projectId: project.id },
		});

		await db.mediaAsset.create({
			data: {
				url: system.image,
				alt: `${system.title} cover image`,
				caption: system.outcome ?? system.objective,
				sortOrder: 0,
				projectId: project.id,
			},
		});
	}

	const blogPost = await db.blogPost.upsert({
		where: { slug: "building-workflow-world" },
		update: {
			title: "Building Workflow World",
			excerpt: "Why I’m turning my portfolio into a developer operating system.",
			content:
				"# Building Workflow World\n\nThis is the first field log entry for the project.",
			coverImage:
				"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
			featured: true,
			status: "PUBLISHED",
			readTime: 4,
			publishedAt: new Date("2026-03-05T14:00:00.000Z"),
		},
		create: {
			title: "Building Workflow World",
			slug: "building-workflow-world",
			excerpt: "Why I’m turning my portfolio into a developer operating system.",
			content:
				"# Building Workflow World\n\nThis is the first field log entry for the project.",
			coverImage:
				"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
			featured: true,
			status: "PUBLISHED",
			readTime: 4,
			publishedAt: new Date("2026-03-05T14:00:00.000Z"),
		},
	});

	await db.blogPostTag.deleteMany({
		where: { blogPostId: blogPost.id },
	});

	const blogTags = await db.tag.findMany({
		where: { slug: { in: tags.map((tag) => slugify(tag)) } },
	});

	await db.blogPostTag.createMany({
		data: blogTags.map((tag) => ({
			blogPostId: blogPost.id,
			tagId: tag.id,
		})),
	});

	await db.mediaAsset.deleteMany({
		where: { blogPostId: blogPost.id },
	});

	await db.mediaAsset.create({
		data: {
			url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
			alt: "Developer workspace used for building Workflow World",
			caption: "Cover image for the first field log",
			sortOrder: 0,
			blogPostId: blogPost.id,
		},
	});

	for (const log of logs) {
		const seededBlogPost = await db.blogPost.upsert({
			where: { slug: log.slug },
			update: {
				title: log.title,
				excerpt: log.excerpt,
				content: buildBlogContent(log),
				coverImage: log.coverImage,
				featured: log.featured ?? false,
				status: "PUBLISHED",
				readTime: parseReadTime(log.readTime),
				publishedAt: new Date(`${log.publishedDate}T12:00:00.000Z`),
			},
			create: {
				title: log.title,
				slug: log.slug,
				excerpt: log.excerpt,
				content: buildBlogContent(log),
				coverImage: log.coverImage,
				featured: log.featured ?? false,
				status: "PUBLISHED",
				readTime: parseReadTime(log.readTime),
				publishedAt: new Date(`${log.publishedDate}T12:00:00.000Z`),
			},
		});

		await db.blogPostTag.deleteMany({
			where: { blogPostId: seededBlogPost.id },
		});

		const logTags = await db.tag.findMany({
			where: {
				slug: {
					in: log.tags.map((tag) => slugify(tag)),
				},
			},
		});

		await db.blogPostTag.createMany({
			data: logTags.map((tag) => ({
				blogPostId: seededBlogPost.id,
				tagId: tag.id,
			})),
		});

		await db.mediaAsset.deleteMany({
			where: { blogPostId: seededBlogPost.id },
		});

		await db.mediaAsset.create({
			data: {
				url: log.coverImage,
				alt: `${log.title} cover image`,
				caption: log.excerpt,
				sortOrder: 0,
				blogPostId: seededBlogPost.id,
			},
		});
	}

	await db.dispatchIssue.deleteMany();
	await db.dispatchIssue.create({
		data: {
			title: "Dispatch 001",
			subject: "Workflow World is live",
			excerpt: "The first dispatch from the builder lab.",
			content:
				"# Dispatch 001\n\nWorkflow World is now online. More systems and field logs coming soon.",
			status: "DRAFT",
		},
	});

	await db.currentStatus.upsert({
		where: { id: "main" },
		update: {
			currentFocus: "Building the Systems Built page and admin content engine",
			currentlyBuilding: ["Portfolio homepage", "Projects archive", "README sync"],
			currentlyLearning: ["Prisma", "system design consistency"],
			currentGoal: "Ship the full MVP with admin and content publishing",
		},
		create: {
			id: "main",
			currentFocus: "Building the Systems Built page and admin content engine",
			currentlyBuilding: ["Portfolio homepage", "Projects archive", "README sync"],
			currentlyLearning: ["Prisma", "system design consistency"],
			currentGoal: "Ship the full MVP with admin and content publishing",
		},
	});

	await db.readmeSettings.upsert({
		where: { id: "default" },
		update: {
			featuredProjectId: featuredProject.id,
			showLatestPosts: true,
			latestPostsCount: 3,
			showStatusCard: true,
			themeVariant: "SYSTEM",
		},
		create: {
			id: "default",
			featuredProjectId: featuredProject.id,
			showLatestPosts: true,
			latestPostsCount: 3,
			showStatusCard: true,
			themeVariant: "SYSTEM",
		},
	});

	await db.siteSettings.upsert({
		where: { id: "default" },
		update: {
			siteTitle: "Workflow World",
			siteDescription:
				"A playful developer portfolio operating system for projects, field logs, and dispatches.",
			siteUrl: "https://workflow-world.example.com",
			logoUrl:
				"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=256&q=80",
			contactEmail: "hello@workflow-world.dev",
			seoTitle: "Workflow World | Developer Portfolio OS",
			seoDescription:
				"Projects, field logs, dispatches, and admin systems in one branded portfolio platform.",
		},
		create: {
			id: "default",
			siteTitle: "Workflow World",
			siteDescription:
				"A playful developer portfolio operating system for projects, field logs, and dispatches.",
			siteUrl: "https://workflow-world.example.com",
			logoUrl:
				"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=256&q=80",
			contactEmail: "hello@workflow-world.dev",
			seoTitle: "Workflow World | Developer Portfolio OS",
			seoDescription:
				"Projects, field logs, dispatches, and admin systems in one branded portfolio platform.",
		},
	});

	await db.socialLink.deleteMany();
	await db.socialLink.createMany({
		data: [
			{
				platform: "GitHub",
				label: "GitHub",
				url: "https://github.com/patelvinay",
				icon: "github",
				sortOrder: 0,
				visible: true,
			},
			{
				platform: "LinkedIn",
				label: "LinkedIn",
				url: "https://linkedin.com/in/patelvinay",
				icon: "linkedin",
				sortOrder: 1,
				visible: true,
			},
			{
				platform: "Email",
				label: "Email",
				url: "mailto:hello@workflow-world.dev",
				icon: "mail",
				sortOrder: 2,
				visible: true,
			},
		],
	});

	await db.subscriber.upsert({
		where: { email: "vinay@example.com" },
		update: {
			status: "ACTIVE",
			source: "seed",
		},
		create: {
			email: "vinay@example.com",
			status: "ACTIVE",
			source: "seed",
		},
	});

	await db.contactMessage.deleteMany();
	await db.contactMessage.createMany({
		data: [
			{
				name: "Alex Builder",
				email: "alex@example.com",
				subject: "Project collaboration",
				message:
					"Would love to talk about collaborating on the Workflow World content system.",
				status: "UNREAD",
			},
			{
				name: "Jamie Reader",
				email: "jamie@example.com",
				subject: "Field log feedback",
				message: "The blog and dispatch concept feels super cohesive. Keep going.",
				status: "READ",
			},
		],
	});

	await db.auditLog.deleteMany();
	await db.auditLog.createMany({
		data: [
			{
				actorLabel: "Seed Script",
				actorEmail: "system@workflow-world.dev",
				action: "UPSERT_PROJECT",
				entityType: "Project",
				entityId: featuredProject.id,
				metadata: {
					slug: featuredProject.slug,
					featured: true,
				},
			},
			{
				actorLabel: "Seed Script",
				actorEmail: "system@workflow-world.dev",
				action: "UPSERT_BLOG_POST",
				entityType: "BlogPost",
				entityId: blogPost.id,
				metadata: {
					slug: blogPost.slug,
					tagCount: blogTags.length,
				},
			},
		],
	});
}

main()
	.then(async () => {
		await db.$disconnect();
	})
	.catch(async (error) => {
		console.error(error);
		await db.$disconnect();

		process.exit(1);
	});
