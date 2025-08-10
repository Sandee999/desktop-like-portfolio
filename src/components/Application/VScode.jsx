import { View, Text, TextInput, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'expo-image';
import RenderHTML from 'react-native-render-html';
import { marked } from 'marked';
import { useGlobalContext } from '@/context/GlobalContext';

export default function VScode() {
  const { vscodeLink: link } = useGlobalContext();
  const [loading, setLoading] = useState(true);
  const [markdown, setMarkdown] = useState(''); 
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    if (!link) {
      setLoading(false);
      return;
    }
    fetch(link)
      .then(res => res.text())
      .then(md => {
        setMarkdown(md);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="black" />;
  }
  
  function onPressRun() {
    setLoading(true);
    const html = marked(markdown);
    setHtmlContent(html);
    setLoading(false);
  }

  if(htmlContent==='') return (
    <View className={`w-full h-full bg-[#1e1e1e]`}>
      <View className={`w-full h-8 flex-row items-center justify-between px-3 bg-black/50`}>
        <Text className={`text-sm font-albertRegular text-white`}>untitled</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={onPressRun} className={`px-3 py-1 gap-2 flex-row items-center border-2 border-white rounded-2xl hover:bg-white/10`}>
          <Text className={`text-xs font-albertRegular text-white`}>Run</Text>
          <Image source={require('@/assets/other/play.png')} contentFit='contain' tintColor='white' className={`w-3 h-3`} />
        </TouchableOpacity>
      </View>
      <TextInput 
        className={`w-full h-full p-3 text-white`}
        placeholder='Enter code. (Markdown or HTML works)'
        placeholderTextColor='#808080'
        value={markdown}
        onChangeText={setMarkdown}
        multiline
      />
    </View>
  )

  return(
    <ScrollView className={`w-full h-full px-3 bg-white`}>
      <View className={`w-full h-6 pt-2 gap-2 flex-row items-center justify-between`}>
        <Text className={`text-sm font-albertMedium text-black`}>README.md</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={() => setHtmlContent('')} className={`px-2 py-1 gap-2 flex-row items-center border-2 border-black rounded-2xl`}>
          <Image source={require('@/assets/other/back.png')} contentFit='contain' className={`size-4`} />
          <Text className={`text-xs font-albertRegular text-black`}>Back</Text>
        </TouchableOpacity>
      </View>
      <RenderHTML contentWidth={window.innerWidth} source={{ html: htmlContent }} />
    </ScrollView>
  );
}