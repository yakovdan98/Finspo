import React from 'react';
import { ScrollView, Text } from 'react-native';
import ItemList from './ItemList';
import Header from './Header';
import OutfitList from './OutfitList';
import { useClothes } from '../contexts/clothes';
import { useOutfits } from '../contexts/outfits';

const Profile = () => {
  const { clothes } = useClothes();
  const { outfits } = useOutfits();
  return (
    <>
      <Header title='Profile' />
      <ScrollView>
        <ItemList type='Clothes' list={clothes}/>
        <ItemList type='Outfits' list={outfits}/>
      </ScrollView>
    </>
  );
}

export default Profile;