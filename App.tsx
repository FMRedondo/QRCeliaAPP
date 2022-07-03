import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//import screen
import HomeScreen from './screens/HomeScreen';
import CreditsScreen from './screens/CreditsScreen';
import InterestPointScreen from './screens/InterestPointScreen';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name='HomeScreen' component={HomeScreen} />
          <Stack.Screen name='CreditsScreen' component={CreditsScreen}/>
          <Stack.Screen name='InterestPointScreen' component={InterestPointScreen}/>
      </Stack.Navigator>
      <StatusBar/>
   </NavigationContainer>
  );
}


