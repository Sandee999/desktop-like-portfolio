import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';

export default function DockCard({ data, setData }) {
  const index = data.id-1;
  const scale = useSharedValue(1);
  const translateY = useSharedValue(0);

  const innerHover = Gesture.Hover()
    .onStart(()=>{
      scale.value = withSpring(1.5);
      translateY.value = withSpring(-5);
    })
    .onEnd(()=>{
      scale.value = withSpring(1);
      translateY.value = withSpring(0);
    });

    const outerHover = Gesture.Hover()
    .onStart(()=>{
      scale.value = withSpring(1.3);
      translateY.value = withSpring(-3);
    })
    .onEnd(()=>{
      scale.value = withSpring(1);
      translateY.value = withSpring(0);
    });

  const onPress = () => {
    setData((prevData) => {
      const newData = [...prevData];
      if(!prevData[index].isActive){
        newData[index].isActive = true;
      } else if(prevData[index].zIndex === 50 || prevData[index].isHidden) {
        newData[index].isHidden = !prevData[index].isHidden;
      }
      newData.forEach((value)=>value.zIndex = 40);
      newData[index].zIndex = 50;
      return newData;
    });
  }

  return (
    <GestureHandlerRootView>
        <Animated.View style={{ transform: [{ scale: scale }, { translateY: translateY }] }} className={`w-8 h-8 mx-2 justify-center items-center`}>
          <GestureDetector gesture={innerHover}>
            <TouchableOpacity activeOpacity={0.9} onPress={onPress} className={`w-full h-full`}>
              <Image source={data.icon} className={`w-full h-full`} contentFit='contain' />
            </TouchableOpacity>
          </GestureDetector>
          <GestureDetector gesture={outerHover}>
            <View className={`absolute w-16 h-16 -z-10`} />
          </GestureDetector>
          {data.isActive && data.zIndex !== 50 && <View className={`absolute -bottom-1 w-1 h-1 rounded-full bg-slate-800/70`} />}
          {data.isActive && data.zIndex === 50 && <View className={`absolute w-10 h-10 -z-10 rounded-xl shadow`} />}
        </Animated.View>
    </GestureHandlerRootView>
  );
}