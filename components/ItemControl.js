import { useState } from "react";
import ItemForm from "./ItemForm";
import React from 'react';


const ItemControl = () => {
  const [items, setItems] = useState({});
  
  return ( 
    <ItemForm/>
   );
}
 
export default ItemControl;