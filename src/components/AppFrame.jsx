import React, { useEffect, useMemo } from 'react';
import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Image } from 'expo-image';
import Animated, { useSharedValue, withTiming, ZoomIn, ZoomOut } from 'react-native-reanimated';
import Application from './Application';
import { BlurView } from 'expo-blur';

export default function AppFrame({ appData, setAppsData }) {
  const index = appData.id-1;
  const { height } = useWindowDimensions();
  const appTop = useSharedValue(0);

  useEffect(() => {
    if(appData.isHidden){
      appTop.value = withTiming(height);
    } else {
      appTop.value = withTiming(0);
    }
  })

  const onClose = useMemo(() => () => setAppsData((prevData) => {
    const newData = [...prevData];
    newData[index].isActive = false;
    newData[index].isHidden = false;
    return newData;
  }), [appData]);

  const onHide = useMemo(() => () => setAppsData((prevData) => {
    const newData = [...prevData];
    newData[index].isHidden = true;
    return newData;
  }), [appData]);

  return (
    <Animated.View entering={ZoomIn} exiting={ZoomOut} style={{ top: appTop }} className={`absolute w-full h-full justify-center items-center bg-white`}>
      <BlurView tint='dark' intensity={80} className={`w-full max-h-9 flex-1 flex-row ${!appData.isMaximized && 'rounded-t-xl'}`} >
        <View className={`absolute w-16 mx-4 h-full z-30 flex-row justify-around items-center`}>
          <TouchableOpacity onPress={onClose} activeOpacity={0.5} className={`p-1`}>
            <Image source={require('@/assets/appBar/close.png')} contentFit='contain' className={`w-4 h-4`} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onHide} activeOpacity={0.5} className={`p-1`}>
            <Image source={require('@/assets/appBar/hide.png')} contentFit='contain' className={`w-4 h-4`} />
          </TouchableOpacity>
        </View>
        <View className={`flex-1 justify-center items-center`}>
          <Text selectable={false} className={`text-base font-poppinsMedium text-white`}>{appData.title}</Text>
        </View>
      </BlurView>
      <View className={`w-full h-full flex-1 bg-white ${!appData.isMaximized && 'rounded-b-xl'}`}>
        <Application appData={appData} />
      </View>
    </Animated.View>
  );
}