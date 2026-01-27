import React from 'react'
import headerimg from '../assets/headerimg.png'
import Button from './Button'

const Header = () => {
  return (
    <div>
      <div className="absolute top-0">
        <img src={headerimg} alt="" />
      </div>
      <div className="absolute top-60 left-30 w-[40%]">
        <h1 className='uppercase text-4xl font-bold text-white mb-8 leading-10'><span className='text-[rgba(255,191,61,1)]'>Unlock 20% off</span><br /> on our Premium Collection for a limited time only</h1>
        <button>{<Button title={'Shop Now'}/>}</button>
      </div>
    </div>
  )
}

export default Header
