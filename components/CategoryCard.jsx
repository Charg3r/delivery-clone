import { Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function CategoryCard({ imgUrl, title }) {
  return (
    <TouchableOpacity className='p-5 mx-2 bg-gray-200 rounded-lg'>
      <Image
        source={{
          uri: imgUrl
        }}
        className='h-16 w-16'
      />
      <Text className='text-center pt-3'>{title}</Text>
    </TouchableOpacity>
  );
}
