import * as React from 'react';

import { cn } from '@/lib/utils';

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'flex h-11 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary',
        className,
      )}
      {...props}
    />
  );
}
