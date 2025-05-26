import clsx from 'clsx';
import React from 'react';

export type CalloutVariant =
  | 'primary'
  | 'outline'
  | 'danger'
  | 'warning'
  | 'success';
export type CalloutSize = 'sm' | 'default' | 'lg';

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CalloutVariant;
  size?: CalloutSize;
  closable?: boolean;
  onClose?: () => void;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function Callout({
  variant = 'primary',
  size = 'default',
  closable = false,
  onClose,
  icon,
  className,
  children,
  ...props
}: CalloutProps) {
  const base =
    'flex justify-between rounded-lg border shadow-sm transition-colors';

  const variantClass = {
    primary: 'bg-zinc-100 text-zinc-900 border-transparent',
    outline: 'bg-white text-zinc-900 border border-zinc-300',
    danger: 'bg-red-50 text-red-900 border border-red-300',
    warning: 'bg-yellow-50 text-yellow-900 border border-yellow-300',
    success: 'bg-green-50 text-green-900 border border-green-300',
  }[variant];

  const sizeClass = {
    sm: 'text-sm px-3 py-2',
    default: 'text-base px-4 py-3',
    lg: 'text-lg px-5 py-4',
  }[size];

  return (
    <div className={clsx(base, variantClass, sizeClass, className)} {...props}>
      <div className="flex items-center gap-2">
        {icon && <span>{icon}</span>}
        <span className="flex-1">{children}</span>
      </div>
      {closable && (
        <button
          type="button"
          aria-label="Close"
          className="text-zinc-400 hover:text-zinc-600 rounded-md text-lg font-bold leading-none transition-colors cursor-pointer"
          onClick={onClose}
        >
          ×
        </button>
      )}
    </div>
  );
}
