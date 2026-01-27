import React from 'react'

const Button = ({title}) => {
  return (
    <button className='bg-[rgba(255,191,61,1)] py-3 px-8 lg:px-18 text-white rounded-full cursor-pointer hover:scale-102 transition-all ease-in-out duration-200'>
      {title}
    </button>
  )
}

export default Button
