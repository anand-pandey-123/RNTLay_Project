import axios from 'axios';
import React, { useRef } from 'react';
import Header from './Header';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MdCancel } from "react-icons/md";
import { Link } from 'react-router-dom';

const Additem = () => {
   const navigate = useNavigate();
  const nameRef = useRef();
  const descriptionRef = useRef();
  const quantityRef = useRef();
  const imageRef = useRef();
  const priceRef = useRef();
  const locationRef = useRef();
  const categoryRef = useRef();
  const totaldaysRef = useRef();
  const token = useSelector((store) => store.user.user);
      console.log(token && token);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      quantity: quantityRef.current.value,
      image: imageRef.current.files[0], // For file input
      price: priceRef.current.value,
      location: locationRef.current.value,
      category: categoryRef.current.value,
      totaldays: totaldaysRef.current.value,
      token: token && token
    };


    console.log('Form Data Submitted:', formData);

    try {
      const response = await axios.post('http://localhost:4000/api/v1/product/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    navigate("/")
  };
 

  return (
    <div>
        <Header></Header>
        <Link to={"/"}><MdCancel className='text-orange-400 text-[25px] absolute right-[400px] top-[100px]'/></Link>
      <h1 className='text-[25px] font-serif text-center mt-5'> Rent Your Item</h1>
      <form onSubmit={handleSubmit} className=' h-[600px] w-[50%] m-auto rounded p-10'>
        <div className='flex justify-between'>
          <label className='text-[20px] font-serif'>Name </label>
          <input type="text" name="name" ref={nameRef} required className='border-none outline-none rounded-md w-[70%] h-[35px] bg-zinc-200 p-2 font-serif'/>
        </div>
        <br />
        <div className='flex justify-between'>
          <label className='text-[20px] font-serif'>Description:</label>
          <textarea name="description" ref={descriptionRef} required  className='border-none outline-none rounded-md w-[70%] h-[35px] bg-zinc-200 p-2 font-serif'/>
        </div>
        <br />
        <div className='flex justify-between'>
          <label className='text-[20px] font-serif'>Quantity:</label>
          <input type="number" name="quantity" ref={quantityRef} required className='border-none outline-none rounded-md w-[70%] h-[35px] bg-zinc-200 p-2 font-serif'/>
        </div>
        <br />
        <div className='flex justify-between'>
          <label className='text-[20px] font-serif'>Image:</label>
          <input type="file" name="image" ref={imageRef} required className='border-none outline-none rounded-md w-[70%] h-[35px] bg-zinc-200 
          pl-2 font-serif'/>
        </div>
        <br />
        <div className='flex justify-between'>
          <label className='text-[20px] font-serif'>Price:</label>
          <input type="number" name="price" ref={priceRef} required className='border-none outline-none rounded-md w-[70%] h-[35px] bg-zinc-200 p-2 font-serif'/>
        </div>
        <br />
        <div className='flex justify-between'>
          <label className='text-[20px] font-serif'>Location:</label>
          <input type="text" name="location" ref={locationRef} required className='border-none outline-none rounded-md w-[70%] h-[35px] bg-zinc-200 p-2 font-serif' />
        </div>
        <br />
        <div className='flex justify-between'>
          <label className='text-[20px] font-serif'>Category:</label>
          <select name="category" ref={categoryRef} required className='border-none outline-none rounded-md w-[70%] h-[35px] bg-zinc-200 p-2 font-serif' >
                <option value="all" className='border-none outline-none bg-zinc-300 text-black text-[20px] h-[30px] rounded-t-md'>Select category</option>
              <option value="Electronics" className='border-none outline-none hover:bg-gray-500 text-black text-[20px] h-[30px] rounded-t-md'>Electronics</option>
              <option value="Furniture" className='border-none outline-none hover:bg-gray-500 text-black text-[20px] h-[30px] rounded-t-md'>Furniture</option>
              <option value="Clothing" className='border-none outline-none hover:bg-gray-500 text-black text-[20px] h-[30px] rounded-t-md'>Clothing</option>
              <option value="Books" className='border-none outline-none hover:bg-gray-500 text-black text-[20px] h-[30px] rounded-t-md'>Books</option>
              <option value="Musical Instruments" className='border-none outline-none text-black hover:bg-gray-500 text-[20px] h-[30px] rounded-t-md'>Musical Instruments</option>
              <option value="Gym Equipments" className='border-none outline-none hover:bg-gray-500 text-black text-[20px] h-[30px] rounded-t-md'>Gym Equipments</option>
              <option value="Others" className='border-none outline-none hover:bg-gray-500 text-[20px] text-black h-[30px] rounded-t-md'>Others</option>
          </select>
        </div>
        <br />
        <div className='flex justify-between'>
          <label className='text-[20px] font-serif'>Total Days:</label>
          <input type="number" name="totaldays" ref={totaldaysRef} required className='border-none outline-none rounded-md w-[70%] h-[35px] bg-zinc-200 p-2 font-serif'/>
        </div>
        <br />
        <button type="submit" className='bg-orange-400 w-[100%] h-[38px] tetx-black text-[20px] font-serif font-semibold rounded-lg hover:bg-orange-500'>Add Item</button>
      </form>
    </div>
  );
};

export default Additem;