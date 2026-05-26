import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#F6F1E6',
          2: '#FBF7EE',
          3: '#EFE6D2',
        },
        ink: {
          DEFAULT: '#1A1612',
          2: '#2C261D',
          3: '#6E6557',
          4: '#9C9282',
        },
        gold: {
          DEFAULT: '#B58A3A',
          2: '#C9A04A',
          3: '#D8B870',
          4: '#E8D4A0',
          glow: '#F5E6BD',
        },
        line: {
          DEFAULT: '#E3D9C2',
          2: '#D6C8A8',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        sm: '6px',
        DEFAULT: '10px',
        lg: '16px',
        xl: '22px',
        pill: '999px',
      },
    },
  },
  plugins: [],
}

export default config
