

import React from 'react'
import { products } from './data'
import { useNavigate } from 'react-router-dom'
const Home1 = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col gap-5'>
      {products.map(product =>  (
        <div>
        <div>{product.dish}</div>
        <div>{product.price}</div>
        <button onClick={() => {navigate(`/recipe?id=${product.id}`)}}>View Details</button>
        </div>
      ))}
      
    </div>
  )
}

export default Home1
