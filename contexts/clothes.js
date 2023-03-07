// clothes.js

import React, {useContext, useState} from 'react';

const ClothesContext = React.createContext();

export const ClothesProvider = ( {children} ) => {
  const [clothes, setClothes] = useState([]);


  return (
    <ClothesContext.Provider value={{ clothes, update: setClothes }}>
      {children}
    </ClothesContext.Provider>
  )
};

export const useClothes = () => {
  const {clothes, update} = useContext(ClothesContext)
  return {clothes, update}
};