import clsx from 'clsx';

import { Button } from '../button';

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
  const variantClass = {
    primary: 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800/80 dark:text-zinc-100',
    outline:
      'bg-white text-zinc-900 border border-zinc-200 dark:bg-zinc-900 dark:text-zinc-100 dark:border-zinc-700/80',
    danger:
      'bg-red-50 text-red-900 border border-red-200 dark:bg-red-950/60 dark:text-red-100 dark:border-red-700/80',
    warning:
      'bg-yellow-50 text-yellow-900 border border-yellow-200 dark:bg-yellow-900/40 dark:text-yellow-100 dark:border-yellow-700/80',
    success:
      'bg-green-50 text-green-900 border border-green-200 dark:bg-green-950/60 dark:text-green-100 dark:border-green-700/80',
  }[variant];

  const base =
    'flex items-center rounded-xl transition-colors shadow-sm dark:shadow-lg';

  const sizeClass = {
    sm: 'text-sm px-3 py-2',
    default: 'text-base px-4 py-3',
    lg: 'text-lg px-5 py-4',
  }[size];

  const iconClass = 'flex items-center text-zinc-400 dark:text-zinc-400';

  const closeClass =
    'ml-2 text-zinc-400 hover:text-zinc-200 dark:text-zinc-400 dark:hover:text-white rounded-md text-lg font-bold leading-none transition-colors cursor-pointer';

  return (
    <div className={clsx(base, variantClass, sizeClass, className)} {...props}>
      {icon && <span className={iconClass}>{icon}</span>}
      <span className="flex-1 ml-2">{children}</span>
      {closable && (
        <Button
          variant="link"
          type="button"
          aria-label="Close"
          className={closeClass}
          onClick={onClose}
        >
          ×
        </Button>
      )}
    </div>
  );
}
