export default function BrandProfilePage({ params }: { params: { slug: string } }) {
  return (
    <main className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Brand</p>
      <h1 className="mt-4 font-display text-5xl font-bold text-foreground">{params.slug}</h1>
      <p className="mt-6 text-muted-foreground">Public brand profile and published campaigns placeholder for MAVORA.</p>
    </main>
  );
}
