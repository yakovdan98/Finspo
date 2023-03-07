import React, { useState } from 'react';
import { v4 } from 'uuid';
import { useForm, Controller } from 'react-hook-form';
import { Text, Image, TextInput, View, StyleSheet, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MediaTypeOptions } from 'expo-image-picker';

import FormButton from './FormButton';
import InputField from './InputField';


const AddItems = (props) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
  });

  const [image, setImage] = useState(null);
  const formType = (props.type === 1) ? "Clothes" : "Outfits";

  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });
    console.log(_image.assets);
    if (!_image.canceled) {
      setImage(_image.assets[0].uri);
      console.log(`image uri ${image} `);
    }
  }

  const onSubmit = (data) => {
    console.log(data);

  }



  return (
    <View>

      <View>
        <Text style={styles.FormHeader}>Adding {formType}</Text>
      </View>
      {image
        ?
        <>
          <FormButton onPress={addImage} title="Change Image" />
          <Image source={{ uri: image }} style={{ width: 400, height: 400 }} />
        </>
        : <FormButton onPress={addImage} title="Add Image" />
      }

      <InputField
        control={control}
        name="Item"
        errors={errors.Item}
      />
      <InputField 
        control = {control}
        name = "Description"
        errors={errors.Description}
      />

        <View style={styles.FormButton}>
        <FormButton title="Submit" onPress={handleSubmit(onSubmit)} />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 600
  },
  FormButton: {
    margin: 10
  },
  FormHeader: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }

})

export default AddItems;