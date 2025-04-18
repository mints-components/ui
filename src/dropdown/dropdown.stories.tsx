import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from './dropdown';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  args: {
    menu: [
      {
        label: 'Label 1',
      },
      {
        label: 'Label 2',
      },
    ],
    children: 'Hover',
  },
  argTypes: {},
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
