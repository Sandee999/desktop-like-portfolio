import { View, Platform, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import WebView from 'react-native-webview';
import { useGlobalContext } from '@/context/GlobalContext';

export default function Word({ appData }) {
  const { authorData } = useGlobalContext();
  const link = authorData.resume + '/preview';
  const [loading, setLoading] = useState(true);

  return (
    <View className="w-full h-full justify-center items-center">
      {/* Loader overlay */}
      {loading && (
        <ActivityIndicator size="large" color="black" style={{ position: 'absolute' }} />
      )}

      {Platform.OS === 'web' ? (
        <iframe
          src={link}
          className={`w-full h-full ${appData.isMaximized ? 'rounded-none' : 'rounded-b-xl'}`}
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          onLoad={() => setLoading(false)}
        />
      ) : (
        <WebView
          source={{ uri: link }}
          style={{ flex: 1 }}
          onLoadEnd={() => setLoading(false)}
        />
      )}
    </View>
  );
}
