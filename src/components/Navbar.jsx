import React from 'react'
import {useDispatch} from "react-redux"
import { setSearch } from './redux_toolkit/slices/SearchSlice';

const Navbar = () => {

  const dispatch = useDispatch();
  return (
    <nav className='flex flex-col lg:flex-row justify-between py-3 mx-6 mb-8'>
        <div className='flex flex-col items-center'>
            <h3 className='text-xl font-bold text-gray-200 mb-2'>{new Date().toUTCString().slice(0,16)}</h3>
            <h1 className='text-2xl font-bold  px-8 text-gray-200 bg-gradient-to-l from-green-900 to-green-700 rounded-lg mb-2'>Foodizz</h1>
        </div>
        <div>
            <input 
            onChange={(e)=>dispatch(setSearch(e.target.value))}
            type='search' 
            name='search' 
            id='' 
            placeholder='Search here' 
            autoComplete='off' 
            className='p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw] bg-gradient-to-r from-gray-100 to-gray-400'/>
        </div>
    </nav>
  )
}

export default Navbar