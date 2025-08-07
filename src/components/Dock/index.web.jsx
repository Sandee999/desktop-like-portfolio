import React from 'react';
import { BlurView } from 'expo-blur';
import DockCard from './DockCard';
import { useGlobalContext } from '@/context/GlobalContext';

export default function Dock() {
  const { appsData } = useGlobalContext();

  return (
    <BlurView intensity={20} className={`p-2 flex-row rounded-2xl shadow-xl`}>
      {appsData.map((value) => <DockCard key={value.id} appData={value} /> )}
    </BlurView>
  );
}