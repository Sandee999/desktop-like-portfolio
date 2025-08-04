/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "darkBg": "hsla(0, 0%, 85%, 1)"
      },
      fontFamily: {
        // Poppins Fonts
        poppinsBlack: ["Poppins-Black", "sans-serif"],
        poppinsBlackItalic: ["Poppins-BlackItalic", "sans-serif"],
        poppinsBold: ["Poppins-Bold", "sans-serif"],
        poppinsBoldItalic: ["Poppins-BoldItalic", "sans-serif"],
        poppinsExtraBold: ["Poppins-ExtraBold", "sans-serif"],
        poppinsExtraBoldItalic: ["Poppins-ExtraBoldItalic", "sans-serif"],
        poppinsExtraLight: ["Poppins-ExtraLight", "sans-serif"],
        poppinsExtraLightItalic: ["Poppins-ExtraLightItalic", "sans-serif"],
        poppinsItalic: ["Poppins-Italic", "sans-serif"],
        poppinsLight: ["Poppins-Light", "sans-serif"],
        poppinsLightItalic: ["Poppins-LightItalic", "sans-serif"],
        poppinsMedium: ["Poppins-Medium", "sans-serif"],
        poppinsMediumItalic: ["Poppins-MediumItalic", "sans-serif"],
        poppinsRegular: ["Poppins-Regular", "sans-serif"],
        poppinsSemiBold: ["Poppins-SemiBold", "sans-serif"],
        poppinsSemiBoldItalic: ["Poppins-SemiBoldItalic", "sans-serif"],
        poppinsThin: ["Poppins-Thin", "sans-serif"],
        poppinsThinItalic: ["Poppins-ThinItalic", "sans-serif"],

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