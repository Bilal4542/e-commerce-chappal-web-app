import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'
import Button from './Button'

const Contact = () => {
  return (
    <>
    <h1 className='font-bold uppercase text-center text-3xl md:text-[40px] text-[rgba(51,55,64,1)] my-10'>Get in Touch with Us</h1>
    <div className='flex items-center justify-center  mt-10 mb-28'>
      <div className="flex items-center justify-between flex-col md:flex-row gap-6  w-[90%]">
            <div className="flex items-center gap-8 md:w-[50%]">
                <FaFacebook  className='text-blue-600 text-3xl md:text-5xl'/>
                <FaInstagram  className='text-pink-500 text-3xl md:text-5xl'/>
                <FaTiktok  className='text-red-400 text-3xl md:text-5xl'/>
                <FaYoutube  className='text-red-600 text-3xl md:text-5xl'/>
            </div>
                <form className='flex items-center gap-2 w-full md:w-[60%]'>
                    <input type="email" className='border outline-none p-3 md:p-4 rounded-full w-full ' placeholder='Enter your email address' />
                  <Button title={'Submit'} />
                </form>
      </div>
    </div>
    </>
  )
}

export default Contact
