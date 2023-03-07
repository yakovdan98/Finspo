import React, { useState } from 'react';
import { View, Button, StyleSheet, ScrollView } from 'react-native';
import AddClothes from './AddClothes';
import AddItems from './AddItems';
import FormButton from './FormButton';

const FormControl = () => {
  const [showForm, setForm] = useState(0); //0 = default, 1 = clothes, 2 = outfits
  
  return (
    <ScrollView>
      {showForm === 0 &&
        <>
          <FormButton title="Add Clothes" onPress={() => setForm(1)} />
          <FormButton title="Add Outfits" onPress={() => setForm(2)} />

        </>
      }

      {showForm !== 0 &&
        <>
          <AddItems setForm={setForm} type={showForm} />
          <FormButton  title="Back" onPress={() => setForm(0)} />
        </>
      }
    </ScrollView>
  );
}



export default FormControl;