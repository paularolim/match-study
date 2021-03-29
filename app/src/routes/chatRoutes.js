import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ChatList from '../screens/ChatList';
import Chat from '../screens/Chat';

const ChatStack = createStackNavigator();

const ChatRoutes = () => (
  <ChatStack.Navigator initialRouteName="Nav" screenOptions={{ headerShown: false }}>
    <ChatStack.Screen name="ChatList" component={ChatList} />
    <ChatStack.Screen name="Chat" component={Chat} />
  </ChatStack.Navigator>
);

export default ChatRoutes;
