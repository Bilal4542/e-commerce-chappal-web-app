import React from "react";
import img from "../assets/imgtitle5.png";
import profile from "../assets/profile.png";

const Details = () => {
  return (
    <div className="my-20">
      <h1 className="font-bold text-4xl uppercase text-[rgba(51,55,64,1)] text-center my-10">
        Details
      </h1>
      <div className="flex items-center justify-center my-10">
        <div className="flex justify-center w-[90%]">
          <div className="left border-r-2 w-[50%]">
            <h2 className="text-2xl font-bold uppercase">Order</h2>
            <div className="flex justify-between items-center my-5">
              <div className=" flex flex-col gap-3 font-bold">
                <p>Order ID: DFF45678998</p>
                <p>Order at: Monday at 14:48 | 02 / 08 / 2024</p>
                <p>Price: Rs. 3,200</p>
              </div>
              <div className="">
                <p className="text-[rgba(255,191,61,1)] uppercase font-bold text-[20px] pr-6">
                  Completed
                </p>
              </div>
            </div>
            <h2 className="text-2xl font-bold uppercase my-10">
              Buyer Details
            </h2>
            <div className="">
              <div className="flex items-center gap-3">
                <img src={profile} alt="" />
                <div className="">
                  <p className="text-[24px] font-bold">Masooma</p>
                  <p className="text-[16px]">realmasooma***@gmail.com</p>
                </div>
              </div>
              <div className="my-3">
                <p className="text-[14px]">Shipping Address</p>
                <p className="text-[20px] font-bold">Tehkal bala, Peshawar</p>
              </div>
            </div>
          </div>
          <div className="right w-[50%] pl-10">
            <h1 className="text-2xl font-bold uppercase">Products</h1>
            <div className="flex gap-6 items-center my-3">
              <div className="bg-[rgba(47,47,47,0.1)] rounded-3xl flex items-center justify-center w-[30%]">
                <img src={img} alt="" />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[rgba(47,47,47,1)] text-[14px] uppercase">
                  chappal
                </p>
                <h1 className="font-bold text-[16px] uppercase">
                  Denim Peshawari Chappal (NDL <br /> x KP Shop Collaboration)
                </h1>
                <p className="text-[14px] uppercase">
                  <span>Size: </span>
                  <span className="font-bold">38</span>
                </p>
                <p className="text-[14px] uppercase">
                  <span>Color: </span>
                  <span>khaki</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
