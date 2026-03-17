import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../app/generated/prisma/client";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);
const db = new PrismaClient({ adapter });

async function main() {
  const featuredProject = await db.project.upsert({
    where: { slug: "workflow-world" },
    update: {},
    create: {
      title: "Workflow World",
      slug: "workflow-world",
      summary: "A playful developer portfolio OS with blog, dispatch, admin, and dynamic GitHub sync.",
      description:
        "Workflow World is a portfolio platform that combines systems pages, field logs, dispatch issues, and README sync into one branded developer operating system.",
      status: "ACTIVE",
      category: "Portfolio Platform",
      stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
      featured: true,
      sortOrder: 1,
      repoUrl: "https://github.com/patelvinay/workflow-world",
      publishedAt: new Date(),
    },
  });

  await db.blogPost.upsert({
    where: { slug: "building-workflow-world" },
    update: {},
    create: {
      title: "Building Workflow World",
      slug: "building-workflow-world",
      excerpt: "Why I’m turning my portfolio into a developer operating system.",
      content:
        "# Building Workflow World\n\nThis is the first field log entry for the project.",
      tags: ["portfolio", "systems", "nextjs"],
      featured: true,
      status: "PUBLISHED",
      readTime: 4,
      publishedAt: new Date(),
    },
  });

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

  await db.subscriber.upsert({
    where: { email: "vinay@example.com" },
    update: {},
    create: {
      email: "vinay@example.com",
      status: "ACTIVE",
      source: "seed",
    },
  });
}

main()
  .then(async () => {
    await db.$disconnect();
    await pool.end();
  })
  .catch(async (error) => {
    console.error(error);
    await db.$disconnect();
    await pool.end();
    process.exit(1);
  });