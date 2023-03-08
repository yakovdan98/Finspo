import React, { useState } from 'react';
import { View, Button, StyleSheet, ScrollView } from 'react-native';
import AddClothes from './AddClothes';
import AddItems from './AddItems';
import FormButton from './FormButton';
import Header from './Header';

const FormControl = () => {
  const [showForm, setForm] = useState(0); //0 = default, 1 = clothes, 2 = outfits
  let formHeader;
  
    if(showForm === 0) {
      formHeader = <Header title="Add an Item"/>
    } else if (showForm === 1) {
      formHeader = <Header title="Add Clothes"/>
    } else if (showForm === 2) {
      formHeader = <Header title="Add Outfits"/>
    }


  return (
    <>
      {formHeader}
      <ScrollView keyboardShouldPersistTaps='handled'>
        {showForm === 0 &&
          <>
            <FormButton title="Add Clothes" onPress={() => setForm(1)} />
            <FormButton title="Add Outfits" onPress={() => setForm(2)} />

          </>
        }

        {showForm !== 0 &&
          <>
            <AddItems setForm={setForm} type={showForm} />
            <FormButton title="Back" onPress={() => setForm(0)} />
          </>
        }
      </ScrollView>
    </>
  );
}



export default FormControl;