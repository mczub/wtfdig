import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

// `vitest` bundles its own copy of `vite`'s types, which conflict with the
// types pulled in by `@tailwindcss/vite` and `@sveltejs/kit/vite` (they import
// from the top-level `vite` package). At runtime there's only one `vite` —
// the dual-package-hazard is purely a type-level mismatch, so we cast the
// plugins through `any` to bridge the two type universes.
export default defineConfig({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plugins: [tailwindcss(), sveltekit()] as any,
  test: {
    include: ['tests/**/*.test.ts']
  }
});
