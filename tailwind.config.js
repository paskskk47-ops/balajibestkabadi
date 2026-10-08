/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgGreen: '#0d1f0f',
        cardGreen: '#142c17',
        primaryGreen: '#25b05a',
        accentYellow: '#f5c842',
      },
    },
  },
  plugins: [],
};
