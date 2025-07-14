import type { Meta, StoryObj } from '@storybook/react-vite';

import { Check } from './check';
import { Close } from './close';
import { Info } from './info';
import { Search } from './search';

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
      <div className="flex flex-col items-center">
        <Check size={32} className="text-zinc-600" />
        <span className="mt-2 text-xs text-zinc-500">Check</span>
      </div>
      <div className="flex flex-col items-center">
        <Close size={32} className="text-zinc-600" />
        <span className="mt-2 text-xs text-zinc-500">Close</span>
      </div>
      <div className="flex flex-col items-center">
        <Info size={32} className="text-zinc-600" />
        <span className="mt-2 text-xs text-zinc-500">Info</span>
      </div>
      <div className="flex flex-col items-center">
        <Search size={32} className="text-zinc-600" />
        <span className="mt-2 text-xs text-zinc-500">Search</span>
      </div>
    </div>
  ),
};
