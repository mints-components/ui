import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Pagination } from './pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A pagination component for navigating through large datasets with support for page size selection, quick jumping, and total count display.',
      },
    },
  },
  args: {
    current: 1,
    total: 100,
    size: 'default',
    disabled: false,
    showSizeChanger: false,
    showQuickJumper: false,
    showTotal: false,
    pageSize: 10,
  },
  argTypes: {
    current: { control: { type: 'number', min: 1 } },
    total: { control: { type: 'number', min: 0 } },
    pageSize: { control: { type: 'number', min: 1 } },
    size: {
      control: 'radio',
      options: ['sm', 'default', 'lg'],
    },
    disabled: { control: 'boolean' },
    showSizeChanger: { control: 'boolean' },
    showQuickJumper: { control: 'boolean' },
    showTotal: { control: 'boolean' },
    onChange: { action: 'page changed' },
    onShowSizeChange: { action: 'page size changed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    current: 5,
    total: 200,
  },
};

export const WithInteractiveState: Story = {
  render: () => {
    const [current, setCurrent] = useState(5);
    const [pageSize, setPageSize] = useState(10);
    const total = 247;

    const handleChange = (page: number, newPageSize?: number) => {
      setCurrent(page);
      if (newPageSize && newPageSize !== pageSize) {
        setPageSize(newPageSize);
      }
    };

    const handleShowSizeChange = (page: number, size: number) => {
      setCurrent(page);
      setPageSize(size);
    };

    const totalPages = Math.ceil(total / pageSize);

    return (
      <div className="space-y-4">
        <div className="text-sm text-zinc-600">
          Interactive pagination - try clicking pages, changing size, or using
          quick jump
        </div>
        <Pagination
          size="sm"
          current={current}
          total={total}
          pageSize={pageSize}
          showSizeChanger
          showQuickJumper
          showTotal
          onChange={handleChange}
          onShowSizeChange={handleShowSizeChange}
        />
        <div className="text-xs text-zinc-500">
          Current page: {current}, Page size: {pageSize}, Total pages:{' '}
          {totalPages}, Total items: {total}
        </div>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-2">Small</h3>
        <Pagination {...args} size="sm" />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Default</h3>
        <Pagination {...args} size="default" />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Large</h3>
        <Pagination {...args} size="lg" />
      </div>
    </div>
  ),
  args: {
    current: 3,
    total: 100,
  },
};

export const DifferentPageCounts: Story = {
  render: (args) => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-2">Few items (50 total)</h3>
        <Pagination {...args} current={3} total={50} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">
          Many items (500 total, current page 25)
        </h3>
        <Pagination {...args} current={25} total={500} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">
          Beginning (current page 2 of 200 items)
        </h3>
        <Pagination {...args} current={2} total={200} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">
          End (current page 19 of 200 items)
        </h3>
        <Pagination {...args} current={19} total={200} />
      </div>
    </div>
  ),
};

export const WithAllFeatures: Story = {
  args: {
    current: 8,
    total: 485,
    pageSize: 20,
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: true,
    pageSizeOptions: [10, 20, 50, 100],
  },
};

export const WithCustomTotal: Story = {
  args: {
    current: 3,
    total: 367,
    pageSize: 25,
    showTotal: (total, range) => (
      <span className="text-sm font-medium text-blue-600">
        Items {range[0]}-{range[1]} of {total} total
      </span>
    ),
  },
};

export const DisabledState: Story = {
  args: {
    current: 5,
    total: 200,
    disabled: true,
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: true,
  },
};

export const EdgeCases: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-2">Single item</h3>
        <Pagination current={1} total={1} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">First page of many items</h3>
        <Pagination current={1} total={1000} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Last page of many items</h3>
        <Pagination current={100} total={1000} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Empty state (0 items)</h3>
        <Pagination current={1} total={0} showTotal showSizeChanger />
      </div>
    </div>
  ),
};
