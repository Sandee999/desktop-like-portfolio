import { View, Text } from 'react-native'
import React from 'react'
import Chrome from './Chrome';
import Word from './Word';
import Contacts from './Contacts';
import Files from './Files';
import Notepad from './Notepad';
import VScode from './VScode';

export default function Application({ appData }) {
  
  if(appData.title == 'Chrome') return <Chrome appData={appData} />;
  if(appData.title == 'Word') return <Word appData={appData} />;
  if(appData.title == 'Contacts') return <Contacts appData={appData} />;
  if(appData.title == 'Files') return <Files appData={appData} />;
  if(appData.title == 'Notepad') return <Notepad appData={appData} />;
  if(appData.title == 'VS Code') return <VScode appData={appData} />;
  return (
    <View className={`w-full h-full justify-center items-center bg-white`}>
      <Text selectable={false} className={`text-xl font-poppinsMedium text-black`}>Application Under Development</Text>
    </View>
  );
}