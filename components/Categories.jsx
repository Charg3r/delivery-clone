import { ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

export default function Categories() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <CategoryCard imgUrl='https://i.redd.it/6n8x4rsosrr21.png' title='OwO' />
      <CategoryCard
        imgUrl='https://res.cloudinary.com/teepublic/image/private/s--0Sx6hF2F--/t_Preview/b_rgb:ffffff,c_limit,f_auto,h_630,q_90,w_630/v1536528878/production/designs/3131893_0.jpg'
        title='UwU'
      />
      <CategoryCard imgUrl='https://i.redd.it/6n8x4rsosrr21.png' title='OwO' />
      <CategoryCard
        imgUrl='https://res.cloudinary.com/teepublic/image/private/s--0Sx6hF2F--/t_Preview/b_rgb:ffffff,c_limit,f_auto,h_630,q_90,w_630/v1536528878/production/designs/3131893_0.jpg'
        title='UwU'
      />
      <CategoryCard imgUrl='https://i.redd.it/6n8x4rsosrr21.png' title='OwO' />
      <CategoryCard
        imgUrl='https://res.cloudinary.com/teepublic/image/private/s--0Sx6hF2F--/t_Preview/b_rgb:ffffff,c_limit,f_auto,h_630,q_90,w_630/v1536528878/production/designs/3131893_0.jpg'
        title='UwU'
      />
    </ScrollView>
  );
}
