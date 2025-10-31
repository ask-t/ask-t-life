import React from 'react';
import clsx from 'clsx';

export function Card({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={clsx('bg-white dark:bg-ink-800 border border-ink-200/70 dark:border-ink-700 shadow-subtle rounded-2xl p-6', className)}>
      {children}
    </div>
  );
}
