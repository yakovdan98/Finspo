import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from './Header';
const Home = () => {

  return (
    <View>
      <Header title='Finspo' />
      <View style={styles.container}>
        <Text>Home screen</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "70%",
    justifyContent: 'center',
    alignItems: 'center'
  },
});
export default Home;