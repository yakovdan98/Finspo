import React from 'react';
import { View } from 'react-native';
import AddClothes from './AddClothes';
import AddOutfits from './AddOutfits';

const FormControl = () => {

  return (
    <View>
      <AddClothes />
      <AddOutfits />
    </View>
  );
}

export default FormControl;