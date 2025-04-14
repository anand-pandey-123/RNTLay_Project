import React from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom';

const RentForm = () => {
  const {itemId}= useParams();
  console.log(itemId); 
  
  return (
   <div>
    <Header></Header>
    <form >
       <h2>RENT </h2>
    </form>
    </div>
  )
}

export default RentForm;
