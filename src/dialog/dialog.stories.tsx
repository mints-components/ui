import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Button } from '../button';

import { Dialog } from './dialog';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A general-purpose Dialog/modal component supporting title, content, and footer. The content area supports any custom React nodes, such as forms or text.',
      },
    },
  },
  args: {
    showClose: true,
  },
  argTypes: {
    showClose: { control: 'boolean' },
    title: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          title="Default Dialog"
          footer={<Button onClick={() => setOpen(false)}>Close</Button>}
        >
          This is a basic dialog. The content area supports any React nodes.
        </Dialog>
      </>
    );
  },
};

export const FormDialog: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          title="Form Dialog"
          footer={
            <>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => alert('Submitted!')}>
                Submit
              </Button>
            </>
          }
        >
          <form className="flex flex-col gap-4">
            <div>
              <label className="block mb-1 text-sm text-zinc-700 dark:text-zinc-200">
                Username
              </label>
              <input className="w-full border border-zinc-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-900" />
            </div>
            <div>
              <label className="block mb-1 text-sm text-zinc-700 dark:text-zinc-200">
                Email
              </label>
              <input className="w-full border border-zinc-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-900" />
            </div>
          </form>
        </Dialog>
      </>
    );
  },
};
