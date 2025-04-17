import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Label',
    checked: false,
    disabled: false,
    indeterminate: false,
    onChange: (e) => console.log(e.target.checked),
  },
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
};

export const Disabled: Story = {
  render: (args) => (
    <div className="space-x-4">
      <Checkbox {...args} label="Default" disabled />
      <Checkbox {...args} label="Indeterminate" indeterminate disabled />
      <Checkbox {...args} label="Checked" checked disabled />
    </div>
  ),
};
