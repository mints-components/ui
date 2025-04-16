import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  args: {
    size: 'default',
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'default', 'lg'],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Label: Story = {
  args: {
    label: 'This is a label',
  },
};

export const WithError: Story = {
  args: {
    label: 'This is a label',
    error: 'This is an error',
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="space-y-4">
      <Input {...args} size="sm" />
      <Input {...args} />
      <Input {...args} />
    </div>
  ),
};
