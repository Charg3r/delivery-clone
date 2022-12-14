import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { selectRestaurant } from '../features/restaurantSlice';
import { XIcon } from 'react-native-heroicons/solid';
import { useSelector } from 'react-redux';
import * as Progress from 'react-native-progress';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

export default function Delivery() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  console.log(restaurant.lat, restaurant.log);
  let latitude, longitude;
  if (restaurant.lat === undefined) latitude = 19.28407298285374;
  else latitude = restaurant.lat;
  if (restaurant.long === undefined) longitude = -99.13537030558338;
  else longitude = restaurant.long;
  return (
    <View className='bg-[#00CCBB] flex-1'>
      <SafeAreaView className='z-50'>
        <View className='flex-row justify-between items-center p-5'>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <XIcon color='white' size={30} />
          </TouchableOpacity>
          <Text className='font-light text-white text-lg'> Order Help</Text>
        </View>
        <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'>
          <View className='flex-row justify-between'>
            <View>
              <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
              <Text className='text-3xl font-bold'>40 - 55 hours</Text>
            </View>
            <Image source={{ uri: 'https://links.papareact.com/fls' }} className='h-20 w-20' />
          </View>
          <Progress.Bar size={30} color='[#00CCBB]' />
          <Text className='mt-3 text-gray-500'> Your Order at {restaurant.title} is being prepared</Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005
        }}
        className='flex-1 mt-10 z-0'
        mapType='mutedStandard'
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long
          }}
          title={restaurant.title}
          description={restaurant.description}
          identifier='origin'
          pinColor='#00CCBB'
        />
      </MapView>
    </View>
  );
}
