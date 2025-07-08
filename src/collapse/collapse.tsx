import clsx from 'clsx';

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
        'bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-sm dark:shadow-zinc-950/40 transition-colors',
        'w-full',
        className,
      )}
      {...props}
    >
      <div
        className={clsx(
          'flex items-center justify-between px-6 py-4 text-base font-semibold select-none transition-colors outline-none',
          disabled
            ? 'cursor-not-allowed text-zinc-300 bg-zinc-100 dark:text-zinc-700 dark:bg-zinc-800/50'
            : [
                'cursor-pointer',
                'hover:bg-zinc-50 active:bg-zinc-100',
                'dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:active:bg-zinc-800/80',
                'focus-visible:ring-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-zinc-600 focus-visible:z-10',
                'text-zinc-900 dark:text-zinc-100',
              ],
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
            'w-5 h-5 ml-2 transition-transform duration-200 ease-in-out',
            open ? 'rotate-90' : 'rotate-0',
            'text-zinc-400 dark:text-zinc-500',
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
          'overflow-hidden transition-all duration-200 ease-in-out',
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        )}
        aria-hidden={!open}
      >
        <div
          className={clsx(
            'px-6 py-4 text-zinc-900 dark:text-zinc-100 dark:bg-zinc-900',
            open ? 'border-t border-zinc-100 dark:border-zinc-700' : '',
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
