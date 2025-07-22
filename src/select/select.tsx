import clsx from 'clsx';
import React, { useRef, useEffect, useState } from 'react';

import { Button, ButtonProps } from '../button';
import { ChevronDown } from '../icons';

export type SelectSize = ButtonProps['size'];

export interface SelectOption {
  label: React.ReactNode;
  value: string;
  disabled?: boolean;
}

export interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  size?: SelectSize;
  icon?: React.ReactNode;
}

export function Select({
  value,
  onChange,
  options,
  placeholder = 'Please select',
  disabled = false,
  className,
  size = 'default',
  icon,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener('mousedown', onClick);
    return () => window.removeEventListener('mousedown', onClick);
  }, [open]);

  function handleSelect(val: string, option: SelectOption) {
    if (option.disabled) return;
    onChange(val);
    setOpen(false);
  }

  return (
    <div ref={selectRef} className={clsx('relative', className)}>
      <Button
        type="button"
        variant="outline"
        size={size}
        icon={icon}
        className={clsx(
          'w-full justify-between font-medium transition-colors',
          open
            ? 'border-zinc-900 bg-zinc-50 dark:bg-zinc-800'
            : 'border-zinc-300 bg-white dark:bg-zinc-900',
          !selectedOption && 'text-zinc-400',
          disabled &&
            'bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-300 dark:text-zinc-500 cursor-not-allowed opacity-60',
        )}
        style={!selectedOption ? { fontWeight: 400 } : undefined}
        disabled={disabled}
        onClick={() => !disabled && setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span
          className={clsx(
            'truncate flex-1 text-left',
            !selectedOption && 'text-zinc-400',
            disabled && 'text-zinc-300 dark:text-zinc-500',
          )}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown size={20} />
      </Button>
      {open && !disabled && (
        <ul
          className={clsx(
            'absolute z-10 mt-1 w-full border shadow-lg rounded-md max-h-60 overflow-auto animate-fade-in',
            'bg-white dark:bg-zinc-800',
            'border-zinc-200 dark:border-zinc-700',
          )}
          role="listbox"
        >
          {options.map((option) => (
            <li
              key={option.value}
              className={clsx(
                'px-4 py-2 select-none',
                option.disabled
                  ? 'text-zinc-300 dark:text-zinc-600 bg-transparent cursor-not-allowed'
                  : 'cursor-pointer dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-700',
                option.value === value &&
                  'bg-zinc-100 dark:bg-zinc-700 font-medium',
              )}
              onClick={() => handleSelect(option.value, option)}
              aria-selected={option.value === value}
              role="option"
              aria-disabled={option.disabled}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
