import { useEffect, useState } from "react";
import { cssInterop } from "nativewind";
import { Image, ImageBackground } from "expo-image";
import { BlurView } from "expo-blur";

export default function useCssInterop() {
  const [loadedCss, setLoadedCss] = useState(false);

  useEffect(() => {
    cssInterop(Image, { className: 'style' });
    cssInterop(ImageBackground, { className: 'style' });
    cssInterop(BlurView, { className: 'style' });
    setLoadedCss(true);
  }, []);

  return loadedCss;
}