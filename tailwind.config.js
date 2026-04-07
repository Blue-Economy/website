/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          deep: '#0A1929',
          primary: '#1E3A5F',
          secondary: '#2E5984',
          accent: '#40E0D0',
          light: '#E6F4F8',
        },
        coral: '#FF6B6B',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
