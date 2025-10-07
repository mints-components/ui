import clsx from 'clsx';
import React from 'react';

export interface TabsProps {
  value: string;
  onChange?: (value: string) => void;
  className?: string;
  centered?: boolean;
  children: React.ReactNode;
  variant?: 'underline' | 'pills';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export interface TabItemProps {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
  children: React.ReactNode;
}

function Tabs({
  value,
  onChange,
  className,
  centered = false,
  children,
  variant = 'underline',
  size = 'md',
  fullWidth = false,
}: TabsProps) {
  const items = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === TabItem,
  ) as React.ReactElement<TabItemProps>[];

  const sizeClasses = {
    sm: 'text-sm px-2.5 py-1.5',
    md: 'text-base px-3 py-2',
    lg: 'text-lg px-4 py-2.5',
  };

  const variantClasses = {
    underline: {
      container: 'border-b border-zinc-200 dark:border-zinc-700',
      tab: '',
      active: 'font-semibold text-zinc-900 dark:text-zinc-100',
      inactive:
        'font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300',
    },
    pills: {
      container: 'gap-1.5 p-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg',
      tab: 'rounded-md',
      active:
        'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 font-semibold shadow-sm',
      inactive:
        'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-white/50 dark:hover:bg-zinc-700/50',
    },
  };

  return (
    <div className={clsx('w-full', className)}>
      <div
        className={clsx(
          'flex',
          variantClasses[variant].container,
          centered ? 'justify-center' : 'justify-start',
          fullWidth && 'justify-stretch',
        )}
        role="tablist"
      >
        {items.map((item) => {
          const isActive = value === item.props.value;
          const isDisabled = item.props.disabled;

          return (
            <div
              key={item.props.value}
              role="tab"
              aria-selected={isActive}
              aria-disabled={isDisabled}
              tabIndex={isDisabled ? -1 : 0}
              className={clsx(
                'relative select-none transition-all duration-200 outline-none flex items-center gap-1.5',
                sizeClasses[size],
                variantClasses[variant].tab,
                isActive
                  ? variantClasses[variant].active
                  : variantClasses[variant].inactive,
                isDisabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer',
                fullWidth && 'flex-1 justify-center',
              )}
              onClick={() => {
                if (isDisabled) return;
                onChange?.(item.props.value);
              }}
            >
              {item.props.label}
              {variant === 'underline' && (
                <span
                  className={clsx(
                    'absolute left-0 right-0 -bottom-px h-0.5 transition-all duration-200',
                    isActive
                      ? 'bg-zinc-900 dark:bg-zinc-100'
                      : 'bg-transparent',
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className={clsx(variant !== 'pills' && 'pt-4')}>
        {items.find((item) => item.props.value === value)?.props.children}
      </div>
    </div>
  );
}

const TabItem: React.FC<TabItemProps> = () => null;

Tabs.Item = TabItem;

export { Tabs, TabItem };
