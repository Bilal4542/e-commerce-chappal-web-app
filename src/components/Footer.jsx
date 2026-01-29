import React from 'react'

const Footer = () => {
  return (
    <div className='flex items-center justify-center bg-[rgba(255,191,61,0.1)] py-10'>
      <div className="flex justify-between gap-4 flex-wrap w-[90%]">
        <div className="">
            <p className='font-bold text-[40px] text-[rgba(51,55,64,1)] uppercase'>Logo</p>
        </div>
        <div className="flex flex-col gap-2">
            <h1 className='text-[30px] uppercase font-bold mb-3 text-[rgba(51,55,64,1)]'>Shop</h1>
            <a href="">Home</a>
            <a href="">Products</a>
            <a href="">Favorite</a>
            <a href="">New Arrival</a>
            <a href="">Most Popular</a>
            <a href="">Orders</a>
        </div>
        <div className="flex flex-col gap-2">
            <h1 className='text-[30px] uppercase font-bold mb-3 text-[rgba(51,55,64,1)]'>Customer Support</h1>
            <a href="">Refund & Exchange Policy</a>
            <a href="">About Us</a>
            <a href="">FAQs</a>
            <a href="">Contact Us</a>
        </div>
        <div className="flex flex-col gap-2">
            <h1 className='text-[30px] uppercase font-bold mb-3 text-[rgba(51,55,64,1)]'>Store Location</h1>
            <p>Lorem Ipsum dolor amet Uni Town, Peshawar</p>
            <p>(+92) 987 *** **90</p>
            <p>(+92) 987 *** **90</p>
            <p>Anees********@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
