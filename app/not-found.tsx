export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl items-center justify-center px-4 py-20">
      <div className="rounded-[2rem] border border-border bg-surface p-8 text-center shadow-soft">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">404</p>
        <h1 className="mt-4 font-display text-4xl font-bold text-foreground">This page does not exist</h1>
        <p className="mt-4 text-muted-foreground">The MAVORA page you requested may have moved or may not be published yet.</p>
      </div>
    </main>
  );
}
