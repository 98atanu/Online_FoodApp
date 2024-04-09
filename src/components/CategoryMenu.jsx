import React, { useEffect, useState } from 'react'
import FoodData from '../Data/FoodData'

const CategoryMenu = () => {

  const [categories, setCategories] = useState([])

  const listUniqueCategories = ()=> {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category))
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories)
  };
  useEffect(() => {
    listUniqueCategories();
  }, [])
  

  return (
    <div className='mx-6'>
        <h3 className='text-xl font-semibold'>Find the best food</h3>
        <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth md:overflow-x-hidden'>
            {categories.map((category,index)=>{
              return (                
                <button key={index} className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>{category}</button>
              )
            })}
        </div>
    </div>
  )
}

export default CategoryMenu