import React from 'react';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import Home from './screens/Home';
import Restaurant from './screens/Restaurant';
import Basket from './screens/Basket';
import PreparingOrder from './screens/PreparingOrder';
import Delivery from './screens/Delivery';

StatusBar.setBarStyle('dark-content', true);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Restaurant' component={Restaurant} />
            <Stack.Screen name='Basket' component={Basket} options={{ presentation: 'modal', headerShown: false }} />
            <Stack.Screen
              name='PreparingOrder'
              component={PreparingOrder}
              options={{ presentation: 'modal', headerShown: false }}
            />
            <Stack.Screen
              name='Delivery'
              component={Delivery}
              options={{ presentation: 'modal', headerShown: false }}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
