import React from 'react';
import { ScrollView, Text } from 'react-native';
import ItemList from './ItemList';
import Header from './Header';
import OutfitList from './OutfitList';
import { useClothes } from '../contexts/clothes';
import { useOutfits } from '../contexts/outfits';
import { SelectedContext } from '../contexts/SelectedContext';
import ItemDetails from './ItemDetails';
import FormButton from './FormButton';
import { View } from 'react-native';

const Profile = () => {
  const { clothes } = useClothes();
  const { outfits } = useOutfits();
  const [selectedItem, setSelectedItem] = React.useState(null);

  if (selectedItem) {
    return (
      <>
        <Header title={selectedItem.name} />
        <FormButton title="Back" onPress={() => setSelectedItem(null)} />
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <ItemDetails item={selectedItem} />
        </View >
      </>
    );
  } else {
    return (
      <SelectedContext.Provider value={{ selectedItem, setSelectedItem }}>
        <Header title='Profile' />
        <ScrollView>
          <ItemList type='Clothes' list={clothes} />
          <ItemList type='Outfits' list={outfits} />
        </ScrollView>
      </SelectedContext.Provider>
    );

  }
}

export default Profile;