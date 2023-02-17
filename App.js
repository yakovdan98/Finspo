import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Item from './components/Item';
import Header from './components/Header';
import React from 'react';
import ItemControl from './components/ItemControl';


export default function App() {
  return (
    <View>
      <Header/>
      <ItemControl />
      <StatusBar style="auto" />
    </View>
  );
}

