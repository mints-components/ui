import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { AiFillApple } from 'react-icons/ai';

import { Select } from './select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A general-purpose Select component supporting outline style, size, icon, disabled, and placeholder options.',
      },
    },
  },
  args: {
    size: 'default',
    disabled: false,
    placeholder: 'Select a fruit',
    options: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Orange', value: 'orange' },
      { label: 'Disabled', value: 'disabled', disabled: true },
    ],
  },
  argTypes: {
    disabled: { control: 'boolean' },
    size: {
      control: 'radio',
      options: ['sm', 'default', 'lg'],
    },
    onChange: { action: 'onChange' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return <Select {...args} value={value} onChange={setValue} />;
  },
};

export const Sizes: Story = {
  render: (args) => {
    const [sm, setSm] = useState('');
    const [md, setMd] = useState('');
    const [lg, setLg] = useState('');
    return (
      <div className="flex flex-wrap gap-4 items-center">
        <Select {...args} size="sm" value={sm} onChange={setSm} />
        <Select {...args} size="default" value={md} onChange={setMd} />
        <Select {...args} size="lg" value={lg} onChange={setLg} />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      <Select {...args} value="" onChange={() => {}} />
    </div>
  ),
};

export const WithIcon: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <Select
        {...args}
        icon={<AiFillApple />}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState('banana');
    return (
      <div className="flex flex-col gap-4 items-start">
        <Select {...args} value={value} onChange={setValue} />
        <div>
          Selected value: <b>{value || 'None'}</b>
        </div>
      </div>
    );
  },
};
