import React, { useEffect, useState } from "react";
import img from "../assets/image.png";
import { FaHeart } from "react-icons/fa6";
import axios from "axios";
import { useParams } from "react-router-dom";
import products from "../arrays/products";

const IndividualProduct = () => {
    const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) return <p>Product not found</p>;
  return (
    <>
      <div className="flex items-center justify-center my-20">
        <div className="w-[90%] flex items-center justify-center gap-10">
          <div className="bg-[rgba(235,235,235,1)] w-[50%] h-175 flex items-center justify-center rounded-[80px] relative">
            <img src={product.image} alt="" className="w-[90%]" />
            <FaHeart
              size={40}
              className="text-[rgba(255,191,61,1)] absolute top-10 right-20"
            />
          </div>
          <div className="w-[50%] flex flex-col gap-6">
            <h1 className="text-2xl uppercase font-bold text-[rgba(47,47,47,1)]">
              Denim Peshawari Chappal (NDL x KP Shop Collaboration)
            </h1>
            <p className="flex gap-1 items-center">
              <span>⭐</span>
              <span className="text-[18px]">4.8</span>
              <sub>(23)</sub>
            </p>
            <p className="flex gap-3 items-center font-bold">
              <span className="line-through decoration-red-500 decoration-2 text-[rgba(47,47,47,0.7)]">
                2400
              </span>
              <span>2200</span>
            </p>
            <h1 className="text-[30px] uppercase font-bold">Size</h1>
            <p className="text-[26px] font-bold">12</p>
            <h1 className="text-[30px] uppercase font-bold">color</h1>
            <p className="text-[26px] font-bold">Purple</p>
            <div className=" flex items-center  gap-4 ">
              <button className="uppercase py-5 px-10 text-[16px] bg-[rgba(47,47,47,1)] text-white font-bold rounded-full cursor-pointer my-2">
                Add to cart
              </button>
              <button className="uppercase py-5 px-10 text-[16px]  rounded-full bg-[rgba(255,191,61,1)] cursor-pointer my-2 font-bold">
                buy now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-22 my-20 flex flex-col gap-6">
        <h1 className="text-[32px] uppercase font-bold">Description</h1>
        <p className="text-[16px] uppercase font-semibold">
          Lorem ipsum dolor sit amet consectetur. At in penatibus a rhoncus
          ullamcorper sit cursus pellentesque. Feugiat maecenas mus mollis quis
          in nullam scelerisque sagittis eleifend. Amet amet convallis in eu
          mollis. Enim malesuada neque habitant in scelerisque ultrices id
          pharetra dui erat. Nec tempor ut imperdiet varius condimentum
          tristique urna velit. At eros id nec faucibus facilisi bibendum est
          sollicitudin. Ipsum in ac ac fermentum at et. Facilisi sit blandit
          nisi non ipsum. In dolor purus aliquam ac libero. Viverra velit purus
          condimentum lacus. Tristique dolor quisque eget fames senectus gravida
          non. Dolor Cursus amet tincidunt fames dictumst arcu aliquam commodo
          auctor. Tincidunt elementum nulla aliquam nunc eros amet ornare ornare
          dignissim. Lacus id pellentesque euismod arcu diam tortor lectus in
          neque.
        </p>
        <p className="text-[16px] uppercase font-semibold">
          Lorem ipsum dolor sit amet consectetur. At in penatibus a rhoncus
          ullamcorper sit cursus pellentesque. Feugiat id nec am mus mollis quis
          in nullam scelerisque sagittis eleifend. Amet amet convallis in eu
          mollis. Enim malesuada neque In dolor in scelerisque ultrices id
          pharetra dui erat. Nec tempor ut imperdiet varius condimentum
          tristique urna velit. At dolor ame faucibus facilisi bibendum est
          sollicitudin. Ipsum in ac ac fermentum at et. Facilisi sit blandit
          nisi non ipsum. In dolorpurus aliquam ac libero. Viverra velit purus
          condimentum lacus.
        </p>
      </div>
    </>
  );
};

export default IndividualProduct;
