import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { DatePicker } from './datepicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A customizable DatePicker component with calendar popup, supporting multiple sizes, date constraints, and disabled states. Built with zinc theme color to match the Button component.',
      },
    },
  },
  args: {
    size: 'default',
    disabled: false,
    placeholder: 'Select date',
  },
  argTypes: {
    disabled: { control: 'boolean' },
    size: {
      control: 'radio',
      options: ['sm', 'default', 'lg'],
    },
    value: { control: 'date' },
    placeholder: { control: 'text' },
    onChange: { action: 'date changed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [date, setDate] = useState<Date | null>(null);
    return (
      <DatePicker
        {...args}
        value={date || undefined}
        onChange={(d) => setDate(d as Date | null)}
      />
    );
  },
};

export const Sizes: Story = {
  render: (args) => {
    const [dateSm, setDateSm] = useState<Date | null>(null);
    const [dateDefault, setDateDefault] = useState<Date | null>(null);
    const [dateLg, setDateLg] = useState<Date | null>(null);

    return (
      <div className="flex flex-wrap gap-4 items-end">
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
            Small
          </label>
          <DatePicker
            {...args}
            size="sm"
            value={dateSm || undefined}
            onChange={(d) => setDateSm(d as Date | null)}
          />
        </div>
        <div>
          <label className="block text-base font-medium text-zinc-700 dark:text-zinc-300 mb-2">
            Default
          </label>
          <DatePicker
            {...args}
            size="default"
            value={dateDefault || undefined}
            onChange={(d) => setDateDefault(d as Date | null)}
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-zinc-700 dark:text-zinc-300 mb-2">
            Large
          </label>
          <DatePicker
            {...args}
            size="lg"
            value={dateLg || undefined}
            onChange={(d) => setDateLg(d as Date | null)}
          />
        </div>
      </div>
    );
  },
};

export const WithValue: Story = {
  render: (args) => {
    const [date, setDate] = useState<Date | null>(new Date());
    return (
      <DatePicker
        {...args}
        value={date || undefined}
        onChange={(d) => setDate(d as Date | null)}
      />
    );
  },
};

export const DisabledState: Story = {
  args: {
    disabled: true,
    value: new Date(),
  },
};

export const WithMinDate: Story = {
  render: (args) => {
    const [date, setDate] = useState<Date | null>(null);
    const today = new Date();

    return (
      <div className="space-y-2">
        <DatePicker
          {...args}
          value={date || undefined}
          onChange={(d) => setDate(d as Date | null)}
          minDate={today}
          placeholder="Select future date"
        />
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Only dates from today onwards are selectable
        </p>
      </div>
    );
  },
};

export const WithMaxDate: Story = {
  render: (args) => {
    const [date, setDate] = useState<Date | null>(null);
    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 30);

    return (
      <div className="space-y-2">
        <DatePicker
          {...args}
          value={date || undefined}
          onChange={(d) => setDate(d as Date | null)}
          maxDate={maxDate}
          placeholder="Select date within 30 days"
        />
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Only dates within the next 30 days are selectable
        </p>
      </div>
    );
  },
};

export const WithDateRange: Story = {
  render: (args) => {
    const [date, setDate] = useState<Date | null>(null);
    const minDate = new Date();
    minDate.setDate(minDate.getDate() - 7);
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 7);

    return (
      <div className="space-y-2">
        <DatePicker
          {...args}
          value={date || undefined}
          onChange={(d) => setDate(d as Date | null)}
          minDate={minDate}
          maxDate={maxDate}
          placeholder="Select date within range"
        />
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Only dates between 7 days ago and 7 days from now are selectable
        </p>
      </div>
    );
  },
};

export const WithDisabledDates: Story = {
  render: (args) => {
    const [date, setDate] = useState<Date | null>(null);
    const today = new Date();
    const disabledDates = [
      new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2),
      new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5),
      new Date(today.getFullYear(), today.getMonth(), today.getDate() + 10),
    ];

    return (
      <div className="space-y-2">
        <DatePicker
          {...args}
          value={date || undefined}
          onChange={(d) => setDate(d as Date | null)}
          disabledDates={disabledDates}
          placeholder="Select available date"
        />
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Some dates are disabled (2, 5, and 10 days from today)
        </p>
      </div>
    );
  },
};

export const CustomWidth: Story = {
  render: (args) => {
    const [date, setDate] = useState<Date | null>(null);

    return (
      <div className="space-y-4">
        <DatePicker
          {...args}
          value={date || undefined}
          onChange={(d) => setDate(d as Date | null)}
          className="w-lg"
        />
      </div>
    );
  },
};

export const RangeMode: Story = {
  render: (args) => {
    const [range, setRange] = useState<{
      start: Date | null;
      end: Date | null;
    }>({ start: null, end: null });

    return (
      <div className="space-y-4">
        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
          Select date range
        </label>
        <DatePicker
          {...args}
          mode="range"
          value={range}
          onChange={(v) =>
            setRange(v as { start: Date | null; end: Date | null })
          }
          placeholder="Select start or end"
        />

        <pre className="mt-2 p-2 bg-zinc-50 dark:bg-zinc-800 rounded">
          {JSON.stringify(range, null, 2)}
        </pre>
      </div>
    );
  },
};
