/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator()

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title='Go to details'
      onPress={() => navigation.navigate('Details')} />
    </View>
  )
}

function DetailScreen() {
  return (
    <View>
      <Text>Detail Screen</Text>
    </View>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
       <Stack.Screen name='Home' component={HomeScreen} />
       <Stack.Screen name='Details' component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App