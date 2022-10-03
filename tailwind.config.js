/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Complex site-specific column configuration
        'layout': '4fr 1fr',
        'mobile_layout': '1fr',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
