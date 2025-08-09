import { ActivityIndicator, Platform, Text, useWindowDimensions, View } from 'react-native';
import React, { useEffect } from 'react';
import { Image } from 'expo-image';
import Animated, { Easing, ZoomInDown, ZoomOutDown } from 'react-native-reanimated';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import FluidCursor from '@/web-components/FluidCursor';
import Dock from '@/components/Dock';
import { useGlobalContext } from '@/context/GlobalContext';
import StatusBar from '@/components/StatusBar';
import useLoadFonts from '@/hooks/useLoadFonts';
import Desktop from '@/components/Desktop';
import RunApps from '@/components/RunApps';
import useCssInterop from '@/hooks/useCssInterop';
import DesktopTopBar from '@/components/DesktopTopBar';
import { AUTHOR_DATA } from '@/constants';

export default function RootLayoutWeb() {
  const { width, height } = useWindowDimensions();
  const { appsData, setOpenFile } = useGlobalContext();
  const hideBottomBar= appsData.some((data)=>(data.isActive && data.isMaximized && !data.isHidden));
  const filesAppIsActive = appsData.find((data) => data.title === 'Files').isActive;
  const { fontsLoaded, fontError } = useLoadFonts();
  const cssLoaded = useCssInterop(); 
  
  // Reset open file
  useEffect(() => {
    if(!filesAppIsActive){
      setOpenFile('');
    }
  }, [filesAppIsActive]);

  if (!fontsLoaded || !cssLoaded) return (
    <View className={`w-full h-full justify-center items-center`}>
      <ActivityIndicator size='large' color='black' />
    </View>
  );

  if(fontError || width < height) return (
    <View className={`w-full h-full justify-center items-center`}>
      {fontError ? 
        <Text selectable={false} className={`text-xl font-poppinsMedium text-black`}>{fontError}</Text>
        :
        <Text selectable={false} className={`text-xl font-poppinsMedium text-black`}>This website is not supported on Portrait mode.</Text>
      }
    </View>
  );

  return (
    <View className={`flex-1 bg-transparent`}>
      {/* Header */}
      <View className={`w-full h-10 px-4 flex-row items-center`}>
        <DesktopTopBar />
      </View>
      {/* Body */}
      <View className={`flex-1 justify-center items-center`}>
        <View className={`absolute items-center`}>
          <Text selectable={false} className={`text-4xl font-albertSemiBold text-white`}>Beyond Syntax</Text>
          <Text selectable={false} className={`text-xl font-albertMedium text-white`}>This is {AUTHOR_DATA.name}.</Text>
        </View>
        <Desktop />
      </View>
      {/* Footer */}
      {!hideBottomBar &&
        <Animated.View entering={ZoomInDown.easing(Easing.ease)} exiting={ZoomOutDown.easing(Easing.ease)} className={`w-full h-16 z-20 flex-row justify-center items-center`}>
          <Dock />
          <StatusBar />
        </Animated.View>
      }
      <RunApps />
      {Platform.OS === 'web' && <FluidCursor />}
      <Image source={require('@/assets/wallpaper.jpg')} contentFit='fill' className={`w-full h-full absolute -z-50`} />
      <ExpoStatusBar hidden={true} />
    </View>
  );
}