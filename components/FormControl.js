import React, { useState } from 'react';
import { View, Button } from 'react-native';
import AddClothes from './AddClothes';
import AddOutfits from './AddOutfits';

const FormControl = () => {
  const [showForm, setForm] = useState(0); //0 = default, 1 = clothes, 2 = outfits

  return (
    <View>
      {showForm === 0 &&
        <>
          <Button title="Add Clothes" onPress={() => setForm(1)} />
          <Button title="Add Outfits" onPress={() => setForm(2)} />
        </>
      }
      {showForm === 1 &&
        <AddClothes />
      }
      {showForm === 2 &&
        <AddOutfits />
      }
      {showForm !== 0 &&
        <Button title="Back" onPress={() => setForm(0)} />
      }
    </View>
  );
}

export default FormControl;