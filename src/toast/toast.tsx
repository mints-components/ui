import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import type { Root } from 'react-dom/client';
import { createRoot } from 'react-dom/client';

type ToastVariant = 'info' | 'success' | 'warning' | 'error';

interface ToastProps {
  message: React.ReactNode;
  variant: ToastVariant;
  icon?: React.ReactNode;
  duration?: number;
  k: number;
}

function Toast({ message, variant, icon, duration = 3000, k }: ToastProps) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
    const hide = setTimeout(() => setShow(false), duration);
    const remove = setTimeout(() => removeToast(k), duration + 200);
    return () => {
      clearTimeout(hide);
      clearTimeout(remove);
    };
  }, [duration, k]);

  const variantClass = {
    info: 'bg-zinc-100 text-zinc-900 border-transparent',
    success: 'bg-green-50 text-green-900 border-green-200',
    warning: 'bg-yellow-50 text-yellow-900 border-yellow-200',
    error: 'bg-red-50 text-red-900 border-red-200',
  }[variant];

  const icons: Record<ToastVariant, React.ReactNode> = {
    info: (
      <svg className="w-5 h-5 text-zinc-500" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="currentColor" opacity=".1" />
        <path
          stroke="currentColor"
          strokeWidth="2"
          d="M12 8v4m0 4h.01"
          strokeLinecap="round"
        />
      </svg>
    ),
    success: (
      <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="currentColor" opacity=".1" />
        <path
          stroke="currentColor"
          strokeWidth="2"
          d="M9 12l2 2 4-4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
    warning: (
      <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="currentColor" opacity=".1" />
        <path
          stroke="currentColor"
          strokeWidth="2"
          d="M12 8v4m0 4h.01"
          strokeLinecap="round"
        />
      </svg>
    ),
    error: (
      <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="currentColor" opacity=".1" />
        <path
          stroke="currentColor"
          strokeWidth="2"
          d="M15 9l-6 6m0-6l6 6"
          strokeLinecap="round"
        />
      </svg>
    ),
  };

  return (
    <div
      className={clsx(
        'flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg min-w-[220px] max-w-xs text-base font-medium border mb-3 pointer-events-auto',
        variantClass,
        'transition-all duration-200 ease-in-out',
        show
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 -translate-y-2 scale-95',
      )}
    >
      <span className="flex items-center">{icon ?? icons[variant]}</span>
      <span className="flex-1">{message}</span>
    </div>
  );
}

let toastRoot: HTMLDivElement | null = null;
let reactRoot: Root | null = null;
let toasts: Array<{ key: number; props: ToastProps }> = [];
let key = 0;

function renderToasts() {
  if (!toastRoot) {
    toastRoot = document.createElement('div');
    toastRoot.className =
      'fixed top-4 left-1/2 z-[9999] -translate-x-1/2 flex flex-col items-center pointer-events-none';
    document.body.appendChild(toastRoot);
    reactRoot = createRoot(toastRoot);
  }
  (reactRoot as Root).render(
    <>
      {toasts.map(({ key, props }) => (
        <Toast key={key} {...props} />
      ))}
    </>,
  );
}

function removeToast(k: number) {
  toasts = toasts.filter((t) => t.key !== k);
  renderToasts();
}

function notify(
  message: React.ReactNode,
  variant: ToastVariant,
  opts?: { duration?: number; icon?: React.ReactNode },
) {
  key++;
  toasts.push({
    key,
    props: {
      message,
      variant,
      icon: opts?.icon,
      duration: opts?.duration,
      k: key,
    },
  });
  renderToasts();
}

export const toast = {
  message: (
    message: React.ReactNode,
    opts?: {
      variant?: ToastVariant;
      duration?: number;
      icon?: React.ReactNode;
    },
  ) => notify(message, opts?.variant ?? 'info', opts),
  info: (
    message: React.ReactNode,
    opts?: { duration?: number; icon?: React.ReactNode },
  ) => notify(message, 'info', opts),
  success: (
    message: React.ReactNode,
    opts?: { duration?: number; icon?: React.ReactNode },
  ) => notify(message, 'success', opts),
  warning: (
    message: React.ReactNode,
    opts?: { duration?: number; icon?: React.ReactNode },
  ) => notify(message, 'warning', opts),
  error: (
    message: React.ReactNode,
    opts?: { duration?: number; icon?: React.ReactNode },
  ) => notify(message, 'error', opts),
};
