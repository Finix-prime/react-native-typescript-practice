import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import IdCard from './pages/idCard';
import PreInfo from './pages/preInfo';

type RootStackNavigatorParamsList = {
  PreInfo: undefined;
  IdCard: undefined;
};

const Stack = createNativeStackNavigator<RootStackNavigatorParamsList>();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <PreInfo />
    // </View>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PreInfo" component={PreInfo} />
        <Stack.Screen name="IdCard" component={IdCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
