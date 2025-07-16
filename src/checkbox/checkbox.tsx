import clsx from 'clsx';

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  indeterminate?: boolean;
}

export function Checkbox({
  label,
  indeterminate = false,
  className,
  disabled,
  children,
  ...props
}: CheckboxProps) {
  const inputRef = (el: HTMLInputElement | null) => {
    if (el) {
      el.indeterminate = !!indeterminate && !props.checked;
    }
  };

  return (
    <label
      className={clsx(
        'inline-flex items-center gap-2 cursor-pointer select-none',
        disabled && 'opacity-50 cursor-not-allowed',
        className,
      )}
    >
      <span className="relative w-5 h-5">
        <input
          ref={inputRef}
          type="checkbox"
          disabled={disabled}
          className={clsx(
            'peer appearance-none w-full h-full border rounded transition-all',
            'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 dark:focus:ring-zinc-300',
            props.checked || indeterminate
              ? 'bg-zinc-900 border-zinc-900 dark:bg-white/10 dark:border-white/40'
              : 'bg-white border-zinc-400 dark:bg-zinc-900 dark:border-zinc-500',
            !disabled &&
              'peer-hover:scale-[1.04] peer-hover:shadow peer-hover:border-zinc-700 dark:peer-hover:border-white/60',
            disabled &&
              'bg-zinc-200 border-zinc-200 dark:bg-zinc-800 dark:border-zinc-700',
          )}
          {...props}
        />

        <svg
          className={clsx(
            'absolute top-1/2 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 text-white transition-opacity duration-200 pointer-events-none',
            props.checked || indeterminate ? 'opacity-100' : 'opacity-0',
          )}
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {props.checked ? (
            <polyline points="20 6 9 17 4 12" />
          ) : indeterminate ? (
            <line x1="6" y1="12" x2="18" y2="12" />
          ) : null}
        </svg>
      </span>

      {(label || children) && (
        <span className="text-sm font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
          {label || children}
        </span>
      )}
    </label>
  );
}
