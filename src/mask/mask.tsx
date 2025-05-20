import clsx from 'clsx';
import React from 'react';

import { Button } from '../button';

export interface MaskProps {
  open: boolean;
  opacity?: number;
  zIndex?: number;
  children?: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
}

export function Mask({
  open,
  opacity = 0.8,
  onClose,
  zIndex = 1000,
  children,
  closable = true,
}: MaskProps) {
  if (!open) return null;

  return (
    <div
      className={clsx(
        'fixed inset-0 flex items-center justify-center transition-opacity duration-300 bg-zinc-900',
        open ? 'opacity-100' : 'opacity-0 pointer-events-none',
      )}
      style={{
        backgroundColor: `rgba(24, 24, 27, ${opacity})`, // zinc-900 = #18181B
        zIndex,
      }}
    >
      {closable && (
        <Button
          onClick={onClose}
          size="sm"
          variant="link"
          className="absolute top-4 right-4"
        >
          ✕
        </Button>
      )}
      {children}
    </div>
  );
}
