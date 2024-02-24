import React from 'react';
import ImageScreen from './src/resources/screens/ImageScreen';
import HomeScreen from './src/resources/screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import Header from './src/components/header/Header';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <View>
        <Header />
      </View>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            options={{headerShown: false}}
            component={HomeScreen}
          />
          <Stack.Screen
            name="ImageScreen"
            options={{headerShown: false}}
            component={ImageScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
