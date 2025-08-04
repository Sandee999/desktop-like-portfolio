import React from 'react';
import { View } from 'react-native';
import DockCard from './DockCard';

export default function Dock({ data, setData }) {

  return (
    <View className={`p-2 flex-row rounded-2xl bg-darkBg`}>
        {data.map((value, index) => <DockCard key={value.id} data={value} setData={setData} /> )}
    </View>
  );
}