import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { AutoComplete } from './auto-complete';

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      style={{
        border: '1px solid #d97706',
        borderRadius: 8,
        padding: '8px 12px',
        width: '100%',
        fontWeight: 500,
        color: '#b45309',
        background: '#fffbe9',
      }}
    />
  );
}

const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
  { label: 'Peach', value: 'peach' },
  { label: 'Strawberry', value: 'strawberry' },
];

const meta: Meta<typeof AutoComplete> = {
  title: 'Components/AutoComplete',
  component: AutoComplete,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible AutoComplete input supporting custom options, loading, clearable, keyboard navigation, and both light and dark themes.',
      },
    },
  },
  args: {
    options,
    placeholder: 'Type to search...',
    disabled: false,
    loading: false,
    clearable: false,
  },
  argTypes: {
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    clearable: { control: 'boolean' },
    value: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Clearable: Story = {
  args: {
    clearable: true,
  },
};

export const LoadingState: Story = {
  args: {
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'banana',
  },
};

export const CustomInput: Story = {
  args: {
    clearable: true,
    placeholder: 'Search with custom input...',
  },
  render: (args) => (
    <AutoComplete {...args}>
      <Input />
    </AutoComplete>
  ),
};
