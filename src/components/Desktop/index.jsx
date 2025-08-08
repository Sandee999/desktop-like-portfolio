import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Image } from 'expo-image';
import { useGlobalContext } from '@/context/GlobalContext';
import onPress from './onPress';

function generateNonOverlappingPositions(width, height, iconWidth, iconHeight, count, padding = 10, maxTries = 1000) {
  const positions = [];

  let attempts = 0;
  while (positions.length < count && attempts < maxTries) {
    const x = Math.floor(Math.random() * (width - iconWidth - 2 * padding)) + padding;
    const y = Math.floor(Math.random() * (height - iconHeight - 2 * padding)) + padding;

    const overlaps = positions.some(pos => {
      return !(
        x + iconWidth + padding < pos.x || // to the left
        x > pos.x + iconWidth + padding || // to the right
        y + iconHeight + padding < pos.y || // above
        y > pos.y + iconHeight + padding // below
      );
    });

    if (!overlaps) {
      positions.push({ x, y });
    }
    attempts++;
  }

  return positions;
}

export default function Desktop() {
  const { authorData, appsData, setAppsData, setChromeLink } = useGlobalContext();
  const [desktopSize, setDesktopSize] = useState(null);
  const files = [
    { name: 'About Me', icon: require('@/assets/appIcons/googleChrome.png') },
    { name: 'Resume.docx', icon: require('@/assets/other/desktopFilesIcon.png') },
  ]

  const fileIconSize = 40;
  const padding = 20;

  const iconPositionsRef = useRef(null);

  const handleLayout = (event) => {
    const layout = event.nativeEvent.layout;
    setDesktopSize(layout);

    if (!iconPositionsRef.current) {
      const positions = generateNonOverlappingPositions(layout.width, layout.height, fileIconSize, fileIconSize, files.length, padding);
      iconPositionsRef.current = positions;
    }
  };

  const positions = iconPositionsRef.current || [];

  return (
    <View onLayout={handleLayout} className="w-full h-full">
      {desktopSize && positions.length === files.length &&
        files.map((file, index) => (
        <TouchableOpacity key={index} activeOpacity={0.8} onPress={()=>onPress(file.name, authorData, appsData, setAppsData, setChromeLink)} className={`hover:bg-blue-700`}>
          <View 
            style={{ position: 'absolute', top: positions[index].y, left: positions[index].x }} 
            className="px-1 py-2 justify-center items-center text-white border-2 border-transparent rounded-md hover:border-white hover:bg-black/80 hover:underline"
          >
            <Image source={file.icon} style={{ width: fileIconSize, height: fileIconSize }} contentFit="contain"/>
          <Text selectable={false} className="text-xs font-poppinsRegular text-inherit">{file.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
