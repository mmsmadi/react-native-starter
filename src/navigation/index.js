import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';

const {Navigator, Screen} = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Screen name="SplashScreen" component={SplashScreen} />
        <Screen name="HomeScreen" component={HomeScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
