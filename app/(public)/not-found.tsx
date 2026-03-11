import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-shell py-16">
      <section className="panel p-10">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
          404 · Not Found
        </p>
        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight">
          We couldn&apos;t find that page.
        </h1>
        <p className="mt-4 max-w-2xl text-white/70">
          The link may be outdated, or the page may have moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-md border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
        >
          Back to home
        </Link>
      </section>
    </main>
  );
}
