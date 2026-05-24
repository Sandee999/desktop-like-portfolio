import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Image } from 'expo-image';
import { useGlobalContext } from '@/context/GlobalContext';
import onDesktopIconPress from '@/util/onDesktopIconPress';
import { AUTHOR_DATA, DESKTOP_FILES } from '@/constants';
import getIcon from '@/util/getIcon';

export default function Desktop() {
  const globalContext = useGlobalContext();
  const [desktopSize, setDesktopSize] = useState(null);
  const files = DESKTOP_FILES;

  const fileIconSize = 40;
  const verticalSpacing = 40; // space between icons vertically
  const horizontalSpacing = 80; // space between columns
  const padding = 10;

  const iconPositionsRef = useRef(null);

  const handleLayout = (event) => {
    const layout = event.nativeEvent.layout;
    setDesktopSize(layout);

    if (!iconPositionsRef.current) {
      const positions = [];
      let x = padding;
      let y = padding;

      files.forEach(() => {
        // If the next icon would go out of vertical bounds, start a new column
        if (y + fileIconSize > layout.height - padding) {
          x += horizontalSpacing;
          y = padding;
        }
        positions.push({ x, y });
        y += fileIconSize + verticalSpacing;
      });

      iconPositionsRef.current = positions;
    }
  };

  const positions = iconPositionsRef.current || [];

  return (
    <View onLayout={handleLayout} className="w-full h-full">
      {desktopSize && positions.length === files.length &&
        files.map((file, index) => (
          <TouchableOpacity key={index} activeOpacity={0.8} onPress={()=>onDesktopIconPress({ file, authorData: AUTHOR_DATA, globalContext })}>
            <View 
              style={{ position: 'absolute', top: positions[index].y, left: positions[index].x }} 
              className="px-1 py-2 justify-center items-center text-white border-2 border-transparent rounded-md hover:border-white hover:bg-black/80 hover:underline"
            >
              <Image source={getIcon(file.name)} style={{ width: fileIconSize, height: fileIconSize }} contentFit="contain"/>
              <Text selectable={false} style={{ width: fileIconSize * 2 }} className="text-xs font-albertRegular text-inherit text-center">
                {file.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
    </View>
  );
}
