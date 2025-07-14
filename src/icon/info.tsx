import React from 'react';

export function Info({
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
      <line x1="10" y1="4.5" x2="10" y2="13" />
      <circle cx="10" cy="15.5" r="1.15" fill="currentColor" stroke="none" />
    </svg>
  );
}
