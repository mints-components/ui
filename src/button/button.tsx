import clsx from 'clsx';
import React from 'react';

import { Spinner } from '../spinner';

export type ButtonVariant = 'primary' | 'outline' | 'link';
export type ButtonSize = 'sm' | 'default' | 'lg';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  loading?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'default',
  disabled,
  icon,
  loading = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-medium rounded-md transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClass = {
    primary: clsx(
      'text-white bg-zinc-900 hover:bg-zinc-600',
      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900',
      disabled && 'bg-zinc-400 text-white hover:bg-zinc-400',
    ),
    outline: clsx(
      'border border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white',
      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900',
      disabled &&
        'border-zinc-300 text-zinc-300 hover:bg-transparent hover:text-zinc-300',
    ),
    link: clsx(
      'text-zinc-900 dark:text-zinc-100 underline-offset-4 hover:underline hover:text-zinc-600 dark:hover:text-zinc-300',
      disabled &&
        'text-zinc-400 hover:text-zinc-400 dark:text-zinc-500 dark:hover:text-zinc-500',
    ),
  }[variant];

  const isIconOnly = !children && (icon || loading);

  const sizeClass = isIconOnly
    ? {
        sm: 'w-8 h-8 text-sm',
        default: 'w-10 h-10 text-base',
        lg: 'w-12 h-12 text-lg',
      }[size]
    : {
        sm: 'text-sm px-3 py-1.5',
        default: 'text-base px-4 py-2',
        lg: 'text-lg px-5 py-2.5',
      }[size];

  const iconSizeClass = { sm: 'w-4 h-4', default: 'w-5 h-5', lg: 'w-6 h-6' }[
    size
  ];

  return (
    <button
      className={clsx(base, variantClass, sizeClass, 'gap-2', className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span
          className={clsx(iconSizeClass, 'flex items-center justify-center')}
        >
          <Spinner />
        </span>
      )}
      {!loading && icon && (
        <span
          className={clsx(iconSizeClass, 'flex items-center justify-center')}
        >
          {icon}
        </span>
      )}
      {children}
    </button>
  );
}
