import * as React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootNavigation from './Navigation/RootNavigation';
import {View} from 'react-native';

// const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={{flex:1 }}>
      <RootNavigation />
    </View>
  );
};

export default App;
