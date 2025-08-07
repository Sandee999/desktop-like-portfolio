import React, { useEffect, useCallback, useMemo } from 'react';
import { View, Text, TouchableOpacity, useWindowDimensions, TouchableWithoutFeedback } from 'react-native';
import { Image } from 'expo-image';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming, ZoomIn, ZoomOut } from 'react-native-reanimated';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import { useGlobalContext } from '@/context/GlobalContext';
import Application from './Application';
import { BlurView } from 'expo-blur';

export default function AppFrame({ appData }) {
  const { appsData, setAppsData } = useGlobalContext();
  const { width, height } = useWindowDimensions();
  const calculatedWidth = width * 0.5;
  const calculatedHeight = height * 0.6;
  const appStoredTop = useSharedValue(0);
  const appStoredLeft = useSharedValue(0);
  const appTop = useSharedValue(0);
  const appLeft = useSharedValue(0);
  const appWidth = useSharedValue(0);
  const appHeight = useSharedValue(0);
  const appZIndex = useSharedValue(50);

  const appStyle = useAnimatedStyle(() => ({
    top: appTop.value,
    left: appLeft.value,
    width: appWidth.value,
    height: appHeight.value,
    zIndex: appZIndex.value
  }));

  useEffect(() => {
    appStoredTop.value = (height - calculatedHeight) / 2;
    appStoredLeft.value = (width - calculatedWidth) / 2;

    appTop.value = appStoredTop.value;
    appLeft.value = appStoredLeft.value;
    appWidth.value = calculatedWidth;
    appHeight.value = calculatedHeight;
  }, [width, height]);

  useEffect(() => {
    if(appData.isHidden){
      appTop.value = withTiming(height);
    } else if(appData.isMaximized){ 
      appTop.value = withTiming(0);
    } else {
      appTop.value = withTiming(appStoredTop.value);
    }
  },[appData.isHidden, appData.isMaximized]);

  useEffect(() => {
    if(appData.isMaximized){
      appLeft.value = withTiming(0);
      appWidth.value = withTiming(width);
      appHeight.value = withTiming(height);
    } else {
      appLeft.value = withTiming(appStoredLeft.value);
      appWidth.value = withTiming(calculatedWidth);
      appHeight.value = withTiming(calculatedHeight);
    }
  },[appData.isMaximized]);

  useEffect(() => {
    appZIndex.value = appData.zIndex;
  }, [appData.zIndex]);

  const onClose = useMemo(() => () => setAppsData((prevData) => {
    const index = appsData.indexOf(appData);
    const newData = [...prevData];
    newData[index].isActive = false;
    newData[index].isHidden = false;
    return newData;
  }), [appData]);

  const onHide = useMemo(() => () => setAppsData((prevData) => {
    const index = appsData.indexOf(appData);
    const newData = [...prevData];
    newData[index].isHidden = true;
    return newData;
  }), [appData]);

  const onMaximize = useMemo(() => () => setAppsData((prevData) => {
    const index = appsData.indexOf(appData);
    const newData = [...prevData];
    newData[index].isMaximized = !prevData[index].isMaximized;
    return newData;
  }), [appData]);

  const onAppPress = useCallback(() => {
    const index = appsData.indexOf(appData);
    setAppsData((prevData) => {
      const newData = [...prevData];
      newData.forEach((value) => value.zIndex = 40);
      newData[index].zIndex = 50;
      return newData;
    });
  }, []);

  const updatePosition = (event) => {
    if(appWidth.value === width && appHeight.value === height) return;
    const Spring_config = {
      stiffness: 300,
      damping: 30,
      mass: 1,
    };
    appTop.value = withSpring(event.translationY + appStoredTop.value, Spring_config);
    appLeft.value = withSpring(event.translationX + appStoredLeft.value, Spring_config);
  }

  const onDrag = Gesture.Pan()
  .onBegin((event) => updatePosition(event))
  .onUpdate((event) => updatePosition(event))
  .onEnd((event) => {
    updatePosition(event)
    appStoredTop.value = appTop.value;
    appStoredLeft.value = appLeft.value;
  });

  return (
    <TouchableWithoutFeedback onPressIn={onAppPress}>
      <Animated.View style={[appStyle]} entering={ZoomIn} exiting={ZoomOut} className={`absolute justify-center items-center shadow-xl ${!appData.isMaximized && 'rounded-xl'}`}>
        <BlurView tint='dark' intensity={80} className={`w-full max-h-8 flex-1 ${!appData.isMaximized && 'rounded-t-xl'}`} >
          <GestureHandlerRootView className={`flex-row`}>
            <View className={`w-14 mx-2 h-full flex-row justify-around items-center`}>
              <TouchableOpacity onPress={onClose} activeOpacity={0.5} >
                <Image source={require('@/assets/appBar/close.png')} contentFit='contain' className={`w-3 h-3`} />
              </TouchableOpacity>
              <TouchableOpacity onPress={onHide} activeOpacity={0.5}>
                <Image source={require('@/assets/appBar/hide.png')} contentFit='contain' className={`w-3 h-3`} />
              </TouchableOpacity>
              <TouchableOpacity onPress={onMaximize} activeOpacity={0.5}>
                <Image source={require('@/assets/appBar/maximize.png')} contentFit='contain' className={`w-3 h-3`} />
              </TouchableOpacity>
            </View>
            <GestureDetector gesture={onDrag}>
              <View className={`flex-1 justify-center items-center`}>
                <Text selectable={false} className={`text-base font-poppinsMedium text-white`}>{appData.title}</Text>
              </View>
            </GestureDetector>
          </GestureHandlerRootView>
        </BlurView>
        <View className={`w-full h-full flex-1 bg-white ${!appData.isMaximized && 'rounded-b-xl'}`}>
          <Application appData={appData} />
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}