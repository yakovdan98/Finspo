import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Item from './Item';

const ItemList = (props) => {

  const list = props.list.map(item =>
    <Item key={item.id} item={item} />
  );

  if (props.list.length === 0) {
    return (
      <View style={styles.empty}>
        <Text style={{ fontSize: 30 }}>No {props.type}</Text>
        <Text>Add an item to view it</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        {list}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  empty: {
    paddingTop: "50%",
    justifyContent: 'center',
    alignItems: 'center'
  }
})


export default ItemList;