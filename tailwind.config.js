/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false, // <== disable this! This is used to reset the browser's default styles by tailwind which can solve conflicts with ant design UI.
  },
  important: true, // <== add this to make sure that the styles are applied to the app
}

