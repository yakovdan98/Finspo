// clothes.js

import React, {useContext} from 'react';

const ClothesContext = React.createContext();

export const ClothesProvider = ( {children} ) => {
  const [clothes, setClothes] = useState([]);


  return (
    <ClothesContext.Provider value={{ clothes, update: setClothes }}>
      {children}
    </ClothesContext.Provider>
  )
};

export const useOutfits = () => {
  const {clothes, update} = useContext(ClothesContext)
  return {clothes, update}
};