import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A general-purpose Input component supporting label, required, size variants, and error message display. Styled using the zinc color palette with full dark mode support. Accepts JSX as label.',
      },
    },
  },
  args: {
    size: 'default',
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'default', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter something...',
  },
};

export const Label: Story = {
  args: {
    label: 'This is a label',
    placeholder: 'With label',
  },
};

export const Required: Story = {
  args: {
    label: 'Required Field',
    required: true,
    placeholder: 'This field is required',
  },
};

export const WithError: Story = {
  args: {
    label: 'This is a label',
    error: 'This is an error',
    placeholder: 'With error',
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Input {...args} size="sm" label="Small" placeholder="Small size" />
      <Input
        {...args}
        size="default"
        label="Default"
        placeholder="Default size"
      />
      <Input {...args} size="lg" label="Large" placeholder="Large size" />
    </div>
  ),
};

export const WithCustomLabel: Story = {
  args: {
    label: (
      <span className="flex items-center gap-1">
        Email <span className="text-red-500">*</span>
      </span>
    ),
    placeholder: 'you@example.com',
  },
};
