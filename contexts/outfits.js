// outfits.js

import React, {useContext, useState} from 'react';

const OutfitContext = React.createContext();

export const OutfitProvider = ( {children} ) => {
  const [outfits, setOutfits] = useState([]);

  return (
    <OutfitContext.Provider value={{ outfits, update: setOutfits }}>
      {children}
    </OutfitContext.Provider>
  )
};

export const useOutfits = () => {
  const {outfits, update} = useContext(OutfitContext)
  return {outfits, update}
};
