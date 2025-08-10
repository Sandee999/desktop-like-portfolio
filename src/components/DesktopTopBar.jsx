import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useGlobalContext } from '@/context/GlobalContext';
import { AUTHOR_DATA } from '@/constants';
import { Link } from 'expo-router';

export default function DesktopTopBar() {
  const { setAppsData } = useGlobalContext();

  onPress = () => {
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
      <Link href={AUTHOR_DATA.aboutMe} target='_blank'>
        <Text selectable={false} className={`px-2 py-1 text-sm font-albertThinItalic text-white border-2 border-transparent rounded-md hover:border-white hover:bg-black/80 hover:underline`}>
          {AUTHOR_DATA.name}'s Portfolio
        </Text>  
      </Link>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <Text selectable={false} className={`px-2 py-1 text-base font-albertMedium text-white border-2 border-transparent rounded-md hover:border-white hover:bg-black/80 hover:underline`}>
          Contact
        </Text>
      </TouchableOpacity>
    </>
  );
}