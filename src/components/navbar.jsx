import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import './navbar.css'
export const Navbar = () => {
  return (
    <div className='navbar text-white text-2xl gap-4'>
      <Link to='/' className=' text-2xl  ml-5 cursor-pointer'>
        amazon.in
      </Link>
      <Link to='/cart' className='mr-5 ml-auto'>
        <ShoppingCart size={32} />
      </Link>
    </div>
  )
}
