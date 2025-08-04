import { View, Text, TouchableOpacity, useWindowDimensions, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useCallback, useMemo } from 'react'
import { Image } from 'expo-image';
import Animated, { useAnimatedStyle, useSharedValue, withTiming, ZoomIn, ZoomOut } from 'react-native-reanimated';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Application({ appData, setAppsData }) {
  const index = appData.id-1;
  const { width, height } = useWindowDimensions();
  const calculatedWidth = width * 0.6;
  const calculatedHeight = height * 0.7;
  const appTop = useSharedValue((height - calculatedHeight) / 2);
  const appLeft = useSharedValue((width - calculatedWidth) / 2);
  const appWidth = useSharedValue(calculatedWidth);
  const appHeight = useSharedValue(calculatedHeight);
  const appZIndex = useSharedValue(50);

  const appStyle = useAnimatedStyle(() => ({
    top: appTop.value,
    left: appLeft.value,
    width: appWidth.value,
    height: appHeight.value,
    zIndex: appZIndex.value
  }));

  useEffect(() => {
    if(appData.isHidden){
      appTop.value = withTiming(height);
    } else if(appData.isMaximized){ 
      appTop.value = withTiming(0);
    } else {
      appTop.value = withTiming((height - calculatedHeight) / 2);
    }
  },[appData.isHidden, appData.isMaximized]);

  useEffect(() => {
    if(appData.isMaximized){
      appLeft.value = withTiming(0);
      appWidth.value = withTiming(width);
      appHeight.value = withTiming(height);
    } else {
      appLeft.value = withTiming((width - calculatedWidth) / 2);
      appWidth.value = withTiming(calculatedWidth);
      appHeight.value = withTiming(calculatedHeight);
    }
  },[appData.isMaximized]);

  useEffect(() => {
    appZIndex.value = appData.zIndex;
  }, [appData.zIndex]);

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

  const onMaximize = useMemo(() => () => setAppsData((prevData) => {
    const newData = [...prevData];
    newData[index].isMaximized = !prevData[index].isMaximized;
    return newData;
  }), [appData]);

  const onAppPress = useCallback(() => () => {
    setAppsData((prevData) => {
      const newData = [...prevData];
      newData.forEach((value) => value.zIndex = 40);
      newData[index].zIndex = 50;
      return newData;
    });
  }, []);

  const onDrag = Gesture.Pan().onUpdate((event) => {
    appTop.value = event.translationY + (height - calculatedHeight) / 2;
    appLeft.value = event.translationX + (width - calculatedWidth) / 2;
  });

  return (
    <TouchableWithoutFeedback onPress={onAppPress}>
      <Animated.View style={[appStyle]} entering={ZoomIn} exiting={ZoomOut} className={`absolute justify-center items-center`}>
        <GestureHandlerRootView className={`w-full max-h-8 flex-row bg-darkBg rounded-t-xl`}>
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
              <Text selectable={false} className={`text-base font-poppinsMedium text-black`}>{appData.title}</Text>
            </View>
          </GestureDetector>
         </GestureHandlerRootView>
        <View className={`w-full h-full flex-1 justify-center items-center bg-white rounded-b-xl`}>
          <Text className={`text-center text-2xl font-bold text-black`}>There is nothing here</Text>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}