import clsx from 'clsx';
import React, { useId } from 'react';

export type RadioSize = 'sm' | 'default' | 'lg';

export interface RadioProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'type' | 'children' | 'size'
  > {
  label?: React.ReactNode;
  size?: RadioSize;
  children?: React.ReactNode;
}

export function Radio({
  label,
  size = 'default',
  className,
  disabled,
  checked,
  children,
  ...props
}: RadioProps) {
  const id = useId();
  const sizeClass = {
    sm: {
      wrapper: 'h-3.5 w-3.5',
      inner: 'h-1.5 w-1.5',
    },
    default: {
      wrapper: 'h-4 w-4',
      inner: 'h-2 w-2',
    },
    lg: {
      wrapper: 'h-5 w-5',
      inner: 'h-2.5 w-2.5',
    },
  }[size];

  return (
    <label
      htmlFor={id}
      className={clsx(
        'inline-flex items-center gap-1 cursor-pointer select-none',
        disabled && 'opacity-50 cursor-not-allowed',
        className,
      )}
    >
      <span className="relative flex items-center justify-center">
        <input
          id={id}
          type="radio"
          className="peer sr-only"
          disabled={disabled}
          checked={checked}
          {...props}
        />
        <span
          className={clsx(
            'rounded-full border flex items-center justify-center transition-colors',
            sizeClass.wrapper,
            'border-zinc-400 dark:border-zinc-600',
            disabled ? 'cursor-not-allowed' : 'cursor-pointer',
            'peer-checked:border-zinc-900 peer-checked:bg-zinc-900',
            'dark:peer-checked:border-zinc-100 dark:peer-checked:bg-zinc-100',
            'peer-checked:disabled:border-zinc-400 peer-checked:disabled:bg-zinc-400',
            'dark:peer-checked:disabled:border-zinc-600 dark:peer-checked:disabled:bg-zinc-700',
            'peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-zinc-900 dark:peer-focus-visible:outline-zinc-100',
          )}
        >
          <span
            className={clsx(
              'rounded-full',
              sizeClass.inner,
              'bg-white peer-checked:bg-white dark:bg-zinc-900 dark:peer-checked:bg-zinc-900',
            )}
          />
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
