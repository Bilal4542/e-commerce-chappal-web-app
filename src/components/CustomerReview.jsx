import React from 'react'
import customer1 from '../assets/customerRevImg1.png'
import { FaStar } from "react-icons/fa";
const CustomerReview = ({customerReviews}) => {
  return (
    <div className='bg-[rgba(255,191,61,0.05)] flex items-center justify-center'>
     <div className="">

         <div className="">
        <h1 className='uppercase text-4xl text-[rgba(51,55,64,1)] py-10 font-bold text-center'>Customer Review</h1>
      </div>

      <div className="">
       {customerReviews.map((item)=>{
        return(
            <div className=" flex flex-col gap-7 shadow p-10 rounded-4xl">
           <div className="flex items-center gap-4">
             <div className="">
            <img src={item.customerImage} alt="" />
            </div>
            <div className="">
            <p>{item.customerName}</p>
            <div className=""><FaStar customerRatings={item.customerRatings}/></div>
           </div>
            </div>
            <div className="">
            description
            </div>
       </div>
        )
       })}
      </div>
     </div>
      
     
    </div>
  )
}

export default CustomerReview


