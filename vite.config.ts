import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  test: {
    include: ['tests/**/*.test.ts'],
    // Resolve svelte to its client build during tests so `@testing-library/svelte`
    // can mount components (the default node-conditions resolve picks the
    // server-only build, where `mount()` is unavailable).
    server: {
      deps: {
        inline: ['@testing-library/svelte']
      }
    }
  },
  resolve: process.env.VITEST ? { conditions: ['browser'] } : undefined
});
