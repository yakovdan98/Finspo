import React from 'react';
import { v4 } from 'uuid';
import { useForm, Controller } from 'react-hook-form';
import { Button, TextInput, View } from 'react-native';

const ItemForm = (props) => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid}
  } = useForm({mode: 'onBlur'})

  const onSubmit = data => console.log(data);


  return ( 
    <View>
      <Controller 
        control={control}
        name="name"
        render={({field: {onChange, value, onBlur}}) => (
          <TextInputField
            iconName = "name"
            iconType = "MaterialIcons"
            placeholder = "name"
            value ={value}
            onBlur = {onBlur}
            onChangeText = {value => onChange(value)}
          />
        )}
      />
      <Button title='Submit' onPress={handleSubmit(onSubmit)} />
    </View>
   );
}
 
export default ItemForm;