import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../Data/FoodData";
import toast, { Toaster } from "react-hot-toast";

const FoodItems = () => {

  const handleToast = (name) =>{
    toast.success(`Added ${name}`);
  }


  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap justify-center lg:justify-start mx-6 my-10 gap-10 ">
        {FoodData.map((item, index) => (
          <FoodCard
            key={index}
            id={item.id}
            name={item.name}
            price={item.price}
            img={item.img}
            rating={item.rating}
            desc={item.desc}
            qty={item.qty}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  );
};

export default FoodItems;
