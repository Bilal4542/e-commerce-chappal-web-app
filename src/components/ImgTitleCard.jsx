import React from 'react'
const ImgTitleCard = ({imgTitles}) => {
  return (
    <>
        <div className="mt-80 lg:mt-162 flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] gap-x-6">
                {imgTitles.map((item)=>{
                    return(
                        <div className="mb-8 flex items-center justify-center w-full flex-col p-4  bg-[rgba(47,47,47,1)] rounded-[40px]">
                    <img src={item.image} alt="" className='w-[90%] h-92' />
                    <h1 className='uppercase text-white text-2xl font-bold'>{item.title}</h1>
                </div>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default ImgTitleCard
