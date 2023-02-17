import { useState } from "react";
import ItemForm from "./ItemForm";
import React from 'react';


const ItemControl = () => {
  const [items, setItems] = useState({});
  
  const handleAddItems = (newItem) => {
    const newItems = [...items, newItem];
    setItems(newItems);
  }

  return ( 
    <ItemForm onFormSubmit = {handleAddItems}/>
   );
}
 
export default ItemControl;