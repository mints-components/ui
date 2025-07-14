import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Check, Close, Info, Plus, Search } from './';

const icons = [
  {
    component: <Check />,
    label: 'Check',
  },
  {
    component: <Close />,
    label: 'Check',
  },
  {
    component: <Info />,
    label: 'Info',
  },
  {
    component: <Plus />,
    label: 'Plus',
  },
  {
    component: <Search />,
    label: 'Search',
  },
];

const meta: Meta = {
  title: 'Components/Icons',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'All icons for quick overview.',
      },
    },
  },
};

export default meta;

export const All: StoryObj = {
  render: () => (
    <div className="grid grid-cols-6 gap-10 p-12 bg-white dark:bg-zinc-900 rounded-xl">
      {icons.map((i) => (
        <div key={i.label} className="flex flex-col items-center">
          {React.cloneElement(i.component, {
            size: 32,
            className: 'text-zinc-600 dark:text-white',
          })}
          <span className="mt-2 text-xs text-zinc-500 dark:text-white">
            {i.label}
          </span>
        </div>
      ))}
    </div>
  ),
};
