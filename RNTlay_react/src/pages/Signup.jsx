import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { useRef, useState } from 'react';
import { CheckValidData } from '../utils/checkValidation';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';
import Header from "./Header";
import { MdCancel } from "react-icons/md";


const Signup = () => {

  const navigate = useNavigate();
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();

  console.log(user);
  const userName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const location = useRef(null);
  // const image = useRef(null);
  const [errorMsg, setErrorMsg]=useState(null)

  
  const signUpHandler=async () =>{
   const message= CheckValidData(email.current.value, password.current.value)
   setErrorMsg(message)
   if(message) return;
  

  //  console.log(image &&  image.current.files[0]);
   //signUp
   const response  = await axios.post("http://localhost:4000/api/v1/user/register", {
    name: userName && userName.current.value,
    email: email &&  email.current.value, 
    password: password && password.current.value,
    location : location && location.current.value,
    // image: image? image.current.files[0]: null,
    },{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  console.log(response.data.data);
   dispatch(addUser(response.data.data));
   navigate("/login");


  //  createUserWithEmailAndPassword(
  //   auth,
  //   email.current.value,
  //   password.current.value
  //  )
  //   .then((userCredential) => {
  //     // Signed up
  //     const user = userCredential.user;
  //     console.log(user);
  //     navigate("/login");
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   });

  }



  return (
    <>
    <Header></Header>
    <form  onSubmit={(e)=>e.preventDefault()}>
      <Link to={"/"}><MdCancel className='text-orange-400 text-[25px] absolute right-[520px] top-[170px]'/></Link>
    <div className='m-auto  bg-gray-50  w-[500px] h-[520px] mt-20  rounded-lg p-2 border-0 border-black shadow-2xl'>
    <h1 className='text-center font-bold m-2 text-2xl'>SIGN UP</h1>
    <div className='m-10 '>
      <h2 className='mb-2 text-xl mr-[290px]'>Enter Name</h2>
      <input 
      ref={userName}
      className='bg-zinc-300 w-full h-[40px] rounded-md mb-5 pl-2 border outline-none'
       type="text" placeholder='Enter Name' />
      
      <h2 className='mb-2 text-xl mr-[220px]'>Enter Email Address</h2>
      <input 
      ref={email}
      className='bg-zinc-300 w-full h-[40px] rounded-md mb-5 pl-2 border outline-none'
       type="text" placeholder='Enter Email Address' />
      
      <h2 className='mb-2 text-xl mr-[260px]'>Enter Password</h2>
      <input 
      ref={password}
      className='bg-zinc-300 w-full h-[40px] rounded-md mb-4 pl-2 border outline-none'
       type="password" placeholder='Enter Password'/>

      <h2 className='mb-2 text-xl mr-[260px]'>Enter Location</h2>
      <input 
      ref={location}
      className='bg-zinc-300 w-full h-[40px] rounded-md mb-4 pl-2 border outline-none'
       type="text" placeholder='Enter Location'/>

      {/* {<h2 className='mb-2 text-xl mr-[260px]'>Upload Image</h2>
      <input 
      ref={image}
      className='bg-zinc-300 w-full h-[42px] rounded-md mb-4 pl-2 border outline-none'
       type="file" placeholder='Upload Image'/>} */}

       <p className='text-red-700 text-center' >{errorMsg}</p>

      <button onClick={signUpHandler}
      className='bg-orange-400 w-full h-[40px] rounded-lg  text-xl cursor-pointer mt-2'>Sign Up</button>
        
      <div className='flex mt-2'>

      <p>Already have an Account?</p>
      <Link to={"/login"}>
        <span className='text-orange-400 ml-2 cursor-pointer text-center'> Login to your Account</span>  </Link>
      </div>
      </div>
     
     
            
    </div>
  </form>
  </>
  )
}

export default Signup
