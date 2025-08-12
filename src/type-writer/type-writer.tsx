import clsx from 'clsx';
import React, { useEffect, useMemo, useRef, useState } from 'react';

type Phase = 'typing' | 'pausing' | 'deleting';

export interface TypeWriterProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'> {
  strings: string | string[];
  speed?: number;
  deleteSpeed?: number;
  startDelay?: number;
  pauseBetween?: number;
  loop?: boolean;
  cursor?: boolean | React.ReactNode;
  cursorBlink?: boolean;
  holdOnFinish?: number; // ms (default: pauseBetween)
  onCycleEnd?: () => void;
}

export function TypeWriter({
  strings,
  speed = 60,
  deleteSpeed,
  startDelay = 0,
  pauseBetween = 1200,
  loop = false,
  cursor = true,
  cursorBlink = true,
  holdOnFinish,
  className,
  onCycleEnd,
  ...props
}: TypeWriterProps) {
  const items = useMemo(
    () =>
      (Array.isArray(strings) ? strings.filter(Boolean) : [strings]).map(
        String,
      ),
    [strings],
  );

  const [phase, setPhase] = useState<Phase>('typing');
  const [strIndex, setStrIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [started, setStarted] = useState(startDelay === 0);

  const timerRef = useRef<number | null>(null);
  const typingSpeed = Math.max(0, speed);
  const deletingSpeed = Math.max(
    0,
    deleteSpeed ?? Math.max(1, Math.floor(speed / 2)),
  );
  const doneHold = holdOnFinish ?? pauseBetween;

  const target = items[strIndex] ?? '';

  useEffect(() => {
    if (started) return;
    timerRef.current = window.setTimeout(
      () => setStarted(true),
      Math.max(0, startDelay),
    );
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [startDelay, started]);

  useEffect(() => {
    if (!started || items.length === 0) return;

    if (timerRef.current) window.clearTimeout(timerRef.current);

    const atEndOfTyping = phase === 'typing' && charIndex === target.length;
    const atStartOfDeleting = phase === 'deleting' && charIndex === 0;

    if (phase === 'typing') {
      if (!atEndOfTyping) {
        timerRef.current = window.setTimeout(() => {
          setCharIndex((i) => Math.min(target.length, i + 1));
        }, typingSpeed);
      } else {
        timerRef.current = window.setTimeout(() => {
          if (!loop && items.length === 1) {
            setPhase('pausing');
            return;
          }
          setPhase(items.length === 1 ? 'pausing' : 'pausing');
        }, pauseBetween);
      }
    } else if (phase === 'pausing') {
      const isFinalString = !loop && strIndex === items.length - 1;
      const shouldDelete = loop || items.length > 1;

      timerRef.current = window.setTimeout(
        () => {
          if (isFinalString && !shouldDelete) {
            onCycleEnd?.();
            return;
          }
          if (shouldDelete) {
            setPhase('deleting');
          }
        },
        isFinalString && !shouldDelete ? doneHold : pauseBetween,
      );
    } else if (phase === 'deleting') {
      if (!atStartOfDeleting) {
        timerRef.current = window.setTimeout(() => {
          setCharIndex((i) => Math.max(0, i - 1));
        }, deletingSpeed);
      } else {
        const nextIndex = items.length <= 1 ? 0 : (strIndex + 1) % items.length;

        if (!loop && strIndex === items.length - 1) {
          setStrIndex(0);
          setPhase('typing');
          setCharIndex(0);
          onCycleEnd?.();
        } else {
          setStrIndex(nextIndex);
          setPhase('typing');
          setCharIndex(0);
          if (nextIndex === 0) onCycleEnd?.();
        }
      }
    }

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [
    started,
    phase,
    charIndex,
    target.length,
    typingSpeed,
    deletingSpeed,
    pauseBetween,
    doneHold,
    loop,
    items.length,
    strIndex,
    onCycleEnd,
  ]);

  const visibleText = started ? target.slice(0, charIndex) : '';

  const srText = target;

  const renderCursor = () => {
    if (!cursor) return null;
    if (React.isValidElement(cursor)) return cursor;
    const symbol = typeof cursor === 'string' ? cursor : '|';
    return (
      <span
        aria-hidden
        className={clsx(
          'inline-block select-none dark:text-white',
          cursorBlink && 'animate-pulse',
        )}
      >
        {symbol}
      </span>
    );
  };

  return (
    <span
      className={clsx('inline-flex items-baseline', className)}
      role="text"
      {...props}
    >
      {/* Screen-reader only: the full semantic text */}
      <span className="sr-only">{srText}</span>
      {/* Visual animated text */}
      <span aria-hidden className="whitespace-pre dark:text-white">
        {visibleText}
      </span>
      {renderCursor()}
    </span>
  );
}
