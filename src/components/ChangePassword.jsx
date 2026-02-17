import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const ChangePassword = () => {
  return (
    <div>
        <h1 className="font-bold text-4xl uppercase text-[rgba(51,55,64,1)] text-center my-10">
        Change Password
      </h1>
   <div className="flex items-center justify-center my-10">
       <form className='w-[80%] flex justify-center flex-col gap-10 my-10'>
        <div className="w-full flex flex-col gap-4">
                <input
                  type="password"
                  placeholder="Current Password"
                  className="outline-none border-2 text-[16px] text-[rgba(51,55,64,1)] rounded-[80px] w-full px-4 py-4"
                />
              </div>
              <div className="flex justify-between gap-6 lg:gap-12 flex-col lg:flex-row">
                  <input
                    type="password"
                    placeholder="New Password"
                    className="outline-none border-2 text-[16px] text-[rgba(51,55,64,1)] rounded-[80px] w-full px-4 py-4"
                  />
                  <input
                    type="password"
                    placeholder="Confirm New Password"
                    className="outline-none border-2 text-[16px] text-[rgba(51,55,64,1)] rounded-[80px] w-full px-4 py-4"
                  />
                </div>
               <div className="flex items-center justify-center flex-col gap-2 my-10">
                <Link to={'/forget-password'} className='text-blue-500 hover:underline'>Fotget Password?</Link>
                 <Button title={'Change Password'}/>
               </div>
      </form>
   </div>
    </div>
  )
}

export default ChangePassword
