import type { Preview, Decorator } from '@storybook/react';

import './index.css';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      items: [
        { value: 'light', title: '🌞 Light' },
        { value: 'dark', title: '🌚 Dark' },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
};

export const decorators: Decorator[] = [
  (Story, context) => {
    const theme = context.globals.theme;
    const bgColor = theme === 'dark' ? '#171826' : '#fff';

    document.documentElement.style.background = bgColor;
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);

    setTimeout(() => {
      Array.from(document.getElementsByClassName('docs-story')).forEach(
        (el) => {
          (el as HTMLElement).style.background = bgColor;
        },
      );
    }, 0);

    return <Story />;
  },
];

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
