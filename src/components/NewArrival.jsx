import React from 'react'
import { FaStar } from "react-icons/fa";
import imgtitle1 from '../assets/imgtitle1.png'

const NewArrival = ({newArrivalImages}) => {
  return (
    <>
     <div className="flex flex-col lg:flex-row items-center justify-between w-[90%] mx-auto my-6">
        <div className=""></div>
        <h1 className='font-bold text-4xl uppercase text-[rgba(51,55,64,1)]'>New Arrival</h1>
        <a href="" className='font-bold text-[rgba(255,191,61,1)] text-[20px] uppercase'>View All</a>
    </div> 
    <div className="flex items-center justify-center my-6">
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 w-[90%]">
            {newArrivalImages.map((item)=>{
                return(
                    <div className="flex flex-col items-center justify-center w-[95%] my-2">
                <div className="bg-[rgba(47,47,47,0.1)] w-full  h-80 rounded-4xl p-2 flex items-center justify-center">
                    <img src={item.image} alt="" className='' />
                </div>
                <div className="px-2 mt-1 uppercase">
                    <p className='text-[rgba(47,47,47,1)]'>{item.desc}</p>
                    <div className="flex items-center justify-between mt-1">
                    <p className='flex items-center gap-2 font-bold'><span className='text-[rgba(47,47,47,0.7)] line-through decoration-red-500 decoration-2'>{item.oldPrice}</span><span>{item.salePrice}</span></p>
                    <p className='flex items-center gap-1 pr-4'><span className='text-[rgba(255,191,61,1)]'><FaStar /></span><span className='font-bold'>{item.rating}</span><sub className=''>({item.ratingNum})</sub></p>
                    </div>
                </div>
            </div>
                )
            })}
        </div>
    </div>
    </>
  )
}

export default NewArrival
