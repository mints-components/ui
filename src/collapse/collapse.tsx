import clsx from 'clsx';
import React from 'react';

export interface CollapseProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  disabled?: boolean;
  header: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function Collapse({
  open,
  onOpenChange,
  disabled = false,
  header,
  children,
  className,
  ...props
}: CollapseProps) {
  return (
    <div
      className={clsx(
        'rounded-lg border border-zinc-200 shadow-sm bg-white transition-colors',
        disabled && 'opacity-50 cursor-not-allowed',
        className,
      )}
      {...props}
    >
      <div
        className={clsx(
          'flex items-center justify-between px-5 py-3 text-base font-medium select-none rounded-lg transition-colors',
          disabled
            ? 'cursor-not-allowed text-zinc-400 bg-zinc-100'
            : 'cursor-pointer hover:bg-zinc-50 active:bg-zinc-100',
        )}
        style={{ userSelect: 'none' }}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-expanded={open}
        aria-controls="collapse-content"
        onClick={() => !disabled && onOpenChange(!open)}
        onKeyDown={(e) => {
          if (disabled) return;
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpenChange(!open);
          }
        }}
      >
        <span>{header}</span>
        <svg
          className={clsx(
            'w-5 h-5 ml-2 transition-transform duration-200',
            open ? 'rotate-90' : 'rotate-0',
            'text-zinc-400',
          )}
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M7 7l3 3 3-3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        id="collapse-content"
        className={clsx(
          'overflow-hidden transition-all duration-200',
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        )}
        aria-hidden={!open}
      >
        <div className="px-5 py-3">{children}</div>
      </div>
    </div>
  );
}
