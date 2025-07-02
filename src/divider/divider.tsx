import clsx from 'clsx';
import { ReactNode } from 'react';

export interface DividerProps {
  children?: ReactNode;
  variant?: 'solid' | 'dashed';
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export function Divider({
  children,
  variant = 'solid',
  orientation = 'horizontal',
  className,
}: DividerProps) {
  const borderClass =
    variant === 'solid'
      ? 'border-zinc-200 dark:border-zinc-700'
      : 'border-dashed border-zinc-200 dark:border-zinc-700';

  if (orientation === 'vertical') {
    return (
      <span
        className={clsx(
          'inline-block w-px h-4 align-middle mx-2',
          variant === 'solid'
            ? 'bg-zinc-200 dark:bg-zinc-700'
            : 'border-l border-dashed border-zinc-200 dark:border-zinc-700',
          className,
        )}
      />
    );
  }

  return (
    <div
      className={clsx(
        'flex items-center w-full text-sm text-zinc-900 dark:text-zinc-100 my-2',
        className,
      )}
    >
      <div className={clsx('flex-grow border-t', borderClass)} />
      {children && (
        <span className="mx-3 text-sm text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
          {children}
        </span>
      )}
      <div className={clsx('flex-grow border-t', borderClass)} />
    </div>
  );
}
