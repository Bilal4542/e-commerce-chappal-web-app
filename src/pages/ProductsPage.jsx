import React from 'react'
import ProductsCard from '../components/ProductsCard'
import products from '../arrays/products'

const ProductsPage = () => {
  return (
    <div>
     <ProductsCard products={products}/>
    </div>
  )
}

export default ProductsPage
