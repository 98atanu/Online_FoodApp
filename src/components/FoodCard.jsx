import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux_toolkit/slices/CartSlice";

const FoodCard = ({ id, name, img, price, rating, desc, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div className="font-bold w-[250px] bg-gradient-to-tr from-[#0D404A] to-slate-300 p-5 flex flex-col rounded-lg gap-2 ">
      <img
        src={img}
        alt=""
        className="w-auto h-[130px] hover:scale-110 transition-all duration-500 ease-in-out rounded-2xl "
      />
      <div className="text-sm flex justify-between">
        <h3>{name}</h3>
        <span className="text-green-900">₹ {price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between">
        <span className="flex justify-center items-center ">
          <FaStar className="text-yellow-400 mr-1" /> {rating}
        </span>
        <button
          onClick={() => {
            dispatch(addToCart({ id, name, price, rating, img, qty: 1 }));
            handleToast(name);
          }}
          className="p-1 text-white bg-green-700 hover:bg-green-900 rounded-lg text-sm"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
