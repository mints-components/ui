import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';

import { Button } from '../button';

import { Callout } from './callout';

const meta: Meta<typeof Callout> = {
  title: 'Components/Callout',
  component: Callout,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible Callout component for displaying prominent inline messages or alerts. Supports primary, outline, danger, warning, and success variants, as well as icon, size, and closable options. Designed for both light and dark themes.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'outline', 'danger', 'warning', 'success'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'default', 'lg'],
    },
    closable: { control: 'boolean' },
    onClose: { action: 'closed' },
  },
  args: {
    variant: 'primary',
    size: 'default',
    closable: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Callout
      {...args}
      icon={<AiOutlineInfoCircle className="w-5 h-5 text-zinc-600" />}
    >
      This is a basic callout.
    </Callout>
  ),
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Callout {...args} variant="primary" icon={<span>ℹ️</span>}>
        Primary variant
      </Callout>
      <Callout {...args} variant="outline" icon={<span>📦</span>}>
        Outline variant
      </Callout>
      <Callout {...args} variant="danger" icon={<span>❌</span>}>
        Danger variant
      </Callout>
      <Callout {...args} variant="warning" icon={<span>⚠️</span>}>
        Warning variant
      </Callout>
      <Callout {...args} variant="success" icon={<span>✅</span>}>
        Success variant
      </Callout>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Callout {...args} size="sm" icon={<span>🔹</span>}>
        Small size
      </Callout>
      <Callout {...args} size="default" icon={<span>🔸</span>}>
        Default size
      </Callout>
      <Callout {...args} size="lg" icon={<span>🔷</span>}>
        Large size
      </Callout>
    </div>
  ),
};

export const Closable: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true);
    return open ? (
      <Callout
        {...args}
        closable
        onClose={() => setOpen(false)}
        icon={<AiOutlineInfoCircle className="w-5 h-5 text-zinc-600" />}
      >
        This callout can be closed by clicking ×.
      </Callout>
    ) : (
      <Button variant="link" onClick={() => setOpen(true)}>
        Show Callout
      </Button>
    );
  },
};
