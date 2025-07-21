import type { Meta, StoryObj } from '@storybook/react-vite';

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
      <span>Hover me</span>
    </Tooltip>
  ),
};

export const Placement: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-8 items-center justify-center">
      <Tooltip {...args} placement="top">
        <span>Top</span>
      </Tooltip>
      <Tooltip {...args} placement="right">
        <span>Right</span>
      </Tooltip>
      <Tooltip {...args} placement="bottom">
        <span>Bottom</span>
      </Tooltip>
      <Tooltip {...args} placement="left">
        <span>Left</span>
      </Tooltip>
    </div>
  ),
};

export const Delay: Story = {
  render: (args) => (
    <Tooltip {...args} delay={500}>
      <span>Hover me (500ms delay)</span>
    </Tooltip>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <Tooltip {...args}>
      <span>Disabled Tooltip</span>
    </Tooltip>
  ),
};

export const RichContent: Story = {
  render: (args) => (
    <Tooltip
      {...args}
      content={
        <div>
          <span className="font-semibold">Title</span>
          <br />
          <span className="text-red-400">Additional details</span>
        </div>
      }
    >
      <span>Rich content</span>
    </Tooltip>
  ),
};
