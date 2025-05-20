import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Button } from '../button';

import { Mask } from './mask';

const meta: Meta<typeof Mask> = {
  title: 'Components/Mask',
  component: Mask,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A full-screen mask overlay component that supports customizable opacity, z-index, and a closable button.',
      },
    },
  },
  argTypes: {
    opacity: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
    },
    zIndex: {
      control: 'number',
    },
    closable: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    open: false,
    opacity: 0.6,
    zIndex: 1000,
    closable: true,
  },
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div className="p-8 space-y-4">
        <Button onClick={() => setOpen(true)}>Open Mask</Button>

        <Mask {...args} open={open} onClose={() => setOpen(false)}>
          <div className="text-xl">Loading...</div>
        </Mask>
      </div>
    );
  },
};
