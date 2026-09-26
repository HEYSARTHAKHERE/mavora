import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function DashboardPage() {
  const stats = [
    { label: 'Active campaigns', value: '12', change: '+18%' },
    { label: 'Creator matches', value: '264', change: '+9%' },
    { label: 'Pipeline value', value: '$84.2K', change: '+25%' },
    { label: 'Response rate', value: '72%', change: '+6%' },
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Dashboard</p>
          <h1 className="mt-2 font-display text-4xl font-bold text-foreground">Performance overview</h1>
        </div>
        <Button asChild>
          <Link href="/onboarding">Launch onboarding</Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between gap-4">
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <Badge variant="success">{stat.change}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
        <Card>
          <CardHeader>
            <CardTitle>Campaign momentum</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex h-52 items-end gap-3">
              {[32, 46, 58, 74, 68, 90, 96].map((bar, index) => (
                <div key={index} className="flex-1 rounded-t-2xl bg-gradient-to-t from-primary to-accent" style={{ height: `${bar}%` }} />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Priority actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <div className="rounded-2xl border border-border bg-muted p-3">Review 6 new creator applications</div>
            <div className="rounded-2xl border border-border bg-muted p-3">Approve campaign brief for Summer Glow</div>
            <div className="rounded-2xl border border-border bg-muted p-3">Schedule creator onboarding calls</div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
