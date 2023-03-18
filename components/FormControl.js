import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import AddItems from './AddItems';
import FormButton from './FormButton';
import Header from './Header';

const FormControl = () => {
  const [showForm, setForm] = useState(0); //0 = default, 1 = clothes, 2 = outfits
  let formHeader;

  if (showForm === 0) {
    formHeader = <Header title="Add an Item" />
  } else if (showForm === 1) {
    formHeader = <Header title="Add Clothes" />
  } else if (showForm === 2) {
    formHeader = <Header title="Add Outfits" />
  }


  return (
    <>
      {formHeader}
      <ScrollView keyboardShouldPersistTaps='handled'>
        {showForm === 0 &&
          <>
            <FormButton fontSize={50} style={styles.button} title="Add Clothes" onPress={() => setForm(1)} />
            <FormButton fontSize={50} style={styles.button} title="Add Outfits" onPress={() => setForm(2)} />

          </>
        }

        {showForm !== 0 &&
          <>
            <AddItems setForm={setForm} type={showForm} />
            <FormButton style={styles.backButton} title="Back" onPress={() => setForm(0)} />
          </>
        }
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#aae6c0',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    width: '90%',
    aspectRatio: 1.2,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  backButton: {
    backgroundColor: '#d4505c',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    width: '98%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  }
});


export default FormControl;