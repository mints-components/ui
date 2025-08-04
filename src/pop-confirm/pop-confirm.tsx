import clsx from 'clsx';
import React, { useState, useRef, useEffect } from 'react';

import { Arrow } from '../arrow';
import { Button } from '../button';

export type PopConfirmPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface PopConfirmProps {
  children: React.ReactElement;
  title: React.ReactNode;
  description?: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel?: () => void;
  placement?: PopConfirmPlacement;
}

export function PopConfirm({
  children,
  title,
  description,
  confirmText = 'Yes',
  cancelText = 'No',
  onConfirm,
  onCancel,
  placement = 'top',
}: PopConfirmProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getPlacementClass = () => {
    switch (placement) {
      case 'top':
        return 'left-1/2 bottom-full -translate-x-1/2 mb-2';
      case 'bottom':
        return 'left-1/2 top-full -translate-x-1/2 mt-2';
      case 'left':
        return 'right-full top-1/2 -translate-y-1/2 mr-2';
      case 'right':
        return 'left-full top-1/2 -translate-y-1/2 ml-2';
      default:
        return '';
    }
  };

  return (
    <div ref={containerRef} className="relative inline-flex">
      {React.cloneElement(children, {
        onClick: () => setOpen((prev) => !prev),
      })}
      {open && (
        <div
          className={clsx(
            'absolute z-50 w-64 p-4 rounded-md bg-white dark:bg-zinc-900 border border-zinc-500',
            getPlacementClass(),
          )}
        >
          <Arrow placement={placement} className="bg-zinc-500" />
          <div className="font-medium text-zinc-900 dark:text-zinc-100">
            {title}
          </div>
          {description && (
            <div className="mt-1 text-zinc-600 dark:text-zinc-400 text-sm">
              {description}
            </div>
          )}
          <div className="mt-4 flex justify-end gap-2">
            <Button
              size="xs"
              variant="outline"
              onClick={() => {
                onCancel?.();
                setOpen(false);
              }}
            >
              {cancelText}
            </Button>
            <Button
              size="xs"
              onClick={() => {
                onConfirm();
                setOpen(false);
              }}
            >
              {confirmText}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
