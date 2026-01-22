import { join } from 'path';
import type { Config } from 'tailwindcss';

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join('../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					500: 'hsl(var(--primary-500))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					500: 'hsl(var(--secondary-500))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				surface: {
					50: 'hsl(var(--surface-50))',
					100: 'hsl(var(--surface-100))',
					200: 'hsl(var(--surface-200))',
					300: 'hsl(var(--surface-300))',
					400: 'hsl(var(--surface-400))',
					500: 'hsl(var(--surface-500))',
					600: 'hsl(var(--surface-600))',
					700: 'hsl(var(--surface-700))',
					800: 'hsl(var(--surface-800))',
					900: 'hsl(var(--surface-900))',
					950: 'hsl(var(--surface-950))',
					1000: 'hsl(var(--surface-1000))'
				},
				success: {
					500: 'hsl(var(--success-500))'
				},
				warning: {
					500: 'hsl(var(--warning-500))'
				},
				error: {
					500: 'hsl(var(--error-500))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
	],
} satisfies Config;
