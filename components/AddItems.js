import React, { useContext, useState } from 'react';
import { v4 } from 'uuid';
import { useForm, Controller } from 'react-hook-form';
import { Image, TextInput, View, StyleSheet, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MediaTypeOptions } from 'expo-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import * as FileSystem from 'expo-file-system';

import FormButton from './FormButton';
import InputField from './InputField';
import { useOutfits } from '../contexts/outfits';
import { useClothes } from '../contexts/clothes';
import Header from './Header';


const AddItems = (props) => {
  const { control, handleSubmit, formState: { errors } } = useForm({});

  const [image, setImage] = useState(null);
  const { clothes, clothesUpdate } = useClothes();
  const { outfits, outfitUpdate } = useOutfits();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Top', value: 'top' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Shoes', value: 'shoes' },
    { label: 'Accessory', value: 'accessory' },
  ]);



  //todo: seperate into hook
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

    const onSubmit = async (data) => {
    const id = v4();
    const newUri = FileSystem.documentDirectory + id + '.jpg';
    console.log(`image uri ${image} `);
    console.log(`newuri ${newUri}`);
    await FileSystem.moveAsync({
      from: image,
      to: newUri,
    })
    const newItem = {
      id: id,
      name: data.Item,
      description: data.Description,
      image: newUri,
    }
    if (props.type === 1) {
      clothesUpdate(clothes.concat(newItem));
    }
    else {
      outfitUpdate(outfits.concat(newItem));
    }
    props.setForm(0);
  }



  return (
    <View>
      {image
        ?
        <>
          <FormButton style={styles.button} onPress={addImage} title="Change Image" />
          <Image source={{ uri: image }} 
            style={styles.image} 
          />
        </>
        : <FormButton style={styles.button} onPress={addImage} title="Add Image" />
      }

      <InputField
        control={control}
        name="Item"
        errors={errors.Item}
      />
      <InputField
        control={control}
        name="Description"
        errors={errors.Description}
      />

      {props.type === 1 &&
        <DropDownPicker
          placeholder="Select Type of Item"
          listMode='MODAL'
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          modalAnimationType="slide"
          style={styles.DropDown}
        />
      }
      <View style={styles.FormButton}>
        <FormButton style={styles.button} title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 600
  },
  FormHeader: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  DropDown: {
    backgroundColor: '#fafafa',
    borderWidth: 2,
    borderColor: "#000",
    margin: 5,
    width: 'auto',
    borderRadius: 10,
    padding: 10
  },
  button: {
    margin: 5,
    backgroundColor: '#91f298',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: "98%",
    aspectRatio: 1,
    alignSelf: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },

})

export default AddItems;