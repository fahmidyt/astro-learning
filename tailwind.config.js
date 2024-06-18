/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'black-shade': '#0A0A0A',
        'dark-gray': '#676767',
        'background': '#C9C9C9',
        'card': '#cccccc',
      }
    },
  },
  plugins: [],
}

