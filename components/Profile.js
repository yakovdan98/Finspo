import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import ItemList from './ItemList';
import Header from './Header';
import { useClothes } from '../contexts/clothes';
import { useOutfits } from '../contexts/outfits';
import { SelectedContext } from '../contexts/SelectedContext';
import ItemDetails from './ItemDetails';
import FormButton from './FormButton';

const Profile = () => {
  const { clothes } = useClothes();
  const { outfits } = useOutfits();
  const [showOutfits, setShowOutfits] = React.useState(false); // true = show outfits, false = show clothes
  const [selectedItem, setSelectedItem] = React.useState(null);



  if (selectedItem) {
    return (
      <>
        <Header title={selectedItem.name} />
        <FormButton style={styles.button} title="Back" onPress={() => setSelectedItem(null)} />
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
          {!showOutfits &&
            <>
              <FormButton style={styles.button} onPress={() => setShowOutfits(prev => !prev)} title="Show Outfits"/>
              <ItemList type='Clothes' list={clothes} />
            </>
          }
          {showOutfits &&
            <>
              <FormButton style={styles.button} onPress={() => setShowOutfits(prev => !prev)} title="Show Clothes"/>
              <ItemList type='Outfits' list={outfits} />
            </>
          }
        </ScrollView>
      </SelectedContext.Provider>
    );

  }
}

const styles = StyleSheet.create({

  button: {
    backgroundColor: '#aae6c0',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    width: '98%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  }
});
export default Profile;