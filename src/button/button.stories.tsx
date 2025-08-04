import type { Meta, StoryObj } from '@storybook/react-vite';
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
    loading: { control: 'boolean' },
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

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button {...args} size="xs">
        XS
      </Button>
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

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      <Button {...args}>Primary</Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="dashed">
        Dashed
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
  ),
};

export const DisabledStates: Story = {
  args: { disabled: true },
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      <Button {...args}>Primary</Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="dashed">
        Dashed
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
  ),
};

export const DangerStates: Story = {
  args: { danger: true },
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      <Button {...args}>Primary</Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="dashed">
        Dashed
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
  ),
};

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

export const LoadingStates: Story = {
  args: { loading: true },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Button {...args} size="xs">
          XS
        </Button>
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

      <div className="flex items-center gap-4">
        <Button {...args} variant="primary">
          Primary
        </Button>
        <Button {...args} variant="outline">
          Outline
        </Button>
        <Button {...args} variant="dashed">
          Outline
        </Button>
        <Button {...args} variant="link">
          Link
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Button {...args} danger>
          Primary
        </Button>
        <Button {...args} variant="outline" danger>
          Outline
        </Button>
        <Button {...args} variant="dashed" danger>
          Dashed
        </Button>
        <Button {...args} variant="link" danger>
          Link
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Button {...args} size="xs" icon={<AiFillNotification />} />
        <Button {...args} size="sm" icon={<AiFillNotification />} />
        <Button {...args} size="default" icon={<AiFillNotification />} />
        <Button {...args} size="lg" icon={<AiFillNotification />} />
      </div>

      <div className="flex items-center gap-4">
        <Button {...args} size="default" icon={<AiFillNotification />}>
          With Text
        </Button>
        <Button {...args} size="lg" icon={<AiFillNotification />}>
          Large With Text
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Button {...args} size="default" disabled>
          Disabled + Loading
        </Button>
      </div>
    </div>
  ),
};
