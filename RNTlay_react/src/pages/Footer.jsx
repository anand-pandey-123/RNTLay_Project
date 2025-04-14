import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-rgb(2, 6, 12) bg-orange-50 h-[500px] flex justify-center items-center mt-10 cursor-pointer border-t-2 border-black">
      <div className="h-[350px] w-[70%]  flex justify-evenly items-center">
        <div className="h-[300px] w-[20%] ">
          <h1 className="font-serif text-black italic text-[30px] font-extrabold">
            <Link to={"/about"}>RNTlay</Link>
          </h1>
          <p className="text-black font-bold">© 2025</p>
        </div>
        <div className="h-[300px] w-[20%] ">
          <h1 className="font-serif text-black text-[20px] font-extrabold mb-3">
            Company
          </h1>
          <a href="#">
          <Link to={"/about"}><p className="text-black font-bold mb-3 hover:text-orange-400">About</p></Link>
          </a>
          <a href="#">
            <p className="text-black font-bold mb-3 hover:text-orange-400">Careers</p>
          </a>
          <a href="#">
            <p className="text-black font-bold mb-3 hover:text-orange-400">Team</p>
          </a>
          
        </div>
        <div className="h-[300px] w-[20%] ">
          <div>
            <h1 className="font-serif text-black text-[20px] font-extrabold mb-3">
            <Link to={"/contactUs"}> Contact us</Link>
            </h1>
            <a href="#">
              <p className="text-black font-bold mb-3 hover:text-orange-400">Help & Support</p>
            </a>
            <a href="#">
              <p className="text-black font-bold mb-3 hover:text-orange-400">Partner with us</p>
            </a>
            <a href="#">
              <p className="text-black font-bold mb-3 hover:text-orange-400">Ride with us</p>
            </a>
          </div>
          <br />
          <br />
          <div>
            <h1 className="font-serif text-black text-[20px] font-extrabold mb-3">
            Legal
            </h1>
            <a href="#">
              <p className="text-black font-bold mb-3 hover:text-orange-400">Terms & Conditions</p>
            </a>
            <a href="#">
              <p className="text-black font-bold mb-3 hover:text-orange-400">Cookie Policy</p>
            </a>
            <a href="#">
              <p className="text-black font-bold mb-3 hover:text-orange-400">Privacy Policy</p>
            </a>
            <a href="#">
              <p className="text-black font-bold mb-3 hover:text-orange-400"> Investor Relation</p>
            </a>
          </div>
        </div>
        <div className="h-[300px] w-[20%] ">
        <h1 className="font-serif text-black text-[20px] font-extrabold mb-3">
        We deliver to:
            </h1>
            <a href="#">
              <p className="text-black font-bold mb-3 hover:text-orange-400">Bangalore</p>
            </a>
            <a href="#">
              <p className="text-black font-bold mb-3 hover:text-orange-400">Gurgaon</p>
            </a>
            <a href="#">
              <p className="text-black font-bold mb-3 hover:text-orange-400">Hyderabad</p>
            </a>
            <a href="#">
              <p className="text-black font-bold mb-3 hover:text-orange-400"> Mumbai</p>
            </a>
            <a href="#">
              <p className="text-black font-bold mb-3 hover:text-orange-400">Pune</p>
            </a>

        </div>
      </div>
    </div>
  );
};

export default Footer;
