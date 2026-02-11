import React from 'react'
import { Link } from 'react-router-dom'
import user from '../assets/profile.png'

const Profile = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-between w-[90%] mx-auto my-10">
              <div className=""></div>
              <h1 className='font-bold text-4xl uppercase text-[rgba(51,55,64,1)]'>My Profile</h1>
              <Link to={'/edit-profile'} className='font-bold text-[rgba(255,191,61,1)] text-[20px] uppercase'>Edit</Link>
          </div>
          <div className=" flex flex-col items-center justify-center gap-5 my-10">
            <img src={user} className='w-[10%] rounded-full' alt="" />
            <h1 className='uppercase font-bold text-3xl text-[rgba(51,55,64,1)]'>Masooma</h1>
            <p className='font-bold text-xl text-[rgba(51,55,64,1)]'>masooma***@gmail.com</p>
          </div>
    </div>
  )
}

export default Profile
