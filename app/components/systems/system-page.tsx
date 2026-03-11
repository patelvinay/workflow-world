"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Database, Search, SlidersHorizontal } from "lucide-react";

type SystemStatus = "production" | "staging" | "active" | "planned";
type SystemItem = {
  id: string;
  codename: string;
  title: string;
  status: SystemStatus;
  objective: string;
  stack: string[];
  date: string;
  featured?: boolean;
};

const systems: SystemItem[] = [
  { id: "SYS-001", codename: "neural-commerce", title: "Neural Commerce Engine", status: "production", objective: "AI-powered commerce platform.", stack: ["Next.js", "TensorFlow", "PostgreSQL"], date: "2025-11", featured: true },
  { id: "SYS-002", codename: "quantum-orchestrator", title: "Quantum Task Orchestrator", status: "staging", objective: "Distributed task execution.", stack: ["Go", "Kubernetes", "RabbitMQ"], date: "2026-02" },
  { id: "SYS-003", codename: "cascade-analytics", title: "Cascade Analytics Hub", status: "production", objective: "Realtime data pipelines.", stack: ["Python", "Kafka", "TimescaleDB"], date: "2025-09" },
  { id: "SYS-004", codename: "nexus-design-sys", title: "Nexus Design System", status: "production", objective: "Cross-product component system.", stack: ["React", "TypeScript", "Tailwind"], date: "2025-07" },
  { id: "SYS-005", codename: "sentinel-auth", title: "Sentinel Auth Service", status: "active", objective: "Zero-trust authentication layer.", stack: ["Node.js", "Redis", "WebAuthn"], date: "2026-01" },
  { id: "SYS-006", codename: "orbit-mobile", title: "Orbit Mobile App", status: "planned", objective: "Offline-first cross-platform app.", stack: ["React Native", "Expo", "SQLite"], date: "2026-04" },
];

export function SystemsPage() {
  const [status, setStatus] = useState<"all" | SystemStatus>("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"recent" | "title">("recent");

  const filtered = useMemo(() => {
    let result = [...systems];
    if (status !== "all") result = result.filter((s) => s.status === status);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter((s) =>
        `${s.codename} ${s.title} ${s.objective} ${s.stack.join(" ")}`.toLowerCase().includes(q)
      );
    }
    if (sort === "title") result.sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "recent") result.sort((a, b) => b.date.localeCompare(a.date));
    return result;
  }, [status, search, sort]);

  const featured = filtered.find((s) => s.featured);
  const regular = filtered.filter((s) => !s.featured);

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-mono">Return to Lab</span>
          </Link>
          <span className="text-xs font-mono text-green-400">ALL SYSTEMS OPERATIONAL</span>
        </div>
      </nav>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-3">
            <Database className="h-5 w-5 text-cyan-400" />
            <h1 className="text-4xl lg:text-6xl">Systems Built</h1>
          </div>
          <p className="max-w-3xl border-l-2 border-gray-800 pl-4 text-gray-400">
            Registry of production systems, active missions, and planned platform bets.
          </p>
        </div>
      </section>

      <section className="sticky top-[73px] z-40 border-y border-white/10 bg-black/85 px-6 py-5 backdrop-blur-xl lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-12">
          <div className="relative lg:col-span-6">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, stack, objective..."
              className="w-full rounded-lg border border-white/10 bg-black/40 py-3 pl-11 pr-4 text-sm"
            />
          </div>
          <div className="flex flex-wrap gap-2 lg:col-span-4">
            {(["all", "production", "staging", "active", "planned"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setStatus(s)}
                className={`rounded-full border px-3 py-2 text-xs font-mono uppercase ${
                  status === s ? "border-cyan-500/50 bg-cyan-500/20 text-cyan-300" : "border-white/10 bg-white/5 text-gray-400"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="relative lg:col-span-2">
            <SlidersHorizontal className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-600" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as "recent" | "title")}
              className="w-full rounded-lg border border-white/10 bg-black/40 py-2 pl-9 pr-3 text-xs font-mono"
            >
              <option value="recent">Recent</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-6">
          {featured ? (
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-gray-950 to-black p-8"
            >
              <p className="mb-2 text-xs font-mono text-amber-400">FEATURED SYSTEM · {featured.id}</p>
              <h2 className="text-3xl">{featured.title}</h2>
              <p className="mt-3 text-gray-400">{featured.objective}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {featured.stack.map((t) => (
                  <span key={t} className="rounded border border-white/10 bg-white/5 px-2 py-1 text-xs font-mono text-gray-300">{t}</span>
                ))}
              </div>
            </motion.article>
          ) : null}

          <div className="grid gap-4 md:grid-cols-2">
            {regular.map((s) => (
              <article key={s.id} className="rounded-xl border border-white/10 bg-gradient-to-br from-gray-950/80 to-black/80 p-5">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-xs font-mono text-gray-500">{s.id} · {s.codename}</p>
                  <p className="text-xs uppercase text-cyan-300">{s.status}</p>
                </div>
                <h3 className="text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{s.objective}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.stack.map((t) => (
                    <span key={t} className="rounded border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-mono text-gray-400">{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="grid gap-4 border-t border-white/10 pt-8 md:grid-cols-4">
            {[
              { label: "Total Systems", value: `${filtered.length}` },
              { label: "Production", value: `${filtered.filter((x) => x.status === "production").length}` },
              { label: "Staging", value: `${filtered.filter((x) => x.status === "staging").length}` },
              { label: "Planned", value: `${filtered.filter((x) => x.status === "planned").length}` },
            ].map((m) => (
              <div key={m.label} className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-gray-500">{m.label}</p>
                <p className="mt-1 text-2xl font-mono text-cyan-400">{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
