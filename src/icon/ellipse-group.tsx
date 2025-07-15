import React from 'react';

export function EllipseGroup({
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
      <ellipse cx="10" cy="10" rx="7" ry="5" />
      <ellipse cx="10" cy="10" rx="4" ry="2.5" />
    </svg>
  );
}
