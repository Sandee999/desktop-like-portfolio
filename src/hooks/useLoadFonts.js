import { useFonts } from 'expo-font';

export default function useLoadFonts() {
  const [fontsLoaded, fontError] = useFonts({
    // Poppins Fonts
    "Poppins-Black": require("@/assets/fonts/Poppins/Poppins-Black.ttf"),
    "Poppins-BlackItalic": require("@/assets/fonts/Poppins/Poppins-BlackItalic.ttf"),
    "Poppins-Bold": require("@/assets/fonts/Poppins/Poppins-Bold.ttf"),
    "Poppins-BoldItalic": require("@/assets/fonts/Poppins/Poppins-BoldItalic.ttf"),
    "Poppins-ExtraBold": require("@/assets/fonts/Poppins/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraBoldItalic": require("@/assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf"),
    "Poppins-ExtraLight": require("@/assets/fonts/Poppins/Poppins-ExtraLight.ttf"),
    "Poppins-ExtraLightItalic": require("@/assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf"),
    "Poppins-Italic": require("@/assets/fonts/Poppins/Poppins-Italic.ttf"),
    "Poppins-Light": require("@/assets/fonts/Poppins/Poppins-Light.ttf"),
    "Poppins-LightItalic": require("@/assets/fonts/Poppins/Poppins-LightItalic.ttf"),
    "Poppins-Medium": require("@/assets/fonts/Poppins/Poppins-Medium.ttf"),
    "Poppins-MediumItalic": require("@/assets/fonts/Poppins/Poppins-MediumItalic.ttf"),
    "Poppins-Regular": require("@/assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("@/assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "Poppins-SemiBoldItalic": require("@/assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf"),
    "Poppins-Thin": require("@/assets/fonts/Poppins/Poppins-Thin.ttf"),
    "Poppins-ThinItalic": require("@/assets/fonts/Poppins/Poppins-ThinItalic.ttf"),

    // Albert Sans Fonts
    "AlbertSans-Black": require("@/assets/fonts/AlbertSans/AlbertSans-Black.ttf"),
    "AlbertSans-BlackItalic": require("@/assets/fonts/AlbertSans/AlbertSans-BlackItalic.ttf"),
    "AlbertSans-Bold": require("@/assets/fonts/AlbertSans/AlbertSans-Bold.ttf"),
    "AlbertSans-BoldItalic": require("@/assets/fonts/AlbertSans/AlbertSans-BoldItalic.ttf"),
    "AlbertSans-ExtraBold": require("@/assets/fonts/AlbertSans/AlbertSans-ExtraBold.ttf"),
    "AlbertSans-ExtraBoldItalic": require("@/assets/fonts/AlbertSans/AlbertSans-ExtraBoldItalic.ttf"),
    "AlbertSans-ExtraLight": require("@/assets/fonts/AlbertSans/AlbertSans-ExtraLight.ttf"),
    "AlbertSans-ExtraLightItalic": require("@/assets/fonts/AlbertSans/AlbertSans-ExtraLightItalic.ttf"),
    "AlbertSans-Italic": require("@/assets/fonts/AlbertSans/AlbertSans-Italic.ttf"),
    "AlbertSans-Light": require("@/assets/fonts/AlbertSans/AlbertSans-Light.ttf"),
    "AlbertSans-LightItalic": require("@/assets/fonts/AlbertSans/AlbertSans-LightItalic.ttf"),
    "AlbertSans-Medium": require("@/assets/fonts/AlbertSans/AlbertSans-Medium.ttf"),
    "AlbertSans-MediumItalic": require("@/assets/fonts/AlbertSans/AlbertSans-MediumItalic.ttf"),
    "AlbertSans-Regular": require("@/assets/fonts/AlbertSans/AlbertSans-Regular.ttf"),
    "AlbertSans-SemiBold": require("@/assets/fonts/AlbertSans/AlbertSans-SemiBold.ttf"),
    "AlbertSans-SemiBoldItalic": require("@/assets/fonts/AlbertSans/AlbertSans-SemiBoldItalic.ttf"),
    "AlbertSans-Thin": require("@/assets/fonts/AlbertSans/AlbertSans-Thin.ttf"),
    "AlbertSans-ThinItalic": require("@/assets/fonts/AlbertSans/AlbertSans-ThinItalic.ttf"),
  });

  return { fontsLoaded, fontError };
}