import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CiSearch, CiShoppingCart, CiUser  } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState()
    const [isActive, setIsActive] = useState()
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
    const icons = [
      {
        icon:<CiSearch size={30}/>
      },
      {
        icon:<CiShoppingCart size={30} />
      },
      {
        icon:<CiUser size={30}  />
      }
    ]
  return (
    <>
    <div className='bg-black/20 py-4 flex items-center justify-center relative z-10'>
      <div className="flex items-center justify-between w-[90%]">
        <div className="logo">
            <p className='text-[rgba(255,191,61,1)] text-[32px] font-bold'>LOGO</p>
        </div>
        <div className="menu lg:flex gap-2 lg:gap-5 hidden text-white">
          {navbarLinks.map((link)=>{
            return(
              <NavLink to={link.path} key={link.path} className={({ isActive }) =>`uppercase text-lg font-semibold transition ${isActive ? "text-[rgba(255,191,61,1)]" : "hover:text-[rgba(255,191,61,1)]"}`}>{link.name}</NavLink>
            )
          })}
        </div>
        <div className="icons lg:flex gap-2 lg:gap-3 hidden">
          {icons.map((icon)=>{
            return(
              <a href="" className='bg-[rgba(255,255,255,0.15)] p-2 rounded-xl text-white'>{icon.icon}</a>
            )
          })}
        </div>
             {/* Mobile Hamburger */}
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="lg:hidden bg-white/15 p-2 rounded-xl z-50"
          >
            {openMenu ? <RxCross2 size={26} /> : <GiHamburgerMenu size={26} />}
          </button>
      </div>
    </div>
    {/* Mobile Menu */}
      {openMenu && (
        <div className="absolute top-18 left-0 w-full bg-gray-300 shadow-md lg:hidden z-10">
          <div className="flex flex-col items-center gap-4 py-6">
            {navbarLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpenMenu(false)}
                className="uppercase text-lg font-semibold hover:text-[rgba(255,191,61,1)] transition"
              >
                {link.name}
              </Link>
            ))}
               <div className="icons flex gap-2 lg:gap-5">
                {icons.map((icon)=>{
                  return(
                     <a href="" className='bg-[rgba(255,255,255,0.15)] p-2 rounded-xl'>{icon.icon}</a>
                  )
                })}
        </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
