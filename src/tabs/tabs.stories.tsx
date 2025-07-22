import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Tabs } from './tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible Tabs component supporting controlled state, disabled tabs, and optional centered alignment.',
      },
    },
  },
  args: {
    centered: false,
  },
  argTypes: {
    centered: { control: 'boolean' },
    value: { control: 'text' },
    onChange: { action: 'onChange' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [tab, setTab] = useState('profile');
    return (
      <Tabs {...args} value={tab} onChange={setTab}>
        <Tabs.Item value="profile" label="Profile">
          <p className="dark:text-white">This is the profile panel.</p>
        </Tabs.Item>
        <Tabs.Item value="settings" label="Settings">
          <p className="dark:text-white">Settings and preferences go here.</p>
        </Tabs.Item>
        <Tabs.Item value="security" label="Security">
          <p className="dark:text-white">
            Change your password and manage security settings.
          </p>
        </Tabs.Item>
      </Tabs>
    );
  },
};

export const DisabledTab: Story = {
  render: (args) => {
    const [tab, setTab] = useState('active');
    return (
      <Tabs {...args} value={tab} onChange={setTab}>
        <Tabs.Item value="active" label="Active">
          <p className="dark:text-white">This is the active tab.</p>
        </Tabs.Item>
        <Tabs.Item value="disabled" label="Disabled" disabled>
          <p className="dark:text-white">
            This tab is disabled and cannot be selected.
          </p>
        </Tabs.Item>
        <Tabs.Item value="another" label="Another">
          <p className="dark:text-white">Another tab content.</p>
        </Tabs.Item>
      </Tabs>
    );
  },
};

export const ComplexLabel: Story = {
  render: (args) => {
    const [tab, setTab] = useState('tab1');
    return (
      <Tabs {...args} value={tab} onChange={setTab}>
        <Tabs.Item
          value="tab1"
          label={
            <span>
              <span role="img" aria-label="user">
                👤
              </span>{' '}
              User
            </span>
          }
        >
          <p className="dark:text-white">User tab with icon in label.</p>
        </Tabs.Item>
        <Tabs.Item
          value="tab2"
          label={
            <span>
              <span role="img" aria-label="settings">
                ⚙️
              </span>{' '}
              Settings
            </span>
          }
        >
          <p className="dark:text-white">Settings tab with icon in label.</p>
        </Tabs.Item>
        <Tabs.Item value="tab3" label="Plain Label">
          <p className="dark:text-white">Plain label tab.</p>
        </Tabs.Item>
      </Tabs>
    );
  },
};
