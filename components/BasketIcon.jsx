import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { useNavigation } from '@react-navigation/native';
import { ShoppingBagIcon } from 'react-native-heroicons/solid';

export default function BasketIcon() {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length === 0) return null;

  return (
    <View className='absolute bottom-8 right-2 z-100'>
      <TouchableOpacity
        onPress={() => navigation.navigate('Basket')}
        className='mx-5 bg-[#00CCBB] py-2 px-4 rounded-lg flex-row, items-center space=x=1'
      >
        <Text className='text-white font-extrabold text-lg py-1 px-2'>{items.length}</Text>
        <ShoppingBagIcon color='#01A296' size={50}></ShoppingBagIcon>
        <Text className='text-lg text-white font-extrabold py-1'>$ {basketTotal}</Text>
      </TouchableOpacity>
    </View>
  );
}
