import type { Meta, StoryObj } from '@storybook/react-vite';

import { Avatar } from './avatar';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Avatar is a simple component for displaying user profile pictures or initials. It supports different sizes (`sm`, `md`, `lg`) and allows optional rounding (`rounded=true` by default). If no image is provided, it displays the first letter of the `name` as fallback.',
      },
    },
  },
  args: {
    name: 'Mints',
    size: 'md',
    rounded: true,
  },
  argTypes: {
    rounded: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
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

export const Rounded: Story = {
  render: (args) => (
    <div className="space-x-4">
      <Avatar {...args} size="md" rounded={false} />
      <Avatar {...args} size="md" rounded />
    </div>
  ),
};
