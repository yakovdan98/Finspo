import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Item from './Item';

const ItemList = (props) => {

  const list = props.list.map(item =>
    <Item key={item.id} item={item} />
  );


    return (
      <View style={styles.container}>
        {list}
      </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})


export default ItemList;