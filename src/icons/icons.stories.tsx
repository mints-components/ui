import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import {
  Bell,
  Bookmark,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  CircleAlert,
  CircleCheck,
  CircleClose,
  Close,
  Ellipsis,
  EyeClosed,
  Eye,
  Heart,
  Info,
  Layers,
  Message,
  Minus,
  Plus,
  Reset,
  Search,
  Star,
  Tag,
  ThumbDown,
  ThumbUp,
  User,
  Waves,
  Waypoints,
} from './';

const icons = [
  {
    component: <Bell />,
    label: 'Bell',
  },
  {
    component: <Bookmark />,
    label: 'Bookmark',
  },
  {
    component: <Check />,
    label: 'Check',
  },
  {
    component: <ChevronDown />,
    label: 'ChevronDown',
  },
  {
    component: <ChevronLeft />,
    label: 'ChevronLeft',
  },
  {
    component: <ChevronRight />,
    label: 'ChevronRight',
  },
  {
    component: <ChevronUp />,
    label: 'ChevronUp',
  },
  {
    component: <CircleAlert />,
    label: 'CircleAlert',
  },
  {
    component: <CircleCheck />,
    label: 'CircleCheck',
  },
  {
    component: <CircleClose />,
    label: 'CircleClose',
  },
  {
    component: <Close />,
    label: 'Close',
  },
  {
    component: <Ellipsis />,
    label: 'Ellipsis',
  },
  {
    component: <EyeClosed />,
    label: 'EyeClosed',
  },
  {
    component: <Eye />,
    label: 'Eye',
  },
  {
    component: <Heart />,
    label: 'Heart',
  },
  {
    component: <Info />,
    label: 'Info',
  },
  {
    component: <Layers />,
    label: 'Layers',
  },
  {
    component: <Message />,
    label: 'Message',
  },
  {
    component: <Minus />,
    label: 'Minus',
  },
  {
    component: <Plus />,
    label: 'Plus',
  },
  {
    component: <Reset />,
    label: 'Reset',
  },
  {
    component: <Search />,
    label: 'Search',
  },
  {
    component: <Star />,
    label: 'Star',
  },
  {
    component: <Tag />,
    label: 'Tag',
  },
  {
    component: <ThumbDown />,
    label: 'ThumbDown',
  },
  {
    component: <ThumbUp />,
    label: 'ThumbUp',
  },
  {
    component: <User />,
    label: 'User',
  },
  {
    component: <Waves />,
    label: 'Waves',
  },
  {
    component: <Waypoints />,
    label: 'Waypoints',
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
