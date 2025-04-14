import React from 'react'
import Header from './Header'
import coverimg from '../assets/images/cover image.jpeg'
import img1 from "../assets/images/img1.jpeg";
import img3 from "../assets/images/img3.jpeg";

export default function About() {
  return (
    <div>
      <Header></Header>
      <div className='mt-[1px]'>
        <div className='w-[100%] h-[50%]'>
          <img src={coverimg} alt=""  className='w-[100%] bg-cover h-[50%]'/>
        </div>
        <div className='h-[300px] w-[600px] bg-white absolute top-[400px] left-[450px] rounded-2xl shadow-md shadow-gray-500 p-20'>
          <h2 className='text-black text-[40px] font-serif'>Welcome to RNTlay</h2>
          <div className='border-b-4 border-solid border-b-orange-400 w-[50%] m-auto '></div>
          <h3 className='text-black text-md font-serif ml-[130px] mt-10'>Rent Anything , Anytime </h3>
        </div>
      </div>
      <div className='flex justify-evenly'>
      <div className='h-[500px] w-[600px] bg-white rounded-xl shadow-md shadow-gray-500 pl-20 pr-20 pt-10 mt-60 '>
          <h5 className='text-[35px] font-serif'>About RNTlay</h5>
          <div className='border-b-8 border-solid border-b-orange-400 w-[40%] mt-[25px]'></div>
          <div className='pt-4 pr-2'>
          <p className='mt-[10px] font-serif'>Welcome to RNTlay, your trusted destination for hassle-free renting.At RNTlay, we believe that finding the perfect space or item to rent should be simple, transparent, and accessible to everyone. Whether you're looking for a cozy apartment, office space, event venue, or even everyday essentials, RNTlay connects you with a wide range of trusted listings, all in one place.Our mission is to make renting as convenient as buying without the long-term commitments. We bring together verified owners and responsible renters through a secure platform that ensures a smooth and reliable experience for both sides.</p>
          </div>

      </div>
      <div className='h-[500px] w-[600px] bg-white rounded-xl shadow-md shadow-gray-500 pl-20 pr-20 pt-10 mt-60'>
          <h5 className='text-[35px] font-serif'>Why Choose RNTlay?</h5>
          <div className='border-b-8 border-solid border-b-orange-400 w-[40%] mt-[25px]'></div>
          <div className='pt-4 pr-2'>
          <p className='mt-[10px] font-serif'><span>Diverse Listings: From homes to holiday getaways, tools to transportation we've got it all.</span><hr /><br />
          Verified Partners: We prioritize your safety and trust by working only with verified owners and service providers. <hr></hr> <br />
          Easy to Use: Our user-friendly platform makes browsing, booking, and managing rentals effortless. <hr></hr><br />
          Support When You Need It: Our dedicated customer support team is here to help every step of the way<hr></hr>.</p>
          </div>

      </div>
      </div>

      
      <div className='w-[100%] h-[700px] flex mt-20 justify-around p-2'>
        <div className='h-[700px] w-[40%] bg-white pl-40 mt-60'>
           <h5 className='text-[35px] font-serif'>Join Our Community</h5>
          <div className='border-b-8 border-solid border-b-orange-400 w-[40%] mt-[25px]'></div>
          <div className='pt-4 pr-2'>
          <p className='mt-[10px] font-serif'>Thousands of users are already enjoying the freedom and flexibility of RNTlay. Start exploring today, and see how easy life can be when you rent your way!</p>
          </div>
        </div>
        <div className='h-[700px] w-[60%] bg-pink-600'>
          <img src={img1} alt="" className=''/>
        </div>
      </div>

      <div className='w-[100%] h-[700px] flex '>
        <div className='h-[700px] w-[55%] bg-white p-2'>
          <img src={img3} alt="" />
           
        </div>
        <div className='h-[700px] w-[40%] bg-white pr-40'>
          <h5 className='text-[35px] font-serif mt-60 '>Our Vision</h5>
            <div className='border-b-8 border-solid border-b-orange-400 w-[40%] mt-[25px]'></div>
            <div className='pt-4 pr-2'>
            <p className='mt-[10px] font-serif'>We envision a future where renting is the first choice for flexibility and convenience. Whether it's for a day, a week, or a few months, RNTlay empowers you to live and work on your terms.</p>
            </div>
        </div>
      </div>

      
    </div>
  )
}



