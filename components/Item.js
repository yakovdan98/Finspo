import { StyleSheet, View, Text } from "react-native";
import React from 'react';


const Item = (props) => {
  return (  
    <View style={styles.item}>
      <Text>{props.name}</Text>
      <Text>{props.description}</Text>
    </View>
   );
}

const styles = StyleSheet.create({
  item: {
    borderWidth: 1
  },
});
export default Item;