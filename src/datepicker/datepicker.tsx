import { useOutsideClick } from '@mints/hooks';
import clsx from 'clsx';
import { useState, useRef } from 'react';

import { Button, type ButtonSize } from '../button';
import { Calendar, ChevronLeft, ChevronRight } from '../icons';

export type DatePickerSize = 'sm' | 'default' | 'lg';

export type RangeValue = { start: Date | null; end: Date | null };

export interface DatePickerProps {
  mode?: 'single' | 'range';
  // single-mode value
  value?: Date | RangeValue;
  // onChange will receive either a Date|null (single) or RangeValue (range)
  onChange?: (date: Date | null | RangeValue) => void;
  placeholder?: string;
  size?: DatePickerSize;
  disabled?: boolean;
  minDate?: Date;
  maxDate?: Date;
  className?: string;
  disabledDates?: Date[];
}

export function DatePicker({
  mode = 'single',
  value,
  onChange,
  placeholder = 'Select date',
  size = 'default',
  disabled = false,
  minDate,
  maxDate,
  className,
  disabledDates = [],
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(() => {
    // Determine a sensible initial month based on mode + value
    if (mode === 'single' && value && value instanceof Date) {
      return new Date(value.getFullYear(), value.getMonth(), 1);
    }
    if (
      mode === 'range' &&
      value &&
      (value as RangeValue).start instanceof Date
    ) {
      const v = value as RangeValue;
      const d = v.start ?? v.end;
      if (d) return new Date(d.getFullYear(), d.getMonth(), 1);
    }
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const containerRef = useRef<HTMLDivElement>(null);

  useOutsideClick(containerRef, () => {
    setIsOpen(false);
  });

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const isBetween = (date: Date, start?: Date | null, end?: Date | null) => {
    if (!start || !end) return false;
    const d = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    ).getTime();
    const s = new Date(
      start.getFullYear(),
      start.getMonth(),
      start.getDate(),
    ).getTime();
    const e = new Date(
      end.getFullYear(),
      end.getMonth(),
      end.getDate(),
    ).getTime();

    return d >= s && d <= e;
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const isDateDisabled = (date: Date) => {
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return disabledDates.some(
      (d) =>
        d.getFullYear() === date.getFullYear() &&
        d.getMonth() === date.getMonth() &&
        d.getDate() === date.getDate(),
    );
  };

  const isSameDay = (date1: Date, date2: Date | undefined) => {
    if (!date2) return false;
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  // Helpers to read controlled value shapes with proper narrowing
  const getSingleValue = (): Date | null => {
    if (mode !== 'single') return null;
    return value instanceof Date ? value : null;
  };

  const getRangeValue = (): RangeValue | null => {
    if (mode !== 'range') return null;
    const rv = value as RangeValue | undefined;
    return rv ?? { start: null, end: null };
  };

  const singleVal = getSingleValue();
  const rangeVal = getRangeValue();

  const handleDateSelect = (day: number) => {
    const selectedDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day,
    );

    if (isDateDisabled(selectedDate)) return;

    if (mode === 'single') {
      onChange?.(selectedDate);
      setIsOpen(false);
      return;
    }

    // range mode - toggle start/end selection
    const rv = rangeVal ?? { start: null, end: null };
    let next: RangeValue;

    // If neither selected, set start
    if (!rv.start && !rv.end) {
      next = { start: selectedDate, end: null };
    } else if (rv.start && !rv.end) {
      // set end; if selected < start, swap
      if (selectedDate < rv.start) {
        next = { start: selectedDate, end: rv.start };
      } else {
        next = { start: rv.start, end: selectedDate };
      }
      // close picker after selecting end
      setIsOpen(false);
    } else {
      // both set -> start a new range from selected
      next = { start: selectedDate, end: null };
    }

    onChange?.(next);
  };

  const handlePreviousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1),
    );
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: startingDayOfWeek }, (_, i) => i);

  const textSize = {
    sm: 'text-sm',
    default: 'text-base',
    lg: 'text-lg',
  }[size];

  const weekTextSize = {
    sm: 'text-xs',
    default: 'text-sm',
    lg: 'text-base',
  }[size];

  const iconSize = {
    sm: 16,
    default: 20,
    lg: 24,
  }[size];

  const minWidthSize = {
    sm: 'min-w-64',
    default: 'min-w-80',
    lg: 'min-w-96',
  }[size];

  const daySize = {
    sm: 'xs',
    default: 'sm',
    lg: 'default',
  }[size] as ButtonSize;

  const triggerLabel = (() => {
    if (mode === 'single') {
      return singleVal ? formatDate(singleVal) : placeholder;
    }

    // range mode
    if (rangeVal && (rangeVal.start || rangeVal.end)) {
      const startText = rangeVal.start ? formatDate(rangeVal.start) : '';
      const endText = rangeVal.end ? formatDate(rangeVal.end) : '';
      return startText && endText
        ? `${startText} — ${endText}`
        : `${startText}${endText}`;
    }

    return placeholder;
  })();

  return (
    <div
      ref={containerRef}
      className={clsx('relative inline-block', className)}
    >
      <Button
        className="w-full"
        size={size}
        type="button"
        variant="outline"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
      >
        <span
          className={clsx(
            !value && 'text-zinc-400 dark:text-zinc-500',
            textSize,
          )}
        >
          {triggerLabel}
        </span>
        <Calendar
          size={iconSize}
          className="ml-2 text-zinc-500 dark:text-zinc-400"
        />
      </Button>

      {isOpen && (
        <div
          className={clsx(
            'absolute z-50 mt-2 p-4 bg-white rounded-lg shadow-lg border w-full border-zinc-200 dark:bg-zinc-900 dark:border-zinc-700',
            minWidthSize,
          )}
        >
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="link"
              size={size}
              onClick={handlePreviousMonth}
              icon={<ChevronLeft />}
            />
            <div
              className={clsx(
                'font-semibold text-zinc-900 dark:text-zinc-100',
                textSize,
              )}
            >
              {currentMonth.toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric',
              })}
            </div>
            <Button
              variant="link"
              size={size}
              onClick={handleNextMonth}
              icon={<ChevronRight />}
            />
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
              <div
                key={day}
                className={clsx(
                  'text-center font-medium text-zinc-500 dark:text-zinc-400 p-2',
                  weekTextSize,
                )}
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {emptyDays.map((_, index) => (
              <div key={`empty-${index}`} />
            ))}
            {days.map((day) => {
              const date = new Date(
                currentMonth.getFullYear(),
                currentMonth.getMonth(),
                day,
              );
              const isDisabled = isDateDisabled(date);
              const isToday = isSameDay(date, new Date());

              let isSelected = false;
              let inRange = false;

              if (mode === 'single') {
                isSelected = isSameDay(date, singleVal ?? undefined);
              } else if (mode === 'range' && rangeVal) {
                isSelected =
                  isSameDay(date, rangeVal.start ?? undefined) ||
                  isSameDay(date, rangeVal.end ?? undefined);

                inRange = isBetween(
                  date,
                  rangeVal.start ?? undefined,
                  rangeVal.end ?? undefined,
                );
              }

              let variant: Parameters<typeof Button>[0]['variant'] = 'link';
              if (isSelected) variant = 'primary';
              else if (inRange) variant = 'primary';
              else if (isToday) variant = 'dashed';

              return (
                <Button
                  key={day}
                  size={daySize}
                  disabled={isDisabled}
                  variant={variant}
                  onClick={() => handleDateSelect(day)}
                >
                  {day}
                </Button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
