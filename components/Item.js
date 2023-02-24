import { StyleSheet, View, Text } from "react-native";
import React from 'react';


const Item = ({item}) => {
  return (  
    <View style={styles.item}>
      <Text>Name: {item.name}</Text>
      <Text>Description: {item.desc}</Text>
    </View>
   );
}

const styles = StyleSheet.create({
  item: {
    borderWidth: 1
  },
});
export default Item;