/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0c0c0c',
        panel: { DEFAULT: '#0a0a0a', 2: '#111111' },
        line: { DEFAULT: '#2f2f2f', soft: '#1c1c1c' },
        txt: '#ffffff',
        muted: '#6a6a6a',
        accent: '#00ff88',
        warn: '#ff8800',
        danger: '#ff4444',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      spacing: {
        sidebar: '260px',
      },
      minHeight: {
        touch: '44px',
      },
      zIndex: {
        menu: '100',
        overlay: '199',
        drawer: '200',
      },
    },
  },
  plugins: [],
}
