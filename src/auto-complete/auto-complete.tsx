import clsx from 'clsx';
import React, { useRef, useState, useEffect } from 'react';

import { Button } from '../button';
import { Close } from '../icons';
import { Input, InputProps } from '../input';
import { Spinner } from '../spinner';

export interface AutoCompleteOption {
  label: React.ReactNode;
  value: string;
  [key: string]: unknown;
}

export interface AutoCompleteProps
  extends Omit<InputProps, 'onSelect' | 'onChange'> {
  value?: string;
  defaultValue?: string;
  options: AutoCompleteOption[];
  loading?: boolean;
  disabled?: boolean;
  placeholder?: string;
  clearable?: boolean;
  onChange?: (value: string) => void;
  onSelect?: (option: AutoCompleteOption) => void;
  renderOption?: (
    option: AutoCompleteOption,
    active: boolean,
  ) => React.ReactNode;
  emptyText?: React.ReactNode;
  className?: string;
  /**
   * Custom input component. Must accept these controlled props:
   * ref, value, onChange, onBlur, onKeyDown, disabled, and placeholder.
   */
  children?: React.ReactElement;
}

export function AutoComplete({
  value,
  defaultValue,
  options,
  loading = false,
  disabled = false,
  placeholder,
  clearable = false,
  onChange,
  onSelect,
  renderOption,
  emptyText = 'No options',
  className,
  children,
  ...props
}: AutoCompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue ?? '');
  const [highlight, setHighlight] = useState(-1);

  const inputValue = value !== undefined ? value : internalValue;

  const filtered = inputValue
    ? options.filter((o) =>
        o.label?.toString().toLowerCase().includes(inputValue.toLowerCase()),
      )
    : [];

  useEffect(() => {
    if (!open) setHighlight(-1);
  }, [open, inputValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    if (value === undefined) setInternalValue(v);
    onChange?.(v);
    setOpen(!!v);
  };

  const handleSelect = (option: AutoCompleteOption) => {
    if (value === undefined) setInternalValue(option.value);
    onChange?.(option.value);
    onSelect?.(option);
    setOpen(false);
    setHighlight(-1);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (value === undefined) setInternalValue('');
    onChange?.('');
    inputRef.current?.focus();
    setOpen(false);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (
      e.relatedTarget &&
      listRef.current &&
      listRef.current.contains(e.relatedTarget as Node)
    ) {
      return;
    }
    setOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open && inputValue) setOpen(true);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlight((h) => Math.min(filtered.length - 1, h + 1));
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlight((h) => Math.max(0, h - 1));
    }
    if (e.key === 'Enter' && highlight >= 0 && highlight < filtered.length) {
      handleSelect(filtered[highlight]);
    }
    if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  const showClear = clearable && !!inputValue && !disabled;

  const inputControlledProps = {
    ref: inputRef,
    value: inputValue,
    disabled,
    placeholder,
    onChange: handleInputChange,
    onBlur: handleBlur,
    onKeyDown: handleKeyDown,
    ...props,
  };

  const inputNode = children ? (
    React.cloneElement(children, inputControlledProps)
  ) : (
    <Input
      {...inputControlledProps}
      inputClassName={clsx(
        'pr-10',
        disabled &&
          'opacity-50 pointer-events-none bg-zinc-100 dark:bg-zinc-800 text-zinc-400',
      )}
      className={className}
    />
  );

  return (
    <div className={clsx('relative w-full', className)}>
      <div className="relative w-full">
        {inputNode}
        {showClear && (
          <Button
            icon={<Close />}
            size="sm"
            variant="link"
            type="button"
            onClick={handleClear}
            aria-label="Clear"
            tabIndex={-1}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10"
          />
        )}
      </div>
      {open && (
        <div
          ref={listRef}
          className={clsx(
            'absolute z-10 mt-1 w-full bg-white border border-zinc-200 rounded-md shadow-lg max-h-60 overflow-auto',
            'dark:bg-zinc-900 dark:border-zinc-700',
            disabled && 'opacity-50 pointer-events-none',
          )}
          tabIndex={-1}
        >
          {loading ? (
            <div className="p-4 text-center text-zinc-400 dark:text-zinc-500">
              <Spinner size={24} />
            </div>
          ) : filtered.length === 0 ? (
            <div className="p-4 text-zinc-400 dark:text-zinc-500 text-center select-none">
              {emptyText}
            </div>
          ) : (
            filtered.map((option, idx) => (
              <div
                key={option.value}
                className={clsx(
                  'px-3 py-2 cursor-pointer select-none transition-colors',
                  idx === highlight
                    ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100 font-semibold'
                    : 'hover:bg-zinc-50 dark:hover:bg-zinc-800',
                )}
                onMouseDown={() => handleSelect(option)}
                onMouseEnter={() => setHighlight(idx)}
                aria-selected={idx === highlight}
                tabIndex={-1}
              >
                {renderOption
                  ? renderOption(option, idx === highlight)
                  : option.label}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
