import React from 'react';

export function Close({
  size = 20,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <line x1="5.5" y1="5.5" x2="14.5" y2="14.5" />
      <line x1="14.5" y1="5.5" x2="5.5" y2="14.5" />
    </svg>
  );
}
