import clsx from 'clsx';
import React from 'react';

export interface TabsProps {
  value: string;
  onChange?: (value: string) => void;
  className?: string;
  centered?: boolean;
  children: React.ReactNode;
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
}: TabsProps) {
  const items = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === TabItem,
  ) as React.ReactElement<TabItemProps>[];

  return (
    <div className={clsx('w-full', className)}>
      <div
        className={clsx(
          'flex border-b border-zinc-200 dark:border-zinc-700',
          centered ? 'justify-center' : 'justify-start',
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
                'relative px-3 py-2 select-none transition-colors outline-none text-base',
                isActive
                  ? 'font-bold text-zinc-900 dark:text-zinc-100'
                  : 'font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100',
                isDisabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer',
              )}
              onClick={() => {
                if (isDisabled) return;
                onChange?.(item.props.value);
              }}
              onKeyDown={(e) => {
                if (!isDisabled && (e.key === 'Enter' || e.key === ' ')) {
                  onChange?.(item.props.value);
                }
              }}
            >
              {item.props.label}
              <span
                className={clsx(
                  'absolute left-1/2 -translate-x-1/2 -bottom-px rounded-full transition-all duration-200',
                  isActive
                    ? 'w-2/3 h-0.5 bg-zinc-600 dark:bg-zinc-100'
                    : 'w-0 h-0 bg-transparent',
                )}
              />
            </div>
          );
        })}
      </div>
      <div className="pt-4">
        {items.find((item) => item.props.value === value)?.props.children}
      </div>
    </div>
  );
}

const TabItem: React.FC<TabItemProps> = () => null;

Tabs.Item = TabItem;

export { Tabs, TabItem };
