// outfits.js

import React, {useContext, useState} from 'react';

const OutfitContext = React.createContext();

export const OutfitProvider = ( {children} ) => {
  const [outfits, setOutfits] = useState([]);

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
