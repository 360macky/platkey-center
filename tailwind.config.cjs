/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        green: '#98CA3F',
        blue: '#121F3D',
        darkblue: '#0A1122',
        skyblue: '#33B1FF',
      },
    },
  },
  plugins: [],
};
