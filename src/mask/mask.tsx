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
  opacity = 0.6,
  zIndex = 1000,
  children,
  closable = true,
  onClose,
}: MaskProps) {
  if (!open) return null;

  const safeOpacity = Math.max(0.05, opacity);

  return (
    <div
      className={clsx(
        'fixed inset-0 flex items-center justify-center transition-opacity duration-300 backdrop-blur-sm',
        open ? 'opacity-100' : 'opacity-0 pointer-events-none',
      )}
      style={{
        backgroundColor: `rgba(255, 255, 255, ${safeOpacity})`,
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
