import React from 'react';
import { v4 } from 'uuid';
import { useForm, Controller } from 'react-hook-form';
import { Text, Button, TextInput, View, StyleSheet } from 'react-native';
import FormButton from './FormButton';


const AddClothes = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: ''
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <View>
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


        <FormButton title="Submit" onPress={handleSubmit(onSubmit)} />
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
export default AddClothes;