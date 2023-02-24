import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

 
const ImageControl = () => {
  const [image, setImage] = useState(null);

  const addImage = () => {

  }

  return ( 
    <View>
      <Text>Add an image</Text>
    </View>
   );
  }
export default ImageControl;