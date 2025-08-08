import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useGlobalContext } from '@/context/GlobalContext';

export default function DesktopTopBar() {
  const { authorData, setAppsData } = useGlobalContext();

  onPressContact = () => {
    setAppsData((prevData) => {
      const index = prevData.findIndex((data) => data.title === 'Contacts');
      const newData = [...prevData];
      if(!prevData[index].isActive){
          newData[index].isActive = true;
        } else if(prevData[index].zIndex === 50 || prevData[index].isHidden) {
          newData[index].isHidden = !prevData[index].isHidden;
        }
        newData.forEach((value)=> value.zIndex=40 );
        newData[index].zIndex = 50;
        return newData;
    });
  }

  return (
    <>
      <Text selectable={false} className={`px-2 py-1 text-sm font-albertThinItalic text-white border-2 border-transparent rounded-md hover:border-white hover:bg-black/80 hover:underline`}>
        {authorData.name}'s Portfolio
      </Text>
      <TouchableOpacity activeOpacity={0.7} onPress={onPressContact}>
        <Text selectable={false} className={`px-2 py-1 text-base font-albertMedium text-white border-2 border-transparent rounded-md hover:border-white hover:bg-black/80 hover:underline`}>Contact</Text>
      </TouchableOpacity>
    </>
  );
}