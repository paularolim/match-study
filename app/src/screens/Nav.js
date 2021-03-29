import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

import ChatRoutes from '../routes/chatRoutes';

import Match from './Match';
import Profile from './Profile';

const Nav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Match"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === 'Match') {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (route.name === 'ChatRoutes') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={38} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#FFCB3E',
        inactiveTintColor: '#F2F2F2',
        activeBackgroundColor: '#7E549F',
        inactiveBackgroundColor: '#7E549F',
        style: [{ height: 52 }],
        showLabel: false,
      }}
    >
      <Tab.Screen name="Match" component={Match} />
      <Tab.Screen
        name="ChatRoutes"
        component={ChatRoutes}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: { backgroundColor: '#E84D33', marginTop: 5 },
        }}
      />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Nav;
