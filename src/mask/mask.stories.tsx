import type { Meta, StoryObj } from '@storybook/react-vite';
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
          'A full-screen mask overlay component with blur and dark mode support. Includes optional close button and configurable z-index.',
      },
    },
  },
  argTypes: {
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

export const Default: Story = {
  args: {
    open: false,
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
