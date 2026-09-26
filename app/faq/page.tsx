export default function FaqPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">FAQ</p>
      <h1 className="mt-4 font-display text-5xl font-bold text-foreground">Common questions.</h1>
      <div className="mt-10 space-y-6">
        {[
          'How does MAVORA support creator discovery?',
          'Can brands manage multiple campaigns and teams?',
          'Does MAVORA support analytics and reporting?',
        ].map((q) => (
          <div key={q} className="rounded-3xl border border-border bg-surface p-6 text-muted-foreground">{q}</div>
        ))}
      </div>
    </main>
  );
}
