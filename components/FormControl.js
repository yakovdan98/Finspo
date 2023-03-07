import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import AddClothes from './AddClothes';
import AddItems from './AddItems';
import FormButton from './FormButton';

const FormControl = () => {
  const [showForm, setForm] = useState(0); //0 = default, 1 = clothes, 2 = outfits

  return (
    <View>
      {showForm === 0 &&
        <>
          <FormButton title="Add Clothes" onPress={() => setForm(1)} />
          <FormButton title="Add Outfits" onPress={() => setForm(2)} />

        </>
      }

      {showForm !== 0 &&
        <>
          <AddItems type={showForm} />
          <FormButton title="Back" onPress={() => setForm(0)} />
        </>
      }
    </View>
  );
}



export default FormControl;