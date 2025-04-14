import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRef } from 'react';
import { CheckValidData } from "../utils/checkValidation"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import '../index.css'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';
import Header from "./Header";
import { MdCancel } from "react-icons/md";

const Login = () => {
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const [errorMsg, setErrorMsg]=useState(null)


  const logInHandler= async() =>{
   const message= CheckValidData(email.current.value,password.current.value)
   setErrorMsg(message)
   if(message) return;

   
  //  console.log(user && user[0].email);
   try {
    const response  = await axios.post("http://localhost:4000/api/v1/user/login", {
      email: email && email.current.value,
      password: password && password.current.value,
      },{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      console.log(response.data);
      dispatch(addUser(response.data.data));
      localStorage.setItem("user", JSON.stringify(response.data.data));
      navigate("/");
    
   } catch (error) {
    console.log(error.response.data.message);
    alert(error.response.data.message);
   }
  //  signInWithEmailAndPassword(
  //   auth,
  //   email.current.value,
  //   password.current.value
  // )
  //   .then((userCredential) => {
  //     // logged in
  //     const user = userCredential.user;
  //     navigate("/");
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     setErrorMsg("User Not Found. Please Sign Up")
      
  //   });

  }



  return (
    <>
    <Header></Header>
    <form onSubmit={(e) => e.preventDefault()}>
      <Link to={"/"}><MdCancel className='text-orange-400 text-[25px] absolute right-[520px] top-[170px]'/></Link>
      <div className='m-auto  bg-gray-50 w-[500px] h-[500px] mt-20  rounded-lg p-2 border-0 border-black shadow-2xl'>
        <h1 className='text-center font-bold m-2 text-2xl '>LOG IN </h1>
        <div className='m-10 '>

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
          
        <p className='text-red-700 text-center' >{errorMsg}</p>
         

        <button onClick={logInHandler}
        className='bg-orange-400 w-full h-[40px] rounded-lg text-xl cursor-pointer mt-2'
        >Log in</button>
        
          
        <div className='flex mt-2'>
        <p>Not have an Account?</p>
        <Link to={"/signUp"}>
          <span className='text-orange-400 ml-2 cursor-pointer'> Create new account </span>  </Link>
        </div>
        </div>
              
      </div>
    </form>
    </>
  )
}

export default Login
