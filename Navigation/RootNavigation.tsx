import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import DailyChallengeScreen from '../Screens/DailyChallengeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type RootParamsList = {
  HomeScreen: undefined;
  DailyChallenges: undefined;
  Profile: undefined;
};

export type DailyChallengeScreenNavigationProp = BottomTabNavigationProp<
  RootParamsList,
  'DailyChallenges'
>;
type DailyChallengeScreenRouteProp = RouteProp<
  RootParamsList,
  'DailyChallenges'
>;

export interface DailyChallengeScreenProps {
  navigation: DailyChallengeScreenNavigationProp;
  route: DailyChallengeScreenRouteProp;
}

export type ProfileScreenNavigationProp = BottomTabNavigationProp<
  RootParamsList,
  'Profile'
>;

export interface ProfileScreenProps {
  navigation: ProfileScreenNavigationProp;
}

const HomeStack = createBottomTabNavigator<RootParamsList>();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
        <HomeStack.Screen
          name="DailyChallenges"
          component={DailyChallengeScreen}
        />
        <HomeStack.Screen name="Profile" component={ProfileScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
