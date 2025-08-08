import { View, Text } from 'react-native'
import React from 'react'
import { useGlobalContext } from '@/context/GlobalContext';
import { BlurView } from 'expo-blur';
import { Link } from 'expo-router';
import { Image } from 'expo-image';

function ContactView({ href, text, imageSource }) {

  return(
    <View className={`flex-row items-center gap-2`}>
      <Image source={imageSource} contentFit='contain' tintColor='white' className={`size-5`} />
      <Link href={href} target='_blank' className={`text-lg font-poppinsRegular text-white hover:underline`}>{text}</Link>
    </View>
  );
}

export default function Contacts() {
  const { authorData } = useGlobalContext();  console.log(authorData);
  return (
    <BlurView intensity={50} className={`w-full h-full justify-center items-center bg-transparent`}>
      <View className={`px-6 py-4 gap-4 rounded-lg bg-black/90`}>
        <ContactView href={authorData.aboutMe} text={authorData.name} imageSource={require('@/assets/other/user.png')} />
        <ContactView href={`tel:${authorData.phoneNo}`} text={authorData.phoneNo} imageSource={require('@/assets/other/phone.png')} />
        <ContactView href={`mailto:${authorData.email}`} text={authorData.email} imageSource={require('@/assets/other/email.png')} />
        <ContactView href={authorData.github} text={'Github'} imageSource={require('@/assets/other/github.png')} />
        <View className={`flex-row w-full justify-evenly items-center gap-2`}>
          <ContactView href={authorData.linkedin} text={'Linkedin'} imageSource={require('@/assets/other/linkedin.png')} />
          <ContactView href={authorData.instagram} text={'Instagram'} imageSource={require('@/assets/other/instagram.png')} />
        </View>
      </View>
    </BlurView>
  )
}