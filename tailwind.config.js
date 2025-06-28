/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        text: '#F6F3EF',
        primary: '#C87C73',
        secondary: '#E6C9C3',
        accent: '#9E7A91',
        dark: '#2C3440',
      },
      fontFamily: {
        'yeseva': ['var(--font-yeseva-one)', 'cursive'],
        'manrope': ['var(--font-manrope)', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 3s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { opacity: '0.7', filter: 'blur(5px)' },
          '100%': { opacity: '1', filter: 'blur(2px)' },
        },
      },
    },
  },
  plugins: [],
} 