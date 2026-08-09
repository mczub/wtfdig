import { browser } from '$app/environment';

export type ThemeMode = 'system' | 'light' | 'dark';

const THEME_LOCALSTORAGE_KEY = 'theme';

function getInitialMode(): ThemeMode {
  if (!browser) return 'system';
  const stored = localStorage.getItem(THEME_LOCALSTORAGE_KEY);
  return stored === 'light' || stored === 'dark' ? stored : 'system';
}

const state = $state({ mode: getInitialMode() });

function applyTheme() {
  if (!browser) return;
  const isDark =
    state.mode === 'dark' ||
    (state.mode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.classList.toggle('dark', isDark);
}

if (browser) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (state.mode === 'system') applyTheme();
  });
}

export const theme = {
  get mode(): ThemeMode {
    return state.mode;
  },
  setMode(mode: ThemeMode) {
    state.mode = mode;
    if (browser) {
      if (mode === 'system') {
        localStorage.removeItem(THEME_LOCALSTORAGE_KEY);
      } else {
        localStorage.setItem(THEME_LOCALSTORAGE_KEY, mode);
      }
    }
    applyTheme();
  }
};
