import { resolve } from 'path';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import { dependencies, peerDependencies } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],

  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'mints-ui',
      fileName: 'mints-ui',
    },
    rollupOptions: {
      external: [
        'react/jsx-runtime',
        ...Object.keys(dependencies),
        ...Object.keys(peerDependencies),
      ],
    },
  },
});
