import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
const ItemDetails = ({ item }) => {
  return (
    <View style={styles.container}>

      <View style={styles.item}>
        <Image source={{ uri: item.image }} resizeMode={'cover'} style={{ width: '100%', height: '100%' }} />
      </View>
      <Text style={styles.description}>{item.description}</Text>
    </ View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingBottom: 20,
    borderRadius: 10,

  },
  item: {
    width: '90%',
    aspectRatio: 1,
    backgroundColor: 'white',
    margin: '1%',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
export default ItemDetails;