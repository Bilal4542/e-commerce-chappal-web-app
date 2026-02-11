import React from 'react'
import user from '../assets/profile.png'
import Button from '../components/Button.jsx'

const EditProfile = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
              
              <h1 className='font-bold text-4xl uppercase text-[rgba(51,55,64,1)] text-center my-10'>Edit Profile</h1>
              <div className=" flex flex-col items-center justify-center gap-5 my-10">
                          <img src={user} className='w-full rounded-full' alt="" />
                        </div>
                          <form className='flex flex-col gap-4 w-105 my-10'>
                            <input className='p-3 rounded-full border ' type="text" placeholder='Name' />
                            <input className='p-3 rounded-full border' type="email" placeholder='Email' />
                            <Button title="Update Profile" />
                          </form>
          </div>
  )
}

export default EditProfile
