import { View, Text } from 'react-native'
import React from 'react'
import Chrome from './Chrome';
import Word from './Word';

export default function Application({ appData }) {
  
  if(appData.title == 'Chrome') return <Chrome appData={appData} />;
  if(appData.title == 'Word') return <Word appData={appData} />;
  return (
    <View className={`w-full h-full justify-center items-center`}>
      <Text selectable={false} className={`text-xl font-poppinsMedium text-black`}>Application Under Development</Text>
    </View>
  );
}