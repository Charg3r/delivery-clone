import React, { useLayoutEffect } from 'react';
import { View, Text, TextInput, SafeAreaView, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ChevronDownIcon, SearchIcon, AdjustmentsIcon } from 'react-native-heroicons/solid';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

export default function Home() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  });

  return (
    <SafeAreaView>
      <View className='flex-row w-100 py-4 px-5 justify-between'>
        <View>
          <Image
            source={{
              uri: 'http://links.papareact.com/wru'
            }}
            className='h-12 w-12'
          />
        </View>
        <View>
          <Text className='text-right text-gray-500'> Deliver now </Text>
          <Text className='text-lg'>
            Current Location <ChevronDownIcon size={20} color='#00CCBB' />
          </Text>
        </View>
      </View>
      <ScrollView vertical>
        <View className='flex-row items-center space-x-2 px-5 py-4'>
          <View className='flex-row space-x-2 flex-1 bg-gray-200 px-4 py-2'>
            <SearchIcon size={35} color='gray' />
            <TextInput placeholder='Restaurants and cuisines' keyboardType='default' />
          </View>
          <AdjustmentsIcon color='#00CCBB' />
        </View>

        <View className='flex-row px-5 py-4'>
          <Categories />
        </View>
        <View>
          <FeaturedRow id='123' title='Featured' description='Paid placements from our partners' />
          <FeaturedRow id='1234' title='Featured' description='Paid placements from our partners' />
          <FeaturedRow id='12345' title='Featured' description='Paid placements from our partners' />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
