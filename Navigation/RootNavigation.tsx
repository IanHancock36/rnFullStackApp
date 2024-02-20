import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import DailyChallengeScreen from '../Screens/DailyChallengeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {Button} from 'react-native';

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
// WIP 
const ProfileHeaderButton = ({navigation}: ProfileScreenProps) => (
  <Button onPress={() => navigation.goBack()} />
);
// WIP 
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
        <HomeStack.Screen
          name="Profile"
          component={ProfileScreen}
          // WIP 
          options={({navigation}) => ({
            headerLeft: () => <ProfileHeaderButton navigation={navigation} />,
          })}
           // WIP 
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
