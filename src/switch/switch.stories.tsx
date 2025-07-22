import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Switch } from './switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A simple Switch component supporting size and disabled props.',
      },
    },
  },
  args: {
    size: 'default',
    disabled: false,
    checked: false,
  },
  argTypes: {
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    size: {
      control: 'radio',
      options: ['sm', 'default', 'lg'],
    },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: false,
    size: 'default',
  },
};

export const Sizes: Story = {
  render: (args) => {
    const [sm, setSm] = useState(false);
    const [md, setMd] = useState(false);
    const [lg, setLg] = useState(false);

    return (
      <div className="flex flex-wrap gap-6 items-center">
        <div className="flex flex-col items-center gap-2">
          <Switch {...args} size="sm" checked={sm} onChange={setSm} />
          <span className="dark:text-white">Small</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Switch {...args} size="default" checked={md} onChange={setMd} />
          <span className="dark:text-white">Default</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Switch {...args} size="lg" checked={lg} onChange={setLg} />
          <span className="dark:text-white">Large</span>
        </div>
      </div>
    );
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [on, setOn] = useState(false);
    return (
      <div className="flex flex-col gap-4 items-center">
        <Switch {...args} checked={on} onChange={setOn} />
        <span className="dark:text-white">{on ? 'On' : 'Off'}</span>
      </div>
    );
  },
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <div className="flex gap-6">
      <Switch {...args} checked={false} />
      <Switch {...args} checked={true} />
    </div>
  ),
};

export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.checked ?? false);
    return <Switch {...args} checked={value} onChange={setValue} />;
  },
};
