# Mints UI

A minimalist React component library based on **Tailwind CSS**.

## ✨ Features

- 🌿 **Minimal & Clean** – No extra dependencies beyond Tailwind.
- ⚡ **SSR Compatible** – Works seamlessly with Next.js and other SSR frameworks.
- 🎨 **Fully Stylable** – Designed to fit into your Tailwind theme easily.

## 📦 Installation

```bash
npm install @mints/ui
```

## 🚀 Quick Start

Make sure Tailwind CSS is properly configured in your project.

```tsx
import { Button } from '@mints/ui';

export default function App() {
  return <Button>Click me</Button>;
}
```

### ⚠️ Tailwind CSS Content Configuration

If you're using **Tailwind CSS v3 or v4**, you need to explicitly include `@mints/ui` in your Tailwind content array so that Tailwind can detect all class names used by the library.

#### Tailwind CSS v3

In your `tailwind.config.js` or `tailwind.config.ts`:

```ts
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@mints/ui/dist/**/*.js', // 👈 Required for Mints UI
  ],
  // ... your theme/plugins/etc
};
```

#### Tailwind CSS v4

Tailwind CSS v4 introduced the `@config` directive for content-aware builds.
If you're using **Tailwind v4 with a CSS entry file (like `main.css`)**, make sure to declare your config path at the top of the file:

```css
@config "../tailwind.config.js";
```

Without this, Tailwind won’t be able to access your configuration and may purge styles used in `@mints/ui`.

Also confirm your `tailwind.config.js` includes the following:

```ts
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@mints/ui/dist/**/*.js', // 👈 Required for Mints UI
  ],
};
```

This ensures Tailwind correctly processes class names inside third-party packages like `@mints/ui`.

## 📚 Documentation

👉 [**View full Storybook**](https://mints-components.github.io/ui/)

## 📄 License

MIT
