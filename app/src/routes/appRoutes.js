import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Nav from '../screens/Nav';

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

const AppRoutes = () => (
  <AuthStack.Navigator initialRouteName="Nav" screenOptions={globalScreenOptions}>
    <AuthStack.Screen
      name="Nav"
      component={Nav}
      options={{ headerTitle: () => <LogoTitle /> }}
    />
  </AuthStack.Navigator>
);

export default AppRoutes;
