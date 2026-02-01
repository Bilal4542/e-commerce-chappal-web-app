import React from 'react'
import NewArrivalCard from '../components/NewArrivalCard'
import products from '../arrays/products'

const NewArrivalPage = () => {
  return (
    <div>
      <NewArrivalCard products={products}/>
    </div>
  )
}

export default NewArrivalPage
