import clsx from 'clsx';

export interface SpinnerProps {
  size?: number;
  color?: string;
  className?: string;
}

export function Spinner({
  size = 24,
  color = '#4b5563',
  className,
}: SpinnerProps) {
  const borderWidth = size / 8;

  return (
    <div
      className={clsx(
        'inline-block rounded-full animate-spin',
        'border-2 border-zinc-300',
        className,
      )}
      style={{
        width: size,
        height: size,
        borderWidth,
        borderTopWidth: borderWidth,
        borderTopColor: color,
      }}
    />
  );
}
