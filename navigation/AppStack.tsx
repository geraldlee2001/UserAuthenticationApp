import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import LoginScreen from '../screen/LoginScreen';
import SignupScreen from '../screen/SignupScreen';
import HomeScreen from '../screen/HomeScreen';
import { AuthContext } from '../context/AuthContext';
export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) return null;

  return (
    <Stack.Navigator>
      {user ? (
        <Stack.Screen name="Home" component={HomeScreen} />
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{
              title: '',
              headerBackButtonDisplayMode: 'minimal',
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
