import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from './card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Card component that supports different sizes, optional title with divider, and a minimal mode to simplify the layout.',
      },
    },
  },
  args: {
    size: 'default',
    minimal: false,
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'default', 'lg'],
    },
    minimal: { control: 'boolean' },
    title: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    children: <p>This is a basic card content.</p>,
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6 w-full max-w-2xl">
      <Card {...args} size="sm" title="Small Card">
        <p>Content for small card.</p>
      </Card>
      <Card {...args} size="default" title="Default Card">
        <p>Content for default card.</p>
      </Card>
      <Card {...args} size="lg" title="Large Card">
        <p>Content for large card.</p>
      </Card>
    </div>
  ),
};

export const Minimal: Story = {
  args: {
    title: 'Minimal Card',
    minimal: true,
    children: (
      <p>
        This card does not have a divider between the title and the content.
      </p>
    ),
  },
};

export const WithoutTitle: Story = {
  args: {
    children: <p>This card has no title, only content.</p>,
  },
};

export const CustomContent: Story = {
  render: (args) => (
    <Card {...args} title="Custom Content">
      <ul className="list-disc pl-6 space-y-2">
        <li>Feature one</li>
        <li>Feature two</li>
        <li>Feature three</li>
      </ul>
    </Card>
  ),
};
