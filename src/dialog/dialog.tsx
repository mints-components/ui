import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from '../button';
import { Close } from '../icons';

export interface DialogProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  showClose?: boolean;
  children: React.ReactNode;
}

export function Dialog({
  open,
  onClose,
  title,
  footer,
  showClose = true,
  className,
  children,
  ...props
}: DialogProps) {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return null;
  }

  return ReactDOM.createPortal(
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          aria-modal="true"
          role="dialog"
          tabIndex={-1}
        >
          <motion.div
            className="absolute inset-0 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
          />
          <motion.div
            className={clsx(
              'relative bg-white dark:bg-zinc-900 rounded-xl shadow-xl max-w-3/4 min-w-lg mx-2 p-6',
              className,
            )}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
            style={props.style}
            id={props.id}
            aria-labelledby={props['aria-labelledby']}
            aria-label={props['aria-label']}
          >
            {showClose && (
              <Button
                icon={<Close />}
                variant="link"
                onClick={onClose}
                aria-label="Close"
                className="absolute right-2 top-2"
                type="button"
              />
            )}
            {title && (
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {title}
                </h2>
              </div>
            )}
            <div className="mb-6">{children}</div>
            {footer && (
              <div className="pt-2 flex justify-end gap-2">{footer}</div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
