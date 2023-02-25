import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'

import Home from './components/Home';
import Header from './components/Header';
import ItemControl from './components/ItemControl';
import ImageControl from './components/ImageControl';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Form') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Add Image') {
              iconName = focused ? 'image' : 'image-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Form" component={ItemControl} />
        <Tab.Screen name="Add Image" component={ImageControl} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

