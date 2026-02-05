import React from "react";
import img1 from "../assets/imgtitle5.png";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Cart = () => {
  return (
    <>
      <h1 className="font-bold text-4xl text-center uppercase text-[rgba(51,55,64,1)] my-10">
        Cart
      </h1>
      <div className="flex items-center justify-center">
        <div className="w-[90%] flex  justify-center flex-col">
            <h2 className="font-bold mb-8 text-[24px] text-[rgba(51,55,64,1)]">
              03 items in your cart
            </h2>
        <div className="flex flex-col lg:flex-row my-10">
             <div className="w-full lg:w-[70%] lg:border-r-2 lg:pr-10 ">
             <div className="">
            <div className="flex flex-col gap-10">
                <div className="grid grid-cols-4 lg:grid-cols-[2fr_1fr_1fr_1fr] font-bold mb-4 text-[rgba(51,55,64,1)] text-[18px]">
              <h3>Products</h3>
              <h3>Price</h3>
              <h3>Quantity</h3>
              <h3>Total Price</h3>
            </div>
<div className="">
                <div className="flex gap-3">
              <div className="bg-[rgba(47,47,47,0.1)] w-fit rounded-3xl flex items-center justify-center">
                <img src={img1} alt="" width={100} />
              </div>
              <div className="lg:mt-4 flex flex-col gap-1 lg:gap-2">
                <p className="text-[rgba(47,47,47,1)] text-[10px] uppercase">chappal</p>
                <h1 className="font-bold text-[10px] uppercase">Denim Peshawari Chappal (NDL <br /> x KP Shop Collaboration)</h1>
                <p className="text-[10px] uppercase"><span>Size: </span><span className="font-bold">38</span></p>
                <p className="text-[10px] uppercase"><span>Color: </span><span>khaki</span></p>
              </div>
                <div className="flex items-center justify-center">
                    <p className="text-[16px] lg:ml-9 font-bold ">Rs. 3,200</p>
                    <div className="flex items-center gap-2 lg:ml-26 flex-col lg:flex-row">
                        <button className="border p-1 rounded-lg text-sm font-bold"> <FaPlus/> </button>
                        <span> 02 </span>
                        <button className="border p-1 rounded-lg text-sm"> <FaMinus/> </button>
                    </div>
                    <div className="">
                        <p className="text-[rgba(255,191,61,1)] font-bold text-[16px] lg:ml-24">Rs. 6,400</p>
                    </div>
                </div>
            </div>
                <div className="h-[2px] rounded-full my-10 bg-gray-600"></div>
</div>
            </div>
            
          </div>
         </div>
         <div className="w-[30%] pl-10">
            <div className="">
                <h2 className="font-bold mb-8 text-[24px] text-[rgba(51,55,64,1)]">Coupon Code</h2>
                <div className="flex flex-col gap-4">
                    <button className="py-3 border rounded-[80px]">Coupon Code</button>
                    <button className="py-3 border rounded-[80px] bg-[rgba(255,191,61,1)] text-white">State</button>
                </div>
                <div className="">
                    <h1 className="font-bold mb-8 text-[24px] text-[rgba(51,55,64,1)] mt-10">Total</h1>
                    <div className="flex flex-col gap-3">
                        <p className="flex items-center justify-between"><span className="text-[18px] text-[rgba(51,55,64,1)]">Subtotal</span><span className="text-[20px] font-bold text-[rgba(51,55,64,1)]">Rs. 15,000</span></p>
                        <p className="flex items-center justify-between"><span className="text-[18px] text-[rgba(51,55,64,1)]">Shipping Charges</span><span className="text-[20px] font-bold text-[rgba(51,55,64,1)]">Rs. 200</span></p>
                        <p className="flex items-center justify-between"><span className="text-[18px] text-[rgba(51,55,64,1)]">Discount</span><span className="text-[20px] font-bold text-[rgba(51,55,64,1)]">Rs. 120</span></p>
                        <p className="flex items-center justify-between"><span className="text-[20px] font-bold text-[rgba(51,55,64,1)]">Total</span><span className="text-[rgba(255,191,61,1)] text-[24px]">Rs. 15,080</span></p>
                    </div>
                </div>
                <div className="flex flex-col my-10">
                    <button className="py-3 border rounded-[80px] bg-[rgba(255,191,61,1)] text-white">Checkout</button>
                </div>
            </div>
         </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
