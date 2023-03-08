import React from 'react';
import { View } from 'react-native';
import { useOutfits } from '../contexts/outfits';

const OutfitList = () => {
  const {outfits} = useOutfits();

  return ( 
    <View>

    </View>
   );
}
 
export default OutfitList;