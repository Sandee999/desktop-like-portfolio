import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppFrame from './AppFrame';

export default function RunApps({ appsData, setAppsData }) {
  const [runningApps, setRunningApps] = useState([]);

  useEffect(() => {
    setRunningApps(appsData.filter((app) => app.isActive));
  }, [appsData]);

  return (
    <View className={`absolute w-full h-full justify-center items-center`}>
      {(runningApps).map((app) => <AppFrame key={app.id} appData={app} setAppsData={setAppsData} />)}
    </View>
  );
}