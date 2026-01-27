import React from 'react'
import headerimg from '../assets/headerimg.png'
import Button from './Button'

const Header = () => {
  return (
    <div>
      <div className="absolute top-0 w-full">
        <img src={headerimg} alt="" className='h-75 md:h-full ' />
      </div>
      <div className="absolute top-26 md:top-32 lg:top-60 left-2 md:left-10 lg:left-30 w-full md:w-[40%]">
        <h1 className='uppercase text-xl md:text-2xl lg:text-4xl font-bold text-white mb-3 lg:mb-8 md:leading-8 lg:leading-10'><span className='text-[rgba(255,191,61,1)]'>Unlock 20% off</span><br /> on our Premium Collection for a limited time only</h1>
        <Button title={'Shop Now'}/>
      </div>
    </div>
  )
}

export default Header
