import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { StatusBar } from 'react-native';
import { RootStack } from './navigation/AppStack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        {/* Set the status bar style (e.g., time, battery icons) */}
        <StatusBar barStyle="dark-content" />

        {/* The Navigator handles conditional rendering of Login vs Home */}
        <RootStack />
      </NavigationContainer>
    </AuthProvider>
  );
}
