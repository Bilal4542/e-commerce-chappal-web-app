import React, { useEffect } from 'react'
import AboutUs from '../components/AboutUs.jsx'

const AboutUsPage = () => {
  useEffect(()=>{
    window.scrollTo({top:0})
  },[])
  return (
    <div>
      <AboutUs/>
      <div className="flex items-center justify-center flex-col">
        <div className=" flex flex-col items-center justify-center w-[90%] gap-10">
          <h1 className='uppercase font-bold text-4xl'>Our Goal</h1>
          <p className='text-[18px] font-semibold text-center uppercase leading-8'>Lorem ipsum dolor sit amet consectetur. At in penatibus a rhoncus ullamcorper sit cursus pellentesque. Feugiat maecenas mus mollis quis in nullam scelerisque sagittis eleifend. Amet amet convallis in eu mollis. Enim malesuada neque habitant scelerisque ultrices id pharetra dui erat. Nec tempor ut imperdiet varius condimentum tristique urna velit. At eros id nec faucibus facilisi bibendum est sollicitudin. Ipsum in ac ac fermentum at et. Facilisi sit blandit nisi non ipsum. In dolor purus aliquam ac libero. Viverra velit purus condimentum lacus. Tristique dolor quisque eget fames senectus gravida non. Cursus amet tincidunt fames dictumst arcu aliquam commodo auctor. Tincidunt elementum nulla aliquam nunc eros ornare ornare dignissim. Lacus id pellentesque euismod arcu diam tortor lectus in neque.</p>
          <p className='text-[18px] font-semibold text-center uppercase leading-8'>Lorem ipsum dolor sit amet consectetur. At in penatibus a rhoncus ullamcorper sit cursus pellentesque. Feugiat mus mollis quis in nullam scelerisque sagittis eleifend. Amet amet convallis in eu mollis. Enim malesuada neque scelerisque ultrices id pharetra dui erat. Nec tempor ut imperdiet varius condimentum tristique urna velit. At faucibus facilisi bibendum est sollicitudin. Ipsum in ac ac fermentum at et. Facilisi sit blandit nisi non ipsum. In dolor purus aliquam ac libero. Viverra velit purus condimentum lacus.</p>
        </div>
        <div className="flex flex-col items-center justify-center w-[90%] gap-10 my-20">
          <h1 className='uppercase font-bold text-4xl'>Our Goal</h1>
          <p className='text-[18px] font-semibold text-center uppercase leading-8'>Lorem ipsum dolor sit amet consectetur. At in penatibus a rhoncus ullamcorper sit cursus pellentesque. Feugiat maecenas mus mollis quis in nullam scelerisque sagittis eleifend. Amet amet convallis in eu mollis. Enim malesuada neque habitant scelerisque ultrices id pharetra dui erat. Nec tempor ut imperdiet varius condimentum tristique urna velit. At eros id nec faucibus facilisi bibendum est sollicitudin. Ipsum in ac ac fermentum at et. Facilisi sit blandit nisi non ipsum. In dolor purus aliquam ac libero. Viverra velit purus condimentum lacus. Tristique dolor quisque eget fames senectus gravida non. Cursus amet tincidunt fames dictumst arcu aliquam commodo auctor. Tincidunt elementum nulla aliquam nunc eros ornare ornare dignissim. Lacus id pellentesque euismod arcu diam tortor lectus in neque.</p>
          <p className='text-[18px] font-semibold text-center uppercase leading-8'>Lorem ipsum dolor sit amet consectetur. At in penatibus a rhoncus ullamcorper sit cursus pellentesque. Feugiat mus mollis quis in nullam scelerisque sagittis eleifend. Amet amet convallis in eu mollis. Enim malesuada neque scelerisque ultrices id pharetra dui erat. Nec tempor ut imperdiet varius condimentum tristique urna velit. At faucibus facilisi bibendum est sollicitudin. Ipsum in ac ac fermentum at et. Facilisi sit blandit nisi non ipsum. In dolor purus aliquam ac libero. Viverra velit purus condimentum lacus.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUsPage
