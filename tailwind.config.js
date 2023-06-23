/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        defaultColor: "#3CB6D3",
      },
      backgroundColor: {
        defaultColor: "#3CB6D3",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
