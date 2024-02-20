import React from 'react';
import {Button, Text, View} from 'react-native';
import {DailyChallengeScreenProps} from '../Navigation/RootNavigation';

export default function DailyChallengeScreen({
  navigation,
}: DailyChallengeScreenProps) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button title="pressMe" onPress={() => navigation.goBack()} />
    </View>
  );
}
