/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "translucent": "hsla(0, 0%, 85%, 1)"
      },
      fontFamily: {
        // Albert Sans Fonts
        albertBlack: ["AlbertSans-Black", "sans-serif"],
        albertBlackItalic: ["AlbertSans-BlackItalic", "sans-serif"],
        albertBold: ["AlbertSans-Bold", "sans-serif"],
        albertBoldItalic: ["AlbertSans-BoldItalic", "sans-serif"],
        albertExtraBold: ["AlbertSans-ExtraBold", "sans-serif"],
        albertExtraBoldItalic: ["AlbertSans-ExtraBoldItalic", "sans-serif"],
        albertExtraLight: ["AlbertSans-ExtraLight", "sans-serif"],
        albertExtraLightItalic: ["AlbertSans-ExtraLightItalic", "sans-serif"],
        albertItalic: ["AlbertSans-Italic", "sans-serif"],
        albertLight: ["AlbertSans-Light", "sans-serif"],
        albertLightItalic: ["AlbertSans-LightItalic", "sans-serif"],
        albertMedium: ["AlbertSans-Medium", "sans-serif"],
        albertMediumItalic: ["AlbertSans-MediumItalic", "sans-serif"],
        albertRegular: ["AlbertSans-Regular", "sans-serif"],
        albertSemiBold: ["AlbertSans-SemiBold", "sans-serif"],
        albertSemiBoldItalic: ["AlbertSans-SemiBoldItalic", "sans-serif"],
        albertThin: ["AlbertSans-Thin", "sans-serif"],
        albertThinItalic: ["AlbertSans-ThinItalic", "sans-serif"],
      },
    },
  },
  plugins: [],
}