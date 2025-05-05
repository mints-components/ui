import type { Meta, StoryObj } from '@storybook/react';
import { AiFillNotification } from 'react-icons/ai';

import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A general-purpose Button component supporting primary, outline, and link variants, along with icon, size, and disabled options.',
      },
    },
  },
  args: {
    size: 'default',
    disabled: false,
  },
  argTypes: {
    disabled: { control: 'boolean' },
    variant: {
      control: 'radio',
      options: ['primary', 'outline', 'link'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'default', 'lg'],
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

//
// 🌟 Basic showcase
//

export const Basic: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
};

//
// 🌟 Variants showcase
//
export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      <Button {...args}>Primary</Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
  ),
};

//
// 🌟 Sizes showcase
//
export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="default">
        Default
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
  ),
};

//
// 🌟 Disabled states showcase
//
export const DisabledStates: Story = {
  args: { disabled: true },
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      <Button {...args}>Primary</Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
  ),
};

//
// 🌟 With icon showcase
//
export const WithIcon: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button {...args} icon={<AiFillNotification />} />
      <Button {...args} variant="outline" icon={<AiFillNotification />} />
      <Button {...args} variant="link" icon={<AiFillNotification />} />
      <Button {...args} icon={<AiFillNotification />}>
        With Text
      </Button>
      <Button {...args} variant="outline" icon={<AiFillNotification />}>
        With Text
      </Button>
      <Button {...args} variant="link" icon={<AiFillNotification />}>
        With Text
      </Button>
    </div>
  ),
};
