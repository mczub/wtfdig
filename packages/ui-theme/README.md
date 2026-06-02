# @mczub/wtfdig-ui

Framework-agnostic design system extracted from [wtfdig](https://wtfdig.info). It's
pure class-based CSS on top of Tailwind v4, so the same look works in Svelte,
React, or plain HTML — only Tailwind v4 is required.

## Install

```sh
bun add @mczub/wtfdig-ui   # or npm / pnpm
```

## Use

In your Tailwind v4 entry stylesheet, import it right after Tailwind:

```css
@import 'tailwindcss';
@import '@mczub/wtfdig-ui';
```

Toggle dark mode by putting `class="dark"` on a root element (`<html>`).

### What you get

- **Tokens** — shadcn semantic colors (`--background`, `--primary`, …) plus a
  `--surface-50 … --surface-1000` scale, all with light/dark values.
- **Theme mapping** — Tailwind color utilities: `bg-surface-700`, `text-primary`,
  `border-border`, … and a `3xl` breakpoint.
- **Presets** — Skeleton-style class vocabulary you apply directly to elements:
  - primitives: `.card` `.btn` `.btn-icon` `.chip` `.badge` `.anchor` `.disabled`
  - color presets: `.preset-tonal[-primary|-secondary|-surface|-error|-success|-warning]`,
    `.preset-filled-*`, `.preset-outlined-*`
  - duo-tone surfaces: `.bg-surface-100-900`, `.border-surface-200-800`, `.text-surface-*`
  - typography: `.preset-typo-display-1..4`, `-headline`, `-title`, `-subtitle`,
    `-body-1`, `-body-2`, `-caption`, `-menu`, `-button`

### Granular imports

Import individual layers if you don't want the whole thing:

```css
@import '@mczub/wtfdig-ui/tokens.css';
@import '@mczub/wtfdig-ui/theme.css';
@import '@mczub/wtfdig-ui/base.css';
@import '@mczub/wtfdig-ui/presets.css';
```
