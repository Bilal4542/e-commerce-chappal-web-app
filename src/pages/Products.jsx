import React from 'react'
import ProductsCard from '../components/ProductsCard'
import products from '../arrays/products'

const Products = () => {
  return (
    <div>
     <ProductsCard products={products}/>
    </div>
  )
}

export default Products
