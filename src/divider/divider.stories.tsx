import type { Meta, StoryObj } from '@storybook/react-vite';

import { Divider } from './divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Divider component used to separate content, supporting optional children (text), horizontal or vertical orientation, and variants (solid, dashed).',
      },
    },
  },
  args: {
    variant: 'solid',
    orientation: 'horizontal',
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['solid', 'dashed'],
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Paragraph = () => (
  <p>
    In today&apos; fast-paced digital world, staying connected and informed is
    more important than ever. Whether through social media, online news, or
    virtual meetings, technology continues to shape the way we communicate and
    interact. From remote work to e-learning, the convenience of digital tools
    has transformed our daily routines, making it easier to stay productive and
    engaged no matter where we are.
  </p>
);

export const Default: Story = {
  args: {},
  render: (args) => (
    <div className="max-w-2xl">
      <Paragraph />
      <Divider {...args} />
      <Paragraph />
    </div>
  ),
};

export const WithText: Story = {
  args: {},
  render: (args) => (
    <div className="max-w-2xl">
      <Paragraph />
      <Divider {...args}>Text</Divider>
      <Paragraph />
    </div>
  ),
};

export const Variants: Story = {
  render: (args) => (
    <div className="max-w-2xl">
      <Paragraph />
      <Divider {...args}>Solid Divider</Divider>
      <Paragraph />
      <Divider {...args} variant="dashed">
        Dashed Divider
      </Divider>
      <Paragraph />
    </div>
  ),
};

export const VerticalDivider: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <div>
      <span>Left</span>
      <Divider {...args} />
      <span>Right</span>
    </div>
  ),
};
