import React, { useRef } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import items from '../utils'
import { useState } from 'react'
import CategoryItems from './CategoryItems'
import { Link, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { useSelector } from 'react-redux'



const Home = () => {
  const items = useSelector((store) => store?.items?.items);
  const [data, setData ]= useState(items);
  const categoryValue = useRef(null);
  const [category, setCategory] = useState("all");
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Selected Category:', categoryValue.current.value);
    setCategory(categoryValue.current.value);
  };
  // console.log(categoryValue.current.value);

  return (
    <div>
      <Header data={data} setData={setData}></Header>
      <div className='flex justify-between pl-20 pr-20 pt-5'>
      <form onSubmit={handleSubmit}>
      <select name="category" id="category" ref={categoryValue} className='border-2 outline-none bg-white border-black h-[35px] w-[300px] rounded-lg pl-2 pr-2 text-black'>
        <option value="all" className='border-none outline-none bg-zinc-300 text-black text-[20px] h-[30px] px-4 py-2 hover:bg-zinc-200 cursor-pointer"'>All</option>
        <option value="Electronics" className='border-none outline-none hover:bg-gray-500 text-black text-[20px] h-[30px] rounded-t-md'>Electronics</option>
        <option value="Furniture" className='border-none outline-none hover:bg-gray-500 text-black text-[20px] h-[30px] rounded-t-md'>Furniture</option>
        <option value="Clothes" className='border-none outline-none hover:bg-gray-500 text-black text-[20px] h-[30px] rounded-t-md'>Clothes</option>
        <option value="Books" className='border-none outline-none hover:bg-gray-500 text-black text-[20px] h-[30px] rounded-t-md'>Books</option>
        <option value="Instrument" className='border-none outline-none text-black hover:bg-gray-500 text-[20px] h-[30px] rounded-t-md'>Instrument</option>
        <option value="Equipment" className='border-none outline-none hover:bg-gray-500 text-black text-[20px] h-[30px] rounded-t-md'>Equipment</option>
        <option value="Vehicles" className='border-none outline-none hover:bg-gray-500 text-[20px] text-black h-[30px] rounded-t-md'>Vehicles</option>
        <option value="Fashion" className='border-none outline-none hover:bg-gray-500 text-black text-[20px] h-[30px] rounded-t-md'>Fashion</option>
        <option value="Appliances" className='border-none outline-none hover:bg-gray-500 text-black text-[20px] h-[30px] rounded-t-md'>Appliances</option>
        <option value="Sports" className='border-none outline-none hover:bg-gray-500 text-black text-[20px] h-[30px] rounded-t-md'>Sports</option>
        <option value="Tools" className='border-none outline-none hover:bg-gray-500 text-black text-[20px] h-[30px] rounded-t-md'>Tools</option>

      </select>
      <button type="submit"> <IoSearch className="lg:h-[30px] inline-block w-[27px] ml-2" /></button>
    </form>
            <Link
                to={"/additem"}
              >
                {/* <IoInformationCircle className="m-1 w-[30px] h-[25px]" /> */}
                <div className="items-center border-2 border-black h-[38px] w-[200px] text-black rounded-lg text-center p-1 hover:bg-zinc-300">
                  Rent Your Stuff
                </div>
            </Link>
      </div>
      <Body category={category}></Body>
      <Footer></Footer>
    </div>
  )
}

export default Home
