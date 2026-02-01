import React from 'react'
import Card from './Card'

const FavouriteCard = ({products}) => {
  return (
    <>
        <h1 className=" text-center mt-20 font-bold text-4xl uppercase text-[rgba(51,55,64,1)]">
         Favourite
        </h1>
    <div className='flex items-center justify-center my-10'>
      <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {products.map((item)=>{
            return(
                <div className="">
                    <Card image={item.image}
                  desc={item.desc}
                  oldPrice={item.oldPrice}
                  salePrice={item.salePrice}
                  rating={item.rating}
                  ratingNum={item.ratingNum}/>
                </div>
            )
        })}
      </div>
    </div>
    </>
  )
}

export default FavouriteCard
