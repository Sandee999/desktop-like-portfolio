import { useFonts } from 'expo-font';

export default function useLoadFonts() {
  const [fontsLoaded, fontError] = useFonts({
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