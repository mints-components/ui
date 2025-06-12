import{j as n}from"./jsx-runtime-9bc08dc0.js";import{u as o}from"./index-0642b200.js";import"./chunk-PRSJUHPQ-365ce60b.js";import{an as r,ao as s}from"./chunk-NUUEMKO5-c69c6d15.js";import"./index-87df5591.js";import"./iframe-eb8e3d4d.js";import"./index-393eccbd.js";import"./index-3e738626.js";import"./index-356e4a49.js";import"./client-e8a28fd8.js";__STORYBOOK_MODULE_PREVIEW_API__;const a=`# Mints UI

A minimalist React component library based on **Tailwind CSS**.

## ✨ Features

- 🌿 **Minimal & Clean** – No extra dependencies beyond Tailwind.
- ⚡ **SSR Compatible** – Works seamlessly with Next.js and other SSR frameworks.
- 🎨 **Fully Stylable** – Designed to fit into your Tailwind theme easily.

## 📦 Installation

Using **npm**:

\`\`\`bash
npm install @mints/ui
\`\`\`

Or with **yarn**:

\`\`\`bash
yarn add @mints/ui
\`\`\`

Or with **pnpm**:

\`\`\`bash
pnpm add @mints/ui
\`\`\`

## 🚀 Quick Start

Make sure Tailwind CSS is properly configured in your project.

\`\`\`tsx
import { Button } from '@mints/ui';

export default function App() {
  return <Button>Click me</Button>;
}
\`\`\`

### ⚠️ Tailwind CSS Content Configuration

If you're using **Tailwind CSS v3 or v4**, you need to explicitly include \`@mints/ui\` in your Tailwind content array so that Tailwind can detect all class names used by the library.

In your \`tailwind.config.js\` or \`tailwind.config.ts\`:

\`\`\`ts
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@mints/ui/dist/**/*.js', // 👈 Required for Mints UI
  ],
  // ... your theme/plugins/etc
};
\`\`\`

---

## 📚 Documentation

👉 [**View full Storybook**](https://mints-components.github.io/ui/)

## 📄 License

MIT
`;function e(t){return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Introduction/Welcome"}),`
`,n.jsx(s,{children:a})]})}function h(t={}){const{wrapper:i}={...o(),...t.components};return i?n.jsx(i,{...t,children:n.jsx(e,{...t})}):e()}export{h as default};
