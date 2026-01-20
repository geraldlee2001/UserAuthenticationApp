/** @format */

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import uniqBy from 'lodash/uniqBy';

export interface User {
  name: string;
  email: string;
  password: string;
}

export interface AuthContextData {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (user: {
    name: string;
    email: string;
    password: string;
  }) => Promise<boolean>;
  logout: () => Promise<boolean>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userList, setUserList] = useState<User[]>([]);

  useEffect(() => {
    const checkAuthToken = async () => {
      const savedUser = await AsyncStorage.getItem('@user_data');
      if (savedUser) setUser(JSON.parse(savedUser));
      setIsLoading(false);
    };
    const getRegisteredUsers = async () => {
      const savedUsers = await AsyncStorage.getItem('@user_list');
      if (savedUsers) setUserList(JSON.parse(savedUsers));
    };
    checkAuthToken();
    getRegisteredUsers();
  }, []);

  const login = async (email: string, password: string) => {
    const user = userList.find(user => user.email === email);
    if (!user || user.password !== password) {
      Alert.alert('Login Failed', 'Invalid email or password');
      return false;
    }
    setUser(user);
    await AsyncStorage.setItem('@user_data', JSON.stringify(user));
    return true;
  };

  const signup = async (user: {
    name: string;
    email: string;
    password: string;
  }) => {
    const isExist = userList.find(e => e.email === user.email);
    if (isExist) {
      Alert.alert('Signup Failed', 'User already exists');
      return false;
    }
    setUserList(prev => [...prev, user]);
    await AsyncStorage.setItem(
      '@user_list',
      JSON.stringify(uniqBy([...userList, user], 'email')),
    );
    return true;
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('@user_data');
    return true;
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
