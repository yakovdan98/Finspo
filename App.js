import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Item from './components/Item';
import Header from './components/Header';

export default function App() {
  return (
    <View>
      <Header/>
      <Item
        name = "jeans"
        description = "pair of jeans"
      />
      <Item
        name = "jeans"
        description = "pair of jeans"
      />
      <Item
        name = "jeans"
        description = "pair of jeans"
      />
      <Item
        name = "jeans"
        description = "pair of jeans"
      />
      <Item
        name = "jeans"
        description = "pair of jeans"
      />
      <StatusBar style="auto" />
    </View>
  );
}

