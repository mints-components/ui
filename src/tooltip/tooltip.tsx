import clsx from 'clsx';
import React, { useRef, useState } from 'react';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  content: React.ReactNode;
  placement?: TooltipPlacement;
  delay?: number;
  className?: string;
  children: React.ReactElement;
  disabled?: boolean;
}

export function Tooltip({
  content,
  placement = 'top',
  delay = 100,
  className,
  children,
  disabled = false,
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const timer = useRef<number>();

  const show = () => {
    if (disabled) return;
    timer.current = window.setTimeout(() => setVisible(true), delay);
  };
  const hide = () => {
    clearTimeout(timer.current);
    setVisible(false);
  };

  const tooltipBg = '#3f3f46'; // zinc-700

  const getPositionClass = () => {
    switch (placement) {
      case 'top':
        return 'left-1/2 bottom-full mb-2 -translate-x-1/2';
      case 'bottom':
        return 'left-1/2 top-full mt-2 -translate-x-1/2';
      case 'left':
        return 'right-full top-1/2 mr-2 -translate-y-1/2';
      case 'right':
        return 'left-full top-1/2 ml-2 -translate-y-1/2';
      default:
        return '';
    }
  };

  const Arrow = () => {
    if (placement === 'top') {
      return (
        <span
          className="absolute left-1/2 top-full -translate-x-1/2"
          style={{
            width: 0,
            height: 0,
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderTop: `6px solid ${tooltipBg}`,
          }}
        />
      );
    }
    if (placement === 'bottom') {
      return (
        <span
          className="absolute left-1/2 bottom-full -translate-x-1/2"
          style={{
            width: 0,
            height: 0,
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderBottom: `6px solid ${tooltipBg}`,
          }}
        />
      );
    }
    if (placement === 'left') {
      return (
        <span
          className="absolute top-1/2 left-full -translate-y-1/2"
          style={{
            width: 0,
            height: 0,
            borderTop: '6px solid transparent',
            borderBottom: '6px solid transparent',
            borderLeft: `6px solid ${tooltipBg}`,
          }}
        />
      );
    }
    if (placement === 'right') {
      return (
        <span
          className="absolute top-1/2 right-full -translate-y-1/2"
          style={{
            width: 0,
            height: 0,
            borderTop: '6px solid transparent',
            borderBottom: '6px solid transparent',
            borderRight: `6px solid ${tooltipBg}`,
          }}
        />
      );
    }
    return null;
  };

  const child = React.cloneElement(children, {
    onMouseEnter: (e: React.MouseEvent) => {
      children.props.onMouseEnter?.(e);
      show();
    },
    onMouseLeave: (e: React.MouseEvent) => {
      children.props.onMouseLeave?.(e);
      hide();
    },
    onFocus: (e: React.FocusEvent) => {
      children.props.onFocus?.(e);
      show();
    },
    onBlur: (e: React.FocusEvent) => {
      children.props.onBlur?.(e);
      hide();
    },
    tabIndex: children.props.tabIndex ?? 0,
  });

  return (
    <span
      className="relative"
      style={{ display: 'inline-block', overflow: 'visible' }}
    >
      {child}
      {visible && (
        <span
          className={clsx(
            'absolute px-3 py-2 min-w-max rounded-md text-sm text-white shadow-lg z-50 bg-zinc-700 pointer-events-none transition-opacity duration-150',
            visible ? 'opacity-100' : 'opacity-0',
            getPositionClass(),
            className,
          )}
          role="tooltip"
          aria-hidden={!visible}
        >
          {content}
          <Arrow />
        </span>
      )}
    </span>
  );
}
