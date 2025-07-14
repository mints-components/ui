import clsx from 'clsx';
import React from 'react';

export type InputSize = 'sm' | 'default' | 'lg';

type NativeInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
>;

export interface InputProps extends NativeInputProps {
  label?: React.ReactNode;
  error?: React.ReactNode;
  size?: InputSize;
}

const sizeClass = {
  sm: 'text-sm px-3 py-1.5 rounded-md',
  default: 'text-base px-4 py-2 rounded-md',
  lg: 'text-lg px-5 py-2.5 rounded-md',
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, size = 'default', className, required, ...props }, ref) => {
    return (
      <div className={clsx('flex flex-col gap-1', className)}>
        {label && (
          <label className="text-sm font-medium text-zinc-900 dark:text-white flex items-center gap-1">
            {label}
            {required && (
              <span className="text-red-500" aria-label="required">
                *
              </span>
            )}
          </label>
        )}
        <input
          ref={ref}
          required={required}
          aria-required={required}
          className={clsx(
            'border border-zinc-300 bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white dark:border-zinc-700',
            'placeholder:text-zinc-400 dark:placeholder:text-zinc-500',
            'focus:outline focus:outline-zinc-900 focus:border-zinc-900 dark:focus:border-white',
            sizeClass[size],
          )}
          {...props}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

Input.displayName = 'Input';
