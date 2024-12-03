import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './screens/Signup'; // Import the SignUp screen
import HomeScreen from './screens/Home'; // Import the HomeScreen
import Login from './screens/Login';
import DonateForm from './screens/Donate';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Donate" component={DonateForm} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
