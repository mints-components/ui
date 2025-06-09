import clsx from 'clsx';
import React from 'react';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number | string;
  height?: number | string;
  rounded?: 'sm' | 'md' | 'lg' | 'full' | string;
  className?: string;
}

export function Skeleton({
  width,
  height,
  rounded = 'md',
  className,
  style,
  ...props
}: SkeletonProps) {
  return (
    <div
      className={clsx(
        'relative overflow-hidden bg-zinc-200/80',
        {
          'rounded-sm': rounded === 'sm',
          'rounded-md': rounded === 'md',
          'rounded-lg': rounded === 'lg',
          'rounded-full': rounded === 'full',
        },
        typeof rounded === 'string' &&
          !['sm', 'md', 'lg', 'full'].includes(rounded) &&
          rounded,
        'animate-pulse',
        className,
      )}
      style={{
        width,
        height,
        ...style,
      }}
      {...props}
    />
  );
}
