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
        bgPrimary: {
          DEFAULT: '#0A0A0F',
          light: '#FFFFFF',
        },
        bgSecondary: {
          DEFAULT: '#0D1117',
          light: '#F8FAFC',
        },
        surfaceCard: {
          DEFAULT: '#111827',
          light: '#FFFFFF',
        },
        surfaceElevated: {
          DEFAULT: '#1a2035',
          light: '#F1F5F9',
        },
        neonPrimary: '#00D4FF',
        neonSecondary: '#7B61FF',
        neonTertiary: '#00FF88',
        textPrimary: {
          DEFAULT: '#F0F6FF',
          light: '#1E293B',
        },
        textSecondary: {
          DEFAULT: '#94A3B8',
          light: '#64748B',
        },
        textMuted: {
          DEFAULT: '#6B7280',
          light: '#94A3B8',
        },
        error: '#FF4C6A',
        success: '#00FF88',
      },
      fontFamily: {
        body: ['Quicksand', 'sans-serif'],
        heading: ['Quicksand', 'sans-serif'],
        hero: ['Quicksand', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
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
