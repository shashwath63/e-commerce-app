import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import './navbar.css'
export const Navbar = () => {
  function handleClick() {}
  return (
    <div className='navbar text-white text-2xl gap-4'>
      <Link to='/' className=' text-2xl  ml-5 cursor-pointer' onClick={handleClick}>
        amazon.in
      </Link>
      <Link to='/contact' className='ml-auto'>Contact</Link>
      <Link to='/cart' className='mr-5'>
        <ShoppingCart size={32} />
      </Link>
    </div>
  )
}
