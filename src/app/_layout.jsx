import '@/global.css';
import React from 'react';
import { Stack } from 'expo-router';
import GlobalContextProvider from '@/context/GlobalContext';

export default function RootLayoutWeb() {

  return (
    <GlobalContextProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index"/>
      </Stack>
    </GlobalContextProvider>
  );
}