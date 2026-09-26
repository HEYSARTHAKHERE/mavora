import * as React from 'react';

import { cn } from '@/lib/utils';

export function Badge({ className, variant = 'default', ...props }: React.HTMLAttributes<HTMLSpanElement> & { variant?: 'default' | 'success' | 'warning' | 'danger' }) {
  const variants = {
    default: 'border border-border bg-muted text-foreground',
    success: 'border border-success/30 bg-success/10 text-success',
    warning: 'border border-warning/30 bg-warning/10 text-warning',
    danger: 'border border-danger/30 bg-danger/10 text-danger',
  };

  return <span className={cn('inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold', variants[variant], className)} {...props} />;
}
