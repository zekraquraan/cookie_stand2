/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },width: {
        '900px': '900px',
        '700px':'700px',
        '400px':'400px',
        '850px':'850px',
        '800px':'800px',
        '200px':'200px',
      },
      fontSize: {
        '20px': '20px', 
      },
    },
  },
  plugins: [],
}
