import React  from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { decrementQty, incrementQty, removeFromCart } from "./redux_toolkit/slices/CartSlice";

const ItemCard = ({id,name,price,img,qty}) => {
  const dispatch = useDispatch();


  return (
    <div className="flex gap-2 shadow-lg rounded-lg p-2 mb-3">
      <MdDelete onClick={()=> dispatch(removeFromCart({id}))} className="absolute right-7 text-gray-600 cursor-pointer hover:text-red-600"/>
      <img
        src={img}
        alt=""
        className="w-[50px] h-[50px]"
      />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold">₹ {price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7 ">
            <AiOutlineMinus onClick={()=>qty > 1 ? dispatch(decrementQty({id})) : dispatch(removeFromCart({id}))} className="border-2 border-gray-600 text-gray-600 hover:bg-red-500 hover:text-white hover:border-none rounded-md text-xl p-1 transition-all ease-linear cursor cursor-pointer" />
            <span>{qty}</span>
            <AiOutlinePlus onClick={()=> dispatch(incrementQty({id}))} className="border-2 border-gray-600 text-gray-600 hover:bg-green-500 hover:text-white hover:border-none rounded-md text-xl p-1 transition-all ease-linear cursor cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
