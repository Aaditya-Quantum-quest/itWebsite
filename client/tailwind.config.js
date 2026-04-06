/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bgPrimary: '#0A0A0F',
        bgSecondary: '#0D1117',
        surfaceCard: '#111827',
        surfaceElevated: '#1a2035',
        neonPrimary: '#00D4FF',
        neonSecondary: '#7B61FF',
        neonTertiary: '#00FF88',
        textPrimary: '#F0F6FF',
        textSecondary: '#8892A4',
        textMuted: '#4B5563',
        error: '#FF4C6A',
        success: '#00FF88',
      },
      fontFamily: {
        hero: ['"Syne"', 'sans-serif'],
        heading: ['"DM Sans"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-cyan-purple': 'linear-gradient(135deg, #00D4FF, #7B61FF)',
        'gradient-purple-green': 'linear-gradient(135deg, #7B61FF, #00FF88)',
      },
      boxShadow: {
        'glow-primary': '0 0 30px rgba(0, 212, 255, 0.15)',
        'btn-glow': '0 0 40px rgba(0, 212, 255, 0.4)',
      },
      dropShadow: {
        'glow': '0 0 10px rgba(0, 212, 255, 0.4)',
      }
    },
  },
  plugins: [],
}
