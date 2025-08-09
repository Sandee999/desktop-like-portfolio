import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import onDesktopIconPress from '@/util/onDesktopIconPress';
import { useGlobalContext } from '@/context/GlobalContext';
import { AUTHOR_DATA, DESKTOP_FILES } from '@/constants';
import { Image } from 'expo-image';

export default function Files({ appData }) {
  const { appsData, setAppsData, setChromeLink, openFile, setOpenFile } = useGlobalContext();
  const files = openFile ? DESKTOP_FILES.find(file => file.name === openFile).children : DESKTOP_FILES;

  return (
    <View className={`w-full h-full flex-row border-[1px] border-[#CBCBCB] divide-x-[1px] divide-[#CBCBCB] ${!appData.isMaximized && 'rounded-b-xl'}`}>
      <View className={`max-w-32 p-3 flex-1 h-full bg-[#F0F0F0] ${!appData.isMaximized && 'rounded-bl-xl'}`}>
        <Text className={`text-base font-albertMedium text-[#878787]`}>Desktop</Text>
        {DESKTOP_FILES.map((file, index) => (
          <TouchableOpacity 
            key={index} 
            activeOpacity={0.8} 
            className={`py-1 hover:underline`}
            onPress={()=>onDesktopIconPress({ file, authorData: AUTHOR_DATA, setAppsData, setChromeLink, setOpenFile })}
          >
            <Text className={`pl-3 text-xs font-albertRegular`}>{file.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View className={`flex-1 h-full bg-white ${!appData.isMaximized && 'rounded-br-xl'}`}>
        <View className={`p-3 gap-1 flex-row items-center`}>
          {openFile &&
            <TouchableOpacity activeOpacity={0.8} onPress={() => setOpenFile('')}>
              <Image source={require('@/assets/other/back.png')} contentFit='contain' tintColor='#878787' className={`size-3`} />
            </TouchableOpacity>
          }
          <Text className={`text-base font-albertMedium text-[#878787]`}>{openFile || 'Desktop'}</Text>
        </View>
        <View className={`w-full h-[.5px] bg-[#CBCBCB]`} />
        <View className={`px-3 gap-4 flex-1 flex-row flex-wrap`}>
          {files.map((file, index) => (
            <View key={index}>
              <TouchableOpacity 
                key={index} 
                activeOpacity={0.8} 
                className={`px-2 py-1 gap-1 items-center justify-center hover:underline hover:bg-[#F0F0F0]`}
                onPress={()=>onDesktopIconPress({ file, authorData: AUTHOR_DATA, setAppsData, setChromeLink, setOpenFile })}
              >
                <Image source={file.icon || require('@/assets/appIcons/desktopFolderIcon.png')} contentFit='contain' className={`size-10`} />
                <Text className={`text-sm font-albertRegular`}>{file.name}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}