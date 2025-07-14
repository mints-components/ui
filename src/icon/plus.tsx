import React from 'react';

export function Plus({
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
      <line x1="10" y1="5" x2="10" y2="15" />
      <line x1="5" y1="10" x2="15" y2="10" />
    </svg>
  );
}
