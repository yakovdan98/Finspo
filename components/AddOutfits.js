import React, { useState } from 'react';
import { v4 } from 'uuid';
import { useForm, Controller } from 'react-hook-form';
import { Text, Image, TextInput, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MediaTypeOptions } from 'expo-image-picker';

import FormButton from './FormButton';


const AddOutfits = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: ''
    }
  });

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

  const onSubmit = (data) => {
    console.log(data, image);
  }

  return (
    <View>
      {image &&
        <Image source={{ uri:image }} style={{ width: 400, height: 300}} />
      }
      <FormButton onPress={addImage} title="Add Image" />

      <Controller
        defaultValue=""
        control={control}
        rules={{
          required: { value: true, message: 'name is required' }
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            placeholder="Item"
          />
        )}
        name="name"
      />
      {errors.name && <Text>This is required.</Text>}

      <Controller
        defaultValue=""
        control={control}
        rules={{
          required: { value: true, message: 'description is required' }
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            placeholder="Description"
          />
        )}
        name="desc"
      />
      {errors.desc && <Text>This is required.</Text>}

      <View style={styles.FormButton}>
        <FormButton title="Submit" onPress={handleSubmit(onSubmit)} />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: "#000",
    margin: 5,
    borderRadius: 10,
    padding: 10
  },
  FormButton: {
    margin: 10
  }
})

export default AddOutfits;