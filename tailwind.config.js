/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm off-white / paper backgrounds
        paper: {
          50: '#fbfaf6',
          100: '#f7f4ec',
          200: '#f0ebe0',
          300: '#e8e1d2',
        },
        // Charcoal / ink typography
        ink: {
          50: '#f6f5f2',
          100: '#e8e6e1',
          200: '#d1cec7',
          300: '#a8a49b',
          400: '#7a766c',
          500: '#56524a',
          600: '#3d3a34',
          700: '#2b2925',
          800: '#1f1d1a',
          900: '#15140f',
        },
        // Muted green accent
        moss: {
          50: '#eef6ed',
          100: '#d6ebd3',
          200: '#aed3a8',
          300: '#82b87a',
          400: '#5e9c55',
          500: '#478a3e',
          600: '#3a6f33',
          700: '#305a2c',
          800: '#284925',
          900: '#1f3a1e',
        },
        // Warm terracotta accent
        clay: {
          50: '#fbf3ee',
          100: '#f5e1d4',
          200: '#ecc5ad',
          300: '#e0a37e',
          400: '#d4845a',
          500: '#c26b45',
          600: '#a85638',
          700: '#8a4630',
          800: '#6f3a28',
          900: '#5a3022',
        },
        // Muted blue accent
        slate: {
          50: '#f0f4f6',
          100: '#dbe5ea',
          200: '#b6cbd5',
          300: '#88aab9',
          400: '#5d8699',
          500: '#446a7d',
          600: '#365564',
          700: '#2c444f',
          800: '#243740',
          900: '#1d2d34',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.25rem',
      },
      letterSpacing: {
        tightish: '-0.015em',
        tighter: '-0.025em',
      },
      maxWidth: {
        editorial: '72rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.55' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'draw': {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.6s ease-out both',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
};
