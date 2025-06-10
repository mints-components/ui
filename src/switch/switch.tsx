import clsx from 'clsx';
import React from 'react';

export type SwitchSize = 'sm' | 'default' | 'lg';

const sizeStyle = {
  sm: {
    track: 'w-9 h-5',
    knob: 'w-4 h-4',
    translate: 'translate-x-4',
  },
  default: {
    track: 'w-11 h-6',
    knob: 'w-5 h-5',
    translate: 'translate-x-5',
  },
  lg: {
    track: 'w-14 h-8',
    knob: 'w-7 h-7',
    translate: 'translate-x-6',
  },
};

export interface SwitchProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'size' | 'onChange'
  > {
  size?: SwitchSize;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

export function Switch({
  size = 'default',
  checked,
  onChange,
  disabled,
  className,
  ...props
}: SwitchProps) {
  const style = sizeStyle[size];

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      className={clsx(
        'inline-flex items-center rounded-full transition-colors duration-200 focus:outline-none',
        style.track,
        checked ? 'bg-zinc-900' : 'bg-zinc-300 dark:bg-zinc-700',
        disabled
          ? 'opacity-50 cursor-not-allowed'
          : 'cursor-pointer focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2',
        className,
      )}
      onClick={() => {
        if (!disabled) onChange(!checked);
      }}
      {...props}
    >
      <span
        className={clsx(
          'inline-block bg-white rounded-full shadow border border-zinc-200 transition-all duration-200',
          style.knob,
          checked ? style.translate : 'translate-x-0',
        )}
        style={{
          marginLeft: '2px',
          marginRight: '2px',
        }}
      />
    </button>
  );
}
