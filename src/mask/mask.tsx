import clsx from 'clsx';
import { useEffect } from 'react';
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
  useEffect(() => {
    if (open) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
    return () => document.body.classList.remove('overflow-hidden');
  }, [open]);

  if (!open || typeof window === 'undefined') return null;

  return createPortal(
    <div
      className={clsx(
        'fixed inset-0 overflow-y-auto transition-opacity duration-300 backdrop-blur-sm',
        'bg-white dark:bg-zinc-900',
        open ? '' : 'pointer-events-none',
      )}
      style={{
        zIndex,
        opacity: open ? opacity / 100 : 0,
      }}
    >
      <div className="relative min-h-screen flex items-center justify-center px-4 py-12">
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
      </div>
    </div>,
    document.body,
  );
}
