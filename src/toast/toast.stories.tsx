import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../button';

import { toast } from './toast';

const meta: Meta = {
  title: 'Components/Toast',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A global Toast utility supporting info, success, warning, and error variants. Use `toast.success("...")` and similar methods to display notifications.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button onClick={() => toast.info('This is an informational message.')}>
        Info
      </Button>
      <Button onClick={() => toast.success('Operation successful!')}>
        Success
      </Button>
      <Button onClick={() => toast.warning('This is a warning message.')}>
        Warning
      </Button>
      <Button onClick={() => toast.error('An error occurred!')}>Error</Button>
    </div>
  ),
};

export const CustomDuration: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast.success('Disappears after 5 seconds', { duration: 5000 })
      }
    >
      Custom Duration (5s)
    </Button>
  ),
};

export const CustomIcon: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast.success('With custom icon', {
          icon: (
            <span role="img" aria-label="rocket" className="text-lg">
              🚀
            </span>
          ),
        })
      }
    >
      Custom Icon
    </Button>
  ),
};
