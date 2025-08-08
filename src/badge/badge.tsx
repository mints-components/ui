import clsx from 'clsx';
import React from 'react';

export type BadgeVariant = 'solid' | 'outline' | 'soft';
export type BadgeColor = 'default' | 'success' | 'warning' | 'danger';
export type BadgeSize = 'sm' | 'default' | 'lg';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  color?: BadgeColor;
  size?: BadgeSize;
}

const colorMap = {
  default: {
    solid: 'bg-zinc-900 text-white dark:bg-zinc-200 dark:text-zinc-900',
    outline:
      'border border-zinc-900 text-zinc-900 bg-transparent dark:border-zinc-200 dark:text-zinc-200',
    soft: 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100',
  },
  success: {
    solid: 'bg-green-600 text-white dark:bg-green-400 dark:text-green-900',
    outline:
      'border border-green-600 text-green-600 bg-transparent dark:border-green-400 dark:text-green-400',
    soft: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
  },
  warning: {
    solid: 'bg-yellow-500 text-white dark:bg-yellow-400 dark:text-yellow-900',
    outline:
      'border border-yellow-500 text-yellow-700 bg-transparent dark:border-yellow-400 dark:text-yellow-400',
    soft: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
  },
  danger: {
    solid: 'bg-red-600 text-white dark:bg-red-400 dark:text-red-900',
    outline:
      'border border-red-600 text-red-600 bg-transparent dark:border-red-400 dark:text-red-400',
    soft: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100',
  },
};

const sizeMap = {
  sm: 'text-xs px-2 py-0.5 rounded',
  default: 'text-sm px-2.5 py-1 rounded-md',
  lg: 'text-base px-3 py-1.5 rounded-lg',
};

export function Badge({
  variant = 'solid',
  color = 'default',
  size = 'default',
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center font-medium select-none',
        colorMap[color][variant],
        sizeMap[size],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
