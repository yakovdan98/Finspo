import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useClothes } from '../contexts/clothes';

import Item from './Item';

const ClothesList = () => {
  const {clothes} = useClothes();

  const list = clothes.map(item => 
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

  
export default ClothesList;