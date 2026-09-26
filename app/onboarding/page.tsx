import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function OnboardingPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Onboarding</p>
        <h1 className="mt-4 font-display text-4xl font-bold text-foreground">Set up your MAVORA profile</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Role selection</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            {['Creator', 'Brand', 'Both'].map((role) => (
              <div key={role} className="rounded-2xl border border-border bg-muted p-4 text-center font-medium text-foreground">
                {role}
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">Display name</label>
              <Input placeholder="Ava Morgan" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">Username</label>
              <Input placeholder="avamorgan" />
            </div>
          </div>

          <div className="flex justify-end">
            <Button>Continue</Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
