import type { Meta, StoryObj } from '@storybook/react';
import { AiFillNotification } from 'react-icons/ai';

import { Button } from './button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    size: 'default',
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    variant: {
      control: 'radio',
      options: ['primary', 'outline'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'default', 'lg'],
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const Disabled: Story = {
  render: (args) => (
    <div className="space-x-4">
      <Button {...args} variant="primary" disabled>
        Primary
      </Button>
      <Button {...args} variant="outline" disabled>
        Outline
      </Button>
    </div>
  ),
  args: {
    disabled: true,
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="space-x-4">
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args}>Default</Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
  ),
  args: {
    variant: 'primary',
  },
};

export const Icon: Story = {
  render: (args) => (
    <div className="space-x-4">
      <Button {...args} variant="outline" icon={<AiFillNotification />} />
      <Button {...args} icon={<AiFillNotification />} />
      <Button {...args} variant="outline" icon={<AiFillNotification />}>
        Button
      </Button>
      <Button {...args} icon={<AiFillNotification />}>
        Button
      </Button>
    </div>
  ),
};
