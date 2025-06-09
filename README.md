# Mints UI

A minimalist React component library based on **Tailwind CSS**.

## ✨ Features

- 🌿 **Minimal & Clean** – No extra dependencies beyond Tailwind.
- ⚡ **SSR Compatible** – Works seamlessly with Next.js and other SSR frameworks.
- 🎨 **Fully Stylable** – Designed to fit into your Tailwind theme easily.

## 📦 Installation

Using **npm**:

```bash
npm install @mints/ui
```

Or with **yarn**:

```bash
yarn add @mints/ui
```

Or with **pnpm**:

```bash
pnpm add @mints/ui
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

---

## 📚 Documentation

👉 [**View full Storybook**](https://mints-components.github.io/ui/)

## 📄 License

MIT
