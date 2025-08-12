import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../button';

import { TypeWriter } from './type-writer';

const meta: Meta<typeof TypeWriter> = {
  title: 'Components/TypeWriter',
  component: TypeWriter,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'An accessible, dependency-free typewriter effect. Supports multiple strings, speed control, start delay, delete speed, pauses, looping, and customizable cursor.',
      },
    },
  },
  args: {
    strings: ['Mints UI', 'Beautifully minimal', 'Typed with TypeScript'],
    speed: 60,
    deleteSpeed: 30,
    startDelay: 0,
    pauseBetween: 1200,
    loop: true,
    cursor: '|',
    cursorBlink: true,
  },
  argTypes: {
    strings: {
      control: 'object',
      description: 'A single string or array of strings to type.',
    },
    speed: {
      control: { type: 'number', min: 0, step: 5 },
      description: 'Milliseconds per character when typing.',
    },
    deleteSpeed: {
      control: { type: 'number', min: 0, step: 5 },
      description: 'Milliseconds per character when deleting.',
    },
    startDelay: {
      control: { type: 'number', min: 0, step: 100 },
      description: 'Delay before typing starts (ms).',
    },
    pauseBetween: {
      control: { type: 'number', min: 0, step: 100 },
      description: 'Pause after finishing a string (ms).',
    },
    loop: {
      control: 'boolean',
      description: 'Loop through all strings indefinitely.',
    },
    cursor: {
      control: 'text',
      description:
        'Cursor content. Use a string like "|" or "_" for custom, leave empty to hide.',
    },
    cursorBlink: {
      control: 'boolean',
      description: 'Apply a simple blink animation to the cursor.',
    },
    className: { control: false },
    onCycleEnd: { action: 'cycleEnd' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const MultipleStrings: Story = {
  args: {
    strings: ['Build fast.', 'Ship minimal.', 'Polish later.'],
    loop: true,
  },
};

export const CustomCursor: Story = {
  args: {
    cursor: '▍',
    cursorBlink: true,
  },
};

export const NoCursor: Story = {
  args: {
    cursor: '',
  },
};

export const SpeedShowcase: Story = {
  args: {
    speed: 30,
    deleteSpeed: 15,
    pauseBetween: 600,
    strings: ['Snappy typing', 'and quicker deletes'],
  },
};

export const DelayedStart: Story = {
  args: {
    startDelay: 1000,
    strings: ['Wait for it…', 'Here we go!'],
  },
};

export const NoLoopHoldOnFinish: Story = {
  name: 'No Loop + Hold on Finish',
  args: {
    loop: false,
    strings: ['Type once and hold.'],
    pauseBetween: 1500,
    holdOnFinish: 2000,
  },
};

export const InAHeading: Story = {
  render: (args) => (
    <div className="flex flex-col items-center gap-6 text-center">
      <h1 className="text-3xl font-bold">
        <TypeWriter {...args} />
      </h1>
      <p className="text-zinc-600 dark:text-zinc-300 max-w-md">
        Drop this into a hero section to animate your headline without extra
        dependencies.
      </p>
      <div className="flex gap-3">
        <Button>Get Started</Button>
        <Button variant="outline">Docs</Button>
      </div>
    </div>
  ),
  args: {
    strings: ['Mints UI, but alive.', 'Type. Pause. Delete. Repeat.'],
    loop: true,
    speed: 55,
    deleteSpeed: 28,
    pauseBetween: 900,
    cursor: '▌',
  },
};
