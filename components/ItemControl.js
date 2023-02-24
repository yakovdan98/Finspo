import { createContext, useState } from "react";
import ItemForm from "./ItemForm";
import React from 'react';
import ItemList from "./ItemList";

const ItemControl = () => {
  const [items, setItems] = useState([]);

  
  const handleAddItems = (newItem) => {
    setItems([...items, newItem]);
    console.log(items);
  }

  return ( 
    <>
      <ItemForm onFormSubmit = {handleAddItems}/>
      <ItemList items={items}/>
    </>
   );
}
 
export default ItemControl;