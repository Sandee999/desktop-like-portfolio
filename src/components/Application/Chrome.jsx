import { View, TouchableOpacity, Text, Platform } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import WebView from 'react-native-webview'
import { useGlobalContext } from '@/context/GlobalContext';

export default function Chrome({ appData }) {
  const { chromeLink } = useGlobalContext();

  return (
    <View className={`w-full h-full`}>
      <View className={`w-full h-8 px-2 gap-2 flex-row items-center shadow-[0_2px_2px_rgba(0,0,0,0.03)]`}>
        <TouchableOpacity className={`w-4 h-4 flex-row items-center justify-center`}>
          <Image source={require('@/assets/chrome/left-arrow.png')} contentFit='contain' className={`w-full h-full`} />
        </TouchableOpacity>
        <TouchableOpacity className={`w-4 h-4 flex-row items-center justify-center`}>
          <Image source={require('@/assets/chrome/right-arrow.png')} contentFit='contain' className={`w-full h-full`} />
        </TouchableOpacity>
        <View className={`w-full h-7 flex-1 flex-row items-center justify-center bg-neutral-100 rounded-full`}>
          <Text className={`flex-1 px-3 text-sm lg:text-xs font-poppinsRegular text-black `} >{chromeLink}</Text>
        </View>
      </View>
      <View className={`flex-1`}>
        {Platform.OS === 'web' ? (
          <iframe
            src={chromeLink}
            className={`w-full h-full ${appData.isMaximized ? 'rounded-none' : 'rounded-b-xl'}`}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        ) : (
          <WebView source={{ uri: chromeLink }} style={{ flex: 1 }} />
        )}
      </View>
    </View>
  );
}