import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const AnotherAddress = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl uppercase text-[rgba(51,55,64,1)] text-center my-10">
        Setting
      </h1>
      <div className="flex  flex-col justify-center items-center">
       <div className="w-[90%] flex  flex-col ">
         <h3 className="text-[rgba(51,55,64,1)] font-bold text-2xl my-10">
          Add Address
        </h3>
        <form className="flex flex-col gap-8 mt-10 mb-28">
            <div className="flex justify-between gap-6 lg:gap-12 flex-col lg:flex-row">
          <input
            type="text"
            placeholder="Full name"
            className="outline-none border-2 text-[12px] text-[rgba(51,55,64,1)] rounded-[80px] w-full px-4 py-4"
          />
          <input
            type="number"
            placeholder="Phone Number"
            className="outline-none border-2 text-[12px] text-[rgba(51,55,64,1)] rounded-[80px] w-full px-4 py-4"
          />
        </div>
        {/* STATE + CITY */}
        <div className="flex justify-between gap-6 lg:gap-12 flex-col lg:flex-row">
          {/* STATE DROPDOWN */}
          <div className="relative w-full">
            <input
              placeholder="State"
              className="cursor-pointer outline-none bg-[rgba(244,244,244,1)] text-[12px] text-[rgba(51,55,64,1)] rounded-[80px] w-full px-4 py-4"
            />
            <MdKeyboardArrowDown
              size={22}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
            />
          </div>
          <div className="relative w-full">
            <input
              placeholder="City"
              className="cursor-pointer outline-none bg-[rgba(244,244,244,1)] text-[12px] text-[rgba(51,55,64,1)] rounded-[80px] w-full px-4 py-4"
            />
            <MdKeyboardArrowDown
              size={22}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
            />
          </div>
        </div>
        {/* STREET + ZIP */}
        <div className="flex justify-between gap-12 flex-col lg:flex-row">
          {/* STREET DROPDOWN */}
          <div className="relative w-full">
            <input
              placeholder="Street"
              className="cursor-pointer outline-none bg-[rgba(244,244,244,1)] text-[12px] text-[rgba(51,55,64,1)] rounded-[80px] w-full px-4 py-4"
            />
            <MdKeyboardArrowDown
              size={22}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
            />
          </div>

          <input
            type="text"
            placeholder="Zip Code"
            className="outline-none border-2 text-[12px] text-[rgba(51,55,64,1)] rounded-[80px] w-full px-4 py-4"
          />
        </div>
        <div className="flex items-center justify-center">
            <button className="bg-[rgba(255,191,61,1)] text-white px-30 py-3 uppercase rounded-4xl font-bold w-fit mt-10">Add Address</button>
        </div>
        </form>
       </div>
      </div>
    </div>
  );
};

export default AnotherAddress;
