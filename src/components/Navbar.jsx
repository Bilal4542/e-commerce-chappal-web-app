import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CiSearch, CiShoppingCart, CiUser  } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState()
    const navbarLinks = [
      {
        name:'Home',
        path: '/'
      },
      {
        name:'Products',
        path: '/products'
      },
      {
        name:'Favourite',
        path: '/favourite'
      },
      {
        name:'New Arrival',
        path: '/new-arrival'
      },
      {
        name:'Most Popular',
        path: '/most-popular'
      },
      {
        name:'About Us',
        path: '/about-us'
      },
    ]
  return (
    <>
    <div className='bg-black/10 py-4 flex items-center justify-center'>
      <div className="flex items-center justify-between w-[90%]">
        <div className="logo">
            <p className='text-[rgba(255,191,61,1)] text-[32px] font-bold'>LOGO</p>
        </div>
        <div className="menu lg:flex gap-2 lg:gap-5 hidden">
          {navbarLinks.map((link)=>{
            return(
              <Link to={link.path} key={link.path} className='text-[18px]  font-semibold hover:text-[rgba(255,191,61,1)] transition-all ease-in-out duration-200'>{link.name}</Link>
            )
          })}
        </div>
        <div className="icons lg:flex gap-2 lg:gap-3 hidden">
           <a href="" className='bg-[rgba(255,255,255,0.15)] p-2 rounded-xl'> <CiSearch size={30}/></a>
           <a href="" className='bg-[rgba(255,255,255,0.15)] p-2 rounded-xl'> <CiShoppingCart size={30} /></a>
           <a href="" className='bg-[rgba(255,255,255,0.15)] p-2 rounded-xl'> <CiUser size={30}  /></a>

        </div>
             {/* Mobile Hamburger */}
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="lg:hidden bg-white/15 p-2 rounded-xl"
          >
            {openMenu ? <RxCross2 size={26} /> : <GiHamburgerMenu size={26} />}
          </button>
      </div>
    </div>
    {/* Mobile Menu */}
      {openMenu && (
        <div className="absolute top-18 left-0 w-full bg-gray-300 shadow-md lg:hidden z-50">
          <div className="flex flex-col items-center gap-4 py-6">
            {navbarLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpenMenu(false)}
                className="text-lg font-semibold hover:text-[rgba(255,191,61,1)] transition"
              >
                {link.name}
              </Link>
            ))}
               <div className="icons flex gap-2 lg:gap-5">
           <a href="" className='bg-[rgba(255,255,255,0.15)] p-2 rounded-xl'> <CiSearch size={30}/></a>
           <a href="" className='bg-[rgba(255,255,255,0.15)] p-2 rounded-xl'> <CiShoppingCart size={30} /></a>
           <a href="" className='bg-[rgba(255,255,255,0.15)] p-2 rounded-xl'> <CiUser size={30}  /></a>

        </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
