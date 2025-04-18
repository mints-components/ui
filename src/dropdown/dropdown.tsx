import clsx from 'clsx';

export interface DropdownItem {
  label: JSX.Element | string;
  href?: string;
  onClick?: () => void;
}

interface DropdownProps {
  children: JSX.Element | string;
  menu: DropdownItem[];
  align?: 'left' | 'right';
}

export function Dropdown({ menu, align = 'right', children }: DropdownProps) {
  return (
    <div className="relative inline-block text-left">
      <div className="group inline-flex flex-col">
        <div>{children}</div>
        <div
          className={clsx(
            'absolute top-full translate-y-1 group-hover:translate-y-2 transition-all duration-200 ease-out',
            'opacity-0 invisible group-hover:opacity-100 group-hover:visible',
            'min-w-[160px] rounded-md border border-gray-200 bg-white shadow-lg z-50',
            align === 'right' ? 'right-0' : 'left-0',
          )}
        >
          <ul className="py-1 text-sm text-gray-700">
            {menu.map((item, i) =>
              item.href ? (
                <a
                  key={i}
                  href={item.href}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {item.label}
                </a>
              ) : (
                <li
                  key={i}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={item.onClick}
                >
                  {item.label}
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
