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
          'A flexible Tabs component with multiple variants, sizes, and features including icons, and accessibility support.',
      },
    },
  },
  args: {
    centered: false,
    variant: 'underline',
    size: 'md',
    fullWidth: false,
  },
  argTypes: {
    centered: {
      control: 'boolean',
      description: 'Centers the tabs horizontally',
    },
    variant: {
      control: 'select',
      options: ['underline', 'pills'],
      description: 'Visual style variant of the tabs',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the tab items',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Makes tabs stretch to fill container width',
    },
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
      <div className="w-[600px]">
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
      </div>
    );
  },
};

export const Variants: Story = {
  render: (args) => {
    const [tabUnderline, setTabUnderline] = useState('profile');
    const [tabPills, setTabPills] = useState('profile');

    return (
      <div className="w-[600px] space-y-8">
        <div>
          <h3 className="text-sm font-semibold mb-2 dark:text-white">
            Underline (Default)
          </h3>
          <Tabs
            {...args}
            value={tabUnderline}
            onChange={setTabUnderline}
            variant="underline"
          >
            <Tabs.Item value="profile" label="Profile">
              <p className="dark:text-white">
                Animated underline slides between tabs.
              </p>
            </Tabs.Item>
            <Tabs.Item value="settings" label="Settings">
              <p className="dark:text-white">
                Settings and preferences go here.
              </p>
            </Tabs.Item>
            <Tabs.Item value="security" label="Security">
              <p className="dark:text-white">Security settings panel.</p>
            </Tabs.Item>
          </Tabs>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-2 dark:text-white">Pills</h3>
          <Tabs
            {...args}
            value={tabPills}
            onChange={setTabPills}
            variant="pills"
          >
            <Tabs.Item value="profile" label="Profile">
              <p className="dark:text-white">
                Rounded pill-style tabs with background.
              </p>
            </Tabs.Item>
            <Tabs.Item value="settings" label="Settings">
              <p className="dark:text-white">
                Settings and preferences go here.
              </p>
            </Tabs.Item>
            <Tabs.Item value="security" label="Security">
              <p className="dark:text-white">Security settings panel.</p>
            </Tabs.Item>
          </Tabs>
        </div>
      </div>
    );
  },
};

export const WithIcons: Story = {
  render: (args) => {
    const [tab, setTab] = useState('user');
    return (
      <div className="w-[600px]">
        <Tabs {...args} value={tab} onChange={setTab} variant="pills">
          <Tabs.Item
            value="user"
            label={
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span>User</span>
              </span>
            }
          >
            <p className="dark:text-white">
              User profile information and details.
            </p>
          </Tabs.Item>
          <Tabs.Item
            value="settings"
            label={
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Settings</span>
              </span>
            }
          >
            <p className="dark:text-white">
              Configure your preferences and options.
            </p>
          </Tabs.Item>
          <Tabs.Item
            value="notifications"
            label={
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span>Notifications</span>
              </span>
            }
          >
            <p className="dark:text-white">
              Manage your notification preferences.
            </p>
          </Tabs.Item>
        </Tabs>
      </div>
    );
  },
};

export const DisabledTab: Story = {
  render: (args) => {
    const [tab, setTab] = useState('active');
    return (
      <div className="w-[600px]">
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
      </div>
    );
  },
};

export const Sizes: Story = {
  render: (args) => {
    const [tabSm, setTabSm] = useState('tab1');
    const [tabMd, setTabMd] = useState('tab1');
    const [tabLg, setTabLg] = useState('tab1');

    return (
      <div className="w-[600px] space-y-8">
        <div>
          <h3 className="text-sm font-semibold mb-2 dark:text-white">Small</h3>
          <Tabs
            {...args}
            value={tabSm}
            onChange={setTabSm}
            size="sm"
            variant="pills"
          >
            <Tabs.Item value="tab1" label="Tab 1">
              <p className="dark:text-white text-sm">
                Small sized tabs content.
              </p>
            </Tabs.Item>
            <Tabs.Item value="tab2" label="Tab 2">
              <p className="dark:text-white text-sm">Content for tab 2.</p>
            </Tabs.Item>
            <Tabs.Item value="tab3" label="Tab 3">
              <p className="dark:text-white text-sm">Content for tab 3.</p>
            </Tabs.Item>
          </Tabs>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-2 dark:text-white">
            Medium (Default)
          </h3>
          <Tabs
            {...args}
            value={tabMd}
            onChange={setTabMd}
            size="md"
            variant="pills"
          >
            <Tabs.Item value="tab1" label="Tab 1">
              <p className="dark:text-white">Medium sized tabs content.</p>
            </Tabs.Item>
            <Tabs.Item value="tab2" label="Tab 2">
              <p className="dark:text-white">Content for tab 2.</p>
            </Tabs.Item>
            <Tabs.Item value="tab3" label="Tab 3">
              <p className="dark:text-white">Content for tab 3.</p>
            </Tabs.Item>
          </Tabs>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-2 dark:text-white">Large</h3>
          <Tabs
            {...args}
            value={tabLg}
            onChange={setTabLg}
            size="lg"
            variant="pills"
          >
            <Tabs.Item value="tab1" label="Tab 1">
              <p className="dark:text-white">Large sized tabs content.</p>
            </Tabs.Item>
            <Tabs.Item value="tab2" label="Tab 2">
              <p className="dark:text-white">Content for tab 2.</p>
            </Tabs.Item>
            <Tabs.Item value="tab3" label="Tab 3">
              <p className="dark:text-white">Content for tab 3.</p>
            </Tabs.Item>
          </Tabs>
        </div>
      </div>
    );
  },
};

export const FullWidth: Story = {
  render: (args) => {
    const [tab, setTab] = useState('dashboard');
    return (
      <div className="w-[600px]">
        <Tabs {...args} value={tab} onChange={setTab} fullWidth variant="pills">
          <Tabs.Item value="dashboard" label="Dashboard">
            <p className="dark:text-white">Dashboard with full-width tabs.</p>
          </Tabs.Item>
          <Tabs.Item value="team" label="Team">
            <p className="dark:text-white">Team management section.</p>
          </Tabs.Item>
          <Tabs.Item value="projects" label="Projects">
            <p className="dark:text-white">View and manage projects.</p>
          </Tabs.Item>
        </Tabs>
      </div>
    );
  },
};

export const Centered: Story = {
  render: (args) => {
    const [tab, setTab] = useState('about');
    return (
      <div className="w-[600px]">
        <Tabs {...args} value={tab} onChange={setTab} centered>
          <Tabs.Item value="about" label="About">
            <p className="dark:text-white">About our company and mission.</p>
          </Tabs.Item>
          <Tabs.Item value="team" label="Team">
            <p className="dark:text-white">Meet our amazing team members.</p>
          </Tabs.Item>
          <Tabs.Item value="contact" label="Contact">
            <p className="dark:text-white">Get in touch with us.</p>
          </Tabs.Item>
        </Tabs>
      </div>
    );
  },
};

export const ComplexLabel: Story = {
  render: (args) => {
    const [tab, setTab] = useState('tab1');
    return (
      <div className="w-[600px]">
        <Tabs {...args} value={tab} onChange={setTab}>
          <Tabs.Item
            value="tab1"
            label={
              <span className="flex items-center gap-1.5">
                <span role="img" aria-label="user">
                  👤
                </span>
                <span>User</span>
                <span className="ml-1 px-1.5 py-0.5 text-xs bg-blue-100 text-blue-700 rounded-full">
                  New
                </span>
              </span>
            }
          >
            <p className="dark:text-white">User tab with badge in label.</p>
          </Tabs.Item>
          <Tabs.Item
            value="tab2"
            label={
              <span className="flex items-center gap-1.5">
                <span role="img" aria-label="settings">
                  ⚙️
                </span>
                <span>Settings</span>
              </span>
            }
          >
            <p className="dark:text-white">Settings tab with icon in label.</p>
          </Tabs.Item>
          <Tabs.Item value="tab3" label="Plain Label">
            <p className="dark:text-white">Plain label tab.</p>
          </Tabs.Item>
        </Tabs>
      </div>
    );
  },
};
