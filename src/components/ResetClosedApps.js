import React from 'react';
import { View, Text } from 'react-native';
import useRestClosedApps from '@/hooks/useRestClosedApps';

export default function ResetClosedApps({ globalContext }) {
  useRestClosedApps({ globalContext });

  return (
    <View/>
  );
}