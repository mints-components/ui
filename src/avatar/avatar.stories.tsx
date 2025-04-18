import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './avatar';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  args: {
    name: 'Mints',
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Rounded: Story = {
  render: (args) => (
    <div className="space-x-4">
      <Avatar {...args} size="md" rounded={false} />
      <Avatar {...args} size="md" rounded />
    </div>
  ),
};

export const Size: Story = {
  render: (args) => (
    <div className="space-x-4">
      <Avatar {...args} size="sm" />
      <Avatar {...args} size="md" />
      <Avatar {...args} size="lg" />
    </div>
  ),
};
