import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';
import { useGlobalContext } from '@/context/GlobalContext';
import getIcon from '@/util/getIcon';

export default function DockCard({ appData }) {
  const { appsData, setAppsData } = useGlobalContext();
  
  const onPress = () => {
    setAppsData((prevData) => {
      const index = appsData.indexOf(appData);
      const newData = [...prevData];
      if(!prevData[index].isActive){
        newData[index].isActive = true;
      } else if(prevData[index].zIndex === 50 || prevData[index].isHidden) {
        newData[index].isHidden = !prevData[index].isHidden;
      }
      newData.forEach((value)=>{
        value.zIndex = 40
        value.isMaximized = true
      });
      newData[index].zIndex = 50;
      return newData;
    });
  }

  return (
    <View className={`w-8 h-8 mx-2 justify-center items-center`}>
      <TouchableOpacity activeOpacity={0.9} onPress={onPress} className={`w-full h-full`}>
        <Image source={getIcon(appData.name)} className={`w-full h-full`} contentFit='contain' />
      </TouchableOpacity>
      {appData.isActive && appData.zIndex !== 50 && <View className={`absolute -bottom-1 w-1 h-1 rounded-full bg-white/70`} />}
      {appData.isActive && appData.zIndex === 50 && <View className={`absolute w-10 h-10 -z-10 rounded-xl shadow`} />}
    </View>
  );
}