import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import ItemCard from './ItemCard';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"


const Cart = () => {

  const [activeCart, setActiveCart] = useState(false)

  const cartItems = useSelector((state)=> state.cart.cart)
  const totalItems = cartItems.reduce((totalQty,item)=> totalQty + item.qty, 0)
  const totalPrice = cartItems.reduce((total,item)=> total +  item.price * item.qty, 0)

  const navigate = useNavigate()

  return (
    <>
    <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-gray-200 mb-3 rounded-l-lg transition-all duration-500 z-50 ${activeCart ? "translate-x-0" : "translate-x-full"} `}>
        <div className='flex justify-between items-center my-3'>
            <span className='text-xl font-bold text-gray-900'>My Order</span>
            <IoMdClose onClick={()=> setActiveCart(!activeCart)} className='text-gray-600 border-2 border-gray-600 text-xl font-bold rounded-md hover:text-red-500 hover:border-red-500 cursor-pointer  '/>
        </div>
        {cartItems.length > 0 ? cartItems.map((item,index)=>{
          return (<ItemCard 
            key={index}
            id={item.id}
            name={item.name}
            price={item.price}
            img={item.img}
            qty={item.qty}/>)
        }) : <h2 className=' text-center text-xl font-bold text-gray-400'>Your cart is empty</h2>}
        
        <div className='absolute bottom-0'>
            <h3 className='font-semibold text-gray-800'>Items : {totalItems}</h3>
            <h3 className='font-semibold text-gray-800'>Total Amount : {totalPrice}</h3>
            <hr className='w-[90vw] lg:w-[18vw] my-2'/>
            <button
            onClick={()=> navigate("/success")}
             className='bg-green-700 text-white px-3 py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5'>Check Out</button>
        </div>
        
    </div>
    <FaCartShopping onClick={()=> setActiveCart(!activeCart)}
     className={`rounded-full bg-gray-200 shadow-md text-5xl p-3 fixed bottom-4 right-4 cursor-pointer hover:scale-105 ${totalItems > 0 && "animate-bounce delay-500 "}`}/>
    </>
  )
}

export default Cart