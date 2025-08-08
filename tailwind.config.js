/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'Noto Sans Khmer', 'system-ui', 'sans-serif'],
        'khmer': ['Noto Sans Khmer', 'Inter', 'sans-serif'],
        'khmer-serif': ['Noto Serif Khmer', 'Noto Sans Khmer', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      lineHeight: {
        'khmer': '1.8',
        'khmer-tight': '1.6',
      },
      letterSpacing: {
        'khmer': '0.01em',
        'khmer-wide': '0.02em',
      },
      colors: {
        'koh-rong': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        }
      }
    },
  },
  plugins: [],
};