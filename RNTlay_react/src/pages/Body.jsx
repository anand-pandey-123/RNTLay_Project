import React, { useEffect, useState } from 'react';
import items from '../utils';
import Card from './Card';
import "../App.css";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../utils/itemSlice';

const Body = ({ category }) => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store?.items?.items);
  console.log(items)
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        const response = await axios.get('http://localhost:4000/api/v1/product', {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const result = await response.data;
        dispatch(addItem(result.data));
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };
    fetchData();
  }, [dispatch]);

  const filteredData = data && data.filter((item) => {
    if (category === "all") {
      return item;
    } else {
      return item.category === category;
    }
  });

  return (
    <>
      <div className=" flex flex-wrap w-[90%] justify-center m-auto mt-[2%]">
        {loading ? ( // Show loader if loading is true
          <div className="flex items-center justify-center w-full h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
          </div>
        ) : (
          (filteredData?.length > 0 ? filteredData : items)?.map((item, index) => (
            <Card key={index} item={item} />
          ))
        )}
      </div>
    </>
  );
};

export default Body;