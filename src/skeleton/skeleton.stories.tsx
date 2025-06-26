import type { Meta, StoryObj } from '@storybook/react-vite';

import { Skeleton } from './skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Skeleton component for displaying loading placeholders. Supports custom width, height, border radius, and shape.',
      },
    },
  },
  args: {
    width: 120,
    height: 20,
    rounded: 'md',
  },
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    rounded: {
      control: 'radio',
      options: ['sm', 'md', 'lg', 'full'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Shapes: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Skeleton {...args} width={40} height={40} rounded="full" />
      <Skeleton {...args} width={80} height={40} rounded="md" />
      <Skeleton {...args} width={120} height={20} rounded="lg" />
      <Skeleton {...args} width={200} height={8} rounded="sm" />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Skeleton {...args} width={80} height={12} />
      <Skeleton {...args} width={160} height={20} />
      <Skeleton {...args} width={240} height={32} />
      <Skeleton {...args} width="100%" height={16} />
    </div>
  ),
};

export const BlockExample: Story = {
  render: (args) => (
    <div className="w-64 space-y-4">
      <Skeleton {...args} width="100%" height={24} />
      <Skeleton {...args} width="100%" height={16} />
      <Skeleton {...args} width="60%" height={16} />
      <div className="flex items-center gap-3">
        <Skeleton {...args} width={40} height={40} rounded="full" />
        <div className="flex-1 space-y-2">
          <Skeleton {...args} width="100%" height={12} />
          <Skeleton {...args} width="80%" height={12} />
        </div>
      </div>
    </div>
  ),
};
