import React from 'react'

const Checkout = () => {
  return (
    <>
     <h1 className="font-bold text-4xl text-center uppercase text-[rgba(51,55,64,1)] my-10">
        Checkout
      </h1>
      <div className="flex items-center justify-center">
        <div className="w-[90%] flex  justify-center flex-col">
            <h2 className="font-bold mb-8 text-[24px] text-[rgba(51,55,64,1)]">
              Address
            </h2>
            <div className="w-[70%] border-r-2 pr-20">
                <form className='flex flex-col justify-center gap-8'>
                   <div className="w-full flex flex-col gap-4">
                     <label htmlFor="email" className='text-[14px] font-bold text-[rgba(51,55,64,1)] ml-2'>Email</label>
                    <input type="email" id="email" placeholder='Enter Your Email Address' className='outline-none border-2 text-[12px] text-[rgba(51,55,64,1)] rounded-[80px] w-full px-2 py-4' />
                   </div>
                   <div className="flex flex-col gap-8">
                    <label htmlFor="name" className='text-[14px] font-bold text-[rgba(51,55,64,1)] ml-2'>Address</label>
                    <div className="flex justify-between gap-12">
                    <input type="text" id="name" placeholder='Full name' className='outline-none border-2 text-[12px] text-[rgba(51,55,64,1)] rounded-[80px] w-full  px-2 py-4'/>
                    <input type="number" id="" placeholder='Phone Number' className='outline-none border-2 text-[12px] text-[rgba(51,55,64,1)] rounded-[80px] w-full px-2 py-4'/>
                    </div>
                    <div className="flex justify-between gap-12">
                    <input type="text" placeholder='Full name' className='outline-none border-2 text-[12px] text-[rgba(51,55,64,1)] rounded-[80px] w-full  px-2 py-4'/>
                    <input type="text" list='city'  placeholder='Phone Number' className='outline-none border-2 text-[12px] text-[rgba(51,55,64,1)] rounded-[80px] w-full px-2 py-4'/>
                    </div>
                    <div className="flex justify-between gap-12">
                    <input type="text" placeholder='Full name' className='outline-none border-2 text-[12px] text-[rgba(51,55,64,1)] rounded-[80px] w-full  px-2 py-4'/>
                    <input type="text" list='city'  placeholder='Phone Number' className='outline-none border-2 text-[12px] text-[rgba(51,55,64,1)] rounded-[80px] w-full px-2 py-4'/>
                    </div>
                   </div>
                    <h2 className="font-bold text-[24px] text-[rgba(51,55,64,1)]">
              Payment
            </h2>
             <div className="w-full flex flex-col gap-4">
                     <label htmlFor="email" className='text-[14px] font-bold text-[rgba(51,55,64,1)] ml-2'>Payment Method</label>
                    <input type="email" id="email" placeholder='Enter Your Email Address' className='outline-none border-2 text-[12px] text-[rgba(51,55,64,1)] rounded-[80px] w-full px-2 py-4' />
                   </div>
                </form>
            </div>
            <div className="w-[30%]"></div>
        </div>
      </div>
    </>
  )
}

export default Checkout
