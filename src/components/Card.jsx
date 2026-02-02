import React from "react";
import { FaStar } from "react-icons/fa";
import { BsBasket3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";

const Card = ({ image, desc, oldPrice, salePrice, rating, ratingNum }) => {
  return (
    <div className="group flex flex-col items-center justify-center w-[95%] my-2">
      <div className="bg-[rgba(47,47,47,0.1)] relative  w-full  h-80 rounded-4xl p-2 flex items-center justify-center">
        <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100"><CiHeart size={30}  className="text-[rgba(255,191,61,1)]"/></div>
        <img
          src={image}
          alt=""
          className="transition-all ease-in-out duration-300 hover:scale-105"
        />
        <button
          className="absolute bottom-4 left-12 
          bg-[rgba(255,191,61,1)] text-white py-3 w-[70%] rounded-full 
          flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100
          translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg"
        >
          <BsBasket3 />
          ADD TO CART
        </button>
      </div>
      <div className="px-2 mt-1 uppercase">
        <p className="text-[rgba(47,47,47,1)]">{desc}</p>
        <div className="flex items-center justify-between mt-1">
          <p className="flex items-center gap-2 font-bold">
            <span className="text-[rgba(47,47,47,0.7)] line-through decoration-red-500 decoration-2">
              {oldPrice}
            </span>
            <span>{salePrice}</span>
          </p>
          <p className="flex items-center gap-1 pr-4">
            <span className="text-[rgba(255,191,61,1)]">
              <FaStar />
            </span>
            <span className="font-bold">{rating}</span>
            <sub className="">({ratingNum})</sub>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;

