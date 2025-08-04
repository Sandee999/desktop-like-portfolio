import { ActivityIndicator, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Image } from 'expo-image';
import Animated, { Easing, ZoomInDown, ZoomOutDown } from 'react-native-reanimated';
import FluidCursor from '@/web-components/FluidCursor';
import Dock from '@/components/Dock';
import { useGlobalContext } from '@/context/GlobalContext';
import StatusBar from '@/components/StatusBar';
import useLoadFonts from '@/hooks/useLoadFonts';
import Desktop from '@/components/Desktop';
import RunApps from '@/components/RunApps';

export default function RootLayoutWeb() {
  const [hideBottomBar, setHideBottomBar] = useState(false);
  const { appsData, setAppsData, authorData } = useGlobalContext();
  const { fontsLoaded, fontError } = useLoadFonts();

  useEffect(() => {
    const x = appsData.some((data)=>(data.isActive && data.isMaximized && !data.isHidden));
    setHideBottomBar(x);
  }, [appsData]);

  if (!fontsLoaded) return (
    <View className={`w-full h-full justify-center items-center`}>
      <ActivityIndicator size='large' color='black' />
    </View>
  );

  return (
    <View className={`flex-1`}>
      {/* Header */}
      <View className={`w-full h-10 px-4 flex-row items-center`}>
        <Text selectable={false} className={`text-base font-poppinsMedium text-black`}>Contact</Text>
      </View>
      {/* Body */}
      <View className={`flex-1 justify-center items-center`}>
        <View className={`absolute items-center`}>
          <Text selectable={false} className={`text-4xl font-albertSemiBold text-black`}>Beyond Syntax</Text>
          <Text selectable={false} className={`text-xl font-albertMedium text-black`}>This is {authorData.name}.</Text>
        </View>
        <Desktop />
      </View>
      {/* Footer */}
      {!hideBottomBar &&
        <Animated.View entering={ZoomInDown.easing(Easing.ease)} exiting={ZoomOutDown.easing(Easing.ease)} className={`w-full h-16 px-5 z-20 flex-row justify-center items-center`}>
          <Dock data={appsData} setData={setAppsData} />
          <StatusBar />
        </Animated.View>
      }
      <RunApps appsData={appsData} setAppsData={setAppsData} />
      <FluidCursor />
      {/* <Image source={require('@/assets/bg.jpg')} contentFit='fill' className={`absolute w-full h-full -z-50`} /> */}
    </View>
  );
}