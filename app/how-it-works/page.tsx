export default function HowItWorksPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">How it works</p>
      <h1 className="mt-4 font-display text-5xl font-bold text-foreground">From discovery to measurable outcome.</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-4">
        {['Create profile', 'Discover fit', 'Launch campaign', 'Track impact'].map((step, index) => (
          <div key={step} className="rounded-3xl border border-border bg-surface p-6">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">0{index + 1}</div>
            <h2 className="mt-4 text-xl font-semibold text-foreground">{step}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
