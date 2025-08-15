import type { Meta, StoryObj } from '@storybook/react-vite';

import { Progress } from './progress';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A progress bar supporting determinate/indeterminate states, size and variant options, dark mode, and custom color override.',
      },
    },
  },
  args: {
    value: 50,
    max: 100,
    size: 'default',
    variant: 'primary',
  },
  argTypes: {
    value: { control: { type: 'number', min: 0, max: 100, step: 1 } },
    max: { control: { type: 'number', min: 1 } },
    size: { control: 'radio', options: ['sm', 'default', 'lg'] },
    variant: {
      control: 'radio',
      options: ['primary', 'success', 'warning', 'danger'],
    },
    color: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-64">
      <Progress {...args} />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 w-64">
      <Progress {...args} size="sm" />
      <Progress {...args} size="default" />
      <Progress {...args} size="lg" />
    </div>
  ),
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 w-64">
      <Progress {...args} variant="primary" />
      <Progress {...args} variant="success" />
      <Progress {...args} variant="warning" />
      <Progress {...args} variant="danger" />
    </div>
  ),
};

export const Indeterminate: Story = {
  args: { value: undefined },
  render: (args) => (
    <div className="flex flex-col gap-4 w-64">
      <Progress {...args} variant="primary" />
      <Progress {...args} variant="success" />
      <Progress {...args} variant="warning" />
      <Progress {...args} variant="danger" />
    </div>
  ),
};

export const CustomColor: Story = {
  args: { color: '#7c3aed' },
  render: (args) => (
    <div className="flex flex-col gap-4 w-64">
      <Progress {...args} value={20} />
      <Progress {...args} value={60} />
      <Progress {...args} value={90} />
    </div>
  ),
};
