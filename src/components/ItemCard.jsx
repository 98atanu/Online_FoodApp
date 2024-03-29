import React  from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const ItemCard = () => {

  
  
  return (
    <div className="flex gap-2 shadow-lg rounded-lg p-2 mb-3">
      <MdDelete className="absolute right-7 text-gray-600 cursor-pointer hover:text-red-600"/>
      <img
        src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
        alt=""
        className="w-[50px] h-[50px]"
      />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">Onion Pizza</h2>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold">₹ 120</span>
          <div className="flex justify-center items-center gap-2 absolute right-7 ">
            <AiOutlinePlus className="border-2 border-gray-600 text-gray-600 hover:bg-green-500 hover:text-white hover:border-none rounded-md text-xl p-1 transition-all ease-linear cursor cursor-pointer" />
            <span>1</span>
            <AiOutlineMinus className="border-2 border-gray-600 text-gray-600 hover:bg-red-500 hover:text-white hover:border-none rounded-md text-xl p-1 transition-all ease-linear cursor cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
