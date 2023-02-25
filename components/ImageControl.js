import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MediaTypeOptions } from 'expo-image-picker';

 
const ImageControl = () => {
  const [image, setImage] = useState(null);

  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    });
    console.log(JSON.stringify(_image));
    if (!_image.canceled) {
      setImage(_image.uri);
    }
  }

  return ( 
    <View>
      <Image source={{uri: image}}/>
      <Button onPress={addImage}>Add Image</Button>
    </View>
   );
  }
export default ImageControl;