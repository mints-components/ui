import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Collapse } from './collapse';

const meta: Meta<typeof Collapse> = {
  title: 'Components/Collapse',
  component: Collapse,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A general-purpose Collapse component supporting controlled open state, custom header, and disabled options.',
      },
    },
  },
  args: {
    disabled: false,
    header: 'Collapse Header',
  },
  argTypes: {
    disabled: { control: 'boolean' },
    open: { control: 'boolean' },
    header: { control: 'text' },
    onOpenChange: { action: 'onOpenChange' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: false,
    header: 'Click to expand',
    children: 'This is the collapsible content.',
  },
  render: (args) => {
    const [open, setOpen] = useState(args.open);
    return <Collapse {...args} open={open} onOpenChange={setOpen} />;
  },
};

export const Disabled: Story = {
  args: {
    open: false,
    header: 'Disabled state',
    disabled: true,
    children: 'This collapse is disabled.',
  },
  render: (args) => <Collapse {...args} />,
};

export const Accordion: Story = {
  render: (args) => {
    const [active, setActive] = useState<number | null>(null);
    return (
      <div className="flex flex-col gap-4 w-full max-w-md">
        {[1, 2, 3].map((i) => (
          <Collapse
            key={i}
            {...args}
            header={`Collapse Item ${i}`}
            open={active === i}
            onOpenChange={() => setActive(active === i ? null : i)}
          >
            {`This is the content of panel ${i}.`}
          </Collapse>
        ))}
      </div>
    );
  },
};
