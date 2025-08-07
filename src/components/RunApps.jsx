import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppFrame from './AppFrame';
import { useGlobalContext } from '@/context/GlobalContext';

export default function RunApps() {
  const { appsData, setAppsData } = useGlobalContext();
  const [runningApps, setRunningApps] = useState([]);

  useEffect(() => {
    setRunningApps(appsData.filter((app) => app.isActive));
  }, [appsData]);

  return (
    <View className={`absolute w-full h-full justify-center items-center`}>
      {(runningApps).map((app) => <AppFrame key={app.id} appData={app} />)}
    </View>
  );
}