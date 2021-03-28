import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './contexts/authContext';

import Routes from './routes';

const App = () => (
  <NavigationContainer>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </NavigationContainer>
);

export default App;
