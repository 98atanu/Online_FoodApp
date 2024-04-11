import React, { useEffect, useState } from 'react'
import { HashLoader } from "react-spinners"
const Success = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [])
  
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      {loading ? <HashLoader color="#36d7b7" /> : (
      <div className=' flex flex-col items-center text-[#68f1d1]'>
      <h2 className='text-5xl font-semibold mb-4 text-center '>Order Successful!</h2>
      <p className='text-lg'>Your order has been successfully placed.</p>
      </div>
      )}
      
    </div>
  )
}

export default Success