import type { Meta, StoryObj } from '@storybook/react';

import { Radio } from './radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Radio component for selecting a single option from a group. Supports different sizes, disabled states, and works with any `children` as the label. Designed for accessible forms with support for controlled and uncontrolled modes.',
      },
    },
  },
  args: {
    size: 'default',
    disabled: false,
  },
  argTypes: {
    disabled: { control: 'boolean' },
    size: {
      control: 'radio',
      options: ['sm', 'default', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: 'Option 1',
  },
};

export const Sizes: Story = {
  args: {
    children: 'Option',
  },
  render: (args) => (
    <div className="flex flex-col gap-4 items-start">
      <Radio {...args} size="sm">
        Small
      </Radio>
      <Radio {...args} size="default">
        Default
      </Radio>
      <Radio {...args} size="lg">
        Large
      </Radio>
    </div>
  ),
};

export const DisabledStates: Story = {
  args: {
    children: 'Option',
    disabled: true,
  },
  render: (args) => (
    <div className="flex flex-col gap-4 items-start">
      <Radio {...args}>Disabled</Radio>
      <Radio {...args} checked>
        Disabled & Checked
      </Radio>
    </div>
  ),
};
