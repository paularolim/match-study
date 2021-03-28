import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import Register from '../screens/Register';

import LogoTitle from '../components/LogoTitle';

const AuthStack = createStackNavigator();

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

const AuthRoutes = () => (
  <AuthStack.Navigator initialRouteName="Login" screenOptions={globalScreenOptions}>
    <AuthStack.Screen
      name="Login"
      component={Login}
      options={{ headerTitle: () => <LogoTitle /> }}
    />
    <AuthStack.Screen
      name="Register"
      component={Register}
      options={{ headerTitle: () => <LogoTitle /> }}
    />
  </AuthStack.Navigator>
);

export default AuthRoutes;
