import React from 'react'
import MostPopularCard from '../components/MostPopularCard.jsx'
import products from '../arrays/products.js'

const MostPopularPage = () => {
  return (
    <div>
      <MostPopularCard products={products}/>
    </div>
  )
}

export default MostPopularPage
