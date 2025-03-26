import React from 'react'
import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import iconCart from '../assets/images/iconCart.png'
import { useSelector } from 'react-redux'

export const Header = () => {
  const [totalQuantity ,setTotalQuantity] = useState(0)
  const carts =useSelector(store =>store.cart.items)
  
  useEffect(()=>{
    let total =0;
    carts.forEach(item => total += item.quantity)
    setTotalQuantity(total)
  },[carts])

  return (
    <header className='flex justify-between items-center mb-5'>
        <Link to="/" className='text-xl font-semibold'>Home</Link>
        <div className='w-10 h-10 rounded-full bg-gray-100 flex justify-center items-center relative'>
            <img src={iconCart} alt=""  className='w-6'/>
            <span className='absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center item-center'>{totalQuantity}</span>
        </div>
    </header>
  )
}
