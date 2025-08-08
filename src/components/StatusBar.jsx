import React, { useEffect, useState } from 'react';
import { View, Text, Platform } from 'react-native';
import { Image } from 'expo-image';
import { BlurView } from 'expo-blur';

export default function StatusBar() {
  if(Platform.OS !== 'web') return null;

  const VOLUME_ICONS = [
    require('@/assets/statusBar/mute.png'),
    require('@/assets/statusBar/low-volume.png'),
    require('@/assets/statusBar/high-volume.png'),
  ];
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return(
    <BlurView intensity={20} className={`absolute right-4 px-4 py-2 -z-10 gap-3 flex-row items-center rounded-xl shadow-xl`}>
      <View className={`w-4 h-4 `}>
        <Image source={require('@/assets/statusBar/wifi.png')} tintColor='white' contentFit='contain' className={`w-full h-full`} />
      </View>
      <View className={`w-4 h-4 `}>
        <Image source={VOLUME_ICONS[2]} tintColor='white' contentFit='contain' className={`w-full h-full`} />
      </View>
      <View>
        <Text selectable={false} className={`font-poppinsMedium text-white`}>{time.toTimeString().slice(0, 5)}</Text>
      </View>
    </BlurView>
  );
}