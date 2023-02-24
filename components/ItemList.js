import { View } from "react-native";
import React, { useContext } from 'react';
import Item from "./Item";


const ItemList = ({items}) => {

  return ( 
    <View>
      {items.map((item) => 
        <Item key={item.key} item={item}/>
      )}
    </View>
    );
}
 
export default ItemList;