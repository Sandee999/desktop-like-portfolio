import { View, ActivityIndicator, ScrollView, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '@/context/GlobalContext';

export default function LicenseViewer() {
  const { notepadLink } = useGlobalContext();
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState('');

  useEffect(() => {
    if (!notepadLink) {
      setLoading(false);
      return;
    }
    fetch(notepadLink)
      .then(res => res.text())
      .then(text => {
        setContent(text);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="black" />;
  }

  if (content === '') {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <Text selectable={false} className="text-xl font-poppinsMedium text-black">
          No content found
        </Text>
      </View>
    );
  }

  return (
    <ScrollView className="p-4 flex-1 justify-center items-center bg-white" contentContainerClassName={`flex-1`}>
      <Text className={`text-sm font-albertRegular`}>{content}</Text>
    </ScrollView>
  );
}
