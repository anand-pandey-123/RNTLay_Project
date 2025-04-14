import React from 'react'
import Header from './Header'
import { FaTwitter } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { MdCancel } from "react-icons/md";
import { Link } from 'react-router-dom';




const ContactUs = () => {
  const navigate = useNavigate();
  const submitHandler=()=>{
    navigate("/submitted")

  }
  return (
   <>
    <div>
      <Header/>
      <div className='w-full h-[150px] bg-orange-400'>
        

      </div>
      
      <form >
        
      <div className='w-[700px] h-[580px] bg-white absolute top-[130px] left-[450px] rounded-[4%] border-0 border-black shadow-2xl'>
      <Link to={"/"}><MdCancel className='text-orange-400 text-[25px] absolute right-[5px] top-[11px]'/></Link>
        <h1 className='text-center font-bold pt-4 text-[30px]'>Get In Touch</h1>
        <div className='flex justify-between pl-10 pr-10 pt-5'>
          <div>
              <h3 className='mb-2'>FIRST NAME</h3>
              <input type="text" placeholder='Please Enter First Name'  className='h-[40px] w-[300px] bg-gray-300 rounded-lg pl-3 focus:outline-none'/>
          </div>
          <div>
             <h3 className='mb-2'>LAST NAME</h3>
             <input type="text" placeholder='Please Enter Last Name'  className='h-[40px] w-[300px] bg-gray-300 rounded-lg pl-3 focus:outline-none'/>
          </div>
        </div>
        <div className='flex justify-between pl-10 pr-10 pt-5'>
          <div>
              <h3 className='mb-2'>EMAIL ID</h3>
              <input type="text" placeholder='Please Enter Email ID'  className='h-[40px] w-[300px] bg-gray-300 rounded-lg pl-3 focus:outline-none'/>
          </div>
          <div>
             <h3 className='mb-2'>PHONE NUMBER</h3>
             <input type="text" placeholder='Please Enter Phone Number'  className='h-[40px] w-[300px] bg-gray-300 rounded-lg pl-3 focus:outline-none'/>
          </div>
        </div>
        <h3 className='mb-2 ml-10 mt-5' >WHAT DO HAVE IN MIND?</h3>
        <textarea name="" id="" className='h-[100px] w-[620px] bg-gray-300 rounded-lg pl-3 focus:outline-none ml-10 mr-10 pt-3'></textarea>
        <button onClick={submitHandler}
        className='h-[40px] w-[620px] bg-orange-400 rounded-lg pl-3 ml-10 mr-10 text-center mt-5'>Submit</button>
        
        <div className='flex text-center ml-[290px] mt-10 '>
           <FaTwitter className='m-2 text-orange-400 h-[20px] w-[20px] hover:scale-150' />
           <FaFacebookF className='m-2 text-orange-400 h-[20px] w-[20px] hover:scale-150'/>
           <FaGoogle className='m-2 text-orange-400 h-[20px] w-[20px] hover:scale-150'/>
           <FaInstagram className='m-2 text-orange-400 h-[20px] w-[20px] hover:scale-150'/>

        </div>
        
        

      </div>
      </form>
    </div>
    
   </>
  )
}

export default ContactUs
