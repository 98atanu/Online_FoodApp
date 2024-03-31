import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../Data/FoodData'

const FoodItems = () => {
  return (
    <div className='flex flex-wrap justify-center lg:justify-start mx-6 my-10 gap-10 '>
        {FoodData.map((item,index)=>(
            <FoodCard 
            key={index}
            id={item.id}
            name={item.name}
            price={item.price}
            img={item.img}
            rating={item.rating}
            desc={item.desc}
            qty={item.qty}
            />
        ))
        }
        
    </div>
  )
}

export default FoodItems