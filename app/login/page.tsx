import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-10">
      <div className="w-full max-w-md rounded-[2rem] border border-border bg-surface p-8 shadow-soft">
        <div className="mb-6 text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Welcome back</div>
          <h1 className="mt-3 font-display text-3xl font-bold text-foreground">Log in to MAVORA</h1>
        </div>

        <form className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">Email</label>
            <input type="email" className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none ring-0 transition focus:border-primary" placeholder="you@example.com" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">Password</label>
            <input type="password" className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none ring-0 transition focus:border-primary" placeholder="••••••••" />
          </div>

          <div className="flex items-center justify-between text-sm">
            <a href="/forgot-password" className="text-primary hover:underline">Forgot password?</a>
            <a href="/signup" className="text-muted-foreground hover:underline">Create account</a>
          </div>

          <button type="submit" className="w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110">
            Continue
          </button>
        </form>
      </div>
    </main>
  );
}
