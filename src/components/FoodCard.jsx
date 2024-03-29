import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from './redux_toolkit/slices/CartSlice';


const FoodCard = ({item}) => {

  const dispatch = useDispatch();

  const handleAdd = (item) =>{
    dispatch(addToCart(item));
  }
  return (
    <div className='font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2'>
        <img src={item.img} alt="" className='w-auto h-[130px] hover:scale-110 transition-all duration-500 ease-in-out '/>
        <div className='text-sm flex justify-between'>
            <h3>{item.name}</h3>
            <span className='text-green-500'>₹ {item.price}</span>
        </div>
        <p className='text-sm font-normal'>{item.desc.slice(0,50)}...</p>
        <div className='flex justify-between'>
            <span className='flex justify-center items-center '><FaStar className='text-yellow-400 mr-1'/> {item.rating}</span>
            <button onClick={()=> handleAdd(item)} className='p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm'>Add To Cart</button>
        </div>
    </div>
  )
}

export default FoodCard