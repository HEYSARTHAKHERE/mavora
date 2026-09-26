import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = {
  default: 'bg-primary text-primary-foreground hover:brightness-110',
  secondary: 'bg-surface text-foreground border border-border hover:bg-muted',
  outline: 'border border-border bg-transparent hover:bg-muted',
  ghost: 'bg-transparent hover:bg-muted',
  destructive: 'bg-danger text-white hover:opacity-90',
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants;
  asChild?: boolean;
}

export function Button({ className, variant = 'default', asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? 'div' : 'button';

  return <Comp className={cn('inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition', buttonVariants[variant], className)} {...props} />;
}
