import React from 'react'
import { IoRadioButtonOn } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Setting = () => {
  return (
    <div className='flex justify-center flex-col'>
       
        <h1 className="font-bold text-4xl uppercase text-[rgba(51,55,64,1)] text-center my-10">
        Setting
      </h1>
      <div className="px-20">
        <h3 className='text-[rgba(51,55,64,1)] font-bold text-2xl'>My Address</h3>
        <div className="bg-[rgba(240,240,240,1)] rounded-4xl  p-8 w-full lg:w-[40%] mt-10">
            <div className="flex gap-2 py-4">
                <IoRadioButtonOn size={30} className='text-[rgba(255,191,61,1)]'/>
                <div className="flex flex-col gap-1">
                    <h4 className='text-[14px] font-bold'>Masooma</h4>
                    <p className='text-[12px]'>(+92)  ******90</p>
                    <p className='text-[12px]'>Lorem ipsum dolor sit amet cosectetur.</p>
                </div>
            </div>
            <div className="flex gap-2 py-4">
                <IoRadioButtonOn size={30} className='text-[rgba(255,191,61,1)]'/>
                <div className="flex flex-col gap-1">
                    <h4 className='text-[14px] font-bold'>Masooma</h4>
                    <p className='text-[12px]'>(+92)  ******90</p>
                    <p className='text-[12px]'>Lorem ipsum dolor sit amet cosectetur.</p>
                </div>
            </div>
            <div className="flex gap-2 py-4">
                <IoRadioButtonOn size={30} className='text-[rgba(255,191,61,1)]'/>
                <div className="flex flex-col gap-1">
                    <h4 className='text-[14px] font-bold'>Masooma</h4>
                    <p className='text-[12px]'>(+92)  ******90</p>
                    <p className='text-[12px]'>Lorem ipsum dolor sit amet cosectetur.</p>
                </div>
            </div>
        </div>
        <Link to={'/another-address'} className='flex items-center gap-2 text-[rgba(255,191,61,1)] text-[12px] mt-2 mb-10'><span><FaPlus /></span><span>Add another address</span></Link>
      </div>
       </div>
  )
}

export default Setting
