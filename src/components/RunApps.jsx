import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Application from './Application';

export default function RunApps({ appsData, setAppsData }) {
  const [runningApps, setRunningApps] = useState([]);

  useEffect(() => {
    setRunningApps(appsData.filter((app) => app.isActive));
  }, [appsData]);

  return (
    <View className={`absolute w-full h-full justify-center items-center`}>
      {(runningApps).map((app) => <Application key={app.id} appData={app} setAppsData={setAppsData} />)}
    </View>
  )
}