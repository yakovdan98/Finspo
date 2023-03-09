import React, { useContext, useState } from 'react';
import { v4 } from 'uuid';
import { useForm, Controller } from 'react-hook-form';
import { Image, TextInput, View, StyleSheet, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MediaTypeOptions } from 'expo-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';

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
  const formType = (props.type === 1) ? "Clothes" : "Outfits";
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

  const onSubmit = (data) => {

    if (props.type === 1) {
      const newClothes = {
        id: v4(),
        name: data.Item,
        description: data.Description,
        image: image,
      }

      clothesUpdate(clothes.concat(newClothes));
      console.log(clothes);
    }
    else {
      const newOutfit = {
        id: v4(),
        name: data.Item,
        description: data.Description,
        image: image,
      }
      outfitUpdate(outfits.concat(newOutfit));
    }
    props.setForm(0);
  }



  return (
    <View>
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

})

export default AddItems;