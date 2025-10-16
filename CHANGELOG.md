# Changelog

## [1.4.0] - 2025-10-17

### ✨ New Components

- Added `Pagination` component
- Added `DatePicker` component

### 🎨 Enhancements

- Enhanced `Tabs` component: support for `variant`, `size`, and `fullWidth` props
- Added new icons: `bookmark`, `heart`, `calendar`

## [1.3.0] - 2025-08-18

### ✨ New Components

- Added `Progress` component

### 🎨 Enhancements

- Added new icons: `eye`, `eye-closed`
- Adjusted icon-only `Button` sizing for visual consistency

### 🛠 Internal

- Cleaned and simplified `package.json`

## [1.2.1] - 2025-08-15

### 🐛 Fixes

- Fixed missing export for `PopConfirm` component
- Fixed clear button style issue in `AutoComplete`
- Fixed number type support in `Select`
- Set default `type="text"` for `Input`

### ✨ Enhancements

- Added `xs` size to `Input` and `Textarea`, including label size alignment

## [1.2.0] - 2025-08-12

### ✨ New Components

- Added `TypeWriter` component
- Added `PopConfirm` component

### 🎨 Enhancements

- Added `danger` prop to `Button` for red style
- Added `xs` size option to `Button`
- Added new icon `Ellipsis`

### 🛠 Refactors

- Unified `Tooltip` arrow using shared `Arrow` component
- Removed `icon` prop from `Badge`, `Callout`, and `Select`

### 🐛 Fixes

- Fixed inconsistent `Button` height across variants

## [1.1.0] - 2025-07-30

### ✨ Enhancements

- Added `size` prop to `Checkbox` for consistent sizing control
- Added `label` prop and polished text styles for `Radio` component
- Added `id` support to `Checkbox` for improved accessibility
- Introduced new icons to the icon set
- Refined styling for the `<Search />` icon

### 🐛 Fixes

- Filtered `children` from native input in `Checkbox` to prevent React warnings
- Fixed `Mask` component scroll overflow issue

### 🛠 Internal Improvements

- Added GitHub Issue & PR templates for consistent contribution flow
- Refined PR template formatting to avoid GitHub checklist interpretation
- Set up Storybook deploy workflow via GitHub Actions

## [1.0.0] - 2025-07-23

### 🎉 Initial Release

- First stable release of Mints UI.
- Minimalist React component library powered by Tailwind CSS.
- Production-ready and SSR-compatible.
- Fully customizable and theme-aware, designed to fit seamlessly into Tailwind workflows.

#### ✨ Components

- AutoComplete, Avatar, Badge, Button, Callout, Card, Checkbox, Collapse, Dialog
- Divider, Dropdown, Icons, Input, Mask, Radio, Select, Skeleton, Spinner
- Switch, Tabs, Textarea, Toast, Tooltip

#### 🌓 Features

- Built-in dark mode support
- Fully typed with TypeScript
- Only `react` and `tailwindcss` as runtime peer dependencies
- Storybook-powered documentation and interactive demos

#### 📦 Usage

- Works with Tailwind CSS v3 and v4
- Simple setup: install, configure Tailwind `content`, and start building
