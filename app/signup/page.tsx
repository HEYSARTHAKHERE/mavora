import Link from 'next/link';

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-10">
      <div className="w-full max-w-xl rounded-[2rem] border border-border bg-surface p-8 shadow-soft">
        <div className="mb-6 text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Join MAVORA</div>
          <h1 className="mt-3 font-display text-3xl font-bold text-foreground">Create your account</h1>
        </div>

        <form className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">Full name</label>
            <input className="w-full rounded-xl border border-border bg-background px-4 py-3" placeholder="Ava Morgan" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">Work email</label>
            <input type="email" className="w-full rounded-xl border border-border bg-background px-4 py-3" placeholder="ava@mavora.io" />
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-foreground">Password</label>
            <input type="password" className="w-full rounded-xl border border-border bg-background px-4 py-3" placeholder="Create a secure password" />
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-foreground">I am joining as</label>
            <select className="w-full rounded-xl border border-border bg-background px-4 py-3">
              <option>Creator</option>
              <option>Brand</option>
              <option>Both</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <button type="submit" className="w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110">
              Create account
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account? <Link href="/login" className="text-primary hover:underline">Log in</Link>
        </div>
      </div>
    </main>
  );
}
