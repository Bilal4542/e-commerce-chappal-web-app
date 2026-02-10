import React, { useState } from "react";
import img from "../assets/imgtitle5.png";
import { MdKeyboardArrowDown } from "react-icons/md";

const states = ["Punjab", "Sindh", "KPK", "Balochistan"];
const cities = ["Peshawar", "Lahore", "Karachi", "Islamabad"];
const streets = ["Street 1", "Street 2", "Street 3", "Street 4"];
const payments = ["Easy Paisa/Jazz Cash", "Cash on Delivery", "Debit Card",]

const Checkout = () => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [payment, setPayment] = useState("")

  const [openState, setOpenState] = useState(false);
  const [openCity, setOpenCity] = useState(false);
  const [openStreet, setOpenStreet] = useState(false);
  const [openPayment, setOpenPayment] = useState(false);

  return (
    <>
      <h1 className="font-bold text-4xl text-center uppercase text-[rgba(51,55,64,1)] my-10">
        Checkout
      </h1>

      <h2 className="px-5 lg:px-20 font-bold mb-8 text-[24px] text-[rgba(51,55,64,1)]">
        Address
      </h2>

      <div className="flex items-center justify-center">
        <div className="w-[90%] flex justify-center flex-col lg:flex-row">
          {/* LEFT SIDE */}
          <div className="lg:w-[70%] lg:border-r-2 lg:pr-20">
            <form className="flex flex-col justify-center gap-8">
              {/* EMAIL */}
              <div className="w-full flex flex-col gap-4">
                <label className="text-[14px] font-bold text-[rgba(51,55,64,1)] ml-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="outline-none border-2 text-[12px] text-[rgba(51,55,64,1)] rounded-[80px] w-full px-4 py-4"
                />
              </div>

              {/* NAME + PHONE */}
              <div className="flex flex-col gap-8">
                <label className="text-[14px] font-bold text-[rgba(51,55,64,1)] ml-2">
                  Address
                </label>

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
                      readOnly
                      value={state}
                      onClick={() => {
                        setOpenState(!openState);
                      }}
                      placeholder="State"
                      className="cursor-pointer outline-none bg-[rgba(244,244,244,1)] text-[12px] text-[rgba(51,55,64,1)] rounded-[80px] w-full px-4 py-4"
                    />
                    <MdKeyboardArrowDown
                      size={22}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                    />
                    {openState && (
                      <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-xl mt-2 z-20 overflow-hidden">
                        {states.map((item) => (
                          <p
                            key={item}
                            onClick={() => {
                              setState(item);
                              setOpenState(false);
                            }}
                            className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* CITY DROPDOWN */}
                  <div className="relative w-full">
                    <input
                      readOnly
                      value={city}
                      onClick={() => {
                        setOpenCity(!openCity);
                      }}
                      placeholder="City"
                      className="cursor-pointer outline-none bg-[rgba(244,244,244,1)] text-[12px] text-[rgba(51,55,64,1)] rounded-[80px] w-full px-4 py-4"
                    />
                    <MdKeyboardArrowDown
                      size={22}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                    />
                    {openCity && (
                      <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-xl mt-2 z-20 overflow-hidden">
                        {cities.map((item) => (
                          <p
                            key={item}
                            onClick={() => {
                              setCity(item);
                              setOpenCity(false);
                            }}
                            className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* STREET + ZIP */}
                <div className="flex justify-between gap-12 flex-col lg:flex-row">
                  {/* STREET DROPDOWN */}
                  <div className="relative w-full">
                    <input
                      readOnly
                      value={street}
                      onClick={() => {
                        setOpenStreet(!openStreet);
                      }}
                      placeholder="Street"
                      className="cursor-pointer outline-none bg-[rgba(244,244,244,1)] text-[12px] text-[rgba(51,55,64,1)] rounded-[80px] w-full px-4 py-4"
                    />
                    <MdKeyboardArrowDown
                      size={22}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                    />
                    {openStreet && (
                      <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-xl mt-2 z-20 overflow-hidden">
                        {streets.map((item) => (
                          <p
                            key={item}
                            onClick={() => {
                              setStreet(item);
                              setOpenStreet(false);
                            }}
                            className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>

                  <input
                    type="text"
                    placeholder="Zip Code"
                    className="outline-none border-2 text-[12px] text-[rgba(51,55,64,1)] rounded-[80px] w-full px-4 py-4"
                  />
                  
                </div>
              </div>

              {/* PAYMENT */}
              <h2 className="font-bold text-[24px] text-[rgba(51,55,64,1)]">
                Payment
              </h2>

              <div className="w-full flex flex-col gap-4 my-6">
                <label className="text-[14px] font-bold text-[rgba(51,55,64,1)] ml-2">
                  Payment Method
                </label>
                <div className="relative w-full">
                  <input
                  readOnly
                  value={payment}
                  onClick={()=>setOpenPayment(!openPayment)}
                  className="outline-none bg-[rgba(244,244,244,1)] text-[12px] text-[rgba(51,55,64,1)] rounded-[80px] w-full px-4 py-4 cursor-pointer"
                  placeholder="Cash on Delivery"
                />
                 <MdKeyboardArrowDown
                      size={22}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                    />
                    {openPayment && (
                       <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-xl mt-2 z-20 overflow-hidden">
                        {payments.map((item)=>(
                          <p onClick={() => {
                              setPayment(item);
                              setOpenPayment(false);
                            }}
                            className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">{item}</p>
                        ))}
                       </div>
                    )}
                </div>
              </div>
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:w-[30%] lg:pl-7">
            <h1 className="font-bold text-2xl uppercase text-[rgba(51,55,64,1)]">
              Order Summary
            </h1>

            <h2 className="font-bold text-[16px] my-2 text-[rgba(51,55,64,1)]">
              Items
            </h2>

            <div className="">
                <div className="flex gap-6 items-center my-3">
                <div className="bg-[rgba(47,47,47,0.1)] rounded-3xl flex items-center justify-center w-[30%]">
                  <img src={img} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[rgba(47,47,47,1)] text-[10px] uppercase">
                    chappal
                  </p>
                  <h1 className="font-bold text-[10px] uppercase">
                    Denim Peshawari Chappal (NDL <br /> x KP Shop Collaboration)
                  </h1>
                  <p className="text-[10px] uppercase">
                    <span>Size: </span>
                    <span className="font-bold">38</span>
                  </p>
                  <p className="text-[10px] uppercase">
                    <span>Color: </span>
                    <span>khaki</span>
                  </p>
                  <h1 className="font-bold text-[10px] uppercase">Rs. 3,200</h1>
                </div>
              </div>
                <div className="flex gap-6 items-center my-3">
                <div className="bg-[rgba(47,47,47,0.1)] rounded-3xl flex items-center justify-center w-[30%]">
                  <img src={img} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[rgba(47,47,47,1)] text-[10px] uppercase">
                    chappal
                  </p>
                  <h1 className="font-bold text-[10px] uppercase">
                    Denim Peshawari Chappal (NDL <br /> x KP Shop Collaboration)
                  </h1>
                  <p className="text-[10px] uppercase">
                    <span>Size: </span>
                    <span className="font-bold">38</span>
                  </p>
                  <p className="text-[10px] uppercase">
                    <span>Color: </span>
                    <span>khaki</span>
                  </p>
                  <h1 className="font-bold text-[10px] uppercase">Rs. 3,200</h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 my-10">
              <p className="flex items-center justify-between">
                <span className="text-[18px] text-[rgba(51,55,64,1)]">
                  Subtotal
                </span>
                <span className="text-[20px] font-bold text-[rgba(51,55,64,1)]">
                  Rs. 15,000
                </span>
              </p>
              <p className="flex items-center justify-between">
                <span className="text-[18px] text-[rgba(51,55,64,1)]">
                  Shipping Charges
                </span>
                <span className="text-[20px] font-bold text-[rgba(51,55,64,1)]">
                  Rs. 200
                </span>
              </p>
              <p className="flex items-center justify-between">
                <span className="text-[18px] text-[rgba(51,55,64,1)]">
                  Discount
                </span>
                <span className="text-[20px] font-bold text-[rgba(51,55,64,1)]">
                  Rs. 120
                </span>
              </p>
              <p className="flex items-center justify-between">
                <span className="text-[20px] font-bold text-[rgba(51,55,64,1)]">
                  Total
                </span>
                <span className="text-[rgba(255,191,61,1)] text-[24px]">
                  Rs. 15,080
                </span>
              </p>

              <div className="h-1 bg-[rgba(51,55,64,1)] w-[90%] m-auto rounded-full my-3"></div>
              <p className="text-[14px] text-[rgba(51,55,64,1)] font-bold">
                Arriving Time: 24 Hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
