import { useEffect, useState } from "react";
import { cssInterop } from "nativewind";
import { Image, ImageBackground } from "expo-image";
import { BlurView } from "expo-blur";
import { Platform } from "react-native";
import WebView from "react-native-webview";

export default function useCssInterop() {  
  const [loadedCss, setLoadedCss] = useState(false);

  useEffect(() => {
    if (Platform.OS === "web"){
      setLoadedCss(true);
      return;
    }
    cssInterop(Image, { className: 'style' });
    cssInterop(ImageBackground, { className: 'style' });
    cssInterop(BlurView, { className: 'style' });
    cssInterop(WebView, { className: 'style' });
    setLoadedCss(true);
  }, []);

  return loadedCss;
}