import { View, Text } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur';
import { Link } from 'expo-router';
import { Image } from 'expo-image';
import { AUTHOR_DATA } from '@/constants';

function ContactView({ href, text, imageSource }) {

  return(
    <View className={`flex-row items-center gap-2`}>
      <Image source={imageSource} contentFit='contain' tintColor='white' className={`size-5`} />
      <Link href={href} target='_blank' className={`text-lg font-poppinsRegular text-white hover:underline`}>{text}</Link>
    </View>
  );
}

export default function Contacts({ appData }) {
  return (
    <BlurView intensity={50} className={`w-full h-full justify-center items-center ${!appData.isMaximized && 'rounded-b-xl'}`}>
      <View className={`px-6 py-4 gap-4 rounded-lg bg-black/90`}>
        <ContactView href={AUTHOR_DATA.aboutMe} text={AUTHOR_DATA.name} imageSource={require('@/assets/other/user.png')} />
        <ContactView href={`tel:${AUTHOR_DATA.phoneNo}`} text={AUTHOR_DATA.phoneNo} imageSource={require('@/assets/other/phone.png')} />
        <ContactView href={`mailto:${AUTHOR_DATA.email}`} text={AUTHOR_DATA.email} imageSource={require('@/assets/other/email.png')} />
        <ContactView href={AUTHOR_DATA.github} text={'Github'} imageSource={require('@/assets/other/github.png')} />
        <View className={`flex-row w-full justify-evenly items-center gap-2`}>
          <ContactView href={AUTHOR_DATA.linkedin} text={'Linkedin'} imageSource={require('@/assets/other/linkedin.png')} />
          <ContactView href={AUTHOR_DATA.instagram} text={'Instagram'} imageSource={require('@/assets/other/instagram.png')} />
        </View>
      </View>
    </BlurView>
  )
}