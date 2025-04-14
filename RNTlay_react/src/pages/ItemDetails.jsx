import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'
// import items from '../utils';
import { useState } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { removeItem } from "../utils/cartSlice";
import { addItem } from "../utils/cartSlice";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { MdCancel } from "react-icons/md";


const ItemDetails = () => {
  const cartItems = useSelector((store) => store?.cart?.items);
  const items = useSelector((store) => store?.items?.items);
  const inpValue = useRef(null)
//  console.log(items && items)
  const dispatch = useDispatch();
  const token = useSelector((store) => store.user.user);
  console.log(token && token);
  const handleAdditem = (item,itemName) => {
    dispatch(addItem(item));
    console.log(` ${itemName} added to cart`)
    toast.success(" Added to Cart!!");
  };
  const onClickHandler = (items, itemName) => {
    const filter = cartItems?.filter((item) => item.id != items);
    dispatch(removeItem(filter && filter));
    console.log(` ${itemName} removed to cart`)
    // toast.error(`${itemName} removed to Cart!!`);
  };




  const params= useParams();
  console.log(params)
  const itemId = params.itemId;
  const filitem = items?.filter((item)=>item?._id==itemId);
  const {name, price,location,image,_id }=items.find((item)=>item?._id==itemId);
  
  // console.log(filitem[0].name)
  const rentHandler = async(itemId) => {
    try {
      const totalDays = inpValue.current.value;
      console.log(inpValue.current.value)
      const response = await axios.post(`http://localhost:4000/api/v1/product/rent/${token && token}`, {
        itemId: itemId,
        totalDays
      },{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
    console.log(response.data);
    toast.success("Item rented successfully!!")

    } catch (error) {
      console.log(error);
      toast.error("Please select the number of days to rent!!")
      return;
    }
  }

  return (
    <>
    <Header/>
    <Link to={"/"}><MdCancel className='text-orange-400 text-[25px] absolute right-[520px] top-[170px]'/></Link>
    <div className=' h-[600px]  w-[40%] m-auto mt-[1%] p-[2%]'>
      <h1 className='text-center text-[30px] font-bold mb-[3%] mr-[3%]'>{name}</h1>
      <img src={image}
      className='w-[400px] h-[300px] text-center ml-14 rounded-lg mb-[3%]'
       alt="" />
      <p className='text-black text-xl ml-14 mb-[3%]'>Location :{location}</p>
      <p className='text-black text-lg ml-14 mb-[3%] italic '></p>
      <p className='text-black text-xl ml-14 mb-[3%]'>Price : Rs. {price} / day</p>
      <label className="text-black text-[18px] ml-14" htmlFor="number">
                  For how many days?{" "}
                </label>
                <input
                  className="rounded bg-gray-300"
                  type="number"
                  name="number"
                  id="number"
                  min="1"
                  max="30"
                  ref={inpValue}
                  
                />
      <div className="flex justify-between pl-1 pr-14 mt-3 mr-10">
       {/* <button className=' bg-gray-200 w-[130px] h-[40px] rounded-lg font-bold hover:bg-gray-400'>Add to Cart</button> */}
       
                  <button
                    className="p-1 bg-zinc-300 shadow-lg mx-[58px]  rounded-lg w-[143px] font-bold hover:bg-green-600"
                    onClick={() => handleAdditem(filitem[0],name)}
                  >
                   Add to Cart
                  </button>
                  <button onClick={() => rentHandler(_id)} className=' bg-orange-400 w-[130px] h-[40px] rounded-lg font-bold hover:bg-orange-500'>Book Now</button>
       </div>
      <Toaster className="mt-[100px] font-semibold italic"/>
       
     
    </div>
    </>
  )
}

export default ItemDetails
