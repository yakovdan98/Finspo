import React, { createContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { OutfitProvider } from './contexts/outfits';
import { ClothesProvider } from './contexts/clothes';

import Home from './components/Home';
import Header from './components/Header';
import ItemControl from './components/ItemControl';
import ImageControl from './components/ImageControl';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <OutfitProvider>
      <ClothesProvider>
        <NavigationContainer>
          <Header />
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = focused
                    ? 'home'
                    : 'home-outline';
                } else if (route.name === 'Form') {
                  iconName = focused
                    ? 'add-circle'
                    : 'add-circle-outline';
                } else if (route.name === 'Closet') {
                  iconName = focused
                    ? 'copy'
                    : 'copy-outline';
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
            <Tab.Screen name="Closet" component={ImageControl} />
          </Tab.Navigator>
        </NavigationContainer>

      </ClothesProvider>
    </OutfitProvider>


  );
}

