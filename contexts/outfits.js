// outfits.js

import React, {useContext, useState, useEffect} from 'react';

const OutfitContext = React.createContext();

export const OutfitProvider = ( {children} ) => {
  const [outfits, setOutfits] = useState([]);


  const getOutfits = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@outfits')
      if (jsonValue !== null) {
        setOutfits(JSON.parse(jsonValue));
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getOutfits();
  }, []);

  return (
    <OutfitContext.Provider value={{ outfits, outfitUpdate: setOutfits }}>
      {children}
    </OutfitContext.Provider>
  )
};

export const useOutfits = () => {
  const {outfits, outfitUpdate} = useContext(OutfitContext)
  return {outfits, outfitUpdate}
};
