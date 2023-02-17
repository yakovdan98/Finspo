import React from 'react';
import { v4 } from 'uuid';
const ItemForm = (props) => {
  
  function handleSumbit(event) {
    event.preventDefault();
    props.onFormSubmit({
      name: event.target.name.value,
      desc: event.target.desc.value,
      key: v4()
    });
  }

  return ( 
    <form onSubmit={handleSumbit}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        <input type="text" name="desc" />
      </label>
      <input type="submit" value="Add" />
    </form>
   );
}
 
export default ItemForm;