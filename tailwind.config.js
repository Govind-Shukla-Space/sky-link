/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        colorChange: {
          '0%, 100%': { backgroundColor: '#a3cef1' },
          '16%': { backgroundColor: '#d1c4e9' },
          '33%': { backgroundColor: '#c8e6c9' },
          '50%': { backgroundColor: '#f8bbd0' },
          '66%': { backgroundColor: '#c5cae9' },
          '83%': { backgroundColor: '#fff9c4' },
        },
      },
      animation: {
        'color-change': 'colorChange 10s infinite',
      },
    },
  },
  plugins: [],
}
