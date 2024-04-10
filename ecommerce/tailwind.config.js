const withMT = require("@material-tailwind/react/utils/withMT");
 
export default  withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs","@tailwindcss/forms"),
  ],
});
