/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  
  
  daisyui: {
    themes: [
      {
        toyTopia: {
          primary: "#f472b6",   // pink
          secondary: "#facc15", // yellow
          accent: "#22d3ee",    // cyan
          neutral: "#111827",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
