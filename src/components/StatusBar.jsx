import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Image } from 'expo-image';
import { VOLUME_ICONS } from '@/constants';

export default function StatusBar() {
  const [time, setTime] = useState(new Date());
  
  // useEffect(() => setTime(new Date()) );

  return(
    <View className={`absolute right-4 px-4 py-2 gap-3 flex-row items-center rounded-xl bg-darkBg`}>
      <View className={`w-4 h-4 `}>
        <Image source={require('@/assets/statusBar/wifi.png')} contentFit='contain' className={`w-full h-full`} />
      </View>
      <View className={`w-4 h-4 `}>
        <Image source={VOLUME_ICONS[2]} contentFit='contain' className={`w-full h-full`} />
      </View>
      <View>
        <Text selectable={false} className={`font-poppinsMedium`}>{time.toTimeString().slice(0, 5)}</Text>
      </View>
    </View>
  );
}