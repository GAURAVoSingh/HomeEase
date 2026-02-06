/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        accent: '#F97316',
        muted: '#F3F4F6',
      },
    },
  },
  plugins: [],
};
