import type { Meta, StoryObj } from '@storybook/react-vite';
import { AiFillNotification } from 'react-icons/ai';

import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Badge component for status and labeling, supporting solid, outline, and soft variants, multiple colors, sizes, and optional icons.',
      },
    },
  },
  args: {
    size: 'default',
    variant: 'solid',
    color: 'default',
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['solid', 'outline', 'soft'],
    },
    color: {
      control: 'radio',
      options: ['default', 'success', 'warning', 'danger'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'default', 'lg'],
    },
    icon: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4 items-center">
      <Badge {...args} variant="solid">
        Solid
      </Badge>
      <Badge {...args} variant="outline">
        Outline
      </Badge>
      <Badge {...args} variant="soft">
        Soft
      </Badge>
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4 items-center">
      <Badge {...args} color="default">
        Default
      </Badge>
      <Badge {...args} color="success">
        Success
      </Badge>
      <Badge {...args} color="warning">
        Warning
      </Badge>
      <Badge {...args} color="danger">
        Danger
      </Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4 items-center">
      <Badge {...args} size="sm">
        Small
      </Badge>
      <Badge {...args} size="default">
        Default
      </Badge>
      <Badge {...args} size="lg">
        Large
      </Badge>
    </div>
  ),
};

export const WithIcon: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4 items-center">
      <Badge {...args} icon={<AiFillNotification />} />
      <Badge {...args} icon={<AiFillNotification />}>
        With Text
      </Badge>
      <Badge
        {...args}
        color="success"
        variant="outline"
        icon={<AiFillNotification />}
      >
        Success
      </Badge>
      <Badge
        {...args}
        color="danger"
        variant="soft"
        icon={<AiFillNotification />}
      >
        Danger
      </Badge>
    </div>
  ),
};
