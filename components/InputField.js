import React from 'react';
import { Controller } from 'react-hook-form';
import { TextInput, StyleSheet, Text } from 'react-native';

/**
 * Creates an Input Field
 * @param {control, name, errors} props 
 * @returns 
 */
const InputField = (props) => {
  return (
    <>
      <Controller
        defaultValue=""
        control={props.control}
        rules={{
          required: { value: true, message: `${props.name} is required` }
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            placeholder={props.name}
          />
        )}
        name={props.name}
      />
      {props.errors && <Text style={styles.errorMessage}>This is required.</Text>}
    </>
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
  errorMessage:{
    color: 'red'
  }

})

export default InputField;