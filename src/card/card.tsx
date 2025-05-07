import clsx from 'clsx';
import React from 'react';

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
  const base =
    'rounded-lg border border-zinc-200 shadow-sm bg-white dark:bg-zinc-900 dark:border-zinc-800 transition-shadow hover:shadow-md';

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

  const dividerClass = 'border-t border-zinc-200 dark:border-zinc-800 my-3';

  return (
    <div className={clsx(base, sizeClass, className)} {...props}>
      {title && (
        <>
          <div className={titleClass}>{title}</div>
          {!minimal && <div className={dividerClass} />}
        </>
      )}
      <div>{children}</div>
    </div>
  );
}
