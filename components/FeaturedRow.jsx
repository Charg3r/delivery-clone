import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

export default function FeaturedRow({ id, title, description }) {
  return (
    <View className='pt-1'>
      <View className='mt 4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color='#00CCBB' />
      </View>
      <Text className='text-xs text-gray-500 px-4'>{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='pt-4'
        contentContainerStyle={{
          paddingHorizontal: 15
        }}
      >
        {/*Restaurant Card*/}
        <RestaurantCard
          id={123}
          imgUrl='http://links.papareact.com/gn7'
          title='Sushi'
          rating={4.5}
          address='Main St.'
          genre='Japanese'
          short_description='Descripcion'
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl='http://links.papareact.com/gn7'
          title='Sushi'
          rating={4.5}
          address='Main St.'
          genre='Japanese'
          short_description='Descripcion'
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl='http://links.papareact.com/gn7'
          title='Sushi'
          rating={4.5}
          address='Main St.'
          genre='Japanese'
          short_description='Descripcion'
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
}
