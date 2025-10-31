import clsx from 'clsx';
import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  full?: boolean;
};

export default function Button({ className, variant = 'primary', full, ...props }: Props) {
  const base = 'inline-flex h-10 items-center justify-center rounded-xl px-4 text-sm font-semibold transition-colors';
  const styles =
    variant === 'primary' ? 'bg-black text-white hover:bg-ink-900'
      : variant === 'secondary' ? 'border border-ink-300 text-ink-900 dark:text-ink-100 hover:bg-ink-100 dark:hover:bg-ink-800'
        : variant === 'accent' ? 'bg-accent text-white hover:bg-accent-hover'
          : 'text-ink-800 dark:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-800';

  return (
    <button
      className={clsx(base, styles, full && 'w-full', 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent', className)}
      {...props}
    />
  );
}
