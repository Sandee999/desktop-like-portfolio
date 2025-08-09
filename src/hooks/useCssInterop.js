import { useEffect, useState } from "react";
import { cssInterop } from "nativewind";
import { Image, ImageBackground } from "expo-image";
import { BlurView } from "expo-blur";
import { Platform } from "react-native";

export default function useCssInterop() {
  if(Platform.OS === 'web') return true;
  
  const [loadedCss, setLoadedCss] = useState(false);

  useEffect(() => {
    cssInterop(Image, { className: 'style' });
    cssInterop(ImageBackground, { className: 'style' });
    cssInterop(BlurView, { className: 'style' });
    setLoadedCss(true);
  }, []);

  return loadedCss;
}