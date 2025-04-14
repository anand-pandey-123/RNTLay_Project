import React from "react";
import items from "../utils";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import { addItem } from "../utils/cartSlice";
import { useSelector } from "react-redux";

const Card = ({ item }) => {
  // const { itemId } = item.id;
  const cartItems = useSelector((store) => store?.cart?.items);
  const params = useParams();
  const itemId = params.itemId;
  const dispatch = useDispatch();

  const handleAdditem = (item, itemName) => {
    dispatch(addItem(item));
    console.log(` ${itemName} added to cart`);
    toast.success(" Added to Cart!!");
  };
  const onClickHandler = (items, itemName) => {
    const filter = cartItems?.filter((item) => item.id != item);
    dispatch(removeItem(filter && filter));
    console.log(` ${itemName} removed to cart`);
    toast.error(`${itemName} removed to Cart!!`);
  };

  return (
    <>

        <div className=" container bg-orange-50 h-[360px] w-[260px] p-3 rounded-t-xl hover:border-b-2 hover:border-orange-400 mr-3 mb-3 shadow-md ">
          <img src={`${item.image}`} alt="" className="item-img" />
          <h3 className="item-name mt-1">{item.name}</h3>
          <p className="item-cat ">Category: {item.category}</p>
          <p className="item-price">Price: Rs {item.price} / day </p>
          <div className="item-btns">
            <Link to={`details/${item._id}`} key={item._id}>
              <button className="view-btn hover:bg-orange-400">View Details</button>{" "}
            </Link>

            {/* <button  className="view-btn"
            onClick={() => handleAdditem(item , item.name)}
            >Add to cart</button> */}
            {!itemId ? (
              <button
                className="view-btn hover:bg-green-600"
                onClick={() => handleAdditem(item, item.name)}
              >
                {!itemId ? "Add to Cart" : "Remove"}
              </button>
            ) : (
              <button
                onClick={() => onClickHandler(item._id, item.name)}
                className="p-1 bg-gray-400 shadow-lg mx-[38px]  rounded-lg w-[100px] font-bold hover:text-red-900"
              >
                {!itemId ? "ADD +" : "Remove"}
              </button>
            )}
          </div>
        </div>
        
      
      <Toaster
          // containerStyle={{
          //   top: '15%',
          //   left: '83%',
          // }}
          className=""
        />
    </>
  );
};

export default Card;
