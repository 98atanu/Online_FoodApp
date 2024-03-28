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
            desc={item.desc}
            rating={item.rating}
            img={item.img}
            
            />
        ))
        }
        
    </div>
  )
}

export default FoodItems