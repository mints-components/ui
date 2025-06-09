import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from './tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Tooltip component that displays additional information on hover or focus. Supports placement, delay, and disabled state.',
      },
    },
  },
  args: {
    content: 'Tooltip text',
    placement: 'top',
    delay: 100,
    disabled: false,
  },
  argTypes: {
    content: { control: 'text' },
    placement: {
      control: 'radio',
      options: ['top', 'bottom', 'left', 'right'],
    },
    delay: { control: 'number' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <span className="inline-block text-base font-medium cursor-pointer">
        Hover me
      </span>
    </Tooltip>
  ),
};

export const Placement: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-8 items-center justify-center">
      <Tooltip {...args} placement="top">
        <span className="inline-block cursor-pointer">Top</span>
      </Tooltip>
      <Tooltip {...args} placement="right">
        <span className="inline-block cursor-pointer">Right</span>
      </Tooltip>
      <Tooltip {...args} placement="bottom">
        <span className="inline-block cursor-pointer">Bottom</span>
      </Tooltip>
      <Tooltip {...args} placement="left">
        <span className="inline-block cursor-pointer">Left</span>
      </Tooltip>
    </div>
  ),
};

export const Delay: Story = {
  render: (args) => (
    <Tooltip {...args} delay={500}>
      <span className="inline-block cursor-pointer">
        Hover me (500ms delay)
      </span>
    </Tooltip>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <Tooltip {...args}>
      <span className="inline-block cursor-not-allowed text-zinc-400">
        Disabled Tooltip
      </span>
    </Tooltip>
  ),
};

export const RichContent: Story = {
  render: (args) => (
    <Tooltip
      {...args}
      content={
        <span>
          <span className="font-semibold">Title</span>
          <br />
          <span>Additional details</span>
        </span>
      }
    >
      <span className="inline-block cursor-pointer">Rich content</span>
    </Tooltip>
  ),
};
