import { StyleSheet, View, Text, Image, useWindowDimensions } from "react-native";
import React from 'react';


const Item = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} resizeMode={'cover'} style={{ width: '100%', height: '100%' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: '48%',
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
});
export default Item;