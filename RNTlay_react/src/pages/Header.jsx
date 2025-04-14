import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import { MdContactPage } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import items from "../utils";
import { removeUser } from "../utils/userSlice";
import image from "../assets/images/black-orange-logo.jpeg"
import { updateItem } from "../utils/itemSlice";
import Body from "./Body";

const Header = ({ data, setData }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store?.cart?.items);
  const items = useSelector((store) => store?.items?.items);
  const [searchText, setSearchText] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false); // State for dropdown visibility
  const user = useSelector((store) => store?.user.user);
  const navigate = useNavigate();

  const loginHandler = () => {
    if (user) {
      dispatch(removeUser());
      setDropdownVisible(false); // Hide the dropdown when the user logs out
      navigate("/");
    } else {
      navigate("/login");
    }
  };
  const nav = () => {
    navigate("/");
  };

  const toggleDropdown = () => {
    if (user) {
      setDropdownVisible(!dropdownVisible);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="bg-orange-50 w-[100%] flex justify-between m-auto border-1 border-black border-solid shadow-md h-[80px] items-center">
        <div className="ml-[1%] flex items-center">
          <img
            src={image}
            alt=""
            className="md:w-[150px] w-[200px] h-[50px] items-center cursor-pointer"
            onClick={nav}
          />
          <input
            className="lg:w-[400px] bg-zinc-300 rounded-lg h-[40px] pl-[2%] ml-[100px] focus:outline-none md:w-[250px] sm:w-[200px]"
            type="text"
            placeholder="Search...."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            onClick={() => {
              if (searchText === "") setData(items);
              else {
                const filterItem = items.filter((item) =>
                  item.name.toLowerCase() === searchText.toLowerCase()
                );
                console.log(filterItem)
                dispatch(updateItem(filterItem));
                // setData(filterItem);
              }
            }}
            className="w-[50px] h-[40px] rounded-lg ml-[5px] font-bold inline-block p-1"
          >
            <IoSearch className="lg:h-[30px] inline-block w-[27px] mr-2" />
          </button>
        </div>
        <ul className="flex md:gap-[50px] items-center text-[18px] mr-[1%] gap-[20px]">
          <Link to={"/"} className="flex hover:text-orange-700">
            <FaHome className="m-1 md:w-[30px] w-[10px] h-[20px] items-center" />
            <li className="hover:text-orange-700 font-semibold items-center">
              Home
            </li>
          </Link>
          <Link to={"/about"} className="flex items-center hover:text-orange-700">
            <IoInformationCircle className="m-1 w-[30px] h-[25px]" />
            <li className="hover:text-orange-700 font-semibold items-center">
              About Us
            </li>
          </Link>
        
          <Link
            to={"/contactUs"}
            className="flex items-center hover:text-orange-700"
          >
            <MdContactPage className="m-1 w-[30px] h-[25px]" />
            <li className="hover:text-orange-700 font-semibold items-center">
              Contact Us
            </li>
          </Link>
          <Link to={"/cart"} className="flex items-center hover:text-orange-700">
            <FaShoppingCart className="m-1 w-[30px] h-[25px]" />
            <li className="hover:text-orange-700 font-semibold items-center">
              Cart({cartItems.length})
            </li>
          </Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="pt-[10px] pb-[10px] pl-[20px] pr-[20px] hover:text-orange-700 font-semibold items-center cursor-pointer"
            >
              {user ? (
                <FaUser className="w-[30px] h-[30px]" />
              ) : (
                "Login"
              )}
            </button>
            {dropdownVisible && (
              <div className="absolute right-0 mt-2 w-[150px] bg-white border border-gray-300 rounded shadow-lg">
                <ul>
                  <li
                    className="px-4 py-2 hover:bg-zinc-200 cursor-pointer"
                    onClick={() => navigate("/myrentings")}
                  >
                    My Bookings
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-zinc-200  cursor-pointer"
                    onClick={() => navigate("/myitems")}
                  >
                    My Items
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-zinc-200  cursor-pointer"
                    onClick={loginHandler}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </ul>
      </div>
    </>
  );
};

export default Header;