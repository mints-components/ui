import clsx from 'clsx';
import React from 'react';
import { createPortal } from 'react-dom';

import { Button } from '../button';
import { Close } from '../icons';

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
  opacity = 100,
  zIndex = 1000,
  children,
  closable = true,
  onClose,
}: MaskProps) {
  if (!open || typeof window === 'undefined') return null;

  return createPortal(
    <div
      className={clsx(
        'fixed inset-0 flex items-center justify-center transition-opacity duration-300 backdrop-blur-sm',
        'bg-white dark:bg-zinc-900',
        open ? 'opacity-100' : 'opacity-0 pointer-events-none',
      )}
      style={{ zIndex, opacity: open ? opacity / 100 : 0 }}
    >
      {closable && (
        <Button
          icon={<Close />}
          onClick={onClose}
          size="sm"
          variant="link"
          className="absolute top-4 right-4"
        />
      )}
      {children}
    </div>,
    document.body,
  );
}
