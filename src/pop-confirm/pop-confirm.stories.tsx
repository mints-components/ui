import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../button';

import { PopConfirm } from './pop-confirm';

const meta: Meta<typeof PopConfirm> = {
  title: 'Components/PopConfirm',
  component: PopConfirm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A confirmation popover that prompts user for confirmation before taking an action.',
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    confirmText: { control: 'text' },
    cancelText: { control: 'text' },
    onConfirm: { action: 'confirmed' },
    onCancel: { action: 'cancelled' },
  },
  args: {
    title: 'Are you sure?',
    description: 'This action cannot be undone.',
    confirmText: 'Yes',
    cancelText: 'No',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <PopConfirm {...args}>
      <Button danger>Delete</Button>
    </PopConfirm>
  ),
};

export const Placement: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-8 items-center justify-center">
      <PopConfirm {...args} placement="top">
        <Button danger>Top</Button>
      </PopConfirm>
      <PopConfirm {...args} placement="right">
        <Button danger>Right</Button>
      </PopConfirm>
      <PopConfirm {...args} placement="bottom">
        <Button danger>Bottom</Button>
      </PopConfirm>
      <PopConfirm {...args} placement="left">
        <Button danger>Left</Button>
      </PopConfirm>
    </div>
  ),
};

export const WithoutDescription: Story = {
  render: (args) => (
    <PopConfirm {...args} description={undefined}>
      <Button variant="outline" danger>
        Archive
      </Button>
    </PopConfirm>
  ),
};
