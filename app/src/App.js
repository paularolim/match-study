/* eslint-disable no-return-assign */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import Register from './screens/Register';
import Nav from './screens/Nav';

import LogoTitle from './components/LogoTitle';

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: {
    backgroundColor: '#7E549F',
    shadowOpacity: 0,
    elevation: 0,
    height: 52,
  },
  headerTintColor: '#f2f2f2',
  headerTitleAlign: 'center',
};

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={globalScreenOptions}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerTitle: () => <LogoTitle /> }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerTitle: () => <LogoTitle /> }}
      />
      <Stack.Screen
        name="Nav"
        component={Nav}
        options={{ headerTitle: () => <LogoTitle />, headerBackImage: null }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
