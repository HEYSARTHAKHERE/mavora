import Link from 'next/link';
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function HomePage() {
  return (
    <main className="bg-aurora-radial">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Global creator collaboration infrastructure
            </div>

            <h1 className="max-w-xl font-display text-5xl font-bold leading-none tracking-[-0.06em] text-foreground sm:text-6xl lg:text-7xl">
              Create Together. Grow Everywhere.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Discover meaningful brand partnerships, launch creator campaigns, and turn collaborations into measurable growth — all in one place.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:brightness-110"
              >
                I&apos;m a Creator
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-surface/80"
              >
                I&apos;m a Brand
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-8 text-sm text-muted-foreground">
              <div>
                <div className="text-2xl font-bold text-foreground">Creator-first</div>
                <div>matching and workflows</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">Brand-safe</div>
                <div>campaign operations</div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-border bg-surface p-4 shadow-soft">
            <div className="overflow-hidden rounded-[1.5rem] border border-border bg-background p-4">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Campaign Pulse</div>
                  <div className="mt-2 text-2xl font-bold text-foreground">Summer Glow Drop</div>
                </div>
                <div className="rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">Active</div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-border bg-surface p-4">
                  <div className="text-xs text-muted-foreground">Creators</div>
                  <div className="mt-2 text-2xl font-bold text-foreground">128</div>
                </div>
                <div className="rounded-2xl border border-border bg-surface p-4">
                  <div className="text-xs text-muted-foreground">Reach</div>
                  <div className="mt-2 text-2xl font-bold text-foreground">4.2M</div>
                </div>
                <div className="rounded-2xl border border-border bg-surface p-4">
                  <div className="text-xs text-muted-foreground">CTR</div>
                  <div className="mt-2 text-2xl font-bold text-foreground">7.8%</div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-border bg-surface p-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Performance</span>
                  <span className="inline-flex items-center gap-1 font-medium text-success">
                    <TrendingUp className="h-4 w-4" />
                    +18.4%
                  </span>
                </div>
                <div className="mt-4 flex h-24 items-end gap-2">
                  {[35, 42, 58, 70, 65, 84, 96].map((bar, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-xl bg-gradient-to-t from-primary/70 to-accent/80"
                      style={{ height: `${bar}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'For creators',
              description: 'Build a public media kit, discover aligned opportunities, and manage outreach in one place.',
            },
            {
              title: 'For brands',
              description: 'Find the right creators, streamline campaign execution, and keep deliverables and reporting in sync.',
            },
            {
              title: 'For teams',
              description: 'Share briefs, approvals, content assets, and performance dashboards across your organization.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-border bg-surface p-6 shadow-soft">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <ArrowRight className="h-4 w-4" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">{item.title}</h2>
              <p className="mt-3 text-base text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">How it works</p>
          <h2 className="mt-4 font-display text-4xl font-bold text-foreground">One platform for every collaboration milestone</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {['Create profile', 'Discover fit', 'Launch campaign', 'Measure impact'].map((step, index) => (
            <div key={step} className="rounded-3xl border border-border bg-surface p-6">
              <div className="text-sm text-muted-foreground">0{index + 1}</div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{step}</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Build a trusted presence, match on the right opportunity, and keep the workflow moving with clear approvals and reporting.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-border bg-surface p-8 shadow-soft">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Built for global growth</p>
              <h2 className="mt-4 font-display text-4xl font-bold text-foreground">Creator discovery, campaign operations, and analytics in one place.</h2>
            </div>
            <Link href="/brands" className="inline-flex items-center rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition hover:bg-background">
              Explore MAVORA
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
