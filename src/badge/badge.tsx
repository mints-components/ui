import clsx from 'clsx';
import React from 'react';

export type BadgeVariant = 'solid' | 'outline' | 'soft';
export type BadgeColor = 'default' | 'success' | 'warning' | 'danger';
export type BadgeSize = 'sm' | 'default' | 'lg';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  color?: BadgeColor;
  size?: BadgeSize;
  icon?: React.ReactNode;
}

const colorMap = {
  default: {
    solid: 'bg-zinc-900 text-white',
    outline: 'border border-zinc-900 text-zinc-900 bg-transparent',
    soft: 'bg-zinc-100 text-zinc-900',
  },
  success: {
    solid: 'bg-green-600 text-white',
    outline: 'border border-green-600 text-green-600 bg-transparent',
    soft: 'bg-green-100 text-green-800',
  },
  warning: {
    solid: 'bg-yellow-500 text-white',
    outline: 'border border-yellow-500 text-yellow-700 bg-transparent',
    soft: 'bg-yellow-100 text-yellow-800',
  },
  danger: {
    solid: 'bg-red-600 text-white',
    outline: 'border border-red-600 text-red-600 bg-transparent',
    soft: 'bg-red-100 text-red-800',
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
  icon,
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
      {icon && <span className="mr-1.5">{icon}</span>}
      {children}
    </span>
  );
}
