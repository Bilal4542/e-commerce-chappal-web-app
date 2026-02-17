import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Verification = () => {
  return (
     <div>
      <h1 className="font-bold text-4xl uppercase text-[rgba(51,55,64,1)] text-center my-10">
        Verification
      </h1>
      <div className="flex items-center justify-center flex-col">
         <div className="w-[70%] flex justify-center items-center flex-col gap-40 my-20">
                <input
                  type="text"
                  placeholder="Code"
                  className="outline-none border-2 text-[16px] text-[rgba(51,55,64,1)] rounded-[80px] w-full px-4 py-4"
                />
                <Link to={'/new-password'}><Button title={'Verify'}/></Link>
              </div>
      </div>
    </div>
  )
}

export default Verification
