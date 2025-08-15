import clsx from 'clsx';
import React from 'react';

export type ProgressSize = 'sm' | 'default' | 'lg';
export type ProgressVariant = 'primary' | 'success' | 'warning' | 'danger';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  size?: ProgressSize;
  variant?: ProgressVariant;
  color?: string;
}

export function Progress({
  value,
  max = 100,
  size = 'default',
  variant = 'primary',
  color,
  className,
  ...props
}: ProgressProps) {
  const percentage = Math.min(Math.max(((value ?? 0) / max) * 100, 0), 100);

  const heightClass = {
    sm: 'h-1.5',
    default: 'h-2.5',
    lg: 'h-4',
  }[size];

  const variantClass = {
    primary: 'bg-zinc-900 dark:bg-zinc-100',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    danger: 'bg-red-500',
  }[variant];

  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      className={clsx(
        'w-full rounded-full bg-zinc-200 dark:bg-zinc-700 overflow-hidden',
        heightClass,
        className,
      )}
      {...props}
    >
      <div
        className={clsx(
          'h-full transition-all duration-300 ease-in-out',
          !color && variantClass,
          value === undefined && 'animate-pulse',
        )}
        style={{
          width: value === undefined ? '100%' : `${percentage}%`,
          ...(color ? { backgroundColor: color } : {}),
        }}
      />
    </div>
  );
}
