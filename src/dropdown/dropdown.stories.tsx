import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../button';

import { Dropdown } from './dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Dropdown component that displays a menu on hover. Supports alignment and custom trigger elements.',
      },
    },
  },
  args: {
    menu: [
      { label: 'Profile', href: '/profile' },
      { label: 'Settings', href: '/settings' },
      { label: 'Logout', href: '/logout' },
    ],
  },
  argTypes: {
    align: {
      control: 'radio',
      options: ['left', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Button>Dropdown</Button>,
  },
};

export const WithTextTrigger: Story = {
  args: {
    children: (
      <span className="cursor-pointer text-sm font-medium">Hover me</span>
    ),
  },
};

export const LeftAligned: Story = {
  args: {
    align: 'left',
    children: <Button>Left Aligned</Button>,
  },
};

export const RightAligned: Story = {
  args: {
    align: 'right',
    children: <Button>Right Aligned</Button>,
  },
};

export const CustomMenuItems: Story = {
  render: (args) => (
    <Dropdown
      {...args}
      menu={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Notifications', href: '/notifications' },
        {
          label: 'Logout',
          onClick: () => alert('Logging out...'),
        },
      ]}
    >
      <Button>Custom Menu</Button>
    </Dropdown>
  ),
};
