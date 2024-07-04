/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      nunito: ['Nunito Sans', 'sans-serif'],
    },
    colors: {
      'color-red': '#ce0033',
      'color-red-light': '#E13851',
      'color-red-super-light': '#FBE8EB', //Background Nav & buttons (Rouge Simplon)
      'color-white': '#FFFFFF', //Background Cards (Blanc)
      'color-back': '#f0f0f0', //Background body (Blanc foncé)
      'color-select': '#f8fafc', //Background selects (Gris clair)
      'color-black': '#000000', //Text (Noir)
      'color-success': '#009640', //Success (Vert)
      'color-disabled': '#c4c4c4', //Disabled (Gris)
    },
  },
  plugins: [],
};
