import clsx from 'clsx';
import React from 'react';

export type CheckboxSize = 'sm' | 'default' | 'lg';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: React.ReactNode;
  size?: CheckboxSize;
  indeterminate?: boolean;
}

export function Checkbox({
  label,
  size = 'default',
  indeterminate = false,
  className,
  disabled,
  checked,
  children,
  ...props
}: CheckboxProps) {
  const sizeClass = {
    sm: {
      wrapper: 'h-3.5 w-3.5 text-[13px]',
      icon: 'w-2 h-2',
    },
    default: {
      wrapper: 'h-4 w-4 text-[15px]',
      icon: 'w-2.5 h-2.5',
    },
    lg: {
      wrapper: 'h-5 w-5 text-base',
      icon: 'w-3 h-3',
    },
  }[size];

  // SSR-safe设置indeterminate
  const inputRef = (el: HTMLInputElement | null) => {
    if (el) {
      el.indeterminate = !!indeterminate && !checked;
    }
  };

  return (
    <label
      className={clsx(
        'inline-flex items-center gap-1 cursor-pointer select-none',
        disabled && 'opacity-50 cursor-not-allowed',
        className,
      )}
    >
      <span className="relative flex items-center justify-center">
        <input
          ref={inputRef}
          type="checkbox"
          className="peer sr-only"
          disabled={disabled}
          checked={checked}
          {...props}
        />
        <span
          className={clsx(
            'flex items-center justify-center border rounded transition-colors bg-white dark:bg-zinc-900',
            sizeClass.wrapper,
            'border-zinc-400 dark:border-zinc-600',
            disabled ? 'cursor-not-allowed' : 'cursor-pointer',
            (checked || indeterminate) &&
              'border-zinc-900 bg-zinc-900 dark:border-zinc-100 dark:bg-zinc-100',
            !disabled &&
              'peer-hover:shadow peer-hover:border-zinc-700 dark:peer-hover:border-white/60',
            'peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-zinc-900 dark:peer-focus-visible:outline-zinc-100',
          )}
        >
          {(checked || indeterminate) && (
            <svg
              className={clsx(
                'pointer-events-none transition-opacity duration-200',
                sizeClass.icon,
                'text-white dark:text-zinc-900',
              )}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {checked ? (
                <polyline points="20 6 9 17 4 12" />
              ) : indeterminate ? (
                <line x1="6" y1="12" x2="18" y2="12" />
              ) : null}
            </svg>
          )}
        </span>
      </span>
      {(label || children) && (
        <span className="text-sm font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
          {label || children}
        </span>
      )}
    </label>
  );
}
