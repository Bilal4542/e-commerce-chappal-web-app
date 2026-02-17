import React from 'react'
import Button from './Button'

const NewPassword = () => {
  return (
    <div>
        <h1 className="font-bold text-4xl uppercase text-[rgba(51,55,64,1)] text-center my-10">
        New Password
      </h1>
                <div className="flex items-center justify-center flex-col gap-20 my-20">
                       <div className="w-[70%] flex justify-between gap-6 lg:gap-12 flex-col lg:flex-row">
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
                <Button title={'Change Password'}/>
                </div>
    </div>
  )
}

export default NewPassword
