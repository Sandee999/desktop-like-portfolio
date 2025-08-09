import { View, Text } from 'react-native'
import React from 'react'
import Chrome from './Chrome';
import Word from './Word';
import Contacts from './Contacts';

export default function Application({ appData }) {
  
  if(appData.title == 'Chrome') return <Chrome appData={appData} />;
  if(appData.title == 'Word') return <Word appData={appData} />;
  if(appData.title == 'Contacts') return <Contacts appData={appData} />;
  return (
    <View className={`w-full h-full justify-center items-center bg-white`}>
      <Text selectable={false} className={`text-xl font-poppinsMedium text-black`}>Application Under Development</Text>
    </View>
  );
}