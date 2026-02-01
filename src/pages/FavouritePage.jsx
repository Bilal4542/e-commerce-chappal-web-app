import React from 'react'
import FavouriteCard from '../components/FavouriteCard'
import products from '../arrays/products'

const FavouritePage = () => {
  return (
    <div>
      <FavouriteCard products={products}/>
    </div>
  )
}

export default FavouritePage
