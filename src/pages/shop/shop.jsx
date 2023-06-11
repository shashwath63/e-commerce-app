import React from 'react'
import { products } from '../../products'
import { Product } from './product'
import './shop.css'

export const Shop = () => {
  return (
    <div className='shop'>
      <h1 className='text-center text-3xl text-gray-900 mt-6'>Products</h1>
      <div className='products'>
        {products.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  )
}
