import type { Meta, StoryObj } from '@storybook/react';

import { TextArea } from './textarea';

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible TextArea component supporting label, error message, size and resize control. Built with the zinc color palette and styled for both light and dark themes. The label prop supports JSX.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter your text...',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <TextArea label="Small" placeholder="Small size" size="sm" />
      <TextArea label="Default" placeholder="Default size" />
      <TextArea label="Large" placeholder="Large size" size="lg" />
    </div>
  ),
};

export const Resizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="inline-block">
        <TextArea
          label="No Resize"
          placeholder="Cannot resize"
          resize="none"
          className="w-[200px] max-w-full"
        />
      </div>
      <div className="inline-block">
        <TextArea
          label="Vertical Resize"
          placeholder="Vertical resize"
          resize="y"
          className="w-[200px] max-w-full"
        />
      </div>
      <div className="inline-block">
        <TextArea
          label="Horizontal Resize"
          placeholder="Horizontal resize"
          resize="x"
          className="w-[200px] max-w-full"
        />
      </div>
      <div className="inline-block">
        <TextArea
          label="Both Directions"
          placeholder="Resize in both directions"
          resize="both"
          className="w-[200px] max-w-full"
        />
      </div>
    </div>
  ),
};

export const WithError: Story = {
  args: {
    label: 'Description',
    placeholder: 'This field has an error',
    error: 'This field is required',
  },
};
