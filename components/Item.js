import { StyleSheet, Image, Pressable } from "react-native";
import React, {useContext} from 'react';
import { SelectedContext } from '../contexts/SelectedContext';


const Item = ({ item }) => {
  const {setSelectedItem} = useContext(SelectedContext);

  const handledPress = () => {
    console.log('pressed');
    setSelectedItem(item);
  }
  return (

      <Pressable onPress={handledPress} style={styles.item}>
        <Image source={{ uri: item.image }} resizeMode={'cover'} style={{ width: '100%', height: '100%' }} />
      </Pressable>


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