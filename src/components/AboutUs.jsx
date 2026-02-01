import React from "react";
import Button from "./Button";
import aboutus from '../assets/aboutus.jpeg'
import { Link, useLocation } from "react-router-dom";

const AboutUs = () => {
  const location = useLocation()
  const isAboutPage = location.pathname === '/about-us'
  return (
    <div className="flex items-center justify-center my-32">
      <div className="w-[90%] flex items-center justify-center flex-col md:flex-row gap-10">
        <div className="w-full md:w-[50%]">
        <img src={aboutus} alt="" className="w-[95%] md:h-150 rounded-4xl" />
      </div>
      <div className="w-full md:w-[50%] flex flex-col gap-6">
        <h1 className="font-bold text-4xl uppercase">About Us</h1>
        <h3 className="font-semibold text-[22px] uppercase">We are Peshawari Chappal & Peshawari Chaddar Shop since 1998</h3>
        <p className="text-[16px] uppercase">
          Lorem ipsum dolor sit amet consectetur. Amet ultricies vitae mattis
          at. Malesuada viverra orci ut tellus duis etiam mauris leo volutpat.
          Dictumst dictumst laoreet sit viverra et. Et condimentum vivamus
          aliquet quis penatibus mauris pretium mauris.
        </p>
        <p className="text-[16px] uppercase">
          Lorem ipsum dolor sit amet consectetur. Amet ultricies vitae mattis
          at. Malesuada viverra orci ut tellus duis etiam mauris leo volutpat.
        </p>
       {!isAboutPage && (
        <Link to={'/about-us'} className="w-fit"> <Button title={'More About Us'} /></Link>
       )
       }
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
