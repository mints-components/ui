import clsx from 'clsx';
import React from 'react';

import { Button } from '../button';

export interface MaskProps {
  open: boolean;
  zIndex?: number;
  children?: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
}

export function Mask({
  open,
  zIndex = 1000,
  children,
  closable = true,
  onClose,
}: MaskProps) {
  if (!open) return null;

  return (
    <div
      className={clsx(
        'fixed inset-0 flex items-center justify-center transition-opacity duration-300 backdrop-blur-sm',
        'bg-white dark:bg-zinc-900',
        open ? 'opacity-100' : 'opacity-0 pointer-events-none',
      )}
      style={{ zIndex }}
    >
      {closable && (
        <Button
          onClick={onClose}
          size="sm"
          variant="link"
          className="absolute top-4 right-4 text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-300"
        >
          ✕
        </Button>
      )}
      {children}
    </div>
  );
}
