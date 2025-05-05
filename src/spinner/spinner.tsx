import clsx from 'clsx';

export interface SpinnerProps {
  size?: number;
  color?: string;
  className?: string;
}

export function Spinner({ size, color = '#4b5563', className }: SpinnerProps) {
  const style = {
    ...(size
      ? {
          width: size,
          height: size,
          borderWidth: size / 8,
          borderTopWidth: size / 8,
        }
      : {
          width: '100%',
          height: '100%',
          borderWidth: '2px',
          borderTopWidth: '2px',
        }),
    borderTopColor: color,
  };

  return (
    <div
      className={clsx(
        'inline-block rounded-full animate-spin border-zinc-300',
        className,
      )}
      style={style}
    />
  );
}
