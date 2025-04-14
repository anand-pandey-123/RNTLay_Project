import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Card from './Card';
import Header from './Header';

const Myitems = () => {
    const [items, setItems] = useState();
    const token = useSelector((store) => store.user.user);
    console.log(token && token);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/v1/product/${token && token}`, 
                {
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded',
                    },
                });
                console.log(response.data);
                setItems(response.data.data);
            } catch (error) {
                console.error("Error fetching items:", error);
            }
        };
        fetchItems();
    }, []);

    console.log(items);

    return (
        <div>
            <Header></Header>
            <h1 className='text-center text-2xl font-bold mt-10'>My Items</h1>
            <div className='flex flex-wrap w-[90%] justify-center m-auto mt-[5%]'>
                {items && items.length > 0 ? (
                    items.map((item, index) => (
                        <Card key={index} item={item}></Card>
                    ))
                ) : (
                    <p className="text-center text-lg font-semibold text-gray-500 mt-10">
                        You didn't rent any items.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Myitems;