import clsx from 'clsx';

export type ArrowPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface ArrowProps {
  placement?: ArrowPlacement;
  size?: number;
  className?: string;
}

export function Arrow({ placement = 'top', size = 6, className }: ArrowProps) {
  const rotation = {
    top: 'rotate-180',
    bottom: '',
    left: 'rotate-90',
    right: '-rotate-90',
  }[placement];

  const positionClass = {
    top: 'top-full left-1/2 -translate-x-1/2',
    bottom: 'bottom-full left-1/2 -translate-x-1/2',
    left: 'left-full top-1/2 -translate-y-1/2 -translate-x-1/4',
    right: 'right-full top-1/2 -translate-y-1/2 translate-x-1/4',
  }[placement];

  return (
    <div
      className={clsx('absolute', rotation, positionClass, className)}
      style={{
        width: size * 2,
        height: size,
        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
      }}
    />
  );
}
