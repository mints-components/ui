import clsx from 'clsx';
import React from 'react';

import { Divider } from '../divider';

export type CardSize = 'sm' | 'default' | 'lg';

export interface CardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  size?: CardSize;
  title?: React.ReactNode;
  minimal?: boolean;
  children: React.ReactNode;
}

export function Card({
  size = 'default',
  title,
  minimal = false,
  className,
  children,
  ...props
}: CardProps) {
  const base = clsx(
    'rounded-lg border shadow-sm transition-shadow',
    'bg-white border-zinc-200 hover:shadow-md',
    'dark:bg-[#1E1F2A] dark:border-white/10 dark:shadow-[0_4px_24px_0_rgba(0,0,0,0.40)] dark:hover:shadow-[0_0_0_2px_rgba(255,255,255,0.06),0_4px_24px_0_rgba(0,0,0,0.40)]',
  );

  const sizeClass = {
    sm: 'p-4 text-sm',
    default: 'p-6 text-base',
    lg: 'p-6 text-base',
  }[size];

  const titleSizeClass = {
    sm: 'text-sm',
    default: 'text-base',
    lg: 'text-lg',
  }[size];

  const titleClass = clsx(
    'font-semibold text-zinc-900 dark:text-zinc-100 mb-3 leading-snug tracking-tight',
    titleSizeClass,
  );

  const contentClass = 'text-zinc-800 dark:text-zinc-100';

  return (
    <div className={clsx(base, sizeClass, className)} {...props}>
      {title && (
        <>
          <div className={titleClass}>{title}</div>
          {!minimal && <Divider />}
        </>
      )}
      <div className={contentClass}>{children}</div>
    </div>
  );
}
