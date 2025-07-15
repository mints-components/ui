import React from 'react';

export function Link({
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
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <line x1="7" y1="10" x2="13" y2="10" />
      <circle cx="5" cy="10" r="2" />
      <circle cx="15" cy="10" r="2" />
    </svg>
  );
}
