// clothes.js

import React, {useContext, useState} from 'react';

const ClothesContext = React.createContext();

export const ClothesProvider = ( {children} ) => {
  const [clothes, setClothes] = useState([]);


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