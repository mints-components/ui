import clsx from 'clsx';

import { Button } from '../button';
import { ChevronLeft, ChevronRight, Ellipsis } from '../icons';
import { Input } from '../input';
import { Select } from '../select';

export type PaginationSize = 'sm' | 'default' | 'lg';

export interface PaginationProps {
  current: number;
  total: number;
  showSizeChanger?: boolean;
  pageSizeOptions?: number[];
  pageSize?: number;
  size?: PaginationSize;
  disabled?: boolean;
  showQuickJumper?: boolean;
  showTotal?:
    | boolean
    | ((total: number, range: [number, number]) => React.ReactNode);
  onChange?: (page: number, pageSize?: number) => void;
  onShowSizeChange?: (current: number, size: number) => void;
  className?: string;
}

function getVisiblePages(
  current: number,
  total: number,
): (number | 'ellipsis')[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | 'ellipsis')[] = [1];

  if (current <= 4) {
    pages.push(2, 3, 4, 5, 'ellipsis', total);
  } else if (current >= total - 3) {
    pages.push('ellipsis', total - 4, total - 3, total - 2, total - 1, total);
  } else {
    pages.push(
      'ellipsis',
      current - 1,
      current,
      current + 1,
      'ellipsis',
      total,
    );
  }

  return pages;
}

export function Pagination({
  current = 1,
  total = 0,
  showSizeChanger = false,
  pageSizeOptions = [10, 20, 50, 100],
  pageSize = 10,
  size = 'default',
  disabled = false,
  showQuickJumper = false,
  showTotal = false,
  onChange,
  onShowSizeChange,
  className,
}: PaginationProps) {
  const totalPages = Math.ceil(total / pageSize) || 1;
  const visiblePages = getVisiblePages(current, totalPages);

  const handlePageChange = (page: number) => {
    if (disabled || page < 1 || page > totalPages || page === current) return;
    onChange?.(page, pageSize);
  };

  const handlePageSizeChange = (newSize: number) => {
    if (disabled) return;
    const newPage = Math.min(current, Math.ceil(total / newSize));
    onShowSizeChange?.(newPage, newSize);
    onChange?.(newPage, newSize);
  };

  const handleQuickJump = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const page = parseInt((e.target as HTMLInputElement).value);
      if (!isNaN(page) && page >= 1 && page <= totalPages) {
        handlePageChange(page);
        (e.target as HTMLInputElement).value = '';
      }
    }
  };

  const renderTotal = () => {
    if (!showTotal || !total) return null;

    const start = (current - 1) * pageSize + 1;
    const end = Math.min(current * pageSize, total);

    if (typeof showTotal === 'function') {
      return showTotal(total, [start, end]);
    }

    return (
      <span className="text-sm text-zinc-600 dark:text-zinc-400">
        Showing {start}-{end} of {total} items
      </span>
    );
  };

  const buttonSize = size === 'sm' ? 'xs' : size === 'lg' ? 'default' : 'sm';
  const inputSize = size === 'sm' ? 'xs' : size === 'lg' ? 'default' : 'sm';

  return (
    <div className={clsx('flex items-center justify-between gap-4', className)}>
      <div className="flex items-center gap-4">
        {renderTotal()}

        {showSizeChanger && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              Show
            </span>
            <Select
              options={pageSizeOptions.map((option) => ({
                label: option,
                value: option,
              }))}
              value={pageSize}
              onChange={(value) => handlePageSizeChange(value as number)}
              disabled={disabled}
              size={inputSize}
            />
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              per page
            </span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-1">
        <Button
          variant="outline"
          size={buttonSize}
          icon={<ChevronLeft size={30} />}
          disabled={disabled || current <= 1}
          onClick={() => handlePageChange(current - 1)}
          aria-label="Previous page"
        />

        {visiblePages.map((page, index) => {
          if (page === 'ellipsis') {
            return (
              <div
                key={`ellipsis-${index}`}
                className="flex items-center justify-center w-8 h-8 text-zinc-400"
              >
                <Ellipsis className="w-4 h-4" />
              </div>
            );
          }

          return (
            <Button
              key={page}
              variant={page === current ? 'primary' : 'outline'}
              size={buttonSize}
              disabled={disabled}
              onClick={() => handlePageChange(page)}
              aria-label={`Page ${page}`}
              aria-current={page === current ? 'page' : undefined}
            >
              {page}
            </Button>
          );
        })}

        <Button
          variant="outline"
          size={buttonSize}
          icon={<ChevronRight />}
          disabled={disabled || current >= totalPages}
          onClick={() => handlePageChange(current + 1)}
          aria-label="Next page"
        />

        {showQuickJumper && (
          <div className="flex items-center gap-2 ml-4">
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              Go to
            </span>
            <Input
              type="number"
              min={1}
              max={totalPages}
              disabled={disabled}
              onKeyDown={handleQuickJump}
              placeholder="..."
              size={inputSize}
              className="w-16"
            />
          </div>
        )}
      </div>
    </div>
  );
}
