import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MediaTypeOptions } from 'expo-image-picker';


const ImageControl = () => {
  const [image, setImage] = useState(null);

  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(_image.assets);
    if (!_image.canceled) {
      setImage(_image.assets[0].uri);
      console.log(`image uri ${image} `);
    }
  }

  return (
    <View>
      {image &&
        <Image source={{ uri: image }} style={{ width: 400, height: 300 }} />
      }
      <Button onPress={addImage} title="Add Image" />
    </View>
  );
}
export default ImageControl;