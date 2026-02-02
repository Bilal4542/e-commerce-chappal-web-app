import React, { useEffect } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

const MostPopularCard = ({products}) => {
    useEffect(()=>{
        window.scrollTo({top:0})
    },[])
  return (
    <>
        <h1 className=" text-center mt-20 font-bold text-4xl uppercase text-[rgba(51,55,64,1)]">
         Most Popular
        </h1>
    <div className='flex items-center justify-center my-10'>
        <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
     {products.map((item)=>{
        return(
            <Link to={`/product/${item.id}`}>
                <Card image={item.image}
                  desc={item.desc}
                  oldPrice={item.oldPrice}
                  salePrice={item.salePrice}
                  rating={item.rating}
                  ratingNum={item.ratingNum}
                  />
            </Link>
        )
     })}
    </div>
    </div>
    </>
  )
}

export default MostPopularCard
