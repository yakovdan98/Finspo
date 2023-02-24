import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';

import Home from './components/Home';
import Header from './components/Header';
import ItemControl from './components/ItemControl';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Header/>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Form" component={ItemControl}/>
      </Tab.Navigator>
    </NavigationContainer>

  );
}

