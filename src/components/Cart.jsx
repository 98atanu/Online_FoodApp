import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import ItemCard from './ItemCard';
import { useSelector } from "react-redux";



const Cart = () => {

  const cartItems = useSelector((state)=> state.cart.cart)
  const [activeCart, setActiveCart] = useState(true)

  return (
    <>
    <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white mb-3 transition-all duration-500 z-50 ${activeCart ? "translate-x-0" : "translate-x-full"} `}>
        <div className='flex justify-between items-center my-3'>
            <span className='text-xl font-bold text-gray-900'>My Order</span>
            <IoMdClose onClick={()=> setActiveCart(!activeCart)} className='text-gray-600 border-2 border-gray-600 text-xl font-bold rounded-md hover:text-red-500 hover:border-red-500 cursor-pointer  '/>
        </div>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <div className='absolute bottom-0'>
            <h3 className='font-semibold text-gray-800'>Items : </h3>
            <h3 className='font-semibold text-gray-800'>Total Amount : </h3>
            <hr className='w-[90vw] lg:w-[18vw] my-2'/>
            <button className='bg-green-500 text-white px-3 py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5'>Check Out</button>
        </div>
        
    </div>
    <FaCartShopping onClick={()=> setActiveCart(!activeCart)} className='rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 cursor-pointer hover:scale-105'/>
    </>
  )
}

export default Cart