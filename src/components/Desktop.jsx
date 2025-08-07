import React from 'react';
import { View, Text } from 'react-native';

function generateRandomNumbersInRange(min, max, count, minDifference) {
  const numbers = [];
  
  while (numbers.length < count) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    
    // Ensure the minimum difference condition is met
    if (numbers.length === 0 || Math.abs(randomNum - numbers[numbers.length - 1]) >= minDifference) {
      numbers.push(randomNum);
    }
  }
  
  return numbers;
}


export default function Desktop() {
  return (
    <View className={`w-full h-full`}>
      
    </View>
  );
}