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
          <p>This is the profile panel.</p>
        </Tabs.Item>
        <Tabs.Item value="settings" label="Settings">
          <p>Settings and preferences go here.</p>
        </Tabs.Item>
        <Tabs.Item value="security" label="Security">
          <p>Change your password and manage security settings.</p>
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
          <div>This is the active tab.</div>
        </Tabs.Item>
        <Tabs.Item value="disabled" label="Disabled" disabled>
          <div>This tab is disabled and cannot be selected.</div>
        </Tabs.Item>
        <Tabs.Item value="another" label="Another">
          <div>Another tab content.</div>
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
          <div>User tab with icon in label.</div>
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
          <div>Settings tab with icon in label.</div>
        </Tabs.Item>
        <Tabs.Item value="tab3" label="Plain Label">
          <div>Plain label tab.</div>
        </Tabs.Item>
      </Tabs>
    );
  },
};
