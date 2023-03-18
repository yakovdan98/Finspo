// clothes.js

import React, {useContext, useState, useEffect} from 'react';

const ClothesContext = React.createContext();

export const ClothesProvider = ( {children} ) => {
  const [clothes, setClothes] = useState([]);

  const getClothes = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@clothes')
      if (jsonValue !== null) {
        setClothes(JSON.parse(jsonValue));
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getClothes();
  }, []);

  return (
    <ClothesContext.Provider value={{ clothes, clothesUpdate: setClothes }}>
      {children}
    </ClothesContext.Provider>
  )
};

export const useClothes = () => {
  const {clothes, clothesUpdate} = useContext(ClothesContext)
  return {clothes, clothesUpdate}
};