import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Button } from '../button';
import { Info } from '../icons';

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
    <Callout {...args}>
      <span className="flex items-center gap-1">
        <Info size={20} />
        This is a basic callout.
      </span>
    </Callout>
  ),
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Callout {...args} variant="primary">
        <span className="mr-1.5">ℹ️</span>
        Primary variant
      </Callout>
      <Callout {...args} variant="outline">
        <span className="mr-1.5">📦</span>
        Outline variant
      </Callout>
      <Callout {...args} variant="danger">
        <span className="mr-1.5">❌</span>
        Danger variant
      </Callout>
      <Callout {...args} variant="warning">
        <span className="mr-1.5">⚠️</span>
        Warning variant
      </Callout>
      <Callout {...args} variant="success">
        <span className="mr-1.5">✅</span>
        Success variant
      </Callout>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Callout {...args} size="sm">
        <span className="mr-1.5">🔹</span>
        Small size
      </Callout>
      <Callout {...args} size="default">
        <span className="mr-1.5">🔸</span>
        Default size
      </Callout>
      <Callout {...args} size="lg">
        <span className="mr-1.5">🔷</span>
        Large size
      </Callout>
    </div>
  ),
};

export const Closable: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true);
    return open ? (
      <Callout {...args} closable onClose={() => setOpen(false)}>
        <span className="flex items-center gap-1">
          <Info size={20} />
          This callout can be closed by clicking ×.
        </span>
      </Callout>
    ) : (
      <Button variant="link" onClick={() => setOpen(true)}>
        Show Callout
      </Button>
    );
  },
};
