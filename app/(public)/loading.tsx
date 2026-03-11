export default function Loading() {
  return (
    <main className="container-shell py-16">
      <section className="panel p-10">
        <div className="animate-pulse space-y-5">
          <div className="h-4 w-52 rounded bg-cyan-300/30" />
          <div className="h-12 w-full max-w-3xl rounded bg-white/15" />
          <div className="h-5 w-full max-w-2xl rounded bg-white/10" />
          <div className="h-5 w-3/4 max-w-2xl rounded bg-white/10" />
        </div>
      </section>
    </main>
  );
}
