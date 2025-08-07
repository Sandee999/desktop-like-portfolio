import '@/global.css';
import React from 'react';
import { Stack } from 'expo-router';
import GlobalContextProvider from '@/context/GlobalContext';
import usePreventRightClick from '@/web-hooks/usePreventInspect';
import { Platform } from 'react-native';

export default function RootLayoutWeb() {
  {Platform.OS === 'web' && usePreventRightClick();}

  return (
    <GlobalContextProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index"/>
      </Stack>
    </GlobalContextProvider>
  );
}