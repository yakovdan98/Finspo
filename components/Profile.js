import React from 'react';
import { ScrollView, Text } from 'react-native';
import ClothesList from './ClothesList';
import OutfitList from './OutfitList';
const Profile = () => {

  return (
    <ScrollView>
      <ClothesList />
      <OutfitList />
    </ScrollView>
  );
}

export default Profile;