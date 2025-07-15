import React from 'react';

export function Waves({
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
      <path d="M3 8 Q5 10 7 8 Q9 6 11 8 Q13 10 17 8" />
      <path d="M3 14 Q5 16 7 14 Q9 12 11 14 Q13 16 17 14" />
    </svg>
  );
}
