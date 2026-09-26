export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="font-display text-2xl font-bold tracking-[-0.05em]">MAVORA</div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            One platform for creators and brands to discover opportunities, build partnerships, and grow globally.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Platform</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Creators</li>
            <li>Brands</li>
            <li>Campaigns</li>
            <li>Analytics</li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Company</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>About</li>
            <li>Pricing</li>
            <li>Contact</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Resources</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Blog</li>
            <li>Help Center</li>
            <li>FAQ</li>
            <li>Security</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
