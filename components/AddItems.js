import React, { useState } from 'react';
import { v4 } from 'uuid';
import { useForm, Controller } from 'react-hook-form';
import { Text, Image, TextInput, View, StyleSheet, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MediaTypeOptions } from 'expo-image-picker';

import FormButton from './FormButton';


const AddItems = (props) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: ''
    }
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
        {errors.name && <Text style={styles.errorMessage}>This is required.</Text>}

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
        {errors.desc && <Text style={styles.errorMessage}>This is required.</Text>}

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
  input: {
    borderWidth: 2,
    borderColor: "#000",
    margin: 5,
    borderRadius: 10,
    padding: 10
  },
  FormButton: {
    margin: 10
  },
  FormHeader: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorMessage:{
    color: 'red'
  }

})

export default AddItems;