import React from 'react';
import { View } from 'react-native';
import { useOutfits } from '../contexts/outfits';

const OutfitList = () => {
  const {outfits} = useOutfits();

  const list = outfits.map(item => 
    <Text key={item.id}>{item.name}</Text>
  );
  
  return ( 
    <View>
      {list}
    </View>
   );
}
 
export default OutfitList;