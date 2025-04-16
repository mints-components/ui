import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Button',
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
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
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
