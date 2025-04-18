import clsx from 'clsx';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg';
  rounded?: boolean;
}

const sizeMap: Record<'sm' | 'md' | 'lg', { box: string; text: string }> = {
  sm: { box: 'w-8 h-8', text: 'text-sm' },
  md: { box: 'w-10 h-10', text: 'text-base' },
  lg: { box: 'w-16 h-16', text: 'text-xl' },
};

export function Avatar({
  src,
  alt,
  name,
  size = 'md',
  rounded = true,
  className,
  ...props
}: AvatarProps) {
  const fallback = name?.charAt(0).toUpperCase() ?? '?';
  const isImage = Boolean(src);
  const { box, text } = sizeMap[size] ?? sizeMap.md;

  return (
    <div
      className={clsx(
        'inline-flex items-center justify-center bg-gray-200 text-gray-600 font-medium overflow-hidden',
        box,
        text,
        rounded ? 'rounded-full' : 'rounded-md',
        className,
      )}
      {...props}
    >
      {isImage ? (
        <img
          src={src}
          alt={alt || name || 'Avatar'}
          className="w-full h-full object-cover"
        />
      ) : (
        fallback
      )}
    </div>
  );
}
