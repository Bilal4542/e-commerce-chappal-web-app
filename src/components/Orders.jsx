import React, { useState } from "react";
import img from "../assets/imgtitle5.png";
import { Link } from "react-router-dom";

const Orders = () => {
  const [activeTab, setActiveTab] = useState("pending");
  return (
    <div>
      <h1 className="font-bold text-4xl uppercase text-[rgba(51,55,64,1)] text-center my-10">
        Orders
      </h1>
      <div className="flex items-center justify-center">
        <div className="w-[90%] flex justify-center flex-col">
          <div className="flex gap-24 items-center border-b-2 w-full pb-2">
            <button
              onClick={() => setActiveTab("pending")}
              className={`text-2xl cursor-pointer font-bold ${activeTab === "pending" ? "text-[rgba(255,191,61,1)] uppercase" : "text-black"} `}
            >
              Pending
            </button>
            <button
              onClick={() => setActiveTab("completed")}
              className={`text-2xl cursor-pointer  ${activeTab === "completed" ? "text-[rgba(255,191,61,1)] uppercase" : "text-black"} font-bold`}
            >
              Completed
            </button>
            <button
              onClick={() => setActiveTab("cancelled")}
              className={`text-2xl cursor-pointer  ${activeTab === "cancelled" ? "text-[rgba(255,191,61,1)] uppercase" : "text-black"} font-bold`}
            >
              Cancelled
            </button>
          </div>
          {activeTab === "pending" && (
            <div className="main my-10 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
              <div className="box bg-[rgba(54,56,68,1)] flex items-center p-5 rounded-[40px] w-full ">
                <div className="bg-[rgba(255,255,255,0.1)] rounded-4xl w-[20%]">
                  <img src={img} alt="" />
                </div>
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col gap-2 pl-2">
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px]">
                      chappal
                    </p>
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px] font-bold">
                      Denim Peshawari Chappal (NDL x KP Shop Collaboration)
                    </p>
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px]">
                      Size: 38
                    </p>
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px]">
                      Color: khaki
                    </p>
                  </div>
                  <div className="justify-end">
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[18px] font-semibold">
                      Rs. 3,200
                    </p>
                  </div>
                </div>
              </div>
              <div className="box bg-[rgba(54,56,68,1)] flex items-center p-5 rounded-[40px] w-full">
                <div className="bg-[rgba(255,255,255,0.1)] rounded-4xl w-[20%]">
                  <img src={img} alt="" />
                </div>
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col gap-2 pl-2">
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px]">
                      chappal
                    </p>
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px] font-bold">
                      Denim Peshawari Chappal (NDL x KP Shop Collaboration)
                    </p>
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px]">
                      Size: 38
                    </p>
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px]">
                      Color: khaki
                    </p>
                  </div>
                  <div className="justify-end">
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[18px] font-semibold">
                      Rs. 3,200
                    </p>
                  </div>
                </div>
              </div>
              <div className="box bg-[rgba(54,56,68,1)] flex items-center p-5 rounded-[40px] w-full">
                <div className="bg-[rgba(255,255,255,0.1)] rounded-4xl w-[20%]">
                  <img src={img} alt="" />
                </div>
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col gap-2 pl-2">
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px]">
                      chappal
                    </p>
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px] font-bold">
                      Denim Peshawari Chappal (NDL x KP Shop Collaboration)
                    </p>
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px]">
                      Size: 38
                    </p>
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px]">
                      Color: khaki
                    </p>
                  </div>
                  <div className="justify-end">
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[18px] font-semibold">
                      Rs. 3,200
                    </p>
                  </div>
                </div>
              </div>
              <div className="box bg-[rgba(54,56,68,1)] flex items-center p-5 rounded-[40px] w-full">
                <div className="bg-[rgba(255,255,255,0.1)] rounded-4xl w-[20%]">
                  <img src={img} alt="" />
                </div>
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col gap-2 pl-2">
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px]">
                      chappal
                    </p>
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px] font-bold">
                      Denim Peshawari Chappal (NDL x KP Shop Collaboration)
                    </p>
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px]">
                      Size: 38
                    </p>
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px]">
                      Color: khaki
                    </p>
                  </div>
                  <div className="justify-end">
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[18px] font-semibold">
                      Rs. 3,200
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "completed" && (
            <div className="main my-10 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
              <div className="box bg-[rgba(54,56,68,1)] flex items-center p-5 rounded-[40px] w-full ">
                <div className="bg-[rgba(255,255,255,0.1)] rounded-4xl w-[20%]">
                  <img src={img} alt="" />
                </div>
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col gap-2 pl-2">
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px]">
                      chappal
                    </p>
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px] font-bold">
                      Denim Peshawari Chappal (NDL x KP Shop Collaboration)
                    </p>
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px]">
                      Size: 38
                    </p>
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px]">
                      Color: khaki
                    </p>
                  </div>
                  <div className="flex flex-col items-end w-full gap-3">
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[18px] font-semibold">
                      Rs. 3,200
                    </p>
                    <Link to={'/add-review'} className="bg-[rgba(255,191,61,1)] py-2 px-4 uppercase rounded-[80px] text-white font-bold">
                      Add Review
                    </Link>
                    <Link to={'/details'} className="text-[rgba(255,191,61,1)] py-2 px-4 uppercase rounded-[80px]  bg-white font-bold">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="box bg-[rgba(54,56,68,1)] flex items-center p-5 rounded-[40px] w-full ">
                <div className="bg-[rgba(255,255,255,0.1)] rounded-4xl w-[20%]">
                  <img src={img} alt="" />
                </div>
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col gap-2 pl-2">
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px]">
                      chappal
                    </p>
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px] font-bold">
                      Denim Peshawari Chappal (NDL x KP Shop Collaboration)
                    </p>
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px]">
                      Size: 38
                    </p>
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px]">
                      Color: khaki
                    </p>
                  </div>
                  <div className="flex flex-col items-end w-full gap-3">
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[18px] font-semibold">
                      Rs. 3,200
                    </p>
                    <Link className="bg-[rgba(255,191,61,1)] py-2 px-4 uppercase rounded-[80px] text-white font-bold">
                      Add Review
                    </Link>
                    <Link className="text-[rgba(255,191,61,1)] py-2 px-4 uppercase rounded-[80px]  bg-white font-bold">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="box bg-[rgba(54,56,68,1)] flex items-center p-5 rounded-[40px] w-full ">
                <div className="bg-[rgba(255,255,255,0.1)] rounded-4xl w-[20%]">
                  <img src={img} alt="" />
                </div>
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col gap-2 pl-2">
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px]">
                      chappal
                    </p>
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px] font-bold">
                      Denim Peshawari Chappal (NDL x KP Shop Collaboration)
                    </p>
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px]">
                      Size: 38
                    </p>
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px]">
                      Color: khaki
                    </p>
                  </div>
                  <div className="flex flex-col items-end w-full gap-3">
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[18px] font-semibold">
                      Rs. 3,200
                    </p>
                    <Link className="bg-[rgba(255,191,61,1)] py-2 px-4 uppercase rounded-[80px] text-white font-bold">
                      Add Review
                    </Link>
                    <Link className="text-[rgba(255,191,61,1)] py-2 px-4 uppercase rounded-[80px]  bg-white font-bold">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "cancelled" && (
            <div className="main my-10 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
              <div className="box bg-[rgba(54,56,68,1)] flex items-center p-5 rounded-[40px] w-full ">
                <div className="bg-[rgba(255,255,255,0.1)] rounded-4xl w-[20%]">
                  <img src={img} alt="" />
                </div>
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col gap-2 pl-2">
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px]">
                      chappal
                    </p>
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px] font-bold">
                      Denim Peshawari Chappal (NDL x KP Shop Collaboration)
                    </p>
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px]">
                      Size: 38
                    </p>
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px]">
                      Color: khaki
                    </p>
                  </div>
                  <div className="flex flex-col items-end w-full gap-3">
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[18px] font-semibold">
                      Rs. 3,200
                    </p>
                    <Link to={'/details'} className="bg-[rgba(255,191,61,1)] py-2 px-4 uppercase rounded-[80px] text-white font-bold">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="box bg-[rgba(54,56,68,1)] flex items-center p-5 rounded-[40px] w-full ">
                <div className="bg-[rgba(255,255,255,0.1)] rounded-4xl w-[20%]">
                  <img src={img} alt="" />
                </div>
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col gap-2 pl-2">
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px]">
                      chappal
                    </p>
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px] font-bold">
                      Denim Peshawari Chappal (NDL x KP Shop Collaboration)
                    </p>
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px]">
                      Size: 38
                    </p>
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px]">
                      Color: khaki
                    </p>
                  </div>
                  <div className="flex flex-col items-end w-full gap-3">
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[18px] font-semibold">
                      Rs. 3,200
                    </p>
                    <Link className="bg-[rgba(255,191,61,1)] py-2 px-4 uppercase rounded-[80px] text-white font-bold">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="box bg-[rgba(54,56,68,1)] flex items-center p-5 rounded-[40px] w-full ">
                <div className="bg-[rgba(255,255,255,0.1)] rounded-4xl w-[20%]">
                  <img src={img} alt="" />
                </div>
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col gap-2 pl-2">
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px]">
                      chappal
                    </p>
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px] font-bold">
                      Denim Peshawari Chappal (NDL x KP Shop Collaboration)
                    </p>
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px]">
                      Size: 38
                    </p>
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[10px]">
                      Color: khaki
                    </p>
                  </div>
                  <div className="flex flex-col items-end w-full gap-3">
                    <p className="uppercase text-[rgba(255,255,255,1)] text-[18px] font-semibold">
                      Rs. 3,200
                    </p>
                    <Link className="bg-[rgba(255,191,61,1)] py-2 px-4 uppercase rounded-[80px] text-white font-bold">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
