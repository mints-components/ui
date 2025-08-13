import clsx from 'clsx';
import React from 'react';

export type TextAreaSize = 'xs' | 'sm' | 'default' | 'lg';
export type TextAreaResize = 'none' | 'both' | 'x' | 'y';

type NativeTextAreaProps = Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  'size'
>;

export interface TextAreaProps extends NativeTextAreaProps {
  label?: React.ReactNode;
  error?: React.ReactNode;
  size?: TextAreaSize;
  resize?: TextAreaResize;
  textareClassName?: string;
}

const labelSizeClass = {
  xs: 'text-xs',
  sm: 'text-sm',
  default: 'text-base',
  lg: 'text-lg',
};

const sizeClass = {
  xs: 'text-xs px-2 py-1 rounded-md',
  sm: 'text-sm px-3 py-1.5 rounded-md',
  default: 'text-base px-4 py-2 rounded-md',
  lg: 'text-lg px-5 py-2.5 rounded-md',
};

const resizeClass = {
  none: 'resize-none',
  both: 'resize',
  x: 'resize-x',
  y: 'resize-y',
};

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      error,
      size = 'default',
      resize = 'y',
      className,
      textareClassName,
      required,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={clsx('flex flex-col gap-1', className)}>
        {label && (
          <label
            className={clsx(
              'font-medium text-zinc-900 dark:text-white flex items-center gap-1',
              labelSizeClass[size],
            )}
          >
            {label}
            {required && (
              <span className="text-red-500" aria-label="required">
                *
              </span>
            )}
          </label>
        )}
        <textarea
          ref={ref}
          required={required}
          aria-required={required}
          className={clsx(
            'border border-zinc-300 bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white dark:border-zinc-700',
            'placeholder:text-zinc-400 dark:placeholder:text-zinc-500',
            'focus:outline focus:outline-zinc-900 focus:border-zinc-900 dark:focus:border-white',
            sizeClass[size],
            resizeClass[resize],
            textareClassName,
          )}
          {...props}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

TextArea.displayName = 'TextArea';
