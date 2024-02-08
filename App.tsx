import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import DetailsScreen from './Screens/Details';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home"   options={{ title: 'Home' }} component={Home} />
        <Stack.Screen name="Details"   options={{ title: 'Detail' }} component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App