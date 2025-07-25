import type { Meta, StoryObj } from '@storybook/react-vite';

import { Checkbox } from './checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          "A versatile Checkbox component that supports standard checked and indeterminate states. It is styled to match the Button component's design, with unified focus ring, hover, and disabled styles. Supports labels, accessibility attributes, and server-side rendering (SSR) without relying on client-side effects.",
      },
    },
  },
  args: {
    label: 'Label',
    checked: false,
    disabled: false,
    indeterminate: false,
    onChange: (e) => console.log(e.target.checked),
  },
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 items-start">
      <Checkbox {...args} size="sm">
        Small
      </Checkbox>
      <Checkbox {...args} size="default">
        Default
      </Checkbox>
      <Checkbox {...args} size="lg">
        Large
      </Checkbox>
    </div>
  ),
};

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
  args: {
    disabled: true,
  },
  render: (args) => (
    <div className="space-x-4">
      <Checkbox {...args} label="Default" />
      <Checkbox {...args} label="Indeterminate" indeterminate />
      <Checkbox {...args} label="Checked" checked />
    </div>
  ),
};
