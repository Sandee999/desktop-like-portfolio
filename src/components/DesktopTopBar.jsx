import { View, Text } from 'react-native'
import React from 'react'
import { useGlobalContext } from '@/context/GlobalContext';

export default function DesktopTopBar() {
  const { authorData } = useGlobalContext();
  return (
    <>
      <Text selectable={false} className={`px-2 py-1 text-sm font-albertThinItalic text-white border-2 border-transparent rounded-md hover:border-white hover:bg-black/80 hover:underline`}>
        {authorData.name}'s Portfolio
      </Text>
      <Text selectable={false} className={`px-2 py-1 text-base font-albertRegular text-white border-2 border-transparent rounded-md hover:border-white hover:bg-black/80 hover:underline`}>
        Contact
      </Text>
    </>
  );
}