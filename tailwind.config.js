/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // scan all source files for class usage
    "./public/index.html",        // optional, if you use Tailwind classes in HTML
  ],
  darkMode: "class", // or 'media' if you prefer OS-based dark mode
  theme: {
    extend: {
      colors: {
        // Optional: extend your own colors
        // brand: {
        //   light: "#c7d2fe",
        //   DEFAULT: "#6366f1",
        //   dark: "#4f46e5",
        // },
      },
    },
  },
  plugins: [
    // Optional Tailwind plugins
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/typography"),
    // require("@tailwindcss/aspect-ratio"),
  ],
};
