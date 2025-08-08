import { View, Text, FlatList, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppFrame from './AppFrame';
import { useGlobalContext } from '@/context/GlobalContext';

export default function RunApps() {
  const { appsData } = useGlobalContext();
  const runningApps = appsData.filter((app) => app.isActive);

  return (
    <View className={`absolute`}>
      {(runningApps).map((app) => <AppFrame key={app.id} appData={app} />)}
    </View>
  );
}