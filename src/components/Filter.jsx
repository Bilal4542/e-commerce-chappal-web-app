import React from 'react'

const Filter = () => {
    const brands =['Brand 01', 'Brand 02', 'Brand 03', 'Brand 04']
    const sizes = ['S','M','L','XL','XXL']
    const colors = ['black','white','yellow','red','blue']
  return (
    <div className='bg-black/5 w-full h-screen inset-0 flex items-center justify-center'>
      <div className="w-[600px] bg-white rounded-[40px] p-5">
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
                        <button className='py-3 px-6 rounded-full bg-[rgba(255,191,61,1)] uppercase'>{item}</button>
                    )
                })}
            </div>
        </div>
        <div className="size my-3">
            <h3 className='text-[16px] font-bold mt-2'>Size</h3>
            <div className="flex gap-4">
                {sizes.map((item)=>{
                    return(
                        <button className='py-3 px-6 rounded-full bg-[rgba(255,191,61,1)] uppercase my-3'>{item}</button>
                    )
                })}
            </div>
        </div>
        <div className="color">
            <h3  className='text-[16px] font-bold mt-2'>Color</h3>
            <div className="flex gap-2 items-center">
                {colors.map((item)=>{
                    return(
                        <div className="">{item}</div>
                    )
                })}
            </div>
        </div>
        <div className="btn flex items-center justify-center gap-4 ">
            <button className='uppercase py-5 px-10 text-[16px] border rounded-full border-gray-400'>Cancel</button>
            <button className='uppercase py-5 px-10 text-[16px]  rounded-full bg-[rgba(255,191,61,1)]'>Search Filter</button>
        </div>
      </div>
    </div>
  )
}

export default Filter
