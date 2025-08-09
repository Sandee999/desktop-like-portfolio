import { View, Text, Platform, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'expo-image'
import WebView from 'react-native-webview'
import { useGlobalContext } from '@/context/GlobalContext';
import { Link, router } from 'expo-router';

export default function Chrome({ appData }) {
  const { chromeLink } = useGlobalContext();
  const [loading, setLoading] = useState(true);

  return (
    <View className={`w-full h-full ${!appData.isMaximized && 'rounded-b-xl'} bg-white`}>
      <View className={`w-full h-8 px-2 gap-2 flex-row items-center shadow-[0_2px_2px_rgba(0,0,0,0.03)]`}>
        <Link href={chromeLink} target='_blank' className={`w-4 h-4 items-center justify-center`}>
            <Image source={require('@/assets/other/redirect.png')} contentFit='contain' className={`absolute w-full h-full`} />
        </Link>
        <View className={`w-full h-7 flex-1 flex-row items-center justify-center bg-neutral-100 rounded-full`}>
          <Text selectable={false} numberOfLines={1} className={`flex-1 px-3 text-sm lg:text-xs font-poppinsRegular text-black `} >{chromeLink}</Text>
        </View>
      </View>
      <View className={`flex-1 justify-center items-center`}>
        {loading && (
          <ActivityIndicator size="large" color="black" style={{ position: 'absolute' }} />
        )}
        {Platform.OS === 'web' ? (
          <iframe
            src={chromeLink}
            className={`w-full h-full ${!appData.isMaximized && 'rounded-b-xl'}`}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            onLoad={() => setLoading(false)}
          />
        ) : (
          <WebView 
            source={{ uri: chromeLink }} 
            className={`w-full h-full ${!appData.isMaximized && 'rounded-b-xl'}`} 
            onLoadEnd={() => setLoading(false)} 
          />
        )}
      </View>
    </View>
  );
}