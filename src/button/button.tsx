import clsx from 'clsx';
import React from 'react';

export type ButtonVariant = 'primary' | 'outline';
export type ButtonSize = 'sm' | 'default' | 'lg';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'default',
  className,
  children,
  disabled,
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center font-medium rounded-md transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClass = {
    primary: clsx(
      'text-white bg-zinc-900 hover:bg-zinc-600 focus:ring-zinc-900',
      disabled && 'bg-zinc-400 text-white hover:bg-zinc-400',
    ),
    outline: clsx(
      'border border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white focus:ring-zinc-900',
      disabled &&
        'border-zinc-300 text-zinc-300 hover:bg-transparent hover:text-zinc-300',
    ),
  }[variant];

  const sizeClass = {
    sm: 'text-sm px-3 py-1.5',
    default: 'text-base px-4 py-2',
    lg: 'text-lg px-5 py-2.5',
  }[size];

  return (
    <button
      className={clsx(base, variantClass, sizeClass, className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
