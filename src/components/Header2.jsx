import React from 'react'
import Button from './Button'
import header2 from '../assets/headerimg2.png'

const Header2 = () => {
  return (
    <div className='my-30'>
      <div className="relative" >
        <img src={header2} alt="" className='h-96 lg:h-fit '/>
      </div>
      <div className="absolute top-1290 md:top-730 lg:top-620 left-4 md:left-18 lg:w-[50%]">
        <h1 className='text-[rgba(255,191,61,1)] text-2xl md:text-3xl font-bold uppercase leading-10 md:mb-8'>Experience the best with our Premium Quality Collections—crafted fort hose who seek excellence.</h1>
        <Button title={'Shop Now'}/>
      </div>
    </div>
  )
}

export default Header2
