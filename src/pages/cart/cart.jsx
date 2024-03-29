/* eslint-disable array-callback-return */
import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import { products } from '../../products'
import { CartItem } from './cart-item'
import { useNavigate } from 'react-router-dom'

import './cart.css'
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate()

  return (
    <div className='cart'>
      <div>
        <h1 className='mt-5 text-2xl'>Your Cart Items</h1>
      </div>
      <div className='cart'>
        {products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className='checkout'>
          <p> Subtotal: ₹{totalAmount} </p>
          <button onClick={() => navigate('/')}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout()
              navigate('/checkout')
            }}
          >
            {' '}
            Checkout{' '}
          </button>
        </div>
      ) : (
        <h1 className='mt-3 text-2xl'> Your Shopping Cart is Empty</h1>
      )}
    </div>
  )
}
