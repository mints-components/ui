import React from 'react';

export function Search({
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
      <circle cx="9" cy="9" r="5.3" />
      <line x1="13.2" y1="13.2" x2="17" y2="17" />
    </svg>
  );
}
