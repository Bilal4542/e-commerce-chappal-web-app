import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

const MostPopular = ({products}) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between w-[90%] mx-auto my-10">
              <div className=""></div>
              <h1 className='font-bold text-4xl uppercase text-[rgba(51,55,64,1)]'>Most Popular</h1>
              <Link to={'/most-popular'} className='font-bold text-[rgba(255,191,61,1)] text-[20px] uppercase'>view All</Link>
          </div> 
        <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[90%]">
                
          {products.slice(0,4).map((item)=>{
            return(
               <Link to={`/product/${item.id}`}>
                 <Card image={item.image} desc={item.desc} oldPrice={item.oldPrice} salePrice={item.salePrice} rating={item.rating} ratingNum={item.ratingNum}/>
               </Link>
            )
          })}
            </div>
        </div>
    </>
  )
}

export default MostPopular
