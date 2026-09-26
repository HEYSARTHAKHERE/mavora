export default function LoadingState() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex items-center gap-3 rounded-full border border-border bg-surface px-5 py-3 shadow-soft">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-primary" />
        <span className="text-sm font-medium text-muted-foreground">Loading MAVORA...</span>
      </div>
    </main>
  );
}
