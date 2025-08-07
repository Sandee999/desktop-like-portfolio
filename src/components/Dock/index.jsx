import React from 'react';
import { FlatList } from 'react-native';
import DockCard from './DockCard';
import { BlurView } from 'expo-blur';
import { useGlobalContext } from '@/context/GlobalContext';

export default function Dock() {
  const { appsData } = useGlobalContext();

  return (
    <BlurView intensity={10} experimentalBlurMethod='dimezisBlurView' className={`p-2 rounded-2xl shadow-xl`}>
      <FlatList
        data={appsData}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        renderItem={({ item }) => (
          <DockCard appData={item} />
        )}
        style={{ flexGrow: 0 }}
        contentContainerStyle={{ flexDirection: 'row', gap: 8 }}
        showsHorizontalScrollIndicator={false}
      />
    </BlurView>
  );
}