export default function CreatorsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">For creators</p>
        <h1 className="mt-4 font-display text-5xl font-bold text-foreground">Build partnerships that match your audience and ambition.</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          'Create a public media kit and personal brand storefront.',
          'Discover campaigns that align with your niche and values.',
          'Track offers, deliverables, and collaboration history in one place.',
        ].map((item) => (
          <div key={item} className="rounded-3xl border border-border bg-surface p-6 shadow-soft">
            <h2 className="text-xl font-semibold text-foreground">Creator workspace</h2>
            <p className="mt-3 text-sm text-muted-foreground">{item}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
