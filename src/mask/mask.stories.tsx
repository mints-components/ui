import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';

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
          'A full-screen mask overlay component with blur and dark mode support. Includes optional close button, configurable opacity, and z-index.',
      },
    },
  },
  argTypes: {
    opacity: {
      control: { type: 'range', min: 50, max: 100, step: 5 },
      defaultValue: 100,
      description: 'Tailwind opacity value, 0~100.',
    },
    zIndex: {
      control: { type: 'number' },
      defaultValue: 1000,
      description: 'z-index of the mask overlay.',
    },
    closable: {
      control: { type: 'boolean' },
      defaultValue: true,
      description: 'Show close button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: false,
    opacity: 100,
    zIndex: 1000,
    closable: true,
  },
  render: (args) => {
    const [{ open }, updateArgs] = useArgs();

    return (
      <div className="p-8 space-y-4">
        <Button onClick={() => updateArgs({ open: true })}>Open Mask</Button>
        <Mask {...args} open={open} onClose={() => updateArgs({ open: false })}>
          <div className="text-xl dark:text-white">Loading...</div>
        </Mask>
      </div>
    );
  },
};
