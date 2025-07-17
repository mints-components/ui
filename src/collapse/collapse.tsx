import clsx from 'clsx';

import { ChevronRight, ChevronDown } from '../icons';

export interface CollapseProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  disabled?: boolean;
  header: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  minimal?: boolean;
  iconPosition?: 'left' | 'right' | 'none';
}

export function Collapse({
  open,
  onOpenChange,
  disabled = false,
  header,
  children,
  className,
  minimal = false,
  iconPosition = 'left',
  ...props
}: CollapseProps) {
  const ChevronIcon = open ? (
    <ChevronDown size={20} className="transition-transform duration-200" />
  ) : (
    <ChevronRight size={20} className="transition-transform duration-200" />
  );

  return (
    <div
      className={clsx(
        minimal
          ? 'bg-transparent'
          : 'bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-sm dark:shadow-zinc-950/40 rounded',
        'w-full',
        className,
      )}
      {...props}
    >
      <div
        className={clsx(
          'flex items-center gap-3 w-full select-none rounded px-4',
          minimal
            ? [
                'py-2 text-base font-semibold',
                disabled
                  ? 'text-zinc-400 cursor-not-allowed opacity-60'
                  : 'text-zinc-900 dark:text-zinc-100 cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-zinc-200 dark:focus-visible:ring-zinc-700',
              ]
            : [
                'px-6 py-4 text-base font-semibold transition-colors outline-none',
                disabled
                  ? 'bg-zinc-50 dark:bg-zinc-900/40 text-zinc-400 cursor-not-allowed'
                  : 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 cursor-pointer hover:bg-zinc-50 active:bg-zinc-100 dark:hover:bg-zinc-800 dark:active:bg-zinc-800/80',
              ],
        )}
        style={{ userSelect: 'none' }}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-expanded={open}
        aria-controls="collapse-content"
        onClick={() => {
          if (disabled) return;
          onOpenChange(!open);
        }}
        onKeyDown={(e) => {
          if (disabled) return;
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpenChange(!open);
          }
        }}
      >
        {iconPosition === 'left' && (
          <span
            className={clsx(
              'flex items-center',
              disabled ? 'text-zinc-300' : 'text-zinc-400 dark:text-zinc-500',
            )}
          >
            {ChevronIcon}
          </span>
        )}
        <span className="flex-1">{header}</span>
        {iconPosition === 'right' && (
          <span
            className={clsx(
              'flex items-center',
              disabled ? 'text-zinc-300' : 'text-zinc-400 dark:text-zinc-500',
            )}
          >
            {ChevronIcon}
          </span>
        )}
      </div>
      <div
        id="collapse-content"
        className={clsx(
          'overflow-hidden transition-all duration-200 ease-in-out',
          open ? 'max-h-[9999px] opacity-100' : 'max-h-0 opacity-0',
        )}
        aria-hidden={!open}
      >
        <div
          className={clsx(
            minimal
              ? ['pl-8 pr-4 py-2 flex flex-col gap-2']
              : [
                  'px-6 py-4 text-zinc-900 dark:text-zinc-100 dark:bg-zinc-900',
                  open && 'border-t border-zinc-100 dark:border-zinc-700',
                ],
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
