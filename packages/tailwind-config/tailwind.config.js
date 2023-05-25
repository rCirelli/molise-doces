const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'molisePink': '#FFDFE7',
        'moliseBrown': '#643819',
        'offwhite': '#FCFCFD',
      },
    },
  },
  safelist: [
    'molisePink',
    'moliseBrown',
    'offwhite',
  ],
  plugins: [],
};
