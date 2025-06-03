import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from './spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A minimal loading Spinner component using border animation. Supports custom size and optional color classes.',
      },
    },
  },
  args: {
    size: 24,
  },
  argTypes: {
    size: {
      control: { type: 'number', min: 8, max: 128, step: 4 },
    },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-6">
      <Spinner {...args} size={16} />
      <Spinner {...args} size={24} />
      <Spinner {...args} size={32} />
      <Spinner {...args} size={48} />
    </div>
  ),
};

export const CustomColors: Story = {
  render: (args) => (
    <div className="flex items-center gap-6">
      <Spinner {...args} color="#3b82f6" /> {/* blue-500 */}
      <Spinner {...args} color="#ef4444" /> {/* red-500 */}
      <Spinner {...args} color="#22c55e" /> {/* green-500 */}
      <Spinner {...args} color="#facc15" /> {/* yellow-400 */}
    </div>
  ),
};
