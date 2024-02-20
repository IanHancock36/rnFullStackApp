import {Button, Text, View} from 'react-native';

export default function Home({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile</Text>
      <Button title="pressMe" onPress={() => navigation.goBack()} />
    </View>
  );
}
