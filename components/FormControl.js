import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import AddClothes from './AddClothes';
import AddOutfits from './AddOutfits';
import FormButton from './FormButton';

const FormControl = () => {
  const [showForm, setForm] = useState(0); //0 = default, 1 = clothes, 2 = outfits

  return (
    <View>
      {showForm === 0 &&
        <>
            <Button title="Add Clothes" style={styles.FormButton} onPress={() => setForm(1)} />
            <Button title="Add Outfits" style={styles.FormButton} onPress={() => setForm(2)} />

        </>
      }
      {showForm === 1 &&
        <AddClothes />
      }
      {showForm === 2 &&
        <AddOutfits />
      }
      {showForm !== 0 &&
        <View style={styles.FormButton}>
          <Button title="Back" onPress={() => setForm(0)} />
        </View>
      }
    </View>
  );
}



export default FormControl;