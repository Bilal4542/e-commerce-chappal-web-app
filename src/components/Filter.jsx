import React, { useEffect } from 'react'

const Filter = ({onClose}) => {
    const brands =['Brand 01', 'Brand 02', 'Brand 03', 'Brand 04']
    const sizes = ['S','M','L','XL','XXL']
      useEffect(() => {
    // Lock scroll when modal opens
    document.body.style.overflow = "hidden";

    return () => {
      // Restore scroll when modal closes
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className='bg-black/50 w-full h-screen flex items-center justify-center fixed inset-0 z-50' >
      <div className="bg-white rounded-[40px] p-5 relative">
        <div className="heading my-3">
            <h1 className='font-bold uppercase text-2xl '>Filter</h1>
        </div>
        <div className="price-range">
            <h3 className=' font-bold text-[16px] my-3'>Price Range</h3>
            <input type="range" className="w-full my-3 text-yellow-400 bg-[rgba(255,191,61,1)]" />
        </div>
        <div className="brand flex flex-col gap-3">
            <h3 className='text-[16px] font-bold'>Brand</h3>
            <div className="btn flex gap-4">
                {brands.map((item)=>{
                    return(
                        <button className='py-3 px-6 rounded-full bg-[rgba(255,191,61,1)] uppercase cursor-pointer'>{item}</button>
                    )
                })}
            </div>
        </div>
        <div className="size my-3">
            <h3 className='text-[16px] font-bold mt-2'>Size</h3>
            <div className="flex gap-4">
                {sizes.map((item)=>{
                    return(
                        <button className='py-3 px-6 rounded-full bg-[rgba(255,191,61,1)] uppercase my-3 cursor-pointer'>{item}</button>
                    )
                })}
            </div>
        </div>
        <div className="color">
            <h3 className="font-bold text-[16px] my-2">Color</h3>
        <div className="flex gap-5 p-2 mb-5 items-center">
            <div className="w-10 h-10 rounded-full border-2 border-black bg-black"></div>
            <div className="w-10 h-10 rounded-full border border-gray-300 bg-white"></div>
            <div className="w-10 h-10 rounded-full border border-gray-300 bg-[#F5B301]"></div>
            <div className="w-10 h-10 rounded-full border border-gray-300 bg-red-500"></div>
            <div className="w-10 h-10 rounded-full border border-gray-300 bg-blue-500"></div>
        </div>
        </div>
         
        <div className="btn flex items-center justify-center gap-4 ">
            <button onClick={onClose} className='uppercase py-5 px-10 text-[16px] border rounded-full border-gray-400 cursor-pointer my-2'>Cancel</button>
            <button className='uppercase py-5 px-10 text-[16px]  rounded-full bg-[rgba(255,191,61,1)] cursor-pointer my-2'>Search Filter</button>
        </div>
      </div>
    </div>
  )
}

export default Filter
