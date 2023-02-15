import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './src/Navigators/AppNavigator';




function App() {
  return (
   <AppNavigator/>
  );
}

export default App;