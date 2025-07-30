/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",            // if you have an App.tsx (keep just in case)
    "./app/**/*.{js,jsx,ts,tsx}",       // ✅ includes app/, root/, tabs/, _layout.tsx, etc.
    "./components/**/*.{js,jsx,ts,tsx}",// optional: components folder
    "./src/**/*.{js,jsx,ts,tsx}",       // optional: if you use src/
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
