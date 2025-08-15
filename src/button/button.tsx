import clsx from 'clsx';
import React from 'react';

import { Spinner } from '../spinner';

export type ButtonVariant = 'primary' | 'outline' | 'link' | 'dashed';
export type ButtonSize = 'xs' | 'sm' | 'default' | 'lg';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactElement;
  loading?: boolean;
  danger?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'default',
  disabled,
  icon,
  loading = false,
  danger = false,
  className,
  children,
  type = 'button', // prevent accidental form submit
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-medium rounded-md transition-colors border border-transparent cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-zinc-100';

  const variantClass = {
    primary: clsx(
      'text-white',
      disabled
        ? 'bg-zinc-400 border-zinc-400 hover:bg-zinc-400'
        : danger
          ? 'bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600'
          : 'bg-zinc-900 border-zinc-900 hover:bg-zinc-600 hover:border-zinc-600 dark:bg-zinc-100 dark:border-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300 dark:hover:border-zinc-300',
    ),
    outline: clsx(
      disabled
        ? 'border-zinc-400 text-zinc-400'
        : danger
          ? 'border-red-500 text-red-500 hover:bg-red-50 dark:hover:bg-red-900'
          : 'border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white dark:border-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-900',
    ),
    dashed: clsx(
      'border-dashed',
      disabled
        ? 'border-zinc-400 text-zinc-400'
        : danger
          ? 'border-red-500 text-red-500 hover:bg-red-50 dark:hover:bg-red-900'
          : 'border-zinc-900 text-zinc-900 hover:bg-zinc-100 dark:border-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-700',
    ),
    link: clsx(
      'underline-offset-4',
      disabled
        ? 'text-zinc-500 hover:text-zinc-600'
        : danger
          ? 'text-red-500 hover:underline hover:text-red-600'
          : 'text-zinc-900 hover:underline hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-300',
    ),
  }[variant];

  const isIconOnly = !children && (icon || loading);

  const sizeClass = isIconOnly
    ? {
        xs: 'px-1 py-1',
        sm: 'px-1.5 py-1.5',
        default: 'px-2 py-2',
        lg: 'px-2.5 py-2.5',
      }[size]
    : {
        xs: 'text-xs px-2 py-1',
        sm: 'text-sm px-3 py-1.5',
        default: 'text-base px-4 py-2',
        lg: 'text-lg px-5 py-2.5',
      }[size];

  const iconSize = {
    xs: 16,
    sm: 20,
    default: 24,
    lg: 30,
  }[size];

  return (
    <button
      type={type}
      className={clsx(base, variantClass, sizeClass, 'gap-2', className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span className="flex items-center justify-center">
          <Spinner size={iconSize} />
        </span>
      )}
      {!loading && icon && (
        <span className="flex items-center justify-center">
          {React.cloneElement(icon, { size: iconSize })}
        </span>
      )}
      {children}
    </button>
  );
}
