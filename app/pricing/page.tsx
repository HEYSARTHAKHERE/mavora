export default function PricingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Pricing</p>
      <h1 className="mt-4 font-display text-5xl font-bold text-foreground">Simple plans for creators and brands.</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          { name: 'Starter', price: '$0', text: 'For early creators and new brands.' },
          { name: 'Growth', price: '$49', text: 'For active collaboration workflows.' },
          { name: 'Scale', price: '$149', text: 'For teams and agencies.' },
        ].map((plan) => (
          <div key={plan.name} className="rounded-3xl border border-border bg-surface p-6">
            <h2 className="text-2xl font-bold text-foreground">{plan.name}</h2>
            <div className="mt-4 text-4xl font-bold text-foreground">{plan.price}<span className="text-base text-muted-foreground">/mo</span></div>
            <p className="mt-4 text-muted-foreground">{plan.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
