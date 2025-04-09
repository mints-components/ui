import type { Meta, StoryObj } from '@storybook/react';

import { Example as Component } from './example';

const meta = {
  title: 'Components/Example',
  component: Component,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: 'This is a example component',
  },
};
