import React from 'react';
import { FlatList } from 'react-native';
import DockCard from './DockCard';
import { BlurView } from 'expo-blur';

export default function Dock({ data, setData }) {

  return (
    <BlurView intensity={10} experimentalBlurMethod='dimezisBlurView' className={`p-2 rounded-2xl shadow-xl`}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        renderItem={({ item }) => (
          <DockCard data={item} setData={setData} />
        )}
        style={{ flexGrow: 0 }}
        contentContainerStyle={{ flexDirection: 'row', gap: 8 }}
        showsHorizontalScrollIndicator={false}
      />
    </BlurView>
  );
}