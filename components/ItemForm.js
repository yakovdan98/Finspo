import React from 'react';
import { v4 } from 'uuid';
import { useForm } from 'react-hook-form';

const ItemForm = (props) => {
  const { register, handleSubmit} = useForm(); 

  const onSubmit = data => console.log(data);
  // function onSubmit(event) {
  //   event.preventDefault();
  //   console.log(event);
  //   props.onFormSubmit({
  //   });
  // }

  return ( 
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")}/>
      <input {...register("desc")}/>
      <input type="submit"/>
      
    </form>
   );
}
 
export default ItemForm;