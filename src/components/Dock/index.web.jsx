import React from 'react';
import { BlurView } from 'expo-blur';
import DockCard from './DockCard';

export default function Dock({ data, setData }) {
  return (
    <BlurView intensity={20} className={`p-2 flex-row rounded-2xl shadow-xl`}>
      {data.map((value) => <DockCard key={value.id} data={value} setData={setData} /> )}
    </BlurView>
  );
}