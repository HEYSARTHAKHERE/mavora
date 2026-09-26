export default function CreatorProfilePage({ params }: { params: { username: string } }) {
  return (
    <main className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Creator</p>
      <h1 className="mt-4 font-display text-5xl font-bold text-foreground">@{params.username}</h1>
      <p className="mt-6 text-muted-foreground">Public creator profile and media kit placeholder for MAVORA.</p>
    </main>
  );
}
