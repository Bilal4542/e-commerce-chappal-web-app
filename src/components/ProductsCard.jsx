import React from "react";
import Card from "./Card";
import { NavLink } from "react-router-dom";

const ProductsCard = ({ products }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between w-[90%] mx-auto my-10">
        <div className=""></div>
        <h1 className="font-bold text-4xl uppercase text-[rgba(51,55,64,1)]">
          Products
        </h1>
       <div className=" flex gap-3">
         <NavLink
          to=''
          className={({ isActive }) =>`uppercase text-[20px] font-semibold transition ${isActive ? "text-[rgba(255,191,61,1)]" : "hover:text-[rgba(255,191,61,1)]"}`}
        >
          icon
        </NavLink>
        <NavLink
          to={'/filter'}
          className={({ isActive }) =>`uppercase text-[20px] font-semibold transition ${isActive ? "text-[rgba(255,191,61,1)]" : "hover:text-[rgba(255,191,61,1)]"}`}
        >
          filter
        </NavLink>
       </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
          {products.map((item) => {
            return (
              <div className="">
                <Card
                  image={item.image}
                  desc={item.desc}
                  oldPrice={item.oldPrice}
                  salePrice={item.salePrice}
                  rating={item.rating}
                  ratingNum={item.ratingNum}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
