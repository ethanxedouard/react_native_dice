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
    extend: {
      fontFamily: {
        "pressStart2P-Regular": ["PressStart2P-Regular", "sans-serif"],
        "josefinSans": ["JosefinSans-Regular", "sans-serif"],
        "josefinSans-Bold": ["JosefinSans-Bold", "sans-serif"],
        "josefinSans-Light": ["JosefinSans-Light", "sans-serif"],
        "josefinSans-Medium": ["JosefinSans-Medium", "sans-serif"],
        "josefinSans-SemiBold": ["JosefinSans-SemiBold", "sans-serif"],
        "josefinSans-Thin": ["JosefinSans-Thin", "sans-serif"]
      },
      colors: {
        "primary": {
          100: '#8B95250A',
          200: '#8B95251A',
          300: '#8B9525'
        },
        "secondary":{
          100: '#2A1F070A',
          200: '#2A1F071A',
          300: '#2A1F07'
        },
        "accent": {
          100: '#EED7AC0A',
          200: '#EED7AC1A',
          300: '#EED7AC'
        },
        "black": {
          DEFAULT: '#000000',
          100: '#8C8E98',
          200: '#666876',
          300: '#191D31'
        },
        danger: '#F75555'
      }
    },
  },
  plugins: [],
};
