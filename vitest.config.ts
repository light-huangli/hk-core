import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@hk-core/shared': resolve(__dirname, 'packages/shared/index.ts'),
      '@hk-core/core': resolve(__dirname, 'packages/core/index.ts'),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom', // or 'jsdom', 'node'
    reporters: 'dot',
  },
});
