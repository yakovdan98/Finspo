import React from 'react';
import { View, Text } from 'react-native';
import { useClothes } from '../contexts/clothes';

const ClothesList = () => {
  const {clothes} = useClothes();

  const list = clothes.map(item => 
      <Text key={item.id}>{item.name}</Text>
    );
    
  return (  
    <View>
      {list}
    </View>
   );
}
 
export default ClothesList;